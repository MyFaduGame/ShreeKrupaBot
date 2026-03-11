'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle, MousePointerClick, Calendar, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    icon: MousePointerClick,
    title: 'Click WhatsApp Button',
    description:
      'Simply click on the WhatsApp button to start a conversation with our assistant.',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'Chat with Our Assistant',
    description:
      'Share your queries and requirements. Our assistant will guide you through the process.',
  },
  {
    number: '03',
    icon: Calendar,
    title: 'Book Consultation Slot',
    description:
      'Choose a convenient time slot for your personalized consultation with Pandit ji.',
  },
]

// Mock WhatsApp Chat UI
function WhatsAppMockup() {
  return (
    <div className="bg-[#0B141A] rounded-2xl shadow-2xl overflow-hidden max-w-sm mx-auto">
      {/* Header */}
      <div className="bg-[#1F2C34] px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
          SGK
        </div>
        <div>
          <p className="text-white text-sm font-medium">
            Shree Guru Krupa Jyotish
          </p>
          <p className="text-gray-400 text-xs">Online</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="p-4 space-y-3 min-h-[280px] bg-[url('/images/wa-bg.png')] bg-repeat bg-opacity-5">
        {/* Received message */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-[#1F2C34] text-white text-sm p-3 rounded-lg rounded-tl-none max-w-[85%]"
        >
          Namaste! Welcome to Shree Guru Krupa Jyotish Karyalay.
          <br />
          <br />
          How may I assist you today?
          <span className="text-gray-400 text-xs float-right mt-1 ml-2">
            10:30 AM
          </span>
        </motion.div>

        {/* Options */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="space-y-2"
        >
          {[
            'Astrology Consultation',
            'Pooja Services',
            'Gemstone Guidance',
            'Other Query',
          ].map((option, i) => (
            <div
              key={option}
              className="bg-[#1F2C34] text-[#25D366] text-sm p-2 px-3 rounded-lg border border-[#25D366]/30 max-w-[75%] cursor-pointer hover:bg-[#25D366]/10 transition-colors"
            >
              {i + 1}. {option}
            </div>
          ))}
        </motion.div>

        {/* Sent message */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="bg-[#005C4B] text-white text-sm p-3 rounded-lg rounded-tr-none max-w-[85%] ml-auto"
        >
          1
          <span className="text-gray-300 text-xs float-right mt-1 ml-2 flex items-center gap-1">
            10:31 AM
            <Check className="w-4 h-4 text-blue-400" />
          </span>
        </motion.div>

        {/* Response */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 1.5 }}
          className="bg-[#1F2C34] text-white text-sm p-3 rounded-lg rounded-tl-none max-w-[85%]"
        >
          Great choice! Please share your birth details:
          <br />- Date of Birth
          <br />- Time of Birth
          <br />- Place of Birth
          <span className="text-gray-400 text-xs float-right mt-1 ml-2">
            10:31 AM
          </span>
        </motion.div>
      </div>

      {/* Input Area */}
      <div className="bg-[#1F2C34] px-4 py-3 flex items-center gap-3">
        <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2">
          <p className="text-gray-400 text-sm">Type a message</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  )
}

export function WhatsAppBooking() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="whatsapp" className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-green-600 font-medium text-sm uppercase tracking-wider">
            Easy Booking
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            Book Astrology Consultation in 3 Simple Steps
          </h2>
          <p className="text-muted-foreground text-lg">
            No complicated forms or registrations. Simply chat with us on
            WhatsApp and book your consultation instantly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-6"
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-green-600" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-green-500/20" />
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <span className="text-green-600/50 font-mono text-sm">
                    Step {step.number}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4"
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Open WhatsApp Assistant
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* WhatsApp Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <WhatsAppMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
