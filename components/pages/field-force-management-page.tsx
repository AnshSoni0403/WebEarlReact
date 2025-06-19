"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import '../styles/all.css';
import '../styles/blog.css';

const FieldForceManagementPage = () => {
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
          backgroundImage: 'url(/img/blog/field_force_1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="blog-hero-banner-text">
          <h1>Field Force Management</h1>
          <p>Optimize your field operations with our comprehensive field force management solutions</p>
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
                  <h1>Field Force Management</h1>
                  <span className="publishe-date">With WebEarl Technologies Pvt Ltd</span>
                </div>
                
                <div className="blog-body-content">
                  <p><strong>Streamline Your Field Operations</strong></p>
                  <p>Our Field Force Management solutions help businesses effectively manage their mobile workforce, improve productivity, and enhance customer service through real-time tracking, task management, and data-driven insights.</p>
                  
                  {/* Blog Image */}
                  <div className="blog-inner">
                    <Image 
                      src="/img/blog/field_force_2.jpg" 
                      alt="Field Force Management" 
                      width={800} 
                      height={450}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  
                  <h3>Our Field Force Management Solutions</h3>
                  
                  <h4>Real-time Tracking</h4>
                  <p>Monitor your field workforce in real-time with GPS tracking, geofencing, and location history to optimize routes and improve response times.</p>
                  
                  <h4>Task & Work Order Management</h4>
                  <p>Efficiently assign, track, and manage field service tasks with our intuitive work order management system.</p>
                  
                  <h4>Mobile Workforce App</h4>
                  <p>Empower your field team with a user-friendly mobile app for task management, customer information access, and real-time updates.</p>
                  
                  <h4>Automated Scheduling</h4>
                  <p>Automate scheduling based on location, availability, and skillset to maximize workforce efficiency.</p>
                  
                  <h4>Performance Analytics</h4>
                  <p>Gain valuable insights into field operations with comprehensive reporting and analytics dashboards.</p>
                  
                  <h3>Key Features</h3>
                  <ul>
                    <li>Live GPS Tracking</li>
                    <li>Route Optimization</li>
                    <li>Digital Forms & Checklists</li>
                    <li>Customer Visit Management</li>
                    <li>Expense Tracking</li>
                    <li>Inventory Management</li>
                    <li>Offline Capabilities</li>
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
                  <h3>About Field Force Management</h3>
                  <div className="author-content">
                    <Image 
                      src="/img/blog/field_force_3.jpg" 
                      alt="Field Force Management" 
                      width={300} 
                      height={200}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <h4>Mobile Workforce Solutions</h4>
                    <p>We provide comprehensive field force management solutions that help businesses optimize their mobile workforce operations and improve service delivery.</p>
                  </div>
                </div>
                
                {/* Benefits */}
                <div className="main-category" style={{ marginTop: '30px' }}>
                  <h3>Business Benefits</h3>
                  <div className="category-list">
                    <ul>
                      <li>Increased Productivity</li>
                      <li>Reduced Operational Costs</li>
                      <li>Improved Customer Satisfaction</li>
                      <li>Enhanced Visibility & Control</li>
                      <li>Data-Driven Decision Making</li>
                      <li>Scalable Solutions</li>
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

export default FieldForceManagementPage;
