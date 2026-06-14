type MenuItemIconProps = {
  label: string
}

/** Generic icon placeholder sized to Figma Menu Icon V2 (28×28, 8px padding) */
export function MenuItemIcon({ label }: MenuItemIconProps) {
  const initial = label.trim().charAt(0).toUpperCase()

  return (
    <span
      className="flex size-full items-center justify-center text-[10px] font-light leading-none text-black/60 dark:text-dark-100"
      aria-hidden>
      {initial}
    </span>
  )
}
