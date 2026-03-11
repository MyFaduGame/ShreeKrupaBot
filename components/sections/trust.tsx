'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Award, Users, Globe, Calendar } from 'lucide-react'

const stats = [
  {
    icon: Calendar,
    value: 38,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Serving since 1988',
  },
  {
    icon: Users,
    value: 40,
    suffix: '+',
    label: 'Astrologers Network',
    description: 'Expert team across India',
  },
  {
    icon: Award,
    value: 2000,
    suffix: '+',
    label: 'Pandits Network',
    description: 'For pooja services',
  },
  {
    icon: Globe,
    value: 50,
    suffix: '+',
    label: 'Cities Served',
    description: 'Across India',
  },
]

function AnimatedCounter({
  value,
  suffix,
  isInView,
}: {
  value: number
  suffix: string
  isInView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Trust() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 sm:py-28 bg-background">
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
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            Trusted by Thousands Across India
          </h2>
          <p className="text-muted-foreground text-lg">
            Our commitment to authentic Vedic practices and genuine guidance has
            made us a trusted name in astrology services.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-card rounded-xl p-6 sm:p-8 text-center border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Number */}
                <p className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                </p>

                {/* Label */}
                <h3 className="font-medium text-foreground mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 lg:gap-12"
        >
          {[
            'Authentic Vedic Practices',
            'Family Tradition Since 1988',
            'Personalized Guidance',
            'Confidential Consultations',
          ].map((badge, index) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
