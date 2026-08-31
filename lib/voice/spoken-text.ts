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

/**
 * Pull finished sentences off a streaming buffer.
 * A sentence is complete only when punctuation is followed by more text,
 * so a trailing "Hello." is held until flush (the stream may still continue).
 */
export function splitCompleteSentences(buffer: string): { sentences: string[]; rest: string } {
  const sentences: string[] = []
  let cursor = 0
  const pattern = /[.!?…]["')\]]*(?=\s|\n|$)/g

  let match: RegExpExecArray | null
  while ((match = pattern.exec(buffer)) !== null) {
    const end = match.index + match[0].length
    const following = buffer.slice(end)
    const hasFollowingText = following.trim().length > 0

    if (!hasFollowingText) break

    const sentence = buffer.slice(cursor, end).trim()
    if (sentence) sentences.push(sentence)
    cursor = end
  }

  const newlineSplit = buffer.slice(cursor)
  const newlineParts = newlineSplit.split(/\n+/)
  if (newlineParts.length > 1) {
    const last = newlineParts.pop() ?? ''
    for (const part of newlineParts) {
      const sentence = part.trim()
      if (sentence) sentences.push(sentence)
    }
    return { sentences, rest: last }
  }

  return { sentences, rest: buffer.slice(cursor).replace(/^\s+/, '') }
}
