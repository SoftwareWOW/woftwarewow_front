'use client'

import { Dialog, DialogClose, DialogContent, DialogTitle } from '@/components/ui/dialog'
import CalComUnavailable from '@/components/wow/meet/CalComUnavailable'
import MeetBookingWizard from '@/components/wow/meet/MeetBookingWizard'
import { getCalComUrl } from '@/lib/calcom/config'
import { cn } from '@/lib/utils'
import { useLenis } from 'lenis/react'
import { X } from 'lucide-react'
import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react'

type MeetDialogContextValue = {
  open: () => void
  close: () => void
}

const MeetDialogContext = createContext<MeetDialogContextValue | null>(null)

export function useMeetDialog() {
  const context = useContext(MeetDialogContext)
  if (!context) {
    throw new Error('useMeetDialog must be used within MeetDialogProvider')
  }
  return context
}

export function useMeetDialogOptional() {
  return useContext(MeetDialogContext)
}

export function MeetDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const lenis = useLenis()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const calLink = useMemo(() => getCalComUrl() ?? undefined, [])

  const value = useMemo(
    () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
    }),
    [],
  )

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
    <MeetDialogContext.Provider value={value}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className={cn(
            'flex w-[calc(100%-1rem)] max-h-[min(92dvh,calc(100dvh-1rem))] flex-col gap-0 overflow-hidden rounded-radius-sm bg-backgroundBody p-0 ring-0',
            'dark:border-[#EDF0F51A] dark:bg-dark dark:shadow-none',
            'sm:max-w-[720px] md:max-w-[860px] lg:max-w-[960px]',
          )}
        >
          <div className="relative z-20 flex shrink-0 items-center justify-end bg-backgroundBody/95 px-4 py-3 backdrop-blur-sm dark:bg-dark/95 sm:px-5">
            <DialogClose
              type="button"
              aria-label="Close meeting scheduler"
              className={cn(
                'inline-flex size-10 items-center justify-center rounded-radius-md border border-[#1515151A] bg-backgroundBody text-secondary transition-colors',
                'hover:bg-[#D9D8F3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
                'dark:border-[#EDF0F51A] dark:bg-dark dark:text-backgroundBody dark:hover:bg-[#292757]',
              )}
            >
              <X className="size-5" strokeWidth={1.75} />
            </DialogClose>
          </div>

          <div
            ref={scrollContainerRef}
            data-meet-dialog-scroll
            data-lenis-prevent
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-5 pt-2 sm:px-6 sm:pb-6 sm:pt-3 md:px-8 [-webkit-overflow-scrolling:touch]"
          >
            <DialogTitle className="sr-only">Book a Strategy Session</DialogTitle>
            {calLink ? <MeetBookingWizard calLink={calLink} /> : <CalComUnavailable />}
          </div>
        </DialogContent>
      </Dialog>
    </MeetDialogContext.Provider>
  )
}
