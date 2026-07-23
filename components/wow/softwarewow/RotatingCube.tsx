'use client'

import { motion } from 'framer-motion'
import { WOW_GRADIENT } from '@/components/wow/shared/WowText'

type RotatingCubeProps = {
  size?: number
}

function CubeFaceBrand({ size }: { size: number }) {
  const fontSize = Math.max(7, Math.min(size * 0.112, (size * 0.9) / 6.5))

  return (
    <p
      className="flex items-baseline justify-center whitespace-nowrap font-outfit font-bold leading-none tracking-[-0.04em]"
      style={{ fontSize }}
    >
      <span className="text-secondary dark:text-backgroundBody">Software</span>
      <span
        className="font-extrabold"
        style={{
          background: WOW_GRADIENT,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
        }}
      >
        WOW!
      </span>
    </p>
  )
}

export default function RotatingCube({ size = 148 }: RotatingCubeProps) {
  const half = size / 2

  const faceStyle = (transform: string) => ({
    width: size,
    height: size,
    transform,
  })

  const faces = [
    `translateZ(${half}px)`,
    `rotateY(180deg) translateZ(${half}px)`,
    `rotateY(90deg) translateZ(${half}px)`,
    `rotateY(-90deg) translateZ(${half}px)`,
    `rotateX(90deg) translateZ(${half}px)`,
    `rotateX(-90deg) translateZ(${half}px)`,
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center"
      style={{ ['--sw-cube-size' as string]: `${size}px` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 rounded-full blur-3xl wow-pulse"
        style={{
          width: size * 1.65,
          height: size * 1.65,
          background:
            'radial-gradient(circle, color-mix(in oklab, var(--wow-1) 55%, transparent) 0%, transparent 70%)',
        }}
      />

      <div className="sw-cube-scene" style={{ width: size, height: size }} aria-hidden>
        <div className="sw-cube-shadow" />
        <div className="sw-cube sw-cube-y-spin">
          {faces.map((transform) => (
            <div key={transform} className="sw-cube-face" style={faceStyle(transform)}>
              <CubeFaceBrand size={size} />
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden
        className="relative mt-4 flex items-center justify-center sm:mt-6"
        style={{ perspective: '800px' }}
      >
        <div
          className="rounded-full"
          style={{
            width: size * 1.3,
            height: Math.max(16, size * 0.14),
            transform: 'rotateX(62deg)',
            background:
              'radial-gradient(ellipse at center, color-mix(in oklab, var(--wow-1) 45%, transparent) 0%, transparent 70%)',
            filter: 'blur(6px)',
          }}
        />
        <div
          className="absolute rounded-full border backdrop-blur-md"
          style={{
            width: size * 1.05,
            height: Math.max(10, size * 0.07),
            transform: 'rotateX(62deg) translateY(-6px)',
            background:
              'linear-gradient(180deg, color-mix(in oklab, #ededed 20%, transparent), color-mix(in oklab, var(--wow-1) 15%, transparent))',
            borderColor: 'color-mix(in oklab, var(--wow-1) 30%, transparent)',
            boxShadow:
              '0 10px 30px -5px color-mix(in oklab, var(--wow-1) 40%, transparent), inset 0 1px 0 color-mix(in oklab, #ededed 40%, transparent)',
          }}
        />
      </div>
    </motion.div>
  )
}
