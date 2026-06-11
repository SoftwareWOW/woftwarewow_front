'use client'

import logoDark from '@/public/images/logo-wow-white.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navItems = ['Company', 'For you', 'Explore', 'More']

export default function WowNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)

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

          <Link
            href="/contact"
            className="flex size-[58px] shrink-0 items-center justify-center rounded-[5px] bg-primary transition hover:brightness-110 sm:size-[79px]"
            aria-label="Contact us">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
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
