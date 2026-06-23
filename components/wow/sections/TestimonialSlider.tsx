'use client'

import { useState, useEffect } from 'react'
import SwiperSlideContent from '@/components/homepage-03/SwiperSlideContent'
import userImg1 from '@/public/images/avatar/review-8.png'
import userImg2 from '@/public/images/avatar/review-6.png'
import userImg3 from '@/public/images/avatar/review-9.png'

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

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % userReviewData.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToPrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + userReviewData.length) % userReviewData.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const currentReview = userReviewData[currentIndex]

  return (
    <div className="relative w-full mx-auto">
      {/* Slide Container */}
      <div className="relative overflow-hidden">
        <div
          className={`transition-all duration-500 ease-in-out ${
            isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <SwiperSlideContent
            tags={currentReview.tags}
            title={currentReview.title}
            userName={currentReview.userName}
            position={currentReview.position}
            userImg={currentReview.userImg}
          />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/30"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2 mx-4">
          {userReviewData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-10 h-2.5 bg-primary'
                  : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/30"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-3 text-sm text-white/50">
        {currentIndex + 1} / {userReviewData.length}
      </div>
    </div>
  )
}

export default TestimonialSlider