"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import "../styles/all.css"

export default function CounterSection() {
  const [counters, setCounters] = useState({
    years: 0,
    team: 0,
    projects: 0,
    clients: 0,
  })

  useEffect(() => {
    // Counter animation with customizable speed
    const animateCounter = (target: number, key: keyof typeof counters, speedDivider: number) => {
      let current = 0
      const increment = Math.max(0.5, target / speedDivider)
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters((prev) => ({ ...prev, [key]: Math.round(current) }))
      }, 50) // Fixed interval for all counters
    }

    // Start animations with different speeds
    // Years counter with very slow animation
    const yearsTimer = setInterval(() => {
      setCounters(prev => {
        if (prev.years >= 7) {
          clearInterval(yearsTimer);
          return { ...prev, years: 7 };
        }
        return { ...prev, years: prev.years + 0.10 };
      });
    }, 50);
    
    // Other counters
    animateCounter(20, "team", 200)     // Team counter
    animateCounter(100, "projects", 80)  // Projects counter
    animateCounter(50, "clients", 80)    // Clients counter
  }, [])

  return (
    
    <section>
      <div className="about-counter-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 d-flex align-items-center">
              <div className="section-heading-2 section-heading-2-p-a about-counter-text">
                <h4>Summary</h4>
                <h3>Achievement we have</h3>
                <p>At Webearl Technologies, we are proud of our significant achievements in providing top-tier app development solutions Our innovative techniques in user engagement and system integration paired with the latest cutting-edge technology have successfully elevated businesses to new levels of success. Our track record in delivering enterprise mobility solutions highlights our dedication to enhancing business performance and driving growth. With our focus on high-performance, customized solutions, we have built a reputation for excellence, helping businesses excel in today’s competitive digital landscape.</p>
                
              </div>
            </div>
            <div className="col-xl-6">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 single-count-item-mb">
                  <div className="single-count-area">
                    <img src="img/counter/year-in-business.png" alt="Years in business" className="img-fluid" />
                    <br />
                    <span className="counter">{Math.floor(counters.years)}</span><span>+</span>
                    <p>Years in business</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 single-count-item-mb">
                  <div className="single-count-area">
                    <img src="img/counter/team-member.png" alt="Team Members" className="img-fluid" />
                    <br />
                    <span className="counter">{counters.team}</span><span>+</span>
                    <p>Team Members</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="single-count-area">
                    <img src="img/counter/project-delivered.png" alt="Projects Delivered" className="img-fluid" />
                    <br />
                    <span className="counter">{counters.projects}</span><span>+</span>
                    <p>Projects Delivered</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 margin-top-sb-30">
                  <div className="single-count-area">
                    <img src="img/counter/client-served.png" alt="Clients Served" className="img-fluid" />
                    <br />
                    <span className="counter">{counters.clients}</span><span>+</span>
                    <p>Clients Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* <div className="main-counter-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="row counter-area-small">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 single-count-item-mb">
                  <div className="single-count-area">
                    <Image src="/img/counter/manager.png" alt="" width={50} height={50} />
                    <br />
                    <span className="counter">{counters.clients}</span>
                    <span>+</span>
                    <p>Clients</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 single-count-item-mb">
                  <div className="single-count-area">
                    <Image src="/img/counter/chart.png" alt="" width={50} height={50} />
                    <br />
                    <span className="counter">{counters.projects}</span>
                    <span>+</span>
                    <p>Projects</p>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="single-count-area">
                    <Image src="/img/counter/coin.png" alt="" width={50} height={50} />
                    <br />
                    <span className="counter">{counters.profit}</span>
                    <span>k+</span>
                    <p>profit</p>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 margin-top-sb-30">
                  <div className="single-count-area">
                    <Image src="/img/counter/theme.png" alt="" width={50} height={50} />
                    <br />
                    <span className="counter">{counters.coming}</span>
                    <span>+</span>
                    <p>coming</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 d-flex align-items-center">
              <div className="section-heading-1 home-counter-text">
                <h4>Summary</h4>
                <h3>Achievement we have</h3>
                <p>
                Webearl Technologies stands as a leader in the IT industry, known for delivering innovative and high-impact digital transformation solutions. With expertise in web development, mobile app creation, and cutting-edge technologies, Webearl helps businesses enhance efficiency and achieve growth. Their client-centric approach and commitment to quality have earned them a reputation as a trusted IT partner across various industries. By staying ahead of industry trends and adopting the latest technologies, Webearl Technologies empowers businesses to thrive in the rapidly evolving digital world.
                </p>
                
                <div className="e-pattern">
                  <Image src="/img/expertise/e-pattern.png" alt="" width={100} height={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}
