import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import "@/styles/all.css";

export default function SYT() {
  return (
    <>
      <Header />
      <div className="portfolio-detail-page">
        <div className="container">
          {/* Hero Section */}
          <div className="row align-items-center py-30">
            <div className="col-lg-4">
              <div className="about-content">
                <h1 className="section-title">🌐 What is Start Your Tour?</h1>
                <p className="about-text">
                  Start Your Tour is a modern, user-centric travel website that aims to simplify the process of discovering, planning, and booking tours across various destinations. It's designed to bridge the gap between travelers looking for authentic experiences and tour providers offering them.
                </p>
              </div>
            </div>
            
            {/* Mobile Screen Mockup */}
            <div className="col-lg-4">
              <div className="mobile-mockup mx-auto">
                <div className="mobile-screen">
                  <Image 
                    src="/img/syt-mobile-preview.jpg" 
                    alt="Start Your Tour Mobile Preview" 
                    width={300}
                    height={600}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="about-content">
                <h2 className="section-subtitle">✨ What Makes it Unique?</h2>
                <ul className="feature-list">
                  <li className="feature-item">
                    <h3>Focused on Tours Only</h3>
                    <p>Specializes in curated guided tours without mixing hotels and flights, ensuring relevant results.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="feature-card">
                <h3>Visually Clean & Intuitive</h3>
                <p>Built with React.js for a fast, interactive, and mobile-friendly experience that adapts to any device.</p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="feature-card">
                <h3>Personalized Recommendations</h3>
                <p>Smart suggestions based on travel style, from eco-adventures to cultural city walks.</p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="feature-card">
                <h3>Transparent Information</h3>
                <p>Detailed itineraries, inclusions, maps, and real reviews for informed decisions.</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="cta-box">
                <h2>Experience the Future of Travel Planning</h2>
                <Link href="http://startyourtour.com" className="btn btn-primary">
                  Visit Live Site
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}