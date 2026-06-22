'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'

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

type Node = {
  id: NodeId
  prefix: string
  label: string
  x: number
  y: number
  size?: 'sm' | 'md' | 'lg'
}

const VB_W = 1200
const VB_H = 620
const CTA_Y = 580

const WOW_THEME = {
  gradient: 'linear-gradient(135deg, #8b7cff 0%, #b794f4 50%, #f4a8b8 100%)',
}

const NODES: Node[] = [
  { id: 'websites', prefix: 'WOW', label: 'Websites', x: 15, y: 16, size: 'md' },
  { id: 'host', prefix: 'WOW', label: 'Host', x: 36, y: 11, size: 'md' },
  { id: 'hub', prefix: 'WOW', label: 'Hub', x: 58, y: 14, size: 'lg' },
  { id: 'impact', prefix: 'WOW', label: 'Impact', x: 82, y: 17, size: 'sm' },
  { id: 'design', prefix: 'WOW', label: 'Design', x: 30, y: 34, size: 'md' },
  { id: 'events', prefix: 'WOW', label: 'Events', x: 66, y: 34, size: 'sm' },
  { id: 'intelligence', prefix: 'WOW', label: 'Intelligence', x: 16, y: 52, size: 'md' },
  { id: 'accelerate', prefix: 'WOW', label: 'Accelerate', x: 48, y: 52, size: 'md' },
  { id: 'social', prefix: 'WOW', label: 'Social', x: 80, y: 52, size: 'md' },
  { id: 'softwarewow', prefix: 'Software', label: 'WOW!', x: 30, y: 70, size: 'md' },
  { id: 'marketing', prefix: 'WOW', label: 'Marketing', x: 66, y: 70, size: 'lg' },
]

const CTAS: { id: NodeId; label: string }[] = [
  { id: 'best-app', label: 'THE BEST APP' },
  { id: 'modern-systems', label: 'MODERN SYSTEMS' },
  { id: 'boost-profits', label: 'BOOST PROFITS' },
  { id: 'attract-new', label: 'ATTRACT NEW CUSTOMER' },
]

const FLOWS: Record<string, NodeId[]> = {
  'best-app': ['best-app', 'softwarewow', 'intelligence', 'design'],
  'modern-systems': ['modern-systems', 'softwarewow', 'intelligence', 'design', 'host'],
  'boost-profits': ['boost-profits', 'marketing', 'accelerate', 'social'],
  'attract-new': ['attract-new', 'marketing', 'accelerate', 'social', 'websites'],
}

function nodePos(n: Node) {
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

export default function WowEcosystem() {
  const [activeFlow, setActiveFlow] = useState<keyof typeof FLOWS>('best-app')

  const activeSet = useMemo(() => new Set(FLOWS[activeFlow]), [activeFlow])

  const pathD = useMemo(() => {
    const ids = FLOWS[activeFlow]
    const ctaIdx = CTAS.findIndex((c) => c.id === ids[0])

    const startPt = {
      x: ctaX(ctaIdx),
      y: CTA_Y - 30,
    }

    const nodePoints = ids
      .slice(1)
      .map((nid) => {
        const n = NODES.find((nn) => nn.id === nid)
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
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background px-2 py-6 text-foreground transition-colors duration-300 sm:px-4 sm:py-12">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 dark:opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, color-mix(in srgb, currentColor 10%, transparent) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, var(--background) 0%, rgba(0,0,0,0.55)) 100%)',
        }}
      />

      <div
        className="relative aspect-[1200/620] w-full max-w-7xl"
        style={{ containerType: 'inline-size' }}
      >
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
                opacity={0.3}
                filter="url(#strong-glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
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
                animate={{ pathLength: 1, opacity: 0.5 }}
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

        {NODES.map((n) => {
          const active = activeSet.has(n.id)

          return (
            <motion.div
              key={n.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap"
              style={{
                left: `${n.x}%`,
                top: `${n.y}%`,
              }}
              animate={{
                scale: active ? 1.06 : 1,
                opacity: active ? 1 : 0.45,
              }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              <span
                className="font-bold leading-none tracking-tight"
                style={{
                  fontSize: nodeFontSize(n.size),
                  filter: active ? 'drop-shadow(0 0 14px rgba(183,148,244,0.55))' : 'none',
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
                  {n.prefix}
                </span>{' '}
                <span className="text-foreground">{n.label}</span>
              </span>

              {active && (
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-full"
                  initial={{
                    opacity: 0.4,
                    scale: 1,
                  }}
                  animate={{
                    opacity: 0,
                    scale: 1.6,
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                  style={{
                    boxShadow: '0 0 30px 8px rgba(139,124,255,0.35)',
                  }}
                />
              )}
            </motion.div>
          )
        })}

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
          {CTAS.map((c) => {
            const active = activeFlow === c.id

            return (
              <button
                key={c.id}
                onClick={() => setActiveFlow(c.id)}
                className="relative rounded-md font-medium leading-tight outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary/60"   
                style={{
                  fontSize: 'clamp(7px, 1.2cqw, 14px)',
                  letterSpacing: '0.18em',
                  paddingTop: 'clamp(6px, 1.2cqw, 16px)',
                  paddingBottom: 'clamp(6px, 1.2cqw, 16px)',
                  paddingLeft: 'clamp(4px, 1cqw, 20px)',
                  paddingRight: 'clamp(4px, 1cqw, 20px)',
                  background: active ? WOW_THEME.gradient : 'rgba(255,255,255,0.08)',
                  color: active ? '#ffffff' : 'var(--background)',
                  boxShadow: active
                    ? '0 10px 40px -10px rgba(139,124,255,0.7), 0 0 0 1px rgba(255,255,255,0.1)'
                    : '0 4px 16px -6px rgba(0,0,0,0.25)',
                }}
                aria-pressed={active}
              >
                {c.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

//////////////////////////////////////////////////////////////////////////

// 'use client'

// import { AnimatePresence, motion } from 'framer-motion'
// import { useMemo, useState } from 'react'

// type NodeId =
//   | 'websites'
//   | 'host'
//   | 'hub'
//   | 'impact'
//   | 'intelligence'
//   | 'design'
//   | 'events'
//   | 'accelerate'
//   | 'social'
//   | 'softwarewow'
//   | 'marketing'
//   | 'best-app'
//   | 'modern-systems'
//   | 'boost-profits'
//   | 'attract-new'

// type Node = {
//   id: NodeId
//   prefix: string
//   label: string
//   x: number
//   y: number
//   size?: 'sm' | 'md' | 'lg'
// }

// const VB_W = 1200
// const VB_H = 620

// const WOW_THEME = {
//   background: '#13111c',
//   foreground: '#ffffff',
//   gradient: 'linear-gradient(135deg, #8b7cff 0%, #b794f4 50%, #f4a8b8 100%)',
// }

// const NODES: Node[] = [
//   { id: 'websites', prefix: 'WOW', label: 'Websites', x: 15, y: 16, size: 'md' },
//   { id: 'host', prefix: 'WOW', label: 'Host', x: 36, y: 11, size: 'md' },
//   { id: 'hub', prefix: 'WOW', label: 'Hub', x: 58, y: 14, size: 'lg' },
//   { id: 'impact', prefix: 'WOW', label: 'Impact', x: 82, y: 17, size: 'sm' },
//   { id: 'design', prefix: 'WOW', label: 'Design', x: 30, y: 34, size: 'md' },
//   { id: 'events', prefix: 'WOW', label: 'Events', x: 66, y: 34, size: 'sm' },
//   { id: 'intelligence', prefix: 'WOW', label: 'Intelligence', x: 16, y: 52, size: 'md' },
//   { id: 'accelerate', prefix: 'WOW', label: 'Accelerate', x: 48, y: 52, size: 'md' },
//   { id: 'social', prefix: 'WOW', label: 'Social', x: 80, y: 52, size: 'md' },
//   { id: 'softwarewow', prefix: 'Software', label: 'WOW!', x: 30, y: 70, size: 'md' },
//   { id: 'marketing', prefix: 'WOW', label: 'Marketing', x: 66, y: 70, size: 'lg' },
// ]

// const CTAS: { id: NodeId; label: string }[] = [
//   { id: 'best-app', label: 'THE BEST APP' },
//   { id: 'modern-systems', label: 'MODERN SYSTEMS' },
//   { id: 'boost-profits', label: 'BOOST PROFITS' },
//   { id: 'attract-new', label: 'ATTRACT NEW CUSTOMER' },
// ]

// const FLOWS: Record<string, NodeId[]> = {
//   'best-app': ['best-app', 'softwarewow', 'intelligence', 'design'],
//   'modern-systems': ['modern-systems', 'softwarewow', 'intelligence', 'design', 'host'],
//   'boost-profits': ['boost-profits', 'marketing', 'accelerate', 'social'],
//   'attract-new': ['attract-new', 'marketing', 'accelerate', 'social', 'websites'],
// }

// function nodePos(n: Node) {
//   return {
//     x: (n.x / 100) * VB_W,
//     y: (n.y / 100) * VB_H,
//   }
// }

// const CTA_Y = 580

// function ctaX(idx: number) {
//   const startPct = 12
//   const endPct = 88
//   const step = (endPct - startPct) / 3

//   return ((startPct + step * idx) / 100) * VB_W
// }

// function buildPath(points: { x: number; y: number }[]) {
//   if (points.length < 2) return ''

//   const r = 28
//   let d = `M ${points[0].x} ${points[0].y}`

//   for (let i = 1; i < points.length; i++) {
//     const prev = points[i - 1]
//     const curr = points[i]

//     const midY = (prev.y + curr.y) / 2
//     const dirX = Math.sign(curr.x - prev.x) || 1
//     const dirY = Math.sign(curr.y - prev.y) || 1

//     d += ` L ${prev.x} ${midY - r * dirY}`
//     d += ` Q ${prev.x} ${midY} ${prev.x + r * dirX} ${midY}`
//     d += ` L ${curr.x - r * dirX} ${midY}`
//     d += ` Q ${curr.x} ${midY} ${curr.x} ${midY + r * dirY}`
//     d += ` L ${curr.x} ${curr.y}`
//   }

//   return d
// }

// export default function WowEcosystem() {
//   const [activeFlow, setActiveFlow] = useState<keyof typeof FLOWS>('best-app')

//   const activeSet = useMemo(() => new Set(FLOWS[activeFlow]), [activeFlow])

//   const pathD = useMemo(() => {
//     const ids = FLOWS[activeFlow]
//     const ctaIdx = CTAS.findIndex((c) => c.id === ids[0])

//     const startPt = {
//       x: ctaX(ctaIdx),
//       y: CTA_Y - 30,
//     }

//     const nodePoints = ids
//       .slice(1)
//       .map((nid) => {
//         const n = NODES.find((nn) => nn.id === nid)
//         if (!n) return null

//         const p = nodePos(n)

//         return {
//           x: p.x,
//           y: p.y + 14,
//         }
//       })
//       .filter(Boolean) as { x: number; y: number }[]

//     return buildPath([startPt, ...nodePoints])
//   }, [activeFlow])

//   const nodeFontSize = (s?: 'sm' | 'md' | 'lg') => {
//     if (s === 'lg') return 'clamp(14px, 3.4cqw, 38px)'
//     if (s === 'sm') return 'clamp(9px, 2cqw, 22px)'
//     return 'clamp(11px, 2.6cqw, 30px)'
//   }

//   return (
//     <div
//       className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-2 py-6 sm:px-4 sm:py-12"
//       style={{
//         background: WOW_THEME.background,
//       }}
//     >
//       <div
//         aria-hidden
//         className="absolute inset-0 opacity-40"
//         style={{
//           backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
//           backgroundSize: '22px 22px',
//         }}
//       />

//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0"
//         style={{
//           background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
//         }}
//       />

//       <div
//         className="relative aspect-[1200/620] w-full max-w-7xl"
//         style={{ containerType: 'inline-size' }}
//       >
//         <svg
//           viewBox={`0 0 ${VB_W} ${VB_H}`}
//           className="absolute inset-0 h-full w-full overflow-visible"
//           preserveAspectRatio="xMidYMid meet"
//         >
//           <defs>
//             <linearGradient id="wow-gradient" x1="0" y1="0" x2="1" y2="0">
//               <stop offset="0%" stopColor="#8b7cff" />
//               <stop offset="50%" stopColor="#b794f4" />
//               <stop offset="100%" stopColor="#f4a8b8" />
//             </linearGradient>

//             <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//               <feGaussianBlur stdDeviation="6" result="blur" />
//               <feMerge>
//                 <feMergeNode in="blur" />
//                 <feMergeNode in="SourceGraphic" />
//               </feMerge>
//             </filter>

//             <filter id="strong-glow" x="-50%" y="-50%" width="200%" height="200%">
//               <feGaussianBlur stdDeviation="14" result="blur" />
//               <feMerge>
//                 <feMergeNode in="blur" />
//                 <feMergeNode in="SourceGraphic" />
//               </feMerge>
//             </filter>
//           </defs>

//           <AnimatePresence mode="wait">
//             <motion.g key={activeFlow}>
//               <motion.path
//                 d={pathD}
//                 fill="none"
//                 stroke="url(#wow-gradient)"
//                 strokeWidth={10}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 opacity={0.35}
//                 filter="url(#strong-glow)"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 animate={{ pathLength: 1, opacity: 0.35 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
//               />

//               <motion.path
//                 d={pathD}
//                 fill="none"
//                 stroke="white"
//                 strokeWidth={1.6}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 filter="url(#glow)"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 animate={{ pathLength: 1, opacity: 0.95 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
//               />

//               <motion.circle
//                 r={5}
//                 fill="white"
//                 filter="url(#strong-glow)"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <animateMotion
//                   key={`${activeFlow}-particle`}
//                   dur="2.4s"
//                   repeatCount="indefinite"
//                   rotate="auto"
//                   path={pathD}
//                 />
//               </motion.circle>
//             </motion.g>
//           </AnimatePresence>
//         </svg>

//         {NODES.map((n) => {
//           const active = activeSet.has(n.id)

//           return (
//             <motion.div
//               key={n.id}
//               className="absolute -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap"
//               style={{
//                 left: `${n.x}%`,
//                 top: `${n.y}%`,
//               }}
//               animate={{
//                 scale: active ? 1.06 : 1,
//                 opacity: active ? 1 : 0.45,
//               }}
//               transition={{
//                 duration: 0.5,
//                 ease: 'easeOut',
//               }}
//             >
//               <span
//                 className="font-bold leading-none tracking-tight"
//                 style={{
//                   fontSize: nodeFontSize(n.size),
//                   filter: active ? 'drop-shadow(0 0 14px rgba(183,148,244,0.55))' : 'none',
//                 }}
//               >
//                 <span
//                   style={{
//                     background: WOW_THEME.gradient,
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                     backgroundClip: 'text',
//                   }}
//                 >
//                   {n.prefix}
//                 </span>{' '}
//                 <span style={{ color: WOW_THEME.foreground }}>{n.label}</span>
//               </span>

//               {active && (
//                 <motion.span
//                   aria-hidden
//                   className="absolute inset-0 rounded-full"
//                   initial={{
//                     opacity: 0.4,
//                     scale: 1,
//                   }}
//                   animate={{
//                     opacity: 0,
//                     scale: 1.6,
//                   }}
//                   transition={{
//                     duration: 1.6,
//                     repeat: Infinity,
//                     ease: 'easeOut',
//                   }}
//                   style={{
//                     boxShadow: '0 0 30px 8px rgba(139,124,255,0.35)',
//                   }}
//                 />
//               )}
//             </motion.div>
//           )
//         })}

//         <div
//           className="absolute left-0 right-0 grid grid-cols-4"
//           style={{
//             top: `${(CTA_Y / VB_H) * 100}%`,
//             transform: 'translateY(-50%)',
//             gap: 'clamp(4px, 1cqw, 20px)',
//             paddingLeft: 'clamp(4px, 1cqw, 16px)',
//             paddingRight: 'clamp(4px, 1cqw, 16px)',
//           }}
//         >
//           {CTAS.map((c) => {
//             const active = activeFlow === c.id

//             return (
//               <button
//                 key={c.id}
//                 onClick={() => setActiveFlow(c.id)}
//                 className="relative rounded-md font-medium leading-tight outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white/60"
//                 style={{
//                   fontSize: 'clamp(7px, 1.2cqw, 14px)',
//                   letterSpacing: '0.18em',
//                   paddingTop: 'clamp(6px, 1.2cqw, 16px)',
//                   paddingBottom: 'clamp(6px, 1.2cqw, 16px)',
//                   paddingLeft: 'clamp(4px, 1cqw, 20px)',
//                   paddingRight: 'clamp(4px, 1cqw, 20px)',
//                   background: active ? WOW_THEME.gradient : 'rgba(255,255,255,0.96)',
//                   color: active ? '#ffffff' : '#1a1530',
//                   boxShadow: active
//                     ? '0 10px 40px -10px rgba(139,124,255,0.7), 0 0 0 1px rgba(255,255,255,0.1)'
//                     : '0 4px 16px -6px rgba(0,0,0,0.5)',
//                 }}
//                 aria-pressed={active}
//               >
//                 {c.label}
//               </button>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }


//////////////////////////////////////////////////
// 'use client'

// import { AnimatePresence, motion } from 'framer-motion'
// import { useMemo, useState } from 'react'

// type NodeId =
//   | 'websites'
//   | 'host'
//   | 'hub'
//   | 'impact'
//   | 'intelligence'
//   | 'design'
//   | 'events'
//   | 'accelerate'
//   | 'social'
//   | 'softwarewow'
//   | 'marketing'
//   | 'best-app'
//   | 'modern-systems'
//   | 'boost-profits'
//   | 'attract-new'

// type Node = {
//   id: NodeId
//   prefix: string
//   label: string
//   x: number
//   y: number
//   size?: 'sm' | 'md' | 'lg'
// }

// const VB_W = 1200
// const VB_H = 620

// const NODES: Node[] = [
//   { id: 'websites', prefix: 'WOW', label: 'Websites', x: 15, y: 16, size: 'md' },
//   { id: 'host', prefix: 'WOW', label: 'Host', x: 36, y: 11, size: 'md' },
//   { id: 'hub', prefix: 'WOW', label: 'Hub', x: 58, y: 14, size: 'lg' },
//   { id: 'impact', prefix: 'WOW', label: 'Impact', x: 82, y: 17, size: 'sm' },
//   { id: 'design', prefix: 'WOW', label: 'Design', x: 30, y: 34, size: 'md' },
//   { id: 'events', prefix: 'WOW', label: 'Events', x: 66, y: 34, size: 'sm' },
//   { id: 'intelligence', prefix: 'WOW', label: 'Intelligence', x: 16, y: 52, size: 'md' },
//   { id: 'accelerate', prefix: 'WOW', label: 'Accelerate', x: 48, y: 52, size: 'md' },
//   { id: 'social', prefix: 'WOW', label: 'Social', x: 80, y: 52, size: 'md' },
//   { id: 'softwarewow', prefix: 'Software', label: 'WOW!', x: 30, y: 70, size: 'md' },
//   { id: 'marketing', prefix: 'WOW', label: 'Marketing', x: 66, y: 70, size: 'lg' },
// ]

// const CTAS: { id: NodeId; label: string }[] = [
//   { id: 'best-app', label: 'THE BEST APP' },
//   { id: 'modern-systems', label: 'MODERN SYSTEMS' },
//   { id: 'boost-profits', label: 'BOOST PROFITS' },
//   { id: 'attract-new', label: 'ATTRACT NEW CUSTOMER' },
// ]

// const FLOWS: Record<string, NodeId[]> = {
//   'best-app': ['best-app', 'softwarewow', 'intelligence', 'design'],
//   'modern-systems': ['modern-systems', 'softwarewow', 'intelligence', 'design', 'host'],
//   'boost-profits': ['boost-profits', 'marketing', 'accelerate', 'social'],
//   'attract-new': ['attract-new', 'marketing', 'accelerate', 'social', 'websites'],
// }

// function nodePos(n: Node) {
//   return { x: (n.x / 100) * VB_W, y: (n.y / 100) * VB_H }
// }

// const CTA_Y = 580
// function ctaX(idx: number) {
//   const startPct = 12
//   const endPct = 88
//   const step = (endPct - startPct) / 3
//   return ((startPct + step * idx) / 100) * VB_W
// }

// function buildPath(points: { x: number; y: number }[]) {
//   if (points.length < 2) return ''
//   const r = 28
//   let d = `M ${points[0].x} ${points[0].y}`
//   for (let i = 1; i < points.length; i++) {
//     const prev = points[i - 1]
//     const curr = points[i]
//     const midY = (prev.y + curr.y) / 2
//     const dirX = Math.sign(curr.x - prev.x) || 1
//     const dirY = Math.sign(curr.y - prev.y) || 1
//     d += ` L ${prev.x} ${midY - r * dirY}`
//     d += ` Q ${prev.x} ${midY} ${prev.x + r * dirX} ${midY}`
//     d += ` L ${curr.x - r * dirX} ${midY}`
//     d += ` Q ${curr.x} ${midY} ${curr.x} ${midY + r * dirY}`
//     d += ` L ${curr.x} ${curr.y}`
//   }
//   return d
// }

// export default function WowEcosystem() {
//   const [activeFlow, setActiveFlow] = useState<keyof typeof FLOWS>('best-app')

//   const activeSet = useMemo(() => new Set(FLOWS[activeFlow]), [activeFlow])

//   const pathD = useMemo(() => {
//     const ids = FLOWS[activeFlow]
//     const ctaIdx = CTAS.findIndex((c) => c.id === ids[0])
//     const startPt = { x: ctaX(ctaIdx), y: CTA_Y - 30 }
//     const nodePoints = ids
//       .slice(1)
//       .map((nid) => {
//         const n = NODES.find((nn) => nn.id === nid)
//         if (!n) return null
//         const p = nodePos(n)
//         return { x: p.x, y: p.y + 14 }
//       })
//       .filter(Boolean) as { x: number; y: number }[]
//     return buildPath([startPt, ...nodePoints])
//   }, [activeFlow])

//   const nodeFontSize = (s?: 'sm' | 'md' | 'lg') => {
//     if (s === 'lg') return 'clamp(14px, 3.4cqw, 38px)'
//     if (s === 'sm') return 'clamp(9px, 2cqw, 22px)'
//     return 'clamp(11px, 2.6cqw, 30px)'
//   }

//   return (
//     <div className="wow-ecosystem relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background px-2 py-6 sm:px-4 sm:py-12">
//       <div
//         aria-hidden
//         className="absolute inset-0 opacity-40"
//         style={{
//           backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
//           backgroundSize: '22px 22px',
//         }}
//       />
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0"
//         style={{
//           background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
//         }}
//       />

//       <div
//         className="relative aspect-[1200/620] w-full max-w-7xl"
//         style={{ containerType: 'inline-size' }}
//       >
//         <svg
//           viewBox={`0 0 ${VB_W} ${VB_H}`}
//           className="absolute inset-0 h-full w-full overflow-visible"
//           preserveAspectRatio="xMidYMid meet"
//         >
//           <defs>
//             <linearGradient id="wow-gradient" x1="0" y1="0" x2="1" y2="0">
//               <stop offset="0%" stopColor="#8b7cff" />
//               <stop offset="50%" stopColor="#b794f4" />
//               <stop offset="100%" stopColor="#f4a8b8" />
//             </linearGradient>
//             <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//               <feGaussianBlur stdDeviation="6" result="blur" />
//               <feMerge>
//                 <feMergeNode in="blur" />
//                 <feMergeNode in="SourceGraphic" />
//               </feMerge>
//             </filter>
//             <filter id="strong-glow" x="-50%" y="-50%" width="200%" height="200%">
//               <feGaussianBlur stdDeviation="14" result="blur" />
//               <feMerge>
//                 <feMergeNode in="blur" />
//                 <feMergeNode in="SourceGraphic" />
//               </feMerge>
//             </filter>
//           </defs>

//           <AnimatePresence mode="wait">
//             <motion.g key={activeFlow}>
//               <motion.path
//                 d={pathD}
//                 fill="none"
//                 stroke="url(#wow-gradient)"
//                 strokeWidth={10}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 opacity={0.35}
//                 filter="url(#strong-glow)"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 animate={{ pathLength: 1, opacity: 0.35 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
//               />
//               <motion.path
//                 d={pathD}
//                 fill="none"
//                 stroke="white"
//                 strokeWidth={1.6}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 filter="url(#glow)"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 animate={{ pathLength: 1, opacity: 0.95 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
//               />
//               <motion.circle
//                 r={5}
//                 fill="white"
//                 filter="url(#strong-glow)"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <animateMotion
//                   key={activeFlow + '-particle'}
//                   dur="2.4s"
//                   repeatCount="indefinite"
//                   rotate="auto"
//                   path={pathD}
//                 />
//               </motion.circle>
//             </motion.g>
//           </AnimatePresence>
//         </svg>

//         {NODES.map((n) => {
//           const active = activeSet.has(n.id)
//           return (
//             <motion.div
//               key={n.id}
//               className="absolute -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap"
//               style={{ left: `${n.x}%`, top: `${n.y}%` }}
//               animate={{
//                 scale: active ? 1.06 : 1,
//                 opacity: active ? 1 : 0.45,
//               }}
//               transition={{ duration: 0.5, ease: 'easeOut' }}
//             >
//               <span
//                 className="font-bold leading-none tracking-tight"
//                 style={{
//                   fontSize: nodeFontSize(n.size),
//                   filter: active ? 'drop-shadow(0 0 14px rgba(183,148,244,0.55))' : 'none',
//                 }}
//               >
//                 <span
//                   style={{
//                     background: 'var(--gradient-wow)',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                     backgroundClip: 'text',
//                   }}
//                 >
//                   {n.prefix}
//                 </span>{' '}
//                 <span className="text-foreground">{n.label}</span>
//               </span>
//               {active && (
//                 <motion.span
//                   aria-hidden
//                   className="absolute inset-0 rounded-full"
//                   initial={{ opacity: 0.4, scale: 1 }}
//                   animate={{ opacity: 0, scale: 1.6 }}
//                   transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
//                   style={{
//                     boxShadow: '0 0 30px 8px rgba(139,124,255,0.35)',
//                   }}
//                 />
//               )}
//             </motion.div>
//           )
//         })}

//         <div
//           className="absolute left-0 right-0 grid grid-cols-4"
//           style={{
//             top: `${(CTA_Y / VB_H) * 100}%`,
//             transform: 'translateY(-50%)',
//             gap: 'clamp(4px, 1cqw, 20px)',
//             paddingLeft: 'clamp(4px, 1cqw, 16px)',
//             paddingRight: 'clamp(4px, 1cqw, 16px)',
//           }}
//         >
//           {CTAS.map((c) => {
//             const active = activeFlow === c.id
//             return (
//               <button
//                 key={c.id}
//                 onClick={() => setActiveFlow(c.id)}
//                 className="relative rounded-md font-medium leading-tight outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white/60"
//                 style={{
//                   fontSize: 'clamp(7px, 1.2cqw, 14px)',
//                   letterSpacing: '0.18em',
//                   paddingTop: 'clamp(6px, 1.2cqw, 16px)',
//                   paddingBottom: 'clamp(6px, 1.2cqw, 16px)',
//                   paddingLeft: 'clamp(4px, 1cqw, 20px)',
//                   paddingRight: 'clamp(4px, 1cqw, 20px)',
//                   background: active ? 'var(--gradient-wow)' : 'rgba(255,255,255,0.96)',
//                   color: active ? 'white' : '#1a1530',
//                   boxShadow: active
//                     ? '0 10px 40px -10px rgba(139,124,255,0.7), 0 0 0 1px rgba(255,255,255,0.1)'
//                     : '0 4px 16px -6px rgba(0,0,0,0.5)',
//                 }}
//                 aria-pressed={active}
//               >
//                 {c.label}
//               </button>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }
