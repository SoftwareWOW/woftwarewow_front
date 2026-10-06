/** Wrap raw PCM L16 mono samples in a WAV container for browser playback. */
export function pcm16ToWav(pcm: Buffer, sampleRate: number, channels = 1) {
  const bitsPerSample = 16
  const blockAlign = (channels * bitsPerSample) / 8
  const byteRate = sampleRate * blockAlign
  const header = Buffer.alloc(44)

  header.write('RIFF', 0)
  header.writeUInt32LE(36 + pcm.length, 4)
  header.write('WAVE', 8)
  header.write('fmt ', 12)
  header.writeUInt32LE(16, 16)
  header.writeUInt16LE(1, 20)
  header.writeUInt16LE(channels, 22)
  header.writeUInt32LE(sampleRate, 24)
  header.writeUInt32LE(byteRate, 28)
  header.writeUInt16LE(blockAlign, 32)
  header.writeUInt16LE(bitsPerSample, 34)
  header.write('data', 36)
  header.writeUInt32LE(pcm.length, 40)

  return Buffer.concat([header, pcm])
}

export function parsePcmSampleRate(mimeType: string, fallback = 24_000) {
  const match = /rate=(\d+)/i.exec(mimeType)
  if (!match?.[1]) return fallback
  const rate = Number(match[1])
  return Number.isFinite(rate) && rate > 0 ? rate : fallback
}
