import { cn } from '@/lib/utils'

type FogDividerProps = {
  fromColor?: string
  toColor?: string
  height?: string
  className?: string
}

export function FogDivider({
  fromColor = 'transparent',
  toColor = '#6FAFBE',
  height = '120px',
  className,
}: FogDividerProps) {
  return (
    <div
      className={cn('w-full pointer-events-none', className)}
      style={{
        height,
        background: `linear-gradient(180deg, ${fromColor} 0%, ${toColor} 100%)`,
      }}
      aria-hidden="true"
    />
  )
}
