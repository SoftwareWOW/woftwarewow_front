import { cn } from '@/utils/cn'

/** Concave four-point sparkle (Figma Ask WOW tab). */
const SPARKLE_FILL_PATH =
  'M20.002 0C20.002 0 19.789 11.2169 24.2871 15.7149C28.785 20.2129 40.002 20 40.002 20C40.002 20 28.785 19.7871 24.2871 24.2851C19.789 28.7831 20.002 40 20.002 40C20.002 40 20.2149 28.7831 15.7168 24.2851C11.2189 19.7871 0.00195312 20 0.00195312 20C0.00195312 20 11.2189 20.2129 15.7168 15.7149C20.2149 11.2169 20.002 0 20.002 0Z'

const iconSizeClass =
  'size-4 transition-transform duration-300 group-hover:skew-x-6 sm:size-5 2xl:size-[46px]'

type FooterAskWowTabIconProps = {
  active: boolean
  className?: string
}

/** Same two filled sparkles as Figma; only color changes with tab selection. */
export function FooterAskWowTabIcon({ active, className }: FooterAskWowTabIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={cn(iconSizeClass, active ? '!text-white' : 'text-primary', className)}
    >
      <g transform="translate(0.5 1) scale(0.52)">
        <path d={SPARKLE_FILL_PATH} fill="currentColor" className={active ? '!fill-white' : undefined} />
      </g>
      <g transform="translate(12.25 13.5) scale(0.32)">
        <path d={SPARKLE_FILL_PATH} fill="currentColor" className={active ? '!fill-white' : undefined} />
      </g>
    </svg>
  )
}