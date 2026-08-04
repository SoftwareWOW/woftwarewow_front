'use client'

import { cn } from '@/utils/cn'
import Marquee from 'react-fast-marquee'
import RevealWrapper from '@/components/animation/RevealWrapper'

const clients = [
  {
    id: 1,
    reviewText:
      'WOW Intelligence cut our customer response time in half. The AI assistant handles inquiries while our team focuses on complex cases.',
    authorName: 'Michael Carter',
    authorRole: 'Operations Director, Bright Solutions',
    authorImage: '/images/wow/Hero/client/Michael Carter.png',
    rating: 5,
  },
  {
    id: 2,
    reviewText:
      'Lead qualification went from manual spreadsheets to automated scoring. We close more deals with less effort.',
    authorName: 'Emma Richardson',
    authorRole: 'Head of Sales, Nova Retail',
    authorImage: '/images/wow/Hero/client/Emma Richardson.jpg',
    rating: 5,
  },
  {
    id: 3,
    reviewText:
      'Their team connected our CRM, help desk, and chat into one intelligence layer. Everything stays in sync automatically.',
    authorName: 'Daniel Foster',
    authorRole: 'CEO, Foster Logistics',
    authorImage: '/images/wow/Hero/client/Daniel Foster.png',
    rating: 5,
  },
  {
    id: 4,
    reviewText:
      'Predictive analytics gave us visibility we never had before. We make faster decisions backed by real business data.',
    authorName: 'Sophia Bennett',
    authorRole: 'COO, Bennett Health Group',
    authorImage: '/images/wow/Hero/client/Sophia Bennett.png',
    rating: 4,
  },
  {
    id: 5,
    reviewText:
      'Workflow automation removed hours of repetitive work every week. The ROI was clear within the first month.',
    authorName: 'Sarah Johnson',
    authorRole: 'Founder, Green Earth Services',
    authorImage: '/images/wow/Hero/client/Avatar.png',
    rating: 5,
  },
]

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={15} viewBox="0 0 16 15" fill="none" aria-hidden>
      <path
        d="M7.25672 0.486272C7.53172 -0.162091 8.46832 -0.162091 8.74332 0.486274L10.3663 4.31303C10.4823 4.58637 10.7445 4.77313 11.0454 4.79678L15.2582 5.12799C15.9719 5.18411 16.2614 6.05763 15.7175 6.51446L12.5079 9.2107C12.2786 9.40331 12.1784 9.70552 12.2485 9.99343L13.2291 14.0249C13.3952 14.7079 12.6375 15.2478 12.0264 14.8818L8.41965 12.7214C8.16202 12.5671 7.83802 12.5671 7.5804 12.7214L3.9736 14.8818C3.3625 15.2478 2.60477 14.7079 2.77091 14.0249L3.75155 9.99343C3.82159 9.70552 3.72147 9.40331 3.49221 9.2107L0.28245 6.51446C-0.261375 6.05763 0.0280544 5.18411 0.741835 5.12799L4.9547 4.79678C5.25561 4.77313 5.51774 4.58637 5.63367 4.31303L7.25672 0.486272Z"
        fill="#615CCE"
      />
    </svg>
  )
}

const IntelligenceClients = () => {
  return (
    <section className="relative overflow-hidden px-3 md:px-4">
      <div className="mx-auto mb-8 max-w-[1320px] text-center md:mb-14">
        <RevealWrapper className="rv-badge">
          <span className="rv-badge-text">Testimonial</span>
        </RevealWrapper>
        <RevealWrapper>
          <h2 className="my-3 text-foreground dark:text-backgroundBody">
            Our respected happy{' '}
            <span className="font-instrument italic">clients</span>
            <br />
            <span className="font-instrument italic">say</span>
          </h2>
        </RevealWrapper>
      </div>
      <RevealWrapper>
        <div className="flex items-center gap-4 md:gap-[30px]">
          <Marquee pauseOnHover speed={50} autoFill>
            {clients.map((item) => (
              <div
                key={item.id}
                className={cn(
                  'mr-[30px] flex w-96 flex-col rounded-radius-sm border p-[30px] shadow-none dark:border-dark',
                )}
              >
                <div className="mb-5 flex shrink-0 items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <span key={idx}>
                      <StarIcon />
                    </span>
                  ))}
                </div>
                <p className="mb-6 flex-1 text-[17px] leading-[1.6] text-foreground dark:text-backgroundBody">
                  {item.reviewText}
                </p>
                <figcaption className="flex shrink-0 items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h6 className="text-[22px] leading-[1.2] text-foreground dark:text-backgroundBody">
                      {item.authorName}
                    </h6>
                    <p className="text-[15px] leading-[1.6] text-muted-foreground">{item.authorRole}</p>
                  </div>
                  <img
                    src={item.authorImage}
                    alt={item.authorName}
                    className="size-12 shrink-0 rounded-full object-cover"
                  />
                </figcaption>
              </div>
            ))}
          </Marquee>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default IntelligenceClients
