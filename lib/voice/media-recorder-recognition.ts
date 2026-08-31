import type { SpeechRecognitionCallbacks, SpeechRecognitionProvider } from './voice-types'

const SILENCE_THRESHOLD = 0.015
const SILENCE_DURATION_MS = 1500
const MAX_RECORDING_MS = 30000

export function isMediaRecorderSupported() {
  return (
    typeof window !== 'undefined' &&
    typeof navigator !== 'undefined' &&
    Boolean(navigator.mediaDevices?.getUserMedia) &&
    typeof MediaRecorder !== 'undefined'
  )
}

async function transcribeAudioBlob(blob: Blob) {
  const formData = new FormData()
  formData.append('audio', blob, 'recording.webm')

  const response = await fetch('/api/transcribe', {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as { error?: string } | null
    throw new Error(data?.error ?? 'Unable to transcribe audio.')
  }

  const data = (await response.json()) as { transcript?: string }
  return data.transcript?.trim() ?? ''
}

/**
 * Fallback provider for browsers without Web Speech API (e.g. Firefox).
 * Records locally, detects silence, then transcribes server-side.
 */
export function createMediaRecorderRecognitionProvider(): SpeechRecognitionProvider {
  let stream: MediaStream | null = null
  let mediaRecorder: MediaRecorder | null = null
  let audioContext: AudioContext | null = null
  let analyser: AnalyserNode | null = null
  let animationFrame: number | null = null
  let maxDurationTimer: number | null = null
  let chunks: Blob[] = []
  let stopped = false
  let aborted = false
  let hasSpeech = false
  let lastSpeechAt = 0
  let activeCallbacks: SpeechRecognitionCallbacks | null = null

  const cleanupHardware = () => {
    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame)
      animationFrame = null
    }

    if (maxDurationTimer !== null) {
      window.clearTimeout(maxDurationTimer)
      maxDurationTimer = null
    }

    stream?.getTracks().forEach((track) => track.stop())
    stream = null

    if (audioContext) {
      void audioContext.close()
      audioContext = null
    }

    analyser = null
    mediaRecorder = null
  }

  const finish = async () => {
    if (stopped) return
    stopped = true

    const recorder = mediaRecorder
    const recordedChunks = chunks
    const shouldTranscribe = hasSpeech && !aborted

    if (recorder && recorder.state !== 'inactive') {
      await new Promise<void>((resolve) => {
        recorder.addEventListener('stop', () => resolve(), { once: true })
        try {
          recorder.stop()
        } catch {
          resolve()
        }
      })
    }

    cleanupHardware()

    if (aborted) {
      chunks = []
      activeCallbacks?.onEnd?.()
      activeCallbacks = null
      return
    }

    const mimeType = recorder?.mimeType || 'audio/webm'
    const blob = new Blob(recordedChunks, { type: mimeType })
    chunks = []

    if (!shouldTranscribe || blob.size === 0) {
      activeCallbacks?.onEnd?.()
      activeCallbacks = null
      return
    }

    try {
      const transcript = await transcribeAudioBlob(blob)
      activeCallbacks?.onFinal(transcript)
    } catch {
      activeCallbacks?.onError('unknown', 'Unable to transcribe audio.')
    } finally {
      activeCallbacks?.onEnd?.()
      activeCallbacks = null
    }
  }

  const monitorSilence = () => {
    if (stopped || !analyser) return

    const data = new Uint8Array(analyser.fftSize)
    analyser.getByteTimeDomainData(data)

    let sum = 0
    for (let index = 0; index < data.length; index += 1) {
      const normalized = (data[index]! - 128) / 128
      sum += normalized * normalized
    }

    const volume = Math.sqrt(sum / data.length)

    if (volume > SILENCE_THRESHOLD) {
      hasSpeech = true
      lastSpeechAt = Date.now()
    } else if (hasSpeech && Date.now() - lastSpeechAt >= SILENCE_DURATION_MS) {
      void finish()
      return
    }

    animationFrame = requestAnimationFrame(monitorSilence)
  }

  return {
    name: 'media-recorder-transcription',
    isSupported: isMediaRecorderSupported,
    isActive: () => Boolean(mediaRecorder && !stopped && !aborted),
    async start(callbacks: SpeechRecognitionCallbacks) {
      if (mediaRecorder && !stopped && !aborted) return

      this.abort()
      stopped = false
      aborted = false
      hasSpeech = false
      lastSpeechAt = Date.now()
      chunks = []
      activeCallbacks = callbacks

      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      } catch {
        callbacks.onError('permission-denied', 'Microphone permission denied.')
        return
      }

      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : MediaRecorder.isTypeSupported('audio/webm')
          ? 'audio/webm'
          : ''

      mediaRecorder = mimeType
        ? new MediaRecorder(stream, { mimeType })
        : new MediaRecorder(stream)

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data)
        }
      }

      mediaRecorder.start(250)

      audioContext = new AudioContext()
      const source = audioContext.createMediaStreamSource(stream)
      analyser = audioContext.createAnalyser()
      analyser.fftSize = 2048
      source.connect(analyser)

      maxDurationTimer = window.setTimeout(() => {
        void finish()
      }, MAX_RECORDING_MS)

      animationFrame = requestAnimationFrame(monitorSilence)
      callbacks.onStart?.()
    },
    stop() {
      void finish()
    },
    abort() {
      aborted = true
      stopped = true
      cleanupHardware()
      chunks = []
      activeCallbacks = null
    },
  }
}
