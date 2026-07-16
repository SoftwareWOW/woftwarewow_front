'use client'

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { cn } from '@/utils/cn'

type ToastType = 'success' | 'error'

type ToastItem = {
  id: string
  message: string
  type: ToastType
}

type ToastContextValue = {
  showToast: (message: string, type?: ToastType) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

const TOAST_DURATION_MS = 5000

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }, [])

  const showToast = useCallback(
    (message: string, type: ToastType = 'success') => {
      const id = crypto.randomUUID()

      setToasts((current) => [...current, { id, message, type }])

      window.setTimeout(() => {
        removeToast(id)
      }, TOAST_DURATION_MS)
    },
    [removeToast],
  )

  const value = useMemo(() => ({ showToast }), [showToast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed left-1/2 top-6 z-[9999] flex w-[min(92vw,420px)] -translate-x-1/2 flex-col gap-3"
      >
        {toasts.map((toast) => (
          <ToastMessage key={toast.id} toast={toast} onDismiss={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

function ToastMessage({
  toast,
  onDismiss,
}: {
  toast: ToastItem
  onDismiss: () => void
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setVisible(true)
    })

    const hideTimer = window.setTimeout(() => {
      setVisible(false)
    }, TOAST_DURATION_MS - 300)

    const removeTimer = window.setTimeout(() => {
      onDismiss()
    }, TOAST_DURATION_MS)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(hideTimer)
      window.clearTimeout(removeTimer)
    }
  }, [onDismiss])

  return (
    <div
      role={toast.type === 'error' ? 'alert' : 'status'}
      className={cn(
        'pointer-events-auto rounded-radius-sm border px-5 py-4 text-sm leading-[1.5] shadow-lg transition-all duration-300 md:text-base',
        visible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0',
        toast.type === 'success'
          ? 'border-[#9592DE33] bg-backgroundBody text-secondary dark:border-[#292757] dark:bg-dark dark:text-backgroundBody'
          : 'border-red-200 bg-red-50 text-red-700 dark:border-red-900/40 dark:bg-red-950/90 dark:text-red-100',
      )}
    >
      {toast.message}
    </div>
  )
}

export function useToast() {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }

  return context
}

export function useToastOptional() {
  return useContext(ToastContext)
}
