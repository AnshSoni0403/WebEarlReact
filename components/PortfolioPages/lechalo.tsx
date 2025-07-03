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
              <div className="logo-icon" style={{
                width: '120px',
                height: '120px',
                
                
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                
                margin: '0 auto 20px',
                overflow: 'hidden',
                padding: '15px',
                boxSizing: 'border-box'
              }}>
                <Image
                  src="/img/portfolio/newphotos/Leo/logo.png"
                  alt="Lechalo Logo"
                  width={90}
                  height={90}
                  style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: '100%'
                  }}
                />
              </div>
              <h1 className="main-title">Lechalo</h1>
              <p className="main-subtitle"><b>Automobility</b></p>
              <p className="main-subtitle">
              Le Chalo has evolved from a taxi-sharing app into a powerful super app for logistics and transportation. Designed with users and drivers in mind, Le Chalo simplifies parcel delivery with real-time tracking, driver bidding, and multi-vehicle support — all through a sleek and user-friendly mobile experience. Today, Le Chalo offers services across shuttle transport, parcel delivery, and taxi bookings, making it your all-in-one solution for efficient, reliable, and convenient travel and logistics.
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
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '20px',
                      margin: '0 auto',
                      maxWidth: '1000px',
                      width: '100%',
                      flexWrap: 'wrap'
                    }}>
                      {[0, 1, 2].map((index) => (
                        <img
                          key={index}
                          src={mobileScreens[(currentSlide + index) % mobileScreens.length] || "/placeholder.svg"}
                          alt={`Screenshot ${index + 1}`}
                          style={{
                            flex: '1',
                            minWidth: '200px',
                            maxWidth: '300px',
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            borderRadius: '8px'
                          }}
                        />
                      ))}
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
                  <h3>📦 Real-Time Parcel Tracking</h3>
                  <p>
                  Stay updated with live location updates and know exactly where your parcel is at all times.
                  </p>
                </div>

                <div className="feature-item">
                  <h3>💰 Driver-Friendly Earnings Dashboard</h3>
                  <p>
                  Easily track your deliveries, payments, and earnings with complete transparency.
                  </p>
                </div>

                <div className="feature-item">
                  <h3>🗺️ Turn-by-Turn Navigation</h3>
                  <p>
                  Optimize delivery routes with built-in directions to ensure faster and smoother journeys.
                  </p>
                </div>

                <div className="feature-item">
                  <h3>💬 In-App Communication</h3>
                  <p>
                  Chat directly with your driver or customer for updates, special instructions, or coordination.
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
                <h3>Multi-Vehicle Delivery Support</h3>
                <p>
                Le Chalo offers flexible delivery options with 2-wheelers, 3-wheelers, and 4-wheelers to suit every parcel's size and weight. Whether it’s a quick city drop or an inter-city shipment, we’ve got you covered.

                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>Live Bidding System for Drivers</h3>
                <p>
                Drivers can bid on available delivery requests in real-time, allowing users to get competitive rates. This creates a win-win environment where deliveries are faster and more cost-effective.

                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3>Dual User Roles – Driver & Sender</h3>
                <p>
                Whether you're sending a package or picking one up, Le Chalo allows easy profile setup for both users and drivers. This dual flexibility streamlines the entire logistics process.


                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🔍</div>
                <h3>End-to-End Data Security
                </h3>
                <p>
                All user and delivery data is encrypted, ensuring complete privacy and protection throughout the app experience. Le Chalo follows strict security protocols to safeguard your personal information.

                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3>Clean, Responsive UI/UX</h3>
                <p>
                The app’s sleek and minimalist interface is designed for ease of use by everyone — from tech-savvy users to first-time app users. Its responsive performance ensures smooth navigation and quick task execution.

                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h3>All-in-One Super App</h3>
                <p>
                Originally launched for ride-sharing, Le Chalo now offers everything from parcel delivery to taxi bookings and shuttle services. It’s a one-stop app tailored for both logistics and travel needs.

                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title"> Deliver Smarter, Live Simpler!</h2>
            <p className="cta-description">
            Step into the new era of hassle-free logistics — with Le Chalo, every delivery is quicker, smarter, and effortlessly managed.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
