'use client'

type VoiceControlsProps = {
  onEnd: () => void
}

export default function VoiceControls({ onEnd }: VoiceControlsProps) {
  return (
    <div className="flex flex-col items-center gap-3 pb-[max(0.25rem,env(safe-area-inset-bottom))]">
      <button
        type="button"
        onClick={onEnd}
        className="text-sm font-medium text-muted underline-offset-2 transition-colors hover:text-secondary hover:underline dark:text-dark-100 dark:hover:text-backgroundBody"
      >
        End conversation
      </button>
    </div>
  )
}
