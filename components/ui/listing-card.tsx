'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Bed, Bath, Square } from 'lucide-react'
import { cn } from '@/lib/utils'

type Listing = {
  address: string
  price: string
  beds: number
  baths: number
  sqft: string
  image: string
}

type ListingCardProps = {
  listing: Listing
  index?: number
  className?: string
  animate?: boolean
}

export function ListingCard({
  listing,
  index = 0,
  className,
  animate = true,
}: ListingCardProps) {
  const CardWrapper = animate ? motion.article : 'article'
  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 32 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay: index * 0.1,
        },
        whileHover: { scale: 1.02 },
      }
    : {}

  return (
    <CardWrapper
      {...animationProps}
      className={cn(
        'group rounded-2xl shadow-lg overflow-hidden transition-all duration-300',
        'border border-harlow-almond-dark/20 hover:shadow-xl',
        'flex-shrink-0 w-full',
        className
      )}
    >
      {/* Image with price overlay */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={listing.image}
          alt={`Property at ${listing.address}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Price tag overlay */}
        <div className="absolute bottom-4 right-4 bg-harlow-evergreen/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
          <span className="text-lg font-semibold text-harlow-almond">
            {listing.price}
          </span>
        </div>
      </div>

      {/* Glass info panel */}
      <div className="glass-almond-solid p-6">
        <h3 className="text-lg font-semibold text-harlow-evergreen mb-3 line-clamp-1">
          {listing.address}
        </h3>

        <div className="flex items-center gap-5 text-sm text-harlow-text-muted">
          <span className="flex items-center gap-2">
            <Bed size={18} className="text-harlow-evergreen/70" />
            {listing.beds} Beds
          </span>
          <span className="flex items-center gap-2">
            <Bath size={18} className="text-harlow-evergreen/70" />
            {listing.baths} Baths
          </span>
          <span className="flex items-center gap-2">
            <Square size={18} className="text-harlow-evergreen/70" />
            {listing.sqft} sqft
          </span>
        </div>
      </div>
    </CardWrapper>
  )
}
