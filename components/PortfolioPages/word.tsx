"use client"
import { useEffect, useState } from "react"
import Header from "../header"
import Footer from "../footer"
import "@/styles/all.css"
import "./nowo.css"

export default function NowoPortfolio() {
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
        {/* Hero Section */}
        <div className="hero-section">
          <div className="floating-phones">
            <div className="floating-phone floating-phone-1">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <img
                  src=""
                  alt="Care App Booking"
                  className="screen-bg"
                  onError={(e) => {
                    e.target.style.display = "none"
                  }}
                />
              </div>
            </div>
            <div className="floating-phone floating-phone-2">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <img
                  src="/img/newphotos/nowo/nowo_WebEarl_1.png"
                  alt="Care App Reports"
                  className="screen-bg"
                  onError={(e) => {
                    e.target.style.display = "none"
                  }}
                />
              </div>
            </div>
            <div className="floating-phone floating-phone-3">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <img
                  src="/img/care-app-profile.png"
                  alt="Care App Profile"
                  className="screen-bg"
                  onError={(e) => {
                    e.target.style.display = "none"
                  }}
                />
              </div>
            </div>
          </div>

          <div className="hero-content">
            <div className="hero-left">
              {/* <div className="category-label">HEALTHCARE</div> */}
              <h1 className="hero-title">WORD</h1>
              <p className="hero-description">
                Hassle-Free Health Checkups at Your Doorstep. Care brings healthcare home by offering lab sample
                collection at your convenience. With just a few taps on the app, users can schedule tests and receive
                diagnostic reports without stepping outside.
              </p>
            </div>
            <div className="hero-right">
              <div className="main-phone">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <img
                    src="/img/portfolio/newphotos/Word/Word_WebEarl_1.png"
                    alt="Care App Homepage"
                    className="screen-bg"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=584&width=284&text=Care+App+Home"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* About Project Section */}
        <div className="about-section">
          <div className="about-content">
            <h2 className="section-title">About Project</h2>
            <p className="about-description">
              Care is a comprehensive healthcare platform that revolutionizes diagnostic testing by bringing lab
              services directly to your doorstep. Our platform simplifies diagnostic test bookings with an easy-to-use
              interface, partnerships with NABL-accredited labs, and certified technicians who follow strict safety
              protocols.
            </p>

            <div className="features-showcase">
              <div className="features-phones">
                <div className="feature-phone">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <img
                      src="/img/portfolio/newphotos/Word/Word_WebEarl_2.png"
                      alt="Home Features"
                      className="screen-bg"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=348&width=168&text=Home"
                      }}
                    />
                  </div>
                </div>
                <div className="feature-phone">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <img
                      src="/img/portfolio/newphotos/Word/Word_WebEarl_3.png"
                      alt="Booking Features"
                      className="screen-bg"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=348&width=168&text=Booking"
                      }}
                    />
                  </div>
                </div>
                <div className="feature-phone">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <img
                      src="/img/portfolio/newphotos/Word/Word_WebEarl_4.png"
                      alt="Reports Features"
                      className="screen-bg"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=348&width=168&text=Reports"
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="features-list">
                <h3 className="features-title">Features</h3>

                <div className="feature-item">
                  <div className="feature-icon">🏠</div>
                  <div className="feature-content">
                    <h3>Doorstep Sample Collection</h3>
                    <p>Schedule lab tests from home with certified technicians visiting at your convenience</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">📱</div>
                  <div className="feature-content">
                    <h3>Easy Booking Interface</h3>
                    <p>Simple and intuitive app design for seamless test booking and scheduling</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🔬</div>
                  <div className="feature-content">
                    <h3>NABL-Accredited Labs</h3>
                    <p>Trusted partnerships with certified labs ensuring accurate and reliable test results</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">📊</div>
                  <div className="feature-content">
                    <h3>Digital Reports</h3>
                    <p>Instant access to test results with downloadable digital reports and tracking</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🎯</div>
                  <div className="feature-content">
                    <h3>Personalized Recommendations</h3>
                    <p>AI-driven test suggestions based on age, lifestyle, and medical history</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">📦</div>
                  <div className="feature-content">
                    <h3>Health Packages</h3>
                    <p>Curated health checkup packages for comprehensive wellness monitoring</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">👨‍⚕️</div>
                  <div className="feature-content">
                    <h3>Trained Professionals</h3>
                    <p>Certified phlebotomists following strict hygiene and safety protocols</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Healthcare Revolution Section */}
        <div className="healthcare-revolution-section">
          <div className="revolution-content">
            <div className="revolution-grid">
              <div className="revolution-left">
                <div className="revolution-badge">🏥 HEALTHCARE REVOLUTION</div>
                <h2 className="revolution-title">Bringing Lab to Your Living Room</h2>
                <p className="revolution-description">
                  Gone are the days of waiting in long queues at diagnostic centers. Care transforms your home into a
                  healthcare hub where professional medical services come to you, ensuring comfort, convenience, and
                  complete safety.
                </p>

                <div className="revolution-stats">
                  <div className="stat-item">
                    <div className="stat-number">50K+</div>
                    <div className="stat-label">Tests Completed</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">25+</div>
                    <div className="stat-label">Cities Served</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">Accuracy Rate</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Support Available</div>
                  </div>
                </div>

                <div className="revolution-features">
                  <div className="mini-feature">
                    <span className="mini-icon">⚡</span>
                    <span>Same-day sample collection</span>
                  </div>
                  <div className="mini-feature">
                    <span className="mini-icon">🔒</span>
                    <span>100% secure & confidential</span>
                  </div>
                  <div className="mini-feature">
                    <span className="mini-icon">📱</span>
                    <span>Real-time notifications</span>
                  </div>
                </div>
              </div>

              <div className="revolution-right">
                <div className="floating-elements">
                  <div className="floating-card card-1">
                    <div className="card-icon">🩺</div>
                    <div className="card-text">Professional Care</div>
                  </div>
                  <div className="floating-card card-2">
                    <div className="card-icon">🏠</div>
                    <div className="card-text">Home Comfort</div>
                  </div>
                  <div className="floating-card card-3">
                    <div className="card-icon">⏰</div>
                    <div className="card-text">Time Saving</div>
                  </div>
                  <div className="floating-card card-4">
                    <div className="card-icon">📊</div>
                    <div className="card-text">Instant Reports</div>
                  </div>
                </div>

                <div className="center-phone" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '300px',
                  height: '600px',
                  margin: '0 auto'
                }}>
                  <img
                    src="/img/portfolio/newphotos/Word/Word_WebEarl_5.png"
                    alt="Care App Dashboard"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '100%',
                      borderRadius: '12px',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
                    }}
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=600&width=300&text=Dashboard"
                    }}
                  />
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
