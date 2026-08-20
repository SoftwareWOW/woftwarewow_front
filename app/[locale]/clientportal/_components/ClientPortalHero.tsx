'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { Link } from '@/i18n/navigation'
import { Lock, Mail } from 'lucide-react'
import { FormEvent, useState } from 'react'

const inputClassName =
  'w-full rounded-radius-sm border border-[#1515151A] bg-backgroundBody py-4 pl-12 pr-5 text-base leading-[1.4] tracking-[0.02em] text-secondary placeholder:text-[#808080] focus:border-[#1515151A] focus:outline-none focus:bg-[#D9D8F3] dark:focus:bg-[#1F1F1F] dark:border-[#EDF0F51A] dark:bg-dark dark:text-backgroundBody dark:placeholder:text-dark-100 md:text-lg'

const socialButtonClassName =
  'inline-flex size-11 items-center justify-center rounded-full border border-[#1515151A] bg-backgroundBody text-secondary transition-colors hover:border-primary/30 dark:border-[#EDF0F51A] dark:bg-dark dark:text-backgroundBody dark:hover:border-[#EDF0F533]'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
  </svg>
)

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
    <path
      fill="currentColor"
      d="M21.6 12.23c0-.74-.07-1.45-.2-2.13H12v4.03h5.4a4.62 4.62 0 0 1-2 3.03v2.5h3.24c1.9-1.75 2.96-4.33 2.96-7.43Z"
    />
    <path
      fill="currentColor"
      d="M12 22c2.7 0 4.96-.9 6.62-2.34l-3.24-2.5c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.76-5.58-4.12H3.07v2.58A10 10 0 0 0 12 22Z"
    />
    <path
      fill="currentColor"
      d="M6.42 13.99A6.01 6.01 0 0 1 6.1 12c0-.69.12-1.36.32-1.99V7.43H3.07A10 10 0 0 0 2 12c0 1.61.38 3.13 1.07 4.57l3.35-2.58Z"
    />
    <path
      fill="currentColor"
      d="M12 5.88c1.47 0 2.79.5 3.83 1.5l2.87-2.87C16.95 2.9 14.7 2 12 2A10 10 0 0 0 3.07 7.43l3.35 2.58C7.2 7.64 9.4 5.88 12 5.88Z"
    />
  </svg>
)

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
    <path d="M16.7 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9s-1.8-1-3-1c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-.1 2.9-2.3c.7-1 1.2-2 1.5-3.1-3.6-1.4-3.8-6.4-.8-8.1ZM14.8 5.9c.6-.8 1.1-1.9.9-3-1 .1-2.2.7-2.9 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.5 3-1.4Z" />
  </svg>
)
const ClientPortalHero = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section
      className="relative overflow-hidden pt-[120px] sm:pt-[135px] md:pt-[150px] lg:pt-44 xl:pt-48"
      aria-labelledby="client-portal-hero-heading"
    >
      <HeroGradientAnimation />

      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col items-start justify-start gap-y-10 px-6 md:px-14 xl:flex-row xl:items-center xl:justify-between xl:gap-x-16">
        <div className="flex-1">
          <RevealWrapper className="reveal-me mb-4 md:mb-5">
            <SectionLabel>CLIENT PORTAL</SectionLabel>
          </RevealWrapper>
          <RevealWrapper
            as="h1"
            id="client-portal-hero-heading"
            className="reveal-me text-[clamp(2rem,4.571vw,5.5rem)] font-normal leading-[1.15] tracking-[-0.03em]"
          >
            Everything in <InstrumentText variant="solid">Place.</InstrumentText>
          </RevealWrapper>
          <RevealWrapper as="p" className="reveal-me mt-3 max-w-xl text-[#808080]">
            Access your projects, files, updates, billing, and communication with the WOW team.
          </RevealWrapper>
        </div>

        <RevealWrapper className="reveal-me w-full max-w-[480px] flex-1 xl:max-w-[520px]">
          <div className="rounded-radius-md border border-[#1515151A] bg-backgroundBody p-6 dark:border-[#EDF0F51A] dark:bg-dark sm:p-8 md:p-10">
            <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-normal leading-[1.2] tracking-[-0.02em]">
              Log in to your account!
            </h2>
            <p className="mt-2 text-base text-[#808080]">Enter your Full Details</p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
              <label className="sr-only" htmlFor="client-portal-email">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#808080]"
                  aria-hidden
                />
                <input
                  id="client-portal-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                  className={inputClassName}
                  autoComplete="email"
                />
              </div>

              <label className="sr-only" htmlFor="client-portal-password">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#808080]"
                  aria-hidden
                />
                <input
                  id="client-portal-password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                  className={inputClassName}
                  autoComplete="current-password"
                />
              </div>

              <label className="flex items-center gap-2 text-sm text-[#808080]">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  className="size-4 rounded-sm border border-[#1515151A] accent-primary dark:border-[#EDF0F51A]"
                />
                Remember me
              </label>

              <ButtonComponent type="submit" variant="primary" fullWidth>
                Continue
              </ButtonComponent>
            </form>

            <p className="mt-8 text-center text-sm text-[#808080]">Sign in With</p>
            <div className="mt-4 flex justify-center gap-3">
              <button type="button" className={socialButtonClassName} aria-label="Sign in with Facebook">
                <FacebookIcon />
              </button>
              <button type="button" className={socialButtonClassName} aria-label="Sign in with Google">
                <GoogleIcon />
              </button>
              <button type="button" className={socialButtonClassName} aria-label="Sign in with Apple">
                <AppleIcon />
              </button>
            </div>

            <p className="mt-8 text-center text-sm text-[#808080]">
              Don&apos;t have an account?{' '}
              <Link href="/contact" className="text-secondary underline-offset-4 hover:underline dark:text-backgroundBody">
                Sign up
              </Link>
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ClientPortalHero
