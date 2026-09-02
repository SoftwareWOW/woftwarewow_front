'use client'

import AskWowPromptBar from '@/components/wow/shared/AskWowPromptBar'

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
  placeholder = 'Ask WOW anything…',
  onStartVoice,
}: AIInputProps) {
  return (
    <div className="border-t border-[#1515151A] bg-background px-4 py-4 dark:border-[#EDF0F51A]">
      <AskWowPromptBar
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
        onVoice={() => onStartVoice?.()}
        placeholder={placeholder}
        ariaLabel="Ask WOW anything"
        disabled={disabled}
        multiline
      />
    </div>
  )
}
