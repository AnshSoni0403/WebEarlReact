"use client"
import { useEffect, useState } from "react"
import Header from "../header"
import Footer from "../footer"
import './wayout.css'
import "@/styles/all.css"

export default function WayOut() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Header />
      <div className="portfolio-page">
        {/* Hero Header Section */}
        <div className="hero-header">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="project-title">Wayout</h1>
              <p className="project-description">
                ❤️ Welcome to Wayout – Where Meaningful Matches Begin. At Wayout, we believe that love is a
                journey—and every individual deserves a meaningful and lasting connection. Our platform blends
                traditional values with modern technology, offering a trusted and efficient path to finding your life
                partner through seamless and personalized matchmaking.
              </p>
              <div className="project-tags">
                <span className="tag">matrimonial platform</span>
                <span className="tag">matchmaking algorithms</span>
                <span className="tag">cultural values</span>
                <span className="tag">profile verification</span>
                <span className="tag">secure communication</span>
                <span className="tag">compatibility matching</span>
                <span className="tag">traditional meets modern</span>
                <span className="tag">life partner search</span>
              </div>
            </div>
            <div className="hero-right">
              <div className="logo-container" style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
                <img 
                  src="/img/portfolio/newphotos/WayOut/WayOutLogo_WebEarl_1.png"
                  alt="Wayout Logo" 
                  style={{ maxWidth: '180px', height: 'auto', borderRadius: '20px',marginTop: '40px' }} 
                  onError={(e) => {
                    e.target.src = "/placeholder-logo.png";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Visual Section */}
        <div className="visuals-section">
          <div className="geometric-bg">
            <div className="triangle triangle-1"></div>
            <div className="triangle triangle-2"></div>
            <div className="triangle triangle-3"></div>
            <div className="triangle triangle-4"></div>
          </div>

          <div className="visuals-content">
            <div className="main-mockup">
              {/* <div className="floating-logo">
                <div className="floating-logo-text">WayOut</div>
              </div> */}
              <div className="mobile-mockup">
                <div className="mobile-frame">
                  <div className="mobile-speaker"></div>
                  <div className="mobile-camera"></div>
                  <div className="mobile-screen">
                    <img
                      src="/img/portfolio/newphotos/WayOut/WayOut_WebEarl_1.png"
                      alt="Wayout Homepage"
                      className="screen-image"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=400&width=700&text=Wayout+Homepage"
                      }}
                    />
                  </div>
                  <div className="mobile-home-button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
            <div className="mobile-mockup-grid large">
              <div className="mobile-frame">
                <div className="mobile-speaker"></div>
                <div className="mobile-camera"></div>
                <div className="mobile-screen">
                  <img
                    src="/img/portfolio/newphotos/WayOut/WayOut_WebEarl_2.png"
                    alt="Profile Discovery"
                    className="screen-image"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=400&width=700&text=Profile+Discovery"
                    }}
                  />
                </div>
                <div className="mobile-home-button"></div>
              </div>
            </div>

            <div className="mobile-mockup-grid" style={{ marginLeft: '120px' }}>
              <div className="mobile-frame">
                <div className="mobile-speaker"></div>
                <div className="mobile-camera"></div>
                <div className="mobile-screen">
                  <img
                    src="/img/portfolio/newphotos/WayOut/WayOut_WebEarl_3.png"
                    alt="Smart Matching"
                    className="screen-image"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=400&width=700&text=Smart+Matching"
                    }}
                  />
                </div>
                <div className="mobile-home-button"></div>
              </div>
            </div>

            <div className="mobile-mockup-grid" style={{ marginLeft: '60px' }}>
              <div className="mobile-frame">
                <div className="mobile-speaker"></div>
                <div className="mobile-camera"></div>
                <div className="mobile-screen">
                  <img
                    src="/img/portfolio/newphotos/WayOut/WayOut_WebEarl_4.png"
                    alt="Secure Communication"
                    className="screen-image"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=400&width=700&text=Secure+Communication"
                    }}
                  />
                </div>
                <div className="mobile-home-button"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Approach Section */}
        <div className="approach-section">
          <div className="approach-content">
            <h2 className="section-title">Project Approach / Solution</h2>
            <p className="approach-intro">
              Employ a user-focused and culturally-sensitive approach to streamline matrimonial operations, enhance
              compatibility matching, and secure the platform for meaningful connections and lasting relationships.
            </p>

            <div className="solutions-grid">
              <div className="solution-card">
                <h3 className="solution-title">Advanced Profile Verification</h3>
                <p className="solution-description">
                  Implement comprehensive verification protocols to ensure authentic profiles and build trust within the
                  matrimonial community.
                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">Cultural Compatibility Matching</h3>
                <p className="solution-description">
                  Develop sophisticated algorithms that consider cultural values, traditions, and lifestyle preferences
                  for meaningful matches.
                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">Secure Communication Platform</h3>
                <p className="solution-description">
                  Create a safe and private messaging system that allows users to connect while maintaining privacy and
                  security.
                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">Personalized Matchmaking</h3>
                <p className="solution-description">
                  Utilize AI-driven recommendations based on preferences, compatibility scores, and behavioral patterns
                  for better matches.
                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">Mobile-First Experience</h3>
                <p className="solution-description">
                  Design responsive interfaces optimized for mobile devices to ensure seamless access across all
                  platforms.
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
        </div>
      </div>
      <Footer />
    </>
  )
}