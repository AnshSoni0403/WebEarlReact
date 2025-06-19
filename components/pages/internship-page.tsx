"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import '../styles/all.css';
import '../styles/blog.css';

const InternshipPage = () => {
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
          backgroundImage: 'url(/img/blog/internship_1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="blog-hero-banner-text">
          <h1>Internship & Training Program</h1>
          <p>Kickstart your career with hands-on experience and industry-relevant training</p>
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
                  <h1>Internship & Training</h1>
                  <span className="publishe-date">With WebEarl Technologies Pvt Ltd</span>
                </div>
                
                <div className="blog-body-content">
                  <p><strong>Launch Your Tech Career with Our Internship Program</strong></p>
                  <p>Our internship program is designed to provide students and recent graduates with real-world experience in web and mobile application development. Work on live projects and gain hands-on experience that will set you apart in the job market.</p>
                  
                  {/* Blog Image */}
                  <div className="blog-inner">
                    <Image 
                      src="/img/blog/internship_2.jpg" 
                      alt="Internship Program" 
                      width={800} 
                      height={450}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  
                  <h3>Why Choose Our Internship Program?</h3>
                  
                  <h4>Real-World Experience</h4>
                  <p>Work on actual client projects and gain experience that employers value. Our internship program gives you the opportunity to apply your knowledge in a professional setting.</p>
                  
                  <h4>Mentorship</h4>
                  <p>Learn from experienced professionals who are passionate about helping you grow. Our team will provide guidance and support throughout your internship.</p>
                  
                  <h4>Skill Development</h4>
                  <p>Enhance your technical skills and learn industry best practices. We offer training in the latest technologies and development methodologies.</p>
                  
                  <h4>Networking Opportunities</h4>
                  <p>Connect with industry professionals and build relationships that can help launch your career. Our alumni network includes successful professionals at top companies.</p>
                  
                  <h4>Potential Employment</h4>
                  <p>Outstanding interns may be considered for full-time positions upon successful completion of the program.</p>
                  
                  <h3>Available Tracks</h3>
                  <ul>
                    <li>Web Development (React, Node.js, PHP, etc.)</li>
                    <li>Mobile App Development (Android, iOS, Flutter, React Native)</li>
                    <li>UI/UX Design</li>
                    <li>Digital Marketing</li>
                    <li>Quality Assurance</li>
                  </ul>
                  
                  <div className="blog-inner" style={{ marginTop: '30px' }}>
                    <Image 
                      src="/img/blog/internship_3.jpg" 
                      alt="Internship Benefits" 
                      width={800} 
                      height={450}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  
                  <h3>How to Apply</h3>
                  <p>To apply for our internship program, please send your resume and a brief cover letter to <a href="mailto:internship@webearl.com">internship@webearl.com</a>. Be sure to include your area of interest and availability.</p>
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
                  <h3>About Our Internship Program</h3>
                  <div className="author-content">
                    <Image 
                      src="/img/blog/internship_4.jpg" 
                      alt="Internship Program" 
                      width={300} 
                      height={200}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <h4>Internship & Training</h4>
                    <p>Our internship program provides a platform for students and recent graduates to gain practical experience and develop their skills in a professional environment.</p>
                  </div>
                </div>
                
                {/* Program Details */}
                <div className="main-category" style={{ marginTop: '30px' }}>
                  <h3>Program Details</h3>
                  <div className="category-list">
                    <ul>
                      <li>Duration: 3-6 months</li>
                      <li>Full-time/Part-time options</li>
                      <li>Stipend available</li>
                      <li>Certificate upon completion</li>
                      <li>Flexible start dates</li>
                    </ul>
                  </div>
                </div>
                
                {/* Contact Info */}
                <div className="main-category" style={{ marginTop: '30px' }}>
                  <h3>Contact Us</h3>
                  <div className="category-list">
                    <p>Email: <a href="mailto:internship@webearl.com">internship@webearl.com</a></p>
                    <p>Phone: +91-XXXXXXXXXX</p>
                    <p>Address: Your Company Address Here</p>
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

export default InternshipPage;
