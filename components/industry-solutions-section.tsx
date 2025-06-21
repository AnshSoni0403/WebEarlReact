"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/all.css";

interface Industry {
  key: string;
  name: string;
  description: string;
  image: string;
}

const industries: Industry[] = [
  {
    key: "travel",
    name: "Travel",
    description:
      "Webearl Technologies has extensive experience delivering innovative IT solutions for the travel industry. We specialize in building custom travel management systems, online booking platforms, and mobile apps designed to streamline operations and enhance customer experiences. With features like real-time travel updates, secure payment integration, and personalized itineraries, our solutions help travel agencies, tour operators, and online travel agencies (OTAs) stay competitive. Our expertise ensures that your business can offer seamless travel services and a user-friendly experience across all platforms.",
    image: "/img/industries/travel.png",
  },
  {
    key: "healthcare",
    name: "Health Care",
    description:
      "We build secure, compliant healthcare apps and platforms—tele-medicine, EHR, lab management, and patient-centric mobile solutions—helping providers give better, faster care.",
    image: "/img/industries/healthcare.png",
  },
  {
    key: "retail",
    name: "Retail & E-Commerce",
    description:
      "From multi-vendor marketplaces to POS-integrated mobile apps, our retail solutions keep inventory moving and customers engaged across every channel.",
    image: "/img/industries/retail.png",
  },
  {
    key: "energy",
    name: "Energy",
    description:
      "We craft web & mobile tools for energy businesses—monitoring dashboards, IoT data visualisation, and customer portals—to optimise efficiency and transparency.",
    image: "/img/industries/energy.png",
  },
  {
    key: "fantasy",
    name: "Fantasy Game",
    description:
      "Our gaming team creates engaging fantasy-sports platforms with real-time leaderboards, secure payments, and social features that keep fans hooked.",
    image: "/img/industries/fantasy.png",
  },
  {
    key: "chemical",
    name: "Chemical",
    description:
      "ERP integrations, supply-chain tracking, and safety-compliance portals—digital solutions tailored for the chemical sector’s unique challenges.",
    image: "/img/industries/chemical.png",
  },
  {
    key: "social",
    name: "Social & Matrimonial",
    description:
      "We build scalable social platforms and matrimonial apps featuring advanced search, chat, media upload, and AI-powered match suggestions.",
    image: "/img/industries/social.png",
  },
  {
    key: "transport",
    name: "Transport",
    description:
      "Fleet tracking, ride-sharing, and logistics portals—our transport solutions optimise routes and elevate user convenience.",
    image: "/img/industries/transport.png",
  },
  {
    key: "agriculture",
    name: "Agriculture",
    description:
      "IoT-enabled farm monitoring, supply-chain traceability, and marketplace apps that connect producers with buyers in real-time.",
    image: "/img/industries/agriculture.png",
  },
];

export default function IndustrySolutionsSection() {
  const [selected, setSelected] = useState<string>(industries[0].key);

  const activeIndustry = industries.find((i) => i.key === selected)!;

  return (
    <section className="industry-section py-5">
      <div className="container">
        {/* Section intro */}
        <div className="section-heading mb-5">
          <h5 className="text-uppercase text-muted mb-1">Case Study</h5>
          <h2 className="fw-bold mb-3">We Take Pride In All Of Our Work</h2>
          <p className="lead lh-base">
            At Webearl Technologies, we take immense pride in delivering top-notch IT
            solutions that boost business performance. Our expert team specializes in
            innovative software development, web design, and IT consulting services
            that consistently exceed expectations. From mobile app development and
            cloud solutions to full-scale digital transformation projects, we ensure
            every solution reflects our unwavering commitment to quality and client
            satisfaction. Choose Webearl for reliable, cutting-edge technology
            solutions designed to drive your business success and stay ahead in the
            digital world.
          </p>
        </div>
        <div className="row g-4">
          {/* left list */}
          <div className="col-lg-3">
            <ul className="industry-list list-unstyled mb-0">
              {industries.map((ind) => (
                <li
                  key={ind.key}
                  className={
                    "industry-item d-block py-2 px-3 " +
                    (ind.key === selected ? "active" : "")
                  }
                  onClick={() => setSelected(ind.key)}
                  role="button"
                >
                  {ind.name}
                </li>
              ))}
            </ul>
          </div>

          {/* right content */}
          <div className="col-lg-9">
            <div className="industry-content p-4 bg-white rounded shadow-sm d-flex flex-column flex-md-row align-items-start gap-4">
              <div className="flex-grow-1">
                <h4 className="fw-semibold mb-3">
                  Innovative IT Solutions for the {activeIndustry.name} Industry
                </h4>
                <p className="mb-4">{activeIndustry.description}</p>
                <Link href="/hiring" className="btn hire-btn">
                  Hire Us
                </Link>
              </div>
              <div className="text-center">
                <Image
                  src={activeIndustry.image}
                  alt={activeIndustry.name}
                  width={260}
                  height={200}
                  className="rounded industry-img"
                />
                <p className="mt-2 fw-semibold">{activeIndustry.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .industry-section {
          background: #f7fbf6;
          padding: 100px 0;
        }
        .industry-list {
          background: #ffffff;
          border-radius: 6px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        .industry-item {
          cursor: pointer;
          padding: 10px 20px;
          border-left: 3px solid transparent;
          color: #4b5563;
          transition: all 0.2s ease;
        }
        .industry-item:hover {
          color: #111827;
        }
        .industry-item.active {
          font-weight: 600;
          color: #111827;
          border-color: #30b76a;
        }
        .industry-content {
          background: #ffffff;
          border-radius: 6px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        .hire-btn {
          background: linear-gradient(90deg, #8bd6b6, #4ab0e3);
          color: #fff;
          border: none;
          padding: 8px 32px;
        }
        .hire-btn:hover {
          opacity: 0.9;
          color: #fff;
        }
        .industry-img {
          object-fit: cover;
        }
        .industry-item {
          cursor: pointer;
          border-left: 3px solid transparent;
          color: #4b5563;
          transition: all 0.2s ease;
        }
        .industry-item:hover {
          color: #111827;
        }
        .industry-item.active {
          font-weight: 600;
          color: #111827;
          border-color: #111827;
        }
        .hire-btn {
          background: linear-gradient(90deg, #8bd6b6, #4ab0e3);
          color: #fff;
          border: none;
        }
        .hire-btn:hover {
          opacity: 0.9;
          color: #fff;
        }
        .industry-img {
          object-fit: cover;
        }
      `}</style>
    </section>
  );
}
