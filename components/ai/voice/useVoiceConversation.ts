'use client'

import { VOICE_ERROR_MESSAGES } from '@/lib/voice'
import type { SpeechRecognitionErrorCode, VoiceStatus } from '@/lib/voice'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useSpeechSynthesis } from './useSpeechSynthesis'
import { useVoiceRecognition } from './useVoiceRecognition'

const CONTINUOUS_LISTEN_DELAY_MS = 900

type UseVoiceConversationOptions = {
  sendMessage: (content: string, options?: { mode?: 'text' | 'voice' }) => Promise<string | null>
}

export function useVoiceConversation({ sendMessage }: UseVoiceConversationOptions) {
  const [isVoiceMode, setIsVoiceMode] = useState(false)
  const [status, setStatus] = useState<VoiceStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [userTranscript, setUserTranscript] = useState('')
  const [assistantTranscript, setAssistantTranscript] = useState('')
  const [isContinuous, setIsContinuous] = useState(false)

  const isVoiceModeRef = useRef(false)
  const statusRef = useRef<VoiceStatus>('idle')
  const isContinuousRef = useRef(false)
  const sessionRef = useRef(0)
  const sendMessageRef = useRef(sendMessage)
  const listenTimerRef = useRef<number | null>(null)
  const lastAssistantRef = useRef('')

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

  const { isSupported: ttsSupported, isMuted, speak, cancel: cancelSpeech, toggleMute } =
    useSpeechSynthesis()

  const handleRecognitionError = useCallback(
    (code: SpeechRecognitionErrorCode, message: string) => {
      if (code === 'aborted' || !isVoiceModeRef.current) return

      if (code === 'no-speech') {
        setErrorMessage('')
        return
      }

      setErrorMessage(message || VOICE_ERROR_MESSAGES[code])
      setVoiceStatus('error')
    },
    [setVoiceStatus],
  )

  const startRecognitionRef = useRef<() => void>(() => {})

  const { isSupported, interimTranscript, start, abort } = useVoiceRecognition({
    onFinal: (transcript) => {
      void handleFinalTranscriptRef.current(transcript)
    },
    onError: handleRecognitionError,
    onEnded: () => {
      if (isVoiceModeRef.current && statusRef.current === 'listening') {
        startRecognitionRef.current()
      }
    },
  })

  startRecognitionRef.current = start

  const startListening = useCallback(() => {
    if (!isVoiceModeRef.current) return
    if (
      statusRef.current === 'processing' ||
      statusRef.current === 'speaking' ||
      statusRef.current === 'listening'
    ) {
      return
    }

    clearListenTimer()
    cancelSpeech()
    setErrorMessage('')
    setVoiceStatus('listening')
    start()
  }, [cancelSpeech, clearListenTimer, setVoiceStatus, start])

  const handleFinalTranscript = useCallback(
    async (transcript: string) => {
      if (!isVoiceModeRef.current) return

      const session = sessionRef.current
      const trimmed = transcript.trim()

      if (!trimmed) {
        setVoiceStatus('listening')
        start()
        return
      }

      setUserTranscript(trimmed)
      setVoiceStatus('processing')

      try {
        const reply = await sendMessageRef.current(trimmed, { mode: 'voice' })
        if (!isVoiceModeRef.current || session !== sessionRef.current) return

        if (!reply?.trim()) {
          setErrorMessage("I'm having trouble responding right now. Please try again.")
          setVoiceStatus('error')
          return
        }

        lastAssistantRef.current = reply
        setAssistantTranscript(reply)
        setVoiceStatus('speaking')

        if (ttsSupported) {
          await speak(reply)
        }

        if (!isVoiceModeRef.current || session !== sessionRef.current) return

        setVoiceStatus('idle')

        if (isContinuousRef.current) {
          listenTimerRef.current = window.setTimeout(() => {
            if (isVoiceModeRef.current && session === sessionRef.current) {
              startListening()
            }
          }, CONTINUOUS_LISTEN_DELAY_MS)
        }
      } catch {
        if (!isVoiceModeRef.current || session !== sessionRef.current) return
        setErrorMessage("I'm having trouble responding right now. Please try again.")
        setVoiceStatus('error')
      }
    },
    [setVoiceStatus, speak, start, startListening, ttsSupported],
  )

  const handleFinalTranscriptRef = useRef(handleFinalTranscript)

  useEffect(() => {
    handleFinalTranscriptRef.current = handleFinalTranscript
  }, [handleFinalTranscript])

  const stopVoiceMode = useCallback(() => {
    sessionRef.current += 1
    isVoiceModeRef.current = false
    setIsVoiceMode(false)
    setVoiceStatus('idle')
    setErrorMessage('')
    setUserTranscript('')
    clearListenTimer()
    abort()
    cancelSpeech()
  }, [abort, cancelSpeech, clearListenTimer, setVoiceStatus])

  const startVoiceMode = useCallback(() => {
    sessionRef.current += 1
    isVoiceModeRef.current = true
    setIsVoiceMode(true)
    setErrorMessage('')
    setUserTranscript('')
    setAssistantTranscript('')
    startListening()
  }, [startListening])

  const toggleVoiceMode = useCallback(() => {
    if (isVoiceModeRef.current) {
      stopVoiceMode()
      return
    }
    startVoiceMode()
  }, [startVoiceMode, stopVoiceMode])

  const toggleContinuous = useCallback(() => {
    isContinuousRef.current = !isContinuousRef.current
    setIsContinuous(isContinuousRef.current)
  }, [])

  const replayLastResponse = useCallback(async () => {
    const reply = lastAssistantRef.current
    if (!reply || !isVoiceModeRef.current) return

    clearListenTimer()
    abort()
    setVoiceStatus('speaking')
    await speak(reply)
    if (!isVoiceModeRef.current) return
    setVoiceStatus('idle')
  }, [abort, clearListenTimer, setVoiceStatus, speak])

  const stopSpeaking = useCallback(() => {
    cancelSpeech()
    if (statusRef.current === 'speaking') {
      setVoiceStatus('idle')
    }
  }, [cancelSpeech, setVoiceStatus])

  const handleOrbPress = useCallback(() => {
    const current = statusRef.current
    if (current === 'processing') return
    if (current === 'listening') {
      abort()
      setVoiceStatus('idle')
      return
    }
    if (current === 'speaking') {
      stopSpeaking()
      return
    }
    startListening()
  }, [abort, setVoiceStatus, startListening, stopSpeaking])

  useEffect(() => {
    return () => {
      isVoiceModeRef.current = false
      clearListenTimer()
    }
  }, [clearListenTimer])

  return {
    isSupported,
    isVoiceMode,
    status,
    errorMessage,
    interimTranscript,
    userTranscript,
    assistantTranscript,
    isContinuous,
    isMuted,
    ttsSupported,
    toggleVoiceMode,
    startVoiceMode,
    stopVoiceMode,
    startListening,
    stopListening: abort,
    handleOrbPress,
    toggleMute,
    toggleContinuous,
    replayLastResponse,
    stopSpeaking,
  }
}
