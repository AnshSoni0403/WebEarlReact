"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import "../styles/all.css"

export default function CounterSection() {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    profit: 0,
    coming: 0,
  })

  useEffect(() => {
    // Simple counter animation
    const animateCounter = (target: number, key: keyof typeof counters) => {
      let current = 0
      const increment = target / 100
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, 20)
    }

    animateCounter(102, "clients")
    animateCounter(398, "projects")
    animateCounter(89, "profit")
    animateCounter(29, "coming")
  }, [])

  return (
    <section>
      <div className="main-counter-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="row counter-area-small">
                {/* single-countdown */}
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 single-count-item-mb">
                  <div className="single-count-area">
                    <Image src="/img/counter/manager.png" alt="" width={50} height={50} />
                    <br />
                    <span className="counter">{counters.clients}</span>
                    <span>+</span>
                    <p>Clients</p>
                  </div>
                </div>
                {/* single-countdown */}
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 single-count-item-mb">
                  <div className="single-count-area">
                    <Image src="/img/counter/chart.png" alt="" width={50} height={50} />
                    <br />
                    <span className="counter">{counters.projects}</span>
                    <span>+</span>
                    <p>Projects</p>
                  </div>
                </div>
                {/* single-countdown */}
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="single-count-area">
                    <Image src="/img/counter/coin.png" alt="" width={50} height={50} />
                    <br />
                    <span className="counter">{counters.profit}</span>
                    <span>k+</span>
                    <p>profit</p>
                  </div>
                </div>
                {/* single-countdown */}
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
            {/* section heading text */}
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
      </div>
    </section>
  )
}
