const DEFAULT_HEADLINE =
  'Why work with an agency when you can work with a Superagency?'
const DEFAULT_LEAD =
  "We're the Superagency with the expertise to deliver beyond the limits of a traditional agency."

type WowHeroServerHeadlineProps = {
  headline?: string | null
  lead?: string | null
}

/** Server-rendered hero copy for faster LCP; removed after client hero mounts. */
export default function WowHeroServerHeadline({
  headline,
  lead,
}: WowHeroServerHeadlineProps) {
  const title = headline?.trim() || DEFAULT_HEADLINE
  const subtitle = lead?.trim() || DEFAULT_LEAD

  return (
    <div
      id="wow-hero-ssr-headline"
      className="
        pointer-events-none
        fixed
        inset-x-0
        top-0
        z-[5]
        flex
        min-h-dvh
        flex-col
        justify-center
        bg-[#ededed]
        px-[6vw]
        dark:bg-[#0D0D0D]
      "
    >
      <h1
        className="
          max-w-4xl
          break-words
          font-outfit
          text-[clamp(1.85rem,8vw,4.5rem)]
          font-light
          leading-[1.05]
          tracking-tight
          text-[#0D0D0D]
          dark:text-[#F2F2F2]
        "
      >
        {title}
      </h1>
      <p
        className="
          mt-8
          max-w-xl
          font-outfit
          text-base
          font-light
          text-[#333333]/85
          dark:text-[#F2F2F2]/85
          md:text-lg
        "
      >
        {subtitle}
      </p>
    </div>
  )
}
