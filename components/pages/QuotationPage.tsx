"use client"

import { useEffect } from "react"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaBehance, FaDribbble, FaPinterest } from "react-icons/fa";
import Header from '../header';
import Footer from '../footer';
import "../styles/all.css"

export default function QuotationPage() {
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

    // Form validation and submission
    const callbackForm = document.getElementById("callbackForm")
    if (callbackForm) {
      callbackForm.addEventListener("submit", function (e) {
        e.preventDefault() // Prevent form from submitting normally

        const form = this as HTMLFormElement
        const formControls = form.querySelectorAll(".form-control, .form-select")

        let isValid = true

        // Reset all previous validation states
        formControls.forEach((control) => {
          control.classList.remove("is-invalid")
          control.classList.add("is-valid")
        })

        // Validate each field
        formControls.forEach((control) => {
          const input = control as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
          if (control.hasAttribute("required") && !input.value.trim()) {
            isValid = false
            control.classList.add("is-invalid")
          }
        })

        // Validate email field separately for format
        const emailField = document.getElementById("emailAddress") as HTMLInputElement
        if (emailField?.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
          isValid = false
          emailField.classList.add("is-invalid")
        }

        // Validate phone number field for exactly 10 digits
        const phoneField = document.getElementById("phoneNumber") as HTMLInputElement
        if (phoneField?.value && !/^\d{10}$/.test(phoneField.value)) {
          isValid = false
          phoneField.classList.add("is-invalid")
        }

        if (isValid) {
          // Create an object to hold form data
          const formData = {
            access_key: "eae59eb7-b97f-42ef-b91c-fe683c9e3d09", // your Web3Forms access key
            subject: "Request for Quotation",
            from_name: (document.getElementById("fullName") as HTMLInputElement)?.value,
            email: (document.getElementById("emailAddress") as HTMLInputElement)?.value,
            message: `
              Call Type: ${(document.getElementById("callType") as HTMLSelectElement)?.value}
              Time for Callback: ${(document.getElementById("callbackTime") as HTMLSelectElement)?.value}
              Nature of Enquiry: ${(document.getElementById("enquiryNature") as HTMLSelectElement)?.value}
              Full Name: ${(document.getElementById("fullName") as HTMLInputElement)?.value}
              Company Name: ${(document.getElementById("companyName") as HTMLInputElement)?.value || "N/A"}
              Phone Number: ${(document.getElementById("phoneNumber") as HTMLInputElement)?.value}
              Country: ${(document.getElementById("country") as HTMLInputElement)?.value}
              State: ${(document.getElementById("state") as HTMLInputElement)?.value}
              City: ${(document.getElementById("city") as HTMLInputElement)?.value}
              Existing Customer: ${(document.getElementById("existingCustomer") as HTMLSelectElement)?.value}
              Additional Information: ${(document.getElementById("additionalInfo") as HTMLTextAreaElement)?.value || "N/A"}
          `,
          }

          // Send the form data using Fetch API
          fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((result) => {
              if (result.success) {
                alert("Your request has been submitted successfully!")
                form.reset() // Clear the form
                form.querySelectorAll(".is-valid").forEach((control) => {
                  control.classList.remove("is-valid") // Reset validation states
                })
              } else {
                alert("There was an error submitting your request. Please try again.")
              }
            })
            .catch((error) => {
              alert("There was an error submitting your request. Please try again.")
            })
        }
      })
    }
  }, [])

  return (
    <>
      

      <Header />
      <section className="mp-5 pt-0 mb-5">

        <div className="container">
          <div className="request-form-box row">
            <div className="col-8">
              <div className="request-form-content-box">
                <h3 className="mb-5 mt-5">Request A Quotation</h3>
                <form id="callbackForm" className="needs-validation" noValidate>
                  <input type="hidden" name="access_key" value="eae59eb7-b97f-42ef-b91c-fe683c9e3d09" />
                  <div className="row">
                    <div className="col-6">
                      {/* Full Name */}
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
                    </div>
                    <div className="col-6">
                      {/* Company Name */}
                      <div className="mb-3">
                        <label htmlFor="companyName" className="form-label">
                          Company Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="companyName"
                          placeholder="Enter your company name"
                        />
                        <div className="invalid-feedback">Please enter your company name.</div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      {/* Email Address */}
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
                    </div>
                    <div className="col-6">
                      {/* Phone Number */}
                      <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phoneNumber"
                          placeholder="Enter your phone number"
                          pattern="\d{10}"
                          required
                        />
                        <div className="invalid-feedback">Please enter a valid 10-digit phone number.</div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      {/* Call Type */}
                      <div className="mb-3">
                        <label htmlFor="callType" className="form-label">
                          Call Type
                        </label>
                        <select className="form-select" id="callType" required>
                          <option value="">Select call type</option>
                          <option value="Sales">Sales</option>
                          <option value="Support">Support</option>
                        </select>
                        <div className="invalid-feedback">Please select a call type.</div>
                      </div>
                    </div>
                    <div className="col-6">
                      {/* Time for Callback */}
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
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      {/* Nature of Enquiry */}
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
                    </div>
                    <div className="col-6">
                      {/* Country */}
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
                        <div className="invalid-feedback">Please enter your country name.</div>
                      </div>
                    </div>
                    <div className="col-6">
                      {/* State */}
                      <div className="mb-3">
                        <label htmlFor="state" className="form-label">
                          State
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="state"
                          placeholder="Enter your state name"
                          required
                        />
                        <div className="invalid-feedback">Please enter your state name.</div>
                      </div>
                    </div>
                    <div className="col-6">
                      {/* City */}
                      <div className="mb-3">
                        <label htmlFor="city" className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          placeholder="Enter your city name"
                          required
                        />
                        <div className="invalid-feedback">Please enter your city name.</div>
                      </div>
                    </div>
                  </div>

                  {/* Are you an existing customer? */}
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

                  {/* Additional Information */}
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
                    <div className="invalid-feedback">Please provide additional information.</div>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button type="submit" className="callback-submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-4">
              <div className="request-form-text">
                <div className="quotation-quote">
                  <img src="img/client/qoute.png" alt="" />
                </div>
                <h4>Please do not hesitate to send us a message.</h4>
                <h5>{"Let's Make Your IT Vision a Reality – Get a Quote Now!"}</h5>
                <div className="mb-4">
                  
                  <div>
                    <h6>Office</h6>
                    <p>22 Cradle, EDII,</p>
                    <p>Near Bhat Circle</p>
                    <p>Gandhinagar - Ahmedabad Highway</p>
                    <p>Ahmedabad, Gujarat</p>
                    <p>India - 380058</p>
                  </div>
                </div>
                <div className="mb-4">
                  
                  <div>
                    <h6>Email Us</h6>
                    <p className="d-flex">
                      <b className="">Sales </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <span className="">sales.webearl@gmail.com</span>
                    </p>
                    <p className="d-flex ">
                      <b>Support </b> &nbsp;&nbsp;&nbsp; <span>info@webearl.com, support@webearl.com</span>
                    </p>
                    <p className="d-flex ">
                      <b>Career </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>career@webearl.com</span>
                    </p>
                  </div>
                </div>
                <div>
              
                  <div>
                    <h6>Join Our Community</h6>
                    <div className="social" style={{ marginTop: 10 }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        <div style={{ display: "flex", gap: 18 }}>
                          <a className="footer-socials" href="https://www.facebook.com/webearltechnologiespvtltd" target="_blank" rel="noopener noreferrer"><FaFacebook size={28} color="#000" /></a>
                          <a className="footer-socials" href="https://www.instagram.com/webearltechnologies/" target="_blank" rel="noopener noreferrer"><FaInstagram size={28} color="#000" /></a>
                          <a className="footer-socials" href="https://twitter.com/WebEarl" target="_blank" rel="noopener noreferrer"><FaTwitter size={28} color="#000" /></a>
                          <a className="footer-socials" href="https://www.youtube.com/channel/UCLIyO2okxv_EzZ9wOMqiv0A" target="_blank" rel="noopener noreferrer"><FaYoutube size={28} color="#000" /></a>
                        </div>
                        <div style={{ display: "flex", gap: 18 }}>
                          <a className="footer-socials" href="https://www.linkedin.com/company/webearl-technologies" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} color="#000" /></a>
                          <a className="footer-socials" href="https://www.behance.net/webearl" target="_blank" rel="noopener noreferrer"><FaBehance size={28} color="#000" /></a>
                          <a className="footer-socials" href="https://dribbble.com/Webearl" target="_blank" rel="noopener noreferrer"><FaDribbble size={28} color="#000" /></a>
                          <a className="footer-socials" href="https://in.pinterest.com/webearlitsolution/_created/" target="_blank" rel="noopener noreferrer"><FaPinterest size={28} color="#000" /></a>
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

      
      <Footer />

      
    </>
  )
}
