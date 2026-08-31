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
