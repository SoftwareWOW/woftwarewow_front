'use client'

import { Link } from '@/i18n/navigation'
import type { Dictionary } from '@/i18n/types'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useRef, useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { navbarBrandLogo } from './nav/nav-brand-assets'
import WowMegaMenuPanel from './nav/WowMegaMenuPanel'
import WowMobileBottomNav from './nav/WowMobileBottomNav'
import WowMobileMenuSheet from './nav/WowMobileMenuSheet'

const actionBtnClass =
  "group flex shrink-0 items-center justify-center rounded-[5px] bg-primary p-5 text-white transition-all duration-300 ease-out hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 size-[60px] xl:size-[79px]"
const iconClass =
  "w-10 h-10 xl:w-10 xl:h-10 transition-transform duration-300 ease-out group-hover:rotate-[30deg]"

type WowNavbarProps = {
  navbar: Dictionary['navbar']
  navigation: Dictionary['navigation']
  languageSwitcher: Dictionary['languageSwitcher']
}

export default function WowNavbar({ navbar, navigation, languageSwitcher }: WowNavbarProps) {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null)
  const [mobileMenuId, setMobileMenuId] = useState<string | null>(null)
  const [actionMenuOpen, setActionMenuOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const actionMenuRef = useRef<HTMLDivElement>(null)
  const navContainerRef = useRef<HTMLDivElement>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  const closeMegaMenu = useCallback(() => {
    clearCloseTimer()
    setActiveMenuId(null)
  }, [clearCloseTimer])

  const openMegaMenu = useCallback(
    (id: string) => {
      clearCloseTimer()
      setActiveMenuId(id)
    },
    [clearCloseTimer],
  )

  const scheduleCloseMegaMenu = useCallback(() => {
    clearCloseTimer()
    closeTimerRef.current = setTimeout(() => setActiveMenuId(null), 180)
  }, [clearCloseTimer])

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

  useEffect(() => {
    if (!activeMenuId) return

    const handleClickOutside = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        closeMegaMenu()
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMegaMenu()
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [activeMenuId, closeMegaMenu])

  useEffect(() => {
    return () => clearCloseTimer()
  }, [clearCloseTimer])

  const handleToggleTheme = () => setTheme(currentTheme === 'dark' ? 'light' : 'dark')

  const mainIcon = (
    <svg  viewBox="0 0 29 29" fill="none" aria-hidden className={iconClass}>
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  const darkModeIcon =
    currentTheme === 'dark' ? (
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden className={iconClass}>
        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" />
        <path
          d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ) : (
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden className={iconClass}>
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

  const activeItem = navigation.items.find((item) => item.id === activeMenuId)
  const mobileItem = navigation.items.find((item) => item.id === mobileMenuId) ?? null

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[1000] px-2 pt-2 sm:px-3 lg:px-2 lg:pt-2">
        <div ref={navContainerRef}>
          <nav
            className="mx-auto flex max-w-[1370px] items-center justify-between rounded-[8px] bg-white p-[10px] shadow-nav dark:bg-dark-200 dark:shadow-none"
            aria-label={navbar.mainNavigation}>
            <Link href="/" className="flex shrink-0 items-center ps-5 xl:w-[220px] 2xl:w-[289px]">
              <Image
                className="h-[20px] w-auto dark:hidden"
                src={navbarBrandLogo.light}
                alt={navbar.logoAlt}
                width={183}
                height={19}
                unoptimized
                priority
              />
              <Image
                className="hidden h-[20px] w-auto dark:block"
                src={navbarBrandLogo.dark}
                alt={navbar.logoAltDark}
                width={183}
                height={19}
                unoptimized
                priority
              />
            </Link>

            <ul className="hidden items-center gap-[5px] xl:flex">
              {navigation.items.map((item) => {
                const isActive = activeMenuId === item.id

                return (
                  <li
                    key={item.id}
                    onMouseEnter={() => openMegaMenu(item.id)}
                    onMouseLeave={scheduleCloseMegaMenu}>
                    <button
                      type="button"
                      onClick={() => (isActive ? closeMegaMenu() : openMegaMenu(item.id))}
                      className={`flex items-center gap-[10px] rounded-[40px] px-5 py-2 text-sm font-normal uppercase tracking-[2.1px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 2xl:px-8 2xl:py-4 ${
                        isActive
                          ? 'bg-black/[0.04] text-black dark:bg-white/[0.06] dark:text-backgroundBody'
                          : 'text-black/50 hover:bg-black/[0.03] hover:text-black dark:text-dark-100 dark:hover:bg-white/[0.04] dark:hover:text-backgroundBody'
                      }`}
                      aria-expanded={isActive}
                      aria-haspopup="true">
                      {item.label}
                      <span className={`flex shrink-0 transition-transform duration-300 ${isActive ? '' : 'rotate-180'}`}>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden>
                          <path d="M1 1.5L7 6.5L13 1.5" stroke="currentColor" strokeWidth="1.2" />
                        </svg>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>

            <div className="relative" ref={actionMenuRef}>
              <button
                type="button"
                onClick={() => setActionMenuOpen((open) => !open)}
                className={`${actionBtnClass} xl:hidden ${actionMenuOpen ? 'bg-primary/80' : ''}`}
                aria-label={actionMenuOpen ? navbar.closeActions : navbar.openActions}
                aria-expanded={actionMenuOpen}>
                {mainIcon}
              </button>

              <button
                type="button"
                onClick={() => setActionMenuOpen((open) => !open)}
                className={`${actionBtnClass} hidden xl:flex ${actionMenuOpen ? 'bg-primary/80' : ''}`}
                aria-label={actionMenuOpen ? navbar.closeActions : navbar.openActions}
                aria-expanded={actionMenuOpen}>
                {mainIcon}
              </button>
{actionMenuOpen && (
  <div className="absolute top-full z-50 mt-2 -left-[6px] flex flex-col gap-2 rounded-bl-lg rounded-br-lg bg-white p-2 dark:bg-dark-200">

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
      {languageIcon}
    </button>

    <button
      type="button"
      className={actionBtnClass}
      aria-label={navbar.openMessages}
    >
      {messagesIcon}
    </button>

  </div>
)}
            </div>
          </nav>

          {activeItem && (
            <div
              className="hidden xl:block"
              onMouseEnter={() => openMegaMenu(activeItem.id)}
              onMouseLeave={scheduleCloseMegaMenu}>
              <WowMegaMenuPanel
                item={activeItem}
                detailPanels={navigation.detailPanels}
                onNavigate={closeMegaMenu}
              />
            </div>
          )}
        </div>
      </header>

      <WowMobileBottomNav
        items={navigation.items}
        activeId={mobileMenuId}
        onSelect={(id) => setMobileMenuId(id || null)}
      />

      <WowMobileMenuSheet item={mobileItem} navbar={navbar} onClose={() => setMobileMenuId(null)} />

      <LanguageSwitcher open={languageOpen} onOpenChange={setLanguageOpen} dictionary={languageSwitcher} />
    </>
  )
}
