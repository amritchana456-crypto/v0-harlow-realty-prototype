'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/section-wrapper'

const stats = [
  { value: 500, suffix: '+', label: 'Properties Sold' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 24, suffix: '/7', label: 'Support Available' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

function useCountUp(
  end: number,
  duration: number = 1200,
  shouldStart: boolean = false
) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // easeOut curve for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, shouldStart])

  return count
}

function StatItem({
  value,
  suffix,
  label,
  shouldAnimate,
}: {
  value: number
  suffix: string
  label: string
  shouldAnimate: boolean
}) {
  const count = useCountUp(value, 1200, shouldAnimate)

  return (
    <div className="flex flex-col items-center justify-center py-6 px-4 md:py-8 md:px-6">
      <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-harlow-evergreen mb-1">
        {shouldAnimate ? count : 0}
        <span className="text-harlow-evergreen/70">{suffix}</span>
      </div>
      <p className="text-sm md:text-base text-harlow-text-muted font-medium text-center">
        {label}
      </p>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <SectionWrapper className="py-12 md:py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto"
      >
        {/* Horizontal Pill Container */}
        <div className="glass-almond-solid rounded-full border border-harlow-almond-dark/20 shadow-lg overflow-hidden">
          {/* Desktop: 4 in a row | Mobile: 2x2 grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  ${index < stats.length - 1 ? 'lg:border-r lg:border-harlow-almond-dark/15' : ''}
                  ${index < 2 ? 'border-b lg:border-b-0 border-harlow-almond-dark/15' : ''}
                  ${index % 2 === 0 ? 'border-r lg:border-r-0 border-harlow-almond-dark/15' : ''}
                `}
              >
                <StatItem
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  shouldAnimate={isInView}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
