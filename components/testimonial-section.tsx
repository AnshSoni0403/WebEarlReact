"use client"


import { useState } from "react"
import Image from "next/image"
import "../styles/all.css"

export default function TestimonialSection() {
  const testimonials = [
    {
      text: "I can't say enough about how knowledgeable WebEarl is in the area of Web Development. They indeed is a developer and can build a site from scratch. Understands functionality and is great at constructing a site that is robust and fully functioning. Ashok listens to his clients and delivers an outstanding product in a timely fashion that surpasses your initial desires. My company website was wholly designed and developed by WebEarl.",
      name: "Kimberly Morgan",
      image: "/img/client/testimonial-1.jpg",
    },
    {
      text: "This year, I decided i wanted to start a small business. Yeah-pretty scary enough, but I had no idea where to start. Upon much thought and consideration of our current technology, I decided to start with a website. I have created and made many websites on my own, this time I decided I wanted to invest in a professional service. I scanned the web, researched sites and came upon a pretty impressive site, that moved me, as I scrolled through the pages. I contacted the creator, who immediately offered excellent customer service. To me, creating and building a website can be so stressful, but with WebEarl, it never was. It was fun, and exciting. Even though I actually never had to learn computer language-I had so much valuable input. Ashok & Team was so patient and kind. We went over the design on the phone and he would send immediate updates. My website turned out, just as I dreamed. Its awesome, beautiful and smart.",
      name: "Tamla Boone",
      image: "/img/client/testimonial-2.jpg",
    },
    {
      text: "In an effort to maintain and to save the format of my previous website, WebEarl Technologies impressed me with their professionalism and efficiency. They quickly restored the format but added innovations that were more practical and functional. Back in May of 2018, I was horrified at the poor quality and lack of support from my previous web designer, which resulting in my website not being available or accessible online. As a result, my customers and prospective clients were seeking help from my competitors. Then I was referred to WebEarl Technologies Pvt Ltd, through a friend who knew that this company could quickly redesign and restore my web presence. And they surely did!",
      name: "Dr. William Depaula",
      image: "/img/client/testimonial-3.jpg",
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    /* =========Testimonial Area=========== */
    <section>
      <div className="testimonial-area">
        <div className="container">
          <div className="row">
            {/* testimonial heading text*/}
            <div className="col-xl-12">
              <div className="section-heading-3">
                <h4>Testimonial</h4>
                <h3>What people say</h3>
              </div>
            </div>
          </div>
          <div className="row testimonial-slider">
            {/* single testimonial*/}
            <div className="single-testimonial d-flex align-items-center">
              <div className="left-content">
                <div className="quotation">
                  <img src="img/client/qoute.png" alt="" />
                </div>
                <div className="testi-slider-text">
                  <p>
                    WebEarl is incredibly knowledgeable in web development, creating robust, fully functional sites from
                    scratch. Ashok listens to his clients and delivers outstanding results on time, surpassing
                    expectations. My company website was entirely designed and developed by WebEarl.
                  </p>
                  <h4>Kimberly Morgan</h4>
                  {/*<h5>CEO,XYZ.com</h5>*/}
                </div>
                <div className="right-quote">
                  <img src="img/client/right-quote.png" alt="" />
                </div>
              </div>
              <div className="right-content">
                <div className="testimonial-img">
                  <img src="img/client/Kimberly Morgan.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* single testimonial*/}
            <div className="single-testimonial d-flex align-items-center">
              <div className="left-content">
                <div className="quotation">
                  <img src="img/client/qoute.png" alt="" />
                </div>
                <div className="testi-slider-text">
                  <p>
                    Starting my small business was daunting, but WebEarl made the website-building process stress-free
                    and exciting. Ashok & Team were patient and attentive, ensuring the final product was exactly what I
                    envisioned—beautiful, smart, and professional.
                  </p>
                  <h4>Tamla Boone</h4>
                  {/*<h5>CEO,XYZ.com</h5>*/}
                </div>
                <div className="right-quote">
                  <img src="img/client/right-quote.png" alt="" />
                </div>
              </div>
              <div className="right-content">
                <div className="testimonial-img">
                  <img src="img/client/Tamla Boone.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* single testimonial*/}
            <div className="single-testimonial d-flex align-items-center">
              <div className="left-content">
                <div className="quotation">
                  <img src="img/client/qoute.png" alt="" />
                </div>
                <div className="testi-slider-text">
                  <p>
                    WebEarl Technologies quickly restored and improved my website, adding practical innovations while
                    maintaining the original format. After a poor experience with my previous designer, WebEarl
                    efficiently rebuilt my web presence, helping me regain my customers' trust.
                  </p>
                  <h4>Dr. William Depaula</h4>
                  {/*<h5>CEO,XYZ.com</h5>*/}
                </div>
                <div className="right-quote">
                  <img src="img/client/right-quote.png" alt="" />
                </div>
              </div>
              <div className="right-content">
                <div className="testimonial-img">
                  <img src="img/client/Dr. William Depaula.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
