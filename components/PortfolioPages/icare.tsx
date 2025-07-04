"use client"
import { useEffect, useState } from "react"
import Header from "../header"
import Footer from "../footer"
import "@/styles/all.css"
import "./nowo.css"

export default function CareAppPortfolio() {
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
                  src="/img/portfolio/newphotos/ICARE/Icare_WebEarl_2.png"
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
                  src="/img/portfolio/newphotos/ICARE/Icare_WebEarl_3.png"
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
                  src="/img/portfolio/newphotos/ICARE/Icare_WebEarl_2.png"
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
              <div className="category-label">HEALTHCARE - E Diagnostics</div>
              <h1 className="hero-title">ICare</h1>
              <p className="hero-description">
              I Care is a user-friendly health diagnostics app that eliminates the need to physically visit medical laboratories. From selecting a nearby lab and booking tests to verifying appointments and receiving digital reports, I Care simplifies the testing experience by bringing healthcare directly to your doorstep.

              </p>
            </div>
            <div className="hero-right">
              <div className="main-phone">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <img
                    src="/img/portfolio/newphotos/ICARE/Icare_WebEarl_1.png"
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
            The I Care app is designed to offer convenience, security, and efficiency in medical diagnostics. Users can choose a nearby lab, select their required tests for themselves or family members, and book appointments directly through the app. The lab then dispatches a professional to the patient’s home for sample collection, verified through OTP-based security. Test results are uploaded by the lab on a dedicated web portal and automatically delivered to users in PDF format via the app.

            </p>

            <div className="features-showcase">
              <div className="features-phones">
                <div className="feature-phone">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <img
                      src="/img/portfolio/newphotos/ICARE/Icare_WebEarl_3.png"
                      alt="Home Features"
                      style={{
                        width: '250px',
                        height: 'auto',
                      }}
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
                      src="/img/portfolio/newphotos/ICARE/Icare_WebEarl_4.png"
                      style={{
                        width: '250px',
                        height: 'auto',
                      }}
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
                      src="/img/portfolio/newphotos/ICARE/Icare_WebEarl_5.png"
                      style={{
                        width: '250px',
                        height: 'auto',
                      }}
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
                  <div className="feature-icon">📍</div>
                  <div className="feature-content">
                    <h3>Nearby Lab Selection</h3>
                    <p>Locate and select nearby labs using GPS integration for convenience and accuracy.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🧪</div>
                  <div className="feature-content">
                    <h3>Easy Test Booking</h3>
                    <p>Book health tests effortlessly for yourself or your family members through a seamless interface.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">✅ </div>
                  <div className="feature-content">
                    <h3>Secure OTP Verification</h3>
                    <p>Ensure safety and authentication with OTP-based appointment confirmations.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🏠</div>
                  <div className="feature-content">
                    <h3>Home Sample Collection</h3>
                    <p>Get your samples collected from the comfort of your home without any hassle.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">📄</div>
                  <div className="feature-content">
                    <h3>Instant Digital Reports</h3>
                    <p>Receive lab reports directly on the app in secure, downloadable PDF format.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🧾</div>
                  <div className="feature-content">
                    <h3>Order History Tracking</h3>
                    <p>View your test order history and access past reports anytime, anywhere.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">👤</div>
                  <div className="feature-content">
                    <h3>Complete Profile Management</h3>
                    <p> Manage your profile details, addresses, and health records in one place.
                    </p>
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
                <h2 className="revolution-title">Your Lab at Your Doorstep</h2>
                <p className="revolution-description">
                  Gone are the days of waiting in long queues at diagnostic centers. Care transforms your home into a
                  healthcare hub where professional medical services come to you, ensuring comfort, convenience, and
                  complete safety.
                </p>
                <div className="revolution-features">
                  <div className="mini-feature">
                    <span className="mini-icon"></span>
                    <span>Smart – Navigate tests and labs with intelligent filtering
                    </span>
                  </div>
                  <div className="mini-feature">
                    <span className="mini-icon"></span>
                    <span>Secure – OTP-enabled bookings keep your data protected
                    </span>
                  </div>
                  <div className="mini-feature">
                    <span className="mini-icon"></span>
                    <span>Simple – Smooth user interface for stress-free usage
                    </span>
                  </div>
                  <div className="mini-feature">
                    <span className="mini-icon"></span>
                    <span>Connected – Syncs users, labs, and results through one platform

                    </span>
                  </div>
                </div> */}
                           {/* <div className="revolution-stats">
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
                </div> */}
              </div>

              <div className="revolution-right">
                <div className="floating-elements">
                  <div className="floating-card card-1" style={{marginRight: '550px'}}>
                    <div className="card-icon">🩺</div>
                    <div className="card-text">Professional Care</div>
                  </div>
                  <div className="floating-card card-2" style={{marginLeft: '550px'}}>
                    <div className="card-icon">🏠</div>
                    <div className="card-text">Home Comfort</div>
                  </div>
                  <div className="floating-card card-3" style={{marginRight: '700px'}}>
                    <div className="card-icon">⏰</div>
                    <div className="card-text">Time Saving</div>
                  </div>
                  <div className="floating-card card-4" style={{marginLeft: '550px'}}>
                    <div className="card-icon">📊</div>
                    <div className="card-text">Instant Reports</div>
                  </div>
                </div>

                <div className="center-phone">
                  <div className="phone-mockup-large">
                    <div className="phone-notch"></div>
                    <div className="phone-screen">
                      <img
                        src="/img/portfolio/newphotos/ICARE/Icare_WebEarl_2.png"
                        alt="Care App Dashboard"
                        style={{
                      width: '250px',
                      height: 'auto',
                    }}
                        className="screen-bg"
                        onError={(e) => {
                          e.target.src = "/placeholder.svg?height=584&width=284&text=Dashboard"
                        }}
                      />
                    </div>
                  </div>
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
