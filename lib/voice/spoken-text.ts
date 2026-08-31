/** Strip markdown so TTS reads naturally. Uses the same cleaner as the voice history. */
export function toSpokenText(markdown: string) {
  return sanitizeVoiceResponseForDisplay(markdown)
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
 * `!` and `?` complete immediately. A trailing period is held until more text
 * arrives or the stream is flushed, so abbreviations are not split too early.
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

    const isStrongEnd = /[!?…]["')\]]*$/.test(match[0])
    if (!hasFollowingText && !isStrongEnd) break

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

/**
 * Convert Markdown-style model output into natural plain text for voice UI and TTS.
 * Does not strip normal punctuation or apostrophes.
 */
export function sanitizeVoiceResponseForDisplay(raw: string) {
  return raw
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/^\s*[-*•]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/__(.+?)__/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/(^|\s)_([^_]+)_(?=\s|[.,!?;:]|$)/g, '$1$2')
    .replace(/(^|\s)\*{1,3}(\s|$)/g, '$1$2')
    .replace(/(^|\s)_{1,3}(\s|$)/g, '$1$2')
    .replace(/(^|\s)#{1,6}(\s|$)/g, '$1$2')
    .replace(/\n{2,}/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\s+([.,!?])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()
}
