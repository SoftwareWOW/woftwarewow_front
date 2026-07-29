'use client'

import { useToastOptional } from '@/components/wow/shared/ToastProvider'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'

type CareerShareButtonProps = {
  title: string
  description?: string
}

export default function CareerShareButton({ title, description }: CareerShareButtonProps) {
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
    <ButtonComponent type="button" onClick={handleShare} variant="secondary" fullWidth>
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
    <ButtonComponent type="button" onClick={handleShare} variant="secondary" ariaLabel="Share this position">
      Share
    </ButtonComponent>
  )
}
