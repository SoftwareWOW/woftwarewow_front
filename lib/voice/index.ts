import { createMediaRecorderRecognitionProvider, isMediaRecorderSupported } from './media-recorder-recognition'
import {
  createBrowserSpeechRecognitionProvider,
  createUnsupportedSpeechRecognitionProvider,
  isBrowserSpeechRecognitionSupported,
} from './speech-recognition'
import { createSpeechSynthesisProvider, isSpeechSynthesisSupported } from './speech-synthesis'
import type { SpeechRecognitionProvider, SpeechSynthesisProvider } from './voice-types'

function createFallbackSpeechRecognitionProvider(
  primary: SpeechRecognitionProvider,
  secondary: SpeechRecognitionProvider,
): SpeechRecognitionProvider {
  let active: SpeechRecognitionProvider = primary
  let usingFallback = false
  let switching = false

  return {
    name: 'fallback-speech-recognition',
    isSupported: () => primary.isSupported() || secondary.isSupported(),
    isActive: () => active.isActive?.() ?? false,
    start(callbacks) {
      if (!usingFallback && !primary.isSupported() && secondary.isSupported()) {
        usingFallback = true
      }

      active = usingFallback ? secondary : primary

      active.start({
        ...callbacks,
        onEnd: () => {
          if (switching) return
          callbacks.onEnd?.()
        },
        onError: (code, message) => {
          const canFallback =
            !usingFallback &&
            secondary.isSupported() &&
            (code === 'network' || code === 'unknown' || code === 'audio-capture')

          if (canFallback) {
            switching = true
            usingFallback = true
            primary.abort()
            switching = false
            active = secondary
            secondary.start(callbacks)
            return
          }

          callbacks.onError(code, message)
        },
      })
    },
    stop() {
      active.stop()
    },
    abort() {
      primary.abort()
      secondary.abort()
    },
  }
}

export function createSpeechRecognitionProvider(): SpeechRecognitionProvider {
  const browser = isBrowserSpeechRecognitionSupported()
    ? createBrowserSpeechRecognitionProvider()
    : null
  const media = isMediaRecorderSupported() ? createMediaRecorderRecognitionProvider() : null

  if (browser && media) {
    return createFallbackSpeechRecognitionProvider(browser, media)
  }

  return browser ?? media ?? createUnsupportedSpeechRecognitionProvider()
}

export { createSpeechSynthesisProvider, isBrowserSpeechRecognitionSupported, isMediaRecorderSupported, isSpeechSynthesisSupported }

export function isVoiceInputSupported() {
  return isBrowserSpeechRecognitionSupported() || isMediaRecorderSupported()
}

export type { SpeechSynthesisProvider, SpeechRecognitionProvider }
export type {
  SpeakOptions,
  SpeechRecognitionCallbacks,
  SpeechRecognitionErrorCode,
  VoiceHistoryMessage,
  VoiceStatus,
} from './voice-types'
export { VOICE_ERROR_MESSAGES } from './voice-types'
export { splitCompleteSentences, sanitizeVoiceResponseForDisplay, toSpokenText } from './spoken-text'
