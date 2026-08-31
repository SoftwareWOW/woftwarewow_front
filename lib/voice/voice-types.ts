export type VoiceStatus = 'idle' | 'listening' | 'processing' | 'speaking' | 'error'

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
    'Microphone access is required to use voice chat. Please allow microphone access in your browser settings.',
  'no-speech': 'I did not catch that. Tap the microphone and try speaking again.',
  network:
    'Voice recognition lost its connection. Please check your internet and try again, or continue with text chat.',
  aborted: '',
  'audio-capture':
    'Microphone access is required to use voice chat. Please allow microphone access in your browser settings.',
  unknown: 'Voice input failed. Please try again, or continue chatting using text.',
}
