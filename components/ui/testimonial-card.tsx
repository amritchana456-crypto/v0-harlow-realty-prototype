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
        'backdrop-blur-lg bg-white/15 rounded-2xl shadow-lg p-6 md:p-8 h-full flex flex-col',
        'border border-white/20',
        className
      )}
    >
      <blockquote className="flex-1 mb-6">
        <p className="text-base md:text-lg text-[#F6E9D9] leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      <footer className="flex-shrink-0">
        <p className="font-semibold text-[#F6E9D9]">{testimonial.name}</p>
        <p className="text-sm text-[#F6E9D9]/70">{testimonial.location}</p>
      </footer>
    </article>
  )
}
