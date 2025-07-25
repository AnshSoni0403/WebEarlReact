"use client"
import { useEffect, useState } from "react"
import Header from "../header"
import Footer from "../footer"
import "@/styles/all.css"

export default function DicciGujaratPortfolio() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <style jsx>{`
        .portfolio-page {
          background: white;
          min-height: 100vh;
        }

        .hero-section {
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          width: 100%;
        }

        .hero-left {
          color: white;
          z-index: 2;
        }

        .category-label {
          font-size: 1rem;
          font-weight: 600;
          color: #4ade80;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .hero-title {
          font-size: clamp(3rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 30px;
          color: white;
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          max-width: 500px;
        }

        .hero-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .main-phone {
          width: 300px;
          height: 600px;
          background: linear-gradient(145deg, #f8fafc, #e2e8f0);
          border-radius: 30px;
          padding: 8px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 2;
        }

        .phone-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 25px;
          background: #000;
          border-radius: 0 0 15px 15px;
          z-index: 10;
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          background: #000;
          border-radius: 22px;
          overflow: hidden;
          position: relative;
        }

        .screen-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .floating-phones {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-phone {
          position: absolute;
          width: 200px;
          height: 400px;
          background: linear-gradient(145deg, #f8fafc, #e2e8f0);
          border-radius: 25px;
          padding: 6px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          opacity: 0.7;
        }

        .floating-phone-1 {
          top: 10%;
          left: -100px;
          transform: rotate(-15deg);
          animation: float1 6s ease-in-out infinite;
        }

        .floating-phone-2 {
          top: 60%;
          right: -120px;
          transform: rotate(20deg);
          animation: float2 8s ease-in-out infinite;
        }

        .floating-phone-3 {
          bottom: 20%;
          left: -80px;
          transform: rotate(-25deg);
          animation: float3 7s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: rotate(-15deg) translateY(0px); }
          50% { transform: rotate(-15deg) translateY(-20px); }
        }

        @keyframes float2 {
          0%, 100% { transform: rotate(20deg) translateY(0px); }
          50% { transform: rotate(20deg) translateY(-30px); }
        }

        @keyframes float3 {
          0%, 100% { transform: rotate(-25deg) translateY(0px); }
          50% { transform: rotate(-25deg) translateY(-15px); }
        }

        .floating-phone .phone-screen {
          background: #4ade80;
        }

        .multi-phone-section {
          background: #f8fafc;
          padding: 100px 0;
          position: relative;
        }

        .multi-phone-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .phone-showcase {
          display: flex;
          gap: 40px;
          align-items: center;
          perspective: 1000px;
        }

        .showcase-phone {
          width: 280px;
          height: 560px;
          background: linear-gradient(145deg, #f8fafc, #e2e8f0);
          border-radius: 30px;
          padding: 8px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .showcase-phone:nth-child(1) {
          transform: rotateY(25deg) rotateX(5deg);
        }

        .showcase-phone:nth-child(2) {
          transform: scale(1.1);
          z-index: 2;
        }

        .showcase-phone:nth-child(3) {
          transform: rotateY(-25deg) rotateX(5deg);
        }

        .showcase-phone:nth-child(4) {
          transform: rotateY(35deg) rotateX(10deg);
        }

        .showcase-phone:nth-child(5) {
          transform: rotateY(-35deg) rotateX(10deg);
        }

        .showcase-phone:hover {
          transform: scale(1.05) rotateY(0deg) rotateX(0deg);
        }

        .about-section {
          background: white;
          padding: 100px 0;
        }

        .about-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .section-title {
          font-size: clamp(2rem, 3vw, 2.5rem);
          font-weight: 800;
          color: #1a202c;
          text-align: center;
          margin-bottom: 40px;
        }

        .about-description {
          font-size: 1.1rem;
          color: #4a5568;
          line-height: 1.7;
          text-align: center;
          max-width: 800px;
          margin: 0 auto 80px auto;
        }

        .features-showcase {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 80px;
          align-items: start;
        }

        .features-phones {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .feature-phone {
          width: 180px;
          height: 360px;
          background: linear-gradient(145deg, #f8fafc, #e2e8f0);
          border-radius: 25px;
          padding: 6px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
          margin-bottom: 20px;
        }

        .features-list {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
        }

        .features-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 30px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 25px;
          padding: 15px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background: #f0fdf4;
          transform: translateX(5px);
        }

        .feature-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .feature-content h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 5px;
        }

        .feature-content p {
          font-size: 0.9rem;
          color: #6b7280;
          line-height: 1.5;
          margin: 0;
        }

        .lifestyle-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 100px 0;
        }

        .lifestyle-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .lifestyle-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .lifestyle-item {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .lifestyle-item:hover {
          transform: translateY(-10px);
        }

        .lifestyle-bg {
          width: 100%;
          height: 300px;
          background: #e2e8f0;
          position: relative;
          overflow: hidden;
        }

        .lifestyle-phone {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 400px;
          background: linear-gradient(145deg, #f8fafc, #e2e8f0);
          border-radius: 25px;
          padding: 6px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .bottom-showcase {
          background: #1a202c;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .bottom-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          text-align: center;
        }

        .bottom-phone {
          width: 300px;
          height: 600px;
          background: linear-gradient(145deg, #f8fafc, #e2e8f0);
          border-radius: 30px;
          padding: 8px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .phone-showcase {
            flex-direction: column;
            gap: 20px;
          }

          .showcase-phone {
            transform: none !important;
            width: 250px;
            height: 500px;
          }

          .features-showcase {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .floating-phone {
            display: none;
          }
        }

        .healthcare-revolution-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }

        .healthcare-revolution-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          
          opacity: 0.3;
        }

        .revolution-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        .revolution-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .revolution-badge {
          display: inline-block;
          background: rgba(74, 222, 128, 0.1);
          color: #4ade80;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 20px;
          border: 1px solid rgba(74, 222, 128, 0.2);
        }

        .revolution-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          color: white;
          line-height: 1.2;
          margin-bottom: 30px;
        }

        .revolution-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          margin-bottom: 40px;
        }

        .revolution-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-bottom: 40px;
        }

        .stat-item {
          text-align: center;
          padding: 20px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: #4ade80;
          margin-bottom: 5px;
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .revolution-features {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .mini-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
        }

        .mini-icon {
          font-size: 1.2rem;
        }

        .revolution-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 600px;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .floating-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: white;
          font-weight: 600;
          animation: floatCard 6s ease-in-out infinite;
        }

        .card-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .card-2 {
          top: 15%;
          right: 15%;
          animation-delay: 1.5s;
        }

        .card-3 {
          bottom: 20%;
          left: 5%;
          animation-delay: 3s;
        }

        .card-4 {
          bottom: 25%;
          right: 10%;
          animation-delay: 4.5s;
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        .card-icon {
          font-size: 2rem;
        }

        .card-text {
          font-size: 0.9rem;
          text-align: center;
        }

        .center-phone {
          position: relative;
          z-index: 2;
        }

        .phone-mockup-large {
          width: 300px;
          height: 600px;
          background: linear-gradient(145deg, #f8fafc, #e2e8f0);
          border-radius: 30px;
          padding: 8px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        }

        .patient-stories-section {
          background: #f8fafc;
          padding: 120px 0;
        }

        .stories-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .stories-subtitle {
          text-align: center;
          font-size: 1.1rem;
          color: #6b7280;
          margin-bottom: 60px;
        }

        .stories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .story-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }

        .story-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .story-card.featured {
          border: 2px solid #4ade80;
          transform: scale(1.02);
        }

        .story-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .patient-avatar {
          width: 50px;
          height: 50px;
          background: #f3f4f6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .patient-info h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 5px 0;
        }

        .patient-info span {
          font-size: 0.9rem;
          color: #6b7280;
        }

        .story-text {
          font-size: 1rem;
          color: #4b5563;
          line-height: 1.6;
          margin-bottom: 15px;
          font-style: italic;
        }

        .story-rating {
          font-size: 1.1rem;
        }

        .cta-section {
          background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }

        .cta-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .cta-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E");
        }

        .floating-icons {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .floating-icon {
          position: absolute;
          font-size: 2rem;
          opacity: 0.2;
          animation: floatIcon 8s ease-in-out infinite;
        }

        .icon-1 { top: 10%; left: 10%; animation-delay: 0s; }
        .icon-2 { top: 20%; right: 15%; animation-delay: 1s; }
        .icon-3 { top: 60%; left: 5%; animation-delay: 2s; }
        .icon-4 { bottom: 30%; right: 20%; animation-delay: 3s; }
        .icon-5 { bottom: 10%; left: 20%; animation-delay: 4s; }
        .icon-6 { top: 40%; right: 5%; animation-delay: 5s; }

        @keyframes floatIcon {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-30px) rotate(10deg); opacity: 0.4; }
        }

        .cta-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .cta-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          color: white;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .cta-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .download-buttons {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }

        .download-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 15px 20px;
          color: white;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .download-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .btn-icon {
          font-size: 1.5rem;
        }

        .btn-text {
          display: flex;
          flex-direction: column;
        }

        .btn-small {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .btn-large {
          font-size: 1rem;
          font-weight: 600;
        }

        .cta-features {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cta-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          font-size: 1rem;
        }

        .feature-check {
          font-size: 1.1rem;
        }

        .final-phone {
          position: relative;
          width: 300px;
          height: 600px;
          background: linear-gradient(145deg, #f8fafc, #e2e8f0);
          border-radius: 30px;
          padding: 8px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        }

        .phone-glow {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
          border-radius: 50px;
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @media (max-width: 768px) {
          .revolution-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .revolution-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .stories-grid {
            grid-template-columns: 1fr;
          }

          .cta-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .download-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }

          .floating-card {
            display: none;
          }
        }
      `}</style>

      <Header />
      <div className="portfolio-page">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="floating-phones">
            <div className="floating-phone floating-phone-1">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <img
                  src="/img/care-app-booking.png"
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
                  src="/img/care-app-reports.png"
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
              <div className="category-label">HEALTHCARE</div>
              <h1 className="hero-title">Dicci Gujarat</h1>
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
                    src="/img/care-app-home.png"
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
                      src="/img/care-app-home-feature.png"
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
                      src="/img/care-app-booking-feature.png"
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
                      src="/img/care-app-reports-feature.png"
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

                <div className="center-phone">
                  <div className="phone-mockup-large">
                    <div className="phone-notch"></div>
                    <div className="phone-screen">
                      <img
                        src="/img/care-app-dashboard.png"
                        alt="Care App Dashboard"
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

        {/* Patient Stories Section */}
        <div className="patient-stories-section">
          <div className="stories-content">
            <h2 className="section-title">Real Stories, Real Impact</h2>
            <p className="stories-subtitle">See how Care is transforming healthcare experiences across the country</p>

            <div className="stories-grid">
              <div className="story-card">
                <div className="story-header">
                  <div className="patient-avatar">👩‍💼</div>
                  <div className="patient-info">
                    <h4>Priya Sharma</h4>
                    <span>Working Professional, Mumbai</span>
                  </div>
                </div>
                <p className="story-text">
                  "As a working mother, finding time for health checkups was impossible. Care's doorstep service saved
                  me hours of waiting. The technician was professional and the reports came faster than expected!"
                </p>
                <div className="story-rating">⭐⭐⭐⭐⭐</div>
              </div>

              <div className="story-card featured">
                <div className="story-header">
                  <div className="patient-avatar">👨‍🦳</div>
                  <div className="patient-info">
                    <h4>Rajesh Kumar</h4>
                    <span>Senior Citizen, Delhi</span>
                  </div>
                </div>
                <p className="story-text">
                  "At my age, visiting labs was becoming difficult. Care's home collection service is a blessing. The
                  staff is caring, and I can track everything on my phone. Highly recommended for elderly patients."
                </p>
                <div className="story-rating">⭐⭐⭐⭐⭐</div>
              </div>

              <div className="story-card">
                <div className="story-header">
                  <div className="patient-avatar">👨‍💻</div>
                  <div className="patient-info">
                    <h4>Arjun Patel</h4>
                    <span>Software Engineer, Bangalore</span>
                  </div>
                </div>
                <p className="story-text">
                  "The app is incredibly user-friendly. Booking tests, tracking samples, and downloading reports -
                  everything is seamless. Care has made health monitoring as easy as ordering food online!"
                </p>
                <div className="story-rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
      <Footer />
    </>
  )
}
