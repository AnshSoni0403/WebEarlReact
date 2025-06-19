"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import '../styles/all.css';
import '../styles/blog.css';

const MobileApplicationDevelopmentPage = () => {
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
          backgroundImage: 'url(/img/blog/mobile_application_3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="blog-hero-banner-text">
          <h1>Know more about Mobile Application Development</h1>
          <p>The future of mobile is the future of online. It is how people access online content now.</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="blog-body">
        <div className="container">
          <div className="row">
            {/* Left Sidebar */}
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="left-side">
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
                  <h3>About Mobile Application Development</h3>
                  <div className="author-content">
                    <Image 
                      src="/img/blog/mobile_application_4.jpg" 
                      alt="Mobile Application Development" 
                      width={300} 
                      height={200}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <h4>Mobile Application Development</h4>
                    <p>Mobility is the most disruptive innovation that enterprises are embracing today. Mobility empowers businesses to have access to business processes, customer requests, sales pipeline real-time & taking informed decisions on the move without having to be bound by desks. This immensely powerful innovation presents its own challenges whilst leveraging it to adapt to the current business processes. Having real time access to highly sensitive business information, besides its sheer power, can be risky as well, involving security threats.</p>
                  </div>
                </div>
                
                {/* Technologies Section */}
                <div className="main-category" style={{ marginTop: '30px' }}>
                  <h3>Technology</h3>
                  <div className="category-list">
                    <ul>
                      <li>Android with JAVA & Kotlin</li>
                      <li>iOS Swift</li>
                      <li>Flutter</li>
                      <li>React Native</li>
                      <li>Xamarin</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
              <div className="right-side">
                <div className="blog-post-heading">
                  <h1>Mobile Application Development</h1>
                  <span className="publishe-date">With WebEarl Technologies Pvt Ltd</span>
                </div>
                
                <div className="blog-body-content">
                  <p>Mobile has come a long way from being just a communication channel to being an information channel. Advancement in communication technology and information technology has presented us with another channel for accessing real time information coming from every possible nook & cranny on the globe delivering web content, applications and real time connectivity with people & systems that hitherto were residing in silos.</p>
                  
                  {/* Blog Image */}
                  <div className="blog-inner">
                    <Image 
                      src="/img/blog/mobile_application_1.jpg" 
                      alt="Mobile Application Development" 
                      width={800} 
                      height={450}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  
                  {/* Android Application Section */}
                  <div className="blog-post-heading">
                    <span className="publishe-date">Android Application</span>
                  </div>
                  <p>Android is the most popular mobile operating system in the world, powering billions of devices. Our Android app development services help businesses reach a wider audience with high-quality, performant applications. We specialize in both native Android development using Java and Kotlin, as well as cross-platform solutions.</p>
                  
                  {/* iOS Application Section */}
                  <div className="blog-post-heading">
                    <span className="publishe-date">iOS Application</span>
                  </div>
                  <p>iOS apps are known for their premium quality and seamless user experience. Our iOS app development team creates stunning, high-performance applications for iPhones and iPads using Swift and Objective-C. We follow Apple's Human Interface Guidelines to ensure your app feels right at home on iOS devices.</p>
                  
                  {/* Cross-Platform Section */}
                  <div className="blog-post-heading">
                    <span className="publishe-date">Cross-Platform Development</span>
                  </div>
                  <p>Reach both Android and iOS users with a single codebase. Our cross-platform development services using frameworks like Flutter and React Native allow you to save time and resources while delivering native-like performance and user experience across platforms.</p>
                  
                  {/* Enterprise Mobility */}
                  <div className="blog-post-heading">
                    <span className="publishe-date">Enterprise Mobility Solutions</span>
                  </div>
                  <p>Transform your business operations with our enterprise mobility solutions. We develop secure, scalable mobile applications that integrate with your existing systems, enabling your workforce to be more productive and efficient, whether they're in the office or on the go.</p>
                  
                  <p>At WebEarl Technologies, we understand that mobile is no longer just a channel but an integral part of the customer journey. Our mobile app development services are designed to help businesses leverage the power of mobile to engage customers, streamline operations, and drive growth.</p>
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

export default MobileApplicationDevelopmentPage;
