'use client'

import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'
import { useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import AIInput from './AIInput'
import AIMessage from './AIMessage'
import ChatHeader from './ChatHeader'
import TypingIndicator from './TypingIndicator'
import { useAIChat } from './useAIChat'

type AIChatWindowProps = {
  onClose: () => void
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function AIChatWindow({ onClose }: AIChatWindowProps) {
  const windowRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const lenis = useLenis()
  const {
    messages,
    errorMessage,
    input,
    setInput,
    submitInput,
    retryLastMessage,
    isBusy,
    showTypingIndicator,
  } = useAIChat()

  // Scroll only the chat messages panel — never the page body
  useEffect(() => {
    const container = messagesContainerRef.current
    if (!container) return

    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, showTypingIndicator, errorMessage])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node | null
      if (windowRef.current && target && !windowRef.current.contains(target)) {
        onClose()
      }
    }

    const openFrame = window.requestAnimationFrame(() => {
      document.addEventListener('mousedown', handlePointerDown)
    })

    return () => {
      window.cancelAnimationFrame(openFrame)
      document.removeEventListener('mousedown', handlePointerDown)
    }
  }, [onClose])

  // Keep body scrollbar visible, but stop page/Lenis scroll while chat is open.
  // Wheel/touch over the messages area scrolls the chat; elsewhere is blocked.
  useEffect(() => {
    const preventBackgroundScroll = (event: WheelEvent | TouchEvent) => {
      const messagesContainer = messagesContainerRef.current
      const target = event.target

      if (
        messagesContainer &&
        target instanceof Node &&
        messagesContainer.contains(target)
      ) {
        return
      }

      event.preventDefault()
    }

    lenis?.stop()

    document.addEventListener('wheel', preventBackgroundScroll, { passive: false })
    document.addEventListener('touchmove', preventBackgroundScroll, { passive: false })

    return () => {
      document.removeEventListener('wheel', preventBackgroundScroll)
      document.removeEventListener('touchmove', preventBackgroundScroll)
      lenis?.start()
    }
  }, [lenis])

  useEffect(() => {
    const container = windowRef.current
    if (!container) return

    const focusable = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    first?.focus()

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || focusable.length === 0) return

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        }
        return
      }

      if (document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    container.addEventListener('keydown', handleTab)
    return () => container.removeEventListener('keydown', handleTab)
  }, [])

  return (
    <>
      <motion.div
        key="ai-chat-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[1198] bg-black/20 backdrop-blur-[1px] md:bg-black/10"
        aria-hidden
        onMouseDown={onClose}
      />

      <motion.div
        ref={windowRef}
        key="ai-chat-window"
        role="dialog"
        aria-modal="true"
        aria-label="WOW Superagency AI Assistant"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed z-[1200] flex flex-col overflow-hidden border border-[#1515151A] bg-backgroundBody shadow-box dark:border-[#EDF0F51A] dark:bg-dark',
          'inset-x-3 bottom-[calc(5.75rem+env(safe-area-inset-bottom))] top-auto',
          'h-[min(72dvh,650px)] max-h-[calc(100dvh-6.75rem-env(safe-area-inset-bottom))]',
          'w-auto rounded-radius-md',
          'md:inset-x-auto md:bottom-6 md:right-6 md:top-auto',
          'md:h-[min(650px,calc(100dvh-3rem))] md:max-h-[calc(100dvh-3rem)]',
          'md:w-[min(400px,calc(100vw-3rem))]',
        )}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <ChatHeader onClose={onClose} />

        <div
          ref={messagesContainerRef}
          data-lenis-prevent
          className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain px-4 py-4 [-webkit-overflow-scrolling:touch]"
        >
          {messages
            .filter((message) => message.content.length > 0)
            .map((message) => (
              <AIMessage key={message.id} message={message} />
            ))}

          {showTypingIndicator && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <TypingIndicator />
            </motion.div>
          )}

          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-radius-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-200"
              role="alert"
            >
              <p>{errorMessage}</p>
              <button
                type="button"
                onClick={() => void retryLastMessage()}
                className="mt-2 font-medium underline underline-offset-2"
              >
                Retry
              </button>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <AIInput
          value={input}
          onChange={setInput}
          onSubmit={() => void submitInput()}
          disabled={isBusy}
        />
      </motion.div>
    </>
  )
}
