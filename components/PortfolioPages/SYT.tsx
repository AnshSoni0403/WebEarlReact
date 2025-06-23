"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "../header"
import Footer from "../footer"
import "@/styles/all.css"

export default function SYT() {
  const [scrollY, setScrollY] = useState(0)
  const [activeDevice, setActiveDevice] = useState("desktop")
  const [currentSlide, setCurrentSlide] = useState(0)

  // Screen arrays for different devices
  const desktopScreens = ["/img/SYTHome.png", "/img/SYTTours.png", "/img/SYTBooking.png", "/img/SYTProfile.png"]

  const tabletScreens = ["/img/SYTTab.png", "/img/SYTTabTours.png", "/img/SYTTabBooking.png", "/img/SYTTabProfile.png"]

  const mobileScreens = [
    "/img/SYTMobile.png",
    "/img/SYTMobileTours.png",
    "/img/SYTMobileBooking.png",
    "/img/SYTMobileProfile.png",
  ]

  const getCurrentScreens = () => {
    switch (activeDevice) {
      case "desktop":
        return desktopScreens
      case "tablet":
        return tabletScreens
      case "mobile":
        return mobileScreens
      default:
        return desktopScreens
    }
  }

  const getScreenInfo = () => {
    const screens = {
      desktop: [
        { title: "Homepage", description: "Clean and intuitive landing page with tour discovery" },
        { title: "Tour Listings", description: "Comprehensive tour catalog with filters and search" },
        { title: "Booking Process", description: "Streamlined booking flow with calendar integration" },
        { title: "User Profile", description: "Personal dashboard for managing bookings and preferences" },
      ],
      tablet: [
        { title: "Tablet Homepage", description: "Optimized tablet experience with touch-friendly interface" },
        { title: "Tour Browse", description: "Grid-based tour discovery perfect for tablet viewing" },
        { title: "Mobile Booking", description: "Touch-optimized booking process" },
        { title: "Profile Management", description: "Easy profile management on tablet devices" },
      ],
      mobile: [
        { title: "Mobile Homepage", description: "Mobile-first design with quick tour discovery" },
        { title: "Tour Search", description: "Swipe-friendly tour browsing experience" },
        { title: "Quick Booking", description: "One-tap booking process optimized for mobile" },
        { title: "Mobile Profile", description: "Compact profile view with essential features" },
      ],
    }

    return screens[activeDevice][currentSlide] || screens.desktop[0]
  }

  const handleNextSlide = () => {
    const screens = getCurrentScreens()
    setCurrentSlide((prev) => (prev + 1) % screens.length)
  }

  const handlePrevSlide = () => {
    const screens = getCurrentScreens()
    setCurrentSlide((prev) => (prev - 1 + screens.length) % screens.length)
  }

  // Reset slide when device changes
  useEffect(() => {
    setCurrentSlide(0)
  }, [activeDevice])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <style jsx>{`
        .hero-section {
          background: #ffffff;
          padding: 80px 0 60px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
          margin-top: 30px;
        }

        .logo-section {
          margin: 0 auto 40px auto;
          max-width: 800px;
          text-align: center;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo-icon {
          width: 100px;
          height: 100px;
          margin: 0 auto 30px auto;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .logo-image {
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
          transition: all 0.3s ease;
          object-fit: contain;
        }

        .logo-icon:hover {
          transform: scale(1.1) rotate(5deg);
        }

        .logo-icon:hover .logo-image {
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
        }

        .main-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 20px;
          line-height: 1.2;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .main-subtitle {
          font-size: 1.3rem;
          color: #4a5568;
          max-width: 800px;
          margin: 0 auto 50px auto;
          line-height: 1.6;
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .section-button {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 80px;
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          border: none;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
          color: white;
          text-decoration: none;
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          background-color: transparent;
          color: #667eea;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          border: 2px solid #667eea;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .btn-secondary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: #667eea;
          transition: width 0.3s ease;
          z-index: -1;
        }

        .btn-secondary:hover::before {
          width: 100%;
        }

        .btn-secondary:hover {
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
          text-decoration: none;
        }

        .devices-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 150px 0;
          position: relative;
          overflow: hidden;
        }

        .devices-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .laptop-mockup {
          position: absolute;
          left: 50px;
          top: 50%;
          transform: translateY(-50%) perspective(2500px) rotateX(8deg) rotateY(25deg) rotateZ(-2deg);
          width: 700px;
          height: 450px;
          z-index: 1;
          transition: all 0.5s ease;
          animation: slideInLeft 1.2s ease-out;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(-100px) perspective(2500px) rotateX(8deg) rotateY(25deg) rotateZ(-2deg);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0) perspective(2500px) rotateX(8deg) rotateY(25deg) rotateZ(-2deg);
          }
        }

        .laptop-mockup:hover {
          transform: translateY(-50%) perspective(2500px) rotateX(5deg) rotateY(20deg) rotateZ(-1deg) scale(1.02);
        }

        .laptop-base {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #e5e7eb, #f3f4f6);
          border-radius: 25px 25px 8px 8px;
          padding: 25px 25px 50px 25px;
          position: relative;
          box-shadow: 
            0 40px 80px rgba(0, 0, 0, 0.25),
            0 20px 40px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 -1px 0 rgba(0, 0, 0, 0.1);
        }

        .laptop-screen {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          background: #000;
          box-shadow: 
            inset 0 0 0 2px rgba(0, 0, 0, 0.1),
            inset 0 0 20px rgba(0, 0, 0, 0.2);
        }

        .laptop-screen-content {
          width: 100%;
          height: 100%;
          background-image: url('/img/SYTHome.png');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          position: relative;
        }

        .laptop-screen-reflection {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 30%,
            transparent 70%,
            rgba(255, 255, 255, 0.05) 100%
          );
          pointer-events: none;
        }

        .laptop-bottom {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 85%;
          height: 20px;
          background: linear-gradient(145deg, #d1d5db, #e5e7eb);
          border-radius: 0 0 20px 20px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .laptop-hinge {
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          width: 70%;
          height: 5px;
          background: #9ca3af;
          border-radius: 3px;
        }

        .laptop-camera {
          position: absolute;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 8px;
          background: #374151;
          border-radius: 50%;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
          z-index: 10;
        }

        .laptop-brand {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          background: linear-gradient(145deg, #d1d5db, #f3f4f6);
          border-radius: 50%;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .tablet-mockup {
          position: absolute;
          right: 100px;
          top: 50%;
          transform: translateY(-50%) perspective(2000px) rotateX(-8deg) rotateY(-15deg) rotateZ(3deg);
          width: 350px;
          height: 500px;
          z-index: 2;
          transition: all 0.5s ease;
          animation: slideInRight 1.2s ease-out 0.3s both;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(100px) perspective(2000px) rotateX(-8deg) rotateY(-15deg) rotateZ(3deg);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0) perspective(2000px) rotateX(-8deg) rotateY(-15deg) rotateZ(3deg);
          }
        }

        .tablet-mockup:hover {
          transform: translateY(-50%) perspective(2000px) rotateX(-5deg) rotateY(-10deg) rotateZ(2deg) scale(1.02);
        }

        .tablet-frame {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #e5e7eb, #f3f4f6);
          border-radius: 25px;
          padding: 20px;
          position: relative;
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.25),
            0 15px 30px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 -1px 0 rgba(0, 0, 0, 0.1);
        }

        .tablet-screen {
          width: 100%;
          height: 100%;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          background: #000;
          box-shadow: 
            inset 0 0 0 2px rgba(0, 0, 0, 0.1),
            inset 0 0 15px rgba(0, 0, 0, 0.2);
        }

        .tablet-screen-content {
          width: 100%;
          height: 100%;
          background-image: url('/img/SYTTab.png');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          position: relative;
        }

        .tablet-screen-reflection {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 30%,
            transparent 70%,
            rgba(255, 255, 255, 0.05) 100%
          );
          pointer-events: none;
        }

        .tablet-home-button {
          position: absolute;
          bottom: -35px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 50px;
          background: linear-gradient(145deg, #d1d5db, #f3f4f6);
          border-radius: 50%;
          border: 3px solid #9ca3af;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }

        .background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
          opacity: 0.8;
        }

        .core-features-section {
          background: white;
          padding: 120px 0;
          position: relative;
        }

        .features-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: start;
        }

        .features-left {
          padding-right: 40px;
          position: sticky;
          top: 100px;
        }

        .section-label {
          font-size: 1rem;
          color: #667eea;
          font-weight: 600;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          color: #1a202c;
          line-height: 1.2;
          margin-bottom: 30px;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .features-right {
          display: flex;
          flex-direction: column;
          gap: 50px;
        }

        .feature-item {
          padding: 40px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out both;
        }

        .feature-item:nth-child(1) { animation-delay: 0.6s; }
        .feature-item:nth-child(2) { animation-delay: 0.8s; }
        .feature-item:nth-child(3) { animation-delay: 1s; }
        .feature-item:nth-child(4) { animation-delay: 1.2s; }

        .feature-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          border-color: #667eea;
        }

        .feature-item h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 15px;
        }

        .feature-item p {
          font-size: 1.1rem;
          color: #4a5568;
          line-height: 1.6;
          margin: 0;
        }

        .other-features-section {
          background: #ffffff;
          padding: 120px 0;
          position: relative;
        }

        .other-features-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #1a202c;
          text-align: center;
          margin-bottom: 80px;
          opacity: 0;
          animation: fadeInUp 1s ease-out both;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
        }

        .feature-card {
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          text-align: left;
          transition: all 0.4s ease;
          border: 1px solid #e2e8f0;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out both;
        }

        .feature-card:nth-child(1) { animation-delay: 0.2s; }
        .feature-card:nth-child(2) { animation-delay: 0.4s; }
        .feature-card:nth-child(3) { animation-delay: 0.6s; }
        .feature-card:nth-child(4) { animation-delay: 0.8s; }
        .feature-card:nth-child(5) { animation-delay: 1s; }
        .feature-card:nth-child(6) { animation-delay: 1.2s; }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(270deg, #00b0e7 0%, #75f389 100%);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          border-color: #667eea;
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
          display: block;
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .feature-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 15px;
        }

        .feature-card p {
          font-size: 1rem;
          color: #4a5568;
          line-height: 1.6;
          margin: 0;
        }

        .cta-section {
          background: linear-gradient(270deg, #00b0e7 0%, #75f389 100%);
          padding: 120px 0;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 20px;
          opacity: 0;
          animation: fadeInUp 1s ease-out both;
        }

        .cta-description {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        @media (max-width: 1200px) {
          .devices-container {
            height: 600px;
          }
          
          .laptop-mockup {
            width: 600px;
            height: 380px;
            left: 20px;
          }
          
          .tablet-mockup {
            width: 300px;
            height: 430px;
            right: 50px;
          }
        }

        @media (max-width: 768px) {
          .features-layout {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          
          .features-left {
            padding-right: 0;
            text-align: center;
            position: static;
          }
          
          .devices-container {
            height: 500px;
            flex-direction: column;
            gap: 30px;
          }
          
          .laptop-mockup {
            position: relative;
            left: 0;
            top: 0;
            transform: perspective(1500px) rotateX(5deg) rotateY(0deg);
            width: 400px;
            height: 260px;
          }
          
          .tablet-mockup {
            position: relative;
            right: 0;
            top: 0;
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
            width: 250px;
            height: 350px;
          }
        }

        .visuals-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }

        .visuals-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.5;
        }

        .visuals-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }

        .visuals-title {
          font-size: clamp(3rem, 5vw, 4rem);
          font-weight: 800;
          color: white;
          margin-bottom: 20px;
          animation: fadeInUp 1s ease-out both;
        }

        .visuals-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .device-selector {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }

        .device-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 20px 30px;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          backdrop-filter: blur(10px);
        }

        .device-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.4);
          color: white;
          transform: translateY(-2px);
        }

        .device-btn.active {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.6);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
        }

        .device-btn svg {
          width: 32px;
          height: 32px;
        }

        .carousel-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
          z-index: 2;
        }

        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          z-index: 3;
        }

        .carousel-nav:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-nav.prev {
          left: -80px;
        }

        .carousel-nav.next {
          right: -80px;
        }

        .carousel-content {
          width: 100%;
          max-width: 900px;
          display: flex;
          justify-content: center;
        }

        .device-mockup {
          transition: all 0.5s ease;
          animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Desktop Mockup */
        .desktop-mockup {
          width: 800px;
          height: 500px;
        }

        .desktop-frame {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #f3f4f6, #e5e7eb);
          border-radius: 12px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          overflow: hidden;
        }

        .desktop-header {
          height: 40px;
          background: #e5e7eb;
          display: flex;
          align-items: center;
          padding: 0 16px;
          border-bottom: 1px solid #d1d5db;
        }

        .desktop-controls {
          display: flex;
          gap: 8px;
        }

        .control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .control.red { background: #ef4444; }
        .control.yellow { background: #f59e0b; }
        .control.green { background: #10b981; }

        .address-bar {
          flex: 1;
          text-align: center;
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }

        .desktop-screen {
          height: calc(100% - 40px);
          background: #000;
          overflow: hidden;
        }

        /* Tablet Mockup */
        .tablet-mockup-new {
          width: 400px;
          height: 550px;
        }

        .tablet-frame-new {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #f3f4f6, #e5e7eb);
          border-radius: 25px;
          padding: 20px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .tablet-camera {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 8px;
          background: #374151;
          border-radius: 50%;
          z-index: 10;
        }

        .tablet-screen-new {
          width: 100%;
          height: calc(100% - 40px);
          background: #000;
          border-radius: 18px;
          overflow: hidden;
          margin-top: 20px;
        }

        .tablet-home-btn {
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background: linear-gradient(145deg, #d1d5db, #f3f4f6);
          border-radius: 50%;
          border: 2px solid #9ca3af;
        }

        /* Mobile Mockup */
        .mobile-mockup {
          width: 300px;
          height: 600px;
        }

        .mobile-frame {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #1f2937, #111827);
          border-radius: 30px;
          padding: 8px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          position: relative;
        }

        .mobile-notch {
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

        .mobile-screen {
          width: 100%;
          height: 100%;
          background: #000;
          border-radius: 22px;
          overflow: hidden;
        }

        .screen-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .slide-indicators {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          position: relative;
          z-index: 2;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: white;
          transform: scale(1.2);
        }

        .screen-info {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .screen-info h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 10px;
        }

        .screen-info p {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .device-selector {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          
          .device-btn {
            flex-direction: row;
            padding: 15px 25px;
          }
          
          .carousel-nav {
            display: none;
          }
          
          .desktop-mockup {
            width: 100%;
            max-width: 400px;
            height: 250px;
          }
          
          .tablet-mockup-new {
            width: 280px;
            height: 380px;
          }
          
          .mobile-mockup {
            width: 250px;
            height: 500px;
          }
        }
      `}</style>

      <Header />
      <div className="portfolio-detail-page">
        {/* Hero Section - Centered Logo and Title */}
        <div className="hero-section">
          <div className="container">
            <div className="logo-section">
              <div className="logo-icon">
                <Image
                  src="/img/sytlogo.png"
                  alt="Start Your Tour Logo"
                  width={100}
                  height={100}
                  className="logo-image"
                />
              </div>
              <h1 className="main-title">Start Your Tour</h1>
              <p className="main-subtitle">
                Book storage space for personal belongings of travelers when they go off-destination in between a tour.
                Discover amazing destinations through curated guided tours with transparent pricing and authentic
                reviews.
              </p>
            </div>

            <div className="section-button">
              <Link href="http://startyourtour.com" className="btn-primary" target="_blank" rel="noopener noreferrer">
                🚀 Visit Live Site
              </Link>
              <Link href="#" className="btn-secondary">
                📱 View Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Visuals Carousel Section */}
        <div className="visuals-section">
          <div className="container">
            <div className="visuals-header">
              <h2 className="visuals-title">Visuals</h2>
              <p className="visuals-subtitle">Explore Start Your Tour across different devices</p>
            </div>

            {/* Device Type Selector */}
            <div className="device-selector">
              <button
                className={`device-btn ${activeDevice === "desktop" ? "active" : ""}`}
                onClick={() => setActiveDevice("desktop")}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                  <rect x="8" y="18" width="8" height="2" rx="1" fill="currentColor" />
                  <path d="M6 18h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Desktop</span>
              </button>

              <button
                className={`device-btn ${activeDevice === "tablet" ? "active" : ""}`}
                onClick={() => setActiveDevice("tablet")}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="18" r="1" fill="currentColor" />
                </svg>
                <span>Tablet</span>
              </button>

              <button
                className={`device-btn ${activeDevice === "mobile" ? "active" : ""}`}
                onClick={() => setActiveDevice("mobile")}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="18" r="1" fill="currentColor" />
                </svg>
                <span>Mobile</span>
              </button>
            </div>

            {/* Carousel Container */}
            <div className="carousel-container">
              <button className="carousel-nav prev" onClick={handlePrevSlide}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="carousel-content">
                <div className={`device-mockup ${activeDevice}`}>
                  {activeDevice === "desktop" && (
                    <div className="desktop-mockup">
                      <div className="desktop-frame">
                        <div className="desktop-header">
                          <div className="desktop-controls">
                            <span className="control red"></span>
                            <span className="control yellow"></span>
                            <span className="control green"></span>
                          </div>
                          <div className="address-bar">startyourtour.com</div>
                        </div>
                        <div className="desktop-screen">
                          <img
                            src={desktopScreens[currentSlide] || "/placeholder.svg"}
                            alt={`Desktop view ${currentSlide + 1}`}
                            className="screen-image"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeDevice === "tablet" && (
                    <div className="tablet-mockup-new">
                      <div className="tablet-frame-new">
                        <div className="tablet-camera"></div>
                        <div className="tablet-screen-new">
                          <img
                            src={tabletScreens[currentSlide] || "/placeholder.svg"}
                            alt={`Tablet view ${currentSlide + 1}`}
                            className="screen-image"
                          />
                        </div>
                        <div className="tablet-home-btn"></div>
                      </div>
                    </div>
                  )}

                  {activeDevice === "mobile" && (
                    <div className="mobile-mockup">
                      <div className="mobile-frame">
                        <div className="mobile-notch"></div>
                        <div className="mobile-screen">
                          <img
                            src={mobileScreens[currentSlide] || "/placeholder.svg"}
                            alt={`Mobile view ${currentSlide + 1}`}
                            className="screen-image"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button className="carousel-nav next" onClick={handleNextSlide}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="slide-indicators">
              {getCurrentScreens().map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${currentSlide === index ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

            {/* Screen Info */}
            <div className="screen-info">
              <h3>{getScreenInfo().title}</h3>
              <p>{getScreenInfo().description}</p>
            </div>
          </div>
        </div>

        {/* Core Features Section */}
        <div className="core-features-section">
          <div className="container">
            <div className="features-layout">
              <div className="features-left">
                <div className="section-label">Core Features</div>
                <h2 className="section-title">Enhancing User Experience</h2>
              </div>

              <div className="features-right">
                <div className="feature-item">
                  <h3>Easy Online Booking System</h3>
                  <p>
                    Travelers can book tours via an online platform with curated experiences and a range of destination
                    options.
                  </p>
                </div>

                <div className="feature-item">
                  <h3>System-driven Updates</h3>
                  <p>
                    The whole system is automated for last-minute changes. No manual contact is required to deliver a
                    hassle-free experience.
                  </p>
                </div>

                <div className="feature-item">
                  <h3>Automated Tour Updates</h3>
                  <p>
                    Travelers and guides get updates about the tour status at every stage on the day of the booking.
                  </p>
                </div>

                <div className="feature-item">
                  <h3>Accurate Calendar System</h3>
                  <p>
                    Travelers can select the exact time slot and place for their tours to be booked, scheduled, and
                    confirmed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Makes it Unique Section */}
        <div className="other-features-section">
          <div className="container">
            <h2 className="other-features-title">✨ What Makes it Unique?</h2>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Focused on Tours Only</h3>
                <p>
                  Instead of mixing hotels, flights, and travel guides like most travel platforms, Start Your Tour
                  specializes only in curated guided tours. This niche focus ensures users aren't overwhelmed and get
                  relevant results quickly.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>Visually Clean & Intuitive</h3>
                <p>
                  The interface is clean and modern — built using React.js, making it fast, interactive, and
                  mobile-friendly. Whether a user is planning from desktop or mobile, the layout adapts to ensure ease
                  of navigation.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3>Personalized Recommendations</h3>
                <p>
                  The idea is to help users get suggestions based on their travel style — for example, recommending
                  eco-adventures to nature lovers or cultural city walks to history enthusiasts. This adds a smart,
                  personalized layer beyond traditional listings.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🔍</div>
                <h3>Transparent Tour Information</h3>
                <p>
                  Each tour listing includes detailed information like itinerary, what's included/excluded, maps,
                  images, and real customer reviews — so users can make informed choices.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3>End-to-End Booking Workflow</h3>
                <p>
                  The platform handles everything from browsing to booking, so users won't need to leave the site or
                  coordinate over calls/messages.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h3>Why It's Useful</h3>
                <p>
                  <strong>For Travelers:</strong> Hassle-free tour discovery with rich details and filters. No need to
                  search across multiple websites or worry about what's authentic — everything is curated.
                  <br />
                  <br />
                  <strong>For Tour Providers:</strong> A focused platform to showcase tours, get more visibility, and
                  manage bookings efficiently without building a separate website.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Adventure?</h2>
            <p className="cta-description">
              Join thousands of travelers who have discovered their perfect tours with our innovative platform.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
