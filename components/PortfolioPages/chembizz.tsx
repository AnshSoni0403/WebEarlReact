"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "../header"
import Footer from "../footer"
import './SYT.css'
import "@/styles/all.css"
export default function SYT() {
  const [scrollY, setScrollY] = useState(0)
  const [activeDevice, setActiveDevice] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [currentSlide, setCurrentSlide] = useState(0)

  // Screen arrays for different devices
  const desktopScreens = ["/img/portfolio/newphotos/chembizz/Chembizz_WebEarl_1.png", "/img/portfolio/newphotos/chembizz/Chembizz_WebEarl_2.png", "/img/portfolio/newphotos/chembizz/Chembizz_WebEarl_3.png", "/img/portfolio/newphotos/chembizz/Chembizz_WebEarl_4.png"]

  const tabletScreens = ["/img/SYTTab.png", "/img/SYTTabTours.png", "/img/SYTTabBooking.png", "/img/SYTTabProfile.png"]

  const mobileScreens = [
    "/img/portfolio/newphotos/SYT/SYTApp_WebEarl_1.png",
    "/img/portfolio/newphotos/SYT/SYTApp_WebEarl_2.png",
    "/img/portfolio/newphotos/SYT/SYTApp_WebEarl_3.png",
    "/img/portfolio/newphotos/SYT/SYTApp_WebEarl_4.png",
  ]

  const getCurrentScreens = () => {
    switch (activeDevice) {
      case "desktop":
        return desktopScreens
      case "tablet":
        return tabletScreens
      case "mobile":
        return mobileScreens
      default:
        return desktopScreens
    }
  }

  const getScreenInfo = () => {
    const screens = {
      desktop: [
        { title: "", description: "" },
        { title: "", description: "" },
        { title: "", description: "" },
        { title: "", description: "" },
      ],
      tablet: [
        { title: "Tablet Homepage", description: "Optimized tablet experience with touch-friendly interface" },
        { title: "Tour Browse", description: "Grid-based tour discovery perfect for tablet viewing" },
        { title: "Mobile Booking", description: "Touch-optimized booking process" },
        { title: "Profile Management", description: "Easy profile management on tablet devices" },
      ],
      mobile: [
        { title: "Mobile Homepage", description: "Mobile-first design with quick tour discovery" },
        { title: "Tour Search", description: "Swipe-friendly tour browsing experience" },
        { title: "Quick Booking", description: "One-tap booking process optimized for mobile" },
        { title: "Mobile Profile", description: "Compact profile view with essential features" },
      ],
    }

    return screens[activeDevice][currentSlide] || screens.desktop[0]
  }

  const handleNextSlide = () => {
    const screens = getCurrentScreens()
    setCurrentSlide((prev) => (prev + 1) % screens.length)
  }

  const handlePrevSlide = () => {
    const screens = getCurrentScreens()
    setCurrentSlide((prev) => (prev - 1 + screens.length) % screens.length)
  }

  // Reset slide when device changes
  useEffect(() => {
    setCurrentSlide(0)
  }, [activeDevice])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      

      <Header />
      <div className="portfolio-detail-page">
        {/* Hero Section - Centered Logo and Title */}
        <div className="hero-section">
          <div className="container">
            <div className="logo-section">
              <div style={{
                width: '120px',
                height: '120px',
                margin: '0 auto 30px auto',
                position: 'relative',
                transition: 'all 0.3s ease',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image
                  src="/img/portfolio/newphotos/chembizz/LogoChemBizz.png"
                  alt="ChemBizz Logo"
                  width={120}
                  height={120}
                  style={{
                    transition: 'all 0.3s ease',
                    objectFit: 'contain',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    display: 'block'
                  }}
                />
              </div>
              <h1 className="main-title">ChemBizz</h1>
              <p className="main-subtitle"><b>Chemical Marketplace</b></p>
              
              <p className="main-subtitle">
              ChemBizZ is a modern B2B chemical marketplace designed to simplify chemical procurement, streamline transactions, and foster direct connections between buyers and suppliers across the globe. Built with a focus on usability, real-time communication, and complete transparency, ChemBizZ enables businesses to buy, sell, and grow efficiently in the chemical industry.


              </p>
            </div>

            {/* <div className="section-button">
              <Link href="http://startyourtour.com" className="btn-primary" target="_blank" rel="noopener noreferrer">
                🚀 Visit Live Site
              </Link>
              <Link href="#" className="btn-secondary">
                📱 View Demo
              </Link>
            </div> */}
          </div>
        </div>

        {/* Interactive Visuals Carousel Section */}
        <div className="visuals-section">
          <div className="container">
            {/* <div className="visuals-header">
              <h4 className="visuals-title">Visuals</h4>
              <p className="visuals-subtitle">Explore Start Your Tour across different devices</p>
            </div> */}

            {/* Device Type Selector */}
            <div className="device-selector">
              <button
                className={`device-btn ${activeDevice === "desktop" ? "active" : ""}`}
                onClick={() => setActiveDevice("desktop")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                  <rect x="8" y="18" width="8" height="2" rx="1" fill="currentColor" />
                  <path d="M6 18h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Desktop</span>
              </button>

             
            </div>

            {/* Carousel Container */}
            <div className="carousel-container">
              <button className="carousel-nav prev" onClick={handlePrevSlide}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="carousel-content">
                <div className={`device-mockup ${activeDevice}`}>
                  {activeDevice === "desktop" && (
                    <div className="desktop-mockup">
                      <div className="desktop-frame">
                        <div className="desktop-header">
                          <div className="desktop-controls">
                            <span className="control red"></span>
                            <span className="control yellow"></span>
                            <span className="control green"></span>
                          </div>
                          <div className="address-bar">startyourtour.com</div>
                        </div>
                        <div className="desktop-screen">
                          <img
                            src={desktopScreens[currentSlide] || "/placeholder.svg"}
                            alt={`Desktop view ${currentSlide + 1}`}
                            className="screen-image"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeDevice === "tablet" && (
                    <div className="tablet-mockup-new">
                      <div className="tablet-frame-new">
                        <div className="tablet-camera"></div>
                        <div className="tablet-screen-new">
                          <img
                            src={tabletScreens[currentSlide] || "/placeholder.svg"}
                            alt={`Tablet view ${currentSlide + 1}`}
                            className="screen-image"
                          />
                        </div>
                        <div className="tablet-home-btn"></div>
                      </div>
                    </div>
                  )}

                  {activeDevice === "mobile" && (
                    <div className="mobile-mockup">
                      {/* <div className="mobile-frame">
                        <div className="mobile-notch"></div>
                        <div className="mobile-screen"> */}
                          <img
                            src={mobileScreens[currentSlide] || "/placeholder.svg"}
                            alt={`Mobile view ${currentSlide + 1}`}
                            className="screen-image"
                          />
                        </div>
                      // </div>
                    // </div>
                  )}
                </div>
              </div>

              <button className="carousel-nav next" onClick={handleNextSlide}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="slide-indicators">
              {getCurrentScreens().map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${currentSlide === index ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

            {/* Screen Info */}
            <div className="screen-info">
              <h3>{getScreenInfo().title}</h3>
              <p>{getScreenInfo().description}</p>
            </div>
          </div>
        </div>

        {/* Core Features Section */}
        <div className="core-features-section">
          <div className="container">
            <div className="features-layout">
              <div className="features-left">
                <div className="section-label">Core Features</div>
                <h2 className="section-title">Enhancing User Experience</h2>
              </div>

              <div className="features-right">
                <div className="feature-item">
                  <h3>👥 Live Inventory Access
                  </h3>
                  <p>
                  View and manage real-time stock availability from verified vendors globally, ensuring transparency and faster decisions.


                  </p>
                </div>

                <div className="feature-item">
                  <h3>🔔 Integrated Financial Tools
                  </h3>
                  <p>
                  Seamlessly manage invoices, e-way bills, and payment terms with over 12,000k financial institution integrations.



                  </p>
                </div>

                <div className="feature-item">
                  <h3>🎨 Smart Chat & Quotation Engine</h3>
                  <p>
                  Engage in direct chats, receive or send instant quotations, and approve deals right from the dashboard.

                  </p>
                </div>

                <div className="feature-item">
                  <h3>🛡️ Procurement Lifecycle Tracking

                  </h3>
                  <p>
                  From inquiry to delivery, every step of the buying process is visualized and tracked with clear status updates.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Makes it Unique Section */}
        <div className="other-features-section">
          <div className="container">
            <h2 className="other-features-title">✨ What Makes it Unique?</h2>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>🎯Live Global Inventory Access</h3>
                <p>
                Enables faster procurement decisions and reduces risks of stockouts or delays by providing up-to-date inventory status.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>🗺️Smart Chat & Instant Quotation System</h3>
                <p>
                Direct, real-time communication between buyers and sellers with instant quotation approval.Eliminates the need for lengthy email chains, speeding up negotiation and closing of deals.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>🧩Integrated Financial & Compliance Tools
                </h3>
                <p>
                Built-in invoicing, e-way bill generation, and 12,000k+ financial institution integrations.Simplifies post-deal formalities, ensuring a smooth financial and logistical workflow under a single platform.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>📲End-to-End Procurement Lifecycle Tracking</h3>
                <p>
                Visual tracking system from inquiry to delivery with real-time status updates.Enhances transparency, minimizes miscommunication, and helps stakeholders stay updated at all times.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>🎯Verified Seller Compliance Documentation</h3>
                <p>
                Easy access to GMP, cGMP, WHO certifications and legal documents.Builds trust and ensures buyers are sourcing only from compliant and quality-assured vendors.


                
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>💡Flexible, Scalable Subscription Plans</h3>
                <p>
                Custom pricing models for Raw Materials, KSMs, Intermediates, and APIs. Offers cost-effective access tailored to the business size and specialization within the chemical industry.



                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Objective of the App</h2>
            <p className="cta-description">
            The core objective of ChemBizZ is to revolutionize chemical commerce by providing a unified digital platform that connects verified buyers and sellers. From managing inquiries to generating e-way bills, ChemBizZ covers every step of the procurement cycle.

            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
