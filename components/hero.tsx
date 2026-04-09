'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/5644166/5644166-uhd_2732_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Warm cinematic overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(246, 233, 217, 0.4) 0%, rgba(246, 233, 217, 0.2) 50%, rgba(246, 233, 217, 0.5) 100%)',
          }}
        />
      </div>

      {/* Hero Content - Delayed reveal at 5 seconds */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: 5,
          }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-harlow-evergreen leading-tight mb-6 text-balance"
        >
          Welcome to Toronto&apos;s Premium{' '}
          <span className="font-accent text-harlow-evergreen">Home</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: 5.2,
          }}
          className="text-lg md:text-xl text-harlow-text-dark/80 max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          Discover exceptional properties with personalized service from our
          dedicated team of real estate professionals.
        </motion.p>
      </div>

      {/* Atmospheric fog separator at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-20 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(246, 233, 217, 0.3) 30%, rgba(246, 233, 217, 0.7) 70%, var(--harlow-almond) 100%)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
