"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../header';
import Footer from '../footer';
import '../styles/portfolio.css';

const PortfolioPage = () => {
  // Initialize AOS animation on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      require('aos/dist/aos.css');
      AOS.init({
        duration: 1000,
        once: true
      });
    }
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: 'One Click',
      image: '/img/OneClick Mobile Application.png',
      description: 'The OneClick Application offers an easy way to quickly and easily search for local businesses, goods, or services that is interactive, intuitive, and quick. You can now use the top local search engine from your smartphone.',
      technologies: 'UI/UX: Figma\nMobile: Android & iOS',
      detailsLink: '/img/pdf/OneClick - Mock-up.pdf',
      target: '_blank'
    },
    {
      id: 2,
      title: 'AHA Application',
      image: '/img/portfolio/AHA_Application.png',
      description: 'Receive Personalized reports, recommendations, and prescriptions to improve organ function and health.\n\nUnderstand the implications of your blood test results on each of your organs and overall health.',
      technologies: 'UI/UX: Figma\nMobile: iOS',
      detailsLink: '#',
      target: ''
    },
    {
      id: 3,
      title: 'Energeia Solutions',
      image: '/img/portfolio/Energieagas1.png',
      description: 'Urja Energy Solutions is a proud channel partner of Bharat Petroleum (BPCL) to supply LPG for Industrial / commercial applications',
      technologies: 'Web: Wordpress\nDatabase: My SQL',
      detailsLink: 'http://www.energeiasolutions.com',
      target: '_blank'
    },
    {
      id: 4,
      title: 'Matrimonial App',
      image: '/img/portfolio/Matrimonial.png',
      description: 'The main purpose of this application is to facilitate matchmaking business by applying the information in the field.\n\nUser can get information regarding their dream life partner at his/her home at his/her convenience.',
      technologies: 'UI/UX: Figma\nMobile: iOS',
      detailsLink: '/img/pdf/Matrimonial_App.pdf',
      target: '_blank'
    },
    {
      id: 5,
      title: 'Voila Ecommorce',
      image: '/img/portfolio/Ecommorce_Poster.png',
      description: 'On the shot you can see the onboarding screen, where users can choose the goods category. The screen also shows goods cards, you can add them to your cart and buy it',
      technologies: 'UI/UX: Figma\nMobile: iOS',
      detailsLink: '/img/pdf/Voila_Ecommorce.pdf',
      target: '_blank'
    },
    {
      id: 6,
      title: 'Field Force Tracking',
      image: '/img/portfolio/p2.png',
      description: 'Online Staff\'s Current Location & Route of Employees on Map is available, Staff Tour / Visit Entry in mobile',
      technologies: 'Mobile: Android\nWeb: Laravel\nAPI: PHP',
      detailsLink: '#',
      target: ''
    },
    {
      id: 7,
      title: 'Knock Knock',
      image: '/img/portfolio/knock_knock.png',
      description: 'Knock Knock visitor management application which secures the Visitors data at your work-places, Field, Exhibitions & Expo and many more places.',
      technologies: 'Mobile: Android\nAPI: PHP',
      detailsLink: '#',
      target: ''
    }
    // Add more portfolio items as needed
  ];

  return (
    <>
      <Head>
        <title>Portfolio - WebEarl</title>
        <meta name="description" content="Explore our portfolio of successful projects and case studies" />
      </Head>

      <Header />

      {/* Hero Banner */}
      <div className="portfolio-hero-banner">
        <div className="portfolio-hero-text">
          <h1>Highlights our works</h1>
          <p>Achieve results, not phases</p>
        </div>
      </div>

      {/* Portfolio Main Area */}
      <div className="portfolio-main-area">
        <div className="container">
          {/* Portfolio Intro */}
          <div className="portfolio-intro" data-aos="fade-up">
            <p>More than Technology, We Build Customer Relationships..!</p>
          </div>
          
          {/* Portfolio Grid */}
          <div className="row">
            {portfolioItems.map((item) => (
              <div 
                key={item.id} 
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 default-margin-mt margin-top-lb-30 margin-top-sb-30 portfolio-headmove"
                data-aos="fade-up"
                data-aos-delay={item.id * 100}
              >
                <div className="single-portfolio">
                  <div className="portfolio-image">
                    <div className="portfolio-img-container">
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        width={400}
                        height={300}
                        className="img-fluid"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                    <div className="portfolio-content">
                      <p>{item.description.split('\n').map((text, i) => (
                        <React.Fragment key={i}>
                          {text}
                          {i < item.description.split('\n').length - 1 && <><br /><br /></>}
                        </React.Fragment>
                      ))}</p>
                      <br />
                      <b>Technology:</b><br />
                      {item.technologies.split('\n').map((tech, i) => (
                        <React.Fragment key={i}>
                          {tech}<br />
                        </React.Fragment>
                      ))}
                      <br />
                      <Link 
                        href={item.detailsLink} 
                        target={item.target || '_self'}
                        className="view-details-btn"
                      >
                        view details
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-titile">
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Add necessary scripts */}
      <script src="/js/vendor/jquery-3.2.1.min.js" async></script>
      <script src="/js/popper.min.js" async></script>
      <script src="/js/bootstrap.min.js" async></script>
      <script src="/js/jquery.meanmenu.min.js" async></script>
      <script src="/js/waypoints.min.js" async></script>
      <script src="/js/jquery.counterup.min.js" async></script>
      <script src="/js/slick.min.js" async></script>
      <script src="/js/aos.js" async></script>
      <script src="/js/main.js" async></script>
    </>
  );
};

export default PortfolioPage;
