"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import '../styles/all.css';
import '../styles/blog.css';
import CallToAction from "../call-to-action";

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
          backgroundImage: 'url(/img/blog/prototype_2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="blog-hero-banner-text">
          <h1>Know more about Prototype & Wireframe Development</h1>
          <p>Design is not just what is looks and feel like. Design is how it Works.</p>
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
                  <p><b>What Is A Prototype?</b><br />
                  The Prototype is close to the High-Fidelity design. Be different with the Wireframe, The Prototype is dynamic and interactive, some High-Fidelity prototyping looks almost like the final product. It not only has the meticulous visual design but also provides a complete user experience for the testers by simulating the real product interface and functional interaction.</p><br />
                  
                  <p><b>Why Is The Prototype Important?</b><br />
                  The interactive prototypes are often used for user testing before the product development. The early prototyping test can save a huge amount of time and development costs. An annotated, team-friendly prototyping is more conducive to communication between designers and developers. That eliminates the cumbersome steps of file exchange within the designers and developers. For developers, they can push forward the product development more smoothly based on the final prototype.</p>
                  
                  {/* Blog Image */}
                  <div className="blog-inner">
                    <Image 
                      src="/img/blog/prototype_1.jpg" 
                      alt="Prototype Development" 
                      width={800} 
                      height={450}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  
                  <p><b>Why Is Wireframe Important?</b><br />
                  The Wireframe specifies the details of the whole project at the initial stage as the project description. Because it is simple and fast to draw, the wireframe is often used for informal occasions, such as internal communication. Thus, it cannot be used as the user testing material.</p><br />
                  
                  <p><b>What Is A Wireframe?</b><br />
                  The Wireframe is the skeleton of the product. It is a static low-fidelity representation of the product, which is usually used in the early stage of the product design process. The wireframe can help the team to focus on the structure and layout of the product, rather than the visual design. It is a great tool for communication between designers, developers, and stakeholders.</p><br />
                  
                  
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
                  <h3>about Prototype & Wireframe Development</h3>
                  <div className="author-content">
                    <Image 
                      src="/img/blog/prototype_3.jpg" 
                      alt="Prototype Development" 
                      width={300} 
                      height={200}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <h4>Prototype & Wireframe Development</h4>
                  </div>
                </div>
                
                {/* Tools */}
                <div className="main-category">
                  <h3>Tools</h3>
                  <div className="category-list">
                    <ul>
                      <li>Miro</li>
                      <li>Justinmind</li>
                      <li>Wireframe.cc</li>
                      <li>Adobe Xd</li>
                      <li>UXPin</li>
                      <li>Fluid UI</li>
                      <li>Visio</li>
                      <li>InDesign CC</li>
                      <li>Photoshop CC</li>
                      <li>Protoshare</li>
                      <li>Penultimate</li>
                      <li>OmniGraffle</li>
                      <li>Gliffy</li>
                      <li>MockFlow</li>
                      <li>Moqups</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </>
  );
};

export default PrototypeDevelopmentPage;
