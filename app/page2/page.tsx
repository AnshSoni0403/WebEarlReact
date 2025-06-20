import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import PortfolioSection from '@/components/portfolio-section';
import ExpertiseSection from '@/components/expertise-section';
import ClientSection from '@/components/client-section';
import CounterSection from '@/components/counter-section';
import TestimonialSection from '@/components/testimonial-section';
import PricingSection from '@/components/pricing-section';
import BlogSection from '@/components/blog-section';
import CallToAction from '@/components/call-to-action';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function Page2() {
  return (
    <div className="page-wrapper">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Expertise Section */}
      <ExpertiseSection />

      {/* Client Section */}
      <ClientSection />

      {/* Counter Section */}
      <CounterSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Pricing Section */}
      {/* <PricingSection /> */}

      {/* Blog Section */}
      {/* <BlogSection /> */}

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <div className="back-to-top">
        <a href="#"><i className="fas fa-arrow-up"></i></a>
      </div>
    </div>
  );
}
