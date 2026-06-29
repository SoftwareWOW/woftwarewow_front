import Link from 'next/link'
import { ReactNode } from 'react'

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

export default function ButtonComponent({
  href,
  onClick,
  type = 'button',
  variant = 'secondary',
  size = 'default',
  className = '',
  fullWidth = false,
  ariaLabel,
  ariaExpanded,
  children,
}: ButtonComponentProps) {
  const classes = [
    'rv-button',
    variantClasses[variant],
    sizeClasses[size],
    'block text-center md:inline-block',
    fullWidth ? '!w-full max-md:w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const topClass = fullWidth ? 'rv-button-top !w-full !text-center' : 'rv-button-top'
  const bottomClass = fullWidth ? 'rv-button-bottom !w-full !text-center' : 'rv-button-bottom'

  const content = (
    <>
      <div className={topClass}>
        <span>{children}</span>
      </div>
      <div className={bottomClass}>
        <span>{children}</span>
      </div>
    </>
  )

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
      className={classes}
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
