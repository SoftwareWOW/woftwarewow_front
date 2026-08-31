'use client'

import { VOICE_ERROR_MESSAGES } from '@/lib/voice'
import type { SpeechRecognitionErrorCode, VoiceStatus } from '@/lib/voice'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useSpeechSynthesis } from './useSpeechSynthesis'
import { useVoiceRecognition } from './useVoiceRecognition'

const RESTART_LISTEN_DELAY_MS = 400

type UseVoiceConversationOptions = {
  sendMessage: (
    content: string,
    options?: { mode?: 'text' | 'voice'; signal?: AbortSignal },
  ) => Promise<string | null>
}

export function useVoiceConversation({ sendMessage }: UseVoiceConversationOptions) {
  const [isVoiceMode, setIsVoiceMode] = useState(false)
  const [status, setStatus] = useState<VoiceStatus>('ended')
  const [errorMessage, setErrorMessage] = useState('')
  const [userTranscript, setUserTranscript] = useState('')
  const [assistantTranscript, setAssistantTranscript] = useState('')

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

  const { isSupported: ttsSupported, speak, cancel: cancelSpeech } = useSpeechSynthesis()

  const abortChatRequest = useCallback(() => {
    chatAbortRef.current?.abort()
    chatAbortRef.current = null
  }, [])

  const resetPhaseRefs = useCallback(() => {
    isListeningRef.current = false
    isProcessingRef.current = false
    isSpeakingRef.current = false
  }, [])

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

      isProcessingRef.current = true
      isSpeakingRef.current = false
      abort()
      setUserTranscript(trimmed)
      setVoiceStatus('processing')

      abortChatRequest()
      const controller = new AbortController()
      chatAbortRef.current = controller

      try {
        const reply = await sendMessageRef.current(trimmed, {
          mode: 'voice',
          signal: controller.signal,
        })

        if (!isVoiceConversationActiveRef.current || session !== sessionRef.current) return

        if (!reply?.trim()) {
          isProcessingRef.current = false
          setErrorMessage("I'm having trouble responding right now. Please try again.")
          setVoiceStatus('error')
          return
        }

        abort()
        isProcessingRef.current = false
        isSpeakingRef.current = true
        setAssistantTranscript(reply)
        setVoiceStatus('speaking')

        if (ttsSupported) {
          await speak(reply)
        }

        if (!isVoiceConversationActiveRef.current || session !== sessionRef.current) return

        isSpeakingRef.current = false
        networkRetryRef.current = 0
        scheduleListenRestart()
      } catch {
        if (!isVoiceConversationActiveRef.current || session !== sessionRef.current) return
        isProcessingRef.current = false
        isSpeakingRef.current = false
        setErrorMessage("I'm having trouble responding right now. Please try again.")
        setVoiceStatus('error')
      }
    },
    [abort, abortChatRequest, scheduleListenRestart, setVoiceStatus, speak, ttsSupported],
  )

  const handleFinalTranscriptRef = useRef(handleFinalTranscript)

  useEffect(() => {
    handleFinalTranscriptRef.current = handleFinalTranscript
  }, [handleFinalTranscript])

  const stopVoiceMode = useCallback(() => {
    sessionRef.current += 1
    shouldRestartListeningRef.current = false
    isVoiceConversationActiveRef.current = false
    resetPhaseRefs()
    clearListenTimer()
    abortChatRequest()
    abort()
    cancelSpeech()
    setIsVoiceMode(false)
    setVoiceStatus('ended')
    setErrorMessage('')
    setUserTranscript('')
  }, [abort, abortChatRequest, cancelSpeech, clearListenTimer, resetPhaseRefs, setVoiceStatus])

  const startVoiceMode = useCallback(() => {
    sessionRef.current += 1
    shouldRestartListeningRef.current = true
    isVoiceConversationActiveRef.current = true
    resetPhaseRefs()
    networkRetryRef.current = 0
    clearListenTimer()
    abortChatRequest()
    abort()
    cancelSpeech()
    setIsVoiceMode(true)
    setErrorMessage('')
    setUserTranscript('')
    setAssistantTranscript('')
    startListening()
  }, [abort, abortChatRequest, cancelSpeech, clearListenTimer, resetPhaseRefs, startListening])

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

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
      shouldRestartListeningRef.current = false
      isVoiceConversationActiveRef.current = false
      resetPhaseRefs()
      clearListenTimer()
      abortChatRequest()
      abort()
      cancelSpeech()
    }
  }, [abort, abortChatRequest, cancelSpeech, clearListenTimer, resetPhaseRefs])

  return {
    isSupported,
    isVoiceMode,
    status,
    errorMessage,
    interimTranscript,
    userTranscript,
    assistantTranscript,
    startVoiceMode,
    stopVoiceMode,
    startListening,
    handleOrbPress,
  }
}
