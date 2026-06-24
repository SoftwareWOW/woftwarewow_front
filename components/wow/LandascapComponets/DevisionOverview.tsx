'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import Link from 'next/link'
import { useState } from 'react'
import {
  Code2,
  TrendingUp,
  Palette,
  Brain,
  Users,
  Rocket,
  Globe,
  Star,
  Shield,
  LayoutDashboard,
  ArrowRight,
} from 'lucide-react'

const divisions = [
  {
    id: 1,
    title: 'SoftwareWOW!',
    description: 'Custom software, mobile apps, and digital products engineered to scale with your ambitions.',
    icon: Code2,
    color: '#8b7cff',
    bgGradient: 'from-[#8b7cff]/20 to-[#b794f4]/20',
  },
  {
    id: 2,
    title: 'WOW Marketing',
    description: 'Performance-driven campaigns that attract qualified leads and turn attention into revenue.',
    icon: TrendingUp,
    color: '#f4a8b8',
    bgGradient: 'from-[#f4a8b8]/20 to-[#ff9191]/20',
  },
  {
    id: 3,
    title: 'WOW Design',
    description: 'Brand identity and visual systems that make your business impossible to forget.',
    icon: Palette,
    color: '#b794f4',
    bgGradient: 'from-[#b794f4]/20 to-[#8b7cff]/20',
  },
  {
    id: 4,
    title: 'WOW Intelligence',
    description: 'AI-powered insights and automation that sharpen strategy and accelerate results.',
    icon: Brain,
    color: '#ff9191',
    bgGradient: 'from-[#ff9191]/20 to-[#f4a8b8]/20',
  },
  {
    id: 5,
    title: 'WOW Social',
    description: 'Social strategy and community management that transforms followers into loyal advocates.',
    icon: Users,
    color: '#8b7cff',
    bgGradient: 'from-[#8b7cff]/20 to-[#b794f4]/20',
  },
  {
    id: 6,
    title: 'WOW Accelerate',
    description: 'Growth programs and coaching designed to fast-track your business to its next milestone.',
    icon: Rocket,
    color: '#f4a8b8',
    bgGradient: 'from-[#f4a8b8]/20 to-[#ff9191]/20',
  },
  {
    id: 7,
    title: 'WOW Websites',
    description: 'High-performance websites built for speed, search visibility, and conversion.',
    icon: Globe,
    color: '#b794f4',
    bgGradient: 'from-[#b794f4]/20 to-[#8b7cff]/20',
  },
  {
    id: 8,
    title: 'WOW Impact',
    description: 'Purpose-led initiatives and giving programs that amplify your brand and community reach.',
    icon: Star,
    color: '#ff9191',
    bgGradient: 'from-[#ff9191]/20 to-[#f4a8b8]/20',
  },
  {
    id: 9,
    title: 'WOW Host',
    description: 'Secure, reliable hosting and infrastructure that keeps your business online around the clock.',
    icon: Shield,
    color: '#8b7cff',
    bgGradient: 'from-[#8b7cff]/20 to-[#b794f4]/20',
  },
  {
    id: 10,
    title: 'WOW Hub',
    description: 'A centralized command center for tools, training, and seamless team collaboration.',
    icon: LayoutDashboard,
    color: '#b794f4',
    bgGradient: 'from-[#b794f4]/20 to-[#8b7cff]/20',
  },
]

const DevisionOverview = () => {
  const { contentRef, triggerRef } = useHorizontalScroll({
    extraScroll: 0,
  })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section
      ref={triggerRef}
      className="service-section overflow-hidden bg-[#E8E7F7] py-14 transition-colors duration-300 dark:bg-[#0a0a0a] md:py-16 lg:py-[88px] xl:py-[100px]"
      aria-labelledby="divisions-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-12 items-start gap-y-6 md:gap-x-8">
          <div className="col-span-12 lg:col-span-7">
            <TextAppearAnimation>
              <h2
                id="divisions-heading"
                className="text-appear text-left text-[#1a1a1a] dark:text-[#F2F2F2] max-md:text-4xl max-sm:text-3xl"
              >
                Eleven Divisions. <br />
                One Growth{' '}
                <span className="font-instrument italic bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text text-transparent">
                  Ecosystem.
                </span>
              </h2>
            </TextAppearAnimation>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:text-right">

            <RevealWrapper className="mt-7 md:mt-14">
              <Link
                href="/services"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#8b7cff] to-[#b794f4] px-8 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8b7cff]/30"
                aria-label="Explore the WOW Superagency ecosystem"
              >
                <span className="relative z-10 flex items-center gap-2 font-medium">
                  Explore the Ecosystem
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div
        ref={contentRef}
        className="service-wrapper mt-12 flex w-max flex-nowrap gap-6 overflow-visible px-5 sm:px-6 md:mt-16 md:pl-[20%] md:pr-10"
        aria-label="WOW Superagency divisions"
      >
        {divisions.map((item, index) => {
          const Icon = item.icon
          const isHovered = hoveredId === item.id

          return (
            <article
              key={item.id}
              className={`group relative w-[78vw] shrink-0 rounded-2xl border transition-all duration-500 sm:w-[320px] md:w-[360px] lg:w-[390px] ${
                isHovered
                  ? 'border-[#8b7cff]/50 shadow-2xl shadow-[#8b7cff]/20 dark:shadow-[#8b7cff]/30'
                  : 'border-[#d0d0d0] dark:border-white/5'
              }`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Animated gradient background */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.bgGradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Glow effect on hover */}
              <div
                className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
              />

              <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-between p-6 md:p-8">
                {/* Header with icon and number */}
                <div className="flex items-start justify-between">
                  <div
                    className={`rounded-xl p-3 transition-all duration-500 ${
                      isHovered
                        ? 'bg-gradient-to-br from-[#8b7cff] to-[#b794f4] text-white shadow-lg shadow-[#8b7cff]/30'
                        : 'bg-[#f0f0f0] text-[#8b7cff] dark:bg-white/5 dark:text-[#b794f4]'
                    }`}
                  >
                    <Icon className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                  <span
                    className={`font-instrument text-4xl font-normal leading-none transition-colors duration-300 md:text-5xl ${
                      isHovered
                        ? 'text-[#8b7cff]'
                        : 'text-[#d0d0d0] dark:text-white/10'
                    }`}
                  >
                    {String(item.id).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`mt-4 text-2xl font-bold leading-[110%] tracking-[-0.02em] transition-colors duration-300 md:text-3xl ${
                    isHovered
                      ? 'text-[#1a1a1a] dark:text-[#F2F2F2]'
                      : 'text-[#1a1a1a] dark:text-[#F2F2F2]'
                  }`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className={`mt-3 text-sm leading-6 transition-colors duration-300 md:text-base ${
                    isHovered
                      ? 'text-[#333333] dark:text-[#CCCCCC]'
                      : 'text-[#555555] dark:text-[#888888]'
                  }`}
                >
                  {item.description}
                </p>

                {/* Learn more link */}
                <div
                  className={`mt-4 flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                    isHovered
                      ? 'text-[#8b7cff] opacity-100'
                      : 'text-[#8b7cff] opacity-0'
                  }`}
                >
                  <span>Learn more</span>
                  <ArrowRight
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isHovered ? 'translate-x-1' : ''
                    }`}
                  />
                </div>

                {/* Decorative bottom line */}
                <div
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] transition-all duration-500 ${
                    isHovered ? 'w-2/3' : 'w-0'
                  }`}
                />
              </div>
            </article>
          )
        })}
      </div>
  
    </section>
  )
}

export default DevisionOverview


// 'use client'

// import RevealWrapper from '@/components/animation/RevealWrapper'
// import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
// import useHorizontalScroll from '@/hooks/useHorizontalScroll'
// import Link from 'next/link'

// const divisions = [
//   {
//     id: 1,
//     title: 'SoftwareWOW!',
//     description: 'Custom software, mobile apps, and digital products engineered to scale with your ambitions.',
//   },
//   {
//     id: 2,
//     title: 'WOW Marketing',
//     description: 'Performance-driven campaigns that attract qualified leads and turn attention into revenue.',
//   },
//   {
//     id: 3,
//     title: 'WOW Design',
//     description: 'Brand identity and visual systems that make your business impossible to forget.',
//   },
//   {
//     id: 4,
//     title: 'WOW Intelligence',
//     description: 'AI-powered insights and automation that sharpen strategy and accelerate results.',
//   },
//   {
//     id: 5,
//     title: 'WOW Social',
//     description: 'Social strategy and community management that transforms followers into loyal advocates.',
//   },
//   {
//     id: 6,
//     title: 'WOW Accelerate',
//     description: 'Growth programs and coaching designed to fast-track your business to its next milestone.',
//   },
//   {
//     id: 7,
//     title: 'WOW Websites',
//     description: 'High-performance websites built for speed, search visibility, and conversion.',
//   },
//   {
//     id: 8,
//     title: 'WOW Impact',
//     description: 'Purpose-led initiatives and giving programs that amplify your brand and community reach.',
//   },
//   {
//     id: 9,
//     title: 'WOW Host',
//     description: 'Secure, reliable hosting and infrastructure that keeps your business online around the clock.',
//   },
//   {
//     id: 10,
//     title: 'WOW Hub',
//     description: 'A centralized command center for tools, training, and seamless team collaboration.',
//   },
// ]

// const DevisionOverview = () => {
//   const { contentRef, triggerRef } = useHorizontalScroll({
//     extraScroll: 0,
//   })

//   return (
//     <section
//       ref={triggerRef}
//       className="service-section overflow-hidden bg-[#E8E7F7] py-14 transition-colors duration-300 dark:bg-[#111111] md:py-16 lg:py-[88px] xl:py-[100px]"
//       aria-labelledby="divisions-heading"
//     >
//       <div className="container">
//         <div className="grid grid-cols-12 items-start gap-y-6 md:gap-x-8">
//           <div className="col-span-12 lg:col-span-7">
//             <TextAppearAnimation>
//               <h2
//                 id="divisions-heading"
//                 className="text-appear text-left text-secondary dark:text-backgroundBody max-md:text-4xl max-sm:text-3xl"
//               >
//                 Eleven Divisions. <br />
//                 One Growth{' '}
//                 <span className="font-instrument italic text-secondary dark:text-backgroundBody">
//                   Ecosystem.
//                 </span>
//               </h2>
//             </TextAppearAnimation>
//           </div>

//           <div className="col-span-12 lg:col-span-5 lg:text-right">
//             <TextAppearAnimation>
//               <p className="text-appear text-secondary/70 dark:text-backgroundBody/70">
//                 WOW Superagency connects specialized divisions across technology, marketing, AI, design,
//                 websites, social media, sales, hosting, and operations into one coordinated growth system.
//               </p>
//             </TextAppearAnimation>

//             <RevealWrapper className="mt-7 md:mt-14">
//               <Link
//                 href="/services"
//                 className="rv-button rv-button-white block w-full text-center md:inline-block md:w-auto"
//                 aria-label="Explore the WOW Superagency ecosystem"
//               >
//                 <div className="rv-button-top">
//                   <span>Explore the Ecosystem</span>
//                 </div>
//                 <div className="rv-button-bottom">
//                   <span>Explore the Ecosystem</span>
//                 </div>
//               </Link>
//             </RevealWrapper>
//           </div>
//         </div>
//       </div>

//       <div
//         ref={contentRef}
//         className="service-wrapper mt-12 flex w-max flex-nowrap gap-0 overflow-visible px-5 sm:px-6 md:mt-16 md:pl-[20%] md:pr-10"
//         aria-label="WOW Superagency divisions"
//       >
//         {divisions.map((item, index) => (
//           <article
//             key={item.id}
//             className={`min-h-[260px] w-[78vw] shrink-0 border-r border-[#DADDE8] px-6 py-8 transition-colors duration-300 sm:w-[320px] md:w-[360px] md:px-8 md:py-10 lg:w-[390px]
//               ${
//                 index === 0
//                   ? 'bg-[#918CE0] text-white dark:bg-[#171717] dark:text-white'
//                   : 'bg-[#EEF1F5] text-secondary dark:bg-[#171717] dark:text-white'
//               }`}
//           >
//             <div className="flex h-full flex-col justify-between">
//               <div>
//                 <h3
//                   className={`text-2xl font-normal leading-[110%] tracking-[-0.04em] md:text-3xl ${
//                     index === 0 ? 'text-white' : 'text-secondary dark:text-white'
//                   }`}
//                 >
//                   {item.title}
//                 </h3>

//                 <p
//                   className={`mt-5 max-w-[260px] text-sm font-normal leading-6 md:text-base ${
//                     index === 0
//                       ? 'text-white/70'
//                       : 'text-secondary/60 dark:text-backgroundBody/60'
//                   }`}
//                 >
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default DevisionOverview

// 'use client'
// import RevealWrapper from '@/components/animation/RevealWrapper'
// import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
// import useHorizontalScroll from '@/hooks/useHorizontalScroll'
// import Link from 'next/link'

// const divisions = [
//   {
//     id: 1,
//     title: 'SoftwareWOW!',
//     description: 'Custom software, mobile apps, and digital products engineered to scale with your ambitions.',
//   },
//   {
//     id: 2,
//     title: 'WOW Marketing',
//     description: 'Performance-driven campaigns that attract qualified leads and turn attention into revenue.',
//   },
//   {
//     id: 3,
//     title: 'WOW Design',
//     description: 'Brand identity and visual systems that make your business impossible to forget.',
//   },
//   {
//     id: 4,
//     title: 'WOW Intelligence',
//     description: 'AI-powered insights and automation that sharpen strategy and accelerate results.',
//   },
//   {
//     id: 5,
//     title: 'WOW Social',
//     description: 'Social strategy and community management that transforms followers into loyal advocates.',
//   },
//   {
//     id: 6,
//     title: 'WOW Accelerate',
//     description: 'Growth programs and coaching designed to fast-track your business to its next milestone.',
//   },
//   {
//     id: 7,
//     title: 'WOW Websites',
//     description: 'High-performance websites built for speed, search visibility, and conversion.',
//   },
//   {
//     id: 8,
//     title: 'WOW Impact',
//     description: 'Purpose-led initiatives and giving programs that amplify your brand and community reach.',
//   },
//   {
//     id: 9,
//     title: 'WOW Host',
//     description: 'Secure, reliable hosting and infrastructure that keeps your business online around the clock.',
//   },
//   {
//     id: 10,
//     title: 'WOW Hub',
//     description: 'A centralized command center for tools, training, and seamless team collaboration.',
//   },
// ]

// const DevisionOverview = () => {
//   const { contentRef, triggerRef } = useHorizontalScroll({
//     extraScroll: 0,
//   })

//   return (
//     <section
//       ref={triggerRef}
//       className="service-section overflow-hidden bg-[#CBE8DF] pb-14 pt-14 transition-colors duration-300 dark:bg-dark-300 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]"
//       aria-labelledby="divisions-heading">
//       <div className="container">
//         <div className="grid grid-cols-12 items-start gap-y-3 md:gap-x-8">
//           <div className="col-span-12 lg:col-span-7">
//             <TextAppearAnimation>
//               <h2
//                 id="divisions-heading"
//                 className="text-appear text-left text-secondary dark:text-backgroundBody max-md:text-3xl max-sm:text-3xl">
//                 Ten powerful divisions.{' '}
//                 <span className="font-instrument italic text-secondary dark:text-backgroundBody">
//                   One connected ecosystem.
//                 </span>
//               </h2>
//             </TextAppearAnimation>
//           </div>
//           <div className="col-span-12 lg:col-span-5 lg:text-right">
//             <TextAppearAnimation>
//               <p className="text-appear text-secondary/70 dark:text-backgroundBody/70">
//                 WOW Superagency unites specialized teams—marketing, design, technology, AI, and more—under one
//                 coordinated strategy. Get world-class expertise without the complexity of managing multiple vendors.
//               </p>
//             </TextAppearAnimation>
//             <RevealWrapper className="mt-7 md:mt-14">
//               <Link
//                 href="/services"
//                 className="rv-button rv-button-white mx-auto block w-full text-center md:inline-block md:w-auto"
//                 aria-label="Explore the WOW Superagency ecosystem">
//                 <div className="rv-button-top">
//                   <span>Explore the Ecosystem</span>
//                 </div>
//                 <div className="rv-button-bottom">
//                   <span>Explore the Ecosystem</span>
//                 </div>
//               </Link>
//             </RevealWrapper>
//           </div>
//         </div>
//       </div>

//       <div
//         ref={contentRef}
//         className="service-wrapper mt-16 flex flex-col gap-6 overflow-x-hidden max-md:px-5 md:w-fit md:flex-row md:flex-nowrap md:pl-[20%] md:pr-10"
//         aria-label="WOW Superagency divisions">
//         {divisions.map((item) => (
//           <div
//             key={item.id}
//             className="flex w-full flex-1 flex-col gap-4 rounded-none border-t border-t-secondary bg-backgroundBody px-5 py-14 dark:border-t-primary dark:bg-black md:w-[370px] md:flex-row md:gap-[22px] md:px-[25px] md:py-[70px]">
//             <div aria-hidden="true">
//               <p className="font-instrument text-5xl font-normal leading-[64px] text-black dark:text-white max-md:text-3xl">
//                 {String(item.id).padStart(2, '0')}
//               </p>
//             </div>
//             <div className="space-y-4 md:space-y-8">
//               <h3 className="font-normal leading-[110%] tracking-[-1.08px] text-black dark:text-white max-md:text-2xl md:max-w-[200px] md:text-4xl">
//                 {item.title}
//               </h3>
//               <p className="text-base font-normal leading-6 tracking-[0.32px] text-colorText dark:text-backgroundBody/70">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default DevisionOverview
