type ImagePlaceholderProps = {
  className?: string
  label?: string
  aspectClassName?: string
}

const ImagePlaceholder = ({
  className = '',
  label = 'Image placeholder',
  aspectClassName = 'aspect-[16/7]',
}: ImagePlaceholderProps) => (
  <div
    className={`flex items-center justify-center rounded-radius-md border border-dashed border-black/10 bg-black/[0.03] text-sm text-muted dark:border-white/10 dark:bg-white/[0.04] ${aspectClassName} ${className}`}
    aria-hidden>
    {label}
  </div>
)

export default ImagePlaceholder
