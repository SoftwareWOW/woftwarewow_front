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

// // src/types/swiper.d.ts
// declare module 'swiper' {
//   export * from 'swiper/types'
// }

// declare module 'swiper/react' {
//   export * from 'swiper/react'
// }

// declare module 'swiper/modules' {
//   export * from 'swiper/modules'
// }

// // CSS modules - use string literals
// declare module 'swiper/css' {}
// declare module 'swiper/css/autoplay' {}
// declare module 'swiper/css/pagination' {}
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
//           }}>
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