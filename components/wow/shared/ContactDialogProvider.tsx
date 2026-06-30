'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'
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

  return (
    <ContactDialogContext.Provider value={value}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto bg-backgroundBody p-6 dark:border-dark dark:bg-dark sm:max-w-[860px] sm:p-8">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-secondary dark:text-backgroundBody">
              Get in Touch
            </DialogTitle>
            <DialogDescription className="text-colorText dark:text-dark-100">
              Tell us about your project and we&apos;ll get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          <WowContactForm onSubmitted={handleSubmitted} />
        </DialogContent>
      </Dialog>
    </ContactDialogContext.Provider>
  )
}
