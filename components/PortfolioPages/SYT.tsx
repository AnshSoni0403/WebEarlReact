"use client"
import Link from "next/link"
import Header from "../header"
import Footer from "../footer"
import "@/styles/all.css"

export default function SYT() {
  return (
    <>
      <style jsx>{`
        .hero-section {
          background: #ffffff;
          padding: 80px 0 60px 0;
          text-align: center;
        }

        .logo-section {
          margin-bottom: 40px;
        }

        .logo-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: bold;
          color: white;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .main-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .main-subtitle {
          font-size: 1.3rem;
          color: #4a5568;
          max-width: 800px;
          margin: 0 auto 50px auto;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 80px;
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
        }

        .btn-secondary:hover {
          background-color: #667eea;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
          text-decoration: none;
        }

        .devices-section {
          background: #f8fafc;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .devices-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 60px;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
        }

        .desktop-mockup {
          position: relative;
          width: 400px;
          height: 250px;
          background: linear-gradient(145deg, #2d3748, #1a202c);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          transform: perspective(1000px) rotateY(5deg) rotateX(-5deg);
          transition: all 0.3s ease;
        }

        .desktop-mockup:hover {
          transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02);
        }

        .desktop-screen {
          width: 100%;
          height: 100%;
          border-radius: 15px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .mobile-mockup {
          position: relative;
          width: 200px;
          height: 400px;
          background: linear-gradient(145deg, #2d3748, #1a202c);
          border-radius: 30px;
          padding: 15px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
          transition: all 0.3s ease;
        }

        .mobile-mockup:hover {
          transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02);
        }

        .mobile-screen {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          flex-direction: column;
        }

        .status-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 30px;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 15px;
          color: white;
          font-size: 12px;
          font-weight: 600;
        }

        .home-indicator {
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background-color: white;
          border-radius: 2px;
          opacity: 0.8;
        }

        .background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23e2e8f0' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.5;
        }

        .core-features-section {
          background: white;
          padding: 100px 0;
        }

        .features-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .features-left {
          padding-right: 40px;
        }

        .section-label {
          font-size: 1rem;
          color: #667eea;
          font-weight: 600;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          color: #1a202c;
          line-height: 1.2;
          margin-bottom: 30px;
        }

        .features-right {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .feature-item {
          padding: 0;
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
          background: #f8fafc;
          padding: 100px 0;
        }

        .other-features-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #1a202c;
          text-align: center;
          margin-bottom: 80px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .feature-card {
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          text-align: left;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          border-color: #667eea;
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
          display: block;
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
          padding: 100px 0;
          color: white;
          text-align: center;
        }

        .cta-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 20px;
        }

        .cta-description {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .btn-white {
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

        .btn-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
          color: #667eea;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .features-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .features-left {
            padding-right: 0;
            text-align: center;
          }
          
          .devices-container {
            gap: 40px;
          }
          
          .desktop-mockup {
            width: 300px;
            height: 200px;
          }
          
          .mobile-mockup {
            width: 180px;
            height: 360px;
          }
        }
      `}</style>

      <Header />
      <div className="portfolio-detail-page">
        {/* Hero Section - Centered Logo and Title */}
        <div className="hero-section">
          <div className="container">
            <div className="logo-section">
              <div className="logo-icon">SYT</div>
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
        </div>

        {/* Devices Section - Desktop and Mobile Mockups */}
        <div className="devices-section">
          <div className="background-pattern" />
          <div className="container">
            <div className="devices-container">
              {/* Desktop Mockup */}
              <div className="desktop-mockup">
                <div className="desktop-screen">
                  <div>
                    <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "10px" }}>Desktop Experience</h3>
                    <p style={{ fontSize: "14px", opacity: 0.9, margin: 0 }}>Full-featured tour booking platform</p>
                    <div style={{ marginTop: "15px", fontSize: "30px" }}>💻</div>
                  </div>
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="mobile-mockup">
                <div className="mobile-screen">
                  <div className="status-bar">
                    <span>9:41</span>
                    <span>100%</span>
                  </div>

                  <div style={{ padding: "20px" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>Mobile App</h3>
                    <p style={{ fontSize: "12px", opacity: 0.9, margin: 0 }}>Tour booking on the go</p>
                    <div style={{ marginTop: "15px", fontSize: "25px" }}>📱</div>
                  </div>

                  <div className="home-indicator" />
                </div>
              </div>
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
          <div className="container">
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
