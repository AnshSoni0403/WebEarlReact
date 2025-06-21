"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import '../styles/all.css';
import CallToAction from "../call-to-action";
import { FaSearch } from "react-icons/fa";
// import '../styles/blog.css';

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
          backgroundImage: 'url(/img/blog/training_and_internship_2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="blog-hero-banner-text">
          <h1>Know more about Training & Internship</h1>
          <p>Practice is the hardest part of learning, and training is the essence of transformation.</p>
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
                  <h1>Training & Internship</h1>
                  <span className="publishe-date">With WebEarl Technologies Pvt Ltd</span>
                </div>
                
                <div className="blog-body-content">
                  <b>Discover a Professional World full of Opportunities!</b>
                  <p>Right skills and right opportunities are the two main prerequisites to get on the road of success that ultimately leads to a path of constant learning. <b>WebEarl Technologies</b> offers an opportunity to jobseekers to learn through its On-job training program.</p><br />
                  
                  <b>By getting involved with our live training procedure you will get,</b>
                  <ul style={{ listStyleType: 'disc', marginLeft: '20px', paddingLeft: '20px' }}>
                    <li>Expert mentors to get <b>100% practical training</b></li>
                    <li>Be familiar with the vision and working environments of an IT firm</li>
                    <li>Interoperability amongst <b>different programming languages</b></li>
                    <li>Learn the best thing and proven practice</li>
                    <li>Improve the <b>qualities of leadership</b></li>
                    <li>Understand the <b>complete project life cycle</b> step by step</li>
                    <li>Improve the logical, analytical as well as <b>communication skills</b></li>
                    <li>Increase the level of <b>confidence</b></li>
                    <li>Learn different approaches and tactics to <b>develop high-quality projects</b></li>
                  </ul>
                  
                  {/* Blog Image */}
                  <div className="blog-inner">
                    <Image 
                      src="/img/blog/training_and_internship_1.jpg" 
                      alt="Training & Internship" 
                      width={800} 
                      height={450}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  
                  <p><b>Evaluation and Placement!</b><br />After the completion of training program, the performance of each candidate will be evaluated and the <b>best performers</b> will get an opportunity to work with the company as a <b>full time employee.</b></p><br />
                  
                  <b>We groom Fresh Talent and prepare them for Top Jobs!</b>
                  <p>Right, bright and aspiring graduates are the <b>future of Information Technology</b>. WebEarl Technologies believes in providing <b>equal opportunity</b> to everyone, be it a fresher or an experienced one. The company recognizes the talent and nurtures them through its On-Job Training Program. <b>WebEarl Technologies</b> training program does not include classroom training practice rather it facilitates the students/jobseekers to get a <b>digital learning environment</b>. They get an opportunity to work on <b>updated technology</b> and live projects to enrich their professional capabilities, develop their critical skills and enhance their overall personality.</p>
                </div>
              </div>
            </div>
            
            {/* Right Sidebar */}
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="right-side">
                {/* Search */}
                <div className="blog-search" style={{ position: 'relative' }}>
                  <form action="#">
                    <input type="search" id="blog-search" placeholder="Search" />
                    <button type="submit" className="blog-search-icon-small" style={{ background: 'none', border: 'none', position: 'absolute', right: 20, top: 12, cursor: 'pointer' }}>
                      <FaSearch size={22} color="#bdbdbd" />
                    </button>
                  </form>
                </div>
                
                {/* About Section */}
                <div className="author-profile">
                  <h3>About Training & Internship</h3>
                  <div className="author-content">
                    <Image 
                      src="/img/blog/training_and_internship_3.jpg" 
                      alt="Training & Internship" 
                      width={300} 
                      height={200}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <h4>Training & Internship</h4>
                    
                  </div>
                </div>
                
                {/* Category */}
                <div className="main-category">
                  <h3>Technologies</h3>
                  <div className="category-list">
                    <ul>
                      <li>Artificial Intelligence (AI)</li>
                      <li>Internet of Things (IoT)</li>
                      <li>PHP, WordPress, Magento</li>
                      <li>ASP.Net (MVC) & NTT Framework</li>
                      <li>JAVA, Spring, Hibernate, Struts</li>
                      <li>Python, Flask, Django, Odoo</li>
                      <li>Web Designing</li>
                      <li>Graphics Designing</li>
                      <li>Digital Marketing</li>
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
          </div>
        </div>
      </div>
      <CallToAction/>
      <Footer />
    </>
  );
};

export default InternshipPage;
