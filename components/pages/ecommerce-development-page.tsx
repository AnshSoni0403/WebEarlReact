"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import '../styles/all.css';
import '../styles/blog.css';

const EcommerceDevelopmentPage = () => {
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
          backgroundImage: 'url(/img/blog/ecommerce3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="blog-hero-banner-text">
          <h1>Know more about E Commerce Development</h1>
          <p>Always deliver more than expected.</p>
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
                  <h1>E Commerce Development</h1>
                  <span className="publishe-date">With WebEarl Technologies Pvt Ltd</span>
                </div>
                
                <div className="blog-body-content">
                  <p><strong>Top Rated eCommerce Development Services for Better end-to-end Functionality</strong></p>
                  <p>WebEarl Technologies is one of the top rated eCommerce Development Services Provider and around the globe. It offers better end-to-end functionality in your eCommerce solutions.</p>
                  <p>Our professional eCommerce development team provides all the advanced functionality you might need to allow your business to grow.</p>
                  <p>Moreover, we provide the complete online shopping experiences to multiply your sales, traffic, customer retention, and ROI (return-of-investment) on your eCommerce development services with us.</p>
                  
                  {/* Blog Image */}
                  <div className="blog-inner">
                    <Image 
                      src="/img/blog/ecommerce1.jpg" 
                      alt="E-Commerce Development" 
                      width={800} 
                      height={450}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  
                  <h3>Why Choose Us for Your Next eCommerce Development?</h3>
                  
                  <h4>Affordable eCommerce Web Design Service</h4>
                  <p>We are very conscious about the timeframes and budget while doing eCommerce web design. We strive to keep our prices reasonable to deliver great eCommerce store without draining your entire marketing budget.</p>
                  
                  <h4>Our eCommerce Design and Development Process</h4>
                  <p>We are an eCommerce expert in building simplified user experience and navigation with quick response time. Our artwork is completely original and with innovative conceptual coding so that you can run your online store with optimum ease.</p>
                  
                  <h4>Extensive Portfolio with Years of eCommerce Development Service Experiences</h4>
                  <p>We have a track record of improving online businesses and numerous industries for both B2B and B2C clientele. No matter what kind of business you have, we can create something great for you.</p>
                  
                  <h4>Flexible in eCommerce Re-designing and Re-development</h4>
                  <p>You'll definitely praise us for our flexibility and great communication. We are always flexible about making changes in the eCommerce design, as well as content. We keep continuing doing so until we see your 100% satisfaction and requirements fulfilled.</p>
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
                  <h3>About E Commerce Development</h3>
                  <div className="author-content">
                    <Image 
                      src="/img/blog/ecommerce2.jpg" 
                      alt="E-Commerce Development" 
                      width={300} 
                      height={200}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <h4>E Commerce Development</h4>
                    <p>We provide comprehensive e-commerce solutions that help businesses establish and grow their online presence. Our team specializes in creating user-friendly, secure, and scalable e-commerce platforms that drive sales and enhance customer experience.</p>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="main-category" style={{ marginTop: '30px' }}>
                  <h3>Our Services</h3>
                  <div className="category-list">
                    <ul>
                      <li>Custom E-commerce Development</li>
                      <li>Magento Development</li>
                      <li>WooCommerce Development</li>
                      <li>Shopify Development</li>
                      <li>Payment Gateway Integration</li>
                      <li>E-commerce SEO</li>
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

export default EcommerceDevelopmentPage;
