'use client'

import { createSpeechSynthesisProvider, isSpeechSynthesisSupported } from '@/lib/voice'
import type { SpeakOptions, SpeechSynthesisProvider } from '@/lib/voice'
import { useCallback, useEffect, useRef, useState } from 'react'

export function useSpeechSynthesis() {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const providerRef = useRef<SpeechSynthesisProvider | null>(null)
  const isMutedRef = useRef(false)

  useEffect(() => {
    providerRef.current = createSpeechSynthesisProvider()
    return () => {
      providerRef.current?.cancel()
    }
  }, [])

  const cancel = useCallback(() => {
    providerRef.current?.cancel()
    setIsSpeaking(false)
  }, [])

  const speak = useCallback(async (text: string, options?: SpeakOptions) => {
    const provider = providerRef.current
    if (!provider?.isSupported() || isMutedRef.current) {
      return
    }

    if (options?.interrupt !== false) {
      provider.cancel()
    }

    setIsSpeaking(true)

    try {
      await provider.speak(text, {
        muted: isMutedRef.current,
        rate: 0.95,
        pitch: 1,
        interrupt: false,
        ...options,
      })
    } catch {
      // Speech failed — text is still visible.
    } finally {
      setIsSpeaking(false)
    }
  }, [])

  const toggleMute = useCallback(() => {
    isMutedRef.current = !isMutedRef.current
    setIsMuted(isMutedRef.current)
    if (isMutedRef.current) {
      cancel()
    }
  }, [cancel])

  return {
    isSupported: isSpeechSynthesisSupported(),
    isSpeaking,
    isMuted,
    speak,
    cancel,
    toggleMute,
  }
}
