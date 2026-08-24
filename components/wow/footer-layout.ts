/** Shared main spacing: sticky footer margin only when footer is fixed (large + tall). */
export const stickyFooterMainClass =
  'relative z-10 w-full max-w-full overflow-x-clip bg-backgroundBody pb-[calc(96px+env(safe-area-inset-bottom))] dark:bg-dark md:pb-0 [@media(min-width:1280px)_and_(min-height:900px)]:mb-[720px]'
