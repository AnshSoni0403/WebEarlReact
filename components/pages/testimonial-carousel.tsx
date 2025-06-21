"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../styles/all.css";

interface Testimonial {
  text: string;
  name: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "WebEarl is incredibly knowledgeable in web development, creating robust, fully functional sites from scratch. Ashok listens to his clients and delivers outstanding results on time, surpassing expectations. My company website was entirely designed and developed by WebEarl.",
    name: "Kimberly Morgan",
    image: "/img/client/Kimberly Morgan.jpg",
  },
  {
    text: "Starting my small business was daunting, but WebEarl made the website-building process stress-free and exciting. Ashok & Team were patient and attentive, ensuring the final product was exactly what I envisioned—beautiful, smart, and professional.",
    name: "Tamla Boone",
    image: "/img/client/Tamla Boone.jpg",
  },
  {
    text: "WebEarl Technologies quickly restored and improved my website, adding practical innovations while maintaining the original format. After a poor experience with my previous designer, WebEarl efficiently rebuilt my web presence, helping me regain my customers' trust.",
    name: "Dr. William Depaula",
    image: "/img/client/Dr. William Depaula.jpg",
  },
];

export default function TestimonialCarousel() {
  const itemsPerPage = 2;
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Build visible array with circular wrap-around
  const visible = Array.from({ length: itemsPerPage }, (_, i) => {
    const idx = (currentIndex + i) % total;
    return testimonials[idx];
  });

  return (
    <section>
      <div className="testimonial-area position-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-heading-3 text-center">
                <h4>Testimonial</h4>
                <h3>What people say</h3>
              </div>
            </div>
          </div>

          <div className="carousel-wrapper">
            <div className="nav-container">
              <button className="testimonial-nav prev" onClick={prev} aria-label="Prev testimonial">
                <FaChevronLeft />
              </button>
              <button className="testimonial-nav next" onClick={next} aria-label="Next testimonial">
                <FaChevronRight />
              </button>
            </div>

            <div className="row d-flex justify-content-center testimonial-slide">
              {visible.map((testi, idx) => (
                <div key={idx} className="col-lg-5 col-md-6 col-sm-10 mx-2">
                  <div className="single-testimonial d-flex align-items-center">
                    <div className="left-content">
                      <div className="quotation">
                        <img src="/img/client/qoute.png" alt="quote" />
                      </div>
                      <div className="testi-slider-text">
                        <p>{testi.text}</p>
                        <h4>{testi.name}</h4>
                      </div>
                    </div>
                    <div className="right-content">
                      <div className="testimonial-img">
                        <Image src={testi.image} alt={testi.name} width={120} height={120} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .carousel-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .testimonial-slide {
          overflow: hidden;
          width: 100%;
        }
        .testimonial-nav {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: #4a6cf7;
          color: #fff;
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .testimonial-nav:hover {
          background: #333;
        }
        .nav-container {
          position: absolute;
          bottom: -35px;
          left: 160px;
          display: flex;
          gap: 15px;
        }
        .testimonial-nav {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: transparent;
          border: 1px solid #8bd6b6;
          color: #8bd6b6;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        .testimonial-nav:hover {
          background: #8bd6b6;
          color: #fff;
        }
        @media (max-width: 767px) {
          .testimonial-nav.prev,
          .testimonial-nav.next {
            position: static;
          }
        }
      `}</style>
    </section>
  );
}
