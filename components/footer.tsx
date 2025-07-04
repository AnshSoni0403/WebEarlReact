"use client"

import { useEffect, useRef } from 'react';
import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaBehance, FaDribbble, FaPinterest } from "react-icons/fa";
import "../styles/all.css";

const useBackgroundMove = (movementStrength = 50) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const pageX = clientX - (innerWidth / 2);
      const pageY = clientY - (innerHeight / 2);
      
      const width = movementStrength / innerWidth;
      const height = movementStrength / innerHeight;
      
      const newValueX = width * pageX * -1 - 25;
      const newValueY = height * pageY * -1 - 50;
      
      element.style.backgroundPosition = `${newValueX}px ${newValueY}px`;
    };

    element.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, [movementStrength]);

  return elementRef;
};

export default function Footer() {
  const backgroundRef = useBackgroundMove(50);
  
  return (
    <section id="footer-fixed">
      <div 
        ref={backgroundRef}
        className="big-footer" 
        style={{ 
          backgroundImage: "url(/img/f-pattern.png)",
          backgroundPosition: 'center',
          transition: 'background-position 0.1s ease-out'
        }}
      >
        <div className="container">
          <div className="row">
            {/* Footer Logo and Address */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="footer-logo">
                <Link href="#">
                  <Image src="/img/footer-logo.png" alt="" width={200} height={60} />
                </Link>
                <p>
                  <b>WebEarl Technologies Pvt Ltd.</b>
                  <br />
                  11 Cradle, EDII,
                  <br />
                  Gandhinagar - Ahmedabad Rd,
                  <br />
                  Next to Apollo Hospital,
                  <br />
                  Bhat, Ahmedabad, Gujarat 382428
                  <br />
                </p>
              </div>
              {/* footer social */}
              <div className="social" style={{ marginTop: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", gap: 18 }}>
                    <Link className="footer-socials" href="https://www.facebook.com/webearltechnologiespvtltd" target="_blank"><FaFacebook size={28} color="#fff" /></Link>
                    <Link className="footer-socials" href="https://www.instagram.com/webearltechnologies/" target="_blank"><FaInstagram size={28} color="#fff" /></Link>
                    <Link className="footer-socials" href="https://twitter.com/WebEarl" target="_blank"><FaTwitter size={28} color="#fff" /></Link>
                    <Link className="footer-socials" href="https://www.youtube.com/channel/UCLIyO2okxv_EzZ9wOMqiv0A" target="_blank"><FaYoutube size={28} color="#fff" /></Link>
                  </div>
                  <div style={{ display: "flex", gap: 18 }}>
                    <Link className="footer-socials" href="https://www.linkedin.com/company/webearl-technologies" target="_blank"><FaLinkedin size={28} color="#fff" /></Link>
                    <Link className="footer-socials" href="https://www.behance.net/webearl" target="_blank"><FaBehance size={28} color="#fff" /></Link>
                    <Link className="footer-socials" href="https://dribbble.com/Webearl" target="_blank"><FaDribbble size={28} color="#fff" /></Link>
                    <Link className="footer-socials" href="https://in.pinterest.com/webearlitsolution/_created/" target="_blank"><FaPinterest size={28} color="#fff" /></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="footer-heading">
                <h3>Company</h3>
              </div>
              <div className="footer-content">
                <ul>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/hiring">Hire Us</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/career" className="career-link">
                      <i className="fas fa-briefcase"></i> Career
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services Links */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="footer-heading">
                <h3>Services</h3>
              </div>
              <div className="footer-content">
                <ul>
                  <li>
                    <Link href="/web-application-development">Web Application Development</Link>
                  </li>
                  <li>
                    <Link href="/mobile-application-development">Mobile Application Development</Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-development">E-Commerce Development</Link>
                  </li>
                  <li>
                    <Link href="/api-development">API Development</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="footer-heading">
                <h3>Get Updates</h3>
              </div>
              <div className="footer-content footer-cont-mar-40">
                <form action="#">
                  <input
                    id="leadgenaration"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <input id="subscribe" type="submit" value="Subscribe" />
                </form>
              </div>
              <div className="footer-rating-image mt-4">
                <a
                  href="https://g.page/r/CUBh5bTBGHQ-EAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    src="/img/webearl-rating.png" 
                    alt="WebEarl Rating" 
                    width={150} 
                    height={30} 
                    className="img-fluid"
                  />
                  <h4 className="mb-1 mt-2">(4.7)</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <footer>
        <p>
          All rights reserved @
          <Link href="/" style={{ color: "#fff" }}> WebEarl</Link> 2017
        </p>
      </footer>
    </section>
  )
}