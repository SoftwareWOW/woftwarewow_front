import Image from 'next/image'
import ImagePlaceholder from './ImagePlaceholder'

type CaseStudySectionImageProps = {
  src?: string
  alt?: string
  aspectClassName?: string
  className?: string
  placeholderLabel?: string
}

const CaseStudySectionImage = ({
  src,
  alt = '',
  aspectClassName = 'aspect-[16/7]',
  className = '',
  placeholderLabel = 'Image placeholder',
}: CaseStudySectionImageProps) => {
  if (!src) {
    return (
      <ImagePlaceholder
        className={className}
        aspectClassName={aspectClassName}
        label={placeholderLabel}
      />
    )
  }

  return (
    <div
      className={`relative overflow-hidden rounded-radius-md ${aspectClassName} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 1320px"
      />
    </div>
  )
}

export default CaseStudySectionImage
