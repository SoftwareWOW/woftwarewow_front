'use client'

import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'
import { Mic } from 'lucide-react'
import type { Components } from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import type { ChatMessage } from './types'

type AIMessageProps = {
  message: ChatMessage
}

/** Convert markdown tables into readable bullet lists so chat never shows raw | --- | syntax. */
function normalizeAssistantContent(content: string): string {
  const lines = content.replace(/\r\n/g, '\n').split('\n')
  const result: string[] = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index] ?? ''
    const isTableRow = /^\s*\|.*\|\s*$/.test(line)
    const isSeparator = /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line)

    if (!isTableRow && !isSeparator) {
      result.push(line)
      index += 1
      continue
    }

    const tableRows: string[] = []

    while (index < lines.length) {
      const current = lines[index] ?? ''
      const currentIsRow = /^\s*\|.*\|\s*$/.test(current)
      const currentIsSeparator = /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(current)

      if (!currentIsRow && !currentIsSeparator) break

      if (currentIsRow && !currentIsSeparator) {
        tableRows.push(current)
      }

      index += 1
    }

    if (tableRows.length === 0) continue

    const parsedRows = tableRows.map((row) =>
      row
        .trim()
        .replace(/^\|/, '')
        .replace(/\|$/, '')
        .split('|')
        .map((cell) => cell.trim())
        .filter(Boolean),
    )

    const [header, ...body] = parsedRows

    if (!header) continue

    if (body.length === 0) {
      for (const cell of header) {
        result.push(`- ${cell}`)
      }
      continue
    }

    for (const row of body) {
      if (row.length === 1) {
        result.push(`- ${row[0]}`)
        continue
      }

      const [title, ...rest] = row
      const details = rest.filter(Boolean).join(' — ')
      result.push(details ? `- **${title}** — ${details}` : `- **${title}**`)
    }
  }

  return result
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

const markdownComponents: Components = {
  p: ({ children }) => <p className="mb-3 last:mb-0 font-normal">{children}</p>,
  strong: ({ children }) => (
    <strong className="font-medium text-secondary dark:text-backgroundBody">{children}</strong>
  ),
  em: ({ children }) => <em className="font-normal italic">{children}</em>,
  ul: ({ children }) => (
    <ul className="mb-3 list-disc space-y-1.5 pl-5 last:mb-0 font-normal">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-3 list-decimal space-y-1.5 pl-5 last:mb-0 font-normal">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed font-normal">{children}</li>,
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
        <code className="block overflow-x-auto rounded-radius-sm bg-[#1515150D] p-3 font-mono text-[0.85em] font-normal leading-relaxed text-secondary dark:bg-white/10 dark:text-backgroundBody">
          {children}
        </code>
      )
    }

    return (
      <code className="rounded bg-[#1515150D] px-1.5 py-0.5 font-mono text-[0.9em] font-normal text-secondary dark:bg-white/10 dark:text-backgroundBody">
        {children}
      </code>
    )
  },
  pre: ({ children }) => <pre className="mb-3 overflow-x-auto last:mb-0">{children}</pre>,
  // Hide raw tables if any slip through after normalization
  table: () => null,
  thead: () => null,
  tbody: () => null,
  tr: () => null,
  th: () => null,
  td: () => null,
}

export default function AIMessage({ message }: AIMessageProps) {
  const isUser = message.role === 'user'
  const content = isUser ? message.content : normalizeAssistantContent(message.content)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn('flex w-full', isUser ? 'justify-end' : 'justify-start')}
    >
      <div
        className={cn(
          'max-w-[88%] text-sm font-normal leading-relaxed md:text-[15px]',
          isUser
            ? 'rounded-radius-md rounded-br-sm bg-[#615CCE] px-4 py-3 text-white shadow-sm shadow-primary/20 dark:bg-[#615CCE] dark:text-white [&_*]:!text-white'
            : 'rounded-radius-md rounded-bl-sm border border-[#1515151A] bg-white px-4 py-3 text-secondary dark:border-[#EDF0F51A] dark:bg-dark dark:text-backgroundBody',
        )}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap font-normal text-white dark:text-white">
            {message.via === 'voice' ? (
              <Mic className="mr-1.5 inline h-3.5 w-3.5 align-[-2px] opacity-80" aria-hidden />
            ) : null}
            {content}
          </p>
        ) : (
          <div className="prose-ai font-normal">
            <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </motion.div>
  )
}
