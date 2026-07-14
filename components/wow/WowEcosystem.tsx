'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import type { Dictionary } from '@/i18n/types'
import RevealWrapper from '../animation/RevealWrapper'
import SectionLabel from './shared/SectionLabel'
import WowText, { WOW_GRADIENT } from './shared/WowText'

type NodeId =
  | 'websites'
  | 'host'
  | 'hub'
  | 'impact'
  | 'intelligence'
  | 'design'
  | 'events'
  | 'accelerate'
  | 'social'
  | 'softwarewow'
  | 'marketing'
  | 'best-app'
  | 'modern-systems'
  | 'boost-profits'
  | 'attract-new'

type NodeLayout = {
  id: NodeId
  x: number
  y: number
  size?: 'sm' | 'md' | 'lg'
}

type WowEcosystemProps = {
  ecosystem: Dictionary['ecosystem']
}

const VB_W = 1200
const VB_H = 620
const MOBILE_VB_W = 390
const MOBILE_VB_H = 980
const CTA_Y = 620
const MOBILE_CTA_Y = 770

const NODE_LAYOUT: NodeLayout[] = [
  { id: 'websites', x: 66, y: 30, size: 'md' },
  { id: 'host', x: 36, y: 11, size: 'md' },
  { id: 'hub', x: 58, y: 14, size: 'lg' },
  { id: 'impact', x: 82, y: 17, size: 'sm' },
  { id: 'design', x: 20, y: 30, size: 'md' },
  { id: 'events', x: 5, y: 16, size: 'sm' },
  { id: 'intelligence', x: 5, y: 52, size: 'md' },
  { id: 'accelerate', x: 44, y: 52, size: 'md' },
  { id: 'social', x: 80, y: 52, size: 'md' },
  { id: 'softwarewow', x: 25, y: 75, size: 'md' },
  { id: 'marketing', x: 66, y: 75, size: 'lg' },
]

const MOBILE_NODE_LAYOUT: NodeLayout[] = [
  { id: 'events', x: 2, y: 12, size: 'sm' },
  { id: 'design', x: 10, y: 21, size: 'md' },
  { id: 'hub', x: 40, y: 8, size: 'lg' },
  { id: 'impact', x: 75, y: 12, size: 'sm' },
  { id: 'websites', x: 64, y: 21, size: 'md' },
  { id: 'host', x: 35, y: 31, size: 'md' },
  { id: 'intelligence', x: 8, y: 41, size: 'md' },
  { id: 'accelerate', x: 40, y: 53, size: 'md' },
  { id: 'social', x: 65, y: 41, size: 'md' },
  { id: 'softwarewow', x: 8, y: 63, size: 'md' },
  { id: 'marketing', x: 58, y: 63, size: 'lg' },
]

const CTA_IDS: NodeId[] = ['best-app', 'modern-systems', 'boost-profits', 'attract-new']

const FLOWS: Record<string, NodeId[]> = {
  'best-app': ['best-app', 'softwarewow', 'intelligence', 'design'],
  'modern-systems': ['modern-systems', 'softwarewow', 'intelligence', 'host'],
  'boost-profits': ['boost-profits', 'marketing', 'accelerate', 'intelligence', 'design', 'websites', 'social'],
  'attract-new': ['attract-new', 'marketing', 'accelerate', 'social','websites'],
}

function nodePos(n: NodeLayout, viewHeight = VB_H, viewWidth = VB_W) {
  return {
    x: (n.x / 100) * viewWidth,
    y: (n.y / 100) * viewHeight,
  }
}

function ctaX(idx: number, viewWidth = VB_W) {
  const startPct = 12
  const endPct = 88
  const step = (endPct - startPct) / 3
  return ((startPct + step * idx) / 100) * viewWidth
}

function buildCleanPath(points: { x: number; y: number }[], cornerRadius = 18) {
  if (points.length < 2) return ''

  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`

  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1]
    const b = points[i]
    const dx = b.x - a.x
    const dy = b.y - a.y

    if (Math.abs(dx) < 1.5 && Math.abs(dy) < 1.5) continue

    if (Math.abs(dx) < 1.5) {
      d += ` L ${b.x.toFixed(1)} ${b.y.toFixed(1)}`
      continue
    }

    if (Math.abs(dy) < 1.5) {
      d += ` L ${b.x.toFixed(1)} ${b.y.toFixed(1)}`
      continue
    }

    const r = Math.min(cornerRadius, Math.abs(dx) / 2, Math.abs(dy) / 2)
    const sx = Math.sign(dx)
    const sy = Math.sign(dy)

    if (Math.abs(dx) >= Math.abs(dy)) {
      const cornerX = b.x
      const cornerY = a.y

      if (r <= 1) {
        d += ` L ${cornerX.toFixed(1)} ${cornerY.toFixed(1)} L ${b.x.toFixed(1)} ${b.y.toFixed(1)}`
      } else {
        d += ` L ${(cornerX - sx * r).toFixed(1)} ${cornerY.toFixed(1)}`
        d += ` Q ${cornerX.toFixed(1)} ${cornerY.toFixed(1)} ${cornerX.toFixed(1)} ${(cornerY + sy * r).toFixed(1)}`
        d += ` L ${b.x.toFixed(1)} ${b.y.toFixed(1)}`
      }
    } else {
      const cornerX = a.x
      const cornerY = b.y

      if (r <= 1) {
        d += ` L ${cornerX.toFixed(1)} ${cornerY.toFixed(1)} L ${b.x.toFixed(1)} ${b.y.toFixed(1)}`
      } else {
        d += ` L ${cornerX.toFixed(1)} ${(cornerY - sy * r).toFixed(1)}`
        d += ` Q ${cornerX.toFixed(1)} ${cornerY.toFixed(1)} ${(cornerX + sx * r).toFixed(1)} ${cornerY.toFixed(1)}`
        d += ` L ${b.x.toFixed(1)} ${b.y.toFixed(1)}`
      }
    }
  }

  return d
}

export default function WowEcosystem({ ecosystem }: WowEcosystemProps) {
  const [activeFlow, setActiveFlow] = useState<keyof typeof FLOWS>('best-app')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mediaQuery.matches)

    update()
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  const currentLayout = isMobile ? MOBILE_NODE_LAYOUT : NODE_LAYOUT
  const viewWidth = isMobile ? MOBILE_VB_W : VB_W
  const viewHeight = isMobile ? MOBILE_VB_H : VB_H

  const activeSet = useMemo(() => new Set(FLOWS[activeFlow]), [activeFlow])

  const pathD = useMemo(() => {
    const ids = FLOWS[activeFlow]
    const ctaIdx = CTA_IDS.findIndex((c) => c === ids[0])

    if (isMobile) {
      const startPt = {
        x: ctaX(ctaIdx, MOBILE_VB_W),
        y: MOBILE_CTA_Y - 32,
      }

      const nodePoints = ids
        .slice(1)
        .map((nid) => {
          const n = MOBILE_NODE_LAYOUT.find((nn) => nn.id === nid)
          if (!n) return null

          return nodePos(n, MOBILE_VB_H, MOBILE_VB_W)
        })
        .filter(Boolean) as { x: number; y: number }[]

      return buildCleanPath([startPt, ...nodePoints], 14)
    }

    const startPt = {
      x: ctaX(ctaIdx),
      y: CTA_Y - 32,
    }

    const nodePoints = ids
      .slice(1)
      .map((nid) => {
        const n = NODE_LAYOUT.find((nn) => nn.id === nid)
        if (!n) return null

        return nodePos(n, VB_H)
      })
      .filter(Boolean) as { x: number; y: number }[]

    return buildCleanPath([startPt, ...nodePoints], 18)
  }, [activeFlow, isMobile])

  const nodeFontSize = (s?: 'sm' | 'md' | 'lg', mobile = false) => {
    if (mobile) {
      // 🔥 INCREASED MOBILE FONT SIZES
      if (s === 'lg') return 'clamp(14px, 3.8cqw, 26px)'
      if (s === 'sm') return 'clamp(12px, 3cqw, 18px)'
      return 'clamp(13px, 3.4cqw, 22px)'
    }

    if (s === 'lg') return 'clamp(14px, 3.4cqw, 38px)'
    if (s === 'sm') return 'clamp(9px, 2cqw, 22px)'
    return 'clamp(11px, 2.6cqw, 30px)'
  }

  return (
    <section className="wow-ecosystem relative flex w-full flex-col items-center bg-background px-2 text-foreground transition-colors duration-300 dark:bg-background max-md:justify-start sm:px-4">
      <div className="relative z-10 flex w-full flex-col items-center">
      <RevealWrapper>
        <SectionLabel className="mb-5">OUR ECOSYSTEM</SectionLabel>
      </RevealWrapper>

      <div className="mb-8 w-full max-w-4xl text-center max-md:mb-5 sm:mb-12 lg:mb-16">
        <h2 className="font-['Outfit'] text-[clamp(32px,6vw,64px)] font-normal leading-[1.1] tracking-[-0.03em] text-[#000000] dark:text-[#F2F2F2]">
          {ecosystem.heading.part1}{' '}
          <span className="font-['Ogg_TRIAL'] italic text-[#b794f4] dark:text-[#b794f4]">
            {ecosystem.heading.highlight}
          </span>{' '}
          {ecosystem.heading.part2}
        </h2>

        <p className="mx-auto mt-8 max-w-[754px] font-['Outfit'] text-[clamp(14px,1.8vw,18px)] font-normal leading-[1.6] tracking-[0.02em] text-[#808080] dark:text-[#808080] sm:mt-8">
          {ecosystem.description}
        </p>
      </div>

      <div
        className="relative aspect-[1200/620] w-full max-w-7xl max-md:aspect-[390/680] max-md:w-full max-md:max-w-[390px]"
        style={{ containerType: 'inline-size' }}
      >
        <svg
          viewBox={`0 0 ${viewWidth} ${viewHeight}`}
          className="absolute inset-0 h-full w-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
          style={{ zIndex: 1 }}
        >
          <defs>
            <linearGradient id="wow-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#615CC7" />
              <stop offset="25%" stopColor="#6F62BF" />
              <stop offset="50%" stopColor="#9671AC" />
              <stop offset="75%" stopColor="#D38B8E" />
              <stop offset="100%" stopColor="#DB8E8B" />
            </linearGradient>
          </defs>

          <AnimatePresence mode="popLayout">
            <motion.g key={activeFlow}>
              <motion.path
                key={`path-${activeFlow}`}
                d={pathD}
                fill="none"
                stroke="url(#wow-gradient)"
                strokeWidth={isMobile ? 2.5 : 3}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.6}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.65, 0, 0.35, 1],
                }}
              />

              <motion.circle
                r={isMobile ? 3 : 4}
                fill="#8b7cff"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.2,
                }}
              >
                <animateMotion
                  key={`${activeFlow}-particle`}
                  dur="2.4s"
                  repeatCount="indefinite"
                  rotate="auto"
                  path={pathD}
                />
              </motion.circle>
            </motion.g>
          </AnimatePresence>
        </svg>

        {currentLayout.map((n) => {
          const active = activeSet.has(n.id)
          const nodeCopy = ecosystem.nodes[n.id as keyof typeof ecosystem.nodes]

          return (
            <motion.div
              key={n.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap"
              style={{
                left: `${n.x}%`,
                top: `${n.y}%`,
                transformOrigin: 'center',
                zIndex: 3,
              }}
              animate={{
                // 🔥 INCREASED MOBILE SCALE VALUES
                scale: active ? (isMobile ? 1.5 : 1.5) : isMobile ? 0.9 : 0.75,
                opacity: active ? 1 : 0.5,
              }}
              transition={{
                duration: 0.4,
                ease: [0.65, 0, 0.35, 1],
              }}
            >
              <span
                className="inline-block rounded-md bg-background px-2.5 py-1 font-bold leading-none tracking-tight dark:bg-background"
                style={{
                  fontSize: nodeFontSize(n.size, isMobile),
                }}
              >
                {n.id === 'softwarewow' ? (
                  <>
                    <span className="text-foreground">{nodeCopy.prefix}</span>{' '}
                    <WowText className="font-bold leading-none tracking-tight">
                      {nodeCopy.label}
                    </WowText>
                  </>
                ) : (
                  <>
                    <WowText className="font-bold leading-none tracking-tight">
                      {nodeCopy.prefix}
                    </WowText>{' '}
                    <span className="text-foreground">{nodeCopy.label}</span>
                  </>
                )}
              </span>
            </motion.div>
          )
        })}

        <div
          className="absolute left-0 right-0 flex items-stretch justify-center gap-1 px-1 sm:gap-2 sm:px-2 md:gap-3"
          style={{
            top: isMobile ? `${(MOBILE_CTA_Y / MOBILE_VB_H) * 100}%` : `${(CTA_Y / VB_H) * 100}%`,
            transform: 'translateY(-50%)',
            zIndex: 4,
          }}
        >
          {CTA_IDS.map((ctaId) => {
            const active = activeFlow === ctaId
            const label = ecosystem.ctas[ctaId as keyof typeof ecosystem.ctas]

            return (
              <motion.button
                key={ctaId}
                layout
                type="button"
                onClick={() => setActiveFlow(ctaId)}
                onMouseEnter={() => setActiveFlow(ctaId)}
                aria-pressed={active}
                aria-label={label}
                transition={{
                  layout: { type: 'spring', stiffness: 420, damping: 34 },
                }}
                className={`relative flex items-center justify-center overflow-hidden rounded-md font-medium outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                  isMobile ? 'min-h-[36px]' : 'min-h-[34px] sm:min-h-[44px] md:min-h-[52px]'
                } ${
                  active
                    ? 'text-white dark:text-white '
                    : 'bg-white/90 text-[#1a1530]/45'
                }`}
                style={{
                  flex: active ? 2.4 : 0.65,
                  background: active ? WOW_GRADIENT : undefined,
                }}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  {active ? (
                    <motion.span
                      key={`${ctaId}-label`}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{
                        duration: 0.2,
                        ease: [0.65, 0, 0.35, 1],
                      }}
                      className="whitespace-nowrap px-2 uppercase tracking-[0.18em] text-white dark:text-white sm:px-3 md:px-4"
                      style={{
                        fontSize: isMobile ? '9px' : 'clamp(10px, 1.8cqw, 20px)',
                      }}
                    >
                      {label}
                    </motion.span>
                  ) : (
                    <motion.span
                      key={`${ctaId}-plus`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2, ease: [0.65, 0, 0.35, 1] }}
                      className="flex size-full items-center justify-center text-base text-black font-light sm:text-lg"
                      aria-hidden
                    >
                      +
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            )
          })}
        </div>
      </div>
      </div>
    </section>
  )
}