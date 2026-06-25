'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

//  height
const VB_W = 1200
const VB_H = 600
const CX = VB_W / 2
const CY = VB_H / 2

// Reduced orbit radii 
const ORBITS = [
  { rx: 240, ry: 120 },
  { rx: 400, ry: 190 },
  { rx: 500, ry: 240 },
]

type Placed = {
  name: string
  x: number
  y: number
  angle: number
  orbit: number
}

function placeDivisions(): Placed[] {
  const positions = [
    { name: 'WOW Social', x: 600, y: 60, orbit: 1 },
    { name: 'WOW Marketing', x: 330, y: 120, orbit: 1 },
    { name: 'WOW Accelerate', x: 930, y: 125, orbit: 1 },
    { name: 'WOW Impact', x: 100, y: 290, orbit: 2 },
    { name: 'WOW Events', x: 320, y: 280, orbit: 0 },
    { name: 'WOW Design', x: 870, y: 280, orbit: 0 },
    { name: 'WOW Intelligence', x: 1085, y: 370, orbit: 2 },
    { name: 'WOW Hub', x: 330, y: 490, orbit: 1 },
    { name: 'WOW Websites', x: 600, y: 530, orbit: 1 },
    { name: 'WOW Host', x: 930, y: 490, orbit: 1 },
  ]

  return positions.map((p) => ({
    ...p,
    angle: Math.atan2(p.y - CY, p.x - CX),
  }))
}

const PLACED = placeDivisions()

function ellipsePath(rx: number, ry: number) {
  return `M ${CX - rx},${CY} a ${rx},${ry} 0 1,0 ${rx * 2},0 a ${rx},${ry} 0 1,0 ${-rx * 2},0`
}

const sectionThemeClass =
  'bg-backgroundBody text-secondary dark:bg-dark-300 dark:text-backgroundBody [--wow-primary:#615CCE] [--wow-accent:#FF9191] [--wow-mid:#CECCF0] [--wow-grid:rgba(23,23,23,0.06)] [--wow-orbit:rgba(23,23,23,0.08)] [--wow-glow-primary:rgba(97,92,206,0.18)] [--wow-glow-accent:rgba(255,145,145,0.08)] [--wow-glow-fade:rgba(237,237,237,0)] [--wow-card-bg:rgba(255,255,255,0.88)] [--wow-card-border:rgba(23,23,23,0.12)] [--wow-card-overlay:rgba(97,92,206,0.12)] [--wow-card-overlay-accent:rgba(255,145,145,0.08)] [--wow-center-shadow:rgba(97,92,206,0.35)] [--wow-div-shadow:0_4px_20px_-8px_rgba(0,0,0,0.12)] [--wow-div-hover-shadow:0_0_40px_-8px_rgba(97,92,206,0.55),0_0_0_1px_rgba(255,145,145,0.35)_inset] [--wow-particle-1:#615CCE] [--wow-particle-2:#FF9191] dark:[--wow-grid:rgba(255,255,255,0.06)] dark:[--wow-orbit:rgba(255,255,255,0.08)] dark:[--wow-glow-primary:rgba(97,92,206,0.28)] dark:[--wow-glow-accent:rgba(255,145,145,0.10)] dark:[--wow-glow-fade:rgba(0,0,0,0)] dark:[--wow-card-bg:rgba(255,255,255,0.04)] dark:[--wow-card-border:rgba(255,255,255,0.15)] dark:[--wow-card-overlay:rgba(97,92,206,0.25)] dark:[--wow-card-overlay-accent:rgba(255,145,145,0.15)] dark:[--wow-center-shadow:rgba(97,92,206,0.6)] dark:[--wow-div-shadow:0_4px_20px_-8px_rgba(0,0,0,0.6)] dark:[--wow-div-hover-shadow:0_0_40px_-8px_rgba(97,92,206,0.7),0_0_0_1px_rgba(255,145,145,0.4)_inset] dark:[--wow-particle-1:#ffffff] dark:[--wow-particle-2:#FF9191]'

export default function WowSuperagencyDivisions() {
  const [activeDivision, setActiveDivision] = useState<number | null>(null)

  return (
    <section className={`relative w-full overflow-hidden py-8 sm:py-10 md:py-12 lg:py-16 ${sectionThemeClass}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(var(--wow-grid) 1px, transparent 1px), linear-gradient(90deg, var(--wow-grid) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.9) 30%, transparent 75%)',
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] xl:h-[550px] xl:w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, var(--wow-glow-primary) 0%, var(--wow-glow-accent) 35%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <h2 className="mx-auto max-w-3xl text-balance text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-secondary dark:text-backgroundBody">
          One ecosystem.{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ten powerful divisions.
          </span>
        </h2>

        <p className="mx-auto mt-2 sm:mt-3 max-w-xl text-xs sm:text-sm md:text-base text-colorText dark:text-dark-100">
          WOW Superagency is the parent organization powering every WOW division through one connected ecosystem.
        </p>
      </div>


      <div className="relative mx-auto mt-6 sm:mt-8 md:mt-10 aspect-[1200/600] w-full max-w-[1500px] px-2 sm:px-4 lg:px-8">
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <radialGradient id="wow-sa-centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--wow-primary)" stopOpacity="0.55" />
              <stop offset="60%" stopColor="var(--wow-accent)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--wow-glow-fade)" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="wow-sa-lineGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="var(--wow-primary)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--wow-primary)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--wow-accent)" stopOpacity="0" />
            </linearGradient>

            <filter id="wow-sa-softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>


          <circle cx={CX} cy={CY} r={200} fill="url(#wow-sa-centerGlow)" />

          {ORBITS.map((o, i) => {
            const d = ellipsePath(o.rx, o.ry)

            return (
              <g key={i}>
                <path d={d} fill="none" stroke="var(--wow-orbit)" strokeWidth={1} />

                <path
                  d={d}
                  fill="none"
                  stroke="url(#wow-sa-lineGrad)"
                  strokeWidth={1.5}
                  strokeDasharray="180 2000"
                  strokeLinecap="round"
                  filter="url(#wow-sa-softGlow)"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="-2180"
                    dur={`${12 + i * 4}s`}
                    repeatCount="indefinite"
                  />
                </path>

                <circle r={3} fill="var(--wow-particle-1)" filter="url(#wow-sa-softGlow)">
                  <animateMotion dur={`${14 + i * 3}s`} repeatCount="indefinite" path={d} rotate="auto" />
                </circle>

                <circle r={2} fill="var(--wow-particle-2)" filter="url(#wow-sa-softGlow)">
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
        </svg>

        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="pointer-events-none absolute inset-0 z-[8] h-full w-full"
          aria-hidden
        >
          <defs>
            <filter id="wow-sa-hoverGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {activeDivision !== null && PLACED[activeDivision] && (
            <>
              <line
                x1={CX}
                y1={CY}
                x2={PLACED[activeDivision].x}
                y2={PLACED[activeDivision].y}
                stroke="var(--wow-primary)"
                strokeWidth={3}
                strokeLinecap="round"
                filter="url(#wow-sa-hoverGlow)"
                opacity="0.6"
              >
                <animate attributeName="stroke-dasharray" from="0 900" to="900 0" dur="0.45s" fill="freeze" />
              </line>
              
              <line
                x1={CX}
                y1={CY}
                x2={PLACED[activeDivision].x}
                y2={PLACED[activeDivision].y}
                stroke="var(--wow-primary)"
                strokeWidth={2}
                strokeLinecap="round"
                opacity="0.9"
              >
                <animate attributeName="stroke-dasharray" from="0 900" to="900 0" dur="0.45s" fill="freeze" />
              </line>
              
              <circle cx={CX} cy={CY} r="4" fill="var(--wow-primary)" opacity="0.8">
                <animate attributeName="r" from="2" to="6" dur="0.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.4" to="0.9" dur="0.8s" repeatCount="indefinite" />
              </circle>
              
              <circle cx={PLACED[activeDivision].x} cy={PLACED[activeDivision].y} r="4" fill="var(--wow-accent)" opacity="0.8">
                <animate attributeName="r" from="2" to="6" dur="0.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.4" to="0.9" dur="0.8s" repeatCount="indefinite" />
              </circle>
            </>
          )}
        </svg>

        <div className="absolute left-1/2 top-1/2 z-[9] -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div
              className="relative rounded-radius-md border px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 xl:px-10 xl:py-4 2xl:px-12 2xl:py-5 backdrop-blur-xl md:rounded-radius-md"
              style={{
                borderColor: 'var(--wow-card-border)',
                backgroundColor: 'var(--wow-card-bg)',
                boxShadow: '0 0 80px -20px var(--wow-center-shadow)',
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-radius-md"
                style={{
                  background:
                    'linear-gradient(135deg, var(--wow-card-overlay), var(--wow-card-overlay-accent))',
                  opacity: 0.6,
                }}
              />

              <div className="relative text-center">
                <p className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] text-colorText dark:text-dark-100">
                  Parent Organization
                </p>

                <h3 className="mt-0 text-[10px] sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold tracking-tight text-secondary dark:text-backgroundBody">
                  <span className="bg-gradient-to-r from-primary via-primary-50 to-accent bg-clip-text text-transparent">
                    WOW
                  </span>{' '}
                  Superagency
                </h3>
              </div>
            </div>
          </motion.div>
        </div>

        {PLACED.map((p, i) => (
          <DivisionCard
            key={p.name}
            placed={p}
            index={i}
            active={activeDivision === i}
            onActive={(active) => setActiveDivision(active ? i : null)}
            onClick={() => setActiveDivision(activeDivision === i ? null : i)}
          />
        ))}
      </div>
    </section>
  )
}

function DivisionCard({
  placed,
  index,
  active,
  onActive,
  onClick,
}: {
  placed: Placed
  index: number
  active: boolean
  onActive: (active: boolean) => void
  onClick: () => void
}) {
  const leftPct = (placed.x / VB_W) * 100
  const topPct = (placed.y / VB_H) * 100

  return (
    <div
      style={{ left: `${leftPct}%`, top: `${topPct}%` }}
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
    >
      <motion.button
        type="button"
        onHoverStart={() => onActive(true)}
        onHoverEnd={() => onActive(false)}
        onFocus={() => onActive(true)}
        onBlur={() => onActive(false)}
        onClick={onClick}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: active ? 1.08 : 1,
          y: [0, -3, 0, 3, 0],
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
        className="group focus:outline-none"
        aria-label={placed.name}
      >
        <div
          className="relative rounded-radius-sm border px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 2xl:px-6 2xl:py-3 backdrop-blur-xl transition-all duration-300 sm:rounded-radius-sm md:rounded-radius-sm"
          style={{
            borderColor: 'var(--wow-card-border)',
            backgroundColor: 'var(--wow-card-bg)',
            boxShadow: active ? 'var(--wow-div-hover-shadow)' : 'var(--wow-div-shadow)',
          }}
        >
          <span className="whitespace-nowrap text-[6px] sm:text-[8px] md:text-[10px] lg:text-sm xl:text-base 2xl:text-lg font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              WOW
            </span>
            <span className="text-secondary dark:text-backgroundBody">
              {placed.name.replace('WOW', '')}
            </span>
          </span>
        </div>
      </motion.button>
    </div>
  )
}