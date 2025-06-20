"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import '../styles/all.css';
import '../styles/blog.css';

const WebApplicationDevelopmentPage = () => {
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
      <div className="blog-hero-banner">
        <div className="blog-hero-banner-text">
          <h1>Know more about Web Application Development</h1>
          <p>Intuitive design is how we give the user new superpowers.</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="blog-body">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
              <div className="left-side">
                <div className="blog-post-heading">
                  <h1>Web Application Development</h1>
                  <span className="publishe-date">with WebEarl Technologies Pvt Ltd</span>
                </div>
                
                <div className="blog-body-content">
                  <p>Web Application development or website development is creating a collection of related web-pages and deploying it to an appropriate server to make it accessible on the WWW. With innovation and advancements in technologies, there are multiple languages, tools and solutions available today for developing a Web Application. Creating a website can be anything from a 15-min affair to many months depending on the complexity of its functions.</p>
                  
                  {/* Blog Image */}
                  <div className="blog-inner">
                    <Image 
                      src="/img/blog/web_development_1.jpg" 
                      alt="Web Application Development" 
                      width={800} 
                      height={450}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  
                  {/* Static Website Section */}
                  <div className="blog-post-heading">
                    <span className="publishe-date">Static WebSite</span>
                  </div>
                  <p>Our static web designing services initiates with considering the clients requirement, analyzing and designing the appropriate design which translates the business logic into the preferred application. A static website is quite suitable where updating the products or services is not required. Static web designs are perfect for downloading images, brochures etc. Static websites are easy to navigate. Our team will give you the best result satisfying your needs with the best design as approved by our clients. We have always worked and emphasized more upon our client's requirements and have always succeeded in satisfying them. This marks the success of <b>WebEarl Technologies</b> as we work beyond satisfaction. WebEarl Technologies also provides you basic <Link href="/digital-marketing">SEO Services</Link> along with the Static Development. These <Link href="/digital-marketing">SEO services</Link> will be able to mark your presence on the Internet.</p><br/>
                  
                  {/* Dynamic Website Section */}
                  <div className="blog-post-heading">
                    <span className="publishe-date">Dynamic WebSite</span>
                  </div>
                  <p>We all know the fact that nothing in the world is permanent as change. And, this is a fact proved by Dynamic Website Development where the content can be updated anywhere and anytime. Change is the basis of Dynamic Websites. Our firm works on various Dynamic Website Development In Ahmedabad projects for its various clients sincerely. We give the very first report to our clients if anything new comes in the field of Dynamic Website Development and update their websites as soon as they give their consent. The work related to the field of Dynamic Website Development is no minor nowadays and a time will come when it will reach the stage of inevitability in this era of technology. We assure our clients an up to date work of all the projects in the given time as they are relied on us. Dynamic Website Development through our firm will give your projects new horizons that other companies would want to reach.</p><br/>
                  
                  <p>Our team of Dynamic Website Development designs and develops the websites keeping in mind certain requirements of customers along with the given themes of websites. As, for our clients it is their customers who will view the Dynamically Developed Website. It is the opinion which they will form on observing the website. Our team builds and develops websites with a challenged spirit and hard-core professionalism. People most of the times judge various things just by glancing at them. They form different opinions by having just one look at certain person or thing. We are in this field of Dynamic Website Development since a long time and we held a long term experience working for different companies at national and at international levels.</p><br/>
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
                
                {/* Author Profile */}
                <div className="author-profile">
                  <h3>About Web Application Development</h3>
                  <div className="author-content">
                    <Image 
                      src="/img/blog/web_development_2.jpg" 
                      alt="Website Development" 
                      width={300} 
                      height={200}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <h4>WebSite Development</h4>
                    <p>In todays' world, it is a mandatory, unwritten rule to have a website which serves, at the most basic level, as an identity and virtual address of the business. This is mainly because customers are no longer local but Universal. Anybody & everybody who is online from any part of the world, or beyond for that matter, is a prospective customer. A Martian who is online is as much a potential customer as the business next door. With more & more computing devices added every day the world is set to have over a 100 billion network enabled devices by 2025 which will provide over 50 times the data being fetched currently.</p>
                  </div>
                </div>
                
                {/* Technologies Section */}
                <div className="main-category" style={{ marginTop: '30px' }}>
                  <h3>Technology</h3>
                  <div className="category-list">
                    <ul>
                      <li>HTML 5</li>
                      <li>CSS 3</li>
                      <li>Bootstrap</li>
                      <li>Python Flask</li>
                      <li>Django</li>
                      <li>Odoo</li>
                      <li>PHP</li>
                      <li>WordPress</li>
                      <li>Magento</li>
                      <li>Joomla</li>
                      <li>Drupal</li>
                      <li>ASP.Net(MVC) & NTT Framework</li>
                      <li>JAVA Spring Hibernate Struts</li>
                    </ul>
                  </div>
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

export default WebApplicationDevelopmentPage;
