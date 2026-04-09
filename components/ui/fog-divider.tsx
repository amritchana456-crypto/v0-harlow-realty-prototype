import { cn } from '@/lib/utils'

type FogDividerProps = {
  variant?: 'almond-to-white' | 'white-to-almond' | 'almond-fade' | 'evergreen-fade'
  height?: string
  className?: string
}

export function FogDivider({
  variant = 'almond-fade',
  height = '120px',
  className,
}: FogDividerProps) {
  const gradients = {
    'almond-to-white':
      'linear-gradient(180deg, var(--harlow-almond) 0%, rgba(246, 233, 217, 0.5) 50%, rgba(255, 255, 255, 0.8) 100%)',
    'white-to-almond':
      'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(246, 233, 217, 0.5) 50%, var(--harlow-almond) 100%)',
    'almond-fade':
      'linear-gradient(180deg, transparent 0%, rgba(246, 233, 217, 0.4) 40%, var(--harlow-almond) 100%)',
    'evergreen-fade':
      'linear-gradient(180deg, var(--harlow-almond) 0%, rgba(4, 50, 34, 0.05) 50%, rgba(4, 50, 34, 0.1) 100%)',
  }

  return (
    <div
      className={cn('w-full pointer-events-none', className)}
      style={{
        height,
        background: gradients[variant],
      }}
      aria-hidden="true"
    />
  )
}
