import Image from "next/image"
import Link from "next/link"
import "../styles/all.css"

export default function ServicesSection() {
  return (
    <section>
      <div className="services-area">
        <svg id="curve" data-name="layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
          <path
            className="cls-1"
            d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
            transform="translate(0 -135.53)"
          />
        </svg>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-5 d-flex align-items-center">
              {/* service heading text */}
              <div className="section-heading-2 section-heading-2-p">
                <h4>our services</h4>
                <h3>Services We provides</h3>
                <p>
                  The <b>WebEarl Technologies Pvt Ltd</b> has the experience and expertise to help your business meet
                  your goals and objectives faster, with less risk. WebEarl is an organization who assists customers in
                  achieving their business objectives with the use of technology.
                </p>
                <div className="section-button">
                  <Link href="#">get service</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-7">
              <div className="row">
                {/* service box */}
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
                  <div
                    className="single-service"
                    data-aos="fadein"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <div className="service-icon">
                      <Link href="/web-application-development">
                        <Image src="/img/service/1.png" alt="" width={60} height={60} />
                      </Link>
                    </div>
                    <div className="service-text">
                      <h3>
                        <Link href="/web-application-development">Web Development</Link>
                      </h3>
                      <p>
                        Professional web development & maintenance wizards give your company the edge with services
                        based on the latest technologies and industry trends.
                      </p>
                    </div>
                    <div className="servive-p-1">
                      <Link href="">
                        <Image src="/img/service/service-p-1.png" alt="" width={50} height={50} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 margin-top-sb-30">
                  <div className="row">
                    {/* service box */}
                    <div className="col-xl-12">
                      <div className="single-service">
                        <div className="service-icon">
                          <Link href="/digital-marketing">
                            <Image src="/img/service/3.png" alt="" width={60} height={60} />
                          </Link>
                        </div>
                        <div className="service-text">
                          <h3>
                            <Link href="/digital-marketing">Digital Marketing</Link>
                          </h3>
                          <p>
                            With digital marketing, your business can expand into new areas, hire additional team
                            members, and achieve tremendous accomplishments in your industry.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* service box */}
                    <div className="col-xl-12">
                      <div
                        className="single-service service-mt-30"
                        data-aos="fadein"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                      >
                        <div className="service-icon">
                          <Link href="/web-application-development">
                            <Image src="/img/service/2.png" alt="" width={60} height={60} />
                          </Link>
                        </div>
                        <div className="service-text">
                          <h3>
                            <Link href="/prototype-development">UI/UX Design</Link>
                          </h3>
                          <p>
                            We&apos;re a UI/UX design agency that believes business software deserves the
                            user-friendliness and aesthetics of best-in-class consumer apps.
                          </p>
                        </div>
                        <div className="servive-p-2">
                          <Image src="/img/service/service-p-3.png" alt="" width={50} height={50} />
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
  )
}
