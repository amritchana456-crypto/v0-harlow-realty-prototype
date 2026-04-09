import { FogDivider } from '@/components/ui/fog-divider'
import { Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#agents', label: 'Agents' },
  { href: '#properties', label: 'Properties' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <FogDivider variant="evergreen-fade" height="100px" />

      <footer className="bg-harlow-evergreen text-harlow-almond">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-semibold mb-4">Harlow Realty</h3>
              <p className="text-harlow-almond/80 leading-relaxed">
                Premium real estate services in Toronto and the Greater Toronto
                Area. Your trusted partner in finding the perfect home.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-harlow-almond/80 hover:text-harlow-almond transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:4165550100"
                    className="flex items-center gap-3 text-harlow-almond/80 hover:text-harlow-almond transition-colors"
                  >
                    <Phone size={18} className="flex-shrink-0" />
                    (416) 555-0100
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@harlowrealty.ca"
                    className="flex items-center gap-3 text-harlow-almond/80 hover:text-harlow-almond transition-colors"
                  >
                    <Mail size={18} className="flex-shrink-0" />
                    info@harlowrealty.ca
                  </a>
                </li>
                <li className="flex items-start gap-3 text-harlow-almond/80">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                  <span>
                    123 Bay Street, Suite 400
                    <br />
                    Toronto, ON M5J 2T2
                  </span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
              <ul className="space-y-2 text-harlow-almond/80">
                <li className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>By Appointment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-harlow-almond/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-harlow-almond/70">
                {currentYear} Harlow Realty. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-harlow-almond/70">
                <a
                  href="#"
                  className="hover:text-harlow-almond transition-colors"
                  aria-label="Privacy Policy"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-harlow-almond transition-colors"
                  aria-label="Terms of Service"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
