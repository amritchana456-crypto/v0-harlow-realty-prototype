import Image from 'next/image'
import { Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

type Testimonial = {
  name: string
  location: string
  quote: string
  image: string
}

type TestimonialCardProps = {
  testimonial: Testimonial
  className?: string
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        'glass-almond-solid rounded-2xl shadow-md p-6 md:p-8 h-full flex flex-col',
        'border border-harlow-almond-dark/20',
        className
      )}
    >
      <Quote
        size={28}
        className="text-harlow-evergreen/30 mb-4 flex-shrink-0"
        aria-hidden="true"
      />

      <blockquote className="flex-1 mb-6">
        <p className="text-base md:text-lg text-harlow-text-dark/80 leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      <footer className="flex items-center gap-4 flex-shrink-0">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-harlow-evergreen">
            {testimonial.name}
          </p>
          <p className="text-sm text-harlow-text-muted">{testimonial.location}</p>
        </div>
      </footer>
    </article>
  )
}
