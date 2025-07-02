"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "../header"
import Footer from "../footer"
import './SYT.css'
import "@/styles/all.css"

export default function Lechalo() {
  const [scrollY, setScrollY] = useState(0)
  const [activeDevice, setActiveDevice] = useState("mobile")
  const [currentSlide, setCurrentSlide] = useState(0)

  // Screen arrays for different devices
  const desktopScreens = ["/img/SYTHome.png", "/img/SYTTours.png", "/img/SYTBooking.png", "/img/SYTProfile.png"]

  const tabletScreens = ["/img/SYTTab.png", "/img/SYTTabTours.png", "/img/SYTTabBooking.png", "/img/SYTTabProfile.png"]

  const mobileScreens = [
    "/img/portfolio/newphotos/Leo/Leo_WebEarl_1.png",
    "/img/portfolio/newphotos/Leo/Leo_WebEarl_2.png",
    "/img/portfolio/newphotos/Leo/Leo_WebEarl_3.png",
    "/img/portfolio/newphotos/Leo/Leo_WebEarl_4.png",
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
        { title: "Homepage", description: "Clean and intuitive landing page with tour discovery" },
        { title: "Tour Listings", description: "Comprehensive tour catalog with filters and search" },
        { title: "Booking Process", description: "Streamlined booking flow with calendar integration" },
        { title: "User Profile", description: "Personal dashboard for managing bookings and preferences" },
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
              <div className="logo-icon">
                <Image
                  src="/img/sytlogo.png"
                  alt="Start Your Tour Logo"
                  width={100}
                  height={100}
                  className="logo-image"
                />
              </div>
              <h1 className="main-title">Lechalo</h1>
              <p className="main-subtitle">
                Book storage space for personal belongings of travelers when they go off-destination in between a tour.
                Discover amazing destinations through curated guided tours with transparent pricing and authentic
                reviews.
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
              {/* <button
                className={`device-btn ${activeDevice === "desktop" ? "active" : ""}`}
                onClick={() => setActiveDevice("desktop")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                  <rect x="8" y="18" width="8" height="2" rx="1" fill="currentColor" />
                  <path d="M6 18h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Desktop</span>
              </button> */}

              {/* <button
                className={`device-btn ${activeDevice === "tablet" ? "active" : ""}`}
                onClick={() => setActiveDevice("tablet")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="18" r="1" fill="currentColor" />
                </svg>
                <span>Tablet</span>
              </button> */}

              <button
                className={`device-btn ${activeDevice === "mobile" ? "active" : ""}`}
                onClick={() => setActiveDevice("mobile")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="18" r="1" fill="currentColor" />
                </svg>
                <span>Mobile</span>
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
                      <div className="mobile-frame">
                        <div className="mobile-notch"></div>
                        <div className="mobile-screen">
                          <img
                            src={mobileScreens[currentSlide] || "/placeholder.svg"}
                            alt={`Mobile view ${currentSlide + 1}`}
                            className="screen-image"
                          />
                        </div>
                      </div>
                    </div>
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
                  <h3>Easy Online Booking System</h3>
                  <p>
                    Travelers can book tours via an online platform with curated experiences and a range of destination
                    options.
                  </p>
                </div>

                <div className="feature-item">
                  <h3>System-driven Updates</h3>
                  <p>
                    The whole system is automated for last-minute changes. No manual contact is required to deliver a
                    hassle-free experience.
                  </p>
                </div>

                <div className="feature-item">
                  <h3>Automated Tour Updates</h3>
                  <p>
                    Travelers and guides get updates about the tour status at every stage on the day of the booking.
                  </p>
                </div>

                <div className="feature-item">
                  <h3>Accurate Calendar System</h3>
                  <p>
                    Travelers can select the exact time slot and place for their tours to be booked, scheduled, and
                    confirmed.
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
                <div className="feature-icon">🎯</div>
                <h3>Focused on Tours Only</h3>
                <p>
                  Instead of mixing hotels, flights, and travel guides like most travel platforms, Start Your Tour
                  specializes only in curated guided tours. This niche focus ensures users aren't overwhelmed and get
                  relevant results quickly.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>Visually Clean & Intuitive</h3>
                <p>
                  The interface is clean and modern — built using React.js, making it fast, interactive, and
                  mobile-friendly. Whether a user is planning from desktop or mobile, the layout adapts to ensure ease
                  of navigation.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3>Personalized Recommendations</h3>
                <p>
                  The idea is to help users get suggestions based on their travel style — for example, recommending
                  eco-adventures to nature lovers or cultural city walks to history enthusiasts. This adds a smart,
                  personalized layer beyond traditional listings.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🔍</div>
                <h3>Transparent Tour Information</h3>
                <p>
                  Each tour listing includes detailed information like itinerary, what's included/excluded, maps,
                  images, and real customer reviews — so users can make informed choices.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3>End-to-End Booking Workflow</h3>
                <p>
                  The platform handles everything from browsing to booking, so users won't need to leave the site or
                  coordinate over calls/messages.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h3>Why It's Useful</h3>
                <p>
                  <strong>For Travelers:</strong> Hassle-free tour discovery with rich details and filters. No need to
                  search across multiple websites or worry about what's authentic — everything is curated.
                  <br />
                  <br />
                  <strong>For Tour Providers:</strong> A focused platform to showcase tours, get more visibility, and
                  manage bookings efficiently without building a separate website.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Adventure?</h2>
            <p className="cta-description">
              Join thousands of travelers who have discovered their perfect tours with our innovative platform.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
