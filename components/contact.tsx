'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

type FormErrors = {
  name?: boolean
  email?: boolean
  message?: boolean
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = true
    if (!formData.email.trim() || !validateEmail(formData.email))
      newErrors.email = true
    if (!formData.message.trim()) newErrors.message = true

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset form after showing success
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: false }))
    }
  }

  return (
    <SectionWrapper id="contact" className="py-20 md:py-28">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-harlow-evergreen mb-4">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-harlow-text-muted">
            Ready to find your dream home? Let&apos;s start your journey
            together.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          onSubmit={handleSubmit}
          className="glass-almond-solid rounded-2xl shadow-lg p-6 md:p-10 border border-harlow-almond-dark/20"
        >
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-harlow-evergreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-harlow-evergreen"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-harlow-evergreen mb-2">
                Message Sent!
              </h3>
              <p className="text-harlow-text-muted">
                Thank you for reaching out. We&apos;ll be in touch soon.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className={cn(
                      'block text-sm font-medium mb-2 transition-colors',
                      errors.name ? 'text-red-500' : 'text-harlow-text-dark/80'
                    )}
                  >
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={cn(
                      'h-12 rounded-xl bg-white/80 border-harlow-almond-dark/30 focus:border-harlow-evergreen focus:ring-harlow-evergreen/20',
                      errors.name && 'border-red-500 focus:border-red-500'
                    )}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={cn(
                      'block text-sm font-medium mb-2 transition-colors',
                      errors.email ? 'text-red-500' : 'text-harlow-text-dark/80'
                    )}
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={cn(
                      'h-12 rounded-xl bg-white/80 border-harlow-almond-dark/30 focus:border-harlow-evergreen focus:ring-harlow-evergreen/20',
                      errors.email && 'border-red-500 focus:border-red-500'
                    )}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-harlow-text-dark/80 mb-2"
                >
                  Phone (Optional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(416) 555-0000"
                  className="h-12 rounded-xl bg-white/80 border-harlow-almond-dark/30 focus:border-harlow-evergreen focus:ring-harlow-evergreen/20"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={cn(
                    'block text-sm font-medium mb-2 transition-colors',
                    errors.message
                      ? 'text-red-500'
                      : 'text-harlow-text-dark/80'
                  )}
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your real estate needs..."
                  rows={5}
                  className={cn(
                    'rounded-xl bg-white/80 border-harlow-almond-dark/30 focus:border-harlow-evergreen focus:ring-harlow-evergreen/20 resize-none',
                    errors.message && 'border-red-500 focus:border-red-500'
                  )}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-harlow-evergreen hover:bg-harlow-evergreen-light text-harlow-almond font-medium text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-300 btn-shimmer"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </Button>
            </div>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  )
}
