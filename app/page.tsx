import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Services } from '@/components/sections/services'
import { WhatsAppBooking } from '@/components/sections/whatsapp-booking'
import { Panchang } from '@/components/sections/panchang'
import { Store } from '@/components/sections/store'
import { Trust } from '@/components/sections/trust'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhatsAppBooking />
      <Panchang />
      <Store />
      <Trust />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
