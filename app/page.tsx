import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { FeaturedAgent } from '@/components/featured-agent'
import { Stats } from '@/components/stats'
import { FeaturedListings } from '@/components/featured-listings'
import { ProcessSection } from '@/components/process-section'
import { Testimonials } from '@/components/testimonials'
import { FAQSection } from '@/components/faq-section'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedAgent />
        <Stats />
        <FeaturedListings />
        <ProcessSection />
        <Testimonials />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
