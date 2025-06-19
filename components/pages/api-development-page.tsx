"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import '../styles/all.css';
import '../styles/blog.css';

const ApiDevelopmentPage = () => {
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
          backgroundImage: 'url(/img/blog/api_development_1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="blog-hero-banner-text">
          <h1>API Development Services</h1>
          <p>Build powerful, scalable, and secure APIs for your applications</p>
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
                  <h1>API Development</h1>
                  <span className="publishe-date">With WebEarl Technologies Pvt Ltd</span>
                </div>
                
                <div className="blog-body-content">
                  <p><strong>Custom API Development Services</strong></p>
                  <p>APIs are the building blocks of modern applications, enabling seamless integration between different software systems. Our expert developers create robust, scalable, and secure APIs that power your digital ecosystem.</p>
                  
                  {/* Blog Image */}
                  <div className="blog-inner">
                    <Image 
                      src="/img/blog/api_development_2.jpg" 
                      alt="API Development" 
                      width={800} 
                      height={450}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  
                  <h3>Our API Development Services</h3>
                  
                  <h4>Custom API Development</h4>
                  <p>We design and develop custom RESTful and GraphQL APIs tailored to your specific business requirements, ensuring optimal performance and security.</p>
                  
                  <h4>API Integration</h4>
                  <p>Seamlessly connect your applications with third-party services and platforms through our expert API integration services.</p>
                  
                  <h4>API Migration & Modernization</h4>
                  <p>Upgrade your legacy APIs to modern standards and architectures for better performance and maintainability.</p>
                  
                  <h4>API Security</h4>
                  <p>Implement robust security measures including OAuth, JWT, and API keys to protect your data and services.</p>
                  
                  <h4>API Documentation</h4>
                  <p>Comprehensive API documentation that makes integration easy for developers, complete with code samples and interactive examples.</p>
                  
                  <h3>Technologies We Work With</h3>
                  <ul>
                    <li>RESTful APIs</li>
                    <li>GraphQL</li>
                    <li>Node.js / Express</li>
                    <li>Python / Django / Flask</li>
                    <li>Java / Spring Boot</li>
                    <li>.NET Core</li>
                    <li>Serverless APIs</li>
                  </ul>
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
                  <h3>About API Development</h3>
                  <div className="author-content">
                    <Image 
                      src="/img/blog/api_development_3.jpg" 
                      alt="API Development" 
                      width={300} 
                      height={200}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <h4>API Solutions</h4>
                    <p>We help businesses build and integrate powerful APIs that connect systems, enable mobile applications, and power digital experiences.</p>
                  </div>
                </div>
                
                {/* Benefits */}
                <div className="main-category" style={{ marginTop: '30px' }}>
                  <h3>Key Benefits</h3>
                  <div className="category-list">
                    <ul>
                      <li>Improved System Integration</li>
                      <li>Enhanced Security</li>
                      <li>Scalable Architecture</li>
                      <li>Faster Time to Market</li>
                      <li>Better Developer Experience</li>
                      <li>Future-Proof Solutions</li>
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

export default ApiDevelopmentPage;
