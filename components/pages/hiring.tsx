"use client"

import { useEffect, useState } from "react"
import Header from "../header";
import Footer from "../footer";
import "../styles/all.css"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import CallToAction from "../call-to-action";

export default function HiringPage() {
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

    // Modal functionality
    const requestQuoteButton = document.getElementById("request-quote-button")
    if (requestQuoteButton) {
      requestQuoteButton.addEventListener("click", () => {
        const requestQuoteModal = new (window as any).bootstrap.Modal(document.getElementById("requestQuoteModal"))
        requestQuoteModal.show()
      })
    }

    document
      .querySelectorAll(".section-button button")
      .forEach((button) => {
        button.addEventListener("click", () => {
          const requestQuoteModal = new (window as any).bootstrap.Modal(document.getElementById("requestQuoteModal"))
          requestQuoteModal.show()
        })
      })

    // Form validation
    ;(() => {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll(".needs-validation")

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach((form) => {
        form.addEventListener(
          "submit",
          (event) => {
            if (!(form as HTMLFormElement).checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }

            form.classList.add("was-validated")
          },
          false,
        )
      })
    })()

    // Form submission
    const callbackForm = document.getElementById("callbackForm")
    if (callbackForm) {
      callbackForm.addEventListener("submit", function (e) {
        e.preventDefault() // Prevent form from submitting normally

        const form = this as HTMLFormElement
        // Check if the form is valid
        if (!form.checkValidity()) {
          e.stopPropagation()
          form.classList.add("was-validated")
          return
        }

        // If the form is valid, create an object to hold form data
        const formData = {
          name: (document.getElementById("fullName") as HTMLInputElement)?.value,
          email: (document.getElementById("emailAddress") as HTMLInputElement)?.value,
          Message: `
            Call Type: ${(document.getElementById("callType") as HTMLSelectElement)?.value}
            Time for Callback: ${(document.getElementById("callbackTime") as HTMLSelectElement)?.value}
            Nature of Enquiry: ${(document.getElementById("enquiryNature") as HTMLSelectElement)?.value}
            Full Name: ${(document.getElementById("fullName") as HTMLInputElement)?.value}
            Company Name: ${(document.getElementById("companyName") as HTMLInputElement)?.value || "N/A"}
            Phone Number: ${(document.getElementById("phoneNumber") as HTMLInputElement)?.value}
            Email Address: ${(document.getElementById("emailAddress") as HTMLInputElement)?.value}
            Country: ${(document.getElementById("country") as HTMLInputElement)?.value}
            State: ${(document.getElementById("state") as HTMLInputElement)?.value}
            City: ${(document.getElementById("city") as HTMLInputElement)?.value}
            Existing Customer: ${(document.getElementById("existingCustomer") as HTMLSelectElement)?.value}
            Additional Information: ${(document.getElementById("additionalInfo") as HTMLTextAreaElement)?.value || "N/A"}
          `,
        }

        // Convert the object to FormData for submission
        const formDataToSend = new FormData()
        formDataToSend.append("access_key", "eae59eb7-b97f-42ef-b91c-fe683c9e3d09") // Web3Forms access key
        formDataToSend.append("name", formData.name || "")
        formDataToSend.append("email", formData.email || "")
        formDataToSend.append("Message", formData.Message)
        formDataToSend.append("From", "Callback Form")

        // Send form data via fetch
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formDataToSend,
          headers: {
            Accept: "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              // Clear the form only after successful submission
              form.reset()
              alert("Form submitted successfully!")
              form.classList.remove("was-validated")
            } else {
              alert("Form submission failed!")
            }
          })
          .catch((error) => {
            alert("There was a problem submitting the form.")
          })
      })
    }
  }, [])

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqData = [
    {
      question: "How do I hire dedicated developers or team?",
      answer: (
        <ol>
          <li>Define your project requirements by detailing the technology stack, timeline, budget, and any specific needs to ensure a successful project setup.</li>
          <li>Choose your engagement model by selecting the option that best fits your needs, whether it's a dedicated team, time and material, or fixed price.</li>
          <li>Shortlist potential candidates with our help, based on your specific requirements, expertise, and experience.</li>
          <li>Conduct interviews with shortlisted candidates to evaluate their skills, communication abilities, and cultural fit for your project.</li>
          <li>Select your team by choosing the ideal dedicated developers or development team that best fits your project needs, and begin your journey to success.</li>
        </ol>
      ),
    },
    {
      question: "What our developers can do for you?",
      answer: (
        <ol>
          <li><b>Custom software development:</b> We create tailored software solutions to meet your business needs, including web and mobile applications as well as enterprise solutions.</li>
          <li><b>E-commerce development:</b> Our team specializes in building robust e-commerce platforms designed to elevate your online business and drive growth.</li>
          <li><b>Blockchain development:</b> We specialize in creating decentralized applications (DApps), smart contracts, and other blockchain-based solutions to meet your specific needs.</li>
          <li><b>UI/UX design:</b> We craft intuitive and engaging user interfaces that deliver an optimal user experience across all devices.</li>
          <li><b>Cloud computing:</b> Our developers excel in developing and deploying cloud-based solutions on leading platforms such as AWS, Azure, and Google Cloud.</li>
          <li><b>Maintenance and support:</b> Our dedicated team provides ongoing maintenance and support to keep your software solutions up-to-date and secure.</li>
        </ol>
      ),
    },
    {
      question: "Can I hire dedicated developer for hourly or project based tasks?",
      answer: (
        <ol>
          <li>Yes, you can hire dedicated developers for hourly or project-based tasks based on your business needs. We offer flexible engagement models tailored to meet your specific requirements.</li>
          <li>If you have a short-term project or need help with a specific task, you can choose our hourly engagement model. This flexible option lets you hire our developers for a set number of hours, ensuring you only pay for the actual time worked.</li>
          <li>For long-term projects or ongoing support, choose our project-based engagement model. This approach allows you to hire a dedicated team of developers who will focus exclusively on your project until completion. This model offers a cost-effective solution with enhanced flexibility and control over your project.</li>
          <li>At WebEarl, we recognize that every business has unique needs, which is why we offer customized engagement models tailored to your specific requirements. Contact us to discover how our flexible engagement options can help you achieve your goals and drive success.</li>
        </ol>
      ),
    },
    {
      question: "How much does it cost to hire developers?",
      answer: (
        <ol>
          <li>Determining the cost of hiring a developer depends on factors like the development platform, project type, design complexity, number of pages, features, and maintenance costs. Depending on your business needs, you can hire offshore developers on an hourly or fixed cost basis, providing greater flexibility and control over your project budget.</li>
        </ol>
      ),
    },
    {
      question: "Why hire dedicated developers?",
      answer: (
        <ol>
          <li>Hiring dedicated developers offers substantial benefits, including enhanced optimization, greater flexibility, cost-effectiveness, and higher output. Gain access to specialized skills, efficient project management, and rapid response to emergencies. With dedicated developers, you ensure your project meets the highest standards of quality and timeliness, while keeping control over your budget and resources. At WebEarl, our dedicated development team excels in delivering top-tier software solutions across various frameworks and technologies, providing the expertise needed to bring your project to life.</li>
        </ol>
      ),
    },
  ]

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-T6M8KRW"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

    

     
      <Header />

      {/* Page Banner */}
      {/* Portfolio Image Area */}
      

      {/* Hiring Process */}
      <div className="container">
        <div className="row my-5">
          {/* single-coutdown */}
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 single-count-item-mb">
            <div className="hiring-content-box">
              <span className="">1.</span>
              <img src="img/post-requirment.png" alt="" className="img-fluid" />
              <p className="mt-3 px-2">Post your project requirement</p>
            </div>
          </div>

          {/* single-coutdown */}
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 single-count-item-mb">
            <div className="hiring-content-box">
              <span className="">2.</span>
              <img src="img/service.png" alt="" />
              <p className="mt-3 px-2">Discuss project details with our technical team</p>
            </div>
          </div>

          {/* single-coutdown */}
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className="hiring-content-box">
              <span className="">3.</span>
              <img src="img/timeline.png" alt="" />
              <p className="mt-3 px-2">Select engagement model and timeline</p>
            </div>
          </div>

          {/* single-coutdown */}
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 margin-top-sb-30">
            <div className="hiring-content-box">
              <span className="">4.</span>
              <img src="img/coding.png" alt="" />
              <p className="mt-3 px-2">Add resource in your team and start coding</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Hiring Models */}
      <div className="about-counter-area">
        <div className="container">
          <div className="row">
            {/* section heading text */}
            <div className="col-xl-8 d-flex align-items-center">
              <div className="section-heading-2 section-heading-2-p-a about-counter-text">
                <h4>WHAT WE DO</h4>
                <h3>Our Hiring Models</h3>
                <h5 style={{ fontWeight: 600 }}>
                  We are a hub of talented and experienced mobile app and web developers, dedicated to delivering
                  exceptional development solutions.
                </h5>
                <ol className="mt-4">
                  <li>
                    We deploy top-notch agile teams to seamlessly define and execute your vision on-demand, delivering
                    flexible and high-quality solutions.
                  </li>
                  <li>
                    WebEarl boasts a team of highly experienced developers ready to bring your unique project idea to
                    life with best-in-class solutions Hiring our dedicated development team offers a cost-effective way
                    to leverage cutting-edge technology and enhance your business success.
                  </li>
                  <li>
                    Our dedicated developers provide end-to-end web and mobile app development solutions for startups
                    and enterprises globally. By hiring our highly qualified and experienced team, you gain access to
                    top talent who specialize in creating complex software solutions tailored to your business needs.
                    Enhance your project with expert developers and designers who deliver innovative, customized
                    solutions to drive your success and achieve your business goals.
                  </li>
                </ol>

                <div className="section-button">
                  <a href="/Quotation">Request quote</a>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="row">
                {/* single-coutdown */}
                <div className="col-xl-12 col-lg-6 col-md-6 col-sm-6 single-count-item-mb">
                  <div className="hiring-model-timeline">
                    <div className="d-flex align-items-center mb-3">
                      <img src="img/clock-icon.png" alt="" className="img-fluid" />
                      <span className="ms-3">Full Time</span>
                    </div>
                    <p>Hours Per Day</p>
                    <span>8 hrs/day</span>
                    <p className="text-right">Minimum Days</p>
                    <span className="d-flex justify-content-end">30 days</span>
                  </div>
                </div>

                {/* single-coutdown */}
                <div className="col-xl-12 col-lg-6 col-md-6 col-sm-6 single-count-item-mb">
                  <div className="hiring-model-timeline">
                    <div className="d-flex align-items-center mb-3">
                      <img src="img/clock-icon.png" alt="" className="img-fluid" />
                      <span className="ms-3">Part Time</span>
                    </div>
                    <p>Hours Per Day</p>
                    <span>4 hrs/day</span>
                    <p className="text-right">Minimum Days</p>
                    <span className="d-flex justify-content-end">30 days</span>
                  </div>
                </div>

                {/* single-coutdown */}
                <div className="col-xl-12 col-lg-6 col-md-6 col-sm-6 single-count-item-mb">
                  <div className="hiring-model-timeline">
                    <div className="d-flex align-items-center mb-3">
                      <img src="img/clock-icon.png" alt="" className="img-fluid" />
                      <span className="ms-3">Hourly</span>
                    </div>
                    <p>Hours Per Day</p>
                    <span>Flexible hrs/day</span>
                    <p className="text-right">Minimum Hours</p>
                    <span className="d-flex justify-content-end">100 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us */}
      <section className="">
        <div className="container">
          <div className="why-choose-us-header">
            <h4>Why Choose Us</h4>
            <h3>Here are some key reasons why our developers are the perfect choice for your project.</h3>
            <h5 className="mt-3" style={{ fontWeight: 600 }}>
              By hiring dedicated developers from WebEarl, {"you'll"} unlock numerous advantages that will turn your
              business ideas into robust and profitable software solutions.
            </h5>

            <div className="mt-5 pt-5 why-choose-us-content-right">
              <div className="why-choose-us-content">
                <h2>Dedicated Development Team</h2>
                <p>
                  Our team of developers is highly skilled and experienced in delivering top-notch business solutions
                  across a diverse range of frameworks and technologies.
                </p>
              </div>
            </div>

            <div className="mt-4 why-choose-us-content-left">
              <div className="why-choose-us-content">
                <h2>Flexible Engagement Models</h2>
                <p>
                  We recognize that every business has unique needs, which is why we offer flexible engagement and
                  hiring models tailored to meet your specific requirements.
                </p>
              </div>
            </div>

            <div className="mt-4 why-choose-us-content-right">
              <div className="why-choose-us-content">
                <h2>Time Zone Flexibility</h2>
                <p>
                  We are dedicated to operating within your time zone to ensure seamless communication and
                  collaboration, regardless of your location.
                </p>
              </div>
            </div>

            <div className="mt-4 why-choose-us-content-left">
              <div className="why-choose-us-content">
                <h2>On-Time Delivery</h2>
                <p>
                  By leveraging cutting-edge technologies and agile methodologies our team consistently delivers
                  projects on time with an impressive 95% success rate
                </p>
              </div>
            </div>

            <div className="mt-4 why-choose-us-content-right">
              <div className="why-choose-us-content">
                <h2>Cost-Effective Solutions</h2>
                <p>
                  We are committed to providing high-quality solutions at competitive rates to ensure our clients
                  receive the best value for their investment.
                </p>
              </div>
            </div>

            <div className="mt-4 why-choose-us-content-left">
              <div className="why-choose-us-content">
                <h2>Maintenance and Support</h2>
                <p>
                  Our dependable maintenance and support teams are available throughout every stage of development and
                  delivery ensuring a smooth and hassle-free experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking to Hire Dedicated Developers */}
      <section className="">
        <div className="container">
          <div className="looking-developer-section">
            <h3>Looking to Hire Dedicated Developers?</h3>
            <h5>
              WebEarl boasts a team of highly qualified and skilled designers and developers ready to help you plan and
              execute your project with precision and efficiency. Get started today and receive the expert support you
              need to ensure success.
            </h5>
            <a href="">TALK TO OUR EXPERT</a>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="my-5">
        <div className="container">
          <div className="faq-header text-center mb-4">
            <h4 className="faq-subtitle">Frequently Asked Questions</h4>
            <h3 className="faq-title">Common Questions Answered</h3>
          </div>

          <div className="accordion">
            {faqData.map((faq, idx) => (
              <div className="accordion-item" key={idx}>
                <div
                  className="accordion-button d-flex align-items-center justify-content-between"
                  style={{ cursor: "pointer", fontWeight: 600, fontSize: 22 }}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span>{faq.question}</span>
                  <span style={{ marginLeft: 16, fontSize: 20, transition: 'transform 0.2s', transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                <div
                  className="accordion-content"
                  style={{ display: openFaq === idx ? "block" : "none", background: "#fff", borderRadius: 8, marginTop: 0, padding: openFaq === idx ? "24px" : "0 24px", boxShadow: openFaq === idx ? "0 2px 12px rgba(0,0,0,0.06)" : "none" }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <div
        className="modal fade"
        id="requestQuoteModal"
        tabIndex={-1}
        aria-labelledby="requestQuoteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content px-5">
            <div className="mt-3 d-flex justify-content-center">
              <h5 className="callback-modal-title" id="callbackModalLabel">
                Request a Callback
              </h5>
            </div>
            <div className="modal-body">
              <form id="callbackForm" className="needs-validation" noValidate>
                <input type="hidden" name="access_key" value="eae59eb7-b97f-42ef-b91c-fe683c9e3d09" />
                <div className="mb-3">
                  <label htmlFor="callType" className="form-label">
                    Call Type :
                  </label>
                  <select className="form-select" id="callType" required>
                    <option value="">Select call type</option>
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                  </select>
                  <div className="invalid-feedback">Please select a call type.</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="callbackTime" className="form-label">
                    Time for Callback
                  </label>
                  <select className="form-select" id="callbackTime" required>
                    <option value="">Select time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                  <div className="invalid-feedback">Please select a time for the callback.</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="enquiryNature" className="form-label">
                    Nature of Enquiry
                  </label>
                  <select className="form-select" id="enquiryNature" required>
                    <option value="">Select nature of enquiry</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Service Inquiry">Service Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="invalid-feedback">Please select the nature of enquiry.</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter your full name"
                    required
                  />
                  <div className="invalid-feedback">Please enter your full name.</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="companyName" className="form-label">
                    Company Name
                  </label>
                  <input type="text" className="form-control" id="companyName" placeholder="Enter your company name" />
                </div>

                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    required
                  />
                  <div className="invalid-feedback">Please enter your phone number.</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="emailAddress" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailAddress"
                    placeholder="Enter your email address"
                    required
                  />
                  <div className="invalid-feedback">Please enter a valid email address.</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    placeholder="Enter your country name"
                    required
                  />
                  {/* <select className="form-select" id="country" required>
                    <option value="">Select your country</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="India">India</option>
                  </select> */}
                  <div className="invalid-feedback">Please select your country.</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <input type="text" className="form-control" id="state" placeholder="Enter your state name" required />
                  {/* <select className="form-select" id="state" required>
                    <option value="">Select your state</option>
                  </select> */}
                  <div className="invalid-feedback">Please select your state.</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" id="city" placeholder="Enter your city name" required />
                  <div className="invalid-feedback">Please select your city.</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="existingCustomer" className="form-label">
                    Are you an existing customer?
                  </label>
                  <select className="form-select" id="existingCustomer" required>
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  <div className="invalid-feedback">Please specify if you are an existing customer.</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="additionalInfo" className="form-label">
                    Additional Information
                  </label>
                  <textarea
                    className="form-control"
                    id="additionalInfo"
                    rows={3}
                    placeholder="Provide any additional details"
                  ></textarea>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit" className="callback-submit-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Chat icon */}
      <section className="messenger-chat">
        <div>
          <a href="https://www.facebook.com/messages/t/437017136395453" target="_blank" rel="noopener noreferrer">
            <img src="./img/messenger-logo.png" className="img-fluid" alt="Chatbot Icon" />
          </a>
        </div>
      </section>

      {/* Chat icon */}
      <section className="whatsapp-chat">
        <div>
          <a href="https://web.whatsapp.com/send?phone=919033251903" target="_blank" rel="noopener noreferrer">
            <img src="./img/WhatsApp.png" className="img-fluid" alt="Whatsapp Icon" />
          </a>
        </div>
      </section>
      <CallToAction/>
      <Footer />
    </>
  )
}
