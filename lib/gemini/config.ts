import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

export const DEFAULT_GEMINI_MODEL = 'gemini-3.5-flash-lite'
export const DEFAULT_GEMINI_FALLBACKS = ['gemini-flash-lite-latest', 'gemini-3.8-flash']
export const DEFAULT_GEMINI_TTS_MODEL = 'gemini-2.5-flash-preview-tts'
export const DEFAULT_GEMINI_TTS_VOICE = 'Kore'

export function readEnvValue(key: string) {
  const envPath = join(process.cwd(), '.env.local')

  if (existsSync(envPath)) {
    const match = readFileSync(envPath, 'utf8')
      .split(/\r?\n/)
      .find((line) => line.startsWith(`${key}=`) && !line.trimStart().startsWith('#'))

    if (match) {
      const value = match.slice(key.length + 1).trim().replace(/^["']|["']$/g, '')
      if (value) return value
    }
  }

  return process.env[key]?.trim() ?? ''
}

export function getGeminiApiKey() {
  return readEnvValue('GEMINI_API_KEY')
}

export function getConfiguredChatModels() {
  const primary = readEnvValue('GEMINI_MODEL') || DEFAULT_GEMINI_MODEL
  const configuredFallbacks = readEnvValue('GEMINI_FALLBACK_MODELS')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
  const fallbacks = configuredFallbacks.length > 0 ? configuredFallbacks : DEFAULT_GEMINI_FALLBACKS

  return [...new Set([primary, ...fallbacks].filter(Boolean))]
}

export function getGeminiTtsModel() {
  return readEnvValue('GEMINI_TTS_MODEL') || DEFAULT_GEMINI_TTS_MODEL
}

export function getGeminiTtsVoice() {
  return readEnvValue('GEMINI_TTS_VOICE') || DEFAULT_GEMINI_TTS_VOICE
}
