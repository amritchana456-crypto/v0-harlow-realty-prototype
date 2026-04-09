'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionWrapper } from '@/components/ui/section-wrapper'

export function FeaturedAgent() {
  return (
    <SectionWrapper id="agents" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-harlow-evergreen mb-4">
            Your Trusted Partners
          </h2>
          <p className="text-lg md:text-xl text-harlow-text-muted max-w-2xl mx-auto leading-relaxed">
            Meet the people behind every successful home journey.
          </p>
        </motion.div>

        {/* Agent Video Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative"
        >
          <div className="glass-almond-solid rounded-3xl border border-harlow-almond-dark/20 shadow-xl overflow-hidden">
            {/* Video Container */}
            <div className="relative aspect-video w-full">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
              >
                <source
                  src="https://videos.pexels.com/video-files/7578554/7578554-uhd_2560_1440_30fps.mp4"
                  type="video/mp4"
                />
              </video>
              {/* Subtle overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-harlow-evergreen/40 via-transparent to-transparent" />
            </div>

            {/* Agent Info */}
            <div className="p-8 md:p-10 lg:p-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-harlow-evergreen mb-2">
                    The Harlow Team
                  </h3>
                  <p className="text-harlow-text-muted text-lg">
                    Sarah Mitchell & Chris Anderson
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="relative w-14 h-14 rounded-full border-3 border-harlow-almond overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face"
                        alt="Sarah Mitchell"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-14 h-14 rounded-full border-3 border-harlow-almond overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                        alt="Chris Anderson"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-harlow-text-muted">
                    15+ years combined experience
                  </p>
                </div>
              </div>

              <p className="mt-6 text-harlow-text-dark/80 leading-relaxed max-w-3xl">
                With over a decade of experience in the Greater Toronto Area,
                we&apos;ve helped hundreds of families find their perfect home.
                Our approach combines local expertise with personalized service
                to make your real estate journey seamless and rewarding.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
