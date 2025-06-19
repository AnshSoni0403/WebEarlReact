"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import '../styles/all.css';
import '../styles/blog.css';

const WebErpDevelopmentPage = () => {
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
          backgroundImage: 'url(/img/blog/erp_development_1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="blog-hero-banner-text">
          <h1>Web ERP Development</h1>
          <p>Streamline your business operations with our custom Web ERP solutions</p>
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
                  <h1>Web ERP Development</h1>
                  <span className="publishe-date">With WebEarl Technologies Pvt Ltd</span>
                </div>
                
                <div className="blog-body-content">
                  <p><strong>Comprehensive Web ERP Solutions</strong></p>
                  <p>Enterprise Resource Planning (ERP) systems are the backbone of modern businesses. Our custom Web ERP solutions help organizations integrate and manage their core business processes in real-time, improving efficiency and decision-making.</p>
                  
                  {/* Blog Image */}
                  <div className="blog-inner">
                    <Image 
                      src="/img/blog/erp_development_2.jpg" 
                      alt="Web ERP Development" 
                      width={800} 
                      height={450}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  
                  <h3>Our Web ERP Development Services</h3>
                  
                  <h4>Custom ERP Development</h4>
                  <p>We develop tailored ERP solutions that align with your business processes, ensuring maximum efficiency and return on investment.</p>
                  
                  <h4>ERP Integration</h4>
                  <p>Seamlessly integrate your ERP system with existing business applications, databases, and third-party services for a unified business management solution.</p>
                  
                  <h4>Cloud-Based ERP</h4>
                  <p>Access your ERP system from anywhere with our secure, scalable cloud-based solutions that reduce infrastructure costs.</p>
                  
                  <h4>Mobile ERP</h4>
                  <p>Empower your workforce with mobile access to critical business data and processes through our mobile-optimized ERP solutions.</p>
                  
                  <h4>ERP Migration & Upgrades</h4>
                  <p>Upgrade your existing ERP system or migrate to a new platform with minimal disruption to your business operations.</p>
                  
                  <h3>Key Modules</h3>
                  <ul>
                    <li>Financial Management</li>
                    <li>Supply Chain Management</li>
                    <li>Human Resources</li>
                    <li>Customer Relationship Management</li>
                    <li>Inventory Management</li>
                    <li>Project Management</li>
                    <li>Business Intelligence & Reporting</li>
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
                  <h3>About Web ERP</h3>
                  <div className="author-content">
                    <Image 
                      src="/img/blog/erp_development_3.jpg" 
                      alt="Web ERP Development" 
                      width={300} 
                      height={200}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <h4>Enterprise Resource Planning</h4>
                    <p>Our Web ERP solutions help businesses of all sizes automate and integrate their core business processes for improved efficiency and growth.</p>
                  </div>
                </div>
                
                {/* Benefits */}
                <div className="main-category" style={{ marginTop: '30px' }}>
                  <h3>Business Benefits</h3>
                  <div className="category-list">
                    <ul>
                      <li>Improved Operational Efficiency</li>
                      <li>Better Decision Making</li>
                      <li>Reduced Operational Costs</li>
                      <li>Enhanced Collaboration</li>
                      <li>Scalable Solutions</li>
                      <li>Real-time Data Access</li>
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

export default WebErpDevelopmentPage;
