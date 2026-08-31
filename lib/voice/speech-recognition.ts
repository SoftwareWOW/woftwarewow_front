import { getDocumentLanguage } from './spoken-text'
import type {
  SpeechRecognitionCallbacks,
  SpeechRecognitionErrorCode,
  SpeechRecognitionProvider,
} from './voice-types'

type SpeechRecognitionResultLike = {
  isFinal: boolean
  0: { transcript: string }
}

type SpeechRecognitionEventLike = {
  resultIndex: number
  results: ArrayLike<SpeechRecognitionResultLike>
}

type SpeechRecognitionErrorEventLike = {
  error: string
}

type SpeechRecognitionLike = {
  lang: string
  continuous: boolean
  interimResults: boolean
  onresult: ((event: SpeechRecognitionEventLike) => void) | null
  onerror: ((event: SpeechRecognitionErrorEventLike) => void) | null
  onend: (() => void) | null
  start: () => void
  stop: () => void
  abort: () => void
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike

function getSpeechRecognitionConstructor(): SpeechRecognitionConstructor | null {
  if (typeof window === 'undefined') return null

  const speechWindow = window as typeof window & {
    SpeechRecognition?: SpeechRecognitionConstructor
    webkitSpeechRecognition?: SpeechRecognitionConstructor
  }

  return speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition ?? null
}

export function isBrowserSpeechRecognitionSupported() {
  return Boolean(getSpeechRecognitionConstructor())
}

function mapBrowserError(error: string): SpeechRecognitionErrorCode {
  switch (error) {
    case 'not-allowed':
    case 'service-not-allowed':
      return 'permission-denied'
    case 'no-speech':
      return 'no-speech'
    case 'network':
      return 'network'
    case 'aborted':
      return 'aborted'
    case 'audio-capture':
      return 'audio-capture'
    default:
      return 'unknown'
  }
}

/**
 * Browser Web Speech API provider.
 * Swap this implementation for Deepgram / OpenAI / Google STT later
 * by returning a different SpeechRecognitionProvider from createSpeechRecognitionProvider().
 */
export function createBrowserSpeechRecognitionProvider(): SpeechRecognitionProvider {
  let recognition: SpeechRecognitionLike | null = null
  let stopping = false

  const teardown = () => {
    if (!recognition) return

    recognition.onresult = null
    recognition.onerror = null
    recognition.onend = null
    recognition = null
  }

  return {
    name: 'browser-speech-recognition',
    isSupported: isBrowserSpeechRecognitionSupported,
    start(callbacks: SpeechRecognitionCallbacks) {
      const Ctor = getSpeechRecognitionConstructor()
      if (!Ctor) {
        callbacks.onError(
          'not-supported',
          'Voice recognition is not supported by your current browser.',
        )
        return
      }

      this.abort()
      stopping = false

      const instance = new Ctor()
      instance.continuous = false
      instance.interimResults = true
      instance.lang = getDocumentLanguage()
      recognition = instance

      instance.onresult = (event) => {
        let interim = ''
        let finalText = ''

        for (let index = event.resultIndex; index < event.results.length; index += 1) {
          const result = event.results[index]
          const piece = result?.[0]?.transcript ?? ''
          if (result?.isFinal) {
            finalText += piece
          } else {
            interim += piece
          }
        }

        if (interim.trim()) {
          callbacks.onInterim?.(interim.trim())
        }

        if (finalText.trim()) {
          callbacks.onFinal(finalText.trim())
        }
      }

      instance.onerror = (event) => {
        const code = mapBrowserError(event.error)
        callbacks.onError(code, event.error)
      }

      instance.onend = () => {
        teardown()
        if (!stopping) {
          callbacks.onEnd?.()
        }
      }

      try {
        instance.start()
        callbacks.onStart?.()
      } catch {
        teardown()
        callbacks.onError('unknown', 'Unable to start voice recognition.')
      }
    },
    stop() {
      stopping = true
      try {
        recognition?.stop()
      } catch {
        this.abort()
      }
    },
    abort() {
      stopping = true
      try {
        recognition?.abort()
      } catch {
        // already stopped
      }
      teardown()
    },
  }
}

export function createUnsupportedSpeechRecognitionProvider(): SpeechRecognitionProvider {
  return {
    name: 'unsupported',
    isSupported: () => false,
    start(callbacks) {
      callbacks.onError(
        'not-supported',
        'Voice recognition is not supported by your current browser.',
      )
    },
    stop() {},
    abort() {},
  }
}
