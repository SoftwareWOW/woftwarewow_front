'use client'

import { Link } from '@/i18n/navigation'
import type { Dictionary } from '@/i18n/types'
import {
  ArrowUpRight,
  ChevronDown,
  Globe,
  MessageCircle,
  Moon,
  Sun,
} from 'lucide-react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useRef, useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { navbarBrandLogo } from './nav/nav-brand-assets'
import WowMegaMenuPanel from './nav/WowMegaMenuPanel'
import WowMobileBottomNav from './nav/WowMobileBottomNav'
import WowMobileMenuSheet from './nav/WowMobileMenuSheet'

const actionBtnClass =
  'group flex shrink-0 items-center justify-center rounded-[5px] bg-primary p-5 text-white transition-all duration-300 ease-out hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 size-[60px] md:size-[65px] lg:size-[79px]'
const iconClass =
  'size-10 !text-white !stroke-white transition-transform duration-300 ease-out group-hover:rotate-[30deg]'

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

  const mainIcon = <ArrowUpRight aria-hidden className={iconClass} strokeWidth={2} />

  const darkModeIcon =
    currentTheme === 'dark' ? (
      <Sun aria-hidden className={iconClass} strokeWidth={1.5} />
    ) : (
      <Moon aria-hidden className={iconClass} strokeWidth={1.5} />
    )

  const languageIcon = <Globe aria-hidden className={iconClass} strokeWidth={1.5} />

  const messagesIcon = <MessageCircle aria-hidden className={iconClass} strokeWidth={1.5} />

  const activeItem = navigation.items.find((item) => item.id === activeMenuId)
  const mobileItem = navigation.items.find((item) => item.id === mobileMenuId) ?? null

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[1000] overflow-x-visible px-[15px] pt-2 md:px-4 lg:px-8">
        <div ref={navContainerRef} className="mx-auto max-w-[1370px]">
          <nav
            className="flex items-center justify-between rounded-[8px] bg-white p-[10px] shadow-nav dark:bg-dark-200 dark:shadow-none"
            aria-label={navbar.mainNavigation}>
            <Link href="/" className="flex shrink-0 items-center ps-2 md:ps-5 md:w-[160px] lg:w-[200px] 2xl:w-[289px]">
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

            <ul className="hidden items-center gap-[3px] md:flex lg:gap-[5px]">
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
                      className={`flex items-center gap-[6px] rounded-[40px] px-3 py-2 text-xs font-normal uppercase tracking-[1.4px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 lg:gap-[10px] lg:px-5 lg:text-sm lg:tracking-[2.1px] 2xl:px-8 2xl:py-4 ${
                        isActive
                          ? 'bg-black/[0.04] text-black dark:bg-white/[0.06] dark:text-backgroundBody'
                          : 'text-black/50 hover:bg-black/[0.03] hover:text-black dark:text-dark-100 dark:hover:bg-white/[0.04] dark:hover:text-backgroundBody'
                      }`}
                      aria-expanded={isActive}
                      aria-haspopup="true">
                      {item.label}
                      <span className={`flex shrink-0 transition-transform duration-300 ${isActive ? '' : 'rotate-180'}`}>
                        <ChevronDown aria-hidden className="h-2 w-3.5" strokeWidth={1.2} />
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
                className={`${actionBtnClass} md:hidden ${actionMenuOpen ? 'bg-primary/80' : ''}`}
                aria-label={actionMenuOpen ? navbar.closeActions : navbar.openActions}
                aria-expanded={actionMenuOpen}>
                {mainIcon}
              </button>
              

              <button
                type="button"
                onClick={() => setActionMenuOpen((open) => !open)}
                className={`${actionBtnClass} hidden md:flex ${actionMenuOpen ? 'bg-primary/80' : ''}`}
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
              className="hidden md:block"
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
