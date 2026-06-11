import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '@/components/animation/RevealWrapper'

const companyLinks = ['About', 'About 02', 'FAQ', 'Contact', 'Team', 'Team Details', 'Career', 'Career 02', 'Career Details']
const resourceLinks = ['Blog', 'Blog 02', 'Projects', 'Projects 02', 'Projects 03', 'Pricing']
const otherLinks = ['Changelog', 'Password Protected', 'Terms of Service', 'Privacy Policy']

export default function WowFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#edf0f5] px-4 pb-8 pt-24 dark:bg-dark-300 sm:px-8">
      <div className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 opacity-10 dark:opacity-5">
        <Image src="/images/wow/footer-watermark.png" alt="" width={1308} height={225} className="h-auto w-[min(90vw,900px)]" />
      </div>

      <div className="relative mx-auto max-w-[1170px]">
        <RevealWrapper className="grid gap-12 lg:grid-cols-[370px_1fr] lg:gap-20">
          <div>
            <p className="text-lg leading-relaxed text-colorText dark:text-dark-100">
              WOW Superagency offers global business and technology services, transforming brands with customized
              solutions for over a decade.
            </p>
            <div className="mt-6">
              <p className="text-xl text-secondary dark:text-backgroundBody">Company</p>
              <address className="mt-3 not-italic text-lg leading-relaxed text-colorText dark:text-dark-100">
                90 Burnhamthorpe Rd West, 1400
                <br />
                Mississauga, ON L5B 3C3 🇨🇦
                <br />
                <a href="tel:+18337638969" className="hover:text-primary">
                  +1 (833) 763-8969
                </a>
                <br />
                <a href="mailto:hello@wowteam.net" className="hover:text-primary">
                  hello@wowteam.net
                </a>
              </address>
            </div>
            <div className="mt-8 flex gap-4 text-primary">
              {['Facebook', 'YouTube', 'Instagram', 'LinkedIn'].map((name) => (
                <span
                  key={name}
                  className="flex size-6 items-center justify-center rounded-full border border-primary/30 text-[10px]"
                  aria-hidden>
                  {name[0]}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="mb-4 text-xl text-secondary dark:text-backgroundBody">Company</p>
              <ul className="space-y-2 text-lg text-colorText dark:text-dark-100">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <Link href="/about" className="hover:text-primary">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xl text-secondary dark:text-backgroundBody">Resources</p>
              <ul className="space-y-2 text-lg text-colorText dark:text-dark-100">
                {resourceLinks.map((link) => (
                  <li key={link}>
                    <Link href="/ai-blog" className="hover:text-primary">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xl text-secondary dark:text-backgroundBody">Links</p>
              <ul className="space-y-2 text-lg text-colorText dark:text-dark-100">
                {otherLinks.map((link) => (
                  <li key={link}>
                    <Link href="/terms" className="hover:text-primary">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealWrapper>

        <p className="mt-16 border-t border-secondary/10 pt-6 text-center text-base text-colorText dark:border-dark dark:text-dark-100">
          All rights reserved WOW Superagency · www.wow.onl
        </p>
      </div>
    </footer>
  )
}
