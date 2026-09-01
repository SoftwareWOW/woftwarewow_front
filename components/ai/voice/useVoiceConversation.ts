'use client'

import {
  sanitizeVoiceResponseForDisplay,
  splitCompleteSentences,
  VOICE_ERROR_MESSAGES,
} from '@/lib/voice'
import type { SpeechRecognitionErrorCode, VoiceHistoryMessage, VoiceStatus } from '@/lib/voice'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useSpeechSynthesis } from './useSpeechSynthesis'
import { useVoiceRecognition } from './useVoiceRecognition'

const RESTART_LISTEN_DELAY_MS = 400
const WORD_REVEAL_MIN_MS = 90
const WORD_REVEAL_MAX_MS = 360

type UseVoiceConversationOptions = {
  sendMessage: (
    content: string,
    options?: {
      mode?: 'text' | 'voice'
      signal?: AbortSignal
      onDelta?: (delta: string) => void
    },
  ) => Promise<string | null>
  startOnMount?: boolean
}

type SentenceJob = {
  text: string
  revealDone: boolean
  speechDone: boolean
}

function wordRevealDelay(token: string) {
  if (!token.trim()) return 0
  const letters = token.replace(/[^a-zA-Z0-9']/g, '').length
  if (!letters) return 40
  return Math.min(WORD_REVEAL_MAX_MS, Math.max(WORD_REVEAL_MIN_MS, 80 + letters * 26))
}

function splitRevealTokens(text: string) {
  return text.split(/(\s+)/).filter((part) => part.length > 0)
}

export function useVoiceConversation({ sendMessage, startOnMount = false }: UseVoiceConversationOptions) {
  const [isVoiceMode, setIsVoiceMode] = useState(startOnMount)
  const [status, setStatus] = useState<VoiceStatus>('ended')
  const [errorMessage, setErrorMessage] = useState('')
  const [history, setHistory] = useState<VoiceHistoryMessage[]>([])

  const isVoiceConversationActiveRef = useRef(false)
  const isListeningRef = useRef(false)
  const isProcessingRef = useRef(false)
  const isSpeakingRef = useRef(false)
  const shouldRestartListeningRef = useRef(false)
  const statusRef = useRef<VoiceStatus>('ended')
  const sessionRef = useRef(0)
  const sendMessageRef = useRef(sendMessage)
  const listenTimerRef = useRef<number | null>(null)
  const chatAbortRef = useRef<AbortController | null>(null)
  const networkRetryRef = useRef(0)
  const mountedRef = useRef(true)
  const scheduleListenRestartRef = useRef<(delay?: number) => void>(() => {})
  const startListeningRef = useRef<() => void>(() => {})

  const responseStreamActiveRef = useRef(false)
  const networkResponseBufferRef = useRef('')
  const sentenceQueueRef = useRef<string[]>([])
  const currentJobRef = useRef<SentenceJob | null>(null)
  const visibleResponseRef = useRef('')
  const assistantTurnIdRef = useRef<string | null>(null)
  const revealTimerRef = useRef<number | null>(null)

  useEffect(() => {
    sendMessageRef.current = sendMessage
  }, [sendMessage])

  const setVoiceStatus = useCallback((next: VoiceStatus) => {
    statusRef.current = next
    setStatus(next)
  }, [])

  const clearListenTimer = useCallback(() => {
    if (listenTimerRef.current !== null) {
      window.clearTimeout(listenTimerRef.current)
      listenTimerRef.current = null
    }
  }, [])

  const clearRevealTimer = useCallback(() => {
    if (revealTimerRef.current !== null) {
      window.clearTimeout(revealTimerRef.current)
      revealTimerRef.current = null
    }
  }, [])

  const { isSupported: ttsSupported, speak, cancel: cancelSpeech } = useSpeechSynthesis()

  const abortChatRequest = useCallback(() => {
    chatAbortRef.current?.abort()
    chatAbortRef.current = null
  }, [])

  const resetPhaseRefs = useCallback(() => {
    isListeningRef.current = false
    isProcessingRef.current = false
    isSpeakingRef.current = false
    responseStreamActiveRef.current = false
    networkResponseBufferRef.current = ''
    sentenceQueueRef.current = []
    currentJobRef.current = null
    visibleResponseRef.current = ''
    assistantTurnIdRef.current = null
  }, [])

  const resetTurnBuffers = useCallback(() => {
    clearRevealTimer()
    cancelSpeech()
    networkResponseBufferRef.current = ''
    sentenceQueueRef.current = []
    currentJobRef.current = null
    visibleResponseRef.current = ''
    assistantTurnIdRef.current = null
  }, [cancelSpeech, clearRevealTimer])

  const updateVisibleResponse = useCallback((text: string) => {
    visibleResponseRef.current = text
    const turnId = assistantTurnIdRef.current
    if (!turnId) return

    setHistory((current) =>
      current.map((message) =>
        message.id === turnId ? { ...message, content: text } : message,
      ),
    )
  }, [])

  const ensureAssistantTurn = useCallback(() => {
    if (assistantTurnIdRef.current) return

    const id = crypto.randomUUID()
    assistantTurnIdRef.current = id
    setHistory((current) => [...current, { id, role: 'assistant', content: '' }])
  }, [])

  const queueCleanSentence = useCallback((raw: string) => {
    const clean = sanitizeVoiceResponseForDisplay(raw)
    if (!clean) return
    sentenceQueueRef.current.push(clean)
  }, [])

  const finishSpeakingTurn = useCallback((session: number) => {
    if (!mountedRef.current) return
    if (!isVoiceConversationActiveRef.current || session !== sessionRef.current) return
    if (responseStreamActiveRef.current) return
    if (currentJobRef.current || sentenceQueueRef.current.length > 0) return

    const leftover = sanitizeVoiceResponseForDisplay(networkResponseBufferRef.current)
    if (leftover) {
      networkResponseBufferRef.current = ''
      sentenceQueueRef.current.push(leftover)
      processQueueRef.current(session)
      return
    }

    isSpeakingRef.current = false
    isProcessingRef.current = false
    networkRetryRef.current = 0
    scheduleListenRestartRef.current()
  }, [])

  const processQueueRef = useRef<(session: number) => void>(() => {})

  const maybeAdvance = useCallback(
    (session: number) => {
      const job = currentJobRef.current
      if (!job || !job.revealDone || !job.speechDone) return
      currentJobRef.current = null
      processQueueRef.current(session)
    },
    [],
  )

  const startReveal = useCallback(
    (sentence: string, session: number) => {
      const prefix = visibleResponseRef.current
      const separator = prefix && !/\s$/.test(prefix) ? ' ' : ''
      const tokens = splitRevealTokens(sentence)
      let index = 0

      const completeReveal = () => {
        updateVisibleResponse(prefix + separator + sentence)
        if (currentJobRef.current?.text === sentence) {
          currentJobRef.current.revealDone = true
        }
        maybeAdvance(session)
      }

      const tick = () => {
        if (!isVoiceConversationActiveRef.current || session !== sessionRef.current) return
        if (currentJobRef.current?.text !== sentence) return

        if (index >= tokens.length) {
          completeReveal()
          return
        }

        const revealed = tokens.slice(0, index + 1).join('')
        updateVisibleResponse(prefix + separator + revealed)
        const delay = wordRevealDelay(tokens[index] ?? '')
        index += 1

        if (index >= tokens.length) {
          completeReveal()
          return
        }

        revealTimerRef.current = window.setTimeout(tick, delay)
      }

      ensureAssistantTurn()
      tick()
    },
    [ensureAssistantTurn, maybeAdvance, updateVisibleResponse],
  )

  const processQueue = useCallback(
    (session: number) => {
      if (!mountedRef.current) return
      if (!isVoiceConversationActiveRef.current || session !== sessionRef.current) return
      if (currentJobRef.current) return

      const next = sentenceQueueRef.current.shift()
      if (!next) {
        finishSpeakingTurn(session)
        return
      }

      currentJobRef.current = {
        text: next,
        revealDone: false,
        speechDone: false,
      }
      isSpeakingRef.current = true
      isProcessingRef.current = false
      setVoiceStatus('speaking')
      ensureAssistantTurn()
      startReveal(next, session)

      if (!ttsSupported) {
        currentJobRef.current.speechDone = true
        maybeAdvance(session)
        return
      }

      void speak(next, { interrupt: false })
        .catch(() => undefined)
        .finally(() => {
          if (!isVoiceConversationActiveRef.current || session !== sessionRef.current) return
          if (currentJobRef.current?.text !== next) return
          currentJobRef.current.speechDone = true
          maybeAdvance(session)
        })
    },
    [
      ensureAssistantTurn,
      finishSpeakingTurn,
      maybeAdvance,
      setVoiceStatus,
      speak,
      startReveal,
      ttsSupported,
    ],
  )

  processQueueRef.current = processQueue

  const handleStreamDelta = useCallback((delta: string, session: number) => {
    if (!isVoiceConversationActiveRef.current || session !== sessionRef.current) return
    if (!delta) return

    networkResponseBufferRef.current += delta
    const { sentences, rest } = splitCompleteSentences(networkResponseBufferRef.current)
    networkResponseBufferRef.current = rest

    for (const sentence of sentences) {
      queueCleanSentence(sentence)
    }

    processQueueRef.current(session)
  }, [queueCleanSentence])

  const handleRecognitionError = useCallback(
    (code: SpeechRecognitionErrorCode, message: string) => {
      if (!isVoiceConversationActiveRef.current || !mountedRef.current) return
      if (code === 'aborted') return

      isListeningRef.current = false

      if (code === 'no-speech') {
        setErrorMessage('')
        if (shouldRestartListeningRef.current && !isProcessingRef.current && !isSpeakingRef.current) {
          scheduleListenRestartRef.current()
        }
        return
      }

      if (
        code === 'network' &&
        networkRetryRef.current < 1 &&
        shouldRestartListeningRef.current &&
        !isProcessingRef.current &&
        !isSpeakingRef.current
      ) {
        networkRetryRef.current += 1
        scheduleListenRestartRef.current(600)
        return
      }

      setErrorMessage(message || VOICE_ERROR_MESSAGES[code])
      setVoiceStatus('error')
    },
    [setVoiceStatus],
  )

  const { isSupported, interimTranscript, start, abort, isListeningRef: recognitionListeningRef } =
    useVoiceRecognition({
      onFinal: (transcript) => {
        void handleFinalTranscriptRef.current(transcript)
      },
      onError: handleRecognitionError,
      onEnded: () => {
        isListeningRef.current = false
        recognitionListeningRef.current = false

        if (!isVoiceConversationActiveRef.current || !shouldRestartListeningRef.current) return
        if (!mountedRef.current) return
        if (isProcessingRef.current || isSpeakingRef.current) return
        if (statusRef.current === 'error' || statusRef.current === 'ended') return

        scheduleListenRestartRef.current()
      },
    })

  const startListening = useCallback(() => {
    if (!mountedRef.current) return
    if (!isVoiceConversationActiveRef.current || !shouldRestartListeningRef.current) return
    if (isProcessingRef.current || isSpeakingRef.current) return

    clearListenTimer()
    setErrorMessage('')
    isListeningRef.current = true
    setVoiceStatus('listening')
    start()
  }, [clearListenTimer, setVoiceStatus, start])

  startListeningRef.current = startListening

  const scheduleListenRestart = useCallback(
    (delay = RESTART_LISTEN_DELAY_MS) => {
      clearListenTimer()
      if (!mountedRef.current) return
      if (!isVoiceConversationActiveRef.current || !shouldRestartListeningRef.current) return
      if (isProcessingRef.current || isSpeakingRef.current) return

      listenTimerRef.current = window.setTimeout(() => {
        listenTimerRef.current = null
        startListeningRef.current()
      }, delay)
    },
    [clearListenTimer],
  )

  scheduleListenRestartRef.current = scheduleListenRestart

  const handleFinalTranscript = useCallback(
    async (transcript: string) => {
      if (!isVoiceConversationActiveRef.current || !mountedRef.current) return

      const session = sessionRef.current
      const trimmed = transcript.trim()
      isListeningRef.current = false

      if (!trimmed) {
        scheduleListenRestart()
        return
      }

      abort()
      resetTurnBuffers()
      isProcessingRef.current = true
      isSpeakingRef.current = false
      responseStreamActiveRef.current = true
      setHistory((current) => [
        ...current,
        { id: crypto.randomUUID(), role: 'user', content: trimmed },
      ])
      setVoiceStatus('processing')

      abortChatRequest()
      const controller = new AbortController()
      chatAbortRef.current = controller

      try {
        const reply = await sendMessageRef.current(trimmed, {
          mode: 'voice',
          signal: controller.signal,
          onDelta: (delta) => handleStreamDelta(delta, session),
        })

        if (!isVoiceConversationActiveRef.current || session !== sessionRef.current) return

        responseStreamActiveRef.current = false

        const leftover = sanitizeVoiceResponseForDisplay(networkResponseBufferRef.current)
        networkResponseBufferRef.current = ''
        if (leftover) sentenceQueueRef.current.push(leftover)

        if (
          !reply?.trim() &&
          !visibleResponseRef.current &&
          !leftover &&
          sentenceQueueRef.current.length === 0 &&
          !currentJobRef.current
        ) {
          isProcessingRef.current = false
          isSpeakingRef.current = false
          setErrorMessage("I'm having trouble responding right now. Please try again.")
          setVoiceStatus('error')
          return
        }

        processQueueRef.current(session)
      } catch {
        if (!isVoiceConversationActiveRef.current || session !== sessionRef.current) return
        responseStreamActiveRef.current = false
        isProcessingRef.current = false
        isSpeakingRef.current = false
        resetTurnBuffers()
        setErrorMessage("I'm having trouble responding right now. Please try again.")
        setVoiceStatus('error')
      }
    },
    [
      abort,
      abortChatRequest,
      handleStreamDelta,
      resetTurnBuffers,
      scheduleListenRestart,
      setVoiceStatus,
    ],
  )

  const handleFinalTranscriptRef = useRef(handleFinalTranscript)

  useEffect(() => {
    handleFinalTranscriptRef.current = handleFinalTranscript
  }, [handleFinalTranscript])

  const stopVoiceMode = useCallback(() => {
    sessionRef.current += 1
    shouldRestartListeningRef.current = false
    isVoiceConversationActiveRef.current = false
    clearRevealTimer()
    resetPhaseRefs()
    clearListenTimer()
    abortChatRequest()
    abort()
    cancelSpeech()
    setIsVoiceMode(false)
    setVoiceStatus('ended')
    setErrorMessage('')
    setHistory([])
  }, [
    abort,
    abortChatRequest,
    cancelSpeech,
    clearListenTimer,
    clearRevealTimer,
    resetPhaseRefs,
    setVoiceStatus,
  ])

  const startVoiceMode = useCallback(() => {
    sessionRef.current += 1
    shouldRestartListeningRef.current = true
    isVoiceConversationActiveRef.current = true
    clearRevealTimer()
    resetPhaseRefs()
    networkRetryRef.current = 0
    clearListenTimer()
    abortChatRequest()
    abort()
    cancelSpeech()
    setIsVoiceMode(true)
    setErrorMessage('')
    setHistory([])
    startListening()
  }, [
    abort,
    abortChatRequest,
    cancelSpeech,
    clearListenTimer,
    clearRevealTimer,
    resetPhaseRefs,
    startListening,
  ])

  const handleOrbPress = useCallback(() => {
    if (!isVoiceConversationActiveRef.current) return
    if (isProcessingRef.current || isSpeakingRef.current) return
    if (statusRef.current === 'listening' && recognitionListeningRef.current) return

    shouldRestartListeningRef.current = true
    isListeningRef.current = false
    recognitionListeningRef.current = false
    abort()
    startListening()
  }, [abort, recognitionListeningRef, startListening])

  const didAutoStartRef = useRef(false)

  useEffect(() => {
    if (!startOnMount || didAutoStartRef.current) return
    didAutoStartRef.current = true
    startVoiceMode()
  }, [startOnMount, startVoiceMode])

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
      shouldRestartListeningRef.current = false
      isVoiceConversationActiveRef.current = false
      clearRevealTimer()
      resetPhaseRefs()
      clearListenTimer()
      abortChatRequest()
      abort()
      cancelSpeech()
    }
  }, [abort, abortChatRequest, cancelSpeech, clearListenTimer, clearRevealTimer, resetPhaseRefs])

  return {
    isSupported,
    isVoiceMode,
    status,
    errorMessage,
    interimTranscript,
    history,
    startVoiceMode,
    stopVoiceMode,
    startListening,
    handleOrbPress,
  }
}
