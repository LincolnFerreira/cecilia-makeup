
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { BeforeAfter } from "@/components/BeforeAfter"
import { Testimonials } from "@/components/Testimonials"
import { BookingFunnel } from "@/components/BookingFunnel"
import { InquiryAssistant } from "@/components/InquiryAssistant"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <InquiryAssistant />
      <Testimonials />
      <BookingFunnel />
      <Footer />
    </main>
  )
}
