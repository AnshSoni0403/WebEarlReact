import Image from "next/image"
import Link from "next/link"
import "../styles/all.css"

export default function ExpertiseSection() {
  return (
    <section>
      <div className="expertise-area">
        <div className="container">
          <div className="row">
            {/* expertise image */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="expertise-image">
                <Image src="/img/expertise/expertise.png" alt="" width={500} height={400} />
              </div>
            </div>
            {/* expertise heading text */}
            <div className="col-xl-6 col-lg-6 col-md-6 d-flex align-items-center">
              <div className="section-heading-1 home-expertise-text">
                <h4>Expertise</h4>
                <h3>Marketing & Design</h3>
                <p>
                  Marketing teams have a fierce mission to develop original work for their clients or the brands they
                  work for — whether that&apos;s a piece of creative material, a memorable commercial, a cool{" "}
                  <Link href="https://www.instagram.com/webearltechnologies/" target="_blank">
                    Instagram
                  </Link>{" "}
                  post or a stellar re-brand. However, the market is so saturated with ideas, messaging and
                  advertisements via any and every channel you could think of that it&apos;s often more taxing to find
                  that original concept that sets your agency and your client apart from the rest.
                </p>
                <div className="section-button">
                  <Link href="#">get quote</Link>
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
