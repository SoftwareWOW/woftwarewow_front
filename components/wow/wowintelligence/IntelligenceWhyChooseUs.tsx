import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '../shared/ButtonComponent'
import WowText from '../shared/WowText'

const IntelligenceWhyChooseUs = () => {
  return (
    <section className="px-3 md:px-4">
      <div className="mx-auto max-w-[1320px]">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16 lg:max-w-5xl">
          <RevealWrapper>
            <h2 className="text-center lg:leading-[1.1]">
              <span className="inline">Why choose </span>
              <span className="whitespace-nowrap">
                <WowText>WOW</WowText> Intelligence
              </span>
            </h2>
          </RevealWrapper>
          <TextAppearAnimation>
            <p className="text-appear mt-3 text-lg font-normal text-black/70 dark:text-backgroundBody/70">
              We design AI solutions and automation that sharpen decisions, reduce manual work, and
              accelerate results — without replacing your team.
            </p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="reveal-me grid grid-cols-12 gap-[30px]">
          <div className="col-span-12 flex-1 border px-[30px] py-10 dark:border-dark lg:col-span-6">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={61} height={60} viewBox="0 0 61 60" fill="none">
                <rect
                  width={60}
                  height={60}
                  transform="translate(0.5)"
                  className="fill-backgroundBody dark:fill-secondary"
                />
                <path
                  d="M31.25 12.5C31.25 12.0858 30.9142 11.75 30.5 11.75C30.0858 11.75 29.75 12.0858 29.75 12.5H31.25ZM29.75 47.5C29.75 47.9142 30.0858 48.25 30.5 48.25C30.9142 48.25 31.25 47.9142 31.25 47.5H29.75Z"
                  className="stroke-secondary dark:stroke-backgroundBody"
                />
              </svg>
            </span>
            <h5 className="mb-3 mt-6">AI-first approach</h5>
            <p className="text-base font-normal leading-[25.6px] text-black/70 dark:text-backgroundBody/70">
              Custom assistants, analytics, and automations built around your workflows and data.
            </p>
          </div>
          <div className="col-span-12 flex-1 border px-[30px] py-10 dark:border-dark lg:col-span-6">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={61} height={60} viewBox="0 0 61 60" fill="none">
                <rect
                  width={60}
                  height={60}
                  transform="translate(0.5)"
                  className="fill-backgroundBody dark:fill-secondary"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.0966 10L14.7852 27.7771H24.0966L17.1137 50L46.2137 27.7771H33.4109L40.3937 10H24.0966Z"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h5 className="mb-3 mt-6">Human-in-the-loop</h5>
            <p className="text-base font-normal leading-[25.6px] text-black/70 dark:text-backgroundBody/70">
              AI supports your team — planning, routing, and reviewing — while people stay in control.
            </p>
          </div>
          <div className="col-span-12 flex-1 border px-[30px] py-10 dark:border-dark lg:col-span-6">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={61} height={60} viewBox="0 0 61 60" fill="none">
                <rect
                  width={60}
                  height={60}
                  transform="translate(0.5)"
                  className="fill-backgroundBody dark:fill-secondary"
                />
                <path
                  d="M10.1141 20.7855C9.75894 20.9986 9.64377 21.4593 9.85688 21.8144C10.07 22.1696 10.5307 22.2848 10.8859 22.0717L10.1141 20.7855Z"
                  className="stroke-secondary dark:stroke-backgroundBody"
                />
              </svg>
            </span>
            <h5 className="mb-3 mt-6">End-to-end delivery</h5>
            <p className="text-base font-normal leading-[25.6px] text-black/70 dark:text-backgroundBody/70">
              From discovery and data strategy to deployment, monitoring, and continuous improvement.
            </p>
          </div>
          <div className="col-span-12 flex-1 border px-[30px] py-10 dark:border-dark lg:col-span-6">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={61} height={60} viewBox="0 0 61 60" fill="none">
                <rect
                  width={60}
                  height={60}
                  transform="translate(0.5)"
                  className="fill-backgroundBody dark:fill-secondary"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.5002 16.6662C30.5002 20.3476 27.5157 23.3319 23.8341 23.3319C20.1525 23.3319 17.168 20.3476 17.168 16.6662Z"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h5 className="mb-3 mt-6">Connected ecosystem</h5>
            <p className="text-base font-normal leading-[25.6px] text-black/70 dark:text-backgroundBody/70">
              Intelligence connects with software, marketing, design, and growth — all under one roof.
            </p>
          </div>
        </RevealWrapper>
        <RevealWrapper className="reveal-me mt-7 justify-self-center max-md:w-full md:mt-14">
          <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
            <ButtonComponent href="/meet" variant="primary" fullWidth>
              Schedule a Free Call
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default IntelligenceWhyChooseUs
