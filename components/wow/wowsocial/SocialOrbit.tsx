import type { ComponentType } from 'react'
import { Heart, Sparkles, ThumbsUp, TrendingUp } from 'lucide-react'
import WowText from '@/components/wow/shared/WowText'
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
}

const DESKTOP_NODES: Node[] = [
  { name: 'Instagram', tagline: 'Grow Your Community', Icon: InstagramIcon, x: 24, y: 12, delay: '0s' },
  { name: 'TikTok', tagline: 'Viral Short Videos', Icon: TikTokIcon, x: 76, y: 12, delay: '0.8s' },
  { name: 'Facebook', tagline: 'Engage More Fans', Icon: FacebookIcon, x: 24, y: 38, delay: '1.6s' },
  { name: 'LinkedIn', tagline: 'Build Authority', Icon: LinkedInIcon, x: 76, y: 38, delay: '2.4s' },
  { name: 'YouTube', tagline: 'Long Form Impact', Icon: YouTubeIcon, x: 24, y: 86, delay: '3.2s' },
  { name: 'X (Twitter)', tagline: 'Real-time Engagement', Icon: XIcon, x: 76, y: 86, delay: '4s' },
]

const MOBILE_NODES: Node[] = [
  { name: 'Instagram', tagline: 'Grow Your Community', Icon: InstagramIcon, x: 28, y: 14, delay: '0s' },
  { name: 'TikTok', tagline: 'Viral Short Videos', Icon: TikTokIcon, x: 72, y: 14, delay: '0.8s' },
  { name: 'Facebook', tagline: 'Engage More Fans', Icon: FacebookIcon, x: 28, y: 42, delay: '1.6s' },
  { name: 'LinkedIn', tagline: 'Build Authority', Icon: LinkedInIcon, x: 72, y: 42, delay: '2.4s' },
  { name: 'YouTube', tagline: 'Long Form Impact', Icon: YouTubeIcon, x: 28, y: 84, delay: '3.2s' },
  { name: 'X (Twitter)', tagline: 'Real-time Engagement', Icon: XIcon, x: 72, y: 84, delay: '4s' },
]

type Spark = {
  id: string
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>
  tone: string
  x: number
  y: number
  delay: string
}

const DESKTOP_SPARKS: Spark[] = [
  { id: 'heart-l', Icon: Heart, tone: 'text-pink-500', x: 8, y: 22, delay: '0.4s' },
  { id: 'heart-r', Icon: Sparkles, tone: 'text-primary', x: 92, y: 22, delay: '1.2s' },
  { id: 'trend', Icon: TrendingUp, tone: 'text-emerald-500', x: 50, y: 1, delay: '2s' },
  { id: 'like', Icon: ThumbsUp, tone: 'text-blue-500', x: 92, y: 74, delay: '2.8s' },
]

const MOBILE_SPARKS: Spark[] = [
  { id: 'heart-l', Icon: Heart, tone: 'text-pink-500', x: 10, y: 26, delay: '0.4s' },
  { id: 'heart-r', Icon: Sparkles, tone: 'text-primary', x: 90, y: 26, delay: '1.2s' },
  { id: 'trend', Icon: TrendingUp, tone: 'text-emerald-500', x: 50, y: 4, delay: '2s' },
  { id: 'like', Icon: ThumbsUp, tone: 'text-blue-500', x: 90, y: 72, delay: '2.8s' },
]

const NODE_SURFACE =
  'border border-border bg-backgroundBody dark:border-white/10 dark:bg-dark-200'

function OrbitLinks({ nodes, id }: { nodes: Node[]; id: string }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[1] size-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#615CCE" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#9671ac" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {nodes.map((n) => (
        <g key={`link-${n.name}`}>
          <line
            x1={n.x}
            y1={n.y}
            x2={50}
            y2={50}
            stroke={`url(#${id})`}
            strokeWidth="0.35"
            strokeDasharray="1.6 1.6"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <circle r="0.8" fill="#9671ac" vectorEffect="non-scaling-stroke">
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
  )
}

function OrbitNodes({
  nodes,
  compact,
}: {
  nodes: Node[]
  compact?: boolean
}) {
  return (
    <>
      {nodes.map((n) => (
        <div
          key={n.name}
          className={`animate-social-float absolute z-10 -translate-x-1/2 -translate-y-1/2 ${compact ? 'w-[32%]' : 'w-[26%]'}`}
          style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: n.delay }}
        >
          <div
            className={`flex items-center rounded-radius-sm transition-transform duration-300 hover:-translate-y-0.5 ${NODE_SURFACE} ${
              compact ? 'gap-1.5 px-2 py-1.5' : 'gap-2.5 px-3 py-2.5'
            }`}
          >
            <n.Icon className={compact ? 'size-5 shrink-0' : 'size-8 shrink-0'} />
            <div className="min-w-0">
              <p
                className={`truncate font-bold text-foreground dark:text-backgroundBody ${
                  compact ? 'text-[0.65rem]' : 'text-[clamp(0.65rem,1.6vw,0.9rem)]'
                }`}
              >
                {n.name}
              </p>
              <p
                className={`truncate text-muted-foreground dark:text-dark-100 ${
                  compact ? 'text-[0.58rem]' : 'text-[clamp(0.58rem,1.3vw,0.78rem)]'
                }`}
              >
                {n.tagline}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

function OrbitSparks({ sparks, compact }: { sparks: Spark[]; compact?: boolean }) {
  return (
    <>
      {sparks.map((s) => (
        <div
          key={s.id}
          className={`animate-social-float absolute z-[3] grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-radius-sm ${NODE_SURFACE} ${
            compact ? 'size-6' : 'size-9'
          }`}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            animationDelay: s.delay,
          }}
          aria-hidden="true"
        >
          <s.Icon className={`${compact ? 'size-3' : 'size-4'} ${s.tone}`} strokeWidth={2.5} />
        </div>
      ))}
    </>
  )
}

export function SocialOrbit() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full min-w-0 max-w-[560px] overflow-hidden sm:aspect-[7/5] sm:max-w-[880px] sm:overflow-visible">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(97,92,206,0.12)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(97,92,206,0.2)_0%,transparent_70%)]"
      />

      <div className="absolute inset-0 sm:hidden">
        <OrbitLinks nodes={MOBILE_NODES} id="wow-social-link-mobile" />
      </div>
      <div className="absolute inset-0 hidden sm:block">
        <OrbitLinks nodes={DESKTOP_NODES} id="wow-social-link-desktop" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[2] aspect-square w-[36%] -translate-x-1/2 -translate-y-1/2 sm:w-[34%]">
        <div className="absolute inset-0 animate-social-orbit rounded-full border border-dashed border-primary/25 dark:border-primary/35">
          <span className="absolute -top-[5px] left-1/2 size-2.5 -translate-x-1/2 rounded-full bg-primary" />
          <span className="absolute -bottom-[5px] left-1/2 size-2 -translate-x-1/2 rounded-full bg-primary/60" />
        </div>
        <div className="absolute -inset-[5%] animate-social-orbit-slow rounded-full border border-primary/15 dark:border-primary/25 sm:-inset-[8%]">
          <span className="absolute left-0 top-1/2 size-2 -translate-y-1/2 rounded-full bg-primary/50" />
          <span className="absolute right-0 top-1/2 size-2 -translate-y-1/2 rounded-full bg-primary/70" />
        </div>
      </div>

      <div
        className={`absolute left-1/2 top-1/2 z-20 flex aspect-square w-[26%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full px-2 text-center sm:w-[24%] sm:px-3 ${NODE_SURFACE}`}
      >
        <h3 className="flex items-baseline justify-center gap-1 whitespace-nowrap text-[clamp(0.75rem,2.4vw,1.15rem)] font-semibold leading-none tracking-tight">
          <WowText className="text-[clamp(0.75rem,2.4vw,1.15rem)]">WOW</WowText>
          <span className="text-foreground dark:text-backgroundBody">Social</span>
        </h3>
      </div>

      <div className="absolute inset-0 sm:hidden">
        <OrbitNodes nodes={MOBILE_NODES} compact />
        <OrbitSparks sparks={MOBILE_SPARKS} compact />
      </div>
      <div className="absolute inset-0 hidden sm:block">
        <OrbitNodes nodes={DESKTOP_NODES} />
        <OrbitSparks sparks={DESKTOP_SPARKS} />
      </div>
    </div>
  )
}
