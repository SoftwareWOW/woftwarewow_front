import { createMediaRecorderRecognitionProvider, isMediaRecorderSupported } from './media-recorder-recognition'
import {
  createBrowserSpeechRecognitionProvider,
  createUnsupportedSpeechRecognitionProvider,
  isBrowserSpeechRecognitionSupported,
} from './speech-recognition'
import { createSpeechSynthesisProvider, isSpeechSynthesisSupported } from './speech-synthesis'
import type { SpeechRecognitionProvider, SpeechSynthesisProvider } from './voice-types'

export function createSpeechRecognitionProvider(): SpeechRecognitionProvider {
  if (isBrowserSpeechRecognitionSupported()) {
    return createBrowserSpeechRecognitionProvider()
  }

  if (isMediaRecorderSupported()) {
    return createMediaRecorderRecognitionProvider()
  }

  return createUnsupportedSpeechRecognitionProvider()
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
  VoiceStatus,
} from './voice-types'
export { VOICE_ERROR_MESSAGES } from './voice-types'
export { toSpokenText } from './spoken-text'
