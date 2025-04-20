import { HeroSection } from "@/components/landingpage/hero-section"
import { FeaturesSection } from "@/components/landingpage/features-section"
import { ServicesSection } from "@/components/landingpage/services-section"
import { TestimonialsSection } from "@/components/landingpage/testimonials-section"
import { PricingSection } from "@/components/landingpage/pricing-section"
import { CTASection } from "@/components/landingpage/cta-section"
import { AboutSection } from "@/components/landingpage/about-section"
import { ContactSection } from "@/components/landingpage/contact-section"
import { Navbar } from "@/components/landingpage/navbar"
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
      <CTASection />
    </main>
  )
}
