"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import '../styles/all.css';
import '../styles/blog.css';

const CrmDevelopmentPage = () => {
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
          backgroundImage: 'url(/img/blog/crm_development_1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="blog-hero-banner-text">
          <h1>CRM Development Services</h1>
          <p>Transform your customer relationships with our custom CRM solutions</p>
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
                  <h1>CRM Development</h1>
                  <span className="publishe-date">With WebEarl Technologies Pvt Ltd</span>
                </div>
                
                <div className="blog-body-content">
                  <p><strong>Custom CRM Solutions for Your Business</strong></p>
                  <p>Customer Relationship Management (CRM) systems are essential for managing your company's interactions with current and potential customers. Our custom CRM solutions are designed to streamline your sales, marketing, and customer service processes.</p>
                  
                  {/* Blog Image */}
                  <div className="blog-inner">
                    <Image 
                      src="/img/blog/crm_development_2.jpg" 
                      alt="CRM Development" 
                      width={800} 
                      height={450}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  
                  <h3>Our CRM Development Services</h3>
                  
                  <h4>Custom CRM Development</h4>
                  <p>We build custom CRM solutions tailored to your specific business needs, ensuring seamless integration with your existing systems and workflows.</p>
                  
                  <h4>CRM Integration</h4>
                  <p>Integrate your CRM with other business applications like email, marketing automation, and ERP systems for a unified business management solution.</p>
                  
                  <h4>Mobile CRM</h4>
                  <p>Access your CRM on the go with our mobile-optimized solutions that keep your team connected from anywhere.</p>
                  
                  <h4>CRM Migration</h4>
                  <p>Seamlessly migrate your existing CRM data to a new system with minimal disruption to your business operations.</p>
                  
                  <h4>CRM Support & Maintenance</h4>
                  <p>Ongoing support and maintenance services to ensure your CRM system continues to meet your business needs.</p>
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
                  <h3>About CRM Development</h3>
                  <div className="author-content">
                    <Image 
                      src="/img/blog/crm_development_3.jpg" 
                      alt="CRM Development" 
                      width={300} 
                      height={200}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <h4>CRM Solutions</h4>
                    <p>We help businesses build strong customer relationships through custom CRM solutions that improve efficiency and drive growth.</p>
                  </div>
                </div>
                
                {/* Features */}
                <div className="main-category" style={{ marginTop: '30px' }}>
                  <h3>Key Features</h3>
                  <div className="category-list">
                    <ul>
                      <li>Contact Management</li>
                      <li>Lead Management</li>
                      <li>Sales Pipeline</li>
                      <li>Task Management</li>
                      <li>Reporting & Analytics</li>
                      <li>Email Integration</li>
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

export default CrmDevelopmentPage;
