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
import { useEffect, useId, useRef, useState } from 'react'
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

type OrbitLayout = {
  radius: number
  cubeSize: number
  cardWidth: number
  iconSize: number
  mounted: boolean
}

const FALLBACK_LAYOUT: Omit<OrbitLayout, 'mounted'> = {
  radius: 200,
  cubeSize: 120,
  cardWidth: 108,
  iconSize: 16,
}

function computeOrbitLayout(containerWidth: number, isHero: boolean): Omit<OrbitLayout, 'mounted'> {
  if (containerWidth <= 0) return FALLBACK_LAYOUT

  let cardWidth: number
  let cubeSize: number
  let iconSize: number

  if (containerWidth < 360) {
    cardWidth = 82
    cubeSize = 72
    iconSize = 14
  } else if (containerWidth < 480) {
    cardWidth = 92
    cubeSize = 84
    iconSize = 14
  } else if (containerWidth < 640) {
    cardWidth = 102
    cubeSize = 96
    iconSize = 15
  } else if (containerWidth < 900) {
    cardWidth = 112
    cubeSize = 112
    iconSize = 16
  } else if (isHero && containerWidth < 1120) {
    cardWidth = 118
    cubeSize = 128
    iconSize = 16
  } else {
    cardWidth = isHero ? 128 : 168
    cubeSize = isHero ? 148 : 168
    iconSize = 18
  }

  const padding = 12
  const maxRadius = Math.floor((containerWidth - cardWidth - padding * 2) / 2)
  const targetRadius = Math.floor(containerWidth * (isHero ? 0.34 : 0.4))
  const radius = Math.max(68, Math.min(maxRadius, targetRadius))

  return { radius, cubeSize, cardWidth, iconSize }
}

function orbitPosition(index: number, total: number, radius: number) {
  const angle = (index / total) * Math.PI * 2
  return {
    x: Math.round(Math.cos(angle) * radius),
    y: Math.round(Math.sin(angle) * radius),
  }
}

function useOrbitLayout(isHero: boolean) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [layout, setLayout] = useState<OrbitLayout>({ ...FALLBACK_LAYOUT, mounted: false })

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const update = () => {
      const width = node.getBoundingClientRect().width
      setLayout({ ...computeOrbitLayout(width, isHero), mounted: true })
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(node)
    return () => observer.disconnect()
  }, [isHero])

  return { containerRef, ...layout }
}

type SoftwareWowEcosystemProps = {
  variant?: 'hero' | 'section'
}

export function SoftwareWowEcosystem({ variant = 'section' }: SoftwareWowEcosystemProps) {
  const isHero = variant === 'hero'
  const { containerRef, radius, cubeSize, cardWidth, iconSize, mounted } = useOrbitLayout(isHero)
  const layoutRadius = mounted ? radius : FALLBACK_LAYOUT.radius
  const layoutCubeSize = mounted ? cubeSize : FALLBACK_LAYOUT.cubeSize
  const orbitPadding = Math.max(72, Math.round(layoutCubeSize * 0.55))
  const size = layoutRadius * 2 + orbitPadding * 2
  const gradientId = useId().replace(/:/g, '')

  return (
    <section
      className={`softwarewow-ecosystem relative w-full max-w-full overflow-x-clip ${
        isHero ? 'py-4 sm:py-6 xl:py-0' : 'py-16 sm:py-24 lg:py-32'
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
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className={`relative mx-auto flex w-full max-w-full items-center justify-center ${
          isHero ? 'mt-0 min-h-[280px] sm:min-h-[320px]' : 'mt-10 sm:mt-16'
        }`}
        style={{ height: size, maxWidth: '100%' }}
      >
        <svg
          className="pointer-events-none absolute inset-0 mx-auto h-full w-full max-w-full"
          viewBox={`-${size / 2} -${size / 2} ${size} ${size}`}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <linearGradient id={`wow-ring-${gradientId}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--wow-1)" stopOpacity="0.7" />
              <stop offset="50%" stopColor="var(--wow-2)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--wow-3)" stopOpacity="0.7" />
            </linearGradient>
            <radialGradient id={`wow-center-glow-${gradientId}`}>
              <stop offset="0%" stopColor="var(--wow-1)" stopOpacity="0.45" />
              <stop offset="70%" stopColor="var(--wow-2)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle r={Math.round(layoutRadius * 1.15)} fill={`url(#wow-center-glow-${gradientId})`} />
          <circle r={layoutRadius} fill="none" stroke={`url(#wow-ring-${gradientId})`} strokeWidth="1" />
          <circle
            r={Math.round(layoutRadius * 0.72)}
            fill="none"
            stroke={`url(#wow-ring-${gradientId})`}
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
                    <ServiceCard
                      service={s}
                      compact={isHero}
                      cardWidth={cardWidth}
                      iconSize={iconSize}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        )}

        <div className="relative z-10">
          <RotatingCube size={layoutCubeSize} />
        </div>
      </motion.div>
    </section>
  )
}

function ServiceCard({
  service,
  compact,
  cardWidth,
  iconSize,
}: {
  service: Service
  compact?: boolean
  cardWidth: number
  iconSize: number
}) {
  const Icon = service.icon
  const iconBox = Math.max(28, iconSize + 14)

  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -2 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group relative flex cursor-pointer flex-col items-start gap-1.5 rounded-xl border bg-white/90 p-2 shadow-sm backdrop-blur-md transition-colors dark:bg-dark-200/90 sm:gap-2 sm:rounded-2xl sm:p-3"
      style={{
        width: cardWidth,
        maxWidth: cardWidth,
        borderColor: 'color-mix(in oklab, var(--wow-1) 18%, rgba(23, 23, 23, 0.1))',
        boxShadow: '0 8px 24px -12px color-mix(in oklab, var(--wow-1) 25%, transparent)',
      }}
    >
      <span
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:rounded-2xl"
        style={{
          background:
            'linear-gradient(135deg, color-mix(in oklab, var(--wow-1) 25%, transparent), transparent 60%)',
        }}
      />
      <div
        className="flex items-center justify-center rounded-lg text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 sm:rounded-xl"
        style={{
          width: iconBox,
          height: iconBox,
          backgroundImage: 'var(--wow-gradient)',
        }}
      >
        <Icon size={iconSize} />
      </div>
      <div className="relative min-w-0">
        <p className="truncate text-[10px] font-semibold leading-tight text-secondary dark:text-backgroundBody sm:text-xs">
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
