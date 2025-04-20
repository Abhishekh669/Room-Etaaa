import { HeroSection } from "@/components/landingpage/hero-section"
import { FeaturesSection } from "@/components/landingpage/features-section"
import { TestimonialsSection } from "@/components/landingpage/testimonials-section"
import { CTASection } from "@/components/landingpage/cta-section"
import { Navbar } from "@/components/landingpage/navbar"
import { ServicesSection } from "@/components/landingpage/services-section"
import { PricingSection } from "@/components/landingpage/pricing-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </main>
  )
}
