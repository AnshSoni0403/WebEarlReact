"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import '../styles/all.css';
import '../styles/blog.css';

const DigitalMarketingPage = () => {
  useEffect(() => {
    // Initialize AOS animation
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      require('aos/dist/aos.css');
      AOS.init({
        duration: 1000,
        once: true
      });
    }
    initAOS();
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Banner */}
      <div 
        className="blog-hero-banner" 
        style={{
          backgroundImage: 'url(/img/blog/digital_marketing_1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="blog-hero-banner-text">
          <h1>Digital Marketing Services</h1>
          <p>Grow your business with our comprehensive digital marketing solutions</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="blog-body">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
              <div className="left-side">
                <div className="blog-post-heading">
                  <h1>Digital Marketing</h1>
                  <span className="publishe-date">With WebEarl Technologies Pvt Ltd</span>
                </div>
                
                <div className="blog-body-content">
                  <p><strong>Comprehensive Digital Marketing Solutions</strong></p>
                  <p>Discover how our digital marketing services can grow your online presence, increase your sales, and improve your customer loyalty. Our team of experts will help you navigate the digital landscape and achieve your business goals.</p>
                  
                  {/* Blog Image */}
                  <div className="blog-inner">
                    <Image 
                      src="/img/blog/digital_marketing_2.jpg" 
                      alt="Digital Marketing" 
                      width={800} 
                      height={450}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  
                  <h3>Our Digital Marketing Services</h3>
                  
                  <h4>Search Engine Optimization (SEO)</h4>
                  <p>Improve your website's visibility in search engine results with our comprehensive SEO services. We use white-hat techniques to help you rank higher and attract more organic traffic.</p>
                  
                  <h4>Pay-Per-Click (PPC) Advertising</h4>
                  <p>Get immediate results with our targeted PPC campaigns. We create and manage effective ad campaigns that drive qualified traffic to your website and generate leads.</p>
                  
                  <h4>Social Media Marketing</h4>
                  <p>Engage with your audience and build your brand on social media platforms. We create and manage social media campaigns that increase brand awareness and customer engagement.</p>
                  
                  <h4>Content Marketing</h4>
                  <p>Attract and retain customers with high-quality, relevant content. Our content marketing strategies help establish your brand as an industry leader and drive profitable customer action.</p>
                  
                  <h4>Email Marketing</h4>
                  <p>Reach your audience directly with personalized email campaigns. We help you build and maintain relationships with your customers through targeted email marketing.</p>
                </div>
              </div>
            </div>
            
            {/* Right Sidebar */}
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="right-side">
                {/* Search */}
                <div className="blog-search">
                  <form action="#">
                    <input type="search" id="blog-search" placeholder="Search" />
                    <button type="submit" className="blog-search-icon-small">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
                
                {/* About Section */}
                <div className="author-profile">
                  <h3>About Digital Marketing</h3>
                  <div className="author-content">
                    <Image 
                      src="/img/blog/digital_marketing_3.jpg" 
                      alt="Digital Marketing" 
                      width={300} 
                      height={200}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <h4>Digital Marketing Services</h4>
                    <p>We provide comprehensive digital marketing solutions to help businesses grow their online presence and reach their target audience effectively.</p>
                  </div>
                </div>
                
                {/* Services */}
                <div className="main-category" style={{ marginTop: '30px' }}>
                  <h3>Our Services</h3>
                  <div className="category-list">
                    <ul>
                      <li>Search Engine Optimization (SEO)</li>
                      <li>Pay-Per-Click (PPC) Advertising</li>
                      <li>Social Media Marketing</li>
                      <li>Content Marketing</li>
                      <li>Email Marketing</li>
                      <li>Conversion Rate Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default DigitalMarketingPage;
