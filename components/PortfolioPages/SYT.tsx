"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "../header"
import Footer from "../footer"
import "@/styles/all.css"

export default function SYT() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <style jsx>{`
        .hero-section {
          background: #ffffff;
          padding: 80px 0 60px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
          margin-top : 30px
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          animation: float 6s ease-in-out infinite;
        }

        .floating-circle:nth-child(1) {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-circle:nth-child(2) {
          width: 150px;
          height: 150px;
          top: 20%;
          right: 15%;
          animation-delay: 2s;
        }

        .floating-circle:nth-child(3) {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .logo-section {
          margin: 0 auto 40px auto;
          max-width: 800px;
          text-align: center;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo-icon {
          width: 100px;
          height: 100px;
          margin: 0 auto 30px auto;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .logo-image {
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
          transition: all 0.3s ease;
          object-fit: contain;
        }

        .logo-icon:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
        }

        .main-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 20px;
          line-height: 1.2;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .main-subtitle {
          font-size: 1.3rem;
          color: #4a5568;
          max-width: 800px;
          margin: 0 auto 50px auto;
          line-height: 1.6;
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 80px;
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .btn-primary {
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
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
          color: white;
          text-decoration: none;
        }

        .btn-secondary {
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
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .btn-secondary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: #667eea;
          transition: width 0.3s ease;
          z-index: -1;
        }

        .btn-secondary:hover::before {
          width: 100%;
        }

        .btn-secondary:hover {
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
          text-decoration: none;
        }

        .devices-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 150px 0;
          position: relative;
          overflow: hidden;
        }

        .devices-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .laptop-mockup {
          position: absolute;
          left: 50px;
          top: 50%;
          transform: translateY(-50%) perspective(2500px) rotateX(8deg) rotateY(25deg) rotateZ(-2deg);
          width: 700px;
          height: 450px;
          z-index: 1;
          transition: all 0.5s ease;
          animation: slideInLeft 1.2s ease-out;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(-100px) perspective(2500px) rotateX(8deg) rotateY(25deg) rotateZ(-2deg);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0) perspective(2500px) rotateX(8deg) rotateY(25deg) rotateZ(-2deg);
          }
        }

        .laptop-mockup:hover {
          transform: translateY(-50%) perspective(2500px) rotateX(5deg) rotateY(20deg) rotateZ(-1deg) scale(1.02);
        }

        .laptop-base {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
          border-radius: 25px 25px 8px 8px;
          padding: 25px 25px 50px 25px;
          position: relative;
          box-shadow: 
            0 40px 80px rgba(0, 0, 0, 0.4),
            0 20px 40px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .laptop-screen {
          width: 100%;
          height: 100%;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          background-color: #000;
          background-image: url('/img/desktop-screenshot.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
        }

        .laptop-bottom {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 85%;
          height: 20px;
          background: linear-gradient(145deg, #2d2d2d, #1a1a1a);
          border-radius: 0 0 20px 20px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .laptop-hinge {
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          width: 70%;
          height: 5px;
          background: #0f0f0f;
          border-radius: 3px;
        }

        .laptop-camera {
          position: absolute;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 8px;
          background: #333;
          border-radius: 50%;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }

        .tablet-mockup {
          position: absolute;
          right: 100px;
          top: 50%;
          transform: translateY(-50%) perspective(2000px) rotateX(-8deg) rotateY(-15deg) rotateZ(3deg);
          width: 350px;
          height: 500px;
          z-index: 2;
          transition: all 0.5s ease;
          animation: slideInRight 1.2s ease-out 0.3s both;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(100px) perspective(2000px) rotateX(-8deg) rotateY(-15deg) rotateZ(3deg);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0) perspective(2000px) rotateX(-8deg) rotateY(-15deg) rotateZ(3deg);
          }
        }

        .tablet-mockup:hover {
          transform: translateY(-50%) perspective(2000px) rotateX(-5deg) rotateY(-10deg) rotateZ(2deg) scale(1.02);
        }

        .tablet-frame {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
          border-radius: 25px;
          padding: 20px;
          position: relative;
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 15px 30px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .tablet-screen {
          width: 100%;
          height: 100%;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          background-color: #000;
          background-image: url('/img/mobile-screenshot.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.3);
        }

        .tablet-home-button {
          position: absolute;
          bottom: -35px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 50px;
          background: linear-gradient(145deg, #2d2d2d, #1a1a1a);
          border-radius: 50%;
          border: 3px solid #0f0f0f;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
          opacity: 0.6;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          color: #667eea;
          font-size: 14px;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }

        .core-features-section {
          background: white;
          padding: 120px 0;
          position: relative;
        }

        .features-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: start;
        }

        .features-left {
          padding-right: 40px;
          position: sticky;
          top: 100px;
        }

        .section-label {
          font-size: 1rem;
          color: #667eea;
          font-weight: 600;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          color: #1a202c;
          line-height: 1.2;
          margin-bottom: 30px;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .features-right {
          display: flex;
          flex-direction: column;
          gap: 50px;
        }

        .feature-item {
          padding: 40px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out both;
        }

        .feature-item:nth-child(1) { animation-delay: 0.6s; }
        .feature-item:nth-child(2) { animation-delay: 0.8s; }
        .feature-item:nth-child(3) { animation-delay: 1s; }
        .feature-item:nth-child(4) { animation-delay: 1.2s; }

        .feature-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          border-color: #667eea;
        }

        .feature-item h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 15px;
        }

        .feature-item p {
          font-size: 1.1rem;
          color: #4a5568;
          line-height: 1.6;
          margin: 0;
        }

        .other-features-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 120px 0;
          position: relative;
        }

        .other-features-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #1a202c;
          text-align: center;
          margin-bottom: 80px;
          opacity: 0;
          animation: fadeInUp 1s ease-out both;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
        }

        .feature-card {
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          text-align: left;
          transition: all 0.4s ease;
          border: 1px solid #e2e8f0;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out both;
        }

        .feature-card:nth-child(1) { animation-delay: 0.2s; }
        .feature-card:nth-child(2) { animation-delay: 0.4s; }
        .feature-card:nth-child(3) { animation-delay: 0.6s; }
        .feature-card:nth-child(4) { animation-delay: 0.8s; }
        .feature-card:nth-child(5) { animation-delay: 1s; }
        .feature-card:nth-child(6) { animation-delay: 1.2s; }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          border-color: #667eea;
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
          display: block;
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .feature-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 15px;
        }

        .feature-card p {
          font-size: 1rem;
          color: #4a5568;
          line-height: 1.6;
          margin: 0;
        }

        .cta-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 120px 0;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.5;
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 20px;
          opacity: 0;
          animation: fadeInUp 1s ease-out both;
        }

        .cta-description {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .btn-white {
          display: inline-flex;
          align-items: center;
          background-color: white;
          color: #667eea;
          padding: 18px 36px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
          position: relative;
          overflow: hidden;
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .btn-white::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
          transition: left 0.5s;
        }

        .btn-white:hover::before {
          left: 100%;
        }

        .btn-white:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(255, 255, 255, 0.4);
          color: #667eea;
          text-decoration: none;
        }

        @media (max-width: 1200px) {
          .devices-container {
            height: 600px;
          }
          
          .laptop-mockup {
            width: 600px;
            height: 380px;
            left: 20px;
          }
          
          .tablet-mockup {
            width: 300px;
            height: 430px;
            right: 50px;
          }
        }

        @media (max-width: 768px) {
          .features-layout {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          
          .features-left {
            padding-right: 0;
            text-align: center;
            position: static;
          }
          
          .devices-container {
            height: 500px;
            flex-direction: column;
            gap: 30px;
          }
          
          .laptop-mockup {
            position: relative;
            left: 0;
            top: 0;
            transform: perspective(1500px) rotateX(5deg) rotateY(0deg);
            width: 400px;
            height: 260px;
          }
          
          .tablet-mockup {
            position: relative;
            right: 0;
            top: 0;
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
            width: 250px;
            height: 350px;
          }
        }
      `}</style>

      <Header />
      <div className="portfolio-detail-page">
        {/* Hero Section - Centered Logo and Title */}
        <div className="hero-section">
          {/* <div className="floating-elements">
            <div className="floating-circle"></div>
            <div className="floating-circle"></div>
            <div className="floating-circle"></div>
          </div> */}

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
              <h1 className="main-title">Start Your Tour</h1>
              <p className="main-subtitle">
                Book storage space for personal belongings of travelers when they go off-destination in between a tour.
                Discover amazing destinations through curated guided tours with transparent pricing and authentic
                reviews.
              </p>
            </div>

            <div className="cta-buttons">
              <Link href="http://startyourtour.com" className="btn-primary" target="_blank" rel="noopener noreferrer">
                🚀 Visit Live Site
              </Link>
              <Link href="#" className="btn-secondary">
                📱 View Demo
              </Link>
            </div>
          </div>

          <div className="scroll-indicator">
            <div>Scroll to explore ↓</div>
          </div>
        </div>

        {/* Devices Section - Perfect Clone Layout */}
        <div className="devices-section">
          <div className="background-pattern" />
          <div className="container">
            <div className="devices-container">
              {/* Laptop Mockup - Exact positioning */}
              <div className="laptop-mockup">
                <div className="laptop-base">
                  <div className="laptop-camera" />
                  <div className="laptop-screen" />
                  <div className="laptop-bottom" />
                  <div className="laptop-hinge" />
                </div>
              </div>

              {/* Tablet Mockup - Exact positioning */}
              <div className="tablet-mockup">
                <div className="tablet-frame">
                  <div className="tablet-screen" />
                  <div className="tablet-home-button" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Features Section with Scroll Effects */}
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

        {/* Other Features Section */}
        <div className="other-features-section">
          <div className="container">
            <h2 className="other-features-title">Other Features</h2>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⏱️</div>
                <h3>Real-time Tracking</h3>
                <p>Admins can track and monitor tour guides with a map integrated into this web solution.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>User-friendly CMS</h3>
                <p>Admins can easily manage the travelers, guides and content on the web platform.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3>Seamless Flexibility</h3>
                <p>It helps travelers to manage all the aspects of their tour booking and travel needs.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📋</div>
                <h3>Application Form</h3>
                <p>Travelers can fill up this form in order to make precise requests with additional information.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h3>Invoice Modifications</h3>
                <p>Automated new invoices are generated and sent to travelers if more or lesser tour items are used.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🌐</div>
                <h3>All-in-One Platform</h3>
                <p>
                  The platform is used by all the guides, travelers, and administrators making it simple and effective.
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
            <Link href="http://startyourtour.com" className="btn-white" target="_blank" rel="noopener noreferrer">
              🌟 Explore Tours Now
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
