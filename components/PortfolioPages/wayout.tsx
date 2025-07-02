"use client"
import { useEffect, useState } from "react"
import Header from "../header"
import Footer from "../footer"
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
      <style jsx>{`
        .portfolio-page {
          background: white;
          min-height: 100vh;
          margin-top: 60px;
        }

        .hero-header {
          background: white;
          padding: 60px 0 80px 0;
          position: relative;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: flex-start;
          gap: 60px;
        }

        .hero-left {
          flex: 1;
        }

        .hero-right {
          width: 120px;
          flex-shrink: 0;
        }

        .project-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 30px;
          line-height: 1.2;
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
          background: #ec4899;
          color: white;
          border-color: #ec4899;
        }

        // .logo-container {
        //   width: 100px;
        //   height: 100px;
        //   background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
        //   border-radius: 20px;
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
        // }

        .logo-text {
          font-size: 2rem;
          font-weight: 800;
          color: white;
        }

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
          border-bottom: 50px solid #ec4899;
          transform: rotate(15deg);
        }

        .triangle-2 {
          top: 20%;
          right: 10%;
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 60px solid #be185d;
          transform: rotate(-30deg);
        }

        .triangle-3 {
          bottom: 15%;
          left: 8%;
          width: 0;
          height: 0;
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-bottom: 40px solid #ec4899;
          transform: rotate(45deg);
        }

        .triangle-4 {
          bottom: 30%;
          right: 15%;
          width: 0;
          height: 0;
          border-left: 35px solid transparent;
          border-right: 35px solid transparent;
          border-bottom: 55px solid #be185d;
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
          height: 400px;
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

        .floating-logo {
          position: absolute;
          left: -80px;
          top: 50%;
          transform: translateY(-50%);
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px rgba(236, 72, 153, 0.4);
        }

        .floating-logo-text {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
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
          height: 350px;
          background: #000;
          position: relative;
        }

        .screen-content.tall {
          height: 400px;
        }

        .approach-section {
          background: white;
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
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .solution-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 30px;
          transition: all 0.3s ease;
          position: relative;
        }

        .solution-card:hover {
          border-color: #ec4899;
          box-shadow: 0 10px 30px rgba(236, 72, 153, 0.1);
          transform: translateY(-5px);
        }

        .solution-title {
          font-size: 1.2rem;
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
          background: #ec4899;
          border-radius: 2px 0 0 2px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .solution-card:hover::before {
          opacity: 1;
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
      `}</style>

      <Header />
      <div className="portfolio-page">
        {/* Hero Header Section */}
        <div className="hero-header">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="project-title">SaptaVidhi</h1>
              <p className="project-description">
                ❤️ Welcome to SaptaVidhi – Where Meaningful Matches Begin. At SaptaVidhi, we believe that love is a
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
                  src="/img/portfolio/saptavidhi/logo.png" 
                  alt="Saptavidhi Logo" 
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
              <div className="floating-logo">
                <div className="floating-logo-text">SV</div>
              </div>
              <div className="browser-mockup">
                <div className="browser-header">
                  <div className="browser-controls">
                    <span className="control red"></span>
                    <span className="control yellow"></span>
                    <span className="control green"></span>
                  </div>
                  <div className="address-bar">saptavidhi.com</div>
                </div>
                <div className="browser-content">
                  <img
                    src="/img/portfolio/newphotos/Saptavidhi/SaptaVidhiWeb_WebEarl_1.png"
                    alt="SaptaVidhi Homepage"
                    className="screen-image"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=500&width=900&text=SaptaVidhi+Homepage"
                    }}
                  />
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
            <div className="screen-mockup large">
              {/* <div className="screen-header">
                <div className="screen-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
              </div> */}
              <div className="screen-content tall">
                <img
                  src="/img/portfolio/newphotos/Saptavidhi/SaptaVidhiApp_WebEarl_1.png"
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
                  src="/img/portfolio/newphotos/Saptavidhi/SaptaVidhiWeb_WebEarl_2.png"
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
                  src="/img/portfolio/newphotos/Saptavidhi/SaptaVidhiWeb_WebEarl_3.png"
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
