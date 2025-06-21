"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import '../styles/all.css';
import '../styles/blog.css';
import CallToAction from "../call-to-action";
import { FaSearch } from "react-icons/fa";

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
          backgroundImage: 'url(/img/blog/erp_4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="blog-hero-banner-text">
          <h1>Know more about Web ERP Development</h1>
          <p>Rules always cost the business something. This cost must be balanced against business risks.</p>
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
                  <p>WebEarl is a Custom ERP Development Company that can develop and deliver a custom ERP Solution based on your business requirements and to help you grow your business exponentially by automating all your reoccuring tasks.</p><br />
                  
                  <p>Enterprise Resource Planning systems are software systems that prove to be of great help in operations planning, administration and to optimize internal business processes, comprising of manufacturing, supply chain, financials, customer relationship management, human resources as well as warehouse management. With the help of these solutions, a typical ERP software integrates the data and processes of an organization into a single unified system.</p>
                  
                  {/* Blog Image */}
                  <div className="blog-inner">
                    <Image 
                      src="/img/blog/erp_1.jpg" 
                      alt="Web ERP Development" 
                      width={800} 
                      height={450}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  
                  <p><b>ERP-SALES MANAGEMENT SOLUTION</b><br />
                  Our offshore app development team excels in the development of interactive, feature-packed, and high-functioning applications. We manage a multi-thread work environment with a team of proficient designers, developers, engineers, business analysts & architects. They specialize in custom android app development for creating cross-platform as well as native apps for SMEs and large organizations. We provide an edge over your competitors by creating applications to leverage future-proof technology and app trends.</p><br />

                  <p><b>ERP-CUSTOMER RELATION MANAGEMENT</b><br />Our offshore app development team excels in the development of interactive, feature-packed, and high-functioning applications. We manage a multi-thread work environment with a team of proficient designers, developers, engineers, business analysts & architects. They specialize in custom android app development for creating cross-platform as well as native apps for SMEs and large organizations. We provide an edge over your competitors by creating applications to leverage future-proof technology and app trends.</p><br />

                  <p><b>ERP-HUMAN CAPITAL MANAGEMENT</b><br />Our offshore app development team excels in the development of interactive, feature-packed, and high-functioning applications. We manage a multi-thread work environment with a team of proficient designers, developers, engineers, business analysts & architects. They specialize in custom android app development for creating cross-platform as well as native apps for SMEs and large organizations. We provide an edge over your competitors by creating applications to leverage future-proof technology and app trends.</p><br />

                  <p><b>ERP-FINANCE MANAGEMENT SOLUTIONS</b><br />Our offshore app development team excels in the development of interactive, feature-packed, and high-functioning applications. We manage a multi-thread work environment with a team of proficient designers, developers, engineers, business analysts & architects. They specialize in custom android app development for creating cross-platform as well as native apps for SMEs and large organizations. We provide an edge over your competitors by creating applications to leverage future-proof technology and app trends.</p>
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
                    <button type="submit" className="blog-search-icon-small" style={{ background: 'none', border: 'none', position: 'absolute', right: 40, top: 70, cursor: 'pointer' }}>
                                                              <FaSearch size={22} color="#bdbdbd" />
                                                            </button>
                  </form>
                </div>
                
                {/* About Section */}
                <div className="author-profile">
                  <h3>about Web ERP Development</h3>
                  <div className="author-content">
                    <Image 
                      src="/img/blog/erp_3.jpg" 
                      alt="Web ERP Development" 
                      width={300} 
                      height={200}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <h4>Web ERP Development</h4><br />
                    <b>ERP-PRODUCTION MANAGEMENT SOLUTIONS</b>
                    <p>Our offshore app development team excels in the development of interactive, feature-packed, and high-functioning applications. We manage a multi-thread work environment with a team of proficient designers, developers, engineers, business analysts & architects. They specialize in custom android app development for creating cross-platform as well as native apps for SMEs and large organizations. We provide an edge over your competitors by creating applications to leverage future-proof technology and app trends.</p><br />
                  </div>
                </div>
                
                {/* Category & Features */}
                <div className="main-category">
                  <h3>Category & Features</h3>
                  <div className="category-list">
                    <ul>
                      <li>Finance</li>
                      <li>Inventory</li>
                      <li>Purchase</li>
                      <li>Order Management</li>
                      <li>Support</li>
                      <li>Customer Relationship</li>
                      <li>Time & Expanse</li>
                      <li>Project Management</li>
                      <li>Services</li>
                      <li>Human Resource & Payroll</li>
                      <li>Warehouse</li>
                      <li>Manufacturing</li>
                      <li>Asset Management</li>
                      <li>Document Management System</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </>
  );
};

export default WebErpDevelopmentPage;
