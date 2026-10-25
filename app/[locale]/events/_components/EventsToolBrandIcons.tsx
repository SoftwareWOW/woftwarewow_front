/** Compact brand marks for tools missing from Iconify bundles. */

export function HopinToolMark() {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden>
        <circle cx="16" cy="16" r="14" fill="#7955FF" />
        <circle cx="16" cy="16" r="8" fill="#fff" fillOpacity="0.25" />
        <circle cx="16" cy="10" r="3" fill="#fff" fillOpacity="0.9" />
        <circle cx="10.5" cy="18" r="3" fill="#fff" fillOpacity="0.9" />
        <circle cx="21.5" cy="18" r="3" fill="#fff" fillOpacity="0.9" />
      </svg>
      <span className="text-[1.05rem] font-semibold tracking-tight text-[#7955FF]">hopin</span>
    </span>
  )
}

export function WhovaToolMark() {
  return (
    <span className="whitespace-nowrap font-serif text-[1.35rem] font-semibold italic tracking-tight text-[#0D0D0D] dark:text-[#F2F2F2]">
      Whova
    </span>
  )
}

export function SlidoToolMark() {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden>
        <circle cx="16" cy="16" r="14" fill="#0AE06E" />
        <path
          fill="#0D0D0D"
          d="M13.2 10.5c0-1.6 1.3-2.6 3.6-2.6 1.9 0 3.2.7 3.8 1.9l-2.1 1.2c-.3-.7-1-1.1-1.9-1.1-.9 0-1.4.3-1.4.9 0 .5.4.8 1.5 1 2 .4 3.1 1.1 3.1 2.7 0 1.7-1.4 2.7-3.8 2.7-2.2 0-3.7-.8-4.4-2.1l2.1-1.2c.4.9 1.1 1.3 2.2 1.3 1 0 1.5-.3 1.5-.9 0-.5-.4-.8-1.6-1.1-1.9-.4-2.9-1.1-2.9-2.7z"
        />
      </svg>
      <span className="text-[1.05rem] font-bold tracking-tight text-[#0D0D0D] dark:text-[#F2F2F2]">slido</span>
    </span>
  )
}
