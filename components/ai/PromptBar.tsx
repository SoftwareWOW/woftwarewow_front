'use client'

import { cn } from '@/utils/cn'
import { ArrowUp } from 'lucide-react'
import { KeyboardEvent, useEffect, useRef } from 'react'

export const MicWithWavesIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={cn('size-5', className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    aria-hidden
  >
    <path d="M4 9v6M2.5 10.5v3" strokeLinecap="round" />
    <rect x="9" y="4" width="6" height="10" rx="3" />
    <path d="M8 12a4 4 0 0 0 8 0M12 16v3" strokeLinecap="round" />
    <path d="M20 9v6M21.5 10.5v3" strokeLinecap="round" />
  </svg>
)

type PromptBarProps = {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  onVoice: () => void
  placeholder?: string
  ariaLabel?: string
  disabled?: boolean
  multiline?: boolean
}

export default function PromptBar({
  value,
  onChange,
  onSubmit,
  onVoice,
  placeholder = 'Ask WOW anything...',
  ariaLabel = 'Ask WOW anything',
  disabled = false,
  multiline = false,
}: PromptBarProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const canSend = Boolean(value.trim()) && !disabled

  useEffect(() => {
    if (!multiline) return
    const textarea = textareaRef.current
    if (!textarea) return

    textarea.style.height = 'auto'
    const nextHeight = Math.min(textarea.scrollHeight, 120)
    textarea.style.height = `${nextHeight}px`
    textarea.style.overflowY = textarea.scrollHeight > 120 ? 'auto' : 'hidden'
  }, [multiline, value])

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.key !== 'Enter') return
    if (multiline && event.shiftKey) return
    event.preventDefault()
    if (canSend) onSubmit()
  }

  const fieldClassName = cn(
    'min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm leading-relaxed text-secondary placeholder:text-[#808080] focus:outline-none md:text-base',
    'dark:text-backgroundBody dark:placeholder:text-[#808080]',
    disabled && 'cursor-not-allowed opacity-60',
    multiline &&
      'max-h-[120px] min-h-[44px] resize-none overflow-hidden [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#15151533]',
  )

  return (
    <div className="flex items-end gap-2 rounded-2xl bg-white px-3 py-2 ring-1 ring-[#C4B5FD] dark:bg-[#1A1A1A] dark:ring-0 md:gap-2.5 md:px-4 md:py-2.5">
      {multiline ? (
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
          aria-label={ariaLabel}
          className={fieldClassName}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={ariaLabel}
          className={fieldClassName}
        />
      )}

      <button
        type="button"
        onClick={onVoice}
        disabled={disabled}
        aria-label="Start a voice conversation with WOW"
        className="mb-px inline-flex size-11 shrink-0 items-center justify-center rounded-radius-sm border border-secondary/20 text-secondary transition-colors hover:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/20 dark:text-backgroundBody dark:hover:border-primary/50 md:size-12"
      >
        <MicWithWavesIcon />
      </button>

      <button
        type="button"
        onClick={onSubmit}
        disabled={!canSend}
        aria-label="Send message to WOW"
        className="mb-px inline-flex size-11 shrink-0 items-center justify-center rounded-radius-sm bg-primary text-white transition-opacity hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40 md:size-12"
      >
        <ArrowUp className="size-5 !stroke-white !text-white" stroke="currentColor" />
      </button>
    </div>
  )
}
