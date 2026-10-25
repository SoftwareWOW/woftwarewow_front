import Link from 'next/link'

/** Display size of home-11 `service-item-*.png` assets in ServicesV10. */
export const SERVICES_V10_CARD_WIDTH_PX = 370
export const SERVICES_V10_IMAGE_HEIGHT_PX = 399

export type ServicesV10CardProps = {
  title: string
  description: string
  image: string
  href: string
  linkTarget?: string
  className?: string
}

export default function ServicesV10Card({
  title,
  description,
  image,
  href,
  linkTarget,
  className = '',
}: ServicesV10CardProps) {
  return (
    <div className={`group w-[370px] shrink-0 cursor-fancy ${className}`.trim()}>
      <figure
        className="hero-video-container overflow-hidden"
        style={{ width: SERVICES_V10_CARD_WIDTH_PX, height: SERVICES_V10_IMAGE_HEIGHT_PX }}
      >
        <Link href={href} target={linkTarget} className="hero-video block h-full w-full cursor-fancy">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            width={SERVICES_V10_CARD_WIDTH_PX}
            height={SERVICES_V10_IMAGE_HEIGHT_PX}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      </figure>
      <h3 className="mb-2.5 mt-[30px] text-2xl leading-[1.1] tracking-normal md:text-[32px]">{title}</h3>
      <p className="max-w-[95%] text-base leading-[1.6] tracking-[0.32px]">{description}</p>
    </div>
  )
}
