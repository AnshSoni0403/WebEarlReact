"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import '../styles/all.css';
import '../styles/blog.css';

const DigitalMarketingPage = () => {
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
          backgroundImage: 'url(/img/blog/digital_marketing_5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="blog-hero-banner-text">
          <h1>Know more about Digital Marketing</h1>
          <p>Grow your business with our comprehensive digital marketing solutions</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="blog-body">
        <div className="container">
          <div className="row">
            {/* Left Sidebar - Moved from Right */}
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
                  <h3>About Digital Marketing</h3>
                  <div className="author-content">
                    <Image 
                      src="/img/blog/digital_marketing_3.jpg" 
                      alt="Digital Marketing" 
                      width={300} 
                      height={200}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <h4>Social Media Advertising</h4>
                    <p>Social media advertising services have become an integral part of social strategy for businesses across industries. As algorithms change, businesses can diversify strategies to reach the right people at just the right time with social advertising.</p><br/>
                    <p>Each social advertising platform has its unique way of reaching people and each has its own advantages. Businesses in almost any industry can benefit from the use of social advertising to engage, inform, and convert their specific audience.</p><br/>
                    <p>Discover how our agency and social media ad management services can grow your online presence, increase your sales, and improve your customer loyalty by contacting us online today. Or, reach us by phone to chat one-on-one.</p>

                  </div>
                </div>
                
                {/* Services */}
                <div className="main-category" style={{ marginTop: '30px' }}>
                  <h3>Our Services</h3>
                  <div className="category-list">
                  <ul>
                    <li>Search Engine Optimization</li>
                    <li>Website Analytics</li>
                    <li>Affiliate Marketing</li>
                    <li>Organic Social Media</li>
                    <li>Paid Social Media</li>
                    <li>Email Marketing</li>
                    <li>Display Retargeting</li>
                    <li>Programmatic Advertising</li>
                    <li>Website Testing</li>
                    <li>Video Hosting</li>
                    <li>Content Creation</li>
                  </ul>
                  </div>
                  </div>

            {/* Tools */}
            <div className="main-category" style={{ marginTop: '30px' }}>
                  <h3>Tools</h3>
                  <div className="category-list">
                  <ul>
                  <li>Hubspot</li>
                  <li>Ahrefs</li>
                  <li>Proof</li>
                  <li>Survey Anyplace</li>
                  <li>Yoast</li>
                  <li>Slack</li>
                  <li>Trello</li>
                  <li>Canva Business</li>
                  <li>Google Adwords</li>
                  <li>Google Analytics</li>
                  <li>MailChimp</li>
                  <li>Asana</li>
                  <li>BuzzSumo</li>
                  <li>MeetEdgar</li>
                  <li>Buffer</li>
                  <li>Hootsuite</li>
                  </ul>

              
                  </div>
                </div>
              </div>
            </div>

            
            {/* Right Content - Moved from Left */}
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
              <div className="left-side">
                <div className="blog-post-heading">
                  <h1>Digital Marketing</h1>
                  <span className="publishe-date">With WebEarl Technologies Pvt Ltd</span>
                </div>
                
                <div className="blog-body-content">
                  
                  <p>With digital marketing, your business can expand into new areas, hire additional team members, and achieve tremendous accomplishments in your industry.</p><br/>
                  <p>Our performance-driven digital marketing services help your company accomplish its toughest goals, from improving conversions to growing brand awareness. Whether you’re searching for an Internet marketing company to improve your ranking in search results, redesign your website for a marketing overhaul, or revamp your content marketing strategy, our Experience team and customized plans are the perfect fit.</p><br/>

                  <p>With our team on your company’s side, we can help you:</p>
                  <ul style={{ listStyleType: 'disc', marginLeft: '20px', paddingLeft: '20px' }}>
                    <li>Drive more leads</li>
                    <li>Increase your reach</li>
                    <li>Improve your website experience</li>
                    <li>Engage your target audience</li>
                    <li>Connect with your clients</li>
                  </ul>
                  <p><b>And more!</b></p>
                  
                  {/* Blog Image */}
                  <div className="blog-inner">
                    <Image 
                      src="/img/blog/digital_marketing_4.jpg" 
                      alt="Digital Marketing" 
                      width={800} 
                      height={450}
                      className="img-fluid"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '30px' }}>
                    <p><b>Search Engine Optimization (SEO)</b></p>
                    <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
                      If you're looking for serious business growth, SEO, or search engine optimization is the strategy for you. Why does it work? Simple! It targets the users that are most likely to convert on your website, and takes them there.
                    </p>
                    <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
                      A custom SEO campaign with <b>WebEarl</b> targets on-page and off-page SEO, which includes things like keyword research and content implementation, to help your most valuable audience find you online.
                    </p>
                    <p style={{ marginBottom: '30px', lineHeight: '1.6' }}>
                      Are you ready to start optimizing your site for organic search? Contact us online to chat with an experienced strategist from our SEO team about not only improving your company's search engine rankings but also earning more revenue from them.
                    </p>
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <p><b>Email Marketing Services</b></p>
                    <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
                      Generate & Close<b> More Leads</b> with <b>Targeted Campaigns</b> from a Top Email Marketing Company. With an average 4,400% return on investment (ROI), <b>email marketing</b> is an affordable and highly effective way to generate and close more leads.
                    </p>
                    <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
                      In today's online-all-the-time world, consumers are connected to digital technology 24/7. With all the noise, it can be hard for you to stand out above your competitors. Opt-in email marketing is one of the best ways to stay in front of prospects and existing customers—92% of US adults use email, and 70% on average have used a <b>coupon </b>or <b>discount </b>from a marketing email in the past seven days.
                    </p>
                    <p style={{ marginBottom: '30px', lineHeight: '1.6' }}>
                      When done right, email marketing campaigns are simple, efficient, cost-effective, and read by relevant eyes. Opt-in email marketing, drip email marketing, and marketing automation are <b>low-cost </b>ways to increase referrals, up-sells, leads, and booked jobs (sales)!
                    </p>
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <p><b>PPC - Pay-Per-Click</b></p>
                    <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
                      PPC, or pay-per-click advertising, is one of the best ways to target your most <b>qualified audience.</b> It allows you to reach them where they're already looking, and gain a leg up against competitors.
                    </p>
                    <p style={{ marginBottom: '30px', lineHeight: '1.6' }}>
                      WebEarl can deliver a custom PPC campaign to help you increase both conversions and revenue for your company with our PPC management services.
                    </p>
                  </div>

                  <div>
                    <p><b>Content Marketing Services</b></p>
                    <p style={{ marginBottom: '15px', lineHeight: '1.6' }}><b>
                      Tell your story & attract more customers with sales-driving content marketing strategies.</b> Traditional advertising and marketing campaigns don't produce the results they once did. Today's consumer has a library of information at their fingertips—easily accessible from their laptop or smartphone.
                    </p>
                    <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
                      The future of marketing is creating content that is genuinely valuable to your prospects. You want to create content that helps them make better decisions and that establishes your company as THE authority in the process. Do it right and you'll find your website magically appearing on the first page of Google for relevant <b>keyword searches.</b>
                    </p>
                    <p style={{ lineHeight: '1.6' }}>
                      Your prospects will market and build your business for you by sharing your content with others. Content marketing is arguably the most cost-effective way to grow your business and build your brand.
                    </p>
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

export default DigitalMarketingPage;
