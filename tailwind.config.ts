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
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // card: {
        //   DEFAULT: 'var(--card)',
        //   foreground: 'var(--card-foreground)',
        // },
        // popover: {
        //   DEFAULT: 'var(--popover)',
        //   foreground: 'var(--popover-foreground)',
        // },
        primary: {
          DEFAULT: '#615CCE',
          // foreground: '#ffffff',
          50: '#CECCF0',
        },
           accent: '#FF9191',
        secondary: '#171717',
        // secondary: {
        //   DEFAULT: '#171717',
        //   foreground: '#EDEDED',
        // },
        // muted: {
        //   DEFAULT: '#f5f5f5',
        //   foreground: '#666666',
        // },
        // accent: {
        //   DEFAULT: '#FF9191',
        //   foreground: '#171717',
        // },
        // destructive: {
        //   DEFAULT: 'var(--destructive)',
        //   foreground: 'var(--destructive-foreground)',
        // },
        // border: 'var(--border)',
        // input: 'var(--input)',
        // ring: 'var(--ring)',
        // chart: {
        //   1: 'var(--chart-1)',
        //   2: 'var(--chart-2)',
        //   3: 'var(--chart-3)',
        //   4: 'var(--chart-4)',
        //   5: 'var(--chart-5)',
        // },
        // sidebar: {
        //   DEFAULT: 'var(--sidebar)',
        //   foreground: 'var(--sidebar-foreground)',
        //   primary: 'var(--sidebar-primary)',
        //   'primary-foreground': 'var(--sidebar-primary-foreground)',
        //   accent: 'var(--sidebar-accent)',
        //   'accent-foreground': 'var(--sidebar-accent-foreground)',
        //   border: 'var(--sidebar-border)',
        //   ring: 'var(--sidebar-ring)',
        // },
        backgroundBody: '#EDEDED',
        black: '#171717',
        colorText: '#171717b3',
        muted: '#666666',
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
      },
      animation: {
        'mega-menu-in': 'mega-menu-in 220ms cubic-bezier(0.65, 0.05, 0, 1) forwards',
        'mobile-sheet-in': 'mobile-sheet-in 280ms cubic-bezier(0.65, 0.05, 0, 1) forwards',
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
