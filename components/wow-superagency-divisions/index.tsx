'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const DIVISIONS = [
  'WOW Marketing',
  'WOW Social',
  'WOW Accelerate',
  'WOW Impact',
  'WOW Events',
  'WOW Design',
  'WOW Intelligence',
  'WOW Hub',
  'WOW Websites',
  'WOW Host',
]

const VB_W = 1200
const VB_H = 760
const CX = VB_W / 2
const CY = VB_H / 2

const ORBITS = [
  { rx: 280, ry: 150 },
  { rx: 460, ry: 230 },
  { rx: 560, ry: 290 },
]

type Placed = {
  name: string
  x: number
  y: number
  angle: number
  orbit: number
}

function placeDivisions(): Placed[] {
  const groups = [
    { count: 3, orbit: 0, startAngle: -110, span: 220 },
    { count: 4, orbit: 1, startAngle: -150, span: 300 },
    { count: 3, orbit: 2, startAngle: -70, span: 220 },
  ]
  const out: Placed[] = []
  let i = 0
  for (const g of groups) {
    for (let k = 0; k < g.count; k++) {
      const t = g.count === 1 ? 0.5 : k / (g.count - 1)
      const angle = ((g.startAngle + t * g.span) * Math.PI) / 180
      const { rx, ry } = ORBITS[g.orbit]
      out.push({
        name: DIVISIONS[i++],
        x: CX + rx * Math.cos(angle),
        y: CY + ry * Math.sin(angle),
        angle,
        orbit: g.orbit,
      })
    }
  }
  return out
}

const PLACED = placeDivisions()

function ellipsePath(rx: number, ry: number) {
  return `M ${CX - rx},${CY} a ${rx},${ry} 0 1,0 ${rx * 2},0 a ${rx},${ry} 0 1,0 ${-rx * 2},0`
}

export default function WowSuperagencyDivisions() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="relative w-full overflow-hidden bg-[#050505] py-24 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.9) 30%, transparent 75%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(124,108,242,0.28) 0%, rgba(215,141,167,0.10) 35%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
          One ecosystem.{' '}
          <span className="bg-gradient-to-r from-[#7C6CF2] to-[#D78DA7] bg-clip-text text-transparent">
            Ten powerful divisions.
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/60 md:text-base">
          WOW Superagency is the parent organization powering every WOW division through one connected ecosystem.
        </p>
      </div>

      <div className="relative mx-auto mt-12 block aspect-[1200/760] w-full max-w-[1200px]">
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7C6CF2" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#D78DA7" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#7C6CF2" stopOpacity="0" />
              <stop offset="50%" stopColor="#7C6CF2" stopOpacity="1" />
              <stop offset="100%" stopColor="#D78DA7" stopOpacity="0" />
            </linearGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle cx={CX} cy={CY} r={260} fill="url(#centerGlow)" />

          {ORBITS.map((o, i) => {
            const d = ellipsePath(o.rx, o.ry)
            return (
              <g key={i}>
                <path d={d} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
                <path
                  d={d}
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth={1.5}
                  strokeDasharray="180 2000"
                  strokeLinecap="round"
                  filter="url(#softGlow)">
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="-2180"
                    dur={`${12 + i * 4}s`}
                    repeatCount="indefinite"
                  />
                </path>
                <circle r={3} fill="#fff" filter="url(#softGlow)">
                  <animateMotion dur={`${14 + i * 3}s`} repeatCount="indefinite" path={d} rotate="auto" />
                </circle>
                <circle r={2} fill="#D78DA7" filter="url(#softGlow)">
                  <animateMotion
                    dur={`${18 + i * 3}s`}
                    repeatCount="indefinite"
                    path={d}
                    rotate="auto"
                    begin={`-${4 + i * 2}s`}
                  />
                </circle>
              </g>
            )
          })}

          {hovered !== null && (
            <line
              x1={CX}
              y1={CY}
              x2={PLACED[hovered].x}
              y2={PLACED[hovered].y}
              stroke="url(#lineGrad)"
              strokeWidth={1.5}
              filter="url(#softGlow)">
              <animate attributeName="stroke-dasharray" from="0 600" to="600 0" dur="0.6s" fill="freeze" />
            </line>
          )}
        </svg>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="relative rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-3 shadow-[0_0_80px_-20px_rgba(124,108,242,0.6)] backdrop-blur-xl md:rounded-3xl md:px-10 md:py-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(124,108,242,0.25), rgba(215,141,167,0.15))',
                opacity: 0.6,
              }}
            />
            <div className="relative text-center">
              <p className="text-[8px] uppercase tracking-[0.2em] text-white/50 md:text-xs md:tracking-[0.3em]">
                Parent Organization
              </p>
              <h3 className="mt-1 text-sm font-bold tracking-tight md:mt-2 md:text-4xl">
                <span className="bg-gradient-to-r from-[#7C6CF2] via-[#A57DD0] to-[#D78DA7] bg-clip-text text-transparent">
                  WOW
                </span>{' '}
                Superagency
              </h3>
            </div>
          </div>
        </motion.div>

        {PLACED.map((p, i) => (
          <DivisionCard
            key={p.name}
            placed={p}
            index={i}
            hovered={hovered === i}
            onHover={(h) => setHovered(h ? i : null)}
          />
        ))}
      </div>
    </section>
  )
}

function DivisionCard({
  placed,
  index,
  hovered,
  onHover,
}: {
  placed: Placed
  index: number
  hovered: boolean
  onHover: (h: boolean) => void
}) {
  const leftPct = (placed.x / VB_W) * 100
  const topPct = (placed.y / VB_H) * 100

  return (
    <motion.button
      type="button"
      onHoverStart={() => onHover(true)}
      onHoverEnd={() => onHover(false)}
      onFocus={() => onHover(true)}
      onBlur={() => onHover(false)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: hovered ? 1.08 : 1,
        y: [0, -4, 0, 4, 0],
      }}
      transition={{
        opacity: { delay: 0.3 + index * 0.06, duration: 0.5 },
        scale: { duration: 0.25, ease: 'easeOut' },
        y: {
          duration: 6 + (index % 4),
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.2,
        },
      }}
      style={{ left: `${leftPct}%`, top: `${topPct}%` }}
      className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
      aria-label={placed.name}>
      <div
        className="relative rounded-lg border border-white/15 bg-white/[0.05] px-1.5 py-0.5 backdrop-blur-xl transition-all duration-300 md:rounded-xl md:px-4 md:py-2.5"
        style={{
          boxShadow: hovered
            ? '0 0 40px -8px rgba(124,108,242,0.7), 0 0 0 1px rgba(215,141,167,0.4) inset'
            : '0 4px 20px -8px rgba(0,0,0,0.6)',
        }}>
        <span className="whitespace-nowrap text-[8px] font-semibold tracking-tight md:text-sm">
          <span className="bg-gradient-to-r from-[#7C6CF2] to-[#D78DA7] bg-clip-text text-transparent">WOW</span>
          <span className="text-white">{placed.name.replace('WOW', '')}</span>
        </span>
      </div>
    </motion.button>
  )
}
