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
import { motion } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'
import { navbarBrandLogo } from './nav/nav-brand-assets'
import { navPillActiveClass, navPillInactiveClass } from './nav/nav-interaction-styles'
import WowMegaMenuPanel from './nav/WowMegaMenuPanel'
import WowMobileBottomNav from './nav/WowMobileBottomNav'
import WowMobileMenuSheet from './nav/WowMobileMenuSheet'

const actionBtnClass =
  'group flex shrink-0 items-center justify-center rounded-radius-sm bg-primary p-5 text-white transition-all duration-300 ease-out hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 size-[60px] md:size-[65px] lg:size-[79px]'

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
    const menuOpen = Boolean(activeMenuId || mobileMenuId)

    if (!menuOpen) return

    const scrollY = window.scrollY

    document.documentElement.style.overflowY = 'scroll'

    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.width = '100%'

    return () => {
      document.documentElement.style.overflowY = ''

      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''

      window.scrollTo(0, scrollY)
    }
  }, [activeMenuId, mobileMenuId])

  useEffect(() => {
    lastScrollYRef.current = window.scrollY

    const handleScroll = () => {
      if (activeMenuId || mobileMenuId) return

      const currentScrollY = window.scrollY
      const scrollingDown = currentScrollY > lastScrollYRef.current
      const scrollingUp = currentScrollY < lastScrollYRef.current

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
  }, [activeMenuId, mobileMenuId])

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
      setActionMenuOpen(false)
      setNavbarHidden(false)
    },
    [clearCloseTimer],
  )

  const scheduleCloseMegaMenu = useCallback(() => {
    clearCloseTimer()
    closeTimerRef.current = setTimeout(() => setActiveMenuId(null), 350)
  }, [clearCloseTimer])

  const openActionMenuOnDesktop = () => {
    if (window.innerWidth >= 768) {
      clearCloseTimer()
      setActiveMenuId(null)
      setActionMenuOpen(true)
      setNavbarHidden(false)
    }
  }

  const closeActionMenuOnDesktop = () => {
    if (window.innerWidth >= 768) {
      setActionMenuOpen(false)
    }
  }

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
            className="relative flex items-center justify-between rounded-radius-sm bg-white p-[10px] shadow-nav dark:bg-dark dark:shadow-none"
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

            <ul className="hidden items-center md:flex">
              {navigation.items.map((item) => {
                const isActive = activeMenuId === item.id

                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onMouseEnter={() => openMegaMenu(item.id)}
                      onFocus={() => openMegaMenu(item.id)}
                      onClick={() => (isActive ? closeMegaMenu() : openMegaMenu(item.id))}
                      className={`flex items-center justify-center gap-[6px] rounded-radius-sm px-8 py-[24px] font-outfit text-xs font-normal uppercase tracking-[1.4px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 lg:text-sm lg:tracking-[2.1px] ${
                        isActive ? navPillActiveClass : navPillInactiveClass
                      }`}
                      aria-expanded={isActive}
                      aria-haspopup="true"
                    >
                      {item.label}

                      <span
                        className={`flex shrink-0 transition-transform duration-300 ${
                          isActive ? '' : 'rotate-180'
                        }`}
                      >
                        <ChevronDown aria-hidden className="h-3 w-5  text-black dark:hover:text-black dark:text-black" strokeWidth={1.2} />
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>

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
                    setActiveMenuId(null)
                  }
                }}
                className={`${actionBtnClass} ${actionMenuOpen ? 'bg-primary/80' : ''}`}
                aria-label={actionMenuOpen ? navbar.closeActions : navbar.openActions}
                aria-expanded={actionMenuOpen}
              >
                {mainIcon}
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
                    {languageIcon}
                  </button>

                  <button type="button" className={actionBtnClass} aria-label={navbar.openMessages}>
                    {messagesIcon}
                  </button>
                </div>
              )}
            </div>
          </nav>

          {activeMenuId && (
            <div className="hidden md:block" onMouseEnter={clearCloseTimer}>
              <div className="animate-mega-menu-in mx-auto mt-2 max-w-full overflow-hidden rounded-radius-sm bg-white 2xl:max-w-[1370px] dark:bg-dark">
                <div className="relative h-[calc(100vh-120px)] overflow-hidden">
                  {navigation.items.map((item) => {
                    const isActive = activeMenuId === item.id
                    const itemIndex = navigation.items.findIndex((i) => i.id === item.id)
                    const activeIndex = navigation.items.findIndex((i) => i.id === activeMenuId)
                    const direction = activeIndex > itemIndex ? 1 : -1

                    return (
                      <motion.div
                        key={item.id}
                        className="absolute inset-0"
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          x: isActive ? 0 : direction > 0 ? 20 : -20,
                          pointerEvents: isActive ? 'auto' : 'none',
                        }}
                        transition={{
                          duration: 0.42,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <WowMegaMenuPanel
                          item={item}
                          detailPanels={navigation.detailPanels}
                          onNavigate={closeMegaMenu}
                          noOuterShell
                        />
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.header>

      <motion.div
        className="fixed bottom-0 left-0 right-0 z-[1003] px-[15px] pb-[15px] md:hidden"
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
