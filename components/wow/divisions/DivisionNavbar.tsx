'use client'

import type { DivisionSiteConfig } from '@/components/wow/divisions/division-site-config'
import LanguageSwitcher from '@/components/wow/LanguageSwitcher'
import { navPillInactiveClass } from '@/components/wow/nav/nav-interaction-styles'
import { useContactDialogOptional } from '@/components/wow/shared/ContactDialogProvider'
import { Link } from '@/i18n/navigation'
import type { Dictionary } from '@/i18n/types'
import { motion } from 'framer-motion'
import { ArrowDown, Globe, Menu, MessageCircle, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

const actionBtnClass =
  'group flex shrink-0 items-center justify-center rounded-radius-sm bg-primary p-4 text-white transition-all duration-300 ease-out hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 size-[52px] md:size-[56px] lg:size-[65px] xl:size-[79px] md:p-4 lg:p-5'

const iconClass =
  'size-7 !text-white !stroke-white transition-transform duration-300 ease-out group-hover:rotate-[180deg] md:size-8 lg:size-9 xl:size-10'

type DivisionNavbarProps = {
  config: DivisionSiteConfig
  navbar: Dictionary['navbar']
  languageSwitcher: Dictionary['languageSwitcher']
}

export default function DivisionNavbar({ config, navbar, languageSwitcher }: DivisionNavbarProps) {
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [navbarHidden, setNavbarHidden] = useState(false)
  const [actionMenuOpen, setActionMenuOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const lastScrollYRef = useRef(0)
  const actionMenuRef = useRef<HTMLDivElement>(null)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const contactDialog = useContactDialogOptional()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (actionMenuOpen || mobileOpen) return

      const docHeight = document.documentElement.scrollHeight
      const nearBottom = y + window.innerHeight >= docHeight - 120

      if (nearBottom) {
        setNavbarHidden(true)
        setActionMenuOpen(false)
      } else if (y < 80) {
        setNavbarHidden(false)
      } else if (y > lastScrollYRef.current) {
        setNavbarHidden(true)
        setMobileOpen(false)
        setActionMenuOpen(false)
      } else if (y < lastScrollYRef.current) {
        setNavbarHidden(false)
      }
      lastScrollYRef.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [actionMenuOpen, mobileOpen])

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

  const openActionMenuOnDesktop = () => {
    if (window.innerWidth >= 768) {
      setActionMenuOpen(true)
      setNavbarHidden(false)
    }
  }

  const closeActionMenuOnDesktop = () => {
    if (window.innerWidth >= 768) {
      setActionMenuOpen(false)
    }
  }

  const handleToggleTheme = useCallback(() => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark')
  }, [currentTheme, setTheme])

  const darkModeIcon =
    currentTheme === 'dark' ? (
      <Sun aria-hidden className={iconClass} strokeWidth={1.5} />
    ) : (
      <Moon aria-hidden className={iconClass} strokeWidth={1.5} />
    )

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[1000] w-full max-w-full overflow-x-clip px-[15px] pt-2 md:px-4 lg:px-8"
        initial={false}
        animate={{ y: navbarHidden ? '-120%' : '0%' }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto w-full max-w-[1370px] min-w-0">
          <nav
            className="relative flex w-full min-w-0 items-center justify-between gap-2 rounded-radius-sm bg-white p-[10px] dark:bg-[#1F1F1F]"
            aria-label={`${config.name} navigation`}
          >
            <Link
              href={config.homeHref}
              className="flex min-w-0 shrink items-center ps-2 md:w-[150px] md:ps-3 lg:w-[200px] lg:ps-5"
            >
              <Image
                className="h-[20px] w-auto max-w-[calc(100vw-120px)] dark:hidden"
                src={config.logo.light}
                alt={config.logoAlt}
                width={200}
                height={24}
                unoptimized
                priority
              />
              <Image
                className="hidden h-[20px] w-auto max-w-[calc(100vw-120px)] dark:block"
                src={config.logo.dark}
                alt={config.logoAlt}
                width={200}
                height={24}
                unoptimized
                priority
              />
            </Link>

            <ul className="hidden min-w-0 flex-1 items-center justify-center md:flex md:gap-0 lg:gap-1">
              {config.navItems.map((item) => (
                <li key={item.id} className="shrink">
                  <Link
                    href={item.href}
                    className={`group/nav-pill flex items-center justify-center whitespace-nowrap rounded-radius-sm px-2.5 py-4 font-outfit text-[10px] font-normal uppercase tracking-[1px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:px-3 md:py-[18px] lg:px-5 lg:py-5 lg:text-xs lg:tracking-[1.4px] xl:px-6 xl:py-[22px] xl:text-sm ${navPillInactiveClass}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-radius-sm bg-primary text-white md:hidden"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                onClick={() => {
                  setMobileOpen((open) => !open)
                  setActionMenuOpen(false)
                }}
              >
                {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>

              <div
                className="relative z-[1002]"
                ref={actionMenuRef}
                onMouseEnter={openActionMenuOnDesktop}
                onMouseLeave={closeActionMenuOnDesktop}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setActionMenuOpen((open) => !open)
                      setMobileOpen(false)
                    }
                  }}
                  className={`${actionBtnClass} ${actionMenuOpen ? 'bg-primary/80' : ''}`}
                  aria-label={actionMenuOpen ? navbar.closeActions : navbar.openActions}
                  aria-expanded={actionMenuOpen}
                >
                  <ArrowDown aria-hidden className={iconClass} strokeWidth={2} />
                </button>

                {actionMenuOpen && (
                  <div className="absolute -left-[6px] top-full z-50 flex flex-col gap-2 rounded-bl-lg rounded-br-lg bg-white p-2 dark:bg-dark">
                    {mounted && (
                      <button
                        type="button"
                        className={actionBtnClass}
                        aria-label={navbar.toggleDarkMode}
                        onClick={handleToggleTheme}
                      >
                        {darkModeIcon}
                      </button>
                    )}

                    <button
                      type="button"
                      className={actionBtnClass}
                      aria-label={navbar.changeLanguage}
                      onClick={() => {
                        setActionMenuOpen(false)
                        setLanguageOpen(true)
                      }}
                    >
                      <Globe aria-hidden className={iconClass} strokeWidth={1.5} />
                    </button>

                    <button
                      type="button"
                      className={actionBtnClass}
                      aria-label={navbar.openMessages}
                      onClick={() => {
                        setActionMenuOpen(false)
                        contactDialog?.open()
                      }}
                    >
                      <MessageCircle aria-hidden className={iconClass} strokeWidth={1.5} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </nav>

          {mobileOpen && (
            <div className="mt-2 rounded-radius-sm border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-[#1F1F1F] md:hidden">
              <ul className="space-y-1">
                {config.navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-radius-sm px-4 py-3 text-sm uppercase tracking-[0.08em] text-black hover:bg-primary-50 dark:text-white dark:hover:bg-[#2D2B52]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.header>
      <div className="h-[72px] md:h-[84px]" aria-hidden />
      <LanguageSwitcher open={languageOpen} onOpenChange={setLanguageOpen} dictionary={languageSwitcher} />
    </>
  )
}
