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
              <p className=""><b>Action Game</b></p>
              <p className="project-description">
              Way Out is a gripping 2D survival game where you navigate a zombie-ravaged college campus. Trapped on the top floor, you must fight your way down—level by level—collecting weapons, unlocking upgrades, and outsmarting the walking days. Every decision matters. Every floor is a test. Will you escape… or become one of them?



              </p>
              <div className="project-tags">
              <span className="tag">Zombie Game</span>
              <span className="tag">Action Game</span>
              <span className="tag">Survival</span>
              <span className="tag">Horror</span>
              <span className="tag">Shooter</span>
              <span className="tag">Apocalypse</span>
              <span className="tag">School</span>
              <span className="tag">Story mode</span>
<span className="tag">Walking Dead</span>

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
            <h2 className="section-title">Objective of the App</h2>
            <div className="objectives-layout">
              <div className="objectives-text">
              Way Out is a fast-paced zombie survival game where players must fight, strategize, and escape from a deadly viral outbreak that has overrun their college campus. With immersive maps and action-packed combat, players battle through terrifying levels, unlock powerful weapons, and uncover hidden elements to reach freedom.<br/>
<b>Your mission: Survive every floor. Escape every zombie. Or become one of them.
</b>
              </div>
              <div className="highlight-box">
                <div className="highlight-text">
                We took a narrative-first approach to designing Way Out, crafting the game around an intense storyline of infection, isolation, and survival. Our visual style blends suspense with stylized horror, keeping players engaged through cinematic UI and compelling level progression.

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
            <h2 className="section-title"> 6 Unique Features of the App </h2>
            

            <div className="solutions-grid">
              <div className="solution-card">
                <h3 className="solution-title"> 🗺️ Multi-Themed Story Maps  </h3>
                <p className="solution-description">
                Explore diverse in-game locations such as science labs, classrooms, dormitories, libraries, sports fields, and parking areas—each featuring unique zombie threats and survival paths.
                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">📖 Narrative-Driven Gameplay</h3>
                <p className="solution-description">
                Uncover notes, radio messages, and hidden objects that slowly reveal the origin of the virus and the fate of your fellow students.
                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">💊 Power Elements and Health Boosters</h3>
                <p className="solution-description">
                Pick up 2x damage boosters, medikits (+40% health), burgers (+20% health), and bullet reloads to increase your chances of surviving each wave.
                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">🔫 5 Unlockable Weapons</h3>
                <p className="solution-description">
                Unlock and upgrade a variety of military-grade weapons scattered across the destroyed campus—from handguns to high-impact rifles.
                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">🔊 Immersive Game Sound Design</h3>
                <p className="solution-description">
                Each game action is enhanced by custom sounds—from zombie growls to upgrade clicks—creating a rich audio-visual experience.
                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">🏆 League Progression & Visual Appeal</h3>
                <p className="solution-description">
                Progress through Bronze, Silver, Gold, and Platinum leagues while battling horrifying zombie bosses in hauntingly designed campus environments.
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