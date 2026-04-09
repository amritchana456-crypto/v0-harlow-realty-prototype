'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'How do I start the home buying process with Harlow Realty?',
    answer:
      'Getting started is simple. Contact us through our form or give us a call, and we will schedule a consultation to understand your needs, budget, and preferences. From there, we will create a personalized search plan and guide you through every step of the journey.',
  },
  {
    question: 'What areas do you serve in the Greater Toronto Area?',
    answer:
      'We serve all of Toronto and the GTA including Mississauga, Oakville, Burlington, Markham, Vaughan, Richmond Hill, and surrounding areas. Our team has deep local expertise in each of these markets.',
  },
  {
    question: 'How long does it typically take to buy or sell a home?',
    answer:
      'The timeline varies based on market conditions and individual circumstances. On average, buying a home takes 2-3 months from initial search to closing, while selling typically takes 1-2 months. We work efficiently to meet your timeline needs.',
  },
]

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: { question: string; answer: string }
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      className="border-b border-harlow-almond-dark/20"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl font-medium text-harlow-evergreen pr-8 group-hover:text-harlow-evergreen-light transition-colors">
          {faq.question}
        </span>
        <ChevronDown
          size={24}
          className={cn(
            'flex-shrink-0 text-harlow-evergreen/60 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-harlow-text-muted leading-relaxed pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <SectionWrapper id="faq" className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-harlow-evergreen mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl text-harlow-text-muted max-w-2xl mx-auto">
          Find answers to common questions about working with us.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <div className="glass-almond-solid rounded-2xl border border-harlow-almond-dark/20 px-6 md:px-10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
