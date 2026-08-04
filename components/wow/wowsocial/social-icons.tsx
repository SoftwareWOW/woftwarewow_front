type IconProps = { className?: string }

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FEDA75" />
          <stop offset="35%" stopColor="#FA7E1E" />
          <stop offset="65%" stopColor="#D62976" />
          <stop offset="100%" stopColor="#962FBF" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#ig-grad)" />
      <rect
        x="5.5"
        y="5.5"
        width="13"
        height="13"
        rx="4"
        fill="none"
        stroke="#fff"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="17" cy="7" r="1.1" fill="#fff" />
    </svg>
  )
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#010101" />
      <path
        d="M15.9 5.2c.4 1.6 1.5 2.7 3.1 2.9v2.2c-1.2.1-2.3-.2-3.3-.9v4.4c0 3-2.5 5.1-5.3 4.4-2-.5-3.3-2.4-3.2-4.5.1-2.3 2.1-4.1 4.4-4v2.4c-.3 0-.6 0-.9.1-1 .2-1.6 1.1-1.5 2.1.1.9.9 1.6 1.9 1.6 1 0 1.9-.8 1.9-1.9V5.2h2.9z"
        fill="#fff"
      />
      <path
        d="M13.2 5.2h1.5c.1.6.2 1.1.4 1.6-.7-.4-1.4-1-1.9-1.6z"
        fill="#25F4EE"
        opacity=".9"
      />
    </svg>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#1877F2" />
      <path
        d="M15.1 12.6h-2v6.9h-2.8v-6.9H8.8v-2.4h1.5V8.7c0-1.9 1.1-3 2.9-3 .8 0 1.6.1 1.6.1v1.8h-.9c-.9 0-1.2.6-1.2 1.2v1.4h2.1l-.3 2.4z"
        fill="#fff"
      />
    </svg>
  )
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#0A66C2" />
      <path
        d="M7.6 9.6H5.2V19h2.4V9.6zM6.4 8.4a1.4 1.4 0 100-2.8 1.4 1.4 0 000 2.8zM19 13.7c0-2.6-1.4-3.8-3.2-3.8-1.5 0-2.1.8-2.5 1.4V9.6H11c0 .7 0 9.4 0 9.4h2.4v-5.2c0-.3 0-.6.1-.8.2-.6.7-1.1 1.5-1.1 1 0 1.5.8 1.5 2V19H19v-5.3z"
        fill="#fff"
      />
    </svg>
  )
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect y="4" width="24" height="16" rx="5" fill="#FF0000" />
      <path d="M10 8.6l6 3.4-6 3.4V8.6z" fill="#fff" />
    </svg>
  )
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="12" fill="#000" />
      <path
        d="M13.7 10.9L18.4 5.5h-1.1l-4.1 4.7-3.3-4.7H6l4.9 7.1-4.9 5.7h1.1l4.3-5 3.4 5H18l-4.3-6.4zm-1.5 1.8l-.5-.7-3.9-5.6h1.7l3.2 4.5.5.7 4.1 5.9h-1.7l-3.4-4.8z"
        fill="#fff"
      />
    </svg>
  )
}
