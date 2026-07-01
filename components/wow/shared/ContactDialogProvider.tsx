'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useLenis } from 'lenis/react'
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react'
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

    const previousOverflow = document.body.style.overflow
    const previousOverflowX = document.body.style.overflowX
    document.body.style.overflow = 'hidden'
    document.body.style.overflowX = 'hidden'
    lenis?.stop()

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.overflowX = previousOverflowX
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
          <DialogHeader className="shrink-0 gap-2 p-6 pb-4 sm:p-8 sm:pb-5">
            <DialogTitle className="text-2xl font-semibold text-secondary dark:text-backgroundBody">
              Get in Touch
            </DialogTitle>
            <DialogDescription className="text-colorText dark:text-dark-100">
              Tell us about your project and we&apos;ll get back to you shortly.
            </DialogDescription>
          </DialogHeader>

          <div
            data-lenis-prevent
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-6 sm:px-8 sm:pb-8 [-webkit-overflow-scrolling:touch]"
          >
            <WowContactForm onSubmitted={handleSubmitted} />
          </div>
        </DialogContent>
      </Dialog>
    </ContactDialogContext.Provider>
  )
}
