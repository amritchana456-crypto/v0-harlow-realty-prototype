'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#agents', label: 'Agents' },
  { href: '#properties', label: 'Properties' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Floating Navbar Pill - Delayed reveal at 2 seconds */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay: 2,
        }}
        className={cn(
          'fixed top-6 left-6 right-6 md:left-12 md:right-12 lg:left-20 lg:right-20 z-50 transition-all duration-300',
          'border rounded-full shadow-lg',
          isScrolled
            ? 'bg-harlow-almond/85 backdrop-blur-lg border-harlow-almond-dark/30'
            : 'glass-almond border-white/15'
        )}
      >
        <nav className="flex items-center justify-between px-6 md:px-8 py-3.5 max-w-6xl mx-auto">
          <a
            href="#home"
            className="text-lg md:text-xl font-semibold text-harlow-evergreen tracking-tight"
          >
            Harlow Realty
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-harlow-text-dark/70 hover:text-harlow-evergreen transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-harlow-evergreen/80 hover:text-harlow-evergreen transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-harlow-evergreen/10 backdrop-blur-sm z-[55] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel - Dropdown below navbar */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-20 left-6 right-6 z-[60] md:hidden"
            >
              <nav className="bg-harlow-almond/95 backdrop-blur-lg border border-harlow-almond-dark/30 rounded-2xl shadow-xl p-5">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={handleLinkClick}
                        className="block py-3 px-4 text-base font-medium text-harlow-text-dark/80 hover:text-harlow-evergreen hover:bg-harlow-almond-dark/30 rounded-xl transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
