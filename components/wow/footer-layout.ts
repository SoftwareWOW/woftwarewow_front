/** Sticky footer reveal: main sits above fixed footer; content scrolls over it. */
export const stickyFooterClass =
  'relative z-0 w-full max-w-full overflow-x-clip lg:fixed lg:inset-x-0 lg:bottom-0 lg:max-h-dvh lg:overflow-y-auto lg:overscroll-contain'

export const stickyFooterMainClass =
  'relative z-10 w-full max-w-full overflow-x-clip bg-backgroundBody pb-[calc(96px+env(safe-area-inset-bottom))] dark:bg-dark md:pb-0 lg:mb-[var(--sticky-footer-height,100dvh)]'

/** Social icon button — forces white glyph on button hover (beats global * text-black). */
export const footerSocialLinkClass =
  'footer-social-link group flex size-9 items-center justify-center rounded-full border border-[#e5e5e5] transition-colors duration-300 hover:border-[#8b7cff] hover:bg-[#8b7cff] sm:size-10 dark:border-white/10 dark:hover:border-[#b794f4] dark:hover:bg-[#b794f4]'
