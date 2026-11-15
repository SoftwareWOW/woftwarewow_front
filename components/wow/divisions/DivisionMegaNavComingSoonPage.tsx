type DivisionMegaNavComingSoonPageProps = {
  divisionLabel: string
  title: string
  description?: string
}

/** Minimal shell for division mega-nav routes until full pages are implemented. */
export default function DivisionMegaNavComingSoonPage({
  divisionLabel,
  title,
  description = 'We are preparing this page. Check back soon or contact us when you are ready.',
}: DivisionMegaNavComingSoonPageProps) {
  return (
    <section className="flex min-h-[min(70vh,720px)] flex-col items-center justify-center px-4 pb-16 pt-28 text-center sm:pt-32 md:pt-36">
      <p className="mb-3 font-outfit text-xs font-light uppercase tracking-[0.2em] text-[#808080]">
        {divisionLabel}
      </p>
      <h1 className="max-w-2xl font-outfit text-3xl font-light leading-tight text-secondary dark:text-backgroundBody sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-lg text-base leading-relaxed text-[#808080]">{description}</p>
    </section>
  )
}