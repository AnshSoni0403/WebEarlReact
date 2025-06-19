"use client"

import Image from "next/image"
import Link from "next/link"
import "../styles/all.css"

export default function PortfolioSection() {
  const portfolioItems = [
    {
      image: "/img/portfolio/Energieagas1.png",
      title: "Energeia Solutions",
      description:
        "Urja Energy Solutions is a proud channel partner of Bharat Petroleum (BPCL) to supply LPG for Industrial / commercial applications",
      link: "http://energeiasolutions.com/",
    },
    {
      image: "/img/portfolio/Matrimonial.png",
      title: "Matrimonial App",
      description:
        "The main purpose of this application is to facilitate matchmaking business by applying the information in the field.",
      link: "https://webearl.com/img/pdf/Matrimonial_App.pdf",
    },
    {
      image: "/img/portfolio/Ecommorce_Poster.png",
      title: "Voila Ecommorce",
      description:
        "On the shot you can see the onboarding screen, where users can choose the goods category. The screen also shows goods' cards, you can add them to your cart and buy it",
      link: "https://webearl.com/img/pdf/Voila_Ecommorce.pdf",
    },
    {
      image: "/img/portfolio/minto1.png",
      title: "Minto App",
      description:
        "Minto is the Multi Vendor Online Food Delivery E-Commerce Applicaton for the Local Business People who want to start there own Online E-Commerce Platform.",
      link: "#",
    },
    {
      image: "/img/portfolio/p2.png",
      title: "CareForEach",
      description:
        "Online Staff's Current Location & Route of Employees on Map is available, Staff Tour / Visit Entry in mobile",
      link: "https://play.google.com/store/apps/details?id=com.careforeach&hl=en",
    },
    {
      image: "/img/portfolio/p1.png",
      title: "NOWO CHAT",
      description:
        "NOWO CHAT is a platform to connect two unknown persons with a COMMON interest in one place where they can CHAT according to their NEEDS and requirements.",
      link: "https://play.google.com/store/apps/details?id=com.nowochat&hl=en_IN&gl=US",
    },
  ]

  return (
    <section>
      <div className="portfolio-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              {/* portfolio heading text */}
              <div className="section-heading-2 portfolio-pattern">
                <h4>Case Study</h4>
                <h3>Our Recent Work</h3>
                <p>
                  We take pride in all of our work and our proud at what we do. We view all of our websites as{" "}
                  <Link href="/portfolio">ongoing projects</Link>, evolving as your business changes and grows. Below is
                  a sample of some of <Link href="/portfolio">our projects.</Link>
                </p>
                <div className="p-pattern">
                  <Image src="/img/portfolio/p-pattern.png" alt="" width={100} height={100} />
                </div>
              </div>
            </div>
            {/* portfolio view more button */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="portfolio-button-area">
                <div className="section-button">
                  <Link href="/portfolio">view more</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row portfolio-item-slider">
            {portfolioItems.map((item, index) => (
              <div key={index} className="single-portfolio-item">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} width={400} height={300} />
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
