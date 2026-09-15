type SectionDecorativeBackgroundProps = {
  src?: string;
  fallbackSrc?: string;
  wrapperClassName?: string;
  imgClassName?: string;
};

/** Decorative section/hero background with CMS URL override and static fallback. */
export default function SectionDecorativeBackground({
  src,
  fallbackSrc = '/images/hero-gradient-background.png',
  wrapperClassName = 'pointer-events-none absolute left-0 top-0 -z-10 blur-[65px] md:-top-[10%] lg:-left-[17%] 2xl:left-0',
  imgClassName = '-top-[10%] left-0 scale-50',
}: SectionDecorativeBackgroundProps) {
  return (
    <div className={wrapperClassName}>
      <img src={src ?? fallbackSrc} alt="" aria-hidden className={imgClassName} />
    </div>
  );
}
