'use client'

import { useState, useEffect } from 'react'
import RevealWrapper from '@/components/animation/RevealWrapper'

import userImg1 from '@/public/images/avatar/review-8.png'
import userImg2 from '@/public/images/avatar/review-6.png'
import userImg3 from '@/public/images/avatar/review-9.png'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import WowSwiperSlideContent from '../LandascapComponets/WowSwiperSlideContent'
const userReviewData = [
  {
    id: 1,
    tags: 'Business Growth & Strategy',
    title:
      'WOW became much more than a service provider. They helped us align our website, marketing, automation, and growth strategy into one cohesive system. Having access to multiple specialists through a single partner made a huge difference.',
    userImg: userImg1,
    userName: 'Michael Carter',
    position: 'Managing Director',
  },
  {
    id: 2,
    tags: 'Website & Digital Experience',
    title:
      'The team delivered a modern website that not only looks exceptional but also performs. The attention to user experience, speed, and conversion optimization has significantly improved how customers interact with our business online.',
    userImg: userImg2,
    userName: 'Emma Richardson',
    position: 'Founder & CEO',
  },
  {
    id: 3,
    tags: 'AI & Automation',
    title:
      'Their approach to AI was refreshingly practical. Instead of chasing trends, they helped us automate workflows, improve efficiency, and create better customer experiences. The impact was immediate and measurable.',
    userImg: userImg3,
    userName: 'Daniel Foster',
    position: 'Operations Director',
  },
  {
    id: 4,
    tags: 'Marketing & Growth',
    title:
      'What impressed us most was how every discipline worked together. From branding and content to marketing and sales systems, everything felt connected. WOW helped us build a stronger foundation for long-term growth.',
    userImg: userImg1,
    userName: 'Sophia Bennett',
    position: 'Business Owner',
  },
]

const WowSuperAgencyClient = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Autoplay functionality - slides from right to left
  useEffect(() => {
    if (!api || !isAutoPlay) return

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [api, isAutoPlay])

  // Track current slide index
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoPlay(false)
  const handleMouseLeave = () => setIsAutoPlay(true)

  // Manual navigation with autoplay control
  const handleManualNavigation = (direction: 'prev' | 'next') => {
    if (!api) return

    setIsAutoPlay(false)

    if (direction === 'next') {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    } else {
      if (api.canScrollPrev()) {
        api.scrollPrev()
      } else {
        api.scrollTo(userReviewData.length - 1)
      }
    }

    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  return (
    <section className="relative mb-14 mt-14 overflow-hidden bg-background py-20 transition-colors duration-300 md:mb-16 md:mt-16 lg:mb-[88px] lg:mt-[88px] lg:py-[120px] dark:lg:py-0 xl:mb-[100px] xl:mt-[100px]">
      {/* Background decorative elements - light mode friendly */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }} />
      </div>
      
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, #ffffff 0%, rgba(0,0,0,0.05)) 100%)',
        }}
      />

      <RevealWrapper className="relative z-10 container pb-6 pt-16 lg:pb-10 lg:pt-[100px]">
        {/* Section Header - New Heading */}
        <div className="text-center mb-4">
          <h2 className="font-['Outfit'] text-[clamp(32px,6vw,64px)] font-normal leading-[1.1] tracking-[-0.03em] text-[#000000] dark:text-[#F2F2F2] mb-4 relative inline-block transition-colors duration-300">
            Trusted By Businesses{' '}
            <span className="font-['Ogg_TRIAL'] italic text-[#8b7cff] dark:text-[#b794f4]">
              Focused On Growth
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] rounded-full animate-pulse"></span>
          </h2>
        </div>
        {/* Carousel Container */}
        <div
          className="relative w-full mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {userReviewData.map((review, index) => (
                <CarouselItem
                  key={review.id}
                  className="pl-2 md:pl-4 basis-full"
                >
                  <div className="p-1">
                    <div className="relative overflow-hidden rounded-2xl transition-all duration-300">
                      {/* Animated border glow */}
                      <div className={`absolute -inset-1 bg-gradient-to-r from-[#8b7cff]/20 via-[#b794f4]/20 to-[#f4a8b8]/20 rounded-2xl blur-xl transition-opacity duration-500 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                      
                      <div className="relative bg-white/80 backdrop-blur-sm dark:bg-dark/80 rounded-2xl border border-[#e5e5e5] dark:border-white/5 transition-colors duration-300 shadow-sm dark:shadow-none">
                        <WowSwiperSlideContent
                          tags={review.tags}
                          title={review.title}
                          userName={review.userName}
                          position={review.position}
                          userImg={review.userImg}
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => handleManualNavigation('prev')}
              className="bg-[#f0f0f0] hover:bg-[#e0e0e0] dark:bg-white/10 dark:hover:bg-white/20 transition-all duration-300 p-3 rounded-full border border-[#d0d0d0] dark:border-white/10 hover:border-[#8b7cff] dark:hover:border-white/30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-[#333333] dark:text-white w-5 h-5 transition-colors duration-300" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2 mx-4">
              {userReviewData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!api) return
                    setIsAutoPlay(false)
                    api.scrollTo(index)
                    setTimeout(() => setIsAutoPlay(true), 5000)
                  }}
                  className={`transition-all duration-500 rounded-full ${
                    index === currentIndex
                      ? 'w-10 h-2.5 bg-gradient-to-r from-[#8b7cff] to-[#b794f4] shadow-lg shadow-[#8b7cff]/30 dark:shadow-[#8b7cff]/50'
                      : 'w-2.5 h-2.5 bg-[#d0d0d0] dark:bg-white/20 hover:bg-[#8b7cff] dark:hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => handleManualNavigation('next')}
              className="bg-[#f0f0f0] hover:bg-[#e0e0e0] dark:bg-white/10 dark:hover:bg-white/20 transition-all duration-300 p-3 rounded-full border border-[#d0d0d0] dark:border-white/10 hover:border-[#8b7cff] dark:hover:border-white/30"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-[#333333] dark:text-white w-5 h-5 transition-colors duration-300" />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-[#999999] dark:text-white/40 font-mono tracking-wider transition-colors duration-300">
              {String(currentIndex + 1).padStart(2, '0')} / {String(userReviewData.length).padStart(2, '0')}
            </span>
          </div>

          {/* Progress Bar - Fixed for light mode */}
          <div className="mt-4 max-w-xs mx-auto">
            <div className="relative h-1 bg-[#e5e5e5] dark:bg-white/10 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] rounded-full transition-all duration-1000 ease-linear"
                style={{
                  width: `${((currentIndex + 1) / userReviewData.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </RevealWrapper>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default WowSuperAgencyClient


// 'use client'

// import { useState, useEffect } from 'react'
// import RevealWrapper from '@/components/animation/RevealWrapper'
// import SwiperSlideContent from '@/components/homepage-03/SwiperSlideContent'
// import userImg1 from '@/public/images/avatar/review-8.png'
// import userImg2 from '@/public/images/avatar/review-6.png'
// import userImg3 from '@/public/images/avatar/review-9.png'

// import {
//   Carousel,
//   CarouselApi,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// const userReviewData = [
//   {
//     id: 1,
//     tags: 'The skeleton plan of a website can be broken down into three components',
//     title: 'Exceptional materials. The most durable glass ever in a smartphone. A beautiful new gold finish, achieved with an atomic-level precision.',
//     userImg: userImg1,
//     userName: 'Kathryn Murphy',
//     position: 'CEO at Vercel',
//   },
//   {
//     id: 2,
//     tags: 'The skeleton plan of a website can be broken down into three components',
//     title: 'Exceptional materials. The most durable glass ever in a smartphone. A beautiful new gold finish, achieved with an atomic-level precision.',
//     userImg: userImg2,
//     userName: 'Zaks Addision',
//     position: 'CEO at W3',
//   },
//   {
//     id: 3,
//     tags: 'The skeleton plan of a website can be broken down into three components',
//     title: 'Exceptional materials. The most durable glass ever in a smartphone. A beautiful new gold finish, achieved with an atomic-level precision.',
//     userImg: userImg3,
//     userName: 'John Dewey',
//     position: 'W3 Dev',
//   },
// ]

// const WowSuperAgencyClient = () => {
//   const [api, setApi] = useState<CarouselApi>()
//   const [isAutoPlay, setIsAutoPlay] = useState(true)
//   const [currentIndex, setCurrentIndex] = useState(0)

//   // Autoplay functionality - slides from right to left
//   useEffect(() => {
//     if (!api || !isAutoPlay) return

//     const interval = setInterval(() => {
//       if (api.canScrollNext()) {
//         api.scrollNext()
//       } else {
//         api.scrollTo(0)
//       }
//     }, 4000) // Change slide every 4 seconds

//     return () => clearInterval(interval)
//   }, [api, isAutoPlay])

//   // Track current slide index
//   useEffect(() => {
//     if (!api) return

//     const onSelect = () => {
//       setCurrentIndex(api.selectedScrollSnap())
//     }

//     api.on('select', onSelect)
//     return () => {
//       api.off('select', onSelect)
//     }
//   }, [api])

//   // Pause autoplay on hover
//   const handleMouseEnter = () => setIsAutoPlay(false)
//   const handleMouseLeave = () => setIsAutoPlay(true)

//   // Manual navigation with autoplay control
//   const handleManualNavigation = (direction: 'prev' | 'next') => {
//     if (!api) return

//     setIsAutoPlay(false)

//     if (direction === 'next') {
//       if (api.canScrollNext()) {
//         api.scrollNext()
//       } else {
//         api.scrollTo(0)
//       }
//     } else {
//       if (api.canScrollPrev()) {
//         api.scrollPrev()
//       } else {
//         api.scrollTo(userReviewData.length - 1)
//       }
//     }

//     // Restart autoplay after manual navigation
//     setTimeout(() => setIsAutoPlay(true), 5000)
//   }

//   return (
//     <section className="relative mb-14 mt-14 overflow-hidden bg-background py-20 transition-colors duration-300 dark:bg-dark md:mb-16 md:mt-16 lg:mb-[88px] lg:mt-[88px] lg:py-[120px] dark:lg:py-0 xl:mb-[100px] xl:mt-[100px]">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 opacity-30 dark:opacity-20">
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'radial-gradient(circle, color-mix(in srgb, currentColor 10%, transparent) 1px, transparent 1px)',
//           backgroundSize: '22px 22px',
//         }} />
//       </div>
      
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0"
//         style={{
//           background: 'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, var(--background) 0%, rgba(0,0,0,0.35)) 100%)',
//         }}
//       />

//       <RevealWrapper className="relative z-10 container pb-6 pt-16 lg:pb-10 lg:pt-[100px]">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative inline-block transition-colors duration-300">
//             <span className="relative z-10">Trusted By Businesses Focused On Growth</span>
//             <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] rounded-full animate-pulse"></span>
//           </h2>
        
//         </div>

//         {/* Carousel Container */}
//         <div
//           className="relative w-full mx-auto"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Carousel
//             setApi={setApi}
//             opts={{
//               align: 'start',
//               loop: true,
//             }}
//             className="w-full"
//           >
//             <CarouselContent className="-ml-2 md:-ml-4">
//               {userReviewData.map((review, index) => (
//                 <CarouselItem
//                   key={review.id}
//                   className="pl-2 md:pl-4 basis-full"
//                 >
//                   <div className="p-1">
//                     <div className="relative overflow-hidden rounded-2xl transition-all duration-300">
//                       {/* Animated border glow */}
//                       <div className={`absolute -inset-1 bg-gradient-to-r from-[#8b7cff]/20 via-[#b794f4]/20 to-[#f4a8b8]/20 rounded-2xl blur-xl transition-opacity duration-500 ${
//                         index === currentIndex ? 'opacity-100' : 'opacity-0'
//                       }`}></div>
                      
//                       <div className="relative bg-background/80 backdrop-blur-sm dark:bg-dark/80 rounded-2xl border border-border/50 dark:border-white/5 transition-colors duration-300">
//                         <SwiperSlideContent
//                           tags={review.tags}
//                           title={review.title}
//                           userName={review.userName}
//                           position={review.position}
//                           userImg={review.userImg}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//           </Carousel>

//           {/* Navigation Buttons */}
//           <div className="flex justify-center gap-3 mt-8">
//             <button
//               onClick={() => handleManualNavigation('prev')}
//               className="bg-foreground/5 hover:bg-foreground/10 dark:bg-white/10 dark:hover:bg-white/20 transition-all duration-300 p-3 rounded-full border border-border/30 dark:border-white/10 hover:border-foreground/20 dark:hover:border-white/30"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft className="text-foreground/70 dark:text-white w-5 h-5 transition-colors duration-300" />
//             </button>

//             {/* Dots */}
//             <div className="flex items-center gap-2 mx-4">
//               {userReviewData.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     if (!api) return
//                     setIsAutoPlay(false)
//                     api.scrollTo(index)
//                     setTimeout(() => setIsAutoPlay(true), 5000)
//                   }}
//                   className={`transition-all duration-500 rounded-full ${
//                     index === currentIndex
//                       ? 'w-10 h-2.5 bg-gradient-to-r from-[#8b7cff] to-[#b794f4] shadow-lg shadow-[#8b7cff]/30 dark:shadow-[#8b7cff]/50'
//                       : 'w-2.5 h-2.5 bg-foreground/20 dark:bg-white/20 hover:bg-foreground/40 dark:hover:bg-white/40'
//                   }`}
//                   aria-label={`Go to testimonial ${index + 1}`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={() => handleManualNavigation('next')}
//               className="bg-foreground/5 hover:bg-foreground/10 dark:bg-white/10 dark:hover:bg-white/20 transition-all duration-300 p-3 rounded-full border border-border/30 dark:border-white/10 hover:border-foreground/20 dark:hover:border-white/30"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight className="text-foreground/70 dark:text-white w-5 h-5 transition-colors duration-300" />
//             </button>
//           </div>

//           {/* Slide Counter */}
//           <div className="text-center mt-4">
//             <span className="text-sm text-foreground/40 dark:text-white/40 font-mono tracking-wider transition-colors duration-300">
//               {String(currentIndex + 1).padStart(2, '0')} / {String(userReviewData.length).padStart(2, '0')}
//             </span>
//           </div>

//           {/* Progress Bar */}
//           <div className="mt-4 max-w-xs mx-auto">
//             <div className="relative h-0.5 bg-foreground/10 dark:bg-white/10 rounded-full overflow-hidden">
//               <div
//                 className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] rounded-full transition-all duration-1000 ease-linear"
//                 style={{
//                   width: `${((currentIndex + 1) / userReviewData.length) * 100}%`,
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </RevealWrapper>

//       <style jsx>{`
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.3;
//           }
//           50% {
//             opacity: 0.6;
//           }
//         }

//         @keyframes shimmer {
//           0% {
//             background-position: -200% center;
//           }
//           100% {
//             background-position: 200% center;
//           }
//         }

//         .animate-pulse {
//           animation: pulse 2s ease-in-out infinite;
//         }

//         .animate-shimmer {
//           background: linear-gradient(
//             90deg,
//             transparent 0%,
//             rgba(139, 124, 255, 0.1) 50%,
//             transparent 100%
//           );
//           background-size: 200% auto;
//           animation: shimmer 3s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   )
// }

// export default WowSuperAgencyClient