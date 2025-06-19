"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import '../styles/all.css';
import '../styles/blog.css';

const PrototypeDevelopmentPage = () => {
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
          backgroundImage: 'url(/img/blog/prototype_1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="blog-hero-banner-text">
          <h1>Prototype Development</h1>
          <p>Transform your ideas into interactive prototypes that bring your vision to life</p>
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
                  <h1>Prototype Development</h1>
                  <span className="publishe-date">With WebEarl Technologies Pvt Ltd</span>
                </div>
                
                <div className="blog-body-content">
                  <p><strong>From Concept to Interactive Prototype</strong></p>
                  <p>Our prototype development services help you validate your ideas, gather user feedback, and secure stakeholder buy-in before investing in full-scale development. We create high-fidelity, interactive prototypes that bring your concepts to life.</p>
                  
                  {/* Blog Image */}
                  <div className="blog-inner">
                    <Image 
                      src="/img/blog/prototype_2.jpg" 
                      alt="Prototype Development" 
                      width={800} 
                      height={450}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  
                  <h3>Our Prototype Development Process</h3>
                  
                  <h4>Conceptualization</h4>
                  <p>We work closely with you to understand your vision, target audience, and business objectives to create a solid foundation for your prototype.</p>
                  
                  <h4>Wireframing</h4>
                  <p>Low-fidelity wireframes help us establish the basic structure and user flow of your application or product.</p>
                  
                  <h4>UI/UX Design</h4>
                  <p>Our designers create visually appealing and intuitive user interfaces that enhance the user experience.</p>
                  
                  <h4>Interactive Prototyping</h4>
                  <p>We transform static designs into clickable, interactive prototypes that simulate the final product experience.</p>
                  
                  <h4>User Testing</h4>
                  <p>Gather valuable feedback through user testing to refine and improve your prototype before development begins.</p>
                  
                  <h3>Types of Prototypes We Develop</h3>
                  <ul>
                    <li>Web Application Prototypes</li>
                    <li>Mobile App Prototypes</li>
                    <li>Enterprise Software Prototypes</li>
                    <li>IoT Device Interfaces</li>
                    <li>Wearable App Prototypes</li>
                    <li>Dashboard & Analytics Prototypes</li>
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
                  <h3>About Prototype Development</h3>
                  <div className="author-content">
                    <Image 
                      src="/img/blog/prototype_3.jpg" 
                      alt="Prototype Development" 
                      width={300} 
                      height={200}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <h4>Idea Validation</h4>
                    <p>We help you validate your ideas through interactive prototypes that bring your concepts to life before full-scale development.</p>
                  </div>
                </div>
                
                {/* Benefits */}
                <div className="main-category" style={{ marginTop: '30px' }}>
                  <h3>Why Choose Us</h3>
                  <div className="category-list">
                    <ul>
                      <li>Experienced UI/UX Designers</li>
                      <li>Rapid Prototyping</li>
                      <li>User-Centered Design</li>
                      <li>Interactive & Clickable Prototypes</li>
                      <li>Feedback Integration</li>
                      <li>Cost-Effective Solutions</li>
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

export default PrototypeDevelopmentPage;
