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
                  src="/img/portfolio/newphotos/Word/Word_WebEarl_1.png"
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
                  src="/img/portfolio/newphotos/Word/Word_WebEarl_2.png"
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
              <h1 className="hero-title">Wordix</h1>
              <p style={{color:'white'}}><b>Word Search Game</b></p>
              <p className="hero-description">
              Wordix is a beautifully crafted word search puzzle game designed for players who enjoy testing their vocabulary skills in a calming and immersive environment. With its soothing visuals and brain-teasing gameplay, Wordix offers the perfect blend of relaxation and mental stimulation. Every level is a new voyage into the world of words.
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
            The Wordix project focuses on creating an engaging, and visually appealing word search experience for mobile users. With rich night-themed aesthetics, smooth interactions, and rewarding feedback mechanisms, the game enhances cognitive reflexes while offering casual entertainment. Each successfully completed level earns the player in-game coins and unlocks the next voyage, maintaining a smooth progression loop.
            </p>

            <div className="features-showcase">
              <div className="features-images" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '30px',
                maxWidth: '600px',
                margin: '0 auto',
                padding: '20px 0'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '30px',
                  width: '100%',
                  flexWrap: 'wrap'
                }}>
                  <img
                    src="/img/portfolio/newphotos/Word/Word_WebEarl_2.png"
                    alt="Home Features"
                    style={{
                      width: '250px',
                      height: 'auto',
                      
                    }}
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=400&width=200&text=Home"
                    }}
                  />
                  <img
                    src="/img/portfolio/newphotos/Word/WayOut_WebEarl_3.png"
                    alt="Booking Features"
                    style={{
                      width: '250px',
                      height: 'auto',
                      
                    }}
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=400&width=200&text=Booking"
                    }}
                  />
                </div>
                <img
                  src="/img/portfolio/newphotos/Word/WayOut_WebEarl_4.png"
                  alt="Reports Features"
                  style={{
                    width: '250px',
                    height: 'auto',
                    
                  }}
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=400&width=200&text=Reports"
                  }}
                />
              </div>

              <div className="features-list">
                <h3 className="features-title">Features</h3>

                <div className="feature-item">
                  <div className="feature-icon">🎮</div>
                  <div className="feature-content">
                    <h3>Progressive Gameplay</h3>
                    <p>Unlock new voyages and challenges as you advance.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">👍</div>
                  <div className="feature-content">
                    <h3>User-Friendly Interface</h3>
                    <p>Smooth controls and clean design for an intuitive experience.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🔊</div>
                  <div className="feature-content">
                    <h3>Engaging Sound Effects</h3>
                    <p>Subtle audio adds immersion to every move.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🏆</div>
                  <div className="feature-content">
                    <h3>Reward System</h3>
                    <p>Earn coins for every win to keep the motivation high.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">💡</div>
                  <div className="feature-content">
                    <h3>Hint Feature</h3>
                    <p> Stuck on a word? Use hints to guide your way forward.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">⏱️</div>
                  <div className="feature-content">
                    <h3>Move Limits</h3>
                    <p>Adds an extra layer of challenge with strategic thinking.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">➕</div>
                  <div className="feature-content">
                    <h3>Get More Moves</h3>
                    <p>Option to gain additional moves and continue your voyage.</p>
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
                {/* <div className="revolution-badge">🏥 HEALTHCARE REVOLUTION</div> */}
                <h2 className="revolution-title">Ready to Twist Your Mind?</h2>
                <p className="revolution-description">
                Dive into Wordix and let the letters guide your way through wordy wonders.
                </p>

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
                  <div className="floating-card card-1">
                    <div className="card-icon">🧘</div>
                    <div className="card-text">Relaxing</div>
                  </div>
                  <div className="floating-card card-2">
                    <div className="card-icon">🤝</div>
                    <div className="card-text">Engaging</div>
                  </div>
                  <div className="floating-card card-3">
                    <div className="card-icon">🏆</div>
                    <div className="card-text">Rewarding</div>
                  </div>
                  <div className="floating-card card-4">
                    <div className="card-icon">🧠</div>
                    <div className="card-text">Brainy</div>
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
                    src="/img/portfolio/newphotos/Word/WayOut_WebEarl_5.png"
                    alt="Care App Dashboard"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '100%',
                      
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
