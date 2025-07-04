'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight, FaLink, FaPause, FaPlay } from 'react-icons/fa';
import "../styles/all.css";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  technologies?: string;
  image: string;
  detailsLink: string;
  target: string;
}

const PortfolioCarousel = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Start Your Tour',
      image: '/img/syt-portfolio.png',
      description: 'Discover smarter, personalized travel with transparent listings and tailored experiences for every kind of explorer.',
      detailsLink: '/portfolio/syt',
      target: '_blank'
    },
    {
      id: 2,
      title: 'Saptavidhi Vendor',
      image: '/img/saptavidhi-vendor-portfolio.png',
      description: 'SaptaVidhi is a culturally rooted matchmaking platform that blends traditional values with modern technology to help individuals find genuine and lasting relationships.',
      detailsLink: '/portfolio/saptavidhi',
      target: '_blank'
    },
    {
      id: 3,
      title: 'iCare Health',
      image: '/img/health-care-portfolio.png',
      description: 'iCare offers diagnostic report services with doorstep lab visits, allowing users to easily book appointments through the app.',
      detailsLink: '/icare',
      target: '_blank'
    },
    {
      id: 4,
      title: 'CricGem',
      image: '/img/betting-portfolio.png',
      description: 'CricGem is a skill-based fantasy cricket app designed for fans to play, compete, and enjoy the game more deeply.',
      detailsLink: '/portfolio/battingapp',
      target: '_blank'
    },
    {
      id: 5,
      title: 'WayOut',
      image: '/img/portfolio/Way out.png',
      description: 'A zombie survival game set in a locked-down college where you fight your way floor-by-floor to escape the walking dead.',
      detailsLink: '/portfolio/wayout',
      target: '_blank'
    },
    {
      id: 6,
      title: 'MarkMe',
      image: '/img/portfolio/MarkMe.png',
      description: 'Smart, effortless attendance tracking for workplaces, campuses & more.',
      detailsLink: '/portfolio/markme',
      target: '_blank'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const itemsPerPage = 4;
  const autoPlayRef = useRef<NodeJS.Timeout>();

  // Auto play functionality
  useEffect(() => {
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => 
          prevIndex >= portfolioItems.length - itemsPerPage ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPlaying, portfolioItems.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex >= portfolioItems.length - itemsPerPage ? 0 : prevIndex + 1
    );
    // Reset autoplay timer on manual navigation
    if (isPlaying && autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => 
          prevIndex >= portfolioItems.length - itemsPerPage ? 0 : prevIndex + 1
        );
      }, 5000);
    }
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex <= 0 ? portfolioItems.length - itemsPerPage : prevIndex - 1
    );
    // Reset autoplay timer on manual navigation
    if (isPlaying && autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => 
          prevIndex >= portfolioItems.length - itemsPerPage ? 0 : prevIndex + 1
        );
      }, 5000);
    }
  };

  // Removed duplicate function declarations

  const visibleItems = portfolioItems.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="portfolio-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="section-heading-2 portfolio-pattern">
              <h4>Case Study</h4>
              <h3>Our Recent Work</h3>
              <p>
                  We take pride in all of our work and our proud at what we do.
                  We view all of our websites as
                  <a href="/portfolio"> ongoing projects</a>, evolving as
                  your business changes and grows. Below is a sample of some of
                  <a href="/portfolio"> our projects.</a>
                </p>
                <div className="p-pattern">
                  <img src="img/portfolio/p-pattern.png" alt="" />
                </div>
            </div>
          </div>
         
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="portfolio-button-area">
                <div className="section-button">
                  <a href="/portfolio">View more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row portfolio-item-slider">
          
        </div>
        
        
        <div className="row portfolio-item-slider">
          <div className="col-12 position-relative">
            <div className="carousel-controls">
              <button 
                className="carousel-control carousel-control-prev" 
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <FaChevronLeft />
              </button>
              
              {/* <button 
                className="carousel-control play-pause-btn" 
                onClick={togglePlayPause}
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button> */}
              
              <button 
                className="carousel-control carousel-control-next" 
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <FaChevronRight />
              </button>
            </div>
            
            <div className="row portfolio-items-container">
              {visibleItems.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-portfolio-item">
                    <div className="portfolio-image">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        width={400} 
                        height={350}
                        className="img-fluid"
                      />
                      <div className="portfolio-item-content">
                        <div className="item-icon">
                          <Link href={item.detailsLink} target={item.target || '_self'}>
                            <FaLink />
                          </Link>
                        </div>
                        <div className="item-text">
                          <h5>{item.title}</h5>
                          <p className="item-description">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .portfolio-area {
          padding: 100px 0;
          background: #linear-gradient(to top, #FDFFFD, #F5FFF5, rgba(202, 245, 202, 0.3));;
          position: relative;
          overflow: hidden;
        }
        
        .single-portfolio-item {
          margin-bottom: 30px;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          background: #fff;
          height: 90%;
          display: flex;
          flex-direction: column;
        }
        
        .single-portfolio-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        
        .portfolio-image {
          position: relative;
          overflow: hidden;
          height: 400px;
          flex: 1;
        }
        
        .portfolio-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
        }
        
        .single-portfolio-item:hover .portfolio-image img {
          transform: scale(1.1);
        }
        
        .portfolio-item-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          opacity: 0;
          transition: all 0.3s ease;
          padding: 25px;
          text-align: center;
          overflow-y: auto;
        }
        
        .single-portfolio-item:hover .portfolio-item-content {
          opacity: 1;
        }
        
        .item-icon {
          position: absolute;
          top: 20%;
          left: 40%;
          transform: translate(-50%, -50%);
          z-index: 2;
          opacity: 0;
          transition: all 0.3s ease;
          pointer-events: none;
        }
        
        .portfolio-item-content:hover .item-icon {
          opacity: 1;
          pointer-events: auto;
        }
        
        .item-icon a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          line-height: 50px;
          background:  #4a6cf7;
          color: #fff;
          border-radius: 50%;
          font-size: 18px;
          transition: all 0.3s ease;
          text-decoration: none;
          box-shadow: 0 4px 10px image.png(255, 255, 255, 0.2);
        }
        
        .item-icon a:hover {
          background: #fff;
          color: #4a6cf7;
          transform: rotate(360deg);
        }
        
        .item-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          width: 100%;
          margin-top: auto;
        }
        
        .item-text h5 {
          color: rgba(0, 0, 0, 0.9);
          font-size: 20px;
          margin-bottom: 15px;
          font-weight: 600;
        }
        
        .item-text p {
          color: rgba(0, 0, 0, 0.9);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        
        .technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-top: 15px;
        }
        
        .tech-tag {
          background: rgba(74, 108, 247, 0.2);
          color: #fff;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 12px;
          white-space: nowrap;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .carousel-controls {
           position: absolute;
           top: -70px;
           right: 0;
           display: flex;
          gap: 10px;
           z-index: 10;
         }
        
        .carousel-control {
           width: 45px;
           height: 45px;
           line-height: 45px;
           text-align: center;
           background: linear-gradient(238.45deg, #42d2ff 3.32%, #49e513 98.6%);;
           color: #fff;
           border-radius: 50%;
           border: none;
           font-size: 18px;
           cursor: pointer;
           transition: all 0.3s ease;
           display: inline-flex;
           align-items: center;
           justify-content: center;
         }

         /* override Bootstrap carousel absolute styles */
         .carousel-control-prev,
         .carousel-control-next {
           position: static !important; /* stay inside flex row */
           width: 45px !important; /* reset width from 15% */
           height: 45px !important;
         }

         /* fallback spacing in case gap is not honoured */
        //  .carousel-control + .carousel-control {
        //    margin-left: 55px;
        //  }

         .carousel-control:hover {
          background: #333;
          transform: scale(1.1);
        }
        
        .play-pause-btn {
          background: #333;
        }
        
        .play-pause-btn:hover {
          background: #4a6cf7;
        }
        
        .portfolio-items-container {
          padding: 20px 0;
          transition: transform 0.5s ease;
        }
        
        /* Animation for auto-sliding */
        @keyframes slideIn {
          from { opacity: 0.5; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .portfolio-item-slider .row > div {
          animation: slideIn 0.5s ease forwards;
        }

        .carousel-control carousel-control-prev{
        border: solid 2px #75dded;
        background: linear-gradient(238.45deg, #42d2ff 3.32%, #49e513 98.6%);
        }
        
        @media (max-width: 1200px) {
          .portfolio-image {
            height: 380px;
          }
        }
        
        @media (max-width: 991px) {
          .portfolio-area {
            padding: 70px 0;
          }
          
          .portfolio-image {
            height: 350px;
          }
          
          .carousel-control {
            width: 40px;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
          }
          
          .item-text h5 {
            font-size: 18px;
          }
          
          .item-text p {
            font-size: 13px;
          }
        }
        
        @media (max-width: 767px) {
          .portfolio-area {
            padding: 50px 0;
          }
          
          .portfolio-image {
            height: 400px;
          }
          
          .carousel-controls {
            top: -60px;
            right: 15px;
          }
          
          .carousel-control {
            width: 36px;
            height: 36px;
            line-height: 36px;
            font-size: 14px;
          }
          
          .portfolio-item-content {
            padding: 20px 15px;
          }
        }
        
        @media (max-width: 575px) {
          .portfolio-image {
            height: 350px;
          }
          
          .portfolio-item-content {
            padding: 15px;
          }
          
          .item-text h5 {
            font-size: 18px;
            margin-bottom: 10px;
          }
          
          .item-text p {
            font-size: 13px;
            margin-bottom: 12px;
          }
          
          .tech-tag {
            padding: 3px 8px;
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioCarousel;
