"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "../header"
import Footer from "../footer"
import './SYT.css'
import "@/styles/all.css"

export default function BattingApp() {
  const [scrollY, setScrollY] = useState(0)
  const [activeDevice, setActiveDevice] = useState("desktop")
  const [currentSlide, setCurrentSlide] = useState(0)

  // Screen arrays for different devices
  const desktopScreens = ["/img/portfolio/newphotos/cricgem/Cric1.png", "/img/portfolio/newphotos/cricgem/Cric2.png", "/img/portfolio/newphotos/cricgem/Cric3.png", "/img/portfolio/newphotos/cricgem/Cric4.png"]

  const tabletScreens = ["/img/SYTTa.png", "/img/SYTTabTours.png", "/img/SYTTabBooking.png", "/img/SYTTabProfile.png"]

  const mobileScreens = [
    "/img/portfolio/newphotos/cricgem/cricgem_WebEarl_1.png",
    "/img/portfolio/newphotos/cricgem/cricgem_WebEarl_2.png",
    "/img/portfolio/newphotos/cricgem/cricgem_WebEarl_3.png",
    "/img/portfolio/newphotos/cricgem/cricgem_WebEarl_4.png",
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
        <div className="hero-section" style={{ padding: '60px 0' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px' }}>
              <div style={{ 
                margin: '40px auto 20px',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img
                  src="/img/portfolio/newphotos/cricgem/logo.png"
                  alt="Betting App Logo"
                  style={{ 
                    width: '200%',
                    height: '200%',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>
              <h1 style={{ 
                fontSize: '3rem', 
                fontWeight: '800', 
                color: '#1a202c',
                margin: '0',
                lineHeight: '1.2'
              }}>
                CricGem
              </h1>
              <p className=""><b>Cricket Betting App</b></p>
              <p style={{
                fontSize: '1.1rem',
                color: '#4a5568',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.7'
              }}>
                CricGem is a fantasy cricket app that lets you draft your dream team, join daily contests, and track live match performance. It’s built for fans who love strategy, competition, and an immersive way to enjoy cricket beyond just watching.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Visuals Carousel Section */}
        <div className="visuals-section">
          <div className="container">

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
                      <img
                        src={mobileScreens[currentSlide] || "/placeholder.svg"}
                        alt={`Mobile view ${currentSlide + 1}`}
                        className="screen-image"
                        style={{ width: '100%', height: 'auto' }}
                      />
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
                <h2 className="section-title">🏆 Enhancing User Experience</h2>
              </div>

              <div className="features-right">
                <div className="feature-item">
                  <h3>⚡ Live Match Sync</h3>
                  <p>
                  Stay in sync with real-time match updates and track your fantasy team's performance as the game unfolds.
                  </p>
                </div>

                <div className="feature-item">
                  <h3>🏆 Multiple Contest Types</h3>
                  <p>
                    Play in mega leagues, head-to-head battles, or private games with friends—there's a contest for every skill level.
                  </p>
                </div>

                <div className="feature-item">
                  <h3>🏦 Instant Withdrawals</h3>
                  <p>
                  Securely withdraw your winnings instantly with reliable payment gateways and zero hassle.
                  </p>
                </div>

                <div className="feature-item">
                  <h3>🔄 Live Match Sync</h3>
                  <p>
                  Stay updated with real-time match scores and track your fantasy team's performance as the game progresses.
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
                <h3>🛡️Secure Play</h3>
                <p>
                Play in a safe and fair environment with verified users, anti-cheat systems, and transparent scoring. CricGem is committed to ensuring integrity in every contest.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>⚡Quick Setup</h3>
                <p>
                Register easily, choose a match, and start building your fantasy team in just a few taps. CricGem is designed for smooth and fast onboarding.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>🏆Live Leaderboards</h3>
                <p>
                Track your team's progress in real time with live score updates and rankings. See how your strategy plays out as matches unfold.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>👥Refer & Earn</h3>
                <p>
                Share CricGem with your friends using your referral code. As they join and participate, you unlock special benefits and exclusive in-app features.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>📊Player Insights</h3>
                <p>
                Access useful stats, performance history, and expert tips to help you make better team decisions. CricGem supports informed, skillful play.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>🎁Referral Rewards</h3>
                <p>New users receive a welcome benefit when they join CricGem. Invite friends and grow a network of fellow fans while enjoying added features along the way.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">🏏 Ready to Build Your Winning Team?</h2>
            <p className="cta-description">
            Join thousands of cricket fans already competing on CricGem. Pick your match, build your dream team, and start winning real cash today!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
