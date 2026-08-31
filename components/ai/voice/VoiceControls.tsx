'use client'

import { cn } from '@/utils/cn'
import { RotateCcw, Volume2, VolumeX } from 'lucide-react'

type VoiceControlsProps = {
  isMuted: boolean
  isContinuous: boolean
  canReplay: boolean
  onToggleMute: () => void
  onToggleContinuous: () => void
  onReplay: () => void
  onEnd: () => void
}

export default function VoiceControls({
  isMuted,
  isContinuous,
  canReplay,
  onToggleMute,
  onToggleContinuous,
  onReplay,
  onEnd,
}: VoiceControlsProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={onToggleMute}
          aria-label={isMuted ? 'Unmute voice' : 'Mute voice'}
          aria-pressed={isMuted}
          title={isMuted ? 'Unmute' : 'Mute'}
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors',
            'border-[#1515151A] text-secondary hover:border-[#615CCE]/40 hover:text-[#615CCE]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
            'dark:border-[#EDF0F51A] dark:text-backgroundBody',
            isMuted && 'border-[#615CCE]/50 text-[#615CCE]',
          )}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>

        <button
          type="button"
          onClick={onReplay}
          disabled={!canReplay}
          aria-label="Replay last AI response"
          title="Replay last response"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors',
            'border-[#1515151A] text-secondary hover:border-[#615CCE]/40 hover:text-[#615CCE]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
            'dark:border-[#EDF0F51A] dark:text-backgroundBody',
            'disabled:cursor-not-allowed disabled:opacity-40',
          )}
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      <label className="flex cursor-pointer items-center justify-center gap-2.5 text-sm text-secondary dark:text-backgroundBody">
        <input
          type="checkbox"
          checked={isContinuous}
          onChange={onToggleContinuous}
          className="h-4 w-4 rounded border-[#15151533] text-[#615CCE] focus:ring-[#615CCE]/40"
        />
        Continuous conversation
      </label>

      <button
        type="button"
        onClick={onEnd}
        className="mx-auto text-sm font-medium text-[#808080] underline-offset-2 transition-colors hover:text-secondary hover:underline dark:text-dark-100 dark:hover:text-backgroundBody"
      >
        End conversation
      </button>
    </div>
  )
}
