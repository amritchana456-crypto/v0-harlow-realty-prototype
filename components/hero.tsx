'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Beautiful modern home exterior with landscaped garden"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(232, 248, 251, 0.85) 0%, rgba(184, 228, 240, 0.75) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-harlow-black leading-tight mb-6 text-balance"
        >
          Find Your Perfect Home in Toronto
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-lg md:text-xl text-harlow-black/70 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty"
        >
          Experience premium real estate services with Harlow Realty. Our expert
          team is dedicated to helping you discover the home of your dreams in
          Toronto and the Greater Toronto Area.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-harlow-primary hover:bg-harlow-primary-dark text-harlow-black font-medium px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="#properties">View Properties</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-harlow-primary-darker text-harlow-primary-darker hover:bg-harlow-primary-light font-medium px-8 py-6 text-base rounded-xl transition-all duration-300"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
