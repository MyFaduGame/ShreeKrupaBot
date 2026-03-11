'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Gem, Flower2, Sparkles, Box, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const products = [
  {
    id: 'gemstones',
    icon: Gem,
    title: 'Gemstones',
    description:
      'Certified natural gemstones recommended based on your birth chart for planetary remedies and prosperity.',
    image: '/images/gemstones.jpg',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 'rudraksha',
    icon: Flower2,
    title: 'Rudraksha',
    description:
      'Authentic Rudraksha beads from Nepal and Indonesia for spiritual growth and divine blessings.',
    image: '/images/rudraksha.jpg',
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    id: 'yantra',
    icon: Sparkles,
    title: 'Yantra',
    description:
      'Sacred geometric diagrams energized with Vedic mantras for protection and positive energy.',
    image: '/images/yantra.jpg',
    color: 'from-rose-500/20 to-pink-500/20',
  },
  {
    id: 'spiritual-items',
    icon: Box,
    title: 'Spiritual Items',
    description:
      'Pooja essentials, sacred items, and spiritual accessories for your daily worship and rituals.',
    image: '/images/spiritual-items.jpg',
    color: 'from-indigo-500/20 to-violet-500/20',
  },
]

export function Store() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="store" className="py-20 sm:py-28 bg-secondary/30">
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
            Spiritual Store
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            Sacred Items for Your Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our collection of authentic spiritual items, carefully
            selected and blessed for your spiritual growth and well-being.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.color}`}
                />
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Icon badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                  <product.icon className="w-5 h-5 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:border-accent transition-colors"
                  asChild
                >
                  <Link
                    href={`https://wa.me/919876543210?text=I'm interested in ${encodeURIComponent(product.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Products
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 sm:p-10 text-center border border-accent/20"
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
            Need Personalized Recommendations?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Get expert guidance on selecting the right gemstones, rudraksha, or
            yantra based on your birth chart. Our team will help you choose
            items that align with your spiritual goals.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <Link
              href="https://wa.me/919876543210?text=I need personalized recommendations for spiritual items"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Expert Recommendations
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
