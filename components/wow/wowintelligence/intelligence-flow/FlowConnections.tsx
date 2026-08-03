'use client'

import { useCallback, useEffect, useState } from 'react'
import type { RefObject } from 'react'

type Point = { x: number; y: number }

type Props = {
  containerRef: RefObject<HTMLDivElement | null>
  coreRef: RefObject<HTMLDivElement | null>
  inputRefs: RefObject<(HTMLDivElement | null)[]>
  outputRefs: RefObject<(HTMLDivElement | null)[]>
}

const STROKES = ['url(#g-violet)', 'url(#g-blue)', 'url(#g-pink)']

function anchor(rect: DOMRect, container: DOMRect, edge: 'left' | 'right'): Point {
  return {
    x: edge === 'left' ? rect.left - container.left : rect.right - container.left,
    y: rect.top + rect.height / 2 - container.top,
  }
}

function curve(from: Point, to: Point): string {
  const bend = Math.min(Math.abs(to.x - from.x) * 0.55, 140)
  const cp1x = from.x + (to.x > from.x ? bend : -bend)
  const cp2x = to.x + (to.x > from.x ? -bend : bend)
  return `M${from.x},${from.y} C${cp1x},${from.y} ${cp2x},${to.y} ${to.x},${to.y}`
}

export function FlowConnections({ containerRef, coreRef, inputRefs, outputRefs }: Props) {
  const [paths, setPaths] = useState<string[]>([])
  const [size, setSize] = useState({ w: 0, h: 0 })

  const update = useCallback(() => {
    const container = containerRef.current
    const core = coreRef.current
    if (!container || !core) return

    const cRect = container.getBoundingClientRect()
    if (cRect.width === 0 || cRect.height === 0) return

    const coreRect = core.getBoundingClientRect()
    setSize({ w: cRect.width, h: cRect.height })

    const coreLeft = anchor(coreRect, cRect, 'left')
    const coreRight = anchor(coreRect, cRect, 'right')

    const leftPaths = (inputRefs.current ?? [])
      .filter((el): el is HTMLDivElement => el !== null)
      .map((el) => curve(coreLeft, anchor(el.getBoundingClientRect(), cRect, 'right')))

    const rightPaths = (outputRefs.current ?? [])
      .filter((el): el is HTMLDivElement => el !== null)
      .map((el) => curve(coreRight, anchor(el.getBoundingClientRect(), cRect, 'left')))

    setPaths([...leftPaths, ...rightPaths])
  }, [containerRef, coreRef, inputRefs, outputRefs])

  useEffect(() => {
    update()

    const ro = new ResizeObserver(update)
    if (containerRef.current) ro.observe(containerRef.current)

    window.addEventListener('resize', update)

    const t1 = window.setTimeout(update, 150)
    const t2 = window.setTimeout(update, 700)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [update, containerRef])

  if (size.w === 0 || paths.length === 0) return null

  return (
    <svg
      viewBox={`0 0 ${size.w} ${size.h}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden size-full lg:block"
    >
      <defs>
        <linearGradient id="g-violet" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--neon-violet)" stopOpacity="0.05" />
          <stop offset="50%" stopColor="var(--neon-violet)" stopOpacity="0.75" />
          <stop offset="100%" stopColor="var(--neon-blue)" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="g-blue" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--neon-blue)" stopOpacity="0.05" />
          <stop offset="50%" stopColor="var(--neon-blue)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--neon-violet)" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="g-pink" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--neon-pink)" stopOpacity="0.05" />
          <stop offset="50%" stopColor="var(--neon-pink)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--neon-violet)" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {paths.map((d, i) => (
        <g key={`${d}-${i}`}>
          <path
            d={d}
            fill="none"
            stroke={STROKES[i % 3]}
            strokeWidth={1.25}
            vectorEffect="non-scaling-stroke"
          />
          <path
            className="animate-if-flow-dash [stroke-dasharray:5_9]"
            d={d}
            fill="none"
            stroke={STROKES[i % 3]}
            strokeWidth={2}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{ animationDelay: `${(i % 6) * -1.1}s` }}
          />
          <circle r={2.6} fill="var(--neon-pink)" opacity={0.9}>
            <animateMotion dur={`${5 + (i % 4)}s`} repeatCount="indefinite" path={d} />
          </circle>
        </g>
      ))}
    </svg>
  )
}
