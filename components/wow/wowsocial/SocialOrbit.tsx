import type { ComponentType } from 'react'
import { Heart, Sparkles, ThumbsUp, TrendingUp } from 'lucide-react'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from './social-icons'

type Node = {
  name: string
  tagline: string
  Icon: ComponentType<{ className?: string }>
  x: number
  y: number
  delay: string
  align: 'left' | 'right'
}

const NODES: Node[] = [
  {
    name: 'Instagram',
    tagline: 'Grow Your Community',
    Icon: InstagramIcon,
    x: 24,
    y: 16,
    delay: '0s',
    align: 'left',
  },
  {
    name: 'TikTok',
    tagline: 'Viral Short Videos',
    Icon: TikTokIcon,
    x: 76,
    y: 12,
    delay: '0.8s',
    align: 'right',
  },
  {
    name: 'Facebook',
    tagline: 'Engage More Fans',
    Icon: FacebookIcon,
    x: 24,
    y: 50,
    delay: '1.6s',
    align: 'left',
  },
  {
    name: 'LinkedIn',
    tagline: 'Build Authority',
    Icon: LinkedInIcon,
    x: 76,
    y: 48,
    delay: '2.4s',
    align: 'right',
  },
  {
    name: 'YouTube',
    tagline: 'Long Form Impact',
    Icon: YouTubeIcon,
    x: 25,
    y: 85,
    delay: '3.2s',
    align: 'left',
  },
  {
    name: 'X (Twitter)',
    tagline: 'Real-time Engagement',
    Icon: XIcon,
    x: 75,
    y: 88,
    delay: '4s',
    align: 'right',
  },
]

const SPARKS = [
  { id: 'heart-l', Icon: Heart, tone: 'text-pink-500', x: 8, y: 33, delay: '0.4s' },
  { id: 'heart-r', Icon: Sparkles, tone: 'text-brand', x: 92, y: 30, delay: '1.2s' },
  { id: 'trend', Icon: TrendingUp, tone: 'text-emerald-500', x: 50, y: 2, delay: '2s' },
  { id: 'like', Icon: ThumbsUp, tone: 'text-blue-500', x: 91, y: 72, delay: '2.8s' },
]

export function SocialOrbit() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[560px] sm:aspect-[7/5] sm:max-w-[880px]">
      <div
        className="wow-halo pointer-events-none absolute inset-0"
        style={{ background: 'var(--gradient-halo)' }}
      />

      <svg
        className="pointer-events-none absolute inset-0 size-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="wow-link" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--brand-glow)" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        {NODES.map((n) => (
          <g key={`link-${n.name}`}>
            <line
              x1={n.x}
              y1={n.y}
              x2={50}
              y2={50}
              stroke="url(#wow-link)"
              strokeWidth="0.35"
              strokeDasharray="1.6 1.6"
              strokeLinecap="round"
              className="wow-dash"
              style={{ animationDelay: n.delay }}
              vectorEffect="non-scaling-stroke"
            />
            <circle r="0.8" fill="var(--brand-glow)" vectorEffect="non-scaling-stroke">
              <animateMotion
                dur="3.6s"
                repeatCount="indefinite"
                begin={n.delay}
                path={`M ${n.x} ${n.y} L 50 50`}
              />
            </circle>
          </g>
        ))}
      </svg>

      <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 sm:w-[46%]">
        <div className="wow-orbit absolute inset-0 rounded-full border border-dashed border-brand/25">
          <span className="absolute -top-[5px] left-1/2 size-2.5 -translate-x-1/2 rounded-full bg-brand" />
          <span className="absolute -bottom-[5px] left-1/2 size-2 -translate-x-1/2 rounded-full bg-brand-glow" />
        </div>
        <div className="wow-orbit-slow absolute -inset-[14%] rounded-full border border-brand/15">
          <span className="absolute left-0 top-1/2 size-2 -translate-y-1/2 rounded-full bg-brand-glow/80" />
          <span className="absolute right-0 top-1/2 size-2 -translate-y-1/2 rounded-full bg-brand/70" />
        </div>
      </div>

      <div
        className="absolute left-1/2 top-1/2 flex aspect-square w-[44%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-card text-center sm:w-[30%]"
        style={{ boxShadow: 'var(--shadow-core)' }}
      >
        <span
          className="bg-clip-text text-[clamp(2.2rem,7vw,4.5rem)] font-black leading-none text-transparent"
          style={{ backgroundImage: 'var(--gradient-brand)' }}
        >
          W
        </span>
        <p className="mt-2 text-[clamp(0.75rem,2.4vw,1.15rem)] font-extrabold tracking-[0.18em] text-[var(--brand-ink)]">
          WOW
        </p>
        <p className="text-[clamp(0.6rem,2vw,0.95rem)] font-semibold tracking-[0.32em] text-muted-foreground">
          SOCIAL
        </p>
      </div>

      {NODES.map((n) => (
        <div
          key={n.name}
          className="wow-float absolute w-[42%] -translate-x-1/2 -translate-y-1/2 sm:w-[27%]"
          style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: n.delay }}
        >
          <div
            className="flex items-center gap-2.5 rounded-2xl border border-border/60 bg-card/90 px-3 py-2.5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 sm:gap-3 sm:rounded-3xl sm:px-4 sm:py-3"
            style={{ boxShadow: 'var(--shadow-float)' }}
          >
            <n.Icon className="size-7 shrink-0 sm:size-9" />
            <div className="min-w-0">
              <p className="truncate text-[clamp(0.7rem,1.7vw,0.95rem)] font-bold text-[var(--brand-ink)]">
                {n.name}
              </p>
              <p className="truncate text-[clamp(0.6rem,1.4vw,0.8rem)] text-muted-foreground">
                {n.tagline}
              </p>
            </div>
          </div>
        </div>
      ))}

      {SPARKS.map((s) => (
        <div
          key={s.id}
          className="wow-float absolute grid size-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl bg-card sm:size-10 sm:rounded-2xl"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            animationDelay: s.delay,
            boxShadow: 'var(--shadow-float)',
          }}
          aria-hidden="true"
        >
          <s.Icon className={`size-4 sm:size-5 ${s.tone}`} strokeWidth={2.5} />
        </div>
      ))}
    </div>
  )
}
