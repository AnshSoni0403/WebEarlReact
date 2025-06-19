"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../header';
import Footer from '../footer';
'../styles/blog.css';

const BlogPage = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: 'Researchers Build Framework To Avoid Machine Learning\'s "Undesirable Outcomes"',
      image: '/img/blog/1.jpg',
      date: '08 jun',
      excerpt: 'Researchers at Stanford and the University of Massachusetts Amherst have introduced a framework for designing machine learning (ML) algorithms that make it easier for potential users to specify safety and fairness constraints. Details of the framework were recently published in Science (DOI: 10.1126/science.aag3311).',
      author: 'By Benjamin Ross, Senior Editor, AI Trends',
      link: 'https://www.aitrends.com/ai-research/researchers-build-framework-to-avoid-machine-learnings-undesirable-outcomes/'
    },
    {
      id: 2,
      title: 'Top 10 Factors to Consider Before Developing a Business Mobile App',
      image: '/img/blog/3.png',
      date: '09 aug',
      excerpt: 'Mobile Applications have become a need of the hour for every small- and large-scale business to increase their productivity and brand awareness throughout the world. Mobile applications play an important role in helping different business sectors to reach the heights of success and achieve their goals.',
      author: 'Krunal Vyas',
      link: 'https://www.indiaappdeveloper.com/blog/top-10-factors-to-consider-before-developing-a-business-mobile-app/'
    },
    {
      id: 3,
      title: 'Mobile Website vs. Mobile Application – Which is Best?',
      image: '/img/blog/2.png',
      date: '12 jul',
      excerpt: 'It has been observed that about half of the web traffic worldwide comes from the mobile devices.Many organizations are transforming themselves towards being digital to accelerate the growth of their business.But the question that arises almost in everyone\'s mind is "What is better? mobile app or website", to serve the people across the globe with highly effective solutions."',
      author: 'Krunal Vyas',
      link: 'https://www.indiaappdeveloper.com/blog/mobile-website-vs-mobile-application-which-is-best/'
    },
    // Add more blog posts as needed
  ];

  return (
    <>
      <Head>
        <title>Blog - WebEarl</title>
        <meta name="description" content="Read our latest blog posts about technology, development, and industry insights" />
      </Head>

      <Header />

      {/* Blog Hero Section */}
      <div className="blog-home-page">
        <div className="blog-hero-home">
          <div className="blog-home-text">
            <h1>read our stories</h1>
            <p>All the things We love is what my business is all about.</p>
          </div>
        </div>
        
        <div className="container">
          <div className="main-blog-list">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-heading-3" data-aos="fade-up">
                  <h4>read blogs</h4>
                  <h3>blog list page</h3>
                </div>
              </div>
            </div>
            
            <div className="row">
              {blogPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="col-xl-4 col-lg-4 col-md-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={post.id * 100}
                >
                  <div className="home-single-blog">
                    <div className="s-blog-image">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        width={400}
                        height={250}
                        className="img-fluid"
                        style={{ width: '100%', height: 'auto' }}
                      />
                      <div className="blog-post-date">
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="s-blog-content">
                      <h4>{post.title}</h4>
                      <p>{post.excerpt}</p>
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        {post.author}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogPage;
