"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinkStyle = {
  '.nav-link': {
    color: '#6c757d',
    '&:hover, &.active': {
      color: '#000',
      fontWeight: 'bold',
      backgroundColor: 'transparent !important',
      borderColor: 'transparent !important',
    },
    '&.active': {
      color: '#000 !important',
      fontWeight: 'bold !important',
    },
  },
} as const;
import "../styles/all.css";

const industries = [
	{
		key: "travel",
		name: "Travel",
		description:
			"Webearl Technologies has extensive experience delivering innovative IT solutions for the travel industry. We specialize in building custom travel management systems, online booking platforms, and mobile apps designed to streamline operations and enhance customer experiences. With features like real-time travel updates, secure payment integration, and personalized itineraries, our solutions help travel agencies, tour operators, and online travel agencies (OTAs) stay competitive. Our expertise ensures that your business can offer seamless travel services and a user-friendly experience across all platforms.",
		image: "/img/travel.jpg",
		heading: "Innovative IT Solutions for the Travel Industry",
	},
	{
		key: "healthcare",
		name: "Health Care",
		description:
			"At Webearl Technologies, we deliver innovative IT solutions tailored for the healthcare industry, focusing on enhancing patient care and operational efficiency. Our expertise includes developing custom healthcare management systems, secure patient portals, and mobile health apps that offer real-time health monitoring, telemedicine capabilities, and seamless data management. By leveraging cutting-edge technology, we help hospitals, clinics, and healthcare providers streamline workflows, ensure compliance, and improve patient engagement. With Webearl, healthcare organizations are empowered to deliver personalized, efficient care while staying ahead in the digital health revolution.",
		image: "/img/healthcare.jpg",
		heading:
			"Advanced IT Solutions for Healthcare: Empowering Patient Care with Webearl Technologies",
	},
	{
		key: "retail",
		name: "Retail & E- Commerce",
		description:
			"Webearl Technologies offers transformative IT solutions for the retail and e-commerce sectors, aimed at optimizing operations and enhancing customer experiences. We provide custom e-commerce platforms, sophisticated inventory management systems, and secure payment gateways designed to boost sales and improve user engagement. Our solutions include personalized shopping experiences, real-time inventory updates, and seamless payment integrations, empowering both online retailers and brick-and-mortar stores. With Webearl's technology, businesses can drive growth and maintain a competitive edge in the evolving digital commerce landscape.",
		image: "/img/ecommerce.jpg",
		heading:
			"Transforming Retail & E-Commerce with IT Solutions by Webearl Technologies",
	},
	{
		key: "energy",
		name: "Energy",
		description:
			"Webearl Technologies offers groundbreaking IT solutions for the energy sector, designed to enhance efficiency and drive sustainability. Our expertise includes developing advanced energy management systems, real-time monitoring solutions, and comprehensive data analytics platforms. Key features such as smart grid technology, predictive maintenance, and detailed performance analytics enable energy companies to optimize operations, reduce costs, and improve resource management. With Webearl's innovative technology, businesses in the energy sector can stay competitive, adapt to industry changes, and lead in a modern, sustainable energy landscape.",
		image: "/img/energy.jpg",
		heading:
			"Revolutionary IT Solutions for the Energy Sector by Webearl Technologies",
	},
	{
		key: "fantasy",
		name: "Fantasy Game",
		description:
			"Webearl Technologies brings epic IT solutions to the fantasy gaming industry, offering state-of-the-art technology to enhance gameplay and immersive experiences. We specialize in developing custom game engines, dynamic world-building tools, and interactive multiplayer platforms that captivate players and drive engagement. Our solutions include real-time game analytics, advanced AI for NPC behavior, and seamless cross-platform integration to ensure a rich, immersive gaming environment. With Webearl’s technology, fantasy game developers can create enchanting worlds, deliver engaging storylines, and provide players with unforgettable adventures, setting new standards in the gaming universe.",
		image: "/img/fantasy_gaming.png",
		heading:
			"Epic IT Solutions for Fantasy Games: Webearl Technologies' Cutting-Edge Innovations",
	},
	{
		key: "Mobile Games",
		name: "Mobile Games",
		description:
			"Webearl Technologies delivers cutting-edge mobile game development solutions designed to captivate players and drive engagement. We create high-performance games across genres—from casual puzzles to intense multiplayer action titles. Our services include game design, development, UI/UX, testing, and post-launch support tailored to your vision. We bring your game ideas to life with immersive graphics and seamless gameplay. Our mobile game solutions are optimized for both iOS and Android, ensuring wide reach, high retention, and a memorable player experience.",
		image: "/img/mobile_games.png",
		heading:
			"Mobile Game Development Solutions That Engage and Entertain",
	},
	{
		key: "chemical",
		name: "Chemical",
		description:
			"Webearl Technologies delivers transformative IT solutions tailored for the chemical industry, focusing on enhancing efficiency and ensuring regulatory compliance. Our offerings include bespoke chemical process management systems, advanced real-time monitoring solutions, and powerful data analytics platforms. With features like automated quality assurance, predictive maintenance, and integrated safety protocols, we help chemical companies streamline operations, minimize downtime, and manage intricate data with precision. Leveraging Webearl’s innovative technology, the chemical sector can achieve optimized production, superior product quality, and a competitive advantage in a rapidly evolving market.",
		image: "/img/chemical.jpg",
		heading:
			"Transformative IT Solutions for the Chemical Industry: Webearl Technologies Leads the Way",
	},
	{
		key: "social",
		name: "Social & Matrimonial",
		description:
			"Webearl Technologies provides next-gen IT solutions tailored for social and matrimonial platforms, designed to enhance user interaction and optimize matchmaking efficiency. We offer custom social networking solutions, innovative matchmaking algorithms, and engaging user interfaces that facilitate genuine connections. Our technology features real-time messaging, robust data security, and personalized matchmaking experiences to meet the diverse needs of users. With Webearl’s advanced solutions, social and matrimonial platforms can deliver a seamless, secure, and dynamic experience, ensuring higher user satisfaction and engagement in today’s competitive digital environment.",
		image: "/img/social_and_matrimony.png",
		heading:
			"Next-Gen IT Solutions for Social & Matrimonial Platforms by Webearl Technologies",
	},
	{
		key: "transport",
		name: "Transport",
		description:
			"Webearl Technologies delivers revolutionary IT solutions for the transport industry, designed to boost efficiency and streamline operations. Our cutting-edge services include custom transportation management systems, real-time vehicle tracking, and advanced data analytics. We offer features like route optimization, fleet management, and integrated scheduling to enhance operational effectiveness and reduce costs. With Webearl’s innovative technology, transport companies can achieve improved fleet performance, optimized route planning, and timely delivery services. Our solutions empower businesses to stay competitive and excel in a dynamic transport sector with precision and agility.",
		image: "/img/transport.jpg",
		heading:
			"Driving Innovation in the Transport Industry with Webearl Technologies' IT Solutions",
	},
	{
		key: "agriculture",
		name: "Agriculture",
		description:
			"Webearl Technologies delivers transformative IT solutions tailored for the agriculture sector, designed to boost efficiency and promote sustainability. Our services include custom farm management systems, precision agriculture technologies, and advanced data analytics platforms. With features like real-time crop monitoring, automated irrigation systems, and predictive analytics, we help farmers optimize resource usage, enhance crop yields, and streamline agricultural operations. By integrating Webearl’s innovative technology, the agriculture industry can achieve smarter farming practices, drive growth, and meet the demands of a modern agricultural landscape with precision and ease.",
		image: "/img/agriculture.jpg",
		heading:
			"Transformative IT Solutions for Agriculture: Webearl Technologies' Innovative Approach",
	},
];

export default function IndustrySolutionsSection() {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section className="category-section-area">
			<div className="container">
				<div className="category-section-header mb-5">
					<h4>Case Study</h4>
					<h3>We take pride in all of our work</h3>
					<p>
						At Webearl Technologies, we take immense pride in delivering
						top-notch IT solutions that boost business performance. Our expert
						team specializes in innovative software development, web design,
						and IT consulting services that consistently exceed expectations.
						From mobile app development and cloud solutions to full-scale
						digital transformation projects, we ensure every solution reflects
						our unwavering commitment to quality and client satisfaction.
						Choose Webearl for reliable, cutting-edge technology solutions
						designed to drive your business success and stay ahead in the
						digital world.
					</p>
				</div>
				<div className="row">
					{/* Menu Column */}
					<div className="col-md-3 col-12">
						<div className="category-menu-section h-100" style={navLinkStyle}>
                  <style jsx>{`
                    .nav-link {
                      color: #6c757d;
                      transition: all 0.2s ease;
                    }
                    .nav-link:hover, .nav-link.active {
                      color: #000 !important;
                      font-weight: bold !important;
                      background-color: transparent !important;
                      border-color: transparent !important;
                    }
                    .nav-link.active {
                      color: #000 !important;
                      font-weight: bold !important;
                    }
                  `}</style>
							<ul
								className="nav flex-column align-items-start nav-pills"
								id="v-pills-tab"
								role="tablist"
								aria-orientation="vertical"
							>
								{industries.map((ind, idx) => (
									<li className="nav-item" key={ind.key}>
										<a
											className={
												"nav-link" + (activeIndex === idx ? " active" : "")
											}
											data-bs-slide-to={idx}
											role="button"
											onClick={() => setActiveIndex(idx)}
											tabIndex={0}
										>
											{ind.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
					{/* Data Display Column */}
					<div className="col-md-9 col-12">
						<div className="category-slides-content h-100">
							<div className="carousel slide">
								<div className="carousel-inner">
									<div className="carousel-item active">
										<div className="data-slide">
											<div className="row">
												<div className="col-sm-8 col-12">
													<div className="category-slide-content">
														{/* <p><i className="fa-solid fa-user-doctor"></i></p> */}
														<h5 className="mb-2">
															{
																industries[activeIndex]
																	.heading
															}
														</h5>
														<p>
															{
																industries[activeIndex]
																	.description
															}
														</p>
														<div className="section-button d-flex">
															<Link href="/hiring">Hire us</Link>
														</div>
													</div>
												</div>
												<div className="col-sm-4 col-12">
													<Image
														src={
															industries[activeIndex]
																.image
														}
														alt={
															industries[activeIndex]
																.name
														}
														width={260}
														height={200}
														className="img-fluid"
													/>
													<h5 className="text-center mt-2">
														<b>
															{
																industries[activeIndex]
																	.name
															}
														</b>
													</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
