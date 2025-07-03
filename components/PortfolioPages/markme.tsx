"use client"
import { useEffect, useState } from "react"
import Header from "../header"
import Footer from "../footer"
import './markme.css'
import "@/styles/all.css"

export default function SaptaVidhiPortfolio() {
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
              <h1 className="project-title">Mark Me</h1>
              <p className="project-description">
                 Mark Me is an intuitive, cross-platform attendance management app designed for offices, institutes, and coworking spaces. It simplifies the punch-in/punch-out process with real-time logging and calendar-based insights.

              </p>
              <div className="project-tags">
              <span className="tag">Attendance</span>
              <span className="tag">Punch-in</span>
              <span className="tag">Timesheet</span>
              <span className="tag">Tracker</span>
              <span className="tag">Office</span>
              <span className="tag">Check-in</span>
              <span className="tag">Worklog</span>
<span className="tag">Calendar</span>

              </div>
            </div>
            <div className="hero-right">
              <div className="logo-container" style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
                <img 
                  src="/img/portfolio/newphotos/MarkMe/logo.jpg" 
                  alt="Mark Me Logo" 
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

          <div className="visuals-content" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            gap: '20px',
            padding: '40px 20px',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="mobile-mockup" style={{
                width: '280px',
                height: '560px',
                position: 'relative',
                borderRadius: '30px',
                padding: '8px',
                
                margin: '10px',
                flex: '0 0 calc(25% - 40px)',
                minWidth: '250px'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '25px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img
                    src={`/img/portfolio/newphotos/MarkMe/Markme_WebEarl_${num}.png`}
                    alt={`Mark Me App Screen ${num}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center'
                    }}
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=600&width=300&text=Mark+Me+App"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Objectives Section */}
        <div className="objectives-section">
          <div className="objectives-content">
            <h2 className="section-title">Objectives of the App</h2>
            <div className="objectives-layout">
              <div className="objectives-text">
              
Mark Me allows users to record, manage, and review attendance logs through a smart calendar view. Whether it’s an office team, an institute, or even a shared workspace, this app centralizes attendance into a single, easy-to-use interface. With manual and automatic punch-in support, it ensures that every workday is accounted for with precision and zero hassle.

              </div>
              <div className="highlight-box">
                <div className="highlight-text">
                To digitize and streamline attendance marking with accuracy, flexibility, and user-friendliness.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multiple Screens Section */}
        {/* <div className="multiple-screens-section">
          <div className="geometric-bg">
            <div className="triangle triangle-1"></div>
            <div className="triangle triangle-2"></div>
            <div className="triangle triangle-3"></div>
            <div className="triangle triangle-4"></div>
          </div>

          <div className="screens-grid">
            <div className="screen-mockup large"> */}
              {/* <div className="screen-header">
                <div className="screen-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
              </div> */}
              {/* <div className="screen-content tall">
                <img
                  src="/img/portfolio/newphotos/MarkMe/MarkMe_WebEarl_1.png"
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
                  src="/img/portfolio/newphotos/MarkMe/MarkMe_WebEarl_2.png"
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
                  src="/img/portfolio/newphotos/MarkMe/MarkMe_WebEarl_3.png"
                  alt="Secure Communication"
                  className="screen-image"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=300&width=350&text=Secure+Communication"
                  }}
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* Project Approach Section */}
        <div className="approach-section">
          <div className="approach-content">
            <h2 className="section-title">Project Approach / Solution</h2>
            <p className="approach-intro">
            The approach to developing Mark Me focused on simplicity, clarity, and versatility. We crafted a clean, calendar-driven UI that allows users to easily track their working hours, breaks, and logs. From onboarding to regular use, the experience remains intuitive. The solution was built keeping in mind hybrid work models, shared workspaces, and scalable usage across industries. It offers both flexibility and structure to ensure seamless attendance operations.

            </p>

            <div className="solutions-grid">
              <div className="solution-card">
                <h3 className="solution-title">Interactive Calendar UI</h3>
                <p className="solution-description">
                Track and view your attendance history at a glance.

                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">Custom Punch-In Time Selector</h3>
                <p className="solution-description">
                Modify your punch-in manually using an easy-to-use clock interface for flexibility.

                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">Multi-Space Usability</h3>
                <p className="solution-description">
                Whether it's for offices, colleges, coworking spaces, or remote teams, the app adapts to any environment needing attendance tracking.

                </p>
              </div>

              {/* <div className="solution-card">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
