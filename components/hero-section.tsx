import Image from "next/image"
import Link from "next/link"
import "../styles/all.css"
import AnimatedText from "./AnimatedText"

export default function HeroSection() {
  return (
    <section>
      <div className="header-content-area" style={{ backgroundImage: "url(/img/header.png)" }}>
        <div className="container">
          {/* header pattern */}
          <div className="header-pattern-1">
            <Image src="/img/header-pattern-1.png" alt="" width={100} height={100} />
          </div>
          <div className="header-pattern-2">
            <Image src="/img/header-pattern2.png" alt="" width={100} height={100} />
          </div>
          <div className="header-animation-area">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                {/* header text */}
                <div className="intro-text">
                  <AnimatedText 
                    as="h1"
                    animation="slide-right"
                    delay={700}
                    duration={1200}
                  >
                    Creativity is a most <br /> valuable asset
                  </AnimatedText>
                  <AnimatedText 
                    as="p"
                    animation="fade-in"
                    delay={1500}
                    duration={1200}
                  >
                    AI and machine learning are taking over, automating more and more tasks.
                    <br />
                    With this technology in place, machines are producing faster and more
                    <br />
                    accurate results for businesses than ever before.
                  </AnimatedText>
                  <AnimatedText 
                    as="div"
                    className="learnmore"
                    animation="fade-in"
                    delay={1500}
                    duration={1200}
                  >
                    <Link href="#" className="skill-btn">
                      hire us
                    </Link>
                    <div className="learnmore2">{/* YouTube link can be added here */}</div>
                  </AnimatedText>
                </div>
              </div>
              {/* header artwork */}
              <div className="header-1-artwork">
                <div className="layer">
                  <Image src="/img/header-1-artwork.png" alt="" width={500} height={400} />
                  <AnimatedText 
                    as="div"
                    className="layer-1"
                    animation="fade-up"
                    delay={800}
                    duration={1000}
                  >
                    <Image src="/img/man-in-board.png" alt="" width={200} height={200} />
                  </AnimatedText>
                  <AnimatedText 
                    as="div"
                    className="layer-2"
                    animation="fade-up"
                    delay={800}
                    duration={1000}
                  >
                    <Image src="/img/man-in-pc.png" alt="" width={200} height={200} />
                  </AnimatedText>
                  <div className="layer-3">
                    <Image src="/img/spin.png" alt="" width={100} height={100} />
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
