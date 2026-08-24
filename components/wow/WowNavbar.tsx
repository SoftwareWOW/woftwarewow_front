'use client'

import { Link, usePathname } from '@/i18n/navigation'
import type { Dictionary } from '@/i18n/types'
import {
  ArrowDown,
  ChevronDown,
  Globe,
  MessageCircle,
  Moon,
  Sun,
} from 'lucide-react'
import Image from 'next/image'
import { useLenis } from 'lenis/react'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'
import { navbarBrandLogo } from './nav/nav-brand-assets'
import { navPillActiveClass, navPillInactiveClass } from './nav/nav-interaction-styles'
import WowMegaMenuPanel from './nav/WowMegaMenuPanel'
import WowMobileBottomNav from './nav/WowMobileBottomNav'
import WowMobileMenuSheet from './nav/WowMobileMenuSheet'
import { mobileNavInsetClass } from './nav/mobile-nav-shell'

const actionBtnClass =
  'group flex shrink-0 items-center justify-center rounded-radius-sm bg-primary p-4 text-white transition-all duration-300 ease-out hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 size-[52px] md:size-[56px] lg:size-[65px] xl:size-[79px] md:p-4 lg:p-5'

const iconClass =
  'size-7 !text-white !stroke-white transition-transform duration-300 ease-out group-hover:rotate-[180deg] md:size-8 lg:size-9 xl:size-10'

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
  const lenis = useLenis()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const menuOpen = Boolean(activeMenuId || mobileMenuId)

    if (!menuOpen) return

    const scrollY = lenis?.scroll ?? window.scrollY

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

      if (lenis) {
        lenis.scrollTo(scrollY, { immediate: true })
      } else {
        window.scrollTo(0, scrollY)
      }
    }
  }, [activeMenuId, mobileMenuId, lenis])

  useEffect(() => {
    const getScrollY = () => lenis?.scroll ?? window.scrollY
    lastScrollYRef.current = getScrollY()

    const handleScroll = (currentScrollY: number) => {
      if (activeMenuId || mobileMenuId) return

      const scrollingDown = currentScrollY > lastScrollYRef.current
      const scrollingUp = currentScrollY < lastScrollYRef.current
      const docHeight = document.documentElement.scrollHeight
      const nearBottom = currentScrollY + window.innerHeight >= docHeight - 120

      if (nearBottom) {
        setNavbarHidden(true)
        setActiveMenuId(null)
        setActionMenuOpen(false)
      } else if (currentScrollY < 80) {
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

    if (lenis) {
      const onLenisScroll = ({ scroll }: { scroll: number }) => handleScroll(scroll)

      lenis.on('scroll', onLenisScroll)

      return () => {
        lenis.off('scroll', onLenisScroll)
      }
    }

    const onWindowScroll = () => handleScroll(window.scrollY)

    window.addEventListener('scroll', onWindowScroll, { passive: true })

    return () => window.removeEventListener('scroll', onWindowScroll)
  }, [activeMenuId, mobileMenuId, lenis])

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  const closeMegaMenu = useCallback(() => {
    clearCloseTimer()
    setActiveMenuId(null)
    setActionMenuOpen(false)
  }, [clearCloseTimer])

  const closeAllMenus = useCallback(() => {
    clearCloseTimer()
    setActiveMenuId(null)
    setMobileMenuId(null)
    setActionMenuOpen(false)
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

  useEffect(() => {
    closeAllMenus()
  }, [pathname, closeAllMenus])

  const handleToggleTheme = () => setTheme(currentTheme === 'dark' ? 'light' : 'dark')

  const mainIcon = <ArrowDown aria-hidden className={iconClass} strokeWidth={2} />

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
        className="fixed inset-x-0 top-0 z-[1000] w-full max-w-full overflow-x-clip px-[15px] pt-2 md:px-4 lg:px-8"
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
          className="mx-auto w-full max-w-[1370px] min-w-0"
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleCloseMegaMenu}
        >
          <nav
            className="relative flex w-full min-w-0 items-center justify-between gap-2 rounded-radius-sm bg-white p-[10px] dark:bg-[#1F1F1F] "
            aria-label={navbar.mainNavigation}
          >
            <Link
              href="/"
              className="flex min-w-0 shrink items-center ps-2 md:w-[130px] md:ps-3 lg:w-[180px] lg:ps-5 xl:w-[200px] 2xl:w-[289px]"
            >
              <Image
                className="h-[20px] w-auto max-w-[calc(100vw-96px)] dark:hidden"
                src={navbarBrandLogo.light}
                alt={navbar.logoAlt}
                width={183}
                height={19}
                unoptimized
                priority
              />

              <Image
                className="hidden h-[20px] w-auto max-w-[calc(100vw-96px)] dark:block"
                src={navbarBrandLogo.dark}
                alt={navbar.logoAltDark}
                width={183}
                height={19}
                unoptimized
                priority
              />
            </Link>

            <ul className="hidden min-w-0 flex-1 items-center justify-center md:flex md:gap-0 lg:gap-1 xl:gap-0">
              {navigation.items.map((item) => {
                const isActive = activeMenuId === item.id

                return (
                  <li key={item.id} className="shrink">
                    <button
                      type="button"
                      onMouseEnter={() => openMegaMenu(item.id)}
                      onFocus={() => openMegaMenu(item.id)}
                      onClick={() => (isActive ? closeMegaMenu() : openMegaMenu(item.id))}
                      className={`group/nav-pill flex items-center justify-center gap-1 whitespace-nowrap rounded-radius-sm px-2.5 py-4 font-outfit text-[10px] font-normal uppercase tracking-[1px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:px-3 md:py-[18px] lg:gap-[6px] lg:px-5 lg:py-5 lg:text-xs lg:tracking-[1.4px] xl:px-8 xl:py-[24px] xl:text-sm xl:tracking-[2.1px] ${
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
                        <ChevronDown
                          aria-hidden
                          className={`h-3 w-5 shrink-0 transition-colors duration-300 ${
                            isActive
                              ? 'stroke-black text-black dark:stroke-white dark:text-white'
                              : 'stroke-current text-current dark:stroke-dark-100 dark:text-dark-100 dark:group-hover/nav-pill:stroke-white dark:group-hover/nav-pill:text-white'
                          }`}
                          strokeWidth={1.2}
                        />
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
                          noOuterShell
                          onNavigate={closeMegaMenu}
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
        className={`fixed bottom-0 z-[1003] w-full max-w-full overflow-x-clip pb-[calc(15px+env(safe-area-inset-bottom))] md:hidden ${mobileNavInsetClass}`}
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
