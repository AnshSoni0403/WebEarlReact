import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../header';
import Footer from '../footer';

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
                    <Link href="/contact">Request Quote</Link>
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
                  <p>We have a team of 20+ associates (UI/UX designers, mobile app developers, Web Developers, API Developers, Digital Marketers and quality analysts) in our work centers to deliver strategically designed and creatively crafted mobile application development services to take your business to the next level.</p>
                  <div className="section-button">
                    <Link href="/contact">Request Quote</Link>
                  </div>
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
                  <p>We are transforming startup ideas into success stories. Our commitment and cutting edge
                    software technology will bolster your new dare to fly high. We help start-ups to nurture
                    their ideas and provide them with their respective launch pads.</p>
                  <div className="section-button">
                    <Link href="/contact">Request Quote</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 margin-top-lb-30 margin-top-sb-30">
                <div className="about-content">
                  <div className="about-section-title">
                    <h4>Working with Enterprise</h4>
                  </div>
                  <p>We offer a spectrum of app development solutions with innovative methods for engagement
                    and system integration with support of cutting edge latest technology that takes
                    businesses to the next level. Our experts have built such enterprise mobility solutions
                    which will enhance your business.</p>
                  <div className="section-button">
                    <Link href="/contact">Request Quote</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <div className="about-counter-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 d-flex align-items-center">
              <div className="section-heading-2 section-heading-2-p-a about-counter-text">
                <h4>Summary</h4>
                <h3>Achivement we have</h3>
                <p>We started WebEarl in just 8000/- INR and 2 computers on rent, and our first year turnover
                  was 1400000/- INR. In this journey we launch two own products, 100+ satisfied Clients and
                  350+ Completed Projects and many more projects are in progress. MOU with MBIT Engineering
                  College for Industrial Training for Final year Students. MOU with SAN SA Company from
                  Tunisia, South Africa for IT Development Services. Like to know about us? Let's work with
                  and be a part of our journey </p>
                <div className="section-button">
                  <Link href="/contact">Request quote</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 single-count-item-mb">
                  <div className="single-count-area">
                    <img src="/img/counter/manager.png" alt="Clients" className="img-fluid" />
                    <br />
                    <span className="counter">102</span><span>+</span>
                    <p>clients</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 single-count-item-mb">
                  <div className="single-count-area">
                    <img src="/img/counter/chart.png" alt="Projects" className="img-fluid" />
                    <br />
                    <span className="counter">398</span><span>+</span>
                    <p>projects</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="single-count-area">
                    <img src="/img/counter/coin.png" alt="Profit" className="img-fluid" />
                    <br />
                    <span className="counter">89</span><span>k+</span>
                    <p>profit</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 margin-top-sb-30">
                  <div className="single-count-area">
                    <img src="/img/counter/theme.png" alt="Coming Soon" className="img-fluid" />
                    <br />
                    <span className="counter">28</span><span>+</span>
                    <p>coming</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
