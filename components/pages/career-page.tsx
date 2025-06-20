"use client"

import { useEffect } from "react"
import "../styles/all.css"
import Header from '../header';
import Footer from '../footer';


export default function CareerPage() {
  useEffect(() => {
    // Google Tag Manager
    ;((w: any, d: any, s: string, l: string, i: string) => {
      w[l] = w[l] || []
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : ""
      j.async = true
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
      f.parentNode.insertBefore(j, f)
    })(window, document, "script", "dataLayer", "GTM-T6M8KRW")

    // Accordion functionality
    document.querySelectorAll(".accordion-button").forEach((button) => {
      button.addEventListener("click", () => {
        const content = button.nextElementSibling
        const isVisible = content?.classList.contains("show")

        // Remove 'show' class from all contents and 'active' class from all buttons
        document.querySelectorAll(".accordion-content").forEach((c) => c.classList.remove("show"))
        document.querySelectorAll(".accordion-button").forEach((b) => b.classList.remove("active"))

        // If the clicked button's content is not visible, show it and add 'active' class
        if (!isVisible) {
          content?.classList.add("show")
          button.classList.add("active")
        }
      })
    })
  }, [])

  return (
    <>
      <Header />
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-T6M8KRW"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* Preloader Start */}
      {/* <div id="preloader">
        <div id="status">
          <img src="img/loading.gif" alt="LOADING....!!!!!" />
        </div>
      </div> */}


      {/* Career Image Area */}
      <div className="career-hero-banner">
        <div className="career-hero-text">
          <h1>Know more about Us</h1>
          <p>Success is not final; failure is not fatal: It is the courage to continue that counts.</p>
        </div>
      </div>

      {/* Benefits & Perks Area */}
      <section>
        <div className="container">
          <div className="benifit-perk-box">
            <h3 className="mb-5">Benefits & Perks</h3>
            <div className="row benifit-perk-box-grid">
              <div className="col-6">
                <div className="benifit-perk-box-content">
                  <h1>01</h1>
                  <h4 className="mb-1">Extraordinary anthesis :</h4>
                  <p>
                    We provide every employee with the opportunity to grow in their role, fostering an environment that
                    embraces new ideas and creative thoughts. At WebEarl, we believe that independent thinking drives
                    innovation and success.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="benifit-perk-box-content">
                  <h1>02</h1>
                  <h4 className="mb-1">Flexible Culture :</h4>
                  <p>
                    Our team is composed of imaginative and straightforward thinkers who work diligently, enjoy a
                    balanced work-life approach, and consistently get the job done with excellence.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="benifit-perk-box-content">
                  <h1>03</h1>
                  <h4 className="mb-1">Compensation & Benefits :</h4>
                  <p>
                    We offer competitive wages in line with industry standards, reflecting each employee{"'"}s knowledge
                    and experience. Additionally, we promote a 5-day work week culture, ensuring a balanced work
                    environment for our valued team members.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="benifit-perk-box-content">
                  <h1>04</h1>
                  <h4 className="mb-1">Paid vacation :</h4>
                  <p>
                    We offer flexible, paid vacation to all our employees, allowing them to enjoy personal time, pursue
                    their passions, and return to work with a refreshed perspective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture Area */}
      <section>
        <div className="container">
          <div className="our-culture-box">
            <div className="our-culture-box-header mb-5">
              <h3>OUR CULTURE</h3>
              <p>
                We are committed to fostering a culture of innovation, collaboration, and continuous learning. We
                believe that diversity in thought and experience leads to the best solutions for our clients. Our team
                comprises individuals with varied backgrounds and skill sets, driving excellence and creativity.
              </p>
            </div>
            <div className="">
              <div className="row">
                <div className="col-6">
                  <div className="our-culture-image d-flex align-items-center h-100">
                    <img src="./img/career-culture.png" className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="our-culture-box-content">
                    <h3>WebEarl Technologies Employee Benefits</h3>
                    <div className="row">
                      <div className="col-6 culture-box border-right border-bottom">
                        <div className="our-culture-sub-content">
                          <h4>Cafeteria</h4>
                          <p>We have cafeteria with Pantry facility which can serve live food from the Kitchen.</p>
                        </div>
                      </div>

                      <div className="col-6 culture-box border-bottom">
                        <div className="our-culture-sub-content">
                          <h4>In-house Training & Soft Skill Training</h4>
                          <p>
                            We provide basic training to advance level training to all developers & we do a lot of soft
                            skill training.
                          </p>
                        </div>
                      </div>

                      <div className="col-6 culture-box border-right">
                        <div className="our-culture-sub-content">
                          <h4>Quarterly rewards and Benefits</h4>
                          <p>Quarterly, we provide rewards to the best employees for their work and achievements.</p>
                        </div>
                      </div>

                      <div className="col-6 culture-box">
                        <div className="our-culture-sub-content">
                          <h4>Team Outings</h4>
                          <p>Annual out-of-station tours, local picnics, lunch, movies, dinner.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="share-you-resume">
                    <h3>Share your resume</h3>
                    <h5>
                      You can submit your resume to <b>career@webearl.com</b> if your desired job role is listed below.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="employeement-section">
          <div className="container">
            <div className="employeement-section-header mb-5">
              <h3>All Openings</h3>
            </div>
            <div className="employeement-section-grid">
              <div>
                <h4 className="mb-0">Senior SEO</h4>
                <div>
                  <p className="mb-0">0 - 2 Years | Bhat, Ahmedabad </p>
                </div>
              </div>
              <div>
                <h4 className="mb-0">Business Development Executive</h4>
                <div>
                  <p className="mb-0">0 - 2 Years | Bhat, Ahmedabad </p>
                </div>
              </div>
              <div>
                <h4 className="mb-0">React JS Developer</h4>
                <div>
                  <p className="mb-0">0 - 2 Years | Bhat, Ahmedabad </p>
                </div>
              </div>
              <div>
                <h4 className="mb-0">Node JS Developer</h4>
                <div>
                  <p className="mb-0">0 - 2 Years | Bhat, Ahmedabad </p>
                </div>
              </div>
              <div>
                <h4 className="mb-0">Full Stack Developer</h4>
                <div>
                  <p className="mb-0">0 - 2 Years | Bhat, Ahmedabad </p>
                </div>
              </div>
              <div>
                <h4 className="mb-0">Flutter Developer</h4>
                <div>
                  <p className="mb-0">0 - 2 Years | Bhat, Ahmedabad </p>
                </div>
              </div>
              <div>
                <h4 className="mb-0">UI/UX Graphics Designer</h4>
                <div>
                  <p className="mb-0">0 - 2 Years | Bhat, Ahmedabad </p>
                </div>
              </div>
              <div>
                <h4 className="mb-0">PHP/Laravel WordPress Developer</h4>
                <div>
                  <p className="mb-0">0 - 2 Years | Bhat, Ahmedabad </p>
                </div>
              </div>
              <div>
                <h4 className="mb-0">Digital Marketing Manager</h4>
                <div>
                  <p className="mb-0">0 - 2 Years | Bhat, Ahmedabad </p>
                </div>
              </div>
              <div>
                <h4 className="mb-0">Trainee Software Developer</h4>
                <div>
                  <p className="mb-0">0 - 2 Years | Bhat, Ahmedabad </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      

      
      
    </>
  )
}
