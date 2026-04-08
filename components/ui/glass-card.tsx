import { cn } from '@/lib/utils'
import { type ElementType, type ComponentPropsWithoutRef } from 'react'

type GlassCardProps<T extends ElementType = 'div'> = {
  as?: T
  variant?: 'default' | 'navbar' | 'subtle'
  children: React.ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

export function GlassCard<T extends ElementType = 'div'>({
  as,
  variant = 'default',
  children,
  className,
  ...props
}: GlassCardProps<T>) {
  const Component = as || 'div'

  const variantStyles = {
    default:
      'backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg',
    navbar:
      'backdrop-blur-md bg-white/8 border border-white/15 rounded-2xl shadow-lg',
    subtle:
      'backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl shadow-md',
  }

  return (
    <Component className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </Component>
  )
}
