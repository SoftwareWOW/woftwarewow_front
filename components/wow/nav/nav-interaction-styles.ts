/** Brand nav interaction — mega menu & top pills */
export const navItemActiveClass =
  'bg-primary-50 text-black dark:bg-primary-50 dark:text-black'

export const navItemHoverClass =
  'hover:bg-primary-50 hover:text-black dark:hover:bg-primary-50 dark:hover:text-black'

export const navItemInactiveClass = `bg-white text-black dark:bg-transparent dark:text-backgroundBody ${navItemHoverClass}`

export const navItemLabelClass =
  'text-black group-hover:text-black group-[.is-active]:text-black dark:text-backgroundBody dark:group-hover:!text-black dark:group-[.is-active]:!text-black'

export const navItemDescriptionClass =
  'text-black/60 group-[.is-active]:text-black/60 dark:text-dark-100 dark:group-hover:!text-black/60 dark:group-[.is-active]:!text-black/70'

export const navItemIconBoxClass =
  'border-black/10 bg-white group-hover:border-transparent group-hover:bg-primary group-[.is-active]:border-transparent group-[.is-active]:bg-primary dark:border-[#EDF0F51A] dark:bg-transparent dark:group-hover:border-transparent dark:group-hover:bg-primary dark:group-[.is-active]:border-transparent dark:group-[.is-active]:bg-primary'

export const navItemIconClass =
  'stroke-black text-black group-hover:!stroke-white group-hover:!text-white group-[.is-active]:!stroke-white group-[.is-active]:!text-white dark:stroke-white dark:text-white dark:group-hover:!stroke-white dark:group-hover:!text-white dark:group-[.is-active]:!stroke-white dark:group-[.is-active]:!text-white'

export const navPillActiveClass =
  'bg-primary-50 text-white dark:bg-primary-50 dark:text-white'

export const navPillInactiveClass =
  'bg-transparent text-black/50 dark:bg-transparent dark:text-dark-100 hover:bg-primary-50 hover:text-black dark:hover:bg-primary-50 dark:hover:text-black'

export const navTabActiveClass = navItemActiveClass

export const navTabInactiveClass = `bg-black/[0.02] text-black/60 dark:bg-transparent dark:text-dark-100 ${navItemHoverClass}`

/** Mobile bottom bar on primary shell — keep high contrast on purple bar */
export const mobileBottomNavActiveClass = 'is-active bg-white text-black'
export const mobileBottomNavInactiveClass =
  'text-white hover:bg-white/15 dark:hover:bg-white/15'
