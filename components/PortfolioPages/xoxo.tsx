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
                  src="/img/portfolio/newphotos/XOXO/XOXO_WebEarl_1.png"
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
                  src="/img/portfolio/newphotos/XOXO/XOXO_WebEarl_5.png"
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
              <h1 className="hero-title">XOXO</h1>
              <p className="hero-description">
              XOXO brings the timeless fun of tic-tac-toe into a vibrant, modern digital format. With a striking neon-themed design, simple controls, and exciting player-versus-AI and multiplayer modes, it redefines casual gaming for all age groups. It delivers a fun, fast-paced brain teaser experience right from your mobile device.
              </p>
            </div>
            <div className="hero-right">
              <div className="main-phone">
                {/* <div className="phone-notch"></div>
                <div className="phone-screen"> */}
                  <img
                    src="/img/portfolio/newphotos/XOXO/XOXO_WebEarl_1.png"
                    alt="Care App Homepage"
                    className="screen-bg"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=584&width=284&text=Care+App+Home"
                    }}
                  />
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>

        

        {/* About Project Section */}
        <div className="about-section">
          <div className="about-content">
            <h2 className="section-title">About Project</h2>
            <p className="about-description">
            The XOXO game app was designed with user-friendly UI, colorful visuals, and addictive gameplay mechanics to make the age-old game of tic-tac-toe more exciting than ever. Built for quick fun and competitive spirit, it supports free play and premium upgrades, offering users flexibility and a rich in-game experience. It’s a perfect blend of strategy, style, and satisfaction for gamers of all ages.
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
                    src="/img/portfolio/newphotos/XOXO/XOXO_WebEarl_2.png"
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
                    src="/img/portfolio/newphotos/XOXO/XOXO_WebEarl_4.png"
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
                  src="/img/portfolio/newphotos/XOXO/XOXO_WebEarl_3.png"
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
                  <div className="feature-icon">👆</div>
                  <div className="feature-content">
                    <h3>Easy One-Tap Gameplay</h3>
                    <p>Tap and play instantly with intuitive controls.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🤖</div>
                  <div className="feature-content">
                    <h3>Player vs AI Mode</h3>
                    <p>Challenge the AI and sharpen your skills.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">👥</div>
                  <div className="feature-content">
                    <h3>Multiplayer Mode</h3>
                    <p>Battle with friends for the ultimate bragging rights.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">↩️</div>
                  <div className="feature-content">
                    <h3>Undo Move Option</h3>
                    <p>Made a mistake? Just undo and try again.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🎉</div>
                  <div className="feature-content">
                    <h3>Winning Animation</h3>
                    <p>Celebrate victories with colorful fireworks and effects.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🎨</div>
                  <div className="feature-content">
                    <h3>Free & Premium Themes</h3>
                    <p>Choose from basic and prime visual packages.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🪙</div>
                  <div className="feature-content">
                    <h3>Coin Rewards System</h3>
                    <p>Earn coins to stay motivated.</p>
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
                    <div className="card-icon">🧠</div>
                    <div className="card-text">Strategic</div>
                  </div>
                  <div className="floating-card card-2">
                    <div className="card-icon">🌈</div>
                    <div className="card-text">Vibrant</div>
                  </div>
                  <div className="floating-card card-3">
                    <div className="card-icon">🏆</div>
                    <div className="card-text">Competitive</div>
                  </div>
                  <div className="floating-card card-4">
                    <div className="card-icon">🏅</div>
                    <div className="card-text">Rewarding</div>
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
                    src="/img/portfolio/newphotos/XOXO/XOXO_WebEarl_5.png"
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
