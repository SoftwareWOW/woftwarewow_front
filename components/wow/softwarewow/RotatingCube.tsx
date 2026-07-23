'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const CUBE_SIZE = 168
const HALF = CUBE_SIZE / 2

const faceStyle = (transform: string) => ({
  width: CUBE_SIZE,
  height: CUBE_SIZE,
  transform,
})

export default function RotatingCube() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl wow-pulse"
        style={{
          background:
            'radial-gradient(circle, color-mix(in oklab, var(--wow-1) 55%, transparent) 0%, transparent 70%)',
        }}
      />

      <div
        className="sw-cube-scene"
        style={{ width: CUBE_SIZE, height: CUBE_SIZE }}
        aria-hidden
      >
        <div className="sw-cube-shadow" />
        <div className="sw-cube">
          <div className="sw-cube-face" style={faceStyle(`translateZ(${HALF}px)`)}>
            <Image
              src="/images/wow/nav/SVG/SoftwareWOW Standard.svg"
              alt=""
              width={120}
              height={120}
              className="h-[72%] w-[72%] object-contain"
            />
          </div>
          <div
            className="sw-cube-face"
            style={faceStyle(`rotateY(180deg) translateZ(${HALF}px)`)}
          />
          <div
            className="sw-cube-face flex-col gap-0.5 px-3 text-center"
            style={faceStyle(`rotateY(90deg) translateZ(${HALF}px)`)}
          >
            <span className="text-lg font-extrabold tracking-tight text-secondary dark:text-backgroundBody">
              WOW
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-colorText dark:text-dark-100">
              Superagency
            </span>
          </div>
          <div className="sw-cube-face" style={faceStyle(`rotateY(-90deg) translateZ(${HALF}px)`)} />
          <div className="sw-cube-face" style={faceStyle(`rotateX(90deg) translateZ(${HALF}px)`)} />
          <div className="sw-cube-face" style={faceStyle(`rotateX(-90deg) translateZ(${HALF}px)`)} />
        </div>
      </div>

      <div
        aria-hidden
        className="relative mt-6 flex items-center justify-center"
        style={{ perspective: '800px' }}
      >
        <div
          className="h-6 w-[220px] rounded-full"
          style={{
            transform: 'rotateX(62deg)',
            background:
              'radial-gradient(ellipse at center, color-mix(in oklab, var(--wow-1) 45%, transparent) 0%, transparent 70%)',
            filter: 'blur(6px)',
          }}
        />
        <div
          className="absolute h-3 w-[180px] rounded-full border backdrop-blur-md"
          style={{
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
