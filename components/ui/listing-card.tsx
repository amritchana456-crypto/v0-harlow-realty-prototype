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
  index: number
  className?: string
}

export function ListingCard({ listing, index, className }: ListingCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      whileHover={{ y: -8 }}
      className={cn(
        'group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden',
        'border border-gray-100 hover:border-harlow-primary/30',
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={listing.image}
          alt={`Property at ${listing.address}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
          <span className="text-lg font-semibold text-harlow-black">
            {listing.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-harlow-black mb-3 line-clamp-1">
          {listing.address}
        </h3>

        <div className="flex items-center gap-6 text-sm text-harlow-black/60">
          <span className="flex items-center gap-2">
            <Bed size={18} className="text-harlow-primary" />
            {listing.beds} Beds
          </span>
          <span className="flex items-center gap-2">
            <Bath size={18} className="text-harlow-primary" />
            {listing.baths} Baths
          </span>
          <span className="flex items-center gap-2">
            <Square size={18} className="text-harlow-primary" />
            {listing.sqft} sqft
          </span>
        </div>
      </div>
    </motion.article>
  )
}
