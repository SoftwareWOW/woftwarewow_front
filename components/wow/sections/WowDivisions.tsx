'use client'

import { motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'

interface Division {
  id: string
  name: string
  icon: string
  description: string
  color: string
}

const divisions: Division[] = [
  {
    id: 'hub',
    name: 'WOW Hub',
    icon: '🔗',
    description: 'Centralized resources for maximum impact.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'websites',
    name: 'WOW Websites',
    icon: '💻',
    description: 'High-performance websites that wow.',
    color: 'from-cyan-400 to-blue-400',
  },
  {
    id: 'host',
    name: 'WOW Host',
    icon: '🏢',
    description: 'Reliable infrastructure that scales.',
    color: 'from-blue-400 to-purple-500',
  },
  {
    id: 'marketing',
    name: 'WOW Marketing',
    icon: '📣',
    description: 'Strategic campaigns that deliver results.',
    color: 'from-pink-500 to-red-500',
  },
  {
    id: 'social',
    name: 'WOW Social',
    icon: '🌐',
    description: 'Meaningful engagement that builds communities.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 'accelerate',
    name: 'WOW Accelerate',
    icon: '🚀',
    description: 'Growth programs that drive your future.',
    color: 'from-pink-500 to-purple-500',
  },
  {
    id: 'impact',
    name: 'WOW Impact',
    icon: '💡',
    description: 'Purpose-driven initiatives creating real change.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 'events',
    name: 'WOW Events',
    icon: '🎉',
    description: 'Experiences that connect and convert.',
    color: 'from-orange-400 to-pink-500',
  },
  {
    id: 'design',
    name: 'WOW Design',
    icon: '🎨',
    description: 'Creative excellence that inspires.',
    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 'intelligence',
    name: 'WOW Intelligence',
    icon: '🧠',
    description: 'Data-driven insights that fuel growth.',
    color: 'from-purple-500 to-pink-500',
  },
]

const seededRandom = (seed: number) => {
  const value = Math.sin(seed * 9999) * 10000
  return value - Math.floor(value)
}

const AnimatedParticle = ({ delay, offset }: { delay: number; offset: number }) => (
  <motion.circle
    r="2.5"
    fill="url(#gradientGlow)"
    initial={{ offsetDistance: `${offset}%` }}
    animate={{ offsetDistance: `${offset + 100}%` }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
      delay,
    }}
    filter="url(#particleGlow)"
    opacity={0.9}
  />
)

const OrbitalSVG = ({ activeId }: { activeId: string | null }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 })

  useEffect(() => {
    if (!svgRef.current) return

    const updateDimensions = () => {
      const container = svgRef.current?.parentElement
      if (container) {
        setDimensions({
          width: container.offsetWidth,
          height: container.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const centerX = dimensions.width / 2
  const centerY = dimensions.height / 2

  const orbits = [
    { radiusX: dimensions.width * 0.42, radiusY: dimensions.height * 0.36, opacity: 0.15 },
    { radiusX: dimensions.width * 0.38, radiusY: dimensions.height * 0.32, opacity: 0.25 },
    { radiusX: dimensions.width * 0.34, radiusY: dimensions.height * 0.28, opacity: 0.35 },
  ]

  const mainRadiusX = dimensions.width * 0.38
  const mainRadiusY = dimensions.height * 0.32

  const divisionPaths = divisions.map((div, index) => {
    const angle = (index / divisions.length) * Math.PI * 2
    const x = centerX + mainRadiusX * Math.cos(angle)
    const y = centerY + mainRadiusY * Math.sin(angle)

    return {
      id: div.id,
      path: `M ${centerX} ${centerY} L ${x} ${y}`,
      x,
      y,
    }
  })

  const ellipsePath = `M ${centerX - mainRadiusX} ${centerY} A ${mainRadiusX} ${mainRadiusY} 0 1 0 ${centerX + mainRadiusX} ${centerY} A ${mainRadiusX} ${mainRadiusY} 0 1 0 ${centerX - mainRadiusX} ${centerY}`

  const stars = useMemo(
    () =>
      [...Array(30)].map((_, i) => {
        const angle = seededRandom(i) * Math.PI * 2
        const distance = seededRandom(i + 100) * Math.min(dimensions.width, dimensions.height) * 0.5
        return {
          x: centerX + distance * Math.cos(angle),
          y: centerY + distance * Math.sin(angle),
          r: seededRandom(i + 200) * 1.5,
          opacity: seededRandom(i + 300) * 0.6 + 0.2,
          duration: seededRandom(i + 400) * 3 + 2,
        }
      }),
    [centerX, centerY, dimensions.width, dimensions.height],
  )

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 h-full w-full"
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true">
      <defs>
        <linearGradient id="gradientGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C6CF2" stopOpacity="1" />
          <stop offset="50%" stopColor="#A78BFA" stopOpacity="1" />
          <stop offset="100%" stopColor="#D78DA7" stopOpacity="1" />
        </linearGradient>

        <filter id="particleGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="pathGlow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="strongGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {orbits.map((orbit, idx) => (
        <g key={`orbit-bg-${idx}`}>
          <ellipse
            cx={centerX}
            cy={centerY}
            rx={orbit.radiusX}
            ry={orbit.radiusY}
            fill="none"
            stroke={`rgba(124, 108, 242, ${orbit.opacity * 0.3})`}
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="5,5"
          />
        </g>
      ))}

      <g>
        <ellipse
          cx={centerX}
          cy={centerY}
          rx={mainRadiusX}
          ry={mainRadiusY}
          fill="none"
          stroke="rgba(124, 108, 242, 0.1)"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
          filter="url(#pathGlow)"
        />

        <motion.ellipse
          cx={centerX}
          cy={centerY}
          rx={mainRadiusX}
          ry={mainRadiusY}
          fill="none"
          stroke="url(#gradientGlow)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -500 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          strokeDasharray="50,30"
          filter="url(#pathGlow)"
          opacity={0.8}
        />

        <motion.ellipse
          cx={centerX}
          cy={centerY}
          rx={mainRadiusX}
          ry={mainRadiusY}
          fill="none"
          stroke="url(#gradientGlow)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: 500 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          strokeDasharray="40,40"
          filter="url(#pathGlow)"
          opacity={0.5}
        />
      </g>

      {divisionPaths.map((pathData) => {
        const isActive = activeId === pathData.id
        return (
          <g key={`connection-${pathData.id}`}>
            <motion.line
              x1={centerX}
              y1={centerY}
              x2={pathData.x}
              y2={pathData.y}
              stroke="rgba(124, 108, 242, 0.2)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              animate={{
                opacity: isActive ? 0.4 : 0.1,
              }}
              transition={{ duration: 0.3 }}
            />

            <motion.line
              x1={centerX}
              y1={centerY}
              x2={pathData.x}
              y2={pathData.y}
              stroke="url(#gradientGlow)"
              strokeWidth={isActive ? 2.5 : 1.5}
              vectorEffect="non-scaling-stroke"
              filter={isActive ? 'url(#strongGlow)' : 'url(#pathGlow)'}
              animate={{
                opacity: isActive ? 1 : 0.4,
              }}
              transition={{ duration: 0.3 }}
            />

            {isActive && (
              <motion.circle
                cx={centerX}
                cy={centerY}
                r="4"
                fill="url(#gradientGlow)"
                filter="url(#strongGlow)"
                animate={{ r: [4, 8, 4] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
            )}
          </g>
        )
      })}

      {[0, 0.25, 0.5, 0.75].map((offset, idx) => (
        <g key={`particle-${idx}`} style={{ offsetPath: `path('${ellipsePath}')` } as CSSProperties}>
          <AnimatedParticle delay={idx * 0.3} offset={offset * 100} />
        </g>
      ))}

      {stars.map((star, i) => (
        <motion.circle
          key={`star-${i}`}
          cx={star.x}
          cy={star.y}
          r={star.r}
          fill="rgba(255, 255, 255, 0.8)"
          initial={{ opacity: star.opacity }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </svg>
  )
}

const DivisionCard = ({
  division,
  index,
  isActive,
  onHover,
  position,
}: {
  division: Division
  index: number
  isActive: boolean
  onHover: (id: string | null) => void
  position: { top: string; left: string }
}) => (
  <motion.div
    className="absolute z-10 hidden md:block"
    style={{ ...position, transform: 'translate(-50%, -50%)' }}
    onHoverStart={() => onHover(division.id)}
    onHoverEnd={() => onHover(null)}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      delay: index * 0.06,
      duration: 0.5,
      type: 'spring',
      stiffness: 200,
    }}>
    <motion.div
      className="relative w-60 overflow-hidden rounded-2xl"
      whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
      animate={{
        y: isActive ? 0 : [0, -6, 0],
      }}
      transition={
        isActive
          ? { duration: 0.3 }
          : {
              duration: 3 + index * 0.15,
              repeat: Infinity,
              ease: 'easeInOut',
            }
      }>
      <div
        className="relative border p-6 backdrop-blur-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.7), rgba(50, 30, 60, 0.7))',
          borderColor: isActive ? 'rgba(147, 112, 219, 0.8)' : 'rgba(124, 108, 242, 0.4)',
          boxShadow: isActive
            ? '0 0 40px rgba(168, 85, 247, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.15)'
            : '0 0 20px rgba(124, 108, 242, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.05)',
        }}>
        <motion.div
          className="mb-4 block text-5xl"
          animate={{
            scale: isActive ? 1.15 : 1,
            rotateY: isActive ? 360 : 0,
          }}
          transition={{ duration: 0.5 }}>
          {division.icon}
        </motion.div>

        <h3 className="mb-2 text-lg font-bold">
          <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            {division.name}
          </span>
        </h3>

        <motion.p
          className="overflow-hidden text-xs leading-relaxed text-gray-300"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isActive ? 1 : 0,
            height: isActive ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}>
          {division.description}
        </motion.p>

        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${isActive ? 'rgba(168, 85, 247, 0.2)' : 'rgba(124, 108, 242, 0.05)'}, ${isActive ? 'rgba(236, 72, 153, 0.2)' : 'rgba(215, 141, 167, 0.05)'})`,
            filter: isActive ? 'blur(8px)' : 'blur(4px)',
          }}
          animate={{
            opacity: isActive ? 1 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        />

        {isActive && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background: 'radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.3), transparent 60%)',
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        )}
      </div>
    </motion.div>
  </motion.div>
)

export default function WowDivisions() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    const updateSize = () => {
      setContainerSize({
        width: containerRef.current?.offsetWidth || 0,
        height: containerRef.current?.offsetHeight || 0,
      })
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const centerX = containerSize.width / 2
  const centerY = containerSize.height / 2
  const radiusX = containerSize.width * 0.38
  const radiusY = containerSize.height * 0.32

  const angleMap: Record<number, number> = {
    0: -90,
    1: -75,
    2: -30,
    3: 10,
    4: 50,
    5: 85,
    6: 115,
    7: 155,
    8: -155,
    9: -115,
  }

  const getDivisionPosition = (index: number) => {
    const angle = angleMap[index] !== undefined ? angleMap[index] : (index / divisions.length) * 360

    const radians = (angle * Math.PI) / 180
    const x = centerX + radiusX * Math.cos(radians)
    const y = centerY + radiusY * Math.sin(radians)

    return {
      top: `${(y / containerSize.height) * 100}%`,
      left: `${(x / containerSize.width) * 100}%`,
    }
  }

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      aria-labelledby="wow-divisions-heading">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute h-[800px] w-[800px] rounded-full bg-purple-600 mix-blend-screen blur-3xl filter"
          style={{
            top: '20%',
            left: '-10%',
          }}
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute h-[600px] w-[600px] rounded-full bg-pink-600 mix-blend-screen blur-3xl filter"
          style={{
            bottom: '-10%',
            right: '-5%',
          }}
          animate={{
            opacity: [0.03, 0.07, 0.03],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124, 108, 242, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 108, 242, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />

      <div
        ref={containerRef}
        className="relative flex h-screen w-full flex-col items-center justify-center px-4 sm:px-6 md:px-0">
        <OrbitalSVG activeId={activeId} />

        <motion.div
          className="absolute z-30 text-center"
          style={{
            width: 'clamp(280px, 45vw, 500px)',
          }}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.9,
            type: 'spring',
            stiffness: 100,
          }}>
          <motion.div
            className="relative rounded-3xl border border-purple-500/30 p-8 backdrop-blur-2xl sm:p-12 md:p-16"
            style={{
              background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.3), rgba(126, 34, 206, 0.2))',
              boxShadow: `
                0 0 60px rgba(124, 108, 242, 0.3),
                0 0 120px rgba(168, 85, 247, 0.15),
                inset 0 1px 1px rgba(255, 255, 255, 0.2)
              `,
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}>
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.2), transparent 70%)',
              }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent 50%)',
              }}
            />

            <div className="relative z-10">
              <motion.h2
                id="wow-divisions-heading"
                className="mb-2 text-5xl font-black leading-tight sm:text-6xl md:text-7xl"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(168, 85, 247, 0.3)',
                    '0 0 40px rgba(168, 85, 247, 0.6)',
                    '0 0 20px rgba(168, 85, 247, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}>
                <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 bg-clip-text text-transparent">
                  WOW
                </span>
              </motion.h2>

              <motion.h3
                className="mb-4 text-4xl font-black text-white sm:text-5xl md:text-6xl"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}>
                Superagency
              </motion.h3>

              <motion.p
                className="mb-6 text-base font-bold tracking-widest text-purple-300 sm:text-lg"
                animate={{ letterSpacing: ['0.15em', '0.2em', '0.15em'] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}>
                UNIFIED ECOSYSTEM
              </motion.p>

              <motion.p
                className="mx-auto max-w-xs text-sm leading-relaxed text-gray-300 sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}>
                One Agency. Unlimited Possibilities.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              border: '1px solid rgba(168, 85, 247, 0.2)',
              transform: 'scale(1.1)',
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1.1, 1.15, 1.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              border: '1px solid rgba(124, 108, 242, 0.15)',
              transform: 'scale(1.2)',
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1.2, 1.28, 1.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {divisions.map((division, index) => (
          <DivisionCard
            key={division.id}
            division={division}
            index={index}
            isActive={activeId === division.id}
            onHover={setActiveId}
            position={getDivisionPosition(index)}
          />
        ))}
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 px-4 py-8 text-center sm:py-12 md:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}>
        <h4 className="mb-3 text-xl font-bold sm:text-2xl">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            All Divisions. One Mission.
          </span>
        </h4>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
          The WOW Superagency Ecosystem powers brands, businesses, and communities through innovation, creativity &amp;
          technology.
        </p>
      </motion.div>
    </section>
  )
}
