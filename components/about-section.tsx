import Image from "next/image"
import Link from "next/link"
import "../styles/all.css"

export default function AboutSection() {
  return (
    <section>
      <div className="home-about-area">
        <div className="container">
          <div className="row">
            {/* about image */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="home-about-image">
                <Image src="/img/home-about.jpg" alt="" width={500} height={400} />
              </div>
            </div>
            {/* about text */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="section-heading-1 home-about-text">
                <h4>About US</h4>
                <h3>What We Do?</h3>
                <p>
                  We design and develop custom <Link href="/mobile-application-development">mobile application</Link>{" "}
                  for Android and iOS platforms and <Link href="/web-application-development">Web Application</Link> as
                  per customer&apos;s need. Our mobile app developers have expertise to create{" "}
                  <Link href="/mobile-application-development">mobile applications</Link> using AI and ML Technologies.
                  Want to make your own app?
                </p>
                <div className="section-button">
                  <Link href="/Quotation">Request Quote</Link>
                </div>
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
