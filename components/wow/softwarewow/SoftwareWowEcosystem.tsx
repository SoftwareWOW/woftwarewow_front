'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import RotatingCube from './RotatingCube'

type Service = {
  title: string
  description: string
}

const SERVICES: Service[] = [
  { title: 'Custom Software', description: 'Bespoke systems engineered end-to-end.' },
  { title: 'AI & Intelligence', description: 'LLMs, agents & smart automations.' },
  { title: 'Web Development', description: 'Fast, scalable modern web apps.' },
  { title: 'Mobile Apps', description: 'Native-grade iOS & Android products.' },
  { title: 'UI / UX Design', description: 'Interfaces that convert and delight.' },
  { title: 'Cloud & Infra', description: 'Elastic, resilient cloud architecture.' },
  { title: 'API & Integrations', description: 'Connect any tool, any platform.' },
  { title: 'Automation', description: 'Workflows that run your business.' },
  { title: 'DevOps & Deploy', description: 'CI/CD pipelines built for speed.' },
  { title: 'Data & Analytics', description: 'Turn raw data into decisions.' },
  { title: 'Maintenance', description: 'Reliable support, always on.' },
  { title: 'Cybersecurity', description: 'Defense-grade protection by design.' },
]

type OrbitLayout = {
  radius: number
  cubeSize: number
  labelWidth: number
  boxSize: number
  mounted: boolean
}

const FALLBACK_LAYOUT: Omit<OrbitLayout, 'mounted'> = {
  radius: 200,
  cubeSize: 120,
  labelWidth: 110,
  boxSize: 360,
}

function computeOrbitLayout(containerWidth: number, isHero: boolean): Omit<OrbitLayout, 'mounted'> {
  if (containerWidth <= 0) return FALLBACK_LAYOUT

  const isMobile = containerWidth < 640

  let labelWidth: number
  let cubeSize: number

  if (containerWidth < 360) {
    labelWidth = 100
    cubeSize = 72
  } else if (containerWidth < 480) {
    labelWidth = 108
    cubeSize = 84
  } else if (containerWidth < 640) {
    labelWidth = 118
    cubeSize = 96
  } else if (containerWidth < 900) {
    labelWidth = 128
    cubeSize = 112
  } else if (containerWidth < 1280) {
    labelWidth = 142
    cubeSize = isHero ? 128 : 140
  } else {
    labelWidth = isHero ? 152 : 160
    cubeSize = isHero ? 148 : 168
  }

  // Mobile only: expand the orbit ring so services sit farther from the cube.
  const edgeReserve = isMobile ? 68 : labelWidth
  const padding = isMobile ? 6 : 16
  const maxRadius = Math.floor((containerWidth - edgeReserve - padding * 2) / 2)
  const targetRatio = isMobile
    ? containerWidth < 480
      ? 0.46
      : 0.44
    : containerWidth < 1024
      ? 0.36
      : isHero
        ? 0.39
        : 0.42
  const targetRadius = Math.floor(containerWidth * targetRatio)
  const radius = Math.max(isMobile ? 88 : 72, Math.min(maxRadius, targetRadius))

  return { radius, cubeSize, labelWidth }
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
      const side = node.getBoundingClientRect().width
      setLayout({ ...computeOrbitLayout(side, isHero), boxSize: side, mounted: true })
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
  const { containerRef, radius, cubeSize, boxSize, mounted } = useOrbitLayout(isHero)
  const orbitRadius = mounted ? radius : FALLBACK_LAYOUT.radius
  const layoutCubeSize = mounted ? cubeSize : FALLBACK_LAYOUT.cubeSize
  const layoutBoxSize = mounted ? boxSize : FALLBACK_LAYOUT.boxSize
  const gradientId = useId().replace(/:/g, '')

  return (
    <section
      className={`softwarewow-ecosystem relative w-full max-w-full overflow-x-clip ${
        isHero ? 'py-4 sm:py-6 lg:py-0' : 'py-16 sm:py-24 lg:py-32'
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
        className={`relative mx-auto flex aspect-square w-full items-center justify-center ${
          isHero ? 'mt-0 min-h-[300px] sm:min-h-[340px] lg:min-h-0' : 'mt-10 sm:mt-16'
        }`}
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox={`-${layoutBoxSize / 2} -${layoutBoxSize / 2} ${layoutBoxSize} ${layoutBoxSize}`}
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
          <circle r={Math.round(orbitRadius * 1.15)} fill={`url(#wow-center-glow-${gradientId})`} />
          <circle r={orbitRadius} fill="none" stroke={`url(#wow-ring-${gradientId})`} strokeWidth="1" />
          <circle
            r={Math.round(orbitRadius * 0.72)}
            fill="none"
            stroke={`url(#wow-ring-${gradientId})`}
            strokeWidth="1"
            strokeDasharray="2 8"
            opacity="0.5"
          />
          <circle
            r={orbitRadius}
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
          <div className="wow-orbit-rotate absolute inset-0 flex items-center justify-center">
            {SERVICES.map((s, i) => {
              const { x, y } = orbitPosition(i, SERVICES.length, orbitRadius)

              return (
                <div
                  key={s.title}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                >
                  <div className="wow-orbit-counter">
                    <ServiceLabel service={s} />
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

function ServiceLabel({ service }: { service: Service }) {
  return (
    <motion.p
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="cursor-default select-none whitespace-nowrap text-center text-[10px] font-semibold leading-none tracking-tight text-secondary transition-colors hover:text-primary dark:text-backgroundBody dark:hover:text-primary-50 sm:text-[11px] md:text-sm md:font-bold lg:text-base"
    >
      {service.title}
    </motion.p>
  )
}
