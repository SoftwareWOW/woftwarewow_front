'use client'

import { footerSectionBgClass } from '@/components/wow/footer/footer-shell-styles'
import { useToastOptional } from '@/components/wow/shared/ToastProvider'
import { Link } from '@/i18n/navigation'
import { cn } from '@/utils/cn'
import { useLocale } from 'next-intl'
import { FormEvent, useId, useState } from 'react'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const SUCCESS_MESSAGE = 'Thanks for joining WOW Hub! Please check your inbox to confirm your subscription.'

const mutedText = '!text-[#808080]'

export default function FooterNewsletterSubscribe() {
  const toast = useToastOptional()
  const locale = useLocale()
  const consentId = useId()
  const statusId = useId()
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [website, setWebsite] = useState('')
  const [fieldError, setFieldError] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFieldError('')
    setFormMessage('')
    setIsSuccess(false)

    const normalized = email.trim().toLowerCase()

    if (!normalized || !EMAIL_PATTERN.test(normalized)) {
      setFieldError('Please enter a valid email address.')
      return
    }

    if (!consent) {
      setFieldError('Please agree to receive WOW Hub emails before subscribing.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: normalized,
          consent: true,
          locale,
          website,
        }),
      })

      const data = (await response.json()) as {
        error?: string
        status?: string
        message?: string
      }

      if (!response.ok) {
        const errorText = data.error ?? 'Unable to start your subscription. Please try again.'
        toast?.showToast(errorText, 'error')
        return
      }

      if (data.status === 'already_subscribed') {
        toast?.showToast(data.message ?? 'This email is already subscribed to WOW Hub.', 'error')
        return
      }

      setIsSuccess(true)
      setFormMessage(SUCCESS_MESSAGE)
      setEmail('')
      setConsent(false)
    } catch {
      toast?.showToast('Unable to start your subscription. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex w-full max-w-[520px] flex-col items-center gap-3 lg:items-start">
      <p
        className={cn(
          'text-center font-outfit text-xs font-light leading-[1.5] sm:text-sm lg:text-left 2xl:text-base 2xl:leading-[1.6]',
          mutedText,
        )}>
        Ideas, insights and practical ways to grow your business.
      </p>

      <form onSubmit={handleSubscribe} className="relative flex w-full flex-col gap-2 sm:flex-row sm:items-stretch">
        <input
          type="text"
          name="website"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="pointer-events-none absolute h-0 w-0 opacity-0"
        />

        <input
          type="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
            if (fieldError) setFieldError('')
            if (isSuccess) {
              setFormMessage('')
              setIsSuccess(false)
            }
          }}
          placeholder="hello@email.com"
          aria-label="Email address"
          aria-invalid={fieldError ? true : undefined}
          aria-describedby={fieldError || (isSuccess && formMessage) ? statusId : undefined}
          disabled={isSubmitting}
          className={cn(
            'h-10 min-w-0 flex-1 rounded-radius-sm border px-3 font-outfit text-sm font-light sm:h-11 2xl:h-14 2xl:px-4 2xl:text-base',
            'border-[#1515151A] text-secondary placeholder:text-[#808080] focus:outline-none',
            footerSectionBgClass,
            'dark:border-[#EDF0F51A] dark:text-[#F2F2F2]',
            fieldError ? 'border-red-500/70 dark:border-red-400/70' : null,
          )}
        />
        <button
          type="submit"
          disabled={isSubmitting || !consent}
          aria-busy={isSubmitting}
          className="inline-flex h-10 shrink-0 items-center justify-center rounded-radius-sm bg-primary px-5 font-outfit text-[10px] font-medium uppercase tracking-[0.08em] text-white transition-opacity hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:h-11 sm:px-6 sm:text-xs 2xl:h-14 2xl:px-8 2xl:text-sm">
          {isSubmitting ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>

      <label
        htmlFor={consentId}
        className={cn(
          'flex w-full cursor-pointer items-start gap-2 text-left font-outfit text-[11px] font-light leading-[1.45] sm:text-xs 2xl:text-sm',
          mutedText,
        )}>
        <input
          id={consentId}
          type="checkbox"
          checked={consent}
          onChange={(event) => {
            setConsent(event.target.checked)
            if (fieldError) setFieldError('')
          }}
          disabled={isSubmitting}
          required
          className="mt-0.5 size-3.5 shrink-0 rounded border border-[#1515151A] accent-primary dark:border-[#EDF0F51A]"
        />
        <span>
          I agree to receive WOW Hub emails and understand I must confirm my subscription. See our{' '}
          <Link href="/policy" className="text-primary underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      <p
        id={statusId}
        role="status"
        aria-live="polite"
        className={cn(
          'min-h-[1.25rem] w-full text-left font-outfit text-[11px] font-light leading-[1.45] sm:text-xs 2xl:text-sm',
          fieldError ? 'text-red-600 dark:text-red-400' : isSuccess ? 'text-primary' : mutedText,
        )}>
        {fieldError || (isSuccess ? formMessage : null)}
      </p>
    </div>
  )
}
