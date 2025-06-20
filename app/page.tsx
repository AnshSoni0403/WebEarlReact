import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import ExpertiseSection from "@/components/expertise-section"
import ClientSection from "@/components/client-section"
import CounterSection from "@/components/counter-section"
import TestimonialSection from "@/components/testimonial-section"
// import PricingSection from "@/components/pricing-section"
// import BlogSection from "@/components/blog-section"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ExpertiseSection />
      <ClientSection />
      <CounterSection />
      <TestimonialSection />
      {/* <PricingSection />
      <BlogSection /> */}
      <CallToAction />
      <Footer />
    </div>
  )
}