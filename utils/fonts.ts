import { Cormorant_Garamond, Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

const seasons = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-seasons',
  display: 'swap',
})

/** @deprecated Use `outfit` — kept as alias for existing imports */
const satoshi = outfit

export { outfit, satoshi, seasons }
