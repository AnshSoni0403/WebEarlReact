"use client"

import Image from "next/image"
import Link from "next/link"
import "../styles/all.css"

export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      title: "Energeia Solutions",
      image: "/img/portfolio/Energieagas1.png",
      link: "http://energeiasolutions.com/",
      description: "Urja Energy Solutions is a proud channel partner of Bharat Petroleum (BPCL) to supply LPG for Industrial / commercial applications"
    },
    {
      id: 2,
      title: "Matrimonial App",
      image: "/img/portfolio/Matrimonial.png",
      link: "https://play.google.com/store/apps/details?id=com.saptavidhi&hl=en",
      description: "The main purpose of this application is to facilitate matchmaking business by applying the information in the field."
    },
    {
      id: 3,
      title: "Voila Ecommorce",
      image: "/img/portfolio/Ecommorce_Poster.png",
      link: "https://webearl.com/img/pdf/Voila_Ecommorce.pdf",
      description: "On the shot you can see the onboarding screen, where users can choose the goods category. The screen also shows goods' cards, you can add them to your cart and buy it"
    },
    {
      id: 4,
      title: "Start Your Tour",
      image: "/img/syt-portfolio.png",
      link: "http://startyourtour.com/",
      description: "Start Your Tour provides AI-powered travel experiences with smart itineraries and real-time updates for seamless journeys."
    },
    {
      id: 5,
      title: "Icare",
      image: "/img/health-care-portfolio.png",
      link: "#",
      description: "iCare offers diagnostic report services with doorstep lab visits, allowing users to easily book appointments through the app."
    },
    {
      id: 6,
      title: "NOWO CHAT",
      image: "/img/portfolio/p1.png",
      link: "https://play.google.com/store/apps/details?id=com.nowochat&hl=en",
      description: "NOWO CHAT is a platform to connect two unknown persons with a COMMON interest in one place where they can CHAT according to their NEEDS and requirements."
    },
    {
      id: 7,
      title: "LeChalo",
      image: "/img/portfolio/p3.png",
      link: "https://play.google.com/store/apps/details?id=com.leChalo&hl=en",
      description: "Find a ride to travel from city to other as well as offer a ride to find a customer for traveling using only one application"
    },
    {
      id: 8,
      title: "Vivanza",
      image: "/img/portfolio/vivanza.jpg",
      link: "#",
      description: "Vivanza is the bridge between people, Medical Practitioners and the Patients and together we are a healthcare organization dedicated to improving the lives of people globally."
    },
    {
      id: 9,
      title: "Bright Spark",
      image: "/img/portfolio/p4.png",
      link: "http://www.brightspark.co.in/",
      description: "Bright Spark work with universities world wide to provide aspiring students best opportunities to acquire admission and process visa applications."
    },
    {
      id: 10,
      title: "Betting App",
      image: "/img/betting-portfolio.png",
      link: "https://webearl.com/img/pdf/Batting_App_Mockup.pdf",
      description: "Batting App lets cricket enthusiasts create teams and compete in contests, all from their mobile device."
    }
  ]

  return (
    <section>
      <div className="portfolio-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="section-heading-2 portfolio-pattern">
                <h4>Case Study</h4>
                <h3>Our Recent Work</h3>
                <p>
                  We take pride in all of our work and our proud at what we do.
                  We view all of our websites as
                  <Link href="/portfolio"> ongoing projects</Link>, evolving as
                  your business changes and grows. Below is a sample of some of
                  <Link href="/portfolio"> our projects.</Link>
                </p>
                <div className="p-pattern">
                  <Image src="/img/portfolio/p-pattern.png" alt="" width={100} height={50} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="portfolio-button-area">
                <div className="section-button">
                  <Link href="/portfolio">view more</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row portfolio-item-slider">
            {portfolioItems.map((item) => (
              <div key={item.id} className="col-lg-4 col-sm-6">
                <div className="single-portfolio-item">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    width={400} 
                    height={300}
                    className="img-fluid"
                  />
                  <div className="portfolio-item-content">
                    <div className="item-icon">
                      <Link href={item.link} target="_blank">
                        <i className="fas fa-link"></i>
                      </Link>
                    </div>
                    <div className="item-text">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
