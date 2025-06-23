import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../header';
import Footer from '../footer';
import BlogSection from '../blog-section';
import CounterSection from '../counter-section';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us - WebEarl</title>
        <meta name="description" content="Learn more about WebEarl and our dedicated team" />
      </Head>

      <Header />

      {/* Hero Banner */}
      <div className="about-hero-banner">
        <div className="about-hero-text">
          <h1>Know more about Us</h1>
          <p>Success is not final; failure is not fatal: It is the courage to continue that counts.</p>
        </div>
      </div>

      {/* About Content */}
      <section id="about">
        <div className="abou-us-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="about-content">
                  <div className="about-section-title">
                    <h4>What We do?</h4>
                  </div>
                  <p>we specialize in designing and developing custom mobile applications for Android and iOS platforms, along with tailored web applications that align perfectly with your business goals. Our highly skilled developers leverage the latest in Artificial Intelligence (AI) and Machine Learning (ML) technologies to create intelligent, scalable apps that not only enhance user engagement but also optimize business processes. Whether you’re launching a new app or upgrading an existing one, we deliver innovative, high-performance solutions. Choose Webearl to transform your ideas into powerful, future-ready mobile and web applications.</p>
                  <div className="section-button">
                    <Link href="/hiring">Hire Us</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 margin-top-lb-30 margin-top-sb-30">
                <div className="youtube-video-wrapper">
                  <div className="popup-gallery">
                    {/* Video placeholder can be added here */}
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="row about-section-separate">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="about-team">
                  <img 
                    src="/img/carechter.png" 
                    alt="Our Team" 
                    className="img-fluid" 
                    width={540}
                    height={360}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 margin-top-sb-30 margin-top-lb-30">
                <div className="about-content about-content-right">
                  <div className="about-section-title">
                    <h4>Most Dedicated team we have</h4>
                  </div>
                  <p>our diverse team of 20+ experts, including UI/UX designers, mobile app developers, web developers, API developers, digital marketers, and quality analysts, is dedicated to delivering top-notch mobile application development services. We strategically design and creatively craft custom mobile apps and web applications to elevate your business. By integrating innovative design with advanced technology, we ensure that every project enhances user experience and drives business growth. Trust Webearl Technologies for comprehensive, high-quality solutions that take your business to the next level.</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working With Section */}
      <section id="about">
        <div className="abou-us-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="about-content">
                  <div className="about-section-title">
                    <h4>Working with Startup</h4>
                  </div>
                  <p>we excel in transforming startup ideas into successful ventures. Our commitment to cutting-edge software technology and innovative solutions provides startups with the essential tools and support needed to thrive. We specialize in nurturing startup ideas and offering comprehensive launch pad services to help turn your vision into a thriving reality. With our expert guidance and advanced technology, your startup can confidently soar to new heights and achieve remarkable success..</p>
                  
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 margin-top-lb-30 margin-top-sb-30">
                <div className="about-content">
                  <div className="about-section-title">
                    <h4>Working with Enterprise</h4>
                  </div>
                  <p>We offer a comprehensive range of app development solutions utilizing innovative methods for engagement and system integration all supported by the latest cutting-edge technology. Our expert team specializes in creating enterprise mobility solutions that elevate businesses to the next level. By leveraging advanced technology and strategic design, we enhance your business operations and drive growth through tailored, high-performance app development. Choose us to transform your ideas into effective, scalable solutions that set your business apart.</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CounterSection />

      {/* Counter Section */}
      {/* <div className="about-counter-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 d-flex align-items-center">
              <div className="section-heading-2 section-heading-2-p-a about-counter-text">
                <h4>Summary</h4>
                <h3>Achievement we have</h3>
                <p>At Webearl Technologies, we are proud of our significant achievements in providing top-tier app development solutions Our innovative techniques in user engagement and system integration paired with the latest cutting-edge technology have successfully elevated businesses to new levels of success. Our track record in delivering enterprise mobility solutions highlights our dedication to enhancing business performance and driving growth. With our focus on high-performance, customized solutions, we have built a reputation for excellence, helping businesses excel in today’s competitive digital landscape.</p>
                
              </div>
            </div>
            <div className="col-xl-6">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 single-count-item-mb">
                  <div className="single-count-area">
                    <img src="img/counter/year-in-business.png" alt="Clients" className="img-fluid" />
                    <br />
                    <span className="counter">7</span><span>+</span>
                    <p>Years in business</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 single-count-item-mb">
                  <div className="single-count-area">
                    <img src="img/counter/team-member.png" alt="Projects" className="img-fluid" />
                    <br />
                    <span className="counter">20</span><span>+</span>
                    <p>Team Members</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="single-count-area">
                    <img src="img/counter/project-delivered.png" alt="Profit" className="img-fluid" />
                    <br />
                    <span className="counter">100</span><span>+</span>
                    <p>Projects Delivered</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 margin-top-sb-30">
                  <div className="single-count-area">
                    <img src="img/counter/client-served.png" alt="Coming Soon" className="img-fluid" />
                    <br />
                    <span className="counter">50</span><span>+</span>
                    <p>Clients Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <BlogSection />

      {/* Call to Action Section */}
      <div className="callto-action">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-7">
              <div className="callto-action-text">
                <h5>Like what you see? <span>Let's work</span></h5>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5">
              <div className="callto-action-btn">
                <Link href="/contact">Hire us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <Footer />
    </>
  );
};

export default AboutPage;
