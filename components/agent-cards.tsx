'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { AgentCard } from '@/components/ui/agent-card'

const agents = [
  {
    name: 'Sarah Mitchell',
    title: 'Senior Real Estate Agent',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    phone: '(416) 555-0101',
    email: 'sarah@harlowrealty.ca',
  },
  {
    name: 'Michael Chen',
    title: 'Luxury Property Specialist',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    phone: '(416) 555-0102',
    email: 'michael@harlowrealty.ca',
  },
  {
    name: 'Emily Rodriguez',
    title: 'First-Time Buyer Expert',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    phone: '(416) 555-0103',
    email: 'emily@harlowrealty.ca',
  },
]

export function AgentCards() {
  return (
    <SectionWrapper id="agents">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-harlow-black mb-4">
          Meet Our Agents
        </h2>
        <p className="text-lg text-harlow-black/70 max-w-2xl mx-auto">
          Our dedicated team of real estate professionals is here to guide you
          every step of the way.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {agents.map((agent, index) => (
          <AgentCard key={agent.email} agent={agent} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
