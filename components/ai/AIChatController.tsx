'use client'

import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'

export type OpenAIChatOptions = {
  message?: string
  voice?: boolean
}

export type AIChatOpenRequest = OpenAIChatOptions & {
  id: number
}

type AIChatContextValue = {
  isOpen: boolean
  request: AIChatOpenRequest | null
  open: (options?: OpenAIChatOptions) => void
  close: () => void
}

const AIChatContext = createContext<AIChatContextValue | null>(null)

export function AIChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [request, setRequest] = useState<AIChatOpenRequest | null>(null)

  const open = useCallback((options?: OpenAIChatOptions) => {
    setRequest({
      id: Date.now(),
      message: options?.message?.trim() || undefined,
      voice: options?.voice === true,
    })
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    setRequest(null)
  }, [])

  const value = useMemo(
    () => ({
      isOpen,
      request,
      open,
      close,
    }),
    [isOpen, request, open, close],
  )

  return <AIChatContext.Provider value={value}>{children}</AIChatContext.Provider>
}

export function useAIChatController() {
  const context = useContext(AIChatContext)
  if (!context) {
    throw new Error('useAIChatController must be used within AIChatProvider')
  }
  return context
}

export function useAIChatControllerOptional() {
  return useContext(AIChatContext)
}
