import Image from "next/image"
import Link from "next/link"
import "../styles/all.css"

export default function PricingSection() {
  const pricingPlans = [
    {
      title: "Travel App",
      description: "Travel Company Website and Android Application",
      price: "39",
      period: "month",
      features: [
        "Unlimited Pages",
        "Ad-free website",
        "100% responsive Website",
        "Unlimited packages",
        "Unlimited Bandwidth",
        "Free Web Hosting",
        "Free Application Hosting",
        "Connect Your Email",
        "Social Media Marketing*",
        "Connect Your Domain",
        "Standard Technical Support",
      ],
      isActive: false,
    },
    {
      title: "E-Commerce App",
      description: "E-commerce Website and Android Application",
      price: "29",
      period: "month",
      features: [
        "Unlimited Pages",
        "Ad-free website",
        "100% responsive Website",
        "Unlimited Product",
        "Unlimited Bandwidth",
        "Free Web Hosting",
        "Free Application Hosting",
        "Connect Your Email",
        "Social Media Marketing*",
        "Connect Your Domain",
        "Standard Technical Support",
      ],
      isActive: true,
    },
    {
      title: "Customized App",
      description: "Customized Website & Android / iOS Application",
      price: "99",
      period: "month",
      features: [
        "Unlimited Pages",
        "Ad-free website",
        "100% responsive Website",
        "Unlimited customized functionality",
        "Unlimited Bandwidth",
        "Free Web Hosting",
        "Free Application Hosting",
        "Connect Your Email",
        "Social Media Marketing*",
        "Free Domain",
        "Premium Technical Support",
      ],
      isActive: false,
    },
  ]

  return (
    <section>
      <div className="pricing-plan-area">
        <div className="container">
          <div className="row">
            {/* price heading text */}
            <div className="col-xl-12">
              <div className="section-heading-3">
                <h4>our Pricing for</h4>
                <h3>Ready Solutions</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin-bot-sb-30">
                <div className={`single-price ${plan.isActive ? "active-s" : ""}`}>
                  <div className="price-pattern">
                    <Image src="/img/p-pattern.png" alt="" width={50} height={50} />
                  </div>
                  <div className={`package ${plan.isActive ? "active-h" : ""}`}>
                    <h3>{plan.title}</h3>
                  </div>
                  <div className="price-qoute">
                    <p>
                      <b>{plan.description}</b>
                    </p>
                    <h2>
                      {plan.price}$ <span>/ {plan.period}</span>
                    </h2>
                  </div>
                  <div className="price-details">
                    <ul>
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <i className="far fa-check-circle"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`price-button ${plan.isActive ? "active-b" : ""}`}>
                    <Link href="#">Get Services</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
