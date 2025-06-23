"use client"
import Link from "next/link"
import Header from "../header"
import Footer from "../footer"
import "@/styles/all.css"

export default function SYT() {
  return (
    <>
      <Header />
      <div className="portfolio-detail-page">
        {/* Hero Section with Gradient Background */}
        <div
          className="hero-section"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            minHeight: "100vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              opacity: 0.3,
            }}
          />

          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <div
              className="row align-items-center"
              style={{ minHeight: "100vh", paddingTop: "80px", paddingBottom: "80px" }}
            >
              {/* Left Content */}
              <div className="col-lg-5">
                <div style={{ color: "white", marginBottom: "40px" }}>
                  {/* Stats Badge */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "50px",
                      padding: "8px 20px",
                      marginBottom: "30px",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <div style={{ display: "flex", marginRight: "10px" }}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            backgroundColor: `hsl(${i * 60}, 70%, 60%)`,
                            marginLeft: i > 1 ? "-8px" : "0",
                            border: "2px solid white",
                            fontSize: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>10k+ Happy Travelers</span>
                  </div>

                  <h1
                    style={{
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      fontWeight: "800",
                      lineHeight: "1.1",
                      marginBottom: "24px",
                      textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    }}
                  >
                    DISCOVER AMAZING TOURS WITH START YOUR TOUR
                  </h1>

                  <p
                    style={{
                      fontSize: "1.2rem",
                      lineHeight: "1.6",
                      marginBottom: "40px",
                      opacity: 0.9,
                      maxWidth: "500px",
                    }}
                  >
                    Experience the world through curated guided tours. From cultural city walks to eco-adventures, find
                    your perfect journey with transparent pricing and authentic reviews.
                  </p>

                  {/* CTA Buttons */}
                  <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                    <Link
                      href="http://startyourtour.com"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        backgroundColor: "#00D4AA",
                        color: "white",
                        padding: "16px 32px",
                        borderRadius: "50px",
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "16px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(0, 212, 170, 0.3)",
                        border: "none",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)"
                        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 212, 170, 0.4)"
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateY(0)"
                        e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 212, 170, 0.3)"
                      }}
                    >
                      🚀 Visit Live Site
                    </Link>

                    <button
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        backgroundColor: "transparent",
                        color: "white",
                        padding: "16px 32px",
                        borderRadius: "50px",
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "16px",
                        transition: "all 0.3s ease",
                        border: "2px solid rgba(255, 255, 255, 0.3)",
                        cursor: "pointer",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)"
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)"
                      }}
                    >
                      📱 View Demo
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="col-lg-7">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div
                    className="phone-mockup"
                    style={{
                      position: "relative",
                      width: "300px",
                      height: "600px",
                      background: "linear-gradient(145deg, #2c2c2c, #1a1a1a)",
                      borderRadius: "40px",
                      padding: "20px",
                      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                      transform: "perspective(1000px) rotateY(-5deg) rotateX(5deg)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02)"
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "perspective(1000px) rotateY(-5deg) rotateX(5deg) scale(1)"
                    }}
                  >
                    {/* Phone Screen */}
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "30px",
                        overflow: "hidden",
                        position: "relative",
                        backgroundColor: "#000",
                      }}
                    >
                      {/* Status Bar */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "44px",
                          background: "rgba(0, 0, 0, 0.8)",
                          zIndex: 10,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0 20px",
                          color: "white",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        <span>9:41</span>
                        <div style={{ display: "flex", gap: "4px" }}>
                          <div
                            style={{ width: "4px", height: "4px", backgroundColor: "white", borderRadius: "50%" }}
                          ></div>
                          <div
                            style={{ width: "4px", height: "4px", backgroundColor: "white", borderRadius: "50%" }}
                          ></div>
                          <div
                            style={{ width: "4px", height: "4px", backgroundColor: "white", borderRadius: "50%" }}
                          ></div>
                        </div>
                        <span>100%</span>
                      </div>

                      {/* Screen Content */}
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundImage: "url(/img/syt-mobile-preview.jpg)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        {/* Overlay for better contrast */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "50%",
                            background: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))",
                            display: "flex",
                            alignItems: "flex-end",
                            padding: "20px",
                            color: "white",
                          }}
                        >
                          <div>
                            <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>
                              Start Your Tour
                            </h3>
                            <p style={{ fontSize: "14px", opacity: 0.9, margin: 0 }}>Discover amazing destinations</p>
                          </div>
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "8px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "134px",
                          height: "5px",
                          backgroundColor: "white",
                          borderRadius: "3px",
                          opacity: 0.8,
                        }}
                      />
                    </div>

                    {/* Phone Reflection */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        right: "10px",
                        height: "50%",
                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                        borderRadius: "30px",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container" style={{ padding: "80px 0" }}>
          <div className="row">
            <div className="col-12 text-center" style={{ marginBottom: "60px" }}>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "#2c3e50",
                }}
              >
                Why Choose Start Your Tour?
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#7f8c8d", maxWidth: "600px", margin: "0 auto" }}>
                Experience travel planning like never before with our innovative features
              </p>
            </div>
          </div>

          <div className="row">
            {[
              {
                icon: "🎯",
                title: "Focused on Tours Only",
                description:
                  "Specializes in curated guided tours without mixing hotels and flights, ensuring relevant results.",
              },
              {
                icon: "✨",
                title: "Visually Clean & Intuitive",
                description:
                  "Built with React.js for a fast, interactive, and mobile-friendly experience that adapts to any device.",
              },
              {
                icon: "🤖",
                title: "Personalized Recommendations",
                description: "Smart suggestions based on travel style, from eco-adventures to cultural city walks.",
              },
              {
                icon: "📋",
                title: "Transparent Information",
                description: "Detailed itineraries, inclusions, maps, and real reviews for informed decisions.",
              },
              {
                icon: "🌍",
                title: "Global Destinations",
                description: "Discover tours across continents with local guides and authentic experiences.",
              },
              {
                icon: "💳",
                title: "Secure Booking",
                description: "Safe and secure payment processing with instant confirmation and 24/7 support.",
              },
            ].map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6" style={{ marginBottom: "40px" }}>
                <div
                  style={{
                    padding: "30px",
                    borderRadius: "20px",
                    backgroundColor: "white",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    height: "100%",
                    transition: "all 0.3s ease",
                    border: "1px solid #f0f0f0",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)"
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.15)"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "20px" }}>{feature.icon}</div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "15px", color: "#2c3e50" }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: "#7f8c8d", lineHeight: "1.6", margin: 0 }}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding: "80px 0",
            color: "white",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "20px" }}>
                  Ready to Start Your Adventure?
                </h2>
                <p style={{ fontSize: "1.2rem", opacity: 0.9, marginBottom: "30px" }}>
                  Join thousands of travelers who have discovered their perfect tours with us.
                </p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <Link
                    href="http://startyourtour.com"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      backgroundColor: "#00D4AA",
                      color: "white",
                      padding: "16px 32px",
                      borderRadius: "50px",
                      textDecoration: "none",
                      fontWeight: "600",
                      fontSize: "16px",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 15px rgba(0, 212, 170, 0.3)",
                    }}
                  >
                    🌟 Explore Tours Now
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div style={{ fontSize: "4rem", opacity: 0.3 }}>🗺️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
