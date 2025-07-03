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
                  src="/img/portfolio/newphotos/NowoChat/NowoChat_WebEarl_2.png"
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
                  src="/img/portfolio/newphotos/NowoChat/NowoChat_WebEarl_3.png"
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
                  src="/img/portfolio/newphotos/NowoChat/NowoChat_WebEarl_4.png"
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
              <h1 className="hero-title">NowoChat</h1>
              <p className="hero-description">
              An innovative community-based chatting app designed to bring together people who share similar interests, challenges, or career paths. Whether you're a student needing academic help, a patient seeking emotional support, or a professional looking to network, NowoChat helps you discover the right people and communities to connect, chat, and grow with. The platform offers a seamless way to join groups, ask questions, share experiences, and receive expert advice—all within a secure environment.

              </p>
            </div>
            <div className="hero-right">
              <div className="main-phone">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <img
                    src="/img/portfolio/newphotos/NowoChat/NowoChat_WebEarl_1.png"
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
            Launched in 2020 by CDK Communication Private Limited, NowoChat was built to address a real need—helping individuals connect with like-minded people when facing specific life or career challenges. From students and job seekers to patients and professionals, NowoChat serves as a powerful interest-focused communication platform where users can join relevant groups, find mentors, ask questions, and build meaningful conversations. It is more than just a chatting app—it's a space for connection, clarity, and community support.

            </p>

            <div className="features-showcase">
              <div className="features-phones">
                <div className="feature-phone">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <img
                      src="/img/portfolio/newphotos/NowoChat/NowoChat_WebEarl_2.png"
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
                      src="/img/portfolio/newphotos/NowoChat/NowoChat_WebEarl_7.png"
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
                      src="/img/portfolio/newphotos/NowoChat/NowoChat_WebEarl_5.png"
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
                  <div className="feature-icon">💬</div>
                  <div className="feature-content">
                    <h3>Interest-Based Group Chats</h3>
                    <p> Easily connect with people who share your interests, passions, or personal challenges.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🌐</div>
                  <div className="feature-content">
                    <h3>150+ Pre-Built Communities</h3>
                    <p>Explore a wide variety of groups across healthcare, education, sports, technology, and more.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🔓</div>
                  <div className="feature-content">
                    <h3>Unlimited Group Joining</h3>
                    <p> Join as many groups as you want—there's no limit to how much you can explore and engage.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🌍</div>
                  <div className="feature-content">
                    <h3>Global User Network</h3>
                    <p> Connect with individuals around the world to share ideas, get support, and expand your knowledge across cultures and industries.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🎓</div>
                  <div className="feature-content">
                    <h3>Expert & Mentor Access</h3>
                    <p> Find verified experts, coaches, and mentors in your desired category to get trusted answers and guidance.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🔍</div>
                  <div className="feature-content">
                    <h3>Smart Search & Discovery</h3>
                    <p> Search for users, topics, and groups by interest, profession, subject, or field—find exactly what you're looking for.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🔒</div>
                  <div className="feature-content">
                    <h3>Secure, Private Messaging</h3>
                    <p>All conversations are protected with end-to-end encryption, ensuring your chats remain private and secure.</p>
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
                <div className="revolution-badge"> CHATTING APPLICATION</div>
                <h2 className="revolution-title">What Makes NowoChat Unique</h2>
                <p className="revolution-description">
                The core mission of NowoChat is to create a safe and structured digital space where users can overcome isolation, confusion, and information overload by directly interacting with the right community. What sets NowoChat apart from random chat apps is its focused and functional approach—it connects people based on shared experiences, expertise, and needs.<br/>
                Whether it’s a cancer patient seeking mental health support, a student preparing for exams, or an athlete connecting with peers, NowoChat helps users find answers, encouragement, and real companionship. It’s not just about chatting—it's about building a community that helps you grow.


                </p>
                <p></p>

                <div className="revolution-stats">
                  {/* <div className="stat-item">
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
                  </div> */}
                </div>

               
                 {/* <div className="mini-feature">
                    <span className="mini-icon">⚡</span>
                    <span>Same-day sample collection</span>
                  </div>
                  <div className="mini-feature">
                    <span className="mini-icon">🔒</span>
                    <span>100% secure & confidential</span>
                  </div> */}
                  {/* <div className="mini-feature">
                    <span className="mini-icon">📱</span>
                    <span>Real-time notifications</span>
                  </div> */}
                
              </div>

              <div className="revolution-right">
                <div className="floating-elements">
                  <div className="floating-card card-1">
                    <div className="card-icon">📤</div>
                    <div className="card-text">Share</div>
                  </div>
                  <div className="floating-card card-2">
                    <div className="card-icon">🤝</div>
                    <div className="card-text">Connect</div>
                  </div>
                  <div className="floating-card card-3">
                    <div className="card-icon">🔎</div>
                    <div className="card-text">Discover</div>
                  </div>
                  <div className="floating-card card-4">
                    <div className="card-icon">📈</div>
                    <div className="card-text">Grow</div>
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
                    src="/img/portfolio/newphotos/NowoChat/NowoChat_WebEarl_6.png"
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
