import Link from "next/link"
import "../styles/all.css"

export default function CallToAction() {
  return (
    <div className="callto-action">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-7">
            <div className="callto-action-text">
              <h5>
                Like what you see? <span>Let&apos;s work</span>
              </h5>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5">
            <div className="callto-action-btn">
              <Link href="/hiring">Hire us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
