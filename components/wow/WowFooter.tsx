'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import { Link } from '@/i18n/navigation'
import type { Dictionary } from '@/i18n/types'
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Youtube,
// } from 'lucide-react'

type WowFooterProps = {
  footer: Dictionary['footer']
}
// const socialLinks = [
//   { name: 'Facebook', icon: Facebook, href: '#' },
//   { name: 'YouTube', icon: Youtube, href: '#' },
//   { name: 'Instagram', icon: Instagram, href: '#' },
//   { name: 'LinkedIn', icon: Linkedin, href: '#' },
// ]

const legalLinks = [
  { label: 'Privacy Policy', href: '/policy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookies Settings', href: '/policy' },
]

export default function WowFooter({ footer }: WowFooterProps) {
  return (
    <footer className="relative overflow-hidden bg-background px-4 pb-6 pt-16 transition-colors duration-300 dark:bg-dark sm:px-8 md:pb-8 md:pt-20">
      <div className="relative mx-auto max-w-[1170px]">
        <RevealWrapper>
          <div className="rounded-2xl bg-secondary px-6 py-10 dark:bg-[#1A1A1A] md:px-10 md:py-12 lg:px-14 lg:py-16">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] lg:gap-16">
              <div>
                <Link href="/" className="inline-block">
                  <p className="text-2xl font-semibold leading-none md:text-3xl">
                    <span className="bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text text-transparent">
                      WOW
                    </span>
                    <span className="text-backgroundBody"> Superagency</span>
                  </p>
                </Link>

                <p className="mt-4 max-w-sm text-base leading-relaxed text-backgroundBody/60">
                  Technology, Marketing &amp; AI—All Under One Roof.
                </p>

                <address className="mt-6 not-italic text-sm leading-relaxed text-backgroundBody/60 md:text-base">
                  {footer.address.line1}
                  <br />
                  {footer.address.line2}
                  <br />
                  <a href="tel:+18337638969" className="transition-colors hover:text-[#b794f4]">
                    +1 (833) SOFT-WOW
                  </a>
                </address>

                {/* <div className="mt-8 flex flex-wrap gap-3">
                  {socialLinks.map(({ name, icon: Icon, href }) => (
                    <a
                      key={name}
                      href={href}
                      aria-label={name}
                      className="flex size-10 items-center justify-center rounded-full border border-backgroundBody/15 text-backgroundBody/60 transition-colors hover:border-[#8b7cff]/40 hover:text-[#b794f4]">
                      <Icon className="size-4" strokeWidth={1.5} />
                    </a>
                  ))}
                </div> */}
              </div>

              <div className="grid gap-10 sm:grid-cols-3">
                {footer.sections.map((section) => (
                  <div key={section.id}>
                    <p className="mb-4 text-base font-medium text-backgroundBody md:text-lg">{section.title}</p>
                    <ul className="space-y-2.5 text-sm text-backgroundBody/60 md:text-base">
                      {section.links.map((link) => (
                        <li key={link.id}>
                          <Link href={link.href} className="transition-colors hover:text-backgroundBody">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 border-t border-backgroundBody/10 pt-6 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-backgroundBody/50">
                © 2026 WOW Superagency. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {legalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-backgroundBody/50 underline underline-offset-4 transition-colors hover:text-backgroundBody">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>

        <div
          aria-hidden
          className="pointer-events-none mt-6 select-none text-center text-[clamp(3rem,12vw,8rem)] font-semibold leading-none tracking-[-0.04em]">
          <span className="bg-gradient-to-r from-[#8b7cff]/20 via-[#b794f4]/15 to-[#f4a8b8]/20 bg-clip-text text-transparent dark:from-[#8b7cff]/10 dark:via-[#b794f4]/8 dark:to-[#f4a8b8]/10">
            WOW
          </span>
          <span className="text-secondary/10 dark:text-white/[0.04]"> Superagency</span>
        </div>
      </div>
    </footer>
  )
}

// 'use client'

// import RevealWrapper from '@/components/animation/RevealWrapper'
// import { Link } from '@/i18n/navigation'
// import type { Dictionary } from '@/i18n/types'
// import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

// type WowFooterProps = {
//   footer: Dictionary['footer']
// }

// const socialLinks = [
//   { name: 'Facebook', icon: Facebook, href: '#' },
//   { name: 'YouTube', icon: Youtube, href: '#' },
//   { name: 'Instagram', icon: Instagram, href: '#' },
//   { name: 'LinkedIn', icon: Linkedin, href: '#' },
// ]

// const legalLinks = [
//   { label: 'Privacy Policy', href: '/policy' },
//   { label: 'Terms of Service', href: '/terms' },
//   { label: 'Cookies Settings', href: '/policy' },
// ]

// export default function WowFooter({ footer }: WowFooterProps) {
//   return (
//     <footer className="relative overflow-hidden bg-background px-4 pb-6 pt-16 transition-colors duration-300 dark:bg-dark sm:px-8 md:pb-8 md:pt-20">
//       <div className="relative mx-auto max-w-[1170px]">
//         <RevealWrapper>
//           <div className="rounded-2xl bg-secondary px-6 py-10 dark:bg-[#1A1A1A] md:px-10 md:py-12 lg:px-14 lg:py-16">
//             <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] lg:gap-16">
//               <div>
//                 <Link href="/" className="inline-block">
//                   <p className="text-2xl font-semibold leading-none md:text-3xl">
//                     <span className="bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text text-transparent">
//                       WOW
//                     </span>
//                     <span className="text-backgroundBody"> Superagency</span>
//                   </p>
//                 </Link>

//                 <p className="mt-4 max-w-sm text-base leading-relaxed text-backgroundBody/60">
//                   Technology, Marketing &amp; AI—All Under One Roof.
//                 </p>

//                 <address className="mt-6 not-italic text-sm leading-relaxed text-backgroundBody/60 md:text-base">
//                   {footer.address.line1}
//                   <br />
//                   {footer.address.line2}
//                   <br />
//                   <a href="tel:+18337638969" className="transition-colors hover:text-[#b794f4]">
//                     +1 (833) SOFT-WOW
//                   </a>
//                 </address>

//                 <div className="mt-8 flex flex-wrap gap-3">
//                   {socialLinks.map(({ name, icon: Icon, href }) => (
//                     <a
//                       key={name}
//                       href={href}
//                       aria-label={name}
//                       className="flex size-10 items-center justify-center rounded-full border border-backgroundBody/15 text-backgroundBody/60 transition-colors hover:border-[#8b7cff]/40 hover:text-[#b794f4]">
//                       <Icon className="size-4" strokeWidth={1.5} />
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               <div className="grid gap-10 sm:grid-cols-3">
//                 {footer.sections.map((section) => (
//                   <div key={section.id}>
//                     <p className="mb-4 text-base font-medium text-backgroundBody md:text-lg">{section.title}</p>
//                     <ul className="space-y-2.5 text-sm text-backgroundBody/60 md:text-base">
//                       {section.links.map((link) => (
//                         <li key={link.id}>
//                           <Link href={link.href} className="transition-colors hover:text-backgroundBody">
//                             {link.label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-12 flex flex-col gap-4 border-t border-backgroundBody/10 pt-6 md:flex-row md:items-center md:justify-between">
//               <p className="text-sm text-backgroundBody/50">
//                 © 2026 WOW Superagency. All rights reserved.
//               </p>
//               <div className="flex flex-wrap gap-x-6 gap-y-2">
//                 {legalLinks.map((link) => (
//                   <Link
//                     key={link.label}
//                     href={link.href}
//                     className="text-sm text-backgroundBody/50 underline underline-offset-4 transition-colors hover:text-backgroundBody">
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </RevealWrapper>

//         <div
//           aria-hidden
//           className="pointer-events-none mt-6 select-none text-center text-[clamp(3rem,12vw,8rem)] font-semibold leading-none tracking-[-0.04em]">
//           <span className="bg-gradient-to-r from-[#8b7cff]/20 via-[#b794f4]/15 to-[#f4a8b8]/20 bg-clip-text text-transparent dark:from-[#8b7cff]/10 dark:via-[#b794f4]/8 dark:to-[#f4a8b8]/10">
//             WOW
//           </span>
//           <span className="text-secondary/10 dark:text-white/[0.04]"> Superagency</span>
//         </div>
//       </div>
//     </footer>
//   )
// }
