/** Brand nav interaction: Primary/50 (#CECCF0) light, white (#ffffff) dark — hover & selected */
export const navItemActiveClass = 'bg-primary-50 text-black dark:bg-white dark:text-[#000000]'

export const navItemHoverClass =
  'hover:bg-primary-50 hover:text-black dark:hover:bg-white dark:hover:text-[#000000]'

export const navItemInactiveClass = `bg-white text-black dark:bg-dark dark:text-backgroundBody ${navItemHoverClass}`

export const navItemLabelClass =
  'text-black dark:text-backgroundBody dark:group-hover:!text-[#000000] dark:group-[.is-active]:!text-[#000000]'

export const navItemDescriptionClass =
  'text-black/60 dark:text-dark-100 dark:group-hover:!text-[#000000]/60 dark:group-[.is-active]:!text-[#000000]/60'

export const navItemIconBoxClass =
  'border-black/10 bg-white dark:border-dark dark:bg-dark dark:group-hover:border-black/10 dark:group-hover:bg-white dark:group-[.is-active]:border-black/10 dark:group-[.is-active]:bg-white'
export const navItemIconClass =
  'stroke-black text-black dark:stroke-white dark:text-white group-hover:!stroke-black group-hover:!text-black group-[.is-active]:!stroke-black group-[.is-active]:!text-black'
export const navPillActiveClass = navItemActiveClass

export const navPillInactiveClass = `text-black/50 dark:text-dark-100 ${navItemHoverClass} hover:text-black dark:hover:text-[#000000]`

export const navTabActiveClass = navItemActiveClass

export const navTabInactiveClass = `bg-black/[0.02] text-black/60 dark:bg-transparent dark:text-dark-100 ${navItemHoverClass}`
