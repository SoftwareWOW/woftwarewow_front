export type VoiceStatus = 'listening' | 'processing' | 'speaking' | 'error' | 'ended'

export type SpeechRecognitionErrorCode =
  | 'not-supported'
  | 'permission-denied'
  | 'no-speech'
  | 'network'
  | 'aborted'
  | 'audio-capture'
  | 'unknown'

export type SpeechRecognitionCallbacks = {
  onStart?: () => void
  onInterim?: (transcript: string) => void
  onFinal: (transcript: string) => void
  onError: (code: SpeechRecognitionErrorCode, message: string) => void
  onEnd?: () => void
}

export type SpeechRecognitionProvider = {
  readonly name: string
  isSupported: () => boolean
  isActive?: () => boolean
  start: (callbacks: SpeechRecognitionCallbacks) => void | Promise<void>
  stop: () => void
  abort: () => void
}

export type SpeakOptions = {
  muted?: boolean
  lang?: string
  rate?: number
  pitch?: number
}

export type SpeechSynthesisProvider = {
  readonly name: string
  isSupported: () => boolean
  speak: (text: string, options?: SpeakOptions) => Promise<void>
  cancel: () => void
}

export const VOICE_ERROR_MESSAGES: Record<SpeechRecognitionErrorCode, string> = {
  'not-supported':
    'Voice recognition is not supported by your current browser. You can continue chatting using text.',
  'permission-denied':
    'Unable to access the microphone. Please check your browser permissions and try again.',
  'no-speech': '',
  network:
    'Voice recognition lost its connection. Please check your internet and try again.',
  aborted: '',
  'audio-capture':
    'Unable to access the microphone. Please check your browser permissions and try again.',
  unknown: 'Voice input failed. Please try again, or continue chatting using text.',
}
