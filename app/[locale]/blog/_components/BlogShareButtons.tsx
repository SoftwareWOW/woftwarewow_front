'use client'

import { useToastOptional } from '@/components/wow/shared/ToastProvider'
import { type IconType } from 'react-icons'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaXTwitter } from 'react-icons/fa6'

type SharePlatform = 'facebook' | 'tiktok' | 'instagram' | 'linkedin' | 'twitter'

type ShareLink = {
  name: string
  platform: SharePlatform
  icon: IconType
}

const shareLinks: ShareLink[] = [
  { name: 'Facebook', platform: 'facebook', icon: FaFacebookF },
  { name: 'TikTok', platform: 'tiktok', icon: FaTiktok },
  { name: 'Instagram', platform: 'instagram', icon: FaInstagram },
  { name: 'LinkedIn', platform: 'linkedin', icon: FaLinkedinIn },
  { name: 'Twitter', platform: 'twitter', icon: FaXTwitter },
]

type BlogShareButtonsProps = {
  title: string
  description?: string
}

const openShareWindow = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer,width=640,height=720')
}

const getShareUrl = (platform: SharePlatform, pageUrl: string, title: string, description?: string) => {
  const encodedUrl = encodeURIComponent(pageUrl)
  const encodedTitle = encodeURIComponent(description ? `${title} - ${description}` : title)

  switch (platform) {
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    default:
      return null
  }
}

const BlogShareButtons = ({ title, description }: BlogShareButtonsProps) => {
  const toast = useToastOptional()

  const copyPageLink = async (message: string) => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      toast?.showToast(message)
    } catch {
      toast?.showToast('Could not copy the link. Please copy the page URL manually.', 'error')
    }
  }

  const handleShare = async (platform: SharePlatform, name: string) => {
    const pageUrl = window.location.href
    const shareUrl = getShareUrl(platform, pageUrl, title, description)

    if (platform === 'instagram') {
      await copyPageLink('Link copied. Paste it in your Instagram post or story.')
      return
    }

    if (platform === 'tiktok') {
      await copyPageLink('Link copied. Open TikTok and paste it in your post or bio.')
      return
    }

    if (shareUrl) {
      openShareWindow(shareUrl)
      return
    }

    toast?.showToast(`Sharing to ${name} is not available right now.`, 'error')
  }

  return (
    <ul className="flex items-center gap-2">
      {shareLinks.map(({ name, platform, icon: Icon }) => (
        <li key={platform}>
          <button
            type="button"
            onClick={() => handleShare(platform, name)}
            aria-label={`Share on ${name}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-secondary text-secondary transition-colors duration-300 hover:bg-primary hover:text-secondary dark:border-dark dark:text-backgroundBody dark:hover:bg-primary dark:hover:text-white">
            <Icon className="size-5" aria-hidden />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default BlogShareButtons
