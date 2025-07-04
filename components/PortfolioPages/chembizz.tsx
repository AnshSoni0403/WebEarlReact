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
  const desktopScreens = ["/img/portfolio/SYT/home.png", "/img/portfolio/newphotos/SYT/Web1.png", "/img/portfolio/newphotos/SYT/Web2.png", "/img/portfolio/newphotos/SYT/Web3.png"]

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
              <h1 className="main-title">ChemBizz</h1>
              <p className="main-subtitle"><b>Travel Website</b></p>
              
              <p className="main-subtitle">
              Start Your Tour is a digital travel-tech platform. that bridges the gap between travellers and travel agencies. We provide an all-in-one solution for trip customisation, package management, and booking operations, making travel planning seamless and efficient.

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
                  <h3>👥 User-Friendly Interface</h3>
                  <p>
                  The decent, easy to use, app experience provided by SYT, guarantees there are no problems navigating the app, whether you are a customer booking trips, or a services provider dealing with bookings.

                  </p>
                </div>

                <div className="feature-item">
                  <h3>🔔 Real-Time Update & Alerts</h3>
                  <p>
                  Users and vendors are instantaneously notified of booking, messages, changes and confirmations.
                  </p>
                </div>

                <div className="feature-item">
                  <h3>🎨 Customization Flexibility</h3>
                  <p>
                  Customers are able to order specialized packages, and sellers can simply design and adjust packages, hence the process is customized and streamlined.

                  </p>
                </div>

                <div className="feature-item">
                  <h3>🛡️ Safe & Clear deals
                  </h3>
                  <p>
                  This will guarantee a convenient, clear and safe system to both vendors and users when booking an event and paying.
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
                <h3>🎯Vendor-Customer Direct Connection</h3>
                <p>
                Passing through intermediaries, the travellers do not need middlemen; they can talk and communicate with the confirmed local sellers and personalise the process of planning.

                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>🗺️Clear Tour Details</h3>
                <p>
                Every touring itinerary is well-specified with itineraries, included/ excluded items, maps of localities, actual pictures, and true customer feedback, making users feel certain and consider their choices.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>🧩Flexible Travel Packages</h3>
                <p>
                Travellers can request, and vendors can build, fully personalised itineraries —  personal trips made easy.

                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>📲The All-in-One App experience</h3>
                <p>
                Finding a vendor, booking and paying everything takes place in the app- on both sides, the vendor and the user.

                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>🎯Personalised Recommendations</h3>
                <p>
                The idea is to help users get suggestions based on their travel style — for example, recommending  journeys within the style of their travel, contemporary smartness, and thoughtful experience.

                
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>💡Intelligent Travel Aids</h3>
                <p>
                Vendors have access to real-time analytics, reservation intelligence and trends data, whereas users can receive quick updates, filters, and saved trips.

                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Connecting Explorers & Experience Creators</h2>
            <p className="cta-description">
            Whether you're planning your next trip or offering unforgettable experiences, everything starts here!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
