import { Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

type Testimonial = {
  name: string
  location: string
  quote: string
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
        'bg-white rounded-2xl shadow-md p-6 md:p-8 h-full flex flex-col',
        'border border-gray-100',
        className
      )}
    >
      <Quote
        size={32}
        className="text-harlow-primary/40 mb-4 flex-shrink-0"
        aria-hidden="true"
      />

      <blockquote className="flex-1 mb-6">
        <p className="text-base md:text-lg text-harlow-black/80 leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      <footer className="flex-shrink-0">
        <p className="font-semibold text-harlow-black">{testimonial.name}</p>
        <p className="text-sm text-harlow-black/60">{testimonial.location}</p>
      </footer>
    </article>
  )
}
