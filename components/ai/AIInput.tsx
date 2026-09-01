'use client'

import PromptBar from './PromptBar'

type AIInputProps = {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  disabled?: boolean
  placeholder?: string
  isVoiceActive?: boolean
  onStartVoice?: () => void
}

export default function AIInput({
  value,
  onChange,
  onSubmit,
  disabled = false,
  placeholder = 'Ask us anything about our services...',
  onStartVoice,
}: AIInputProps) {
  return (
    <div className="border-t border-[#1515151A] bg-backgroundBody px-4 py-4 dark:border-[#EDF0F51A] dark:bg-dark">
      <PromptBar
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
        onVoice={() => onStartVoice?.()}
        placeholder={placeholder}
        ariaLabel="Message the AI assistant"
        disabled={disabled}
        multiline
      />

      <p className="mt-2 text-center text-[11px] text-[#999999] dark:text-dark-100">
        Enter to send · Shift + Enter for new line
      </p>
    </div>
  )
}
