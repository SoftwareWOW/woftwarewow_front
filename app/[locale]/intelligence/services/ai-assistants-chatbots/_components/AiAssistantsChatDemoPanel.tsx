'use client'

import AIMessage from '@/components/ai/AIMessage'
import type { ChatMessage } from '@/components/ai/types'
import { Bot } from 'lucide-react'

type AiAssistantsChatDemoPanelProps = {
  messages: ReadonlyArray<{ role: 'user' | 'assistant'; content: string }>
}

/** Read-only illustrative chat — styling from AIChatWindow / AIMessage. */
export default function AiAssistantsChatDemoPanel({ messages }: AiAssistantsChatDemoPanelProps) {
  const chatMessages: ChatMessage[] = messages.map((m, index) => ({
    id: `demo-${index}`,
    role: m.role,
    content: m.content,
  }))

  return (
    <div
      className="flex h-full min-h-[420px] flex-col overflow-hidden rounded-radius-md border border-[#1515151A] bg-background shadow-sm dark:border-[#EDF0F51A] dark:bg-dark"
      aria-label="Illustrative AI assistant conversation"
    >
      <div className="flex items-start gap-3 border-b border-[#1515151A] px-5 py-4 dark:border-[#EDF0F51A]">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-radius-sm bg-primary/10 text-primary">
          <Bot className="size-5" aria-hidden />
        </span>
        <div className="min-w-0">
          <h3 className="font-seasons text-lg font-light tracking-[-0.02em] text-secondary dark:text-backgroundBody">
            AI Assistant
          </h3>
          <p className="mt-0.5 text-sm text-[#808080]">illustrative conversation</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-5 py-6">
        {chatMessages.map((message) => (
          <AIMessage key={message.id} message={message} />
        ))}
      </div>
    </div>
  )
}
