'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import WowContactForm from '@/components/wow/shared/WowContactForm'

const ContactForm = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <RevealWrapper as="div" className="reveal-me">
          <WowContactForm />
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ContactForm
