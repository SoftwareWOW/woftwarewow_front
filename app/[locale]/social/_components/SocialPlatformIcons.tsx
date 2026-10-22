import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  PinterestIcon,
  TikTokIcon,
  YoutubeIcon,
} from '@/components/wow/footer/social-brand-icons'

function CanvaIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-8 sm:size-9" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
    </svg>
  )
}

const platforms = [
  { name: 'Instagram', Icon: InstagramIcon },
  { name: 'Facebook', Icon: FacebookIcon },
  { name: 'TikTok', Icon: TikTokIcon },
  { name: 'YouTube', Icon: YoutubeIcon },
  { name: 'Pinterest', Icon: PinterestIcon },
  { name: 'LinkedIn', Icon: LinkedInIcon },
  { name: 'Canva', Icon: CanvaIcon },
] as const

export default function SocialPlatformIcons() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:mt-14 md:gap-8">
      {platforms.map(({ name, Icon }) => (
        <span
          key={name}
          className="inline-flex size-12 items-center justify-center rounded-full text-secondary transition-colors dark:text-backgroundBody sm:size-14"
          title={name}
        >
          <Icon className="size-7 sm:size-8" />
          <span className="sr-only">{name}</span>
        </span>
      ))}
    </div>
  )
}
