import Image from "next/image"
import Link from "next/link"
import "../styles/all.css"

export default function Footer() {
  return (
    <section id="footer-fixed">
      <div className="big-footer" style={{ backgroundImage: "url(/img/f-pattern.png)" }}>
        <div className="container">
          <div className="row">
            {/* footer logo */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="footer-logo">
                <Link href="#">
                  <Image src="/img/footer-logo.png" alt="" width={200} height={60} />
                </Link>
                <p>
                  <b>WebEarl Technologies Pvt Ltd.</b>
                  <br />
                  22 Cradle, EDII,
                  <br />
                  Gandhinagar - Ahmedabad Rd,
                  <br />
                  Next to Apollo Hospital,
                  <br />
                  Bhat, Ahmedabad, Gujarat 382428
                  <br />
                </p>
              </div>
              {/* footer social */}
              <div className="social">
                <ul>
                  <li>
                    <Link
                      className="footer-socials"
                      href="https://www.facebook.com/webearltechnologiespvtltd"
                      target="_blank"
                    >
                      <i className="fab fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-socials"
                      href="https://www.instagram.com/webearltechnologies/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-socials" href="https://twitter.com/WebEarl" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-socials"
                      href="https://www.youtube.com/channel/UCLIyO2okxv_EzZ9wOMqiv0A"
                      target="_blank"
                    >
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                  <br />
                  <li>
                    <Link
                      className="footer-socials"
                      href="https://www.linkedin.com/in/ashok-sindhav-a758808b/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-socials" href="https://www.behance.net/webearl" target="_blank">
                      <i className="fab fa-behance"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-socials" href="https://dribbble.com/Webearl" target="_blank">
                      <i className="fab fa-dribbble"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-socials"
                      href="https://in.pinterest.com/webearlitsolution/_created/"
                      target="_blank"
                    >
                      <i className="fab fa-pinterest"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* footer latest work */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="footer-heading">
                <h3>Latest Works</h3>
              </div>
              <div className="footer-content">
                <ul>
                  <li>
                    <Link href="http://www.startyourtour.com" target="_blank">
                      Start Your Tour
                    </Link>
                  </li>
                  <li>
                    <Link href="" target="_blank">
                      Minto App
                    </Link>
                  </li>
                  <li>
                    <Link href="https://play.google.com/store/apps/details?id=com.nowochat" target="_blank">
                      Nowo Chat
                    </Link>
                  </li>
                  <li>
                    <Link href="https://play.google.com/store/apps/details?id=com.careforeach&hl=en_IN" target="_blank">
                      Care For Each
                    </Link>
                  </li>
                  <li>
                    <Link href="https://play.google.com/store/apps/details?id=com.knockknock&hl=en" target="_blank">
                      Knock Knock
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* footer quick links */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="footer-heading">
                <h3>quick links</h3>
              </div>
              <div className="footer-content">
                <ul>
                  <li>
                    <Link href="/web-application-development">Web Application Development</Link>
                  </li>
                  <li>
                    <Link href="/mobile-application-development">Mobile Application Development</Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-development">E-Commerce Development</Link>
                  </li>
                  <li>
                    <Link href="/prototype-development">Prototype & Wireframe Development</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* footer subscribe */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="footer-heading">
                <h3>Get Updates</h3>
              </div>
              <div className="footer-content footer-cont-mar-40">
                <form action="#">
                  <input id="leadgenaration" type="email" placeholder="Enter your email" />
                  <input id="subscribe" type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <footer>
        <p>
          All rights reserved @{" "}
          <Link href="/" style={{ color: "#FFF" }}>
            WebEarl
          </Link>{" "}
          2013
        </p>
      </footer>
    </section>
  )
}
