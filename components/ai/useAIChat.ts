'use client'

import { isSeedWelcomeMessage, MAX_API_HISTORY_MESSAGES, WELCOME_MESSAGE } from '@/lib/system-prompt'
import { useCallback, useRef, useState } from 'react'
import type { ChatMessage, ChatStatus, SendMessageOptions } from './types'

function createMessage(
  role: ChatMessage['role'],
  content: string,
  via?: ChatMessage['via'],
): ChatMessage {
  return {
    id: crypto.randomUUID(),
    role,
    content,
    ...(via ? { via } : {}),
  }
}

function toApiMessages(messages: ChatMessage[]) {
  return messages
    .filter((message) => message.content.trim().length > 0)
    .filter((message) => !isSeedWelcomeMessage(message.content))
    .slice(-MAX_API_HISTORY_MESSAGES)
    .map(({ role, content }) => ({ role, content }))
}

async function streamChatResponse(
  messages: ChatMessage[],
  onDelta: (content: string) => void,
  signal: AbortSignal,
  mode: 'text' | 'voice' = 'text',
) {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: toApiMessages(messages),
      mode,
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

  const consumeLine = (line: string) => {
    if (!line.startsWith('data: ')) return false

    const payload = line.slice(6).trim()
    if (payload === '[DONE]') return true

    try {
      const parsed = JSON.parse(payload) as { content?: string }
      if (parsed.content) {
        onDelta(parsed.content)
      }
    } catch {
      // Ignore malformed stream chunks.
    }

    return false
  }

  while (true) {
    const { done, value } = await reader.read()
    if (value) {
      buffer += decoder.decode(value, { stream: true })
    }

    if (done) {
      buffer += decoder.decode()
    }

    const lines = buffer.split('\n')
    buffer = done ? '' : (lines.pop() ?? '')

    for (const line of lines) {
      if (consumeLine(line)) return
    }

    if (done) {
      if (buffer.trim()) {
        consumeLine(buffer)
      }
      return
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

  const sendMessage = useCallback(async (rawContent: string, options?: SendMessageOptions): Promise<string | null> => {
    const content = rawContent.trim()
    if (!content || inFlightRef.current) return null

    inFlightRef.current = true

    const history = options?.historyOverride ?? messages
    const mode = options?.mode ?? 'text'
    const userMessage = createMessage('user', content, mode === 'voice' ? 'voice' : undefined)
    const assistantMessage = createMessage('assistant', '')
    const nextMessages = [...history, userMessage]

    setMessages([...nextMessages, assistantMessage])
    setInput('')
    setErrorMessage('')
    setStatus('loading')

    try {
      let streamedContent = ''

      await streamChatResponse(nextMessages, (delta) => {
        if (streamedContent.length === 0) {
          setStatus('streaming')
        }

        streamedContent += delta
        options?.onDelta?.(delta)
        setMessages((current) =>
          current.map((message) =>
            message.id === assistantMessage.id
              ? { ...message, content: streamedContent }
              : message,
          ),
        )
      }, options?.signal ?? new AbortController().signal, mode)

      if (!streamedContent.trim()) {
        throw new Error('The assistant returned an empty response.')
      }

      setStatus('idle')
      return streamedContent
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        setMessages((current) => current.filter((message) => message.id !== assistantMessage.id))
        setStatus('idle')
        return streamedContent.trim() || null
      }

      setMessages((current) => current.filter((message) => message.id !== assistantMessage.id))
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Unable to get a response. Please try again.',
      )
      return null
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
    await sendMessage(lastUserMessage.content, { historyOverride: trimmedMessages })
  }, [messages, sendMessage])

  const submitInput = useCallback(async () => {
    await sendMessage(input)
  }, [input, sendMessage])

  const isBusy = status === 'loading' || status === 'streaming'
  const lastMessage = messages[messages.length - 1]
  const isWaitingForReply =
    isBusy &&
    (status === 'loading' ||
      (lastMessage?.role === 'assistant' && lastMessage.content.trim().length === 0))

  return {
    messages,
    status,
    errorMessage,
    input,
    setInput,
    setErrorMessage,
    sendMessage,
    submitInput,
    retryLastMessage,
    isBusy,
    showTypingIndicator: isWaitingForReply,
  }
}
