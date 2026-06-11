'use client'

import logoDark from '@/public/images/logo-wow-white.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const navItems = ['Company', 'For you', 'Explore', 'More']

const actionBtnClass =
  'group flex size-[58px] shrink-0 items-center justify-center rounded-[5px] bg-primary text-white transition-all duration-300 ease-out hover:bg-primary/80 sm:size-[79px]'

const iconClass = 'transition-transform duration-300 ease-out group-hover:rotate-[30deg]'

export default function WowNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [actionMenuOpen, setActionMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const actionMenuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!actionMenuOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (actionMenuRef.current && !actionMenuRef.current.contains(e.target as Node)) {
        setActionMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [actionMenuOpen])

  // Icons for different actions
  const mainIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden className={iconClass}>
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  // const contactIcon = (
  //   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden className={iconClass}>
  //     <path
  //       d="M3 8L12 13L21 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z"
  //       stroke="white"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     />
  //   </svg>
  // )

  const darkModeIcon = currentTheme === 'dark' ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden className={iconClass}>
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" />
      <path
        d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden className={iconClass}>
      <path
        d="M12 3v2M12 19v2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M3 12h2M19 12h2M5.5 18.5l1.4-1.4M17.1 6.9l1.4-1.4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" />
      <path d="M12 8v8" stroke="white" strokeWidth="1.5" />
    </svg>
  )

  const languageIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden className={iconClass}>
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c-2.5 2.5-2.5 16.5 0 18M12 3c2.5 2.5 2.5 16.5 0 18"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  )

  const messagesIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden className={iconClass}>
      <path
        d="M5 8h11a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 5h10a2 2 0 0 1 2 2v5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )

  return (
    <header className="fixed left-0 right-0 top-0 z-[1000] px-4 pt-4 sm:px-8">
      <nav className="mx-auto flex max-w-[1370px] items-center justify-between rounded-lg bg-white px-3 py-2.5 shadow-nav dark:bg-dark-200 dark:shadow-none">
        <Link href="/" className="flex items-center gap-2 pl-3">
          <Image
            className="h-[34px] w-auto dark:hidden"
            src="/images/wow/wowlogo.png"
            alt="WOW"
            width={76}
            height={21}
            priority
          />
          <Image
            className="hidden h-[34px] w-auto dark:block"
            src={logoDark}
            alt="WOW Superagency"
            width={160}
            height={48}
            priority
          />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item}>
              <button
                type="button"
                className="flex items-center gap-2 rounded-full px-6 py-4 text-xs font-normal uppercase tracking-[2.1px] text-black/50 transition hover:text-black dark:text-dark-100 dark:hover:text-backgroundBody">
                {item}
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden>
                  <path d="M1 1.5L7 6.5L13 1.5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-md border border-secondary/10 lg:hidden dark:border-dark"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}>
            <span className="sr-only">Menu</span>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
              <path d="M0 1H20M0 7H20M0 13H20" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>

          <div className="relative" ref={actionMenuRef}>
            <button
              type="button"
              onClick={() => setActionMenuOpen((open) => !open)}
              className={`${actionBtnClass} ${actionMenuOpen ? 'bg-primary/80' : ''}`}
              aria-label={actionMenuOpen ? 'Close actions menu' : 'Open actions menu'}
              aria-expanded={actionMenuOpen}>
              {mainIcon}
            </button>

            {actionMenuOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 flex flex-col gap-2 rounded-lg bg-white p-2 shadow-nav dark:bg-dark-200 dark:shadow-none">
                {mounted && (
                  <button
                    type="button"
                    className={actionBtnClass}
                    aria-label="Toggle dark mode"
                    onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}>
                    {darkModeIcon}
                  </button>
                )}

                <button type="button" className={actionBtnClass} aria-label="Change language">
                  {languageIcon}
                </button>

                <button type="button" className={actionBtnClass} aria-label="Open messages">
                  {messagesIcon}
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-[1370px] rounded-lg border border-secondary/10 bg-white p-4 shadow-nav dark:border-dark dark:bg-dark-200 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="w-full rounded-md px-4 py-3 text-left text-sm uppercase tracking-[2px] text-secondary/70 hover:bg-black/5 dark:text-dark-100 dark:hover:bg-white/5">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
