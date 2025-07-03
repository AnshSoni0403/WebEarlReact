"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../header';
import Footer from '../footer';
import '../styles/portfolio.css';
import '../styles/all.css';

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

  return (
    <>
      <Head>
        <title>Portfolio - WebEarl</title>
        <meta name="description" content="Explore our portfolio of successful projects and case studies" />
      </Head>

      <Header />

      
      
    {/* Portfolio Image Area */}
    <div className="portfolio-hero-banner">
        <div className="portfolio-hero-text">
          <h1>Highlights our works</h1>
          <p>Achieve results, not phases</p>
        </div>
      </div>

      <div className="portfolio-main-area">
        <div className="container">
          {/* portfolio intro */}
          <div className="portfolio-intro">
            <p>More than Technology, We Build Customer Relationships..!</p>
          </div>
          <div className="row">
            {/* single portfolio - Start Your Tour */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 default-margin-mt-sm margin-top-lb-30 margin-top-sb-30 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/syt-portfolio.png" alt="Start Your Tour" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                    Discover smarter, personalized travel with transparent listings and tailored experiences for every kind of explorer.
                    </p>
                    <br />
                    <b>Technology:</b>
                    <br />
                    Web : ReactJs
                    <br />
                    Database : MongoDB
                    <br />
                    <Link href="/portfolio/syt">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>Start Your Tour</h4>
              </div>
            </div>

            {/* single portfolio - Saptavidhi Vendor */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 default-margin-mt-sm margin-top-lb-30 margin-top-sb-30 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/portfolio/Matrimonial.png" alt="Saptavidhi Vendor" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                    SaptaVidhi is a culturally rooted matchmaking platform that blends traditional values with modern technology to help individuals find genuine and lasting relationships through a seamless and personalized experience.
                    </p>
                    <br />
                    <b>Technology:</b>
                    <br />
                    Web : ReactJs
                    <br />
                    Database : MongoDB
                    <br />
                    <Link href="/portfolio/saptavidhi">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>Saptavidhi</h4>
              </div>
            </div>

            {/* single portfolio - Betting App */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 default-margin-mt-sm margin-top-lb-30 margin-top-sb-30 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/betting-portfolio.png" alt="Betting App" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                    CricGem is a skill-based fantasy cricket app designed for fans to play, compete, and enjoy the game more deeply.
                    </p>
                    <br />
                    <b>Technology:</b>
                    <br />
                    Web : ReactJs
                    <br />
                    Database : MongoDB
                    <br />
                    <Link href="/portfolio/battingapp">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>CricGem</h4>
              </div>
            </div>

            {/* single portfolio */}
            {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/portfolio/Matrimonial.png" alt="Matrimonial App" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                      The main purpose of this application is to facilitate matchmaking business by applying the
                      information in the field.
                      <br />
                    </p>

                    <p>
                      <br />
                      <b>Technology:</b>
                      <br />
                      UI/UX : Figma
                      <br />
                      Web : ReactJs
                      <br />
                      Mobile: Flutter
                      <br />
                    </p>
                    <Link href="https://play.google.com/store/apps/details?id=com.saptavidhi&hl=en" >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>Matrimonial App</h4>
              </div>
            </div> */}

            {/* single portfolio */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 margin-top-sb-30 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/portfolio/p1.png" alt="Nowo Chat" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                    NowoChat is a global interest-based chat platform that connects users with similar hobbies, professions, or concerns. Whether you're looking to chat with experts.
                    </p>
                    <br />
                    <b>Technology:</b>
                    <br />
                    Mobile : Flutter
                    <br />
                    Web : Angular 9<br />
                    API : PHP
                    <br />
                    <Link href="/portfolio/nowo" >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>Nowo Chat</h4>
              </div>
            </div>

            {/* single portfolio */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/portfolio/p3.png" alt="LeChalo" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                    Effortlessly manage parcel deliveries with the Le Chalo App, whether you're a driver or a user, enjoy a seamless, secure, and feature-rich delivery experience available across all Android and iOS devices.
                    </p>
                    <br />
                    <b>Technology:</b>
                    <br />
                    Mobile : Android
                    <br />
                    Web : Wordpress
                    <br />
                    API : Code Igniter
                    <br />
                    <Link href="/portfolio/lechalo">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>LeChalo</h4>
              </div>
            </div>

            {/* single portfolio - Start Your Tour */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 default-margin-mt-sm margin-top-lb-30 margin-top-sb-30 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/syt-portfolio.png" alt="Start Your Tour" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                      Start Your Tour provides AI-powered travel experiences with smart itineraries and real-time
                      updates for seamless journeys.
                    </p>
                    <br />
                    <b>Technology:</b>
                    <br />
                    Web : ReactJs
                    <br />
                    Database : MongoDB
                    <br />
                    <Link href="/portfolio/wayout">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>WayOut</h4>
              </div>
            </div>

            {/* single portfolio - Start Your Tour */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 default-margin-mt-sm margin-top-lb-30 margin-top-sb-30 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/portfolio/wordix.jpg" alt="Start Your Tour" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                    An enchanting word search puzzle game that sharpens your mind and widens your vocabulary.
                    </p>
                    <br />
                    <b>Technology:</b>
                    <br />
                    Web : ReactJs
                    <br />
                    Database : MongoDB
                    <br />
                    <Link href="/portfolio/word">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>Wordix</h4>
              </div>
            </div>

            {/* single portfolio - Start Your Tour */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 default-margin-mt-sm margin-top-lb-30 margin-top-sb-30 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/portfolio/XOXO.png" alt="Start Your Tour" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                    Play, Compete & Conquer in Classic Tic-Tac-Toe!

                    </p>
                    <br />
                    <b>Technology:</b>
                    <br />
                    Web : ReactJs
                    <br />
                    Database : MongoDB
                    <br />
                    <Link href="/portfolio/xoxo">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>XOXO</h4>
              </div>
            </div>

            {/* single portfolio - Start Your Tour */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 default-margin-mt-sm margin-top-lb-30 margin-top-sb-30 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/portfolio/MarkMe.png" alt="Start Your Tour" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                      Start Your Tour provides AI-powered travel experiences with smart itineraries and real-time
                      updates for seamless journeys.
                    </p>
                    <br />
                    <b>Technology:</b>
                    <br />
                    Web : ReactJs
                    <br />
                    Database : MongoDB
                    <br />
                    <Link href="/portfolio/markme">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>MarkMe</h4>
              </div>
            </div>

            {/* single portfolio - iCare */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 default-margin-mt-sm margin-top-lb-30 margin-top-sb-30 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/health-care-portfolio.png" alt="iCare" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                      iCare offers diagnostic report services with doorstep lab visits, allowing users to easily book
                      appointments through the app.
                    </p>
                    <br />
                    <b>Technology:</b>
                    <br />
                    Web : ReactJs
                    <br />
                    Database : MongoDB
                    <br />
                    <Link href="/icare">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>Icare</h4>
              </div>
            </div>

            {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/OneClick Mobile Application.png" alt="One Click" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                      The OneClick Application offers an easy way to quickly and easily search for local businesses,
                      goods, or services that is interactive, intuitive, and quick. You can now use the top local search
                      engine from your smartphone.
                    </p>
                    <br />
                    <b>Technology:</b>
                    <br />
                    UIUX : Figma
                    <br />
                    Mobile : Android & iOS
                    <br />
                    <Link href="#" >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>One Click</h4>
              </div>
            </div> */}

            {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/portfolio/AHA_Application.png" alt="AHA Application" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                      Receive Personalized reports, recommendations, and prescriptions to improve organ function and
                      health.
                      <br />
                      Understand the implications of your blood test results on each of your organs and overall health.
                    </p>

                    <p>
                      <br />
                      <b>Technology:</b>
                      <br />
                      UI/UX : Figma
                      <br />
                      Mobile: iOS
                      <br />
                    </p>
                    <Link href="#">View Details</Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>AHA Application</h4>
              </div>
            </div> */}

            {/* single portfolio
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/portfolio/Energieagas1.png" alt="Energeia Solutions" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                      Urja Energy Solutions is a proud channel partner of Bharat Petroleum (BPCL) to supply LPG for
                      Industrial / commercial applications
                    </p>

                    <p>
                      <br />
                      <b>Technology:</b>
                      <br />
                      Web: Wordpress
                      <br />
                      Database: My SQL
                      <br />
                    </p>
                    <Link href="http://www.energeiasolutions.com" >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>Energeia Solutions</h4>
              </div>
            </div> */}

            {/* single portfolio */}
            {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 default-margin-mt-sm margin-top-lb-30 margin-top-sb-30 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/portfolio/p4.png" alt="Bright Spark" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                      Bright Spark work with universities world wide to provide aspiring students best opportunities to
                      acquire admission and process visa applications.
                    </p>
                    <br />
                    <b>Technology:</b>
                    <br />
                    Web : Wordpress
                    <br />
                    Database : My SQL
                    <br />
                    <Link href="#" >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>Bright Spark</h4>
              </div>
            </div> */}

            {/* single portfolio */}
            {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/portfolio/Ecommorce_Poster.png" alt="Voila Ecommorce" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                      On the shot you can see the onboarding screen, where users can choose the goods category. The
                      screen also shows goods&apos; cards, you can add them to your cart and buy it
                    </p>

                    <p>
                      <br />
                      <b>Technology:</b>
                      <br />
                      UI/UX : Figma
                      <br />
                      Mobile: iOS
                      <br />
                    </p>
                    <Link href="/img/pdf/Voila_Ecommorce.pdf" >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>Voila Ecommorce</h4>
              </div>
            </div> */}

            {/* single portfolio */}
            {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/portfolio/p2.png" alt="Care For Each" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                      Online Staff{"'s"} Current Location & Route of Employees on Map is available, Staff Tour / Visit
                      Entry in mobile
                    </p>

                    <p>
                      <br />
                      <b>Technology:</b>
                      <br />
                      Mobile : Android
                      <br />
                      Web: Laravel
                      <br />
                      API : PHP
                      <br />
                    </p>
                    <Link href="https://play.google.com/store/apps/details?id=com.careforeach&hl=en_IN" >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>Care For Each</h4>
              </div>
            </div> */}

            {/* single portfolio */}
            {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image src="/img/portfolio/minto1.png" alt="Minto App" width={400} height={300} />
                  <div className="portfolio-content">
                    <p>
                      Minto is the Multi Vendor Online Food Delivery E-Commerce Applicaton for the Local Business People
                      who want to start there own Online E-Commerce Platform.
                    </p>
                    <br />
                    <b>Technology:</b>
                    <br />
                    Mobile : Android & iOS
                    <br />
                    API : PHP
                    <br />
                    Database : My SQL
                    <Link href="#">View Details</Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>Minto App</h4>
              </div>
            </div> */}

            {/* single portfolio */}
            {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 default-margin-mt-sm margin-top-lb-30 margin-top-sb-30 portfolio-headmove">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="/img/portfolio/dicci_gujarat.png"
                    alt="DICCI Gujarat"
                    width={400}
                    height={300}
                    style={{ height: "100%" }}
                  />
                  <div className="portfolio-content">
                    <p>
                      DICCI Gujarat is a Business Association for Gujarat Chapter. it is a perfect combination of Event
                      Management Tool and CRM
                    </p>
                    <br />
                    <b>Technology:</b>
                    <br />
                    Web : React JS
                    <br />
                    Database : My SQL
                    <br />
                    <Link href="http://www.diccigujarat.org/" >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-titile">
                <h4>DICCI Gujarat</h4>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="callto-action">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-7">
              <div className="callto-action-text">
                <h5>
                  Like what you see? <span>Let{"'s"} work</span>
                </h5>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5">
              <div className="callto-action-btn">
                <Link href="hiring.html">Hire us</Link>
              </div>
            </div>
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
