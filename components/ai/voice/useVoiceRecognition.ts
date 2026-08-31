'use client'

import {
  createSpeechRecognitionProvider,
  isVoiceInputSupported,
  VOICE_ERROR_MESSAGES,
} from '@/lib/voice'
import type { SpeechRecognitionErrorCode, SpeechRecognitionProvider } from '@/lib/voice'
import { useCallback, useEffect, useRef, useState } from 'react'

type UseVoiceRecognitionOptions = {
  onFinal: (transcript: string) => void
  onError?: (code: SpeechRecognitionErrorCode, message: string) => void
  onEnded?: () => void
}

export function useVoiceRecognition({ onFinal, onError, onEnded }: UseVoiceRecognitionOptions) {
  const [interimTranscript, setInterimTranscript] = useState('')
  const providerRef = useRef<SpeechRecognitionProvider | null>(null)
  const listeningRef = useRef(false)
  const onFinalRef = useRef(onFinal)
  const onErrorRef = useRef(onError)
  const onEndedRef = useRef(onEnded)

  useEffect(() => {
    onFinalRef.current = onFinal
  }, [onFinal])

  useEffect(() => {
    onErrorRef.current = onError
  }, [onError])

  useEffect(() => {
    onEndedRef.current = onEnded
  }, [onEnded])

  useEffect(() => {
    providerRef.current = createSpeechRecognitionProvider()
    return () => {
      listeningRef.current = false
      providerRef.current?.abort()
    }
  }, [])

  const abort = useCallback(() => {
    listeningRef.current = false
    providerRef.current?.abort()
    setInterimTranscript('')
  }, [])

  const start = useCallback(() => {
    if (providerRef.current?.isActive?.()) {
      return
    }

    if (!providerRef.current) {
      providerRef.current = createSpeechRecognitionProvider()
    }

    const provider = providerRef.current
    if (!provider?.isSupported()) {
      const message = VOICE_ERROR_MESSAGES['not-supported']
      onErrorRef.current?.('not-supported', message)
      return
    }

    setInterimTranscript('')
    listeningRef.current = true

    void provider.start({
      onStart: () => {
        listeningRef.current = true
      },
      onInterim: (transcript) => {
        setInterimTranscript(transcript)
      },
      onFinal: (transcript) => {
        listeningRef.current = false
        setInterimTranscript('')
        onFinalRef.current(transcript)
      },
      onError: (code, raw) => {
        listeningRef.current = false
        setInterimTranscript('')
        if (code === 'aborted') return
        onErrorRef.current?.(code, VOICE_ERROR_MESSAGES[code] || raw)
      },
      onEnd: () => {
        listeningRef.current = false
        onEndedRef.current?.()
      },
    })
  }, [])

  return {
    isSupported: isVoiceInputSupported(),
    interimTranscript,
    start,
    abort,
    isListeningRef: listeningRef,
  }
}
