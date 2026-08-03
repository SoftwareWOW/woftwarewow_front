import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        '2xl': '1430px',
      },
      fontFamily: {
        satoshi: ['var(--font-outfit)'],
        outfit: ['var(--font-outfit)'],
        instrument: ['var(--font-seasons)'],
        seasons: ['var(--font-seasons)'],
        display: ['var(--font-outfit)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: '#171717',
        card: {
          DEFAULT: '#EDEDED',
        },
        border: 'rgba(23, 23, 23, 0.1)',
        primary: {
          DEFAULT: '#615CCE',
          foreground: '#ffffff',
          50: '#CECCF0',
        },
        accent: '#FF9191',
        secondary: '#171717',
        muted: {
          DEFAULT: '#666666',
          foreground: '#666666',
        },
        backgroundBody: '#EDEDED',
        black: '#171717',
        colorText: '#171717b3',
        dark: {
          DEFAULT: '#171717',
          100: '#ffffffb3',
          200: '#1f1f1f',
          300: '#141414',
          gradient: '#141414',
        },
      },
      borderColor: {
        DEFAULT: '#1717171a',
        dark: '#ededed1a',
      },
      backgroundImage: {
        'ai-gradient-bg': "url('/images/ai-transition.png')",
        'brand-gradient': 'linear-gradient(135deg, #615CCE 0%, #FF9191 100%)',
      },
      cursor: {
        fancy: 'url(/images/cursor.svg), default',
        pause: 'url(/images/pause.png), default',
      },
      transitionTimingFunction: {
        'faq-body-transition': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'smooth-cubic-bezier': 'cubic-bezier(0.65, 0.05, 0, 1)',
        'team-bezier': 'cubic-bezier(.21,.25,.76,.71)',
      },
      boxShadow: {
        nav: '0px 0px 30px rgba(0, 0, 0, 0.05)',
        box: ' 0px 5px 50px 0px rgba(0, 0, 0, 0.07)',
      },
      keyframes: {
        'mega-menu-in': {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'mobile-sheet-in': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'ring-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'node-pulse': {
          '0%, 100%': { boxShadow: '0 8px 32px rgba(97, 92, 206, 0.18)' },
          '50%': { boxShadow: '0 12px 40px rgba(97, 92, 206, 0.28)' },
        },
        'flow-dash-march': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '14px 0' },
        },
        'flow-dash-march-y': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 14px' },
        },
        'arrow-slide-left': {
          '0%, 100%': { transform: 'translateX(0)', opacity: '0.55' },
          '50%': { transform: 'translateX(-4px)', opacity: '1' },
        },
        'arrow-slide-down': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.55' },
          '50%': { transform: 'translateY(4px)', opacity: '1' },
        },
        'arrow-slide-right': {
          '0%, 100%': { transform: 'translateX(0)', opacity: '0.55' },
          '50%': { transform: 'translateX(5px)', opacity: '1' },
        },
      },
      animation: {
        'mega-menu-in': 'mega-menu-in 220ms cubic-bezier(0.65, 0.05, 0, 1) forwards',
        'mobile-sheet-in': 'mobile-sheet-in 280ms cubic-bezier(0.65, 0.05, 0, 1) forwards',
        'ring-spin': 'ring-spin 14s linear infinite',
        'node-pulse': 'node-pulse 3.2s ease-in-out infinite',
        'flow-dash-march': 'flow-dash-march 1.2s linear infinite',
        'flow-dash-march-y': 'flow-dash-march-y 1.2s linear infinite',
        'arrow-slide-down': 'arrow-slide-down 1.2s ease-in-out infinite',
        'arrow-slide-left': 'arrow-slide-left 1.2s ease-in-out infinite',
        'arrow-slide-right': 'arrow-slide-right 1.8s ease-in-out infinite',
      },
      borderRadius: {
        'radius-sm': 'var(--radius-sm)',
        'radius-md': 'var(--radius-md)',
        'radius-lg': 'var(--radius-lg)',
        // Legacy aliases — prefer rounded-radius-* utilities
        card: 'var(--radius-md)',
        cta: 'var(--radius-sm)',
      },
      // ringWidth: {
      //   3: '3px',
      // },
    },
  },
  safelist: [
    {
      pattern: /scale-/,
    },
    'rounded-radius-sm',
    'rounded-radius-md',
    'rounded-radius-lg',
    'rounded-t-radius-md',
    'hover:rounded-radius-md',
  ],
  plugins: [],
} satisfies Config
