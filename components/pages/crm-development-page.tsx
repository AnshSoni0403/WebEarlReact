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
          backgroundImage: 'url(/img/blog/crm_development_2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="blog-hero-banner-text">
          <h1>Know more about CRM Development</h1>
          <p>The purpose of business is to create and keep a customer.</p>
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
                  <p>CRM Application Development means a complete solution for your business. The customer relationship management computer program is developed to sustain customer records at a central place that can be accessed by every employee. The main aim of this computer application is to maintain the customers or clients' records at a centralized location wherein, all departments will have access such that its benefits can be leveraged to uphold the interests of customers or clients, a crucial aspect that will benefit the organization. It is mostly useful to servicing departments such as client servicing and sales.</p>
                  
                  {/* Blog Image */}
                  <div className="blog-inner">
                    <Image 
                      src="/img/blog/crm_development_1.jpg" 
                      alt="CRM Development" 
                      width={800} 
                      height={450}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  
                  <p>If the data is under one umbrella, it will help the client service, sales or customer departments to improve the sales and the after sales service etc. It also helps to denote variables like changes in the market trend, changes in customers' preferences, shift in purchasing power etc. This application is one of the best computer applications to manage the data in a concise and centralized way. Small or big, any type of organizational or business setup requires such a system for it synchronizes information in just a click.</p><br />
                  
                  <p>WebEarl Technologies CRM application development professionals can work wonders for your business, it not only generates information about the clients or customers, but also is of great help to the research and development department of your company. They can study the customers' behavior, their attitude towards the product, the consistency of the sold products etc. These will always help in promoting the business, bringing changes as per the trends. CRM is not only about centralizing the client's data, but also a ready source to generate information about the changing trends.</p>
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
                    <h4>CRM Development</h4>
                    <p>WebEarl Technologies is a information technology company for developing softwares, websites, providing design and online services of different kinds. With CRM, the developers first understand the needs and requirements of the business, before working on the software to maintain the database. It helps to streamline the functioning of various sinews of the organization through the usage of CRM application.</p>
                  </div>
                </div>
                
                {/* Category & Features */}
                <div className="main-category">
                  <h3>Category & Features</h3>
                  <div className="category-list">
                    <ul>
                      <li>Lead Management</li>
                      <li>Deal Management</li>
                      <li>Contact Management</li>
                      <li>Workflow Automation</li>
                      <li>Sales Process Builder</li>
                      <li>Processing Rules</li>
                      <li>Review Process</li>
                      <li>Quotes and Finance</li>
                      <li>Partner Portals</li>
                      <li>Calendar</li>
                      <li>Territory Management</li>
                      <li>Gamification</li>
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
