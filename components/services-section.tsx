import Image from "next/image"
import Link from "next/link"
import "../styles/all.css"

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
];

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
                <h3>Services We provide</h3>
                <p>
                  The <b>WebEarl Technologies Pvt Ltd</b> has the experience and expertise to help your business meet
                  your goals and objectives faster, with less risk. WebEarl is an organization who assists customers in
                  achieving their business objectives with the use of technology.
                </p>
                {/* <div className="section-button">
                  <Link href="#">get service</Link>
                </div> */}
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
