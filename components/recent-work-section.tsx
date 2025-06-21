"use client";

import Link from "next/link";
import Image from "next/image";
import "../styles/all.css";

export default function RecentWorkSection() {
  return (
    <section>
      <div className="portfolio-area">
        <div className="container">
          <div className="row">
            {/* Heading */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="section-heading-2 portfolio-pattern">
                <h4>Case Study</h4>
                <h3>Our Recent Work</h3>
                <p>
                  We take pride in all of our work and are proud of what we do.
                  We view all of our websites as <Link href="/portfolio">ongoing projects</Link>,
                  evolving as your business changes and grows. Below is a sample
                  of some of <Link href="/portfolio">our projects.</Link>
                </p>
                <div className="p-pattern">
                  <Image src="/img/portfolio/p-pattern.png" alt="pattern" width={160} height={12} />
                </div>
              </div>
            </div>
            {/* View more button */}
            <div className="col-xl-6 col-lg-6 col-md-6 d-flex align-items-center justify-content-md-end mt-4 mt-md-0">
              <div className="portfolio-button-area">
                <div className="section-button">
                  <Link href="/portfolio">view more</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio items row */}
          <div className="row portfolio-item-slider">
            {/* Item 1 */}
            <div className="single-portfolio-item">
              <Image src="/img/portfolio/Energieagas1.png" alt="Energeia Solutions" width={400} height={300} />
              <div className="portfolio-item-content">
                <div className="item-icon">
                  <Link href="http://energeiasolutions.com/" target="_blank" aria-label="Energeia Solutions link">
                    <i className="fas fa-link" />
                  </Link>
                </div>
                <div className="item-text">
                  <h5>Energeia Solutions</h5>
                  <p>Urja Energy Solutions is a proud channel partner of Bharat Petroleum (BPCL) to supply LPG for Industrial / commercial applications</p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="single-portfolio-item">
              <Image src="/img/portfolio/Matrimonial.png" alt="Matrimonial App" width={400} height={300} />
              <div className="portfolio-item-content">
                <div className="item-icon">
                  <Link href="https://play.google.com/store/apps/details?id=com.saptavidhi&hl=en" target="_blank" aria-label="Matrimonial App link">
                    <i className="fas fa-link" />
                  </Link>
                </div>
                <div className="item-text">
                  <h5>Matrimonial App</h5>
                  <p>The main purpose of this application is to facilitate matchmaking business by applying the information in the field.</p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="single-portfolio-item">
              <Image src="/img/portfolio/Ecommorce_Poster.png" alt="Voila Ecommorce" width={400} height={300} />
              <div className="portfolio-item-content">
                <div className="item-icon">
                  <Link href="https://webearl.com/img/pdf/Voila_Ecommorce.pdf" target="_blank" aria-label="Voila Ecommorce link">
                    <i className="fas fa-link" />
                  </Link>
                </div>
                <div className="item-text">
                  <h5>Voila Ecommorce</h5>
                  <p>Onboarding screen shows categories; users can add goods to cart and buy.</p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="single-portfolio-item">
              <Image src="/img/syt-portfolio.png" alt="Start Your Tour" width={400} height={300} />
              <div className="portfolio-item-content">
                <div className="item-icon">
                  <Link href="http://startyourtour.com/" target="_blank" aria-label="Start Your Tour link">
                    <i className="fas fa-link" />
                  </Link>
                </div>
                <div className="item-text">
                  <h5>Start Your Tour</h5>
                  <p>AI-powered travel experiences with smart itineraries and real-time updates for seamless journeys.</p>
                </div>
              </div>
            </div>

            {/* Additional items (omitted for brevity) */}
          </div>
        </div>
      </div>
    </section>
  );
}
