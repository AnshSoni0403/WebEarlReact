"use client"
import { useState } from "react"
import Link from "next/link"
import Header from "../header"
import Footer from "../footer"
import "@/styles/all.css"

export default function SYT() {
  // Removed video-related state and handlers

  return (
    <>
      <style jsx>{`
        .hero-section {
        margin-top: 50px;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .hero-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23e2e8f0' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.6;
        }

        .hero-container {
          position: relative;
          z-index: 2;
        }

        .hero-row {
          min-height: 100vh;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .hero-content {
          color: #1a202c;
          margin-bottom: 40px;
        }

        .stats-badge {
          display: inline-flex;
          align-items: center;
          background-color: rgba(99, 102, 241, 0.1);
          border-radius: 50px;
          padding: 12px 24px;
          margin-bottom: 30px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .user-avatars {
          display: flex;
          margin-right: 12px;
        }

        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid white;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .user-avatar:not(:first-child) {
          margin-left: -8px;
        }

        .stats-text {
          font-size: 14px;
          font-weight: 600;
          color: #4c51bf;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          color: #1a202c;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 40px;
          color: #4a5568;
          max-width: 500px;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary-cta {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          border: none;
        }

        .btn-primary-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
          color: white;
          text-decoration: none;
        }

        .btn-secondary-cta {
          display: inline-flex;
          align-items: center;
          background-color: transparent;
          color: #667eea;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          border: 2px solid #667eea;
          cursor: pointer;
        }

        .btn-secondary-cta:hover {
          background-color: #667eea;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .phone-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .phone-mockup {
          position: relative;
          width: 300px;
          height: 600px;
          background: linear-gradient(145deg, #2d3748, #1a202c);
          border-radius: 40px;
          padding: 20px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
          transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
          transition: all 0.3s ease;
        }

        .phone-mockup:hover {
          transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02);
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          border-radius: 30px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .status-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 44px;
          background: rgba(0, 0, 0, 0.3);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .status-dots {
          display: flex;
          gap: 4px;
        }

        .status-dot {
          width: 4px;
          height: 4px;
          background-color: white;
          border-radius: 50%;
        }

        .screen-content {
          width: 100%;
          height: 100%;
          background: linear-gradient(270deg, #00b0e7 0%, #75f389 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          color: white;
          text-align: center;
          padding: 40px 20px;
        }

        .screen-placeholder {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .screen-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .screen-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
          display: flex;
          align-items: flex-end;
          padding: 20px;
          color: white;
        }

        .overlay-content h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .overlay-content p {
          font-size: 14px;
          opacity: 0.9;
          margin: 0;
        }

        .home-indicator {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 134px;
          height: 5px;
          background-color: white;
          border-radius: 3px;
          opacity: 0.8;
        }

        .phone-reflection {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          height: 50%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          border-radius: 30px;
          pointer-events: none;
        }

        .features-section {
          background: white;
          margin: 100px 0;
          padding: 80px 0;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        .features-header {
          margin-bottom: 80px;
        }

        .features-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 30px;
          color: #1a202c;
          padding-top: 20px;
        }

        .features-subtitle {
          font-size: 1.1rem;
          color: #4a5568;
          max-width: 600px;
          margin: 0 auto;
        }
        .feature-column{
          margin-bottom: 50px;
        }

        .feature-card {
          padding: 35px 30px;
          border-radius: 20px;
          background-color: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          height: 100%;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
          margin-bottom: 40px;
        }
          
      

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          border-color: #667eea;
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: block;
        }

        .feature-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: #1a202c;
        }

        .feature-description {
          color: #4a5568;
          line-height: 1.6;
          margin: 0;
        }

        .download-section {
          background: linear-gradient(270deg, #00b0e7 0%, #75f389 100%);
          padding: 100px 0;
          color: white;
          margin-top: 60px;
        }

        .download-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .download-description {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 30px;
        }

        .download-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .download-icon {
          font-size: 4rem;
          opacity: 0.3;
        }

        .btn-download {
          display: inline-flex;
          align-items: center;
          background-color: white;
          color: #667eea;
          padding: 16px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
        }

        .btn-download:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
          color: #667eea;
          text-decoration: none;
        }
      `}</style>

      <Header />
      <div className="portfolio-detail-page">
        {/* Hero Section with Clean White Background */}
        <div className="hero-section">
          {/* Background Pattern */}
          <div className="hero-pattern" />

          <div className="container hero-container">
            <div className="row align-items-center hero-row">
              {/* Left Content */}
              <div className="col-lg-5">
                <div className="hero-content">
                  {/* Stats Badge */}
                  <div className="stats-badge">
                    <div className="user-avatars">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="user-avatar"
                          style={{
                            backgroundColor: `hsl(${i * 60}, 70%, 60%)`,
                          }}
                        >
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="stats-text">10k+ Happy Travelers</span>
                  </div>

                  <h1 className="hero-title">DISCOVER AMAZING TOURS WITH START YOUR TOUR</h1>

                  <p className="hero-description">
                    Experience the world through curated guided tours. From cultural city walks to eco-adventures, find
                    your perfect journey with transparent pricing and authentic reviews.
                  </p>

                  {/* CTA Buttons */}
                  <div className="section-button">
                    <Link href="http://startyourtour.com" className="btn-primary-cta" target="_blank" rel="noopener noreferrer">
                      🚀 Visit Live Site
                    </Link>

                    <Link 
                      href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" 
                      className="callto-action-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      // style={{
                      //   display: 'flex',
                      //   alignItems: 'center',
                      //   gap: '8px',
                      //   textDecoration: 'none'
                      // }}
                    >
                      📱 View Demo
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="col-lg-7">
                <div className="phone-container">
                  <div className="phone-mockup">
                    {/* Phone Screen */}
                    <div className="phone-screen">
                      {/* Status Bar */}
                      <div className="status-bar">
                        <span>9:41</span>
                        <div className="status-dots">
                          <div className="status-dot"></div>
                          <div className="status-dot"></div>
                          <div className="status-dot"></div>
                        </div>
                        <span>100%</span>
                      </div>

                      {/* Screen Content */}
                      <div className="screen-content">
                        <div className="screen-placeholder">
                          <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "12px" }}>
                            Start Your Tour
                          </h3>
                          <p style={{ fontSize: "16px", opacity: 0.9, margin: 0 }}>Discover amazing destinations</p>
                          <div style={{ marginTop: "20px", fontSize: "40px" }}>🌍</div>
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div className="home-indicator" />
                    </div>

                    {/* Phone Reflection */}
                    <div className="phone-reflection" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center features-header">
                <h2 className="features-title">Why Choose Start Your Tour?</h2>
                <p className="features-subtitle">
                  Experience travel planning like never before with our innovative features
                </p>
              </div>
            </div>

            <div className="row">
              {[
                {
                  icon: "🎯",
                  title: "Focused on Tours Only",
                  description:
                    "Specializes in curated guided tours without mixing hotels and flights, ensuring relevant results.",
                },
                {
                  icon: "✨",
                  title: "Visually Clean & Intuitive",
                  description:
                    "Built with React.js for a fast, interactive, and mobile-friendly experience that adapts to any device.",
                },
                {
                  icon: "🤖",
                  title: "Personalized Recommendations",
                  description: "Smart suggestions based on travel style, from eco-adventures to cultural city walks.",
                },
                {
                  icon: "📋",
                  title: "Transparent Information",
                  description: "Detailed itineraries, inclusions, maps, and real reviews for informed decisions.",
                },
                {
                  icon: "🌍",
                  title: "Global Destinations",
                  description: "Discover tours across continents with local guides and authentic experiences.",
                },
                {
                  icon: "💳",
                  title: "Secure Booking",
                  description: "Safe and secure payment processing with instant confirmation and 24/7 support.",
                },
              ].map((feature, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="feature-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="download-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="download-title">Ready to Start Your Adventure?</h2>
                <p className="download-description">
                  Join thousands of travelers who have discovered their perfect tours with us.
                </p>
                <div className="download-buttons" style={{
                  display: 'flex',
                  gap: '20px',
                  marginTop: '30px',
                  flexWrap: 'wrap'
                }}>
                  <Link 
                    href="http://startyourtour.com" 
                    className="btn-download"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '15px 30px',
                      borderRadius: '50px',
                      background: 'white',
                      color: '#00b0e7',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    🌟 Explore Tours Now
                  </Link>
                  <Link 
                    href="#" 
                    className="btn-download"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '15px 30px',
                      borderRadius: '50px',
                      background: 'transparent',
                      color: 'white',
                      border: '2px solid white',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    📱 Download App
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 text-center" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px'
              }}>
                <div className="download-icon" style={{
                  fontSize: '80px',
                  marginBottom: '20px'
                }}>✈️</div>
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
