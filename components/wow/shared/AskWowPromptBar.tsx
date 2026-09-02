'use client'

import { cn } from '@/utils/cn'
import { ArrowRight, AudioLines } from 'lucide-react'
import { KeyboardEvent, useEffect, useRef } from 'react'

type AskWowPromptBarProps = {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  onVoice: () => void
  placeholder?: string
  ariaLabel?: string
  disabled?: boolean
  multiline?: boolean
  className?: string
}

export default function AskWowPromptBar({
  value,
  onChange,
  onSubmit,
  onVoice,
  placeholder = 'Ask WOW anything…',
  ariaLabel = 'Ask WOW anything',
  disabled = false,
  multiline = false,
  className,
}: AskWowPromptBarProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const canSend = Boolean(value.trim()) && !disabled

  useEffect(() => {
    if (!multiline) return
    const textarea = textareaRef.current
    if (!textarea) return

    textarea.style.height = 'auto'
    const nextHeight = Math.min(textarea.scrollHeight, 96)
    textarea.style.height = `${nextHeight}px`
    textarea.style.overflowY = textarea.scrollHeight > 96 ? 'auto' : 'hidden'
  }, [multiline, value])

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.key !== 'Enter') return
    if (multiline && event.shiftKey) return
    event.preventDefault()
    if (canSend) onSubmit()
  }

  const fieldClassName = cn(
    'min-w-0 flex-1 bg-transparent font-outfit text-sm font-light leading-[1.5] text-secondary placeholder:text-[#808080] focus:outline-none dark:text-[#F2F2F2]',
    'sm:text-base 2xl:text-[20px] 2xl:leading-[1.6]',
    disabled && 'cursor-not-allowed opacity-60',
    multiline && 'max-h-24 resize-none overflow-hidden',
  )

  return (
    <div className={cn('flex w-full items-center justify-center gap-2 sm:gap-3', className)}>
      <div
        className={cn(
          'flex h-10 min-w-0 flex-1 items-center justify-between rounded-radius-sm border py-1.5 pl-3 pr-1.5 sm:h-11 sm:pl-4 sm:pr-2 2xl:h-16 2xl:py-2.5 2xl:pl-5 2xl:pr-2.5',
          'border-[#1515151A] bg-background dark:border-[#EDF0F51A] dark:bg-[#151515]',
        )}
      >
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
          onClick={onSubmit}
          disabled={!canSend}
          aria-label="Send message to WOW"
          className={cn(
            'inline-flex shrink-0 items-center justify-center rounded-radius-sm p-1.5 text-secondary transition-opacity dark:text-[#F2F2F2] sm:p-2 2xl:p-2.5',
            canSend
              ? 'bg-[#15151533] hover:bg-[#1515154D] dark:bg-[rgba(237,240,245,0.28)] dark:hover:bg-[rgba(237,240,245,0.36)]'
              : 'cursor-not-allowed bg-[#1515151A] opacity-70 dark:bg-[rgba(237,240,245,0.2)]',
          )}
        >
          <ArrowRight className="size-4 sm:size-5 2xl:size-6" strokeWidth={1.75} />
        </button>
      </div>

      <button
        type="button"
        onClick={onVoice}
        disabled={disabled}
        aria-label="Start a voice conversation with WOW"
        className="inline-flex size-10 shrink-0 items-center justify-center rounded-radius-sm bg-primary text-white transition-opacity hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 sm:size-11 2xl:size-16"
      >
        <AudioLines className="size-5 !stroke-white !text-white sm:size-6 2xl:size-8" strokeWidth={1.75} />
      </button>
    </div>
  )
}
