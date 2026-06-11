'use client'

import { usePathname, useRouter } from '@/i18n/navigation'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/types'
import { VisuallyHidden } from '@/components/shared/VisuallyHidden'
import * as Dialog from '@radix-ui/react-dialog'
import { useLocale } from 'next-intl'
import { useCallback } from 'react'
type LanguageSwitcherProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  dictionary: Dictionary['languageSwitcher']
}

export default function LanguageSwitcher({ open, onOpenChange, dictionary }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale() as Locale

  const handleSelect = useCallback(
    (locale: Locale) => {
      if (locale === currentLocale) {
        onOpenChange(false)
        return
      }

      router.replace(pathname, { locale })
      onOpenChange(false)
    },
    [currentLocale, onOpenChange, pathname, router],
  )

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[1100] bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[1101] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-nav outline-none dark:bg-dark-200 dark:shadow-none">
          <VisuallyHidden>
            <Dialog.Title>{dictionary.title}</Dialog.Title>
            <Dialog.Description>{dictionary.description}</Dialog.Description>
          </VisuallyHidden>

          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-normal text-secondary dark:text-backgroundBody">{dictionary.title}</h2>
              <p className="mt-2 text-sm text-colorText dark:text-dark-100">{dictionary.description}</p>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="flex size-9 shrink-0 items-center justify-center rounded-md border border-secondary/10 text-secondary transition hover:bg-black/5 dark:border-dark dark:text-backgroundBody dark:hover:bg-white/5"
                aria-label={dictionary.close}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </Dialog.Close>
          </div>

          <div
            role="radiogroup"
            aria-label={dictionary.title}
            className="max-h-[min(60vh,420px)] space-y-2 overflow-y-auto pe-1">
            {dictionary.options.map((option) => {
              const isSelected = option.locale === currentLocale

              return (
                <button
                  key={option.locale}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => handleSelect(option.locale as Locale)}
                  className={`flex w-full items-center justify-between gap-3 rounded-lg border px-4 py-3 text-left transition ${
                    isSelected
                      ? 'border-primary bg-primary/5 dark:bg-primary/10'
                      : 'border-secondary/10 hover:border-primary/30 hover:bg-black/[0.02] dark:border-dark dark:hover:bg-white/[0.03]'
                  }`}>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-secondary dark:text-backgroundBody">{option.name}</p>
                    <p className="mt-0.5 text-xs uppercase tracking-wider text-colorText dark:text-dark-100">
                      {option.code}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    {isSelected && (
                      <span className="sr-only">{dictionary.selected}</span>
                    )}
                    <span
                      className={`flex size-5 items-center justify-center rounded-full border ${
                        isSelected ? 'border-primary bg-primary text-white' : 'border-secondary/20 dark:border-dark'
                      }`}
                      aria-hidden>
                      {isSelected && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6L5 8.5L9.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
