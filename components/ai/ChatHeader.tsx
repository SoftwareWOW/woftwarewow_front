'use client'

import { X } from 'lucide-react'

type ChatHeaderProps = {
  onClose: () => void
}

export default function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-[#1515151A] bg-background px-5 py-4 dark:border-[#EDF0F51A]">
      <div className="min-w-0">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <h2 className="truncate font-seasons text-lg font-normal tracking-[-0.02em] text-secondary dark:text-backgroundBody">
            AI Assistant
          </h2>
        </div>
        <p className="mt-1 text-sm text-[#808080] dark:text-dark-100">Online</p>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close AI assistant"
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-radius-sm border border-[#1515151A] text-secondary transition-colors hover:bg-[#1515150A] dark:border-[#EDF0F51A] dark:text-backgroundBody dark:hover:bg-white/5"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
