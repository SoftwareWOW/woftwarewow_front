'use client'

import { cn } from '@/utils/cn'
import { Mic } from 'lucide-react'

type VoiceButtonProps = {
  isActive?: boolean
  disabled?: boolean
  onClick?: () => void
}

export default function VoiceButton({ isActive = false, disabled = false, onClick }: VoiceButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isActive ? 'Voice conversation active' : 'Start voice conversation'}
      aria-pressed={isActive}
      title="Start voice conversation"
      className={cn(
        'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-radius-sm border transition-all',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
        isActive
          ? 'border-[#615CCE] bg-[#615CCE] text-white shadow-sm shadow-primary/25'
          : 'border-[#1515151A] bg-transparent text-secondary hover:border-[#615CCE]/50 hover:text-[#615CCE] dark:border-[#EDF0F51A] dark:text-backgroundBody dark:hover:border-[#615CCE]/50',
        'disabled:cursor-not-allowed disabled:opacity-50',
      )}
    >
      <Mic className="h-4 w-4" stroke="currentColor" />
    </button>
  )
}
