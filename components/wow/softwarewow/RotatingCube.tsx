'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type RotatingCubeProps = {
  size?: number
}

export default function RotatingCube({ size = 148 }: RotatingCubeProps) {
  const half = size / 2

  const faceStyle = (transform: string) => ({
    width: size,
    height: size,
    transform,
  })

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

      <div
        className="sw-cube-scene"
        style={{ width: size, height: size }}
        aria-hidden
      >
        <div className="sw-cube-shadow" />
        <div className="sw-cube sw-cube-y-spin">
          <div className="sw-cube-face" style={faceStyle(`translateZ(${half}px)`)}>
            <Image
              src="/images/wow/nav/SVG/SoftwareWOW Standard.svg"
              alt=""
              width={120}
              height={120}
              className="h-[72%] w-[72%] object-contain"
            />
          </div>
          <div className="sw-cube-face" style={faceStyle(`rotateY(180deg) translateZ(${half}px)`)} />
          <div
            className="sw-cube-face flex-col gap-0.5 px-2 text-center sm:px-3"
            style={faceStyle(`rotateY(90deg) translateZ(${half}px)`)}
          >
            <span
              className="font-extrabold tracking-tight text-secondary dark:text-backgroundBody"
              style={{ fontSize: Math.max(12, size * 0.11) }}
            >
              WOW
            </span>
            <span
              className="font-semibold uppercase tracking-[0.16em] text-colorText dark:text-dark-100"
              style={{ fontSize: Math.max(7, size * 0.05) }}
            >
              Superagency
            </span>
          </div>
          <div className="sw-cube-face" style={faceStyle(`rotateY(-90deg) translateZ(${half}px)`)} />
          <div className="sw-cube-face" style={faceStyle(`rotateX(90deg) translateZ(${half}px)`)} />
          <div className="sw-cube-face" style={faceStyle(`rotateX(-90deg) translateZ(${half}px)`)} />
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
