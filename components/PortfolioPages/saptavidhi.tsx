"use client"
import { useEffect, useState } from "react"
import Header from "../header"
import Footer from "../footer"
import './saptavidhi.css'
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
              <h1 className="project-title">SaptaVidhi</h1>
              <p style={{marginBottom: '15px'}}><b>Matrimonial Platform</b></p>
              <p className="project-description">
                ❤️ SaptaVidhi is an enlightened marriage-making application developed in the conviction that one should seek a marriage partner in a dignified, relevant and intuitive manner. With its basis on Indian cultures and a target at the current generation, the platform ensures the users find desirable matches by identifying the things which are important to them, such as; caste, language, income, religion, or lifestyles, etc. SaptaVidhi sets a preference and all the way to real-time chat, it is personal, safe, and transparent.
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
              The main idea of SaptaVidhi is to transform the traditional sense of match-making and providing the most trusted online platform where one can make real connections through allying their personal, cultural, and emotional beliefs. It empowers individuals to take control of their journey toward companionship, enabling them to connect with like-minded people based on meaningful preferences rather than superficial criteria. By combining transparency, personalization, and cultural respect, SaptaVidhi nurtures matches that go beyond algorithms and speak to the heart.

              </div>
              <div className="highlight-box">
                <div className="highlight-text">
                To make life-changing matchmaking with due consideration to individual tastes, cultural and social values, and soul fulfillment all within a trusted space of app.

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
            <img
              src="/img/portfolio/newphotos/Saptavidhi/SaptaVidhiApp_WebEarl_1.png"
              alt="Profile Discovery"
              className="screen-image"
              onError={(e) => {
                e.target.src = "/placeholder.svg?height=600&width=300&text=Profile+Discovery"
              }}
            />
            <img
              src="/img/portfolio/newphotos/Saptavidhi/SaptaVidhiApp_WebEarl_2.png"
              alt="Smart Matching"
              className="screen-image"
              onError={(e) => {
                e.target.src = "/placeholder.svg?height=600&width=300&text=Smart+Matching"
              }}
            />
            <img
              src="/img/portfolio/newphotos/Saptavidhi/SaptaVidhiApp_WebEarl_3.png"
              alt="Secure Communication"
              className="screen-image"
              onError={(e) => {
                e.target.src = "/placeholder.svg?height=600&width=300&text=Secure+Communication"
              }}
            />
          </div>
        </div>

        {/* Project Approach Section */}
        <div className="approach-section">
          <div className="approach-content">
            <h2 className="section-title">Project Approach / Solution</h2>
            <p className="approach-intro">
              The solution was built on the idea of user-first approach, and the process of finding a partner became easy, safe, and responsive to the expectation of an individual. Onboarding is initiated with partner preferences as the information that is collected in detail and used to recommend personal matches. SaptaVidhi is more action-oriented and committed to long-term compatibility and openness. The users are allowed to shortlist, reject, reconnect and talk until they become interested or rather to keep within the comfort and control. A strong moderation system tracks fake profiles and suspicious behavior, making the platform trustworthy for serious connections.

            </p>

            <div className="solutions-grid">
              <div className="solution-card">
                <h3 className="solution-title">🔍 Preference-Based Matchmaking from the Start</h3>
                <p className="solution-description">
                Upon login, users are prompted to fill in detailed partner preferences—such as caste, income, language, religion—so that their journey begins with matches that align closely with their expectations.

                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">💝 Personalized Partner Recommendations
                </h3>
                <p className="solution-description">
                The platform intelligently curates profiles that match the user's stated preferences, helping users connect with genuinely compatible individuals.

                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">⭐ Shortlist Without Sending a Request
                </h3>
                <p className="solution-description">
                Users can mark people they are interested in without taking immediate action. This feature allows space for thoughtful decisions and private tracking.

                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">🔄 Reject and Reconnect Option                </h3>
                <p className="solution-description">
                If a user changes their mind after rejecting a profile, they can revisit it and send a connection request again—because second chances matter.

                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">💬 Mutual Chat with Online Status Visibility
                </h3>
                <p className="solution-description">
                Once two users accept each other’s requests, a secure chat feature is unlocked. Users can also see if the other person is currently online, making real-time conversations easier.

                </p>
              </div>

              <div className="solution-card">
                <h3 className="solution-title">🛡️ Advanced Fake Profile Detection
                </h3>
                <p className="solution-description">
                The system monitors chat behavior and connection patterns. Profiles found to be suspicious or inactive are flagged and removed—ensuring user safety and authenticity.

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
