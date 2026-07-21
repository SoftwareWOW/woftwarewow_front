const galleryData = [
  {
    id: 1,
    src: '/images/wow/Hero/career/career (1).png',
    alt: 'Team collaborating in modern office space',
    className: 'w-full lg:w-full lg:object-cover',
    order: 'md:order-4 lg:order-first',
  },
  {
    id: 2,
    src: '/images/wow/Hero/career/career (2).png',
    alt: 'Creative workshop session with design team',
    className: 'w-full lg:w-1/3 lg:absolute lg:top-[57px] z-10',
    order: 'place-self-start',
  },
  {
    id: 3,
    src: '/images/wow/Hero/career/career (3).png',
    alt: 'Modern collaborative workspace environment',
    className: 'w-full lg:absolute lg:bottom-10 lg:w-fit -z-0',
    order: 'lg:place-self-end',
  },
  {
    id: 4,
    src: '/images/wow/Hero/career/career (4).png',
    alt: 'Team building and social activities',
    className: 'w-full',
    order: '',
  },
]

const CompanyGallery = () => {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-[1440px] max-lg:px-4">
        <div className="relative grid grid-cols-1 max-lg:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {galleryData.map((image) => (
            <figure key={image.id} className={`w-full ${image.order}`}>
              <img src={image.src} alt={image.alt} className={image.className} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyGallery
