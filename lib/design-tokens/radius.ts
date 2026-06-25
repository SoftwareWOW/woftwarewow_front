/**
 * Centralized border-radius design tokens.
 * CSS variables are defined in scss/_tailwind.scss and wired in tailwind.config.ts.
 */
export const RADIUS = {
  sm: '10px',
  md: '20px',
  lg: '50px',
} as const

export type RadiusToken = keyof typeof RADIUS

/** Tailwind utility class names for border-radius tokens */
export const RADIUS_CLASS = {
  sm: 'rounded-radius-sm',
  md: 'rounded-radius-md',
  lg: 'rounded-radius-lg',
} as const

/** CSS custom property names */
export const RADIUS_VAR = {
  sm: '--radius-sm',
  md: '--radius-md',
  lg: '--radius-lg',
} as const
