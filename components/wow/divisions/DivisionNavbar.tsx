'use client'

import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import type { DivisionSiteConfig } from '@/components/wow/divisions/division-site-config'
import { Link } from '@/i18n/navigation'
import { navPillInactiveClass } from '@/components/wow/nav/nav-interaction-styles'
import { Menu, Moon, Sun, X } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

type DivisionNavbarProps = {
  config: DivisionSiteConfig
}

export default function DivisionNavbar({ config }: DivisionNavbarProps) {
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [navbarHidden, setNavbarHidden] = useState(false)
  const lastScrollYRef = useRef(0)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y < 80) {
        setNavbarHidden(false)
      } else if (y > lastScrollYRef.current) {
        setNavbarHidden(true)
        setMobileOpen(false)
      } else if (y < lastScrollYRef.current) {
        setNavbarHidden(false)
      }
      lastScrollYRef.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
              {mounted && (
                <button
                  type="button"
                  onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                  className="hidden size-11 items-center justify-center rounded-radius-sm bg-primary/10 text-primary transition hover:bg-primary/20 md:inline-flex"
                  aria-label="Toggle theme"
                >
                  {currentTheme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
                </button>
              )}

              <div className="hidden md:block">
                <ButtonComponentList className="flex" itemClassName="block">
                  <ButtonComponent href={config.cta.href} variant="primary" size="sm">
                    {config.cta.label}
                  </ButtonComponent>
                </ButtonComponentList>
              </div>

              <button
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-radius-sm bg-primary text-white md:hidden"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((open) => !open)}
              >
                {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
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
                      className="block rounded-radius-sm bg-primary-50 px-4 py-3 text-sm uppercase tracking-[0.08em] text-black dark:bg-[#2D2B52] dark:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <ButtonComponentList className="flex w-full" itemClassName="block w-full">
                  <ButtonComponent href={config.cta.href} variant="primary" fullWidth>
                    {config.cta.label}
                  </ButtonComponent>
                </ButtonComponentList>
              </div>
            </div>
          )}
        </div>
      </motion.header>
      <div className="h-[72px] md:h-[84px]" aria-hidden />
    </>
  )
}
