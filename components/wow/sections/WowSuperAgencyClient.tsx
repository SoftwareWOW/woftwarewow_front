'use client'

import { useState, useEffect } from 'react'
import RevealWrapper from '@/components/animation/RevealWrapper'
import SwiperSlideContent from '@/components/homepage-03/SwiperSlideContent'
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

const userReviewData = [
  {
    id: 1,
    tags: 'The skeleton plan of a website can be broken down into three components',
    title: 'Exceptional materials. The most durable glass ever in a smartphone. A beautiful new gold finish, achieved with an atomic-level precision.',
    userImg: userImg1,
    userName: 'Kathryn Murphy',
    position: 'CEO at Vercel',
  },
  {
    id: 2,
    tags: 'The skeleton plan of a website can be broken down into three components',
    title: 'Exceptional materials. The most durable glass ever in a smartphone. A beautiful new gold finish, achieved with an atomic-level precision.',
    userImg: userImg2,
    userName: 'Zaks Addision',
    position: 'CEO at W3',
  },
  {
    id: 3,
    tags: 'The skeleton plan of a website can be broken down into three components',
    title: 'Exceptional materials. The most durable glass ever in a smartphone. A beautiful new gold finish, achieved with an atomic-level precision.',
    userImg: userImg3,
    userName: 'John Dewey',
    position: 'W3 Dev',
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
    }, 4000) // Change slide every 4 seconds

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

    // Restart autoplay after manual navigation
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  return (
    <section className="relative mb-14 mt-14 overflow-hidden bg-dark py-20 dark:py-0 md:mb-16 md:mt-16 lg:mb-[88px] lg:mt-[88px] lg:py-[120px] dark:lg:py-0 xl:mb-[100px] xl:mt-[100px]">
      <RevealWrapper className="container pb-6 pt-16 lg:pb-10 lg:pt-[100px]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            <span className="relative z-10">What Our Clients Say</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-pulse"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real reviews from real people who use our platform
          </p>
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
                      <div className={`absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl transition-opacity duration-500 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                      
                      <div className="relative">
                        <SwiperSlideContent
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
              className="bg-white/10 hover:bg-white/20 transition-all duration-300 p-3 rounded-full border border-white/10 hover:border-white/30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-white w-5 h-5" />
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
                      ? 'w-10 h-2.5 bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/50'
                      : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => handleManualNavigation('next')}
              className="bg-white/10 hover:bg-white/20 transition-all duration-300 p-3 rounded-full border border-white/10 hover:border-white/30"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-white w-5 h-5" />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-white/50 font-mono tracking-wider">
              {String(currentIndex + 1).padStart(2, '0')} / {String(userReviewData.length).padStart(2, '0')}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 max-w-xs mx-auto">
            <div className="relative h-0.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-linear"
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

// import RevealWrapper from '@/components/animation/RevealWrapper'
// import SwiperSlideContent from '@/components/homepage-03/SwiperSlideContent'
// import SectionHeader from '@/components/shared/SectionHeader'
// import companyClient1 from '@/public/images/icons/company/client-1.svg'
// import companyClient2 from '@/public/images/icons/company/client-2.svg'
// import companyClient3 from '@/public/images/icons/company/client-3.svg'
// import companyClient4 from '@/public/images/icons/company/client-4.svg'
// import companyClient5 from '@/public/images/icons/company/client-5.svg'
// import companyClient6 from '@/public/images/icons/company/client-6.svg'
// import companyClient7 from '@/public/images/icons/company/client-7.svg'
// import companyClient8 from '@/public/images/icons/company/client-8.svg'
// import companyClient9 from '@/public/images/icons/company/client-9.svg'

// // ✅ Import your local Swiper CSS instead of the package CSS
// import '@/scss/vendor/_swiper.min.scss'

// // Use dynamic import for Swiper
// import dynamic from 'next/dynamic'
// import { Autoplay, Pagination } from 'swiper/modules'

// // Dynamically import Swiper components with SSR disabled
// const Swiper = dynamic(
//   () => import('swiper/react').then((mod) => mod.Swiper),
//   { ssr: false }
// )

// const SwiperSlide = dynamic(
//   () => import('swiper/react').then((mod) => mod.SwiperSlide),
//   { ssr: false }
// )

// // Your user data
// import userImg1 from '@/public/images/avatar/review-8.png'
// import userImg2 from '@/public/images/avatar/review-6.png'
// import userImg3 from '@/public/images/avatar/review-9.png'

// const userReviewData = [
//   {
//     id: 1,
//     tags: 'The skeleton plan of a website can be broken down into three components',
//     title: 'Exceptional materials. The most durable glass ever in a The Member Reviews section has additional guidelines from the Community',
//     userImg: userImg1,
//     userName: 'Kathryn Murphy',
//     position: 'CEO at Vercel',
//   },
//   {
//     id: 2,
//     tags: 'The skeleton plan of a website can be broken down into three components',
//     title: 'Exceptional materials. The most durable glass ever in a smartphone. A beautiful new gold finish, achieved with an atomic-level.',
//     userImg: userImg2,
//     userName: 'Zaks Addision',
//     position: 'CEO at W3',
//   },
//   {
//     id: 3,
//     tags: 'The skeleton plan of a website can be broken down into three components',
//     title: 'Exceptional materials. The most durable glass ever in a smartphone. A beautiful new gold finish, achieved with an atomic-level.',
//     userImg: userImg3,
//     userName: 'John Dewey',
//     position: 'W3 Dev',
//   },
// ]

// const WowSuperAgencyClient = () => {
//   return (
//     <section className="relative mb-14 mt-14 overflow-hidden bg-dark py-20 dark:py-0 md:mb-16 md:mt-16 lg:mb-[88px] lg:mt-[88px] lg:py-[120px] dark:lg:py-0 xl:mb-[100px] xl:mt-[100px]">
//       <RevealWrapper className="container pb-6 pt-16 lg:pb-10 lg:pt-[100px]">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           loop
//           pagination={{
//             clickable: true,
//             el: '.swiper-custom-pagination',
//           }}
//           speed={1500}
//           allowTouchMove
//           autoplay={{
//             delay: 3700,
//             disableOnInteraction: false,
//           }}
//           style={{ minHeight: '350px' }}>
//           {userReviewData.map(({ id, title, tags, userName, position, userImg }) => (
//             <SwiperSlide key={id}>
//               <SwiperSlideContent tags={tags} title={title} userName={userName} position={position} userImg={userImg} />
//             </SwiperSlide>
//           ))}
//           <div className="swiper-custom-pagination mt-6 flex justify-center"></div>
//         </Swiper>
//       </RevealWrapper>
//     </section>
//   )
// }

// export default WowSuperAgencyClient