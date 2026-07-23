'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  BrainCircuit,
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Plug,
  Workflow,
  Rocket,
  BarChart3,
  LifeBuoy,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import RotatingCube from './RotatingCube'

type Service = {
  title: string
  description: string
  icon: LucideIcon
}

const SERVICES: Service[] = [
  { title: 'Custom Software', description: 'Bespoke systems engineered end-to-end.', icon: Code2 },
  { title: 'AI & Intelligence', description: 'LLMs, agents & smart automations.', icon: BrainCircuit },
  { title: 'Web Development', description: 'Fast, scalable modern web apps.', icon: Globe },
  { title: 'Mobile Apps', description: 'Native-grade iOS & Android products.', icon: Smartphone },
  { title: 'UI / UX Design', description: 'Interfaces that convert and delight.', icon: Palette },
  { title: 'Cloud & Infra', description: 'Elastic, resilient cloud architecture.', icon: Cloud },
  { title: 'API & Integrations', description: 'Connect any tool, any platform.', icon: Plug },
  { title: 'Automation', description: 'Workflows that run your business.', icon: Workflow },
  { title: 'DevOps & Deploy', description: 'CI/CD pipelines built for speed.', icon: Rocket },
  { title: 'Data & Analytics', description: 'Turn raw data into decisions.', icon: BarChart3 },
  { title: 'Maintenance', description: 'Reliable support, always on.', icon: LifeBuoy },
  { title: 'Cybersecurity', description: 'Defense-grade protection by design.', icon: ShieldCheck },
]

const DEFAULT_ORBIT_RADIUS = 320

function computeOrbitRadius(width: number) {
  if (width < 480) return 140
  if (width < 720) return 200
  if (width < 1024) return 260
  if (width < 1280) return 300
  return 340
}

function orbitPosition(index: number, total: number, radius: number) {
  const angle = (index / total) * Math.PI * 2
  return {
    x: Math.round(Math.cos(angle) * radius),
    y: Math.round(Math.sin(angle) * radius),
  }
}

function useOrbitRadius() {
  const [radius, setRadius] = useState(DEFAULT_ORBIT_RADIUS)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const compute = () => setRadius(computeOrbitRadius(window.innerWidth))

    compute()
    setMounted(true)
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  return { radius, mounted }
}

type SoftwareWowEcosystemProps = {
  variant?: 'hero' | 'section'
}

export function SoftwareWowEcosystem({ variant = 'section' }: SoftwareWowEcosystemProps) {
  const { radius, mounted } = useOrbitRadius()
  const layoutRadius = mounted ? radius : DEFAULT_ORBIT_RADIUS
  const size = layoutRadius * 2 + 200
  const isHero = variant === 'hero'

  return (
    <section
      className={`softwarewow-ecosystem relative w-full overflow-hidden ${
        isHero ? 'py-8 sm:py-10 lg:py-0' : 'py-24 sm:py-32'
      }`}
    >
      {!isHero && (
        <div className="mx-auto max-w-6xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full border border-secondary/15 px-3 py-1 text-xs font-medium text-colorText dark:border-dark dark:text-dark-100"
              style={{ borderColor: 'color-mix(in oklab, var(--wow-1) 40%, transparent)' }}
            >
              <Sparkles className="h-3.5 w-3.5" style={{ color: 'var(--wow-1)' }} />
              SoftwareWOW! Ecosystem
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-secondary dark:text-backgroundBody sm:text-5xl">
              One engine.{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--wow-gradient)' }}>
                Twelve capabilities.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-colorText dark:text-dark-100 sm:text-base">
              Every service in the SoftwareWOW! orbit is powered by the same core — a modern engineering
              platform built to ship exceptional software.
            </p>
          </motion.div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className={`relative mx-auto flex items-center justify-center ${
          isHero ? 'mt-0' : 'mt-16'
        }`}
        style={{ height: size, width: '100%', maxWidth: size }}
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox={`-${size / 2} -${size / 2} ${size} ${size}`}
          aria-hidden
        >
          <defs>
            <linearGradient id="wow-ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--wow-1)" stopOpacity="0.7" />
              <stop offset="50%" stopColor="var(--wow-2)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--wow-3)" stopOpacity="0.7" />
            </linearGradient>
            <radialGradient id="wow-center-glow">
              <stop offset="0%" stopColor="var(--wow-1)" stopOpacity="0.45" />
              <stop offset="70%" stopColor="var(--wow-2)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle r={Math.round(layoutRadius * 1.15)} fill="url(#wow-center-glow)" />
          <circle r={layoutRadius} fill="none" stroke="url(#wow-ring)" strokeWidth="1" />
          <circle
            r={Math.round(layoutRadius * 0.72)}
            fill="none"
            stroke="url(#wow-ring)"
            strokeWidth="1"
            strokeDasharray="2 8"
            opacity="0.5"
          />
          <circle
            r={layoutRadius}
            fill="none"
            stroke="var(--wow-1)"
            strokeWidth="1.5"
            strokeDasharray="4 996"
            strokeLinecap="round"
            className="wow-dash"
            opacity="0.8"
          />
        </svg>

        {mounted && (
          <div className="wow-orbit-rotate absolute inset-0">
            {SERVICES.map((s, i) => {
              const { x, y } = orbitPosition(i, SERVICES.length, radius)

              return (
                <div
                  key={s.title}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                >
                  <div className="wow-orbit-counter">
                    <ServiceCard service={s} compact={isHero} />
                  </div>
                </div>
              )
            })}
          </div>
        )}

        <div className="relative z-10">
          <RotatingCube />
        </div>
      </motion.div>
    </section>
  )
}

function ServiceCard({ service, compact }: { service: Service; compact?: boolean }) {
  const Icon = service.icon

  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -2 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`group relative flex cursor-pointer flex-col items-start gap-2 rounded-2xl border bg-white/90 p-3 shadow-sm backdrop-blur-md transition-colors dark:bg-dark-200/90 sm:p-4 ${
        compact ? 'w-[130px] sm:w-[150px]' : 'w-[150px] sm:w-[180px]'
      }`}
      style={{
        borderColor: 'color-mix(in oklab, var(--wow-1) 18%, rgba(23, 23, 23, 0.1))',
        boxShadow: '0 8px 24px -12px color-mix(in oklab, var(--wow-1) 25%, transparent)',
      }}
    >
      <span
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(135deg, color-mix(in oklab, var(--wow-1) 25%, transparent), transparent 60%)',
        }}
      />
      <div
        className="flex h-9 w-9 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
        style={{ backgroundImage: 'var(--wow-gradient)' }}
      >
        <Icon size={18} />
      </div>
      <div className="relative">
        <p className="text-xs font-semibold leading-tight text-secondary dark:text-backgroundBody sm:text-sm">
          {service.title}
        </p>
        {!compact && (
          <p className="mt-0.5 hidden text-[10px] leading-snug text-colorText dark:text-dark-100 sm:block">
            {service.description}
          </p>
        )}
      </div>
    </motion.div>
  )
}
