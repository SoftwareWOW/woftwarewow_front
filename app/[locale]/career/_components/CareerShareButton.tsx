'use client'

import { useToastOptional } from '@/components/wow/shared/ToastProvider'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import { Share2 } from 'lucide-react'

type CareerShareButtonProps = {
  title: string
  description?: string
  className?: string
}

export default function CareerShareButton({ title, description, className = '' }: CareerShareButtonProps) {
  const toast = useToastOptional()

  const handleShare = async () => {
    const shareData = {
      title,
      text: description,
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
        return
      } catch {
        // Fall through to clipboard copy when share is cancelled or fails.
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href)
      toast?.showToast('Link copied to clipboard.')
    } catch {
      toast?.showToast('Could not copy the link. Please copy the page URL manually.', 'error')
    }
  }

  return (
    <ButtonComponent type="button" onClick={handleShare} variant="secondary" className={className}>
      Share To
    </ButtonComponent>
  )
}

export function CareerShareIconButton({ title, description }: CareerShareButtonProps) {
  const toast = useToastOptional()

  const handleShare = async () => {
    const shareData = {
      title,
      text: description,
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
        return
      } catch {
        // Fall through to clipboard copy.
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href)
      toast?.showToast('Link copied to clipboard.')
    } catch {
      toast?.showToast('Could not copy the link.', 'error')
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label="Share this position"
      className="inline-flex size-12 shrink-0 items-center justify-center rounded-radius-sm border border-black/10 bg-backgroundBody text-secondary transition-colors hover:border-primary/30 hover:bg-primary/5 dark:border-white/10 dark:bg-dark dark:text-backgroundBody dark:hover:bg-primary/10">
      <Share2 className="size-4" aria-hidden />
    </button>
  )
}
