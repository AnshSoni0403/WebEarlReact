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
                  <p>We are a trusted Game Development Company offering high-quality 2D/3D, mobile, desktop, and multiplayer games across various genres like puzzle games, brain-training mind games, fun casual games, educational games, strategy-based challenges, and more.</p>
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
                  <p>We craft immersive and high-performing mobile games for both iOS and Android platforms using cutting-edge cross-platform tools like Unity and Flutter, as well as native SDKs when required. Our mobile game development services span from hyper-casual games to complex genres like real-time multiplayer RPGs, puzzle games, action-based strategy games, and more. We focus on delivering addictive gameplay experiences, seamless user interfaces, and real-time performance optimization to ensure smooth gameplay on all devices.

</p><br/>
                  
                  {/* iOS Application Section */}
                  <div className="blog-post-heading">
                    <span className="publishe-date">Unity 3D Game Development
                    </span>
                  </div>
                  <p>Our expert Unity developers leverage the full potential of the Unity Game Engine to create visually rich, cross-platform games that run seamlessly on mobile, PC, web browsers, and gaming consoles. Unity is the perfect choice for building immersive 3D environments, interactive storytelling, physics-based simulations, and multiplayer online games. Whether it's a fast-paced shooter, puzzle adventure, or an open-world RPG, we ensure scalability, dynamic gameplay mechanics, and top-tier visual fidelity.

</p><br/>
                  
                  {/* Cross-Platform Section */}
                  <div className="blog-post-heading">
                    <span className="publishe-date">Educational & Simulation Games
                    </span>
                  </div>
                  <p>We design and develop highly engaging educational and simulation games tailored for eLearning, skill development, and training. These games are ideal for schools, universities, corporate training programs, and industrial simulations. With features like progress tracking, interactive assessments, and gamified content, our educational games enhance learning outcomes while keeping users motivated and entertained. We combine strong pedagogy with fun mechanics to make learning more engaging and effective.


                  </p><br/>

                  <div className="blog-post-heading">
                    <span className="publishe-date">Game Art & Animation

                    </span>
                  </div>
                  <p>Our creative art and animation team brings your game vision to life through eye-catching visuals and cinematic animations. We produce detailed 2D/3D character models, environments, props, icons, VFX, and seamless UI/UX design elements. Whether you need a stylized cartoon look or hyper-realistic graphics, our artists adapt to your aesthetic and brand identity. From concept art to in-game assets and promotional visuals, we ensure every frame captures attention and enhances the player’s emotional engagement.



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
