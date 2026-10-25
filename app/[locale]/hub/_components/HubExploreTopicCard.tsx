import Link from 'next/link'

const CARD_WIDTH_PX = 370
const IMAGE_HEIGHT_PX = 399

export type HubExploreTopicCardProps = {
  title: string
  description: string
  image: string
  href: string
}

export default function HubExploreTopicCard({ title, description, image, href }: HubExploreTopicCardProps) {
  return (
    <div className="group w-[370px] shrink-0">
      <figure
        className="overflow-hidden rounded-radius-sm"
        style={{ width: CARD_WIDTH_PX, height: IMAGE_HEIGHT_PX }}
      >
        <Link href={href} className="block h-full w-full cursor-pointer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            width={CARD_WIDTH_PX}
            height={IMAGE_HEIGHT_PX}
            className="h-full w-full rounded-radius-sm object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      </figure>
      <h3 className="mb-2.5 mt-[30px] text-2xl leading-[1.1] tracking-normal md:text-[32px]">{title}</h3>
      <p className="max-w-[95%] text-base leading-[1.6] tracking-[0.32px]">{description}</p>
    </div>
  )
}
