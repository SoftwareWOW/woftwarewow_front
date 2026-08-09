'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { useContactDialogOptional } from './ContactDialogProvider'
import { useMeetDialogOptional } from './MeetDialogProvider'

type ButtonComponentVariant = 'primary' | 'secondary' | 'white' | 'primary2'
type ButtonComponentSize = 'default' | 'sm' | 'sm-v2'

type ButtonComponentProps = {
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: ButtonComponentVariant
  size?: ButtonComponentSize
  className?: string
  fullWidth?: boolean
  disabled?: boolean
  ariaLabel?: string
  ariaExpanded?: boolean
  children: ReactNode
}

const variantClasses: Record<ButtonComponentVariant, string> = {
  primary: 'rv-button-primary',
  secondary: 'rv-button-secondary',
  white: 'rv-button-white',
  primary2: 'rv-button-primary2',
}

const sizeClasses: Record<ButtonComponentSize, string> = {
  default: '',
  sm: 'rv-button-sm',
  'sm-v2': 'rv-button-sm-v2',
}

const isContactHref = (href?: string) => href === '/contact' || href?.endsWith('/contact')
const isMeetHref = (href?: string) => href === '/meet' || href?.endsWith('/meet')

export default function ButtonComponent({
  href,
  onClick,
  type = 'button',
  variant = 'secondary',
  size = 'default',
  className = '',
  fullWidth = false,
  disabled = false,
  ariaLabel,
  ariaExpanded,
  children,
}: ButtonComponentProps) {
  const contactDialog = useContactDialogOptional()
  const meetDialog = useMeetDialogOptional()

  const classes = [
    'rv-button',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? '!inline-flex !w-full max-md:!w-full' : 'inline-flex w-fit max-w-full',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const topClass = fullWidth
    ? 'rv-button-top !inline-flex !w-full !justify-center !text-center'
    : 'rv-button-top'
  const bottomClass = fullWidth
    ? 'rv-button-bottom !inline-flex !w-full !justify-center !text-center'
    : 'rv-button-bottom'

  const content = (
    <>
      <div className={`${topClass} whitespace-nowrap`}>
        <span className="whitespace-nowrap">{children}</span>
      </div>
      <div className={`${bottomClass} whitespace-nowrap`}>
        <span className="whitespace-nowrap">{children}</span>
      </div>
    </>
  )

  if (href && isContactHref(href) && contactDialog) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={(event) => {
          event.preventDefault()
          contactDialog.open()
        }}
      >
        {content}
      </Link>
    )
  }

  if (href && isMeetHref(href) && meetDialog) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={(event) => {
          event.preventDefault()
          meetDialog.open()
        }}
      >
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes}${disabled ? ' pointer-events-none opacity-60' : ''}`}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
    >
      {content}
    </button>
  )
}

type ButtonComponentListProps = {
  children: ReactNode
  className?: string
  itemClassName?: string
}

export function ButtonComponentList({
  children,
  className = 'flex justify-center',
  itemClassName = 'mx-auto block max-md:w-full md:ml-auto md:inline-block md:w-auto',
}: ButtonComponentListProps) {
  return (
    <ul className={className}>
      <li className={itemClassName}>{children}</li>
    </ul>
  )
}
