'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
import Link from 'next/link'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Store', href: '#store' },
  { name: 'Contact', href: '#contact' },
]

const services = [
  { name: 'Astrology Consultation', href: '#services' },
  { name: 'Pooja Services', href: '#services' },
  { name: 'Gemstones Guidance', href: '#services' },
  { name: 'Rudraksha Consultation', href: '#services' },
  { name: 'Spiritual Remedies', href: '#services' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">
                  OM
                </span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-background leading-tight">
                  Shree Guru Krupa
                </h3>
                <p className="text-xs text-background/60">Jyotish Karyalay</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Trusted Vedic astrology services since 1988. Guiding thousands on
              their spiritual journey with authentic wisdom and compassionate
              guidance.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +91 98765 43210
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-green-400 transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:contact@shreegurukripa.com"
                  className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  contact@shreegurukripa.com
                </Link>
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Near Temple Road, Spiritual Complex, Mumbai, Maharashtra -
                  400001
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Shree Guru Krupa Jyotish
              Karyalay. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-background/60 hover:text-background transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-background/60 hover:text-background transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
