const LEFT_Y = [150, 290, 430, 570]
const RIGHT_Y = [60, 145, 230, 315, 400, 485, 570, 655]
const STROKES = ['url(#g-violet)', 'url(#g-blue)', 'url(#g-pink)']

export function FlowConnections() {
  const leftPaths = LEFT_Y.map((y) => `M300,${y} C420,${y} 430,360 498,360`)
  const rightPaths = RIGHT_Y.map((y) => `M502,360 C580,360 590,${y} 700,${y}`)
  const all = [...leftPaths, ...rightPaths]

  return (
    <svg
      viewBox="0 0 1000 720"
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

      {all.map((d, i) => (
        <g key={d}>
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
