import { cn } from '@/utils/cn'
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type CardProps<T extends ElementType = 'div'> = {
  as?: T
  children?: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

const Card = <T extends ElementType = 'div'>({ as, className, children, ...props }: CardProps<T>) => {
  const Component = as || 'div'

  return (
    <Component className={cn('card', className)} {...props}>
      {children}
    </Component>
  )
}

export default Card
