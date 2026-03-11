'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Star,
  Sparkles,
  Gem,
  Flower2,
  Heart,
  MessageCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    icon: Star,
    title: 'Astrology Consultation',
    description:
      'Comprehensive birth chart analysis, planetary positions, and personalized predictions based on Vedic astrology principles.',
    color: 'bg-orange-500/10 text-orange-600',
  },
  {
    icon: Sparkles,
    title: 'Pooja Services',
    description:
      'Traditional Vedic poojas for prosperity, peace, health, and spiritual growth conducted with authentic rituals.',
    color: 'bg-amber-500/10 text-amber-600',
  },
  {
    icon: Gem,
    title: 'Gemstones Guidance',
    description:
      'Expert recommendations on astrologically beneficial gemstones based on your birth chart and planetary alignments.',
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    icon: Flower2,
    title: 'Rudraksha Consultation',
    description:
      'Guidance on selecting the right Rudraksha beads for spiritual growth and planetary remedies.',
    color: 'bg-rose-500/10 text-rose-600',
  },
  {
    icon: Heart,
    title: 'Spiritual Remedies',
    description:
      'Personalized remedial measures including mantras, yantras, and rituals to overcome obstacles in life.',
    color: 'bg-indigo-500/10 text-indigo-600',
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            Spiritual Services for Your Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our range of authentic Vedic services designed to guide
            you through life&apos;s journey with wisdom and spiritual insight.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card rounded-xl p-6 sm:p-8 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* CTA Button */}
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:border-accent transition-colors"
                asChild
              >
                <Link
                  href={`https://wa.me/919876543210?text=I'm interested in ${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  I&apos;m Interested
                </Link>
              </Button>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
                <div className="absolute top-0 right-0 w-8 h-8 bg-accent/5 transform rotate-45 translate-x-4 -translate-y-4 group-hover:bg-accent/10 transition-colors" />
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: services.length * 0.1 }}
            className="sm:col-span-2 lg:col-span-1 relative bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 sm:p-8 text-primary-foreground"
          >
            <h3 className="font-serif text-xl font-semibold mb-3">
              Need Custom Guidance?
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Every spiritual journey is unique. Reach out for personalized
              consultation tailored to your specific needs and concerns.
            </p>
            <Button
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link
                href="https://wa.me/919876543210?text=I need custom spiritual guidance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Custom Consultation
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
