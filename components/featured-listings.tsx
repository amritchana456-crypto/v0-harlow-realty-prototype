'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { ListingCard } from '@/components/ui/listing-card'

const listings = [
  {
    address: '123 Lakeshore Blvd W, Toronto',
    price: '$2,450,000',
    beds: 4,
    baths: 3,
    sqft: '3,200',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=450&fit=crop',
  },
  {
    address: '456 King Street E, Toronto',
    price: '$1,875,000',
    beds: 3,
    baths: 2,
    sqft: '2,100',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=450&fit=crop',
  },
  {
    address: '789 Trafalgar Rd, Oakville',
    price: '$3,200,000',
    beds: 5,
    baths: 4,
    sqft: '4,500',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=450&fit=crop',
  },
  {
    address: '321 Dundas St W, Mississauga',
    price: '$1,650,000',
    beds: 4,
    baths: 3,
    sqft: '2,800',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=450&fit=crop',
  },
]

export function FeaturedListings() {
  return (
    <SectionWrapper id="properties">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-harlow-black mb-4">
          Featured Listings
        </h2>
        <p className="text-lg text-harlow-black/70 max-w-2xl mx-auto">
          Explore our handpicked selection of premium properties in Toronto and
          the Greater Toronto Area.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {listings.map((listing, index) => (
          <ListingCard key={listing.address} listing={listing} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
