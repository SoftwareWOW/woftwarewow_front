import { getSpeechRecognitionLanguage } from './spoken-text'
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
  maxAlternatives: number
  onstart: (() => void) | null
  onresult: ((event: SpeechRecognitionEventLike) => void) | null
  onerror: ((event: SpeechRecognitionErrorEventLike) => void) | null
  onend: (() => void) | null
  start: () => void
  stop: () => void
  abort: () => void
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike

const UTTERANCE_PAUSE_MS = 1400
const IMMEDIATE_END_MS = 500
const MAX_IMMEDIATE_RESTARTS = 6

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
  let callbacks: SpeechRecognitionCallbacks | null = null
  let sessionId = 0
  let sessionActive = false
  let stopping = false
  let startedAt = 0
  let sessionStartedAt = 0
  let didReceiveStart = false
  let immediateRestarts = 0
  let accumulatedFinal = ''
  let latestInterim = ''
  let utteranceTimer: number | null = null
  let restartTimer: number | null = null
  let networkRetries = 0

  const clearUtteranceTimer = () => {
    if (utteranceTimer !== null) {
      window.clearTimeout(utteranceTimer)
      utteranceTimer = null
    }
  }

  const clearRestartTimer = () => {
    if (restartTimer !== null) {
      window.clearTimeout(restartTimer)
      restartTimer = null
    }
  }

  const teardownInstance = () => {
    if (!recognition) return

    recognition.onstart = null
    recognition.onresult = null
    recognition.onerror = null
    recognition.onend = null
    recognition = null
  }

  const stopHardware = () => {
    clearUtteranceTimer()
    clearRestartTimer()
    const instance = recognition
    teardownInstance()

    if (!instance) return

    try {
      instance.abort()
    } catch {
      try {
        instance.stop()
      } catch {
        // already stopped
      }
    }
  }

  const emitFinal = () => {
    const text = `${accumulatedFinal} ${latestInterim}`.replace(/\s+/g, ' ').trim()
    accumulatedFinal = ''
    latestInterim = ''
    clearUtteranceTimer()

    if (!text || !callbacks) return false

    stopping = true
    sessionActive = false
    callbacks.onFinal(text)

    try {
      recognition?.stop()
    } catch {
      // already ended
    }

    return true
  }

  const scheduleUtteranceEnd = () => {
    clearUtteranceTimer()
    utteranceTimer = window.setTimeout(() => {
      utteranceTimer = null
      if (!sessionActive || stopping) return
      emitFinal()
    }, UTTERANCE_PAUSE_MS)
  }

  const attachAndStart = (activeSession: number) => {
    if (!sessionActive || stopping || activeSession !== sessionId) return

    const Ctor = getSpeechRecognitionConstructor()
    if (!Ctor) {
      sessionActive = false
      callbacks?.onError(
        'not-supported',
        'Voice recognition is not supported by your current browser.',
      )
      return
    }

    const previous = recognition
    teardownInstance()
    if (previous) {
      try {
        previous.abort()
      } catch {
        // already stopped
      }
    }

    const instance = new Ctor()
    instance.continuous = true
    instance.interimResults = true
    instance.maxAlternatives = 1
    instance.lang = getSpeechRecognitionLanguage()
    recognition = instance
    startedAt = Date.now()

    instance.onstart = () => {
      if (activeSession !== sessionId) return
      startedAt = Date.now()
      didReceiveStart = true
      immediateRestarts = 0
      callbacks?.onStart?.()
    }

    instance.onresult = (event) => {
      if (activeSession !== sessionId || !sessionActive) return

      immediateRestarts = 0
      networkRetries = 0
      let interim = ''
      let finals = ''

      for (let index = event.resultIndex; index < event.results.length; index += 1) {
        const result = event.results[index]
        const piece = result?.[0]?.transcript ?? ''
        if (result?.isFinal) {
          finals += piece
        } else {
          interim += piece
        }
      }

      if (finals.trim()) {
        accumulatedFinal = `${accumulatedFinal} ${finals}`.replace(/\s+/g, ' ').trim()
      }

      latestInterim = interim.trim()
      const preview = `${accumulatedFinal} ${latestInterim}`.replace(/\s+/g, ' ').trim()
      if (preview) {
        callbacks?.onInterim?.(preview)
      }

      scheduleUtteranceEnd()
    }

    instance.onerror = (event) => {
      if (activeSession !== sessionId) return

      const code = mapBrowserError(event.error)

      if (code === 'aborted' || code === 'no-speech') {
        return
      }

      if (code === 'network' && networkRetries < 2 && sessionActive && !stopping) {
        networkRetries += 1
        return
      }

      sessionActive = false
      stopping = true
      callbacks?.onError(code, event.error)
    }

    instance.onend = () => {
      if (activeSession !== sessionId) return

      teardownInstance()

      if (stopping || !sessionActive) {
        if (!sessionActive) {
          callbacks?.onEnd?.()
        }
        return
      }

      const lasted = Date.now() - startedAt
      const sessionAge = Date.now() - sessionStartedAt

      if (
        !didReceiveStart &&
        sessionAge > 15000 &&
        !accumulatedFinal &&
        !latestInterim
      ) {
        sessionActive = false
        callbacks?.onError(
          'permission-denied',
          'Microphone access is required to use voice chat. Please allow microphone access in your browser settings.',
        )
        callbacks?.onEnd?.()
        return
      }

      if (lasted < IMMEDIATE_END_MS && !accumulatedFinal && !latestInterim) {
        immediateRestarts += 1
        if (didReceiveStart && immediateRestarts >= MAX_IMMEDIATE_RESTARTS) {
          sessionActive = false
          callbacks?.onError(
            'audio-capture',
            'Microphone access is required to use voice chat. Please allow microphone access in your browser settings.',
          )
          callbacks?.onEnd?.()
          return
        }
      } else {
        immediateRestarts = 0
      }

      clearRestartTimer()
      restartTimer = window.setTimeout(() => {
        restartTimer = null
        attachAndStart(activeSession)
      }, lasted < IMMEDIATE_END_MS ? 220 : 80)
    }

    try {
      instance.start()
    } catch {
      clearRestartTimer()
      restartTimer = window.setTimeout(() => {
        restartTimer = null
        attachAndStart(activeSession)
      }, 220)
    }
  }

  return {
    name: 'browser-speech-recognition',
    isSupported: isBrowserSpeechRecognitionSupported,
    start(nextCallbacks: SpeechRecognitionCallbacks) {
      stopHardware()
      sessionId += 1
      const activeSession = sessionId
      callbacks = nextCallbacks
      stopping = false
      sessionActive = true
      startedAt = Date.now()
      sessionStartedAt = Date.now()
      didReceiveStart = false
      immediateRestarts = 0
      networkRetries = 0
      accumulatedFinal = ''
      latestInterim = ''

      // Must run in the same click tick so Chrome allows SpeechRecognition.start().
      attachAndStart(activeSession)
    },
    stop() {
      if (!sessionActive && !recognition) return

      if (`${accumulatedFinal} ${latestInterim}`.trim()) {
        emitFinal()
        return
      }

      stopping = true
      sessionActive = false
      stopHardware()
      callbacks?.onEnd?.()
    },
    abort() {
      sessionId += 1
      stopping = true
      sessionActive = false
      accumulatedFinal = ''
      latestInterim = ''
      stopHardware()
      callbacks = null
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
