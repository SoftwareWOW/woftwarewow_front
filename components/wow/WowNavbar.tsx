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
import { AnimatePresence, motion } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'
import { navbarBrandLogo } from './nav/nav-brand-assets'
import { navPillActiveClass, navPillInactiveClass } from './nav/nav-interaction-styles'
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
  const [menuDirection, setMenuDirection] = useState(1)
  const [navbarHidden, setNavbarHidden] = useState(false)

  const actionMenuRef = useRef<HTMLDivElement>(null)
  const navContainerRef = useRef<HTMLDivElement>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const lastScrollYRef = useRef(0)

  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    lastScrollYRef.current = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollingDown = currentScrollY > lastScrollYRef.current
      const scrollingUp = currentScrollY < lastScrollYRef.current

      if (mobileMenuId) {
        lastScrollYRef.current = currentScrollY
        return
      }

      if (currentScrollY < 80) {
        setNavbarHidden(false)
      } else if (scrollingDown) {
        setNavbarHidden(true)
        setActiveMenuId(null)
        setActionMenuOpen(false)
      } else if (scrollingUp) {
        setNavbarHidden(false)
      }

      lastScrollYRef.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileMenuId])

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

      const currentIndex = navigation.items.findIndex((item) => item.id === activeMenuId)
      const nextIndex = navigation.items.findIndex((item) => item.id === id)

      if (currentIndex !== -1 && nextIndex !== -1 && currentIndex !== nextIndex) {
        setMenuDirection(nextIndex > currentIndex ? 1 : -1)
      }

      setActiveMenuId(id)
      setNavbarHidden(false)
    },
    [activeMenuId, clearCloseTimer, navigation.items],
  )

  const scheduleCloseMegaMenu = useCallback(() => {
    clearCloseTimer()
    closeTimerRef.current = setTimeout(() => setActiveMenuId(null), 350)
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
      <motion.header
        className="fixed left-0 right-0 top-0 z-[1000] overflow-visible px-[15px] pt-2 md:px-4 lg:px-8"
        initial={false}
        animate={{
          y: navbarHidden ? '-120%' : '0%',
        }}
        transition={{
          duration: 0.32,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div
          ref={navContainerRef}
          className="mx-auto max-w-[1370px]"
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleCloseMegaMenu}
        >
          <nav
            className="relative flex items-center justify-between rounded-[8px] bg-white p-[10px] shadow-nav dark:bg-dark-200 dark:shadow-none"
            aria-label={navbar.mainNavigation}
          >
            <Link
              href="/"
              className="flex shrink-0 items-center ps-2 md:w-[160px] md:ps-5 lg:w-[200px] 2xl:w-[289px]"
            >
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
                  <li key={item.id}>
                    <button
                      type="button"
                      onMouseEnter={() => openMegaMenu(item.id)}
                      onFocus={() => openMegaMenu(item.id)}
                      onClick={() => (isActive ? closeMegaMenu() : openMegaMenu(item.id))}
                      className={`flex items-center rounded-[10px] px-3 py-2 font-outfit text-xs font-normal uppercase tracking-[1.4px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 lg:px-5 lg:text-sm lg:tracking-[2.1px] 2xl:px-8 2xl:py-4 ${
                        isActive ? navPillActiveClass : navPillInactiveClass
                      }`}
                      aria-expanded={isActive}
                      aria-haspopup="true"
                    >
                      {item.label}

                      <span className={`flex shrink-0 transition-transform duration-300 ${isActive ? '' : 'rotate-180'}`}>
                        <ChevronDown aria-hidden className="h-2 w-3.5" strokeWidth={1.2} />
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>

            <div className="relative z-[1002]" ref={actionMenuRef}>
              <button
                type="button"
                onClick={() => {
                  setActionMenuOpen((open) => !open)
                  setActiveMenuId(null)
                }}
                className={`${actionBtnClass} ${actionMenuOpen ? 'bg-primary/80' : ''}`}
                aria-label={actionMenuOpen ? navbar.closeActions : navbar.openActions}
                aria-expanded={actionMenuOpen}
              >
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

                  <button type="button" className={actionBtnClass} aria-label={navbar.openMessages}>
                    {messagesIcon}
                  </button>
                </div>
              )}
            </div>
          </nav>

          {activeItem && (
            <div className="hidden md:block" onMouseEnter={clearCloseTimer}>
              <div className="animate-mega-menu-in mx-auto mt-2 max-w-full overflow-hidden rounded-[10px] bg-white 2xl:max-w-[1370px] dark:bg-dark-200">
                <div className="relative min-h-[520px] overflow-hidden">
                  <AnimatePresence initial={false} custom={menuDirection}>
                    <motion.div
                      key={activeItem.id}
                      custom={menuDirection}
                      className="absolute inset-0"
                      initial={{
                        x: menuDirection > 0 ? 48 : -48,
                        opacity: 0,
                      }}
                      animate={{
                        x: 0,
                        opacity: 1,
                      }}
                      exit={{
                        x: menuDirection > 0 ? -48 : 48,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.42,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <WowMegaMenuPanel
                        item={activeItem}
                        detailPanels={navigation.detailPanels}
                        onNavigate={closeMegaMenu}
                        noOuterShell
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.header>

      <motion.div
        className="fixed bottom-0 left-0 right-0 z-[1000] px-[15px] pb-[15px] md:hidden"
        initial={false}
      
        animate={{
  y: navbarHidden ? 'calc(100% + 100px)' : '0%',
}}
        transition={{
          duration: 0.32,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <WowMobileBottomNav
          items={navigation.items}
          activeId={mobileMenuId}
          onSelect={(id) => {
            setMobileMenuId(id || null)
            setNavbarHidden(false)
          }}
        />
      </motion.div>

      {/* Mobile Menu Sheet */}
      <WowMobileMenuSheet 
        item={mobileItem} 
        navbar={navbar} 
        onClose={() => {
          setMobileMenuId(null)
        }} 
      />

      <LanguageSwitcher open={languageOpen} onOpenChange={setLanguageOpen} dictionary={languageSwitcher} />
    </>
  )
}
