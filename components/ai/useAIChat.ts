'use client'

import { WELCOME_MESSAGE } from '@/lib/system-prompt'
import { useCallback, useRef, useState } from 'react'
import type { ChatMessage, ChatStatus } from './types'

function createMessage(role: ChatMessage['role'], content: string): ChatMessage {
  return {
    id: crypto.randomUUID(),
    role,
    content,
  }
}

async function streamChatResponse(
  messages: ChatMessage[],
  onDelta: (content: string) => void,
  signal: AbortSignal,
) {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: messages.map(({ role, content }) => ({ role, content })),
    }),
    signal,
  })

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as { error?: string } | null
    throw new Error(data?.error ?? 'Unable to get a response. Please try again.')
  }

  if (!response.body) {
    throw new Error('No response stream received.')
  }

  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    buffer += decoder.decode(value, { stream: true })
    const lines = buffer.split('\n')
    buffer = lines.pop() ?? ''

    for (const line of lines) {
      if (!line.startsWith('data: ')) continue

      const payload = line.slice(6).trim()
      if (payload === '[DONE]') return

      try {
        const parsed = JSON.parse(payload) as { content?: string }
        if (parsed.content) {
          onDelta(parsed.content)
        }
      } catch {
        // Ignore malformed stream chunks.
      }
    }
  }
}

export function useAIChat() {
  const inFlightRef = useRef(false)
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    createMessage('assistant', WELCOME_MESSAGE),
  ])
  const [status, setStatus] = useState<ChatStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [input, setInput] = useState('')

  const sendMessage = useCallback(async (rawContent: string, historyOverride?: ChatMessage[]) => {
    const content = rawContent.trim()
    if (!content || inFlightRef.current) return

    inFlightRef.current = true

    const history = historyOverride ?? messages
    const userMessage = createMessage('user', content)
    const assistantMessage = createMessage('assistant', '')
    const nextMessages = [...history, userMessage]

    setMessages([...nextMessages, assistantMessage])
    setInput('')
    setErrorMessage('')
    setStatus('loading')

    try {
      setStatus('streaming')
      let streamedContent = ''

      await streamChatResponse(nextMessages, (delta) => {
        streamedContent += delta
        setMessages((current) =>
          current.map((message) =>
            message.id === assistantMessage.id
              ? { ...message, content: streamedContent }
              : message,
          ),
        )
      }, new AbortController().signal)

      if (!streamedContent.trim()) {
        throw new Error('The assistant returned an empty response.')
      }

      setStatus('idle')
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return
      }

      setMessages((current) => current.filter((message) => message.id !== assistantMessage.id))
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Unable to get a response. Please try again.',
      )
    } finally {
      inFlightRef.current = false
    }
  }, [messages])

  const retryLastMessage = useCallback(async () => {
    const lastUserMessage = [...messages].reverse().find((message) => message.role === 'user')
    if (!lastUserMessage) return

    let trimmedMessages: ChatMessage[] = messages

    for (let index = messages.length - 1; index >= 0; index -= 1) {
      if (messages[index]?.id === lastUserMessage.id) {
        trimmedMessages = messages.slice(0, index)
        break
      }
    }

    setMessages(trimmedMessages)
    setStatus('idle')
    setErrorMessage('')
    await sendMessage(lastUserMessage.content, trimmedMessages)
  }, [messages, sendMessage])

  const submitInput = useCallback(async () => {
    await sendMessage(input)
  }, [input, sendMessage])

  const isBusy = status === 'loading' || status === 'streaming'

  return {
    messages,
    status,
    errorMessage,
    input,
    setInput,
    sendMessage,
    submitInput,
    retryLastMessage,
    isBusy,
    showTypingIndicator: status === 'loading',
  }
}
