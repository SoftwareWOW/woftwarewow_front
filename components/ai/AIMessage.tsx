'use client'

import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'
import type { Components } from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import type { ChatMessage } from './types'

type AIMessageProps = {
  message: ChatMessage
}

const markdownComponents: Components = {
  p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
  strong: ({ children }) => (
    <strong className="font-semibold text-secondary dark:text-backgroundBody">{children}</strong>
  ),
  ul: ({ children }) => (
    <ul className="mb-3 list-disc space-y-1.5 pl-5 last:mb-0">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-3 list-decimal space-y-1.5 pl-5 last:mb-0">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
    >
      {children}
    </a>
  ),
  code: ({ className, children }) => {
    const isBlock = Boolean(className?.includes('language-'))

    if (isBlock) {
      return (
        <code className="block overflow-x-auto rounded-radius-sm bg-[#1515150D] p-3 font-mono text-[0.85em] leading-relaxed text-secondary dark:bg-white/10 dark:text-backgroundBody">
          {children}
        </code>
      )
    }

    return (
      <code className="rounded bg-[#1515150D] px-1.5 py-0.5 font-mono text-[0.9em] text-secondary dark:bg-white/10 dark:text-backgroundBody">
        {children}
      </code>
    )
  },
  pre: ({ children }) => <pre className="mb-3 overflow-x-auto last:mb-0">{children}</pre>,
}

export default function AIMessage({ message }: AIMessageProps) {
  const isUser = message.role === 'user'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn('flex w-full', isUser ? 'justify-end' : 'justify-start')}
    >
      <div
        className={cn(
          'max-w-[88%] text-sm leading-relaxed md:text-[15px]',
          isUser
            ? 'rounded-radius-md rounded-br-sm bg-primary px-4 py-3 text-white shadow-sm shadow-primary/20'
            : 'rounded-radius-md rounded-bl-sm border border-[#1515151A] bg-backgroundBody px-4 py-3 text-secondary dark:border-[#EDF0F51A] dark:bg-dark dark:text-backgroundBody',
        )}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="prose-ai">
            <ReactMarkdown components={markdownComponents}>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </motion.div>
  )
}
