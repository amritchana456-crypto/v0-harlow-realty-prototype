'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { Home, DollarSign, Truck } from 'lucide-react'

const steps = [
  {
    icon: Home,
    title: 'Buy',
    description:
      'Find your dream home with our curated selection of properties and expert guidance through every step of the purchase process.',
  },
  {
    icon: DollarSign,
    title: 'Sell',
    description:
      'Get the best value for your property with our market expertise, professional staging advice, and strategic pricing.',
  },
  {
    icon: Truck,
    title: 'Move',
    description:
      'Experience a seamless transition to your new home with our trusted network of moving and settlement services.',
  },
]

export function ProcessSection() {
  return (
    <SectionWrapper id="process" className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-harlow-evergreen mb-4">
          How We Help
        </h2>
        <p className="text-lg md:text-xl text-harlow-text-muted max-w-2xl mx-auto">
          Your journey to the perfect home, simplified.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.15,
            }}
            className="text-center"
          >
            {/* Icon container */}
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-harlow-evergreen/10 mb-6">
              <step.icon
                size={32}
                className="text-harlow-evergreen"
                strokeWidth={1.5}
              />
            </div>

            {/* Step number */}
            <div className="text-sm font-medium text-harlow-text-muted mb-2">
              Step {index + 1}
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-semibold text-harlow-evergreen mb-4">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-harlow-text-muted leading-relaxed max-w-sm mx-auto">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
