'use client'

import { useToastOptional } from '@/components/wow/shared/ToastProvider'
import { CAL_HELP_PHONE } from '@/lib/calcom/config'
import type { CalSlotsByDate } from '@/lib/calcom/types'
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Loader2,
  PenLine,
  Phone,
} from 'lucide-react'
import { useCallback, useEffect, useMemo, useState } from 'react'

type WizardStep = 'datetime' | 'details' | 'success'

type MeetBookingWizardProps = {
  calLink?: string
}

const WEEKDAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

const inputClassName =
  'w-full rounded-radius-sm border border-black/10 bg-backgroundBody px-4 py-3 text-base text-secondary placeholder:text-muted focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/15 dark:border-white/10 dark:bg-dark dark:text-backgroundBody'

function formatMonthYear(date: Date) {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

function formatDateKey(date: Date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function formatDisplayDate(dateKey: string) {
  const [y, m, d] = dateKey.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  })
}

function formatTime(iso: string, timeZone: string) {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone,
  }).format(new Date(iso))
}

function getMonthRange(viewDate: Date) {
  const start = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1)
  const end = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0)
  return { start: formatDateKey(start), end: formatDateKey(end) }
}

function buildCalendarDays(viewDate: Date) {
  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)

  const startOffset = (firstDay.getDay() + 6) % 7
  const days: Array<{ date: Date; inMonth: boolean }> = []

  for (let i = startOffset - 1; i >= 0; i--) {
    days.push({ date: new Date(year, month, -i), inMonth: false })
  }

  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push({ date: new Date(year, month, d), inMonth: true })
  }

  while (days.length % 7 !== 0) {
    const next = days.length - startOffset - lastDay.getDate() + 1
    days.push({ date: new Date(year, month + 1, next), inMonth: false })
  }

  return days
}

export default function MeetBookingWizard({ calLink }: MeetBookingWizardProps) {
  const toast = useToastOptional()
  const timeZone = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, [])

  const [step, setStep] = useState<WizardStep>('datetime')
  const [viewDate, setViewDate] = useState(() => new Date())
  const [slots, setSlots] = useState<CalSlotsByDate>({})
  const [loadingSlots, setLoadingSlots] = useState(true)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [comments, setComments] = useState('')

  const calendarDays = useMemo(() => buildCalendarDays(viewDate), [viewDate])
  const todayKey = formatDateKey(new Date())

  const fetchSlots = useCallback(async () => {
    setLoadingSlots(true)
    const { start, end } = getMonthRange(viewDate)

    try {
      const params = new URLSearchParams({ start, end, timeZone })
      const response = await fetch(`/api/cal/slots?${params.toString()}`)
      const data = (await response.json()) as { slots?: CalSlotsByDate; error?: string }

      if (!response.ok) {
        throw new Error(data.error ?? 'Unable to load availability.')
      }

      setSlots(data.slots ?? {})
    } catch (error) {
      toast?.showToast(error instanceof Error ? error.message : 'Unable to load availability.', 'error')
      setSlots({})
    } finally {
      setLoadingSlots(false)
    }
  }, [viewDate, timeZone, toast])

  useEffect(() => {
    fetchSlots()
  }, [fetchSlots])

  const slotsForSelectedDate = selectedDate ? (slots[selectedDate] ?? []) : []

  const handleDateSelect = (dateKey: string, hasSlots: boolean) => {
    if (!hasSlots) return
    setSelectedDate(dateKey)
    setSelectedSlot(null)
  }

  const handleTimeSelect = (slotStart: string) => {
    setSelectedSlot(slotStart)
  }

  const handleContinueToDetails = () => {
    if (selectedSlot) setStep('details')
  }

  const handleBack = () => {
    if (step === 'details') {
      setStep('datetime')
      return
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!selectedSlot) return

    setSubmitting(true)
    try {
      const response = await fetch('/api/cal/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          start: selectedSlot,
          firstName,
          lastName,
          email,
          phone,
          comments,
          timeZone,
        }),
      })

      const data = (await response.json()) as { error?: string }

      if (!response.ok) {
        throw new Error(data.error ?? 'Unable to complete booking.')
      }

      setStep('success')
      toast?.showToast('Your meeting has been booked successfully!')
    } catch (error) {
      toast?.showToast(error instanceof Error ? error.message : 'Unable to complete booking.', 'error')
    } finally {
      setSubmitting(false)
    }
  }

  const sidebarContent =
    step === 'details'
      ? {
          icon: PenLine,
          title: 'Enter Your Information',
          description: 'Please enter your contact information to confirm your appointment.',
        }
      : {
          icon: CalendarDays,
          title: 'Select Date & Time',
          description: 'Please select a date and time for your appointment.',
        }

  const SidebarIcon = sidebarContent.icon

  if (step === 'success') {
    return (
      <div className="flex min-h-[520px] flex-col items-center justify-center rounded-radius-md border border-black/10 bg-backgroundBody px-6 py-16 text-center dark:border-white/10 dark:bg-dark">
        <span className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CalendarDays className="size-7" aria-hidden />
        </span>
        <h3 className="text-2xl text-secondary dark:text-backgroundBody">
          Booking confirmed
        </h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
          Thank you, {firstName}! Your consultation is scheduled
          {selectedDate && selectedSlot
            ? ` for ${formatDisplayDate(selectedDate)} at ${formatTime(selectedSlot, timeZone)}`
            : ''}
          . A confirmation email has been sent to {email}.
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-radius-md border border-black/10 bg-backgroundBody dark:border-white/10 dark:bg-dark">
      <div className="grid min-h-[560px] grid-cols-1 lg:grid-cols-[280px_1fr]">
        <aside className="flex flex-col border-b border-black/5 bg-background px-6 py-8 dark:border-white/5 dark:bg-dark-300 lg:border-b-0 lg:border-r">
          <div className="mx-auto max-w-[220px] text-center lg:mx-0">
            <span className="mx-auto mb-5 inline-flex size-16 items-center justify-center rounded-radius-sm bg-primary/10 text-primary lg:mx-0">
              <SidebarIcon className="size-7" strokeWidth={1.5} aria-hidden />
            </span>
            <h3 className="text-xl leading-snug text-secondary dark:text-backgroundBody md:text-2xl">
              {sidebarContent.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{sidebarContent.description}</p>
          </div>

          <div className="mt-auto hidden pt-10 text-center text-sm text-muted lg:block">
            <p className="font-medium text-secondary dark:text-backgroundBody">Questions?</p>
            <p className="mt-1 flex items-center justify-center gap-1.5">
              <Phone className="size-3.5" aria-hidden />
              Call {CAL_HELP_PHONE} for help
            </p>
          </div>
        </aside>

        <div className="flex min-w-0 flex-col bg-backgroundBody dark:bg-dark">
          <div className="border-b border-black/5 px-5 py-4 dark:border-white/5 sm:px-8">
            <h4 className="text-lg text-secondary dark:text-backgroundBody md:text-xl">
              {step === 'details' ? 'Customer Information' : 'Date & Time Selection'}
            </h4>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8">
            {step === 'datetime' && (
              <div className="space-y-8">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-base font-medium text-secondary dark:text-backgroundBody">
                      {formatMonthYear(viewDate)}
                    </p>
                    <div className="flex gap-1">
                      <button
                        type="button"
                        onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))}
                        className="inline-flex size-9 items-center justify-center rounded-radius-sm border border-black/10 text-secondary transition-colors hover:bg-primary/10 dark:border-white/10 dark:text-backgroundBody"
                        aria-label="Previous month">
                        <ChevronLeft className="size-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))}
                        className="inline-flex size-9 items-center justify-center rounded-radius-sm border border-black/10 text-secondary transition-colors hover:bg-primary/10 dark:border-white/10 dark:text-backgroundBody"
                        aria-label="Next month">
                        <ChevronRight className="size-4" />
                      </button>
                    </div>
                  </div>

                  {loadingSlots ? (
                    <div className="flex min-h-[280px] items-center justify-center">
                      <Loader2 className="size-8 animate-spin text-primary" aria-label="Loading calendar" />
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-7 border border-black/5 bg-background dark:border-white/5 dark:bg-dark-200">
                        {WEEKDAYS.map((day, index) => (
                          <div
                            key={`${day}-${index}`}
                            className="border-r border-black/5 py-2 text-center text-xs font-medium text-muted last:border-r-0 dark:border-white/5">
                            {day}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-7 border-x border-b border-black/5 dark:border-white/5">
                        {calendarDays.map(({ date, inMonth }) => {
                          const dateKey = formatDateKey(date)
                          const daySlots = slots[dateKey] ?? []
                          const hasSlots = daySlots.length > 0
                          const isSelected = selectedDate === dateKey
                          const isToday = dateKey === todayKey
                          const isPast = dateKey < todayKey

                          const isClickable = inMonth && hasSlots && !isPast

                          return (
                            <button
                              key={dateKey + inMonth}
                              type="button"
                              disabled={!isClickable}
                              onClick={() => handleDateSelect(dateKey, isClickable)}
                              className={[
                                'relative flex h-14 flex-col items-center justify-center border-r border-b border-black/5 text-sm transition-colors last:border-r-0 dark:border-white/5',
                                !inMonth ? 'bg-backgroundBody/60 text-muted/40 dark:bg-dark-300 dark:text-muted/40' : '',
                                inMonth && !hasSlots ? 'cursor-not-allowed text-muted/40' : '',
                                isClickable && !isSelected
                                  ? 'cursor-pointer text-secondary hover:bg-primary/5 dark:text-backgroundBody'
                                  : '',
                                isSelected ? 'cursor-pointer bg-primary text-white' : '',
                                isToday && !isSelected ? 'bg-primary/10' : '',
                                !isClickable && inMonth ? 'cursor-not-allowed opacity-60' : '',
                              ]
                                .filter(Boolean)
                                .join(' ')}>
                              {inMonth ? date.getDate() : ''}
                              {inMonth && hasSlots && !isSelected && (
                                <span className="absolute bottom-1.5 h-0.5 w-5 rounded-full bg-primary" />
                              )}
                              {isSelected && (
                                <span className="absolute bottom-1.5 h-0.5 w-5 rounded-full bg-white/90" />
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </>
                  )}
                </div>

                {selectedDate && (
                  <div>
                    <div className="relative mb-5 flex items-center">
                      <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
                      <p className="px-4 text-sm text-muted">
                        Pick a slot for{' '}
                        <span className="font-medium text-primary">{formatDisplayDate(selectedDate)}</span>
                      </p>
                      <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
                    </div>

                    {slotsForSelectedDate.length === 0 ? (
                      <p className="text-center text-sm text-muted">No times available for this date.</p>
                    ) : (
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                        {slotsForSelectedDate.map((slot) => {
                          const isActive = selectedSlot === slot.start

                          return (
                            <button
                              key={slot.start}
                              type="button"
                              onClick={() => handleTimeSelect(slot.start)}
                              className={[
                                'rounded-radius-sm border px-3 py-3 text-sm font-medium transition-colors',
                                isActive
                                  ? 'border-primary bg-primary text-white'
                                  : 'border-black/10 bg-primary/5 text-secondary hover:border-primary/40 dark:border-white/10 dark:bg-primary/10 dark:text-backgroundBody',
                              ].join(' ')}>
                              {formatTime(slot.start, timeZone)}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {step === 'details' && (
              <form id="meet-booking-form" onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name*"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={inputClassName}
                    required
                    disabled={submitting}
                  />
                  <input
                    type="text"
                    placeholder="Last Name*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={inputClassName}
                    required
                    disabled={submitting}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClassName}
                    disabled={submitting}
                  />
                  <input
                    type="email"
                    placeholder="Email Address*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClassName}
                    required
                    disabled={submitting}
                  />
                </div>

                <textarea
                  placeholder="Add Comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  rows={5}
                  className={`${inputClassName} min-h-32 resize-y`}
                  disabled={submitting}
                />

                {selectedDate && selectedSlot && (
                  <p className="text-sm text-muted">
                    Selected: {formatDisplayDate(selectedDate)} at {formatTime(selectedSlot, timeZone)} (
                    {timeZone})
                  </p>
                )}
              </form>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-black/5 px-5 py-4 dark:border-white/5 sm:px-8">
            {step === 'details' ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-secondary dark:hover:text-backgroundBody">
                <ChevronLeft className="size-4" />
                Back
              </button>
            ) : (
              <span />
            )}

            {step === 'datetime' && selectedSlot && (
              <button
                type="button"
                onClick={handleContinueToDetails}
                className="ml-auto inline-flex items-center gap-2 rounded-radius-sm bg-primary px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 [&_svg]:stroke-white">
                Next
                <ChevronRight className="size-4" aria-hidden />
              </button>
            )}

            {step === 'details' && (
              <button
                type="submit"
                form="meet-booking-form"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-radius-sm bg-primary px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60 [&_svg]:stroke-white">
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden />
                    Booking...
                  </>
                ) : (
                  <>
                    Confirm Booking
                    <ChevronRight className="size-4" aria-hidden />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
