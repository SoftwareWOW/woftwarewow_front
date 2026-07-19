'use client'

import { cn } from '@/utils/cn'
import { SendHorizontal } from 'lucide-react'
import { KeyboardEvent, useEffect, useRef } from 'react'

type AIInputProps = {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  disabled?: boolean
  placeholder?: string
}

export default function AIInput({
  value,
  onChange,
  onSubmit,
  disabled = false,
  placeholder = 'Ask us anything about our services...',
}: AIInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    textarea.style.height = 'auto'
    const nextHeight = Math.min(textarea.scrollHeight, 120)
    textarea.style.height = `${nextHeight}px`
    textarea.style.overflowY = textarea.scrollHeight > 120 ? 'auto' : 'hidden'
  }, [value])

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      if (!disabled && value.trim()) {
        onSubmit()
      }
    }
  }

  return (
    <div className="border-t border-[#1515151A] bg-backgroundBody px-4 py-4 dark:border-[#EDF0F51A] dark:bg-dark">
      <div className="flex items-end gap-2">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
          aria-label="Message the AI assistant"
          className={cn(
            'max-h-[120px] min-h-[44px] flex-1 resize-none overflow-hidden rounded-radius-sm border border-[#1515151A] bg-white px-4 py-3 text-sm leading-relaxed text-secondary placeholder:text-[#808080] focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/15 disabled:cursor-not-allowed disabled:opacity-60 dark:border-[#EDF0F51A] dark:bg-[#1F1F1F] dark:text-backgroundBody dark:placeholder:text-dark-100 dark:focus:border-primary/40',
            '[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#15151533]',
          )}
        />

        <button
          type="button"
          onClick={onSubmit}
          disabled={disabled || !value.trim()}
          aria-label="Send message"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-radius-sm bg-primary text-white shadow-sm shadow-primary/25 transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-primary dark:text-white dark:hover:bg-primary/90"
        >
          <SendHorizontal className="h-4 w-4 text-white dark:text-white" />
        </button>
      </div>

      <p className="mt-2 text-center text-[11px] text-[#999999] dark:text-dark-100">
        Enter to send · Shift + Enter for new line
      </p>
    </div>
  )
}
