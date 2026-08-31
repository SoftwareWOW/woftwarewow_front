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
  const [isListening, setIsListening] = useState(false)
  const [interimTranscript, setInterimTranscript] = useState('')
  const providerRef = useRef<SpeechRecognitionProvider | null>(null)
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
      providerRef.current?.abort()
    }
  }, [])

  const abort = useCallback(() => {
    providerRef.current?.abort()
    setIsListening(false)
    setInterimTranscript('')
  }, [])

  const start = useCallback(() => {
    const provider = providerRef.current
    if (!provider?.isSupported()) {
      const message = VOICE_ERROR_MESSAGES['not-supported']
      onErrorRef.current?.('not-supported', message)
      return
    }

    setInterimTranscript('')
    setIsListening(true)

    void provider.start({
      onInterim: (transcript) => {
        setInterimTranscript(transcript)
      },
      onFinal: (transcript) => {
        setInterimTranscript('')
        setIsListening(false)
        onFinalRef.current(transcript)
      },
      onError: (code, raw) => {
        setIsListening(false)
        setInterimTranscript('')
        if (code === 'aborted') return
        onErrorRef.current?.(code, VOICE_ERROR_MESSAGES[code] || raw)
      },
      onEnd: () => {
        setIsListening(false)
        onEndedRef.current?.()
      },
    })
  }, [])

  const stop = useCallback(() => {
    providerRef.current?.stop()
    setIsListening(false)
  }, [])

  return {
    isSupported: isVoiceInputSupported(),
    isListening,
    interimTranscript,
    start,
    stop,
    abort,
  }
}
