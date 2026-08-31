/** Strip markdown so TTS reads naturally. */
export function toSpokenText(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#*_~]+/g, '')
    .replace(/^\s*[-•*]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    .replace(/\n{2,}/g, '. ')
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function getDocumentLanguage() {
  if (typeof document !== 'undefined' && document.documentElement.lang) {
    return document.documentElement.lang
  }

  return 'en-US'
}

export function getSpeechRecognitionLanguage() {
  const lang = getDocumentLanguage().trim() || 'en-US'
  const lower = lang.toLowerCase()

  if (lower === 'en' || lower.startsWith('en-')) return 'en-US'
  if (lower === 'fr' || lower.startsWith('fr-')) return 'fr-CA'

  return lang
}
