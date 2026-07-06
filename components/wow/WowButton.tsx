import Link from 'next/link'
import { ReactNode } from 'react'

type WowButtonProps = {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'dark' | 'outline'
  className?: string
  onClick?: () => void
}

const variantClasses = {
  primary: 'bg-primary text-white hover:brightness-110',
  dark: 'bg-secondary text-white hover:brightness-110 dark:bg-backgroundBody dark:text-secondary',
  outline:
    'border border-secondary/20 bg-white text-secondary hover:border-primary hover:text-primary dark:border-dark dark:bg-dark-200 dark:text-backgroundBody dark:hover:border-primary dark:hover:text-primary',
}

export default function WowButton({ href, children, variant = 'primary', className = '', onClick }: WowButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-radius-sm px-6 py-4 text-sm font-normal uppercase tracking-wide transition ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
