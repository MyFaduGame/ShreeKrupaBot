'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, BookOpen, Star } from 'lucide-react'
import Image from 'next/image'

const highlights = [
  {
    icon: Award,
    title: '38+ Years Experience',
    description: 'Serving devotees with dedication since 1988',
  },
  {
    icon: Users,
    title: 'Thousands Served',
    description: 'Trusted by families across generations',
  },
  {
    icon: BookOpen,
    title: 'Vedic Traditions',
    description: 'Authentic practices from ancient scriptures',
  },
  {
    icon: Star,
    title: 'Proven Results',
    description: 'Life-changing guidance for countless seekers',
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute inset-0 border-2 border-accent/30 rounded-lg transform rotate-3" />
              <div className="absolute inset-0 border-2 border-primary/30 rounded-lg transform -rotate-3" />

              {/* Main image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-muted">
                <Image
                  src="/images/pandit-omprakash.jpg"
                  alt="Pandit Omprakash Mohanlal Sharma - Expert Vedic Astrologer with 38+ years of experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-4 -right-4 sm:bottom-8 sm:-right-8 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-lg"
              >
                <p className="font-serif text-3xl font-bold">38+</p>
                <p className="text-sm opacity-90">Years of Service</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About the Pandit
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Pandit Omprakash Mohanlal Sharma
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over 38 years of devoted service in Vedic astrology, Pandit
              Omprakash Mohanlal Sharma has guided thousands of individuals on
              their spiritual journey. His expertise spans traditional horoscope
              reading, nakshatra analysis, muhurta selection, and remedial
              measures.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Rooted in authentic scriptures and family traditions passed down
              through generations, his approach combines ancient wisdom with
              compassionate guidance, helping seekers navigate life&apos;s
              challenges with clarity and confidence.
            </p>

            {/* Quote */}
            <blockquote className="relative pl-6 border-l-4 border-accent mb-10">
              <p className="font-serif text-xl italic text-foreground">
                &ldquo;True astrology guides people with wisdom, not fear. It
                illuminates the path ahead while honoring the divine plan.&rdquo;
              </p>
              <footer className="mt-3 text-sm text-muted-foreground">
                — Pandit Omprakash Mohanlal Sharma
              </footer>
            </blockquote>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
