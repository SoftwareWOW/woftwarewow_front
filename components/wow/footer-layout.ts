/** Sticky footer reveal: main sits above fixed footer; content scrolls over it. */
export const stickyFooterClass =
  'relative z-0 w-full max-w-full overflow-x-clip lg:fixed lg:inset-x-0 lg:bottom-0'

export const stickyFooterMainClass =
  'relative z-10 w-full max-w-full overflow-x-clip bg-backgroundBody pb-[calc(96px+env(safe-area-inset-bottom))] dark:bg-dark md:pb-0 lg:mb-[min(720px,85vh)]'
