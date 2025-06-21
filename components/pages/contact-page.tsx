"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import '../styles/all.css';
import { FaRegEnvelope, FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";
import CallToAction from "../call-to-action";

const ContactPage = () => {
  // Initialize AOS animation on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      require('aos/dist/aos.css');
      AOS.init({
        duration: 1000,
        once: true
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Contact - WebEarl</title>
        <meta name="description" content="Get in touch with WebEarl Technologies. We'd love to hear from you!" />
      </Head>

      <Header />

      {/* Contact Hero Banner */}
      <div className="contact-hero-banner">
        <div className="contact-banner-text">
          <h1>Contact US</h1>
          <p>Don't hesitate, contact us today!</p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="contactus-area">
        <div className="container">
          <div className="single-contact-area">
            <div className="row">
              {/* Email */}
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="info-icon">
                    <FaRegEnvelope size={56} />
                  </div>
                  <div className="info-content">
                    <h6>Mail address</h6>
                    <a href="mailto:info@webearl.com">info@webearl.com</a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin-top-sb-30">
                <div className="single-contact-info" data-aos="fade-up" data-aos-delay="100">
                  <div className="info-icon">
                    <FaMobileAlt size={48} />
                  </div>
                  <div className="info-content">
                    <h6>Our Phone</h6>
                    <a href="tel:+919033251903">+91 903 3251 903</a><br />
                    <a href="tel:+919662399609">+91 966 2399 609</a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin-top-sb-30">
                <div className="single-contact-info large-mb-d" data-aos="fade-up" data-aos-delay="200">
                  <div className="info-icon">
                    <FaMapMarkerAlt size={56} />
                  </div>
                  <div className="info-content">
                    <h6>Our Location</h6>
                    <p><b>Ahmedabad:</b><br />Cradle, EDII<br />Gandhinagar - Ahmedabad Rd,<br />Next to Apollo Hospital,<br />Bhat, Ahmedabad, Gujarat 382428</p>
                    <p className="mt-3"><b>Anand:</b><br />1/2 Top Floor, Super Market,<br />Nana Bajar, Vidhyanagar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-form-area">
                {/* Contact Left Background */}
                <div className="contact-left-bg">
                  <Image 
                    src="/img/contact-p-2.png" 
                    alt="Contact" 
                    width={200}
                    height={400}
                    className="img-fluid"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                
                <div className="contact-form-heading">
                  <h3>Leave a Message</h3>
                </div>
                
                <div className="contact-form">
                  <form action="#">
                    <div style={{ width: '100%' }}>
                      <input type="text" placeholder="First Name" style={{ width: '100%' }} />
                    </div>
                    <input type="email" placeholder="Enter your email" />
                    <textarea placeholder="Write your message"></textarea>
                    <div className="send-btn">
                      <input type="submit" value="send me" id="formsend" className="btn-1" />
                    </div>
                  </form>
                </div>
                
                {/* Contact Right Background */}
                <div className="contact-right-bg">
                  <Image 
                    src="/img/contact-p-1.png" 
                    alt="Contact" 
                    width={200}
                    height={400}
                    className="img-fluid"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              
            </div>
          </div>
        </div>
      </div>
       <CallToAction/>
      <Footer />
    </>
  );
};

export default ContactPage;
