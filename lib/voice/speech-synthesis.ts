import { getDocumentLanguage, toSpokenText } from './spoken-text'
import type { SpeakOptions, SpeechSynthesisProvider } from './voice-types'

let activeUtterance: SpeechSynthesisUtterance | null = null
/** Stick to one browser voice for the whole session so replies never switch mid-answer. */
let lockedVoice: SpeechSynthesisVoice | null = null

function pickEnglishVoice(voices: SpeechSynthesisVoice[]) {
  if (lockedVoice) {
    const stillAvailable = voices.find((voice) => voice.voiceURI === lockedVoice?.voiceURI)
    if (stillAvailable) return stillAvailable
  }

  const english = voices.filter((voice) => /^en(-|$)/i.test(voice.lang))
  const preferred =
    english.find((voice) => /google|natural|neural|samantha|premium|enhanced/i.test(voice.name)) ??
    english.find((voice) => /en-US/i.test(voice.lang)) ??
    english[0] ??
    null

  lockedVoice = preferred
  return preferred
}

let cachedVoices: SpeechSynthesisVoice[] | null = null

function loadVoices() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return []
  const voices = window.speechSynthesis.getVoices()
  if (voices.length > 0) cachedVoices = voices
  return voices
}

function waitForVoices() {
  const existing = cachedVoices?.length ? cachedVoices : loadVoices()
  if (existing.length > 0) return Promise.resolve(existing)

  return new Promise<SpeechSynthesisVoice[]>((resolve) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      resolve([])
      return
    }

    const handleVoices = () => {
      window.speechSynthesis.removeEventListener('voiceschanged', handleVoices)
      resolve(loadVoices())
    }

    window.speechSynthesis.addEventListener('voiceschanged', handleVoices)
    window.setTimeout(() => {
      window.speechSynthesis.removeEventListener('voiceschanged', handleVoices)
      resolve(loadVoices())
    }, 400)
  })
}

export function isSpeechSynthesisSupported() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

/**
 * Browser SpeechSynthesis — fast and one consistent voice.
 * Gemini TTS is too slow for live voice turns and was mixing with this fallback.
 */
export function createBrowserSpeechSynthesisProvider(): SpeechSynthesisProvider {
  return {
    name: 'browser-speech-synthesis',
    isSupported: isSpeechSynthesisSupported,
    async speak(text: string, options: SpeakOptions = {}) {
      const spoken = toSpokenText(text)
      if (!spoken || options.muted) return
      if (!isSpeechSynthesisSupported()) return

      if (options.interrupt !== false) {
        this.cancel()
      }

      const voices = await waitForVoices()
      const utterance = new SpeechSynthesisUtterance(spoken)
      utterance.lang = options.lang ?? getDocumentLanguage()
      utterance.rate = options.rate ?? 0.95
      utterance.pitch = options.pitch ?? 1
      const voice = pickEnglishVoice(voices)
      if (voice) utterance.voice = voice

      return new Promise<void>((resolve, reject) => {
        utterance.onend = () => {
          if (activeUtterance === utterance) activeUtterance = null
          resolve()
        }
        utterance.onerror = () => {
          if (activeUtterance === utterance) activeUtterance = null
          reject(new Error('Unable to speak the response.'))
        }

        activeUtterance = utterance
        window.speechSynthesis.speak(utterance)
      })
    },
    cancel() {
      if (!isSpeechSynthesisSupported()) return
      window.speechSynthesis.cancel()
      activeUtterance = null
    },
  }
}

export function createSpeechSynthesisProvider(): SpeechSynthesisProvider {
  return createBrowserSpeechSynthesisProvider()
}
