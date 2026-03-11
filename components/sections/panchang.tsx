'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sun, Moon, Stars, Calendar, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const features = [
  {
    icon: Calendar,
    title: 'Daily Panchang',
    description: 'Get accurate daily Panchang information including auspicious timings.',
  },
  {
    icon: Stars,
    title: 'Nakshatra Details',
    description: 'Know your ruling nakshatra and its influence on your daily life.',
  },
  {
    icon: Moon,
    title: 'Tithi Information',
    description: 'Lunar day details and their significance for rituals and activities.',
  },
  {
    icon: Sparkles,
    title: 'Spiritual Guidance',
    description: 'Daily mantras and spiritual practices recommended for you.',
  },
]

export function Panchang() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-accent" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border border-primary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Daily Spiritual Updates
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Daily Panchang & Spiritual Guidance
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Stay connected with the cosmic rhythms. Receive daily Panchang
              updates, nakshatra details, tithi information, and personalized
              spiritual guidance to align your activities with auspicious
              timings.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <Link
                href="https://wa.me/919876543210?text=I want to receive daily Panchang updates"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Sun className="w-5 h-5 mr-2" />
                Get Daily Panchang Updates
              </Link>
            </Button>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/20" />

              {/* Inner decorative circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-dashed border-primary/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-12 rounded-full border border-dashed border-accent/30"
              />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 bg-background/80 backdrop-blur-sm rounded-2xl border border-border shadow-lg">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Sun className="w-8 h-8 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Today&apos;s Tithi
                  </p>
                  <p className="font-serif text-xl font-semibold text-foreground">
                    Shukla Paksha
                  </p>
                  <p className="text-primary font-medium mt-2">Dwadashi</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      Nakshatra: Rohini
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Yoga: Shubha
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              {[Sun, Moon, Stars, Sparkles].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="absolute w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center"
                  style={{
                    top: `${20 + i * 20}%`,
                    left: i % 2 === 0 ? '0%' : '90%',
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.5,
                  }}
                >
                  <Icon className="w-5 h-5 text-accent" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
