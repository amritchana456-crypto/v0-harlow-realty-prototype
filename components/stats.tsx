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
  duration: number = 1500,
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

      // easeOut curve
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
  index,
  shouldAnimate,
}: {
  value: number
  suffix: string
  label: string
  index: number
  shouldAnimate: boolean
}) {
  const count = useCountUp(value, 1500, shouldAnimate)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      className="text-center p-6"
    >
      <div className="text-4xl md:text-5xl font-semibold text-harlow-primary-darker mb-2">
        {shouldAnimate ? count : 0}
        <span className="text-harlow-primary">{suffix}</span>
      </div>
      <p className="text-base text-harlow-black/70 font-medium">{label}</p>
    </motion.div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <SectionWrapper className="py-16 md:py-20">
      <div
        ref={ref}
        className="bg-white/60 backdrop-blur-sm rounded-3xl border border-white/40 shadow-lg"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={index}
              shouldAnimate={isInView}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
