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

const GameDevelopmentPage = () => {
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
          backgroundImage: 'url(/img/game-banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="blog-hero-banner-text">
          <h1>Know more about Mobile Game Development</h1>
          <p>Every great game starts as a dream. We turn that dream into a playable reality.</p>
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
                    <button type="submit" className="blog-search-icon-small" style={{ background: 'none', border: 'none', position: 'absolute', right: 40, top: 70, cursor: 'pointer' }}>
                                          <FaSearch size={22} color="#bdbdbd" />
                                        </button>
                  </form>
                </div>
                
                {/* About Section */}
                <div className="author-profile">
                  <h3>About Mobile Game Development</h3>
                  <div className="author-content">
                    <Image 
                      src="/img/game-side.png" 
                      alt="Game Development" 
                      width={300} 
                      height={200}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <h4>Mobile Game Development</h4>
                    <p>Every game built carries the weight of cost, time, and vision. These must be measured against innovation, engagement, and scalability. At WebEarl Technologies, we bring your game ideas to life with precision, creativity, and cutting-edge technology. We specialize in custom game development services tailored to your audience, genre, and monetization strategy—helping you level up in the gaming industry.</p>
                  </div>
                </div>
                
                {/* Technologies Section */}
                <div className="main-category" style={{ marginTop: '30px' }}>
                  <h3>Technology</h3>
                  <div className="category-list">
                    <ul>
                    <li>Unity</li>
<li>Unreal Engine</li>
<li>Flutter</li>
<li>Godot Engine</li>
<li>Phaser</li>
<li>Cocos2d-x</li>
<li>Blender</li>
<li>Firebase & Node.js</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
              <div className="right-side">
                <div className="blog-post-heading">
                  <h1>Mobile Game Development</h1>
                  <span className="publishe-date">With WebEarl Technologies Pvt Ltd</span>
                </div>
                
                <div className="blog-body-content">
                  <p>We are a trusted Game Development Company offering high-quality 2D/3D, mobile, desktop, and multiplayer games. Our expert developers and designers create thrilling gameplay mechanics, realistic graphics, and immersive storytelling. Whether you're a startup, indie developer, or an enterprise brand, our team delivers scalable, high-performance games across platforms. Let WebEarl Technologies Pvt. Ltd. turn your game concept into a digital reality. We help you stay ahead of the competition with innovative, scalable, and unforgettable gaming experiences. Contact us now to schedule your free consultation and game development demo!</p>
                  <br/>
                  <p>Every game built carries the weight of cost, time, and vision. These must be measured against innovation, engagement, and scalability. At WebEarl Technologies, we bring your game ideas to life with precision, creativity, and cutting-edge technology. We specialize in custom game development services tailored to your audience, genre, and monetization strategy—helping you level up in the gaming industry.
                  </p>
                  
                  {/* Blog Image */}
                  <div className="blog-inner">
                    <Image 
                      src="/img/game.jpg" 
                      alt="Game Development" 
                      width={800} 
                      height={450}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  
                  {/* Android Application Section */}
                  <div className="blog-post-heading">
                    <span className="publishe-date">Mobile Game Development
                    </span>
                  </div>
                  <p>Our mobile game developers build engaging iOS and Android games using cross-platform tools and native SDKs. From casual games to complex RPGs and strategy games, we create addictive user experiences with real-time performance optimization.</p><br/>
                  
                  {/* iOS Application Section */}
                  <div className="blog-post-heading">
                    <span className="publishe-date">Unity 3D Game Development
                    </span>
                  </div>
                  <p>Our team specializes in Unity Game Engine to build cross-platform, high-quality games for mobile, desktop, web, and consoles. Unity is ideal for real-time multiplayer, 3D worlds, and interactive animations.</p><br/>
                  
                  {/* Cross-Platform Section */}
                  <div className="blog-post-heading">
                    <span className="publishe-date">Educational & Simulation Games
                    </span>
                  </div>
                  <p>Build interactive games for learning, training, and simulation purposes. Perfect for eLearning platforms, corporate training modules, and edutainment apps.
                  </p><br/>

                  <div className="blog-post-heading">
                    <span className="publishe-date">Game Art & Animation

                    </span>
                  </div>
                  <p>Our design team produces visually stunning 2D/3D art assets, animations, UI/UX, and VFX that bring your game world to life. We support both stylized and realistic art styles tailored to your brand.

                  </p><br/>
                  
                 
                  
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <CallToAction/>
      
      <Footer />
    </>
  );
};

export default GameDevelopmentPage;
