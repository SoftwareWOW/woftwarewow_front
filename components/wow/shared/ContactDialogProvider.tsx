'use client'

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { useLenis } from 'lenis/react'
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import WowContactForm from './WowContactForm'

type ContactDialogContextValue = {
  open: () => void
  close: () => void
}

const ContactDialogContext = createContext<ContactDialogContextValue | null>(null)

export function useContactDialog() {
  const context = useContext(ContactDialogContext)
  if (!context) {
    throw new Error('useContactDialog must be used within ContactDialogProvider')
  }
  return context
}

export function useContactDialogOptional() {
  return useContext(ContactDialogContext)
}

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const lenis = useLenis()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const value = useMemo(
    () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
    }),
    [],
  )

  const handleSubmitted = useCallback(() => {
    setOpen(false)
  }, [])

  useEffect(() => {
    if (!open) return

    const preventBackgroundScroll = (event: WheelEvent | TouchEvent) => {
      const target = event.target as Node | null
      const scrollContainer = scrollContainerRef.current

      if (scrollContainer && target && scrollContainer.contains(target)) {
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
  }, [open, lenis])

  return (
    <ContactDialogContext.Provider value={value}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="flex max-h-[min(90vh,calc(100dvh-2rem))] flex-col gap-0 overflow-hidden rounded-radius-md border border-[#1515151A] bg-backgroundBody p-0 shadow-sm ring-0 dark:border-[#EDF0F51A] dark:bg-dark dark:shadow-none sm:max-w-[860px]"
        >
          <div
            ref={scrollContainerRef}
            data-contact-dialog-scroll
            data-lenis-prevent
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-6 sm:p-8 [-webkit-overflow-scrolling:touch]"
          >
            <DialogTitle className="sr-only">Let&apos;s Discuss Your Project</DialogTitle>
            <WowContactForm onSubmitted={handleSubmitted} />
          </div>
        </DialogContent>
      </Dialog>
    </ContactDialogContext.Provider>
  )
}
