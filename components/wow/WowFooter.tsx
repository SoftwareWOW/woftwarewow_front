import RevealWrapper from '@/components/animation/RevealWrapper'
import { Link } from '@/i18n/navigation'
import type { Dictionary } from '@/i18n/types'
import Image from 'next/image'

type WowFooterProps = {
  footer: Dictionary['footer']
}

export default function WowFooter({ footer }: WowFooterProps) {
  return (
    <footer className="relative overflow-hidden bg-backgroundBody px-4 pb-8 pt-24 dark:bg-dark-300 sm:px-8">
      <div className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 opacity-10 dark:opacity-5">
        <Image src="/images/wow/footer-watermark.png" alt="" width={1308} height={225} className="h-auto w-[min(90vw,900px)]" />
      </div>

      <div className="relative mx-auto max-w-[1170px]">
        <RevealWrapper className="grid gap-12 lg:grid-cols-[370px_1fr] lg:gap-20">
          <div>
            <p className="text-lg leading-relaxed text-colorText dark:text-dark-100">{footer.description}</p>
            <div className="mt-6">
              <p className="text-xl text-secondary dark:text-backgroundBody">{footer.companyHeading}</p>
              <address className="mt-3 not-italic text-lg leading-relaxed text-colorText dark:text-dark-100">
                {footer.address.line1}
                <br />
                {footer.address.line2}
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
              {footer.social.map((name) => (
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
            {footer.sections.map((section) => (
              <div key={section.id}>
                <p className="mb-4 text-xl text-secondary dark:text-backgroundBody">{section.title}</p>
                <ul className="space-y-2 text-lg text-colorText dark:text-dark-100">
                  {section.links.map((link) => (
                    <li key={link.id}>
                      <Link href={link.href} className="hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealWrapper>

        <p className="mt-16 border-t border-secondary/10 pt-6 text-center text-base text-colorText dark:border-dark dark:text-dark-100">
          {footer.copyright}
        </p>
      </div>
    </footer>
  )
}
