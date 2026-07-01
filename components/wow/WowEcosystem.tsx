'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import type { Dictionary } from '@/i18n/types'
import RevealWrapper from '../animation/RevealWrapper'

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
const CTA_Y = 580

const WOW_THEME = {
  gradient: 'linear-gradient(135deg, #8b7cff 0%, #b794f4 50%, #f4a8b8 100%)',
}

const NODE_LAYOUT: NodeLayout[] = [
  { id: 'websites', x: 66, y: 30, size: 'md' },
  { id: 'host', x: 36, y: 11, size: 'md' },
  { id: 'hub', x: 58, y: 14, size: 'lg' },
  { id: 'impact', x: 82, y: 17, size: 'sm' },
  { id: 'design', x: 20, y: 40, size: 'md' },
  { id: 'events', x: 5, y: 16, size: 'sm' },
  { id: 'intelligence', x: 5, y: 52, size: 'md' },
  { id: 'accelerate', x: 44, y: 52, size: 'md' },
  { id: 'social', x: 80, y: 52, size: 'md' },
  { id: 'softwarewow', x: 30, y: 70, size: 'md' },
  { id: 'marketing', x: 66, y: 65, size: 'lg' },
]

const CTA_IDS: NodeId[] = ['best-app', 'modern-systems', 'boost-profits', 'attract-new']

// Updated FLOWS with correct node connections
const FLOWS: Record<string, NodeId[]> = {
  'best-app': ['best-app', 'softwarewow', 'intelligence', 'design'],
  'modern-systems': ['modern-systems', 'softwarewow', 'intelligence', 'host'],
  'boost-profits': ['boost-profits', 'marketing', 'accelerate','intelligence', 'design',  'websites', 'social' ],
  'attract-new': ['attract-new', 'marketing', 'accelerate', 'websites', 'social'],
}

function nodePos(n: NodeLayout) {
  return {
    x: (n.x / 100) * VB_W,
    y: (n.y / 100) * VB_H,
  }
}

function ctaX(idx: number) {
  const startPct = 12
  const endPct = 88
  const step = (endPct - startPct) / 3
  return ((startPct + step * idx) / 100) * VB_W
}

function buildPath(points: { x: number; y: number }[]) {
  if (points.length < 2) return ''

  const r = 28
  let d = `M ${points[0].x} ${points[0].y}`

  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]
    const curr = points[i]

    const midY = (prev.y + curr.y) / 2
    const dirX = Math.sign(curr.x - prev.x) || 1
    const dirY = Math.sign(curr.y - prev.y) || 1

    d += ` L ${prev.x} ${midY - r * dirY}`
    d += ` Q ${prev.x} ${midY} ${prev.x + r * dirX} ${midY}`
    d += ` L ${curr.x - r * dirX} ${midY}`
    d += ` Q ${curr.x} ${midY} ${curr.x} ${midY + r * dirY}`
    d += ` L ${curr.x} ${curr.y}`
  }

  return d
}

export default function WowEcosystem({ ecosystem }: WowEcosystemProps) {
  const [activeFlow, setActiveFlow] = useState<keyof typeof FLOWS>('best-app')

  const activeSet = useMemo(() => new Set(FLOWS[activeFlow]), [activeFlow])

  const pathD = useMemo(() => {
    const ids = FLOWS[activeFlow]
    const ctaIdx = CTA_IDS.findIndex((c) => c === ids[0])

    const startPt = {
      x: ctaX(ctaIdx),
      y: CTA_Y - 30,
    }

    const nodePoints = ids
      .slice(1)
      .map((nid) => {
        const n = NODE_LAYOUT.find((nn) => nn.id === nid)
        if (!n) return null

        const p = nodePos(n)

        return {
          x: p.x,
          y: p.y + 14,
        }
      })
      .filter(Boolean) as { x: number; y: number }[]

    return buildPath([startPt, ...nodePoints])
  }, [activeFlow])

  const nodeFontSize = (s?: 'sm' | 'md' | 'lg') => {
    if (s === 'lg') return 'clamp(14px, 3.4cqw, 38px)'
    if (s === 'sm') return 'clamp(9px, 2cqw, 22px)'
    return 'clamp(11px, 2.6cqw, 30px)'
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-2 text-foreground transition-colors duration-300 sm:px-4">
      {/* Header Section */}
           <RevealWrapper>
                    <span className="mb-5 inline-flex rounded-full bg-[#E8E8E8] px-4 py-1.5 text-[12px] font-[300px] uppercase tracking-[0.14em] text-[#0D0D0D] dark:bg-white/10 dark:text-[#F2F2F2]">
                      OUR ECOSYSTEM
                    </span>
                  </RevealWrapper>
      <div className="relative z-10 mb-8 w-full max-w-4xl text-center sm:mb-12 lg:mb-16">
        <h2 className="font-['Outfit'] text-[clamp(32px,6vw,64px)] font-normal leading-[1.1] tracking-[-0.03em] text-[#000000] dark:text-[#F2F2F2]">
          {ecosystem.heading.part1}{' '}
          <span className="font-['Ogg_TRIAL'] italic text-[#b794f4] dark:text-[#b794f4]">
            {ecosystem.heading.highlight}
          </span>{' '}
          {ecosystem.heading.part2}
        </h2>

        <p className="mx-auto mt-4 max-w-[754px] font-['Outfit'] text-[clamp(14px,1.8vw,18px)] font-normal leading-[1.6] tracking-[0.02em] text-[#808080] dark:text-[#808080] sm:mt-6">
          {ecosystem.description}
        </p>
      </div>

      {/* Dotted background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 dark:opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, color-mix(in srgb, currentColor 10%, transparent) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, var(--background) 0%, rgba(0,0,0,0.55)) 100%)',
        }}
      />

      {/* Stage */}
      <div
        className="relative aspect-[1200/620] w-full max-w-7xl"
        style={{ containerType: 'inline-size' }}
      >
        {/* SVG layer for paths */}
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="absolute inset-0 h-full w-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="wow-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8b7cff" />
              <stop offset="50%" stopColor="#b794f4" />
              <stop offset="100%" stopColor="#f4a8b8" />
            </linearGradient>

            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="strong-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="14" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <AnimatePresence mode="wait">
            <motion.g key={activeFlow}>
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#wow-gradient)"
                strokeWidth={10}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.35}
                filter="url(#strong-glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.35 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              />

              <motion.path
                d={pathD}
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.95 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              />

              <motion.circle
                r={5}
                fill="currentColor"
                filter="url(#strong-glow)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
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

        {/* Nodes layer */}
        {NODE_LAYOUT.map((n) => {
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
              }}
              animate={{
                scale: active ? 1.5 : 0.75,
                // scale: active ? 1.7 : 0.55,
                opacity: active ? 1 : 0.5,
                // opacity: active ? 1 : 0.25,
              }}
              transition={{
                duration: 0.55,
                ease: [0.65, 0, 0.35, 1],
              }}
            >
              <span
                className="font-bold leading-none tracking-tight"
                style={{
                  fontSize: nodeFontSize(n.size),
                  filter: active
                    ? 'drop-shadow(0 0 14px rgba(183,148,244,0.55))'
                    : 'none',
                }}
              >
                <span
                  style={{
                    background: WOW_THEME.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {nodeCopy.prefix}
                </span>{' '}
                <span className="text-foreground">{nodeCopy.label}</span>
              </span>
            </motion.div>
          )
        })}

        {/* CTA Buttons */}
        <div
          className="absolute left-0 right-0 grid grid-cols-4"
          style={{
            top: `${(CTA_Y / VB_H) * 100}%`,
            transform: 'translateY(-50%)',
            gap: 'clamp(4px, 1cqw, 20px)',
            paddingLeft: 'clamp(4px, 1cqw, 16px)',
            paddingRight: 'clamp(4px, 1cqw, 16px)',
          }}
        >
          {CTA_IDS.map((ctaId, index) => {
            const active = activeFlow === ctaId

            return (
              <button
                key={ctaId}
                onClick={() => setActiveFlow(ctaId)}
                className="relative rounded-md font-medium leading-tight outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary/60"
                style={{
                  fontSize: active
                    // ? 'clamp(10px, 1.8cqw, 20px)'
                    // : 'clamp(5px, 0.85cqw, 10px)',
                        ? 'clamp(10px, 1.8cqw, 20px)'
                    : 'clamp(5px, 0.95cqw, 14px)',
                  letterSpacing: '0.18em',
                  paddingTop: 'clamp(6px, 1.2cqw, 16px)',
                  paddingBottom: 'clamp(6px, 1.2cqw, 16px)',
                  paddingLeft: 'clamp(4px, 1cqw, 20px)',
                  paddingRight: 'clamp(4px, 1cqw, 20px)',
                  background: active
                    ? WOW_THEME.gradient
                    : 'rgba(255,255,255,0.9)',
                  color: active ? '#ffffff' : '#1a1530',
                  opacity: active ? 1 : 0.4,
                  transform: active ? 'scale(1.1)' : 'scale(0.85)',
                  // transform: active ? 'scale(1.3)' : 'scale(0.72)',
                  transformOrigin: 'center',
                  transition: 'all 0.45s cubic-bezier(0.65, 0, 0.35, 1)',
                  boxShadow: active
                    ? '0 10px 40px -10px rgba(139,124,255,0.7), 0 0 0 1px rgba(255,255,255,0.1)'
                    : '0 4px 16px -6px rgba(0,0,0,0.5)',
                }}
                aria-pressed={active}
              >
                {ecosystem.ctas[ctaId as keyof typeof ecosystem.ctas]}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}