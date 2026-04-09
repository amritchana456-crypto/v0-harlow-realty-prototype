'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { ListingCard } from '@/components/ui/listing-card'
import { Button } from '@/components/ui/button'

const listings = [
  {
    address: '123 Lakeshore Blvd W, Toronto',
    price: '$2,450,000',
    beds: 4,
    baths: 3,
    sqft: '3,200',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
  },
  {
    address: '456 King Street E, Toronto',
    price: '$1,875,000',
    beds: 3,
    baths: 2,
    sqft: '2,100',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
  },
  {
    address: '789 Trafalgar Rd, Oakville',
    price: '$3,200,000',
    beds: 5,
    baths: 4,
    sqft: '4,500',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
  },
  {
    address: '321 Dundas St W, Mississauga',
    price: '$1,650,000',
    beds: 4,
    baths: 3,
    sqft: '2,800',
    image:
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop',
  },
]

export function FeaturedListings() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(listings.length - 1, prev + 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      handleNext()
    } else if (distance < -minSwipeDistance) {
      handlePrev()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <SectionWrapper id="properties" className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-harlow-evergreen mb-4">
          Featured Properties
        </h2>
        <p className="text-lg md:text-xl text-harlow-text-muted max-w-2xl mx-auto">
          Discover handpicked homes in Toronto&apos;s most sought-after
          neighborhoods.
        </p>
      </motion.div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
        {listings.map((listing, index) => (
          <ListingCard key={listing.address} listing={listing} index={index} />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden">
        <div
          ref={carouselRef}
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {listings.map((listing) => (
              <div key={listing.address} className="w-full flex-shrink-0 px-1">
                <ListingCard listing={listing} animate={false} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-3 rounded-full bg-harlow-almond border border-harlow-almond-dark/20 text-harlow-evergreen disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:bg-harlow-almond-dark/30"
            aria-label="Previous listing"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {listings.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex
                    ? 'bg-harlow-evergreen'
                    : 'bg-harlow-almond-dark/40'
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={currentIndex === listings.length - 1}
            className="p-3 rounded-full bg-harlow-almond border border-harlow-almond-dark/20 text-harlow-evergreen disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:bg-harlow-almond-dark/30"
            aria-label="Next listing"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Show More Button - Below carousel */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-harlow-evergreen text-harlow-evergreen hover:bg-harlow-evergreen hover:text-harlow-almond transition-colors btn-shimmer"
          >
            Show More Properties
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}
