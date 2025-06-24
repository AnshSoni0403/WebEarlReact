"use client"
import { useEffect, useState } from "react"
import type React from "react"

import Image from "next/image"
import Header from "../header"
import Footer from "../footer"
import "@/styles/all.css"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="feature-card">
    <h3 className="feature-title">
      <span className="feature-icon">{icon}</span>
      {title}
    </h3>
    <p className="feature-description">{description}</p>
  </div>
)

interface Feature {
  icon: string
  title: string
  description: string
}

export default function OneClickPortfolio() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features: Feature[] = [
    {
      icon: "🔍",
      title: "Interactive and User-Friendly Experience",
      description:
        "The app offers a clean, intuitive interface designed for speed and simplicity. Navigate through listings, check reviews, explore offers, and make informed decisions in seconds—without the need to visit multiple platforms.",
    },
    {
      icon: "📍",
      title: "Hyperlocal Search with Smart Filters",
      description:
        "Customize your search using smart filters like distance, ratings, price range, and category. Whether you're exploring a new area or looking for hidden gems in your city, OneClick brings the best options straight to your screen.",
    },
    {
      icon: "📱",
      title: "One App, Endless Possibilities",
      description:
        "From food and fashion to fitness and repair services, OneClick acts as your all-in-one local guide. Businesses are categorized for your convenience, making it effortless to browse, compare, and connect instantly.",
    },
    {
      icon: "⭐",
      title: "Real-Time Reviews & Ratings",
      description:
        "See what others are saying before you decide. Verified user reviews and ratings help you choose trustworthy businesses based on authentic feedback.",
    },
    {
      icon: "🧭",
      title: "GPS-Powered Smart Suggestions",
      description:
        "Get personalized suggestions based on your location and search history. The more you use OneClick, the smarter it becomes in recommending exactly what you need, when you need it.",
    },
    {
      icon: "📅",
      title: "Seamless Contact & Booking",
      description:
        "No more jotting down numbers or browsing through directories. Call, chat, or book a service directly from the app—all from one central platform.",
    },
  ]

  return (
    <>
      <style jsx>{`
        .portfolio-page {
          background: white;
          min-height: 100vh;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1a202c;
          line-height: 1.6;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Hero Section */
        .hero-header {
          background: linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(255, 255, 255) 100%);
          color: white;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 60px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          color:black;
        }

        .hero-left {
          z-index: 2;
        }

        .project-title {
          font-size: clamp(3rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          color:black;
        }

        .project-description {
          font-size: 1.2rem;
          color: rgba(0, 0, 0, 0.9);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .project-description {
          font-size: 1.1rem;
          color: #4a5568;
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 800px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .tag {
          background: #f7fafc;
          color: #2d3748;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .tag:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo-container {
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .logo-placeholder {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          opacity: 0.8;
        }

        /* Features Section */
        .features-section {
          padding: 100px 0;
          background: #f8fafc;
        }

        .section-title {
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 3rem;
          color: #1a202c;
          position: relative;
        }

        .section-title:after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: #4f46e5;
          border-radius: 2px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .feature-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          border-color: #4f46e5;
        }

        .feature-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }

        .feature-icon {
          font-size: 1.8rem;
          margin-right: 0.75rem;
        }

        .feature-description {
          color: #4a5568;
          line-height: 1.7;
          font-size: 1rem;
        }

        /* Visuals Section */
        .visuals-section {
          background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .geometric-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.1;
        }

        .triangle {
          position: absolute;
          border-style: solid;
        }

        .triangle-1 {
          top: 10%;
          left: 5%;
          width: 0;
          height: 0;
          border-left: 30px solid transparent;
          border-right: 30px solid transparent;
          border-bottom: 50px solid #4f46e5;
          transform: rotate(15deg);
        }

        .triangle-2 {
          top: 20%;
          right: 10%;
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 60px solid #7c3aed;
          transform: rotate(-30deg);
        }

        .triangle-3 {
          bottom: 15%;
          left: 8%;
          width: 0;
          height: 0;
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-bottom: 40px solid #4f46e5;
          transform: rotate(45deg);
        }

        .triangle-4 {
          bottom: 30%;
          right: 15%;
          width: 0;
          height: 0;
          border-left: 35px solid transparent;
          border-right: 35px solid transparent;
          border-bottom: 55px solid #7c3aed;
          transform: rotate(-15deg);
        }

        .visuals-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .main-mockup {
          position: relative;
          margin-bottom: 60px;
        }

        .browser-mockup {
          background: #f7fafc;
          border-radius: 12px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          max-width: 900px;
          margin: 0 auto;
        }

        .browser-header {
          background: #e2e8f0;
          height: 40px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          border-bottom: 1px solid #cbd5e0;
        }

        .browser-controls {
          display: flex;
          gap: 8px;
        }

        .control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .control.red { background: #ef4444; }
        .control.yellow { background: #f59e0b; }
        .control.green { background: #10b981; }

        .address-bar {
          flex: 1;
          text-align: center;
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }

        .browser-content {
          height: 500px;
          background: #000;
          position: relative;
          overflow: hidden;
        }

        .screen-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .objectives-section {
          background: white;
          padding: 100px 0;
        }

        .objectives-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .section-title {
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 40px;
        }

        .objectives-layout {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 60px;
          align-items: start;
        }

        .objectives-text {
          font-size: 1.1rem;
          color: #4a5568;
          line-height: 1.7;
        }

        .highlight-box {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 40px;
          border-radius: 20px;
          border-left: 5px solid #ec4899;
          position: relative;
        }

        .highlight-text {
          font-size: 1.2rem;
          font-style: italic;
          color: #2d3748;
          line-height: 1.6;
          font-weight: 500;
        }

        .multiple-screens-section {
          background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .screens-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        .screen-mockup {
          background: #f7fafc;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .screen-mockup:hover {
          transform: translateY(-10px);
        }

        .screen-mockup.large {
          grid-column: span 2;
          max-width: 700px;
          margin: 0 auto;
        }

        .screen-header {
          background: #e2e8f0;
          height: 35px;
          display: flex;
          align-items: center;
          padding: 0 12px;
        }

        .screen-controls {
          display: flex;
          gap: 6px;
        }

        .screen-controls .control {
          width: 10px;
          height: 10px;
        }

        .screen-content {
          height: 300px;
          background: #000;
          position: relative;
        }

        .screen-content.tall {
          height: 400px;
        }

        .floating-logo {
          position: absolute;
          left: -80px;
          top: 50%;
          transform: translateY(-50%);
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px rgba(79, 70, 229, 0.4);
        }

        .floating-logo-text {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
        }

        /* Screenshots Section */
        .screenshots-section {
          padding: 100px 0;
          background: white;
        }

        .screenshots-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .screenshot {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          background: #f8fafc;
          aspect-ratio: 1/2;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .screenshot:hover {
          transform: translateY(-10px);
        }

        .screenshot-placeholder {
          color: #6b7280;
          font-size: 1rem;
          text-align: center;
          padding: 2rem;
        }

        /* Approach Section */
        .approach-section {
          background: #f8fafc;
          padding: 100px 0;
        }

        .approach-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .approach-intro {
          font-size: 1.1rem;
          color: #4a5568;
          line-height: 1.7;
          margin-bottom: 60px;
          max-width: 800px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .solution-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
          position: relative;
        }

        .solution-card:hover {
          border-color: #4f46e5;
          box-shadow: 0 10px 30px rgba(79, 70, 229, 0.1);
          transform: translateY(-5px);
        }

        .solution-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 15px;
        }

        .solution-description {
          font-size: 1rem;
          color: #4a5568;
          line-height: 1.6;
        }

        .solution-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: #4f46e5;
          border-radius: 2px 0 0 2px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .solution-card:hover::before {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .logo-container {
            width: 150px;
            height: 150px;
          }

          .features-grid,
          .screenshots-grid,
          .solutions-grid {
            grid-template-columns: 1fr;
          }

          .floating-logo {
            display: none;
          }

          .container {
            padding: 0 20px;
          }

                @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
            gap: 30px;
            padding: 0 20px;
          }

          .hero-right {
            width: 80px;
            align-self: center;
          }

          .logo-container {
            width: 80px;
            height: 80px;
          }

          .objectives-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .screens-grid {
            grid-template-columns: 1fr;
            padding: 0 20px;
          }

          .screen-mockup.large {
            grid-column: span 1;
          }

          .solutions-grid {
            grid-template-columns: 1fr;
          }

          .floating-logo {
            display: none;
          }
        }
        }
      `}</style>

      <Header />
      <div className="portfolio-page">
        {/* Hero Section */}
        <section className="hero-header">
          <div className="container">
            <div className="hero-content">
              <div className="hero-left">
                <h1 className="project-title">OneClick</h1>
                <p className="project-description">
                  Your Smart Local Discovery App - Find Anything, Anytime, Anywhere. OneClick makes it easier than ever
                  to discover local businesses, shops, and service providers with just a few taps.
                </p>
                <div className="project-tags">
                  <span className="tag">Local Discovery</span>
                  <span className="tag">Mobile App</span>
                  <span className="tag">Real-time Search</span>
                  <span className="tag">User Reviews</span>
                  <span className="tag">GPS Navigation</span>
                  <span className="tag">Business Directory</span>
                </div>
              </div>
              <div className="hero-right">
                <div className="logo-container">
                  <Image
                    src="/img/portfolio/oneclick/logo.png"
                    alt="OneClick Logo"
                    width={160}
                    height={160}
                    style={{ borderRadius: "20px" }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                  />
                  <div className="logo-placeholder">OC</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Visual Section */}
        <section className="visuals-section">
          <div className="geometric-bg">
            <div className="triangle triangle-1"></div>
            <div className="triangle triangle-2"></div>
            <div className="triangle triangle-3"></div>
            <div className="triangle triangle-4"></div>
          </div>

          <div className="visuals-content">
            <div className="main-mockup">
              <div className="floating-logo">
                <div className="floating-logo-text">OC</div>
              </div>
              <div className="browser-mockup">
                <div className="browser-header">
                  <div className="browser-controls">
                    <span className="control red"></span>
                    <span className="control yellow"></span>
                    <span className="control green"></span>
                  </div>
                  <div className="address-bar">oneclick.app</div>
                </div>
                <div className="browser-content">
                  <img
                    src="/img/oneclick-home.png"
                    alt="OneClick Homepage"
                    className="screen-image"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=500&width=900&text=OneClick+Homepage"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Project Objectives Section */}
      <div className="objectives-section">
          <div className="objectives-content">
            <h2 className="section-title">Project Objectives</h2>
            <div className="objectives-layout">
              <div className="objectives-text">
                The objective of this project is to create a comprehensive matrimonial platform that seamlessly blends
                traditional matchmaking values with modern technology. SaptaVidhi aims to provide a trusted, secure, and
                culturally-sensitive environment where individuals can find meaningful connections that align with their
                values, preferences, and life goals. The platform focuses on verified profiles, advanced compatibility
                algorithms, and personalized matchmaking to ensure users find not just a partner, but a lifelong
                companion.
              </div>
              <div className="highlight-box">
                <div className="highlight-text">
                  The project focuses on creating meaningful connections through cultural understanding, advanced
                  filtering systems, and secure communication channels for lasting relationships and matrimonial
                  success.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multiple Screens Section */}
        <div className="multiple-screens-section">
          <div className="geometric-bg">
            <div className="triangle triangle-1"></div>
            <div className="triangle triangle-2"></div>
            <div className="triangle triangle-3"></div>
            <div className="triangle triangle-4"></div>
          </div>

          <div className="screens-grid">
            <div className="screen-mockup large">
              <div className="screen-header">
                <div className="screen-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
              </div>
              <div className="screen-content tall">
                <img
                  src="/img/energy.jpg"
                  alt="Profile Discovery"
                  className="screen-image"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=400&width=1100&text=Profile+Discovery"
                  }}
                />
              </div>
            </div>

            <div className="screen-mockup">
              <div className="screen-header">
                <div className="screen-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
              </div>
              <div className="screen-content">
                <img
                  src="/img/SaptaVidhiMatching.png"
                  alt="Smart Matching"
                  className="screen-image"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=300&width=350&text=Smart+Matching"
                  }}
                />
              </div>
            </div>

            <div className="screen-mockup">
              <div className="screen-header">
                <div className="screen-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
              </div>
              <div className="screen-content">
                <img
                  src="/img/SaptaVidhiChat.png"
                  alt="Secure Communication"
                  className="screen-image"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=300&width=350&text=Secure+Communication"
                  }}
                />
              </div>
            </div>
          </div>
        </div>


        
        {/* Project Approach Section */}
        <section className="approach-section">
          <div className="approach-content">
            <h2 className="section-title">Project Approach</h2>
            <p className="approach-intro">
              Employ a user-focused and technology-driven approach to streamline local discovery, enhance user
              experience, and secure the platform for a more connected community.
            </p>
            <div className="solutions-grid">
              <div className="solution-card">
                <h3 className="solution-title">Real-time Search</h3>
                <p className="solution-description">
                  Implement a robust search engine that provides instant results and filters to help users find what
                  they need quickly.
                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">User Reviews and Ratings</h3>
                <p className="solution-description">
                  Allow users to leave reviews and ratings for businesses, providing valuable feedback and helping
                  others make informed decisions.
                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">GPS Navigation</h3>
                <p className="solution-description">
                  Integrate GPS navigation to help users find their way to businesses and locations, making it easier to
                  explore their surroundings.
                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">Business Directory</h3>
                <p className="solution-description">
                  Create a comprehensive business directory that allows users to browse and discover new businesses,
                  shops, and service providers.
                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">Mobile-First Experience</h3>
                <p className="solution-description">
                  Design a mobile-first experience that is optimized for smaller screens, ensuring a seamless and
                  intuitive user experience.
                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">Privacy & Data Protection</h3>
                <p className="solution-description">
                  Implement robust security measures and privacy controls to protect sensitive personal information and
                  user data.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
