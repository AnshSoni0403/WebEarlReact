import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';

const DigitalMarketingPage = () => {
  return (
    <>
      <Header />
      
      {/* Hero Banner */}
      <div className="blog-hero-banner" style={{
        backgroundImage: 'url(/img/blog/digital_marketing_5.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        position: 'relative'
      }}>
        <div className="blog-hero-banner-text">
          <h1>Know more about Digital Marketing</h1>
          <p>Marketing is no longer about the stuff that you make, but about the stories you tell.</p>
        </div>
      </div>
      
      <div className="blog-body">
        <div className="container">
          <div className="row">
            {/* Left Sidebar */}
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="left-side-2">
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
                    <div style={{ position: 'relative', width: '100%', height: '200px', borderRadius: '8px', overflow: 'hidden' }}>
                      <Image 
                        src="/img/blog/digital_marketing_3.jpg" 
                        alt="Social Media Advertising" 
                        fill
                        sizes="(max-width: 400px) 100vw, 400px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h4>Social Media Advertising</h4>
                    <p>Social media advertising services have become an integral part of social strategy for businesses across industries. As algorithms change, businesses can diversify strategies to reach the right people at just the right time with social advertising.</p><br />
                    <p>Each social advertising platform has its unique way of reaching people and each has its own advantages. Businesses in almost any industry can benefit from the use of social advertising to engage, inform, and convert their specific audience.</p><br />
                    <p>Discover how our agency and social media ad management services can grow your online presence, increase your sales, and improve your customer loyalty by contacting us online today. Or, reach us by phone to chat one-on-one.</p>
                  </div>
                </div>
                
                {/* Services */}
                <div className="main-category">
                  <h3>Services</h3>
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
              <div className="right-side">
                <div className="blog-post-heading">
                  <h1>Digital Marketing</h1>
                  <span className="publishe-date">With WebEarl Technologies Pvt Ltd</span>
                </div>
                
                <div className="blog-body-content">
                  <p><b>Search Engine Optimization (SEO)</b><br />
                  Search Engine Optimization is one of the most important aspects of online marketing. It is the process of optimizing your website to rank higher in search engine results pages (SERPs) for relevant keywords and phrases. SEO is a long-term strategy that requires ongoing effort, but the benefits are well worth it. By optimizing your website for search engines, you can increase your visibility, drive more traffic to your site, and generate more leads and sales.</p><br />

                  <p>At WebEarl, we offer comprehensive SEO services that are designed to help your business rank higher in search engine results pages. Our team of experts will work with you to develop a customized SEO strategy that is tailored to your business goals and objectives. We use a variety of techniques to improve your website's visibility, including keyword research, on-page optimization, link building, and content creation.</p><br />

                  <p>Our SEO services are designed to help your business achieve long-term success online. We don't believe in quick fixes or black hat techniques that can harm your website's reputation. Instead, we focus on ethical, white-hat SEO strategies that are designed to deliver sustainable results over time.</p><br />

                  <p>If you're looking to improve your website's visibility and drive more traffic to your site, contact us today to learn more about our SEO services.</p><br />

                  <p><b>Pay-Per-Click (PPC) Advertising</b><br />
                  Pay-per-click (PPC) advertising is a form of online advertising where advertisers pay each time a user clicks on one of their ads. PPC advertising is a great way to drive targeted traffic to your website and generate leads and sales.</p><br />

                  <p>At WebEarl, we offer comprehensive PPC advertising services that are designed to help your business achieve its marketing goals. Our team of experts will work with you to develop a customized PPC strategy that is tailored to your business needs and budget.</p><br />

                  <p>Our PPC services include keyword research, ad copywriting, landing page optimization, and campaign management. We use a variety of techniques to ensure that your ads are seen by the right people at the right time, including audience targeting, ad scheduling, and bid management.</p><br />

                  <p>If you're looking to drive more traffic to your website and generate more leads and sales, contact us today to learn more about our PPC advertising services.</p><br />

                  <p><b>Social Media Marketing</b><br />
                  Social media marketing is the process of using social media platforms to promote your business and engage with your target audience. Social media marketing is a great way to build brand awareness, drive traffic to your website, and generate leads and sales.</p><br />

                  <p>At WebEarl, we offer comprehensive social media marketing services that are designed to help your business achieve its marketing goals. Our team of experts will work with you to develop a customized social media strategy that is tailored to your business needs and objectives.</p><br />

                  <p>Our social media marketing services include social media management, content creation, community management, and paid social media advertising. We use a variety of techniques to ensure that your social media presence is engaging, informative, and effective at driving results.</p><br />

                  <p>If you're looking to build your brand on social media and connect with your target audience, contact us today to learn more about our social media marketing services.</p><br />

                  <p><b>Content Marketing</b><br />
                  Content marketing is the process of creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience. Content marketing is a great way to build brand awareness, establish your business as an industry leader, and generate leads and sales.</p><br />

                  <p>At WebEarl, we offer comprehensive content marketing services that are designed to help your business achieve its marketing goals. Our team of experts will work with you to develop a customized content marketing strategy that is tailored to your business needs and objectives.</p><br />

                  <p>Our content marketing services include content strategy, content creation, content distribution, and content promotion. We use a variety of techniques to ensure that your content is engaging, informative, and effective at driving results.</p><br />

                  <p>If you're looking to build your brand and establish your business as an industry leader, contact us today to learn more about our content marketing services.</p><br />

                  <p><b>Email Marketing</b><br />
                  Email marketing is the process of sending commercial messages to a group of people via email. Email marketing is a great way to build relationships with your customers, promote your products or services, and generate leads and sales.</p><br />

                  <p>At WebEarl, we offer comprehensive email marketing services that are designed to help your business achieve its marketing goals. Our team of experts will work with you to develop a customized email marketing strategy that is tailored to your business needs and objectives.</p><br />

                  <p>Our email marketing services include email list building, email template design, email copywriting, and email campaign management. We use a variety of techniques to ensure that your emails are engaging, informative, and effective at driving results.</p><br />

                  <p>If you're looking to build relationships with your customers and generate more leads and sales, contact us today to learn more about our email marketing services.</p><br />

                  <p><b>Conversion Rate Optimization (CRO)</b><br />
                  Conversion rate optimization (CRO) is the process of increasing the percentage of website visitors who take a desired action, such as making a purchase or filling out a contact form. CRO is a great way to improve the effectiveness of your website and generate more leads and sales.</p><br />

                  <p>At WebEarl, we offer comprehensive CRO services that are designed to help your business achieve its marketing goals. Our team of experts will work with you to develop a customized CRO strategy that is tailored to your business needs and objectives.</p><br />

                  <p>Our CRO services include website analysis, A/B testing, landing page optimization, and user experience (UX) design. We use a variety of techniques to ensure that your website is optimized for conversions and effective at driving results.</p><br />

                  <p>If you're looking to improve the effectiveness of your website and generate more leads and sales, contact us today to learn more about our CRO services.</p><br />

                  <p><b>Web Analytics</b><br />
                  Web analytics is the process of analyzing the behavior of visitors to a website. Web analytics is a great way to gain insights into how users interact with your website and identify opportunities for improvement.</p><br />

                  <p>At WebEarl, we offer comprehensive web analytics services that are designed to help your business achieve its marketing goals. Our team of experts will work with you to develop a customized web analytics strategy that is tailored to your business needs and objectives.</p><br />

                  <p>Our web analytics services include website tracking, data analysis, and reporting. We use a variety of techniques to ensure that you have the insights you need to make informed decisions about your website and marketing efforts.</p><br />

                  <p>If you're looking to gain insights into how users interact with your website and identify opportunities for improvement, contact us today to learn more about our web analytics services.</p><br />

                  <p><b>PPC Management Services</b><br />
                  WebEarl can deliver a custom PPC campaign to help you increase both conversions and revenue for your company with our PPC management services.</p><br />

                  <p><b>Content Marketing Services</b><br />
                  Content marketing is a strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action.</p>
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
