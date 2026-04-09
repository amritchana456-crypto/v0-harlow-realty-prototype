'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { TestimonialCard } from '@/components/ui/testimonial-card'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'Jennifer Thompson',
    location: 'Oakville',
    quote:
      'Harlow Realty made our dream home a reality. Their attention to detail and market knowledge is unmatched.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'David Park',
    location: 'Toronto',
    quote:
      'Professional, responsive, and truly cared about finding the right property for my family. Highly recommend!',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Lisa Chen',
    location: 'Mississauga',
    quote:
      'From our first meeting to closing day, the team at Harlow was exceptional. They exceeded every expectation.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Robert Santos',
    location: 'Burlington',
    quote:
      "We've worked with many agents over the years. None compare to the service we received from Harlow Realty.",
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Amanda Williams',
    location: 'Toronto',
    quote:
      'Sold our condo in just two weeks above asking price. The marketing strategy was brilliant.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - visibleCount)
  const canGoPrev = currentIndex > 0
  const canGoNext = currentIndex < maxIndex

  const goToPrev = useCallback(() => {
    if (canGoPrev) {
      setCurrentIndex((prev) => prev - 1)
    }
  }, [canGoPrev])

  const goToNext = useCallback(() => {
    if (canGoNext) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      // Loop back to beginning
      setCurrentIndex(0)
    }
  }, [canGoNext])

  // Auto-play every 3 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      goToNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [goToNext, isPaused])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToPrev, goToNext])

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setIsPaused(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50

    if (distance > minSwipeDistance && canGoNext) {
      goToNext()
    } else if (distance < -minSwipeDistance && canGoPrev) {
      goToPrev()
    }

    setTouchStart(0)
    setTouchEnd(0)
    // Resume auto-play after brief delay
    setTimeout(() => setIsPaused(false), 5000)
  }

  return (
    <SectionWrapper id="testimonials" className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-harlow-evergreen mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg md:text-xl text-harlow-text-muted max-w-2xl mx-auto">
          Hear from families who found their perfect home with us.
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Arrows - Desktop */}
        <div className="hidden md:flex absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={goToPrev}
            disabled={!canGoPrev}
            className={cn(
              'h-12 w-12 rounded-full border bg-harlow-almond/80 backdrop-blur-sm shadow-md flex items-center justify-center',
              'border-harlow-almond-dark/20 hover:bg-harlow-almond transition-all',
              'disabled:opacity-40 disabled:cursor-not-allowed'
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-harlow-evergreen" />
          </button>
        </div>

        <div className="hidden md:flex absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={goToNext}
            className={cn(
              'h-12 w-12 rounded-full border bg-harlow-almond/80 backdrop-blur-sm shadow-md flex items-center justify-center',
              'border-harlow-almond-dark/20 hover:bg-harlow-almond transition-all'
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-harlow-evergreen" />
          </button>
        </div>

        {/* Cards Container */}
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex gap-6"
            animate={{
              x: `calc(-${currentIndex * (100 / visibleCount)}% - ${(currentIndex * 24) / visibleCount}px)`,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.1,
                }}
                className="flex-shrink-0"
                style={{
                  width: `calc((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount})`,
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <button
            onClick={goToPrev}
            disabled={!canGoPrev}
            className={cn(
              'h-12 w-12 rounded-full border bg-harlow-almond/80 flex items-center justify-center',
              'border-harlow-almond-dark/20 hover:bg-harlow-almond transition-all',
              'disabled:opacity-40 disabled:cursor-not-allowed'
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-harlow-evergreen" />
          </button>
          <button
            onClick={goToNext}
            className={cn(
              'h-12 w-12 rounded-full border bg-harlow-almond/80 flex items-center justify-center',
              'border-harlow-almond-dark/20 hover:bg-harlow-almond transition-all'
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-harlow-evergreen" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                index === currentIndex
                  ? 'w-6 bg-harlow-evergreen'
                  : 'bg-harlow-evergreen/30 hover:bg-harlow-evergreen/50'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
