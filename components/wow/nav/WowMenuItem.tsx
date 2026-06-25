'use client'

import { Link } from '@/i18n/navigation'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { MenuItemIcon } from './MenuItemIcon'
import { WowDivisionLogo } from './WowDivisionLogo'
import { navItemActiveClass, navItemDescriptionClass, navItemIconBoxClass, navItemIconClass, navItemInactiveClass, navItemLabelClass } from './nav-interaction-styles'

type MenuVariant = 'desktop' | 'mobile'

type WowMenuItemProps = {
  iconId: string
  label: string
  description?: string
  href?: string
  onClick?: () => void
  onMouseEnter?: () => void
  active?: boolean
  showChevron?: boolean
  multilineDescription?: boolean
  tall?: boolean
}

export function WowMenuItem({
  iconId,
  label,
  description,
  href,
  onClick,
  onMouseEnter,
  active = false,
  showChevron = true,
  multilineDescription = false,
  tall = false,
}: WowMenuItemProps) {
  const className = `group flex w-full gap-[8px] rounded-radius-sm p-[10px] text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
    tall ? 'min-h-[108px]' : ''
  } ${active ? `is-active ${navItemActiveClass}` : navItemInactiveClass}`

  const content = (
    <>
      <motion.div 
        className={`flex size-[28px] shrink-0 items-center justify-center rounded-radius-sm border-[0.5px] p-[8px] ${navItemIconBoxClass}`}
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <MenuItemIcon iconId={iconId} className={navItemIconClass} />
      </motion.div>
      <div className={`relative min-w-0 flex-1 ${showChevron ? 'pe-[22px]' : ''}`}>
        <div className="flex flex-col gap-[6px]">
          <motion.p 
            className={`text-[14px] font-light leading-none ${navItemLabelClass}`}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.p>
          {description && (
            <>
              {multilineDescription ? (
                description.split('\n').map((line) => (
                  <motion.p
                    key={line}
                    className={`text-xs font-light leading-[1.38] ${navItemDescriptionClass}`}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {line}
                  </motion.p>
                ))
              ) : (
                <motion.p 
                  className={`text-xs font-light leading-[1.38] ${navItemDescriptionClass}`}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  {description}
                </motion.p>
              )}
            </>
          )}
        </div>
        {showChevron && (
          <motion.div
            animate={{
              x: active ? 4 : 0,
              opacity: active ? 1 : 0.4,
            }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight
              aria-hidden
              className={`absolute end-[10px] top-[2px] h-3 w-1.5 ${navItemLabelClass}`}
              strokeWidth={1.2}
            />
          </motion.div>
        )}
      </div>
    </>
  )

  const MotionLink = motion(Link)
  const MotionButton = motion.button

  if (href) {
    return (
      <MotionLink
        href={href}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        className={className}
        whileHover={{ 
          scale: 1.02,
          x: 4,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
      >
        {content}
      </MotionLink>
    )
  }

  return (
    <MotionButton
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={className}
      whileHover={{ 
        scale: 1.02,
        x: 4,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      {content}
    </MotionButton>
  )
}

type WowDivisionItemProps = {
  divisionId: string
  href?: string
  onClick?: () => void
  onMouseEnter?: () => void
  active?: boolean
  variant?: MenuVariant
}

export function WowDivisionItem({
  divisionId,
  href,
  onClick,
  onMouseEnter,
  active = false,
  variant = 'desktop',
}: WowDivisionItemProps) {
  const isMobile = variant === 'mobile'

  const className = `group flex flex-col items-start justify-center rounded-radius-sm px-[10px] py-[15px] text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
    isMobile ? 'w-full' : 'w-[203px]'
  } ${active ? `is-active ${navItemActiveClass}` : navItemInactiveClass}`

  const content = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <WowDivisionLogo divisionId={divisionId} variant="menu" />
    </motion.div>
  )

  const MotionLink = motion(Link)
  const MotionButton = motion.button

  if (href) {
    return (
      <MotionLink
        href={href}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        className={className}
        whileHover={{ 
          scale: 1.03,
          x: 4,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
      >
        {content}
      </MotionLink>
    )
  }

  return (
    <MotionButton
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={className}
      whileHover={{ 
        scale: 1.03,
        x: 4,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      {content}
    </MotionButton>
  )
}