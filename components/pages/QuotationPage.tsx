"use client"

"use client"

"use client"

"use client"

import { useEffect, useState, FormEvent } from "react"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaBehance, FaDribbble, FaPinterest } from "react-icons/fa"
import { Country, State, City } from 'country-state-city'
import Header from '../header'
import Footer from '../footer'
import CallToAction from "../call-to-action"
import "../styles/all.css"

export default function QuotationPage() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  
  // Get all countries
  const countries = Country.getAllCountries();
  
  // Update states when country changes
  useEffect(() => {
    if (selectedCountry) {
      const countryStates = State.getStatesOfCountry(selectedCountry);
      setStates(countryStates);
      setSelectedState('');
      setCities([]);
    } else {
      setStates([]);
      setCities([]);
    }
  }, [selectedCountry]);
  
  // Update cities when state changes
  useEffect(() => {
    if (selectedCountry && selectedState) {
      const stateCities = City.getCitiesOfState(selectedCountry, selectedState);
      setCities(stateCities);
    } else {
      setCities([]);
    }
  }, [selectedCountry, selectedState]);
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
    const callbackForm = document.getElementById("callbackForm") as HTMLFormElement | null;
    
    if (callbackForm) {
      // Add phone number validation
      const phoneField = document.getElementById("phoneNumber") as HTMLInputElement | null;
      
      // Allow only numbers in phone field
      phoneField?.addEventListener('input', (e) => {
        const input = e.target as HTMLInputElement;
        input.value = input.value.replace(/\D/g, '').slice(0, 10);
      });
      
      // Handle form submission
      const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formControls = form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(".form-control, .form-select, textarea");
        let isValid = true;

        // Reset all previous validation states
        formControls.forEach((control) => {
          control.classList.remove("is-invalid");
          control.classList.remove("is-valid");
        });

        // Validate each required field
        formControls.forEach((control) => {
          if (control.hasAttribute("required") && !control.value.trim()) {
            isValid = false;
            control.classList.add("is-invalid");
          } else if (control.hasAttribute("required")) {
            control.classList.add("is-valid");
          }
        });

        // Validate email field format
        const emailField = form.querySelector<HTMLInputElement>("#emailAddress");
        if (emailField?.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
          isValid = false;
          emailField.classList.add("is-invalid");
        }
        
        // Validate phone number
        if (phoneField && (!phoneField.value || !/^\d{10}$/.test(phoneField.value))) {
          isValid = false;
          phoneField.classList.add("is-invalid");
          const errorMsg = phoneField.parentElement?.querySelector('.invalid-feedback') as HTMLElement;
          if (errorMsg) {
            errorMsg.textContent = 'Please enter a valid 10-digit phone number';
          }
        }

        if (!isValid) return;

        try {
          // Prepare form data
          const formData = new FormData(form);
          const formDataObj: Record<string, any> = {};
          
          // Convert FormData to plain object
          formData.forEach((value, key) => {
            formDataObj[key] = value;
          });
          
          // Add additional fields
          formDataObj['subject'] = 'Request for Quotation';
          formDataObj['message'] = `
            
            Additional Information: ${formDataObj['additionalInfo'] || 'N/A'}
          `;
          
          // Set the recipient email
          formDataObj['to_email'] = 'sindhav88@gmail.com';
          
          // Send the form data using Web3Forms
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formDataObj,
              access_key: "eae59eb7-b97f-42ef-b91c-fe683c9e3d09"
            }),
          });
          
          const result = await response.json();
          
          if (result.success) {
            alert("Your request has been submitted successfully!");
            form.reset();
            // Reset form state
            setSelectedCountry('');
            setSelectedState('');
            setStates([]);
            setCities([]);
            // Reset validation states
            form.querySelectorAll(".is-valid").forEach((control) => {
              control.classList.remove("is-valid");
            });
          } else {
            throw new Error(result.message || "Failed to submit form");
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("There was an error submitting your request. Please try again.");
        }
      };
      
      // Add submit event listener
      callbackForm.addEventListener('submit', handleSubmit);
      
      // Cleanup function
      return () => {
        callbackForm.removeEventListener('submit', handleSubmit);
      };
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
                          name="fullName"
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
                          name="companyName"
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
                          name="emailAddress"
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
                          name="phoneNumber"
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
                        <select className="form-select" id="callType" name="callType" required>
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
                        <select className="form-select" id="callbackTime" name="callbackTime" required>
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
                        <select className="form-select" id="enquiryNature" name="enquiryNature" required>
                          <option value="">Select nature of enquiry</option>
                          <option value="Product Inquiry">Product Inquiry</option>
                          <option value="Service Inquiry">Service Inquiry</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="invalid-feedback">Please select the nature of enquiry.</div>
                      </div>
                    </div>
                    <div className="col-6">
                      {/* Are you an existing customer? */}
                      <div className="mb-3">
                        <label htmlFor="existingCustomer" className="form-label">
                          Are you an existing customer?
                        </label>
                        <select className="form-select" id="existingCustomer" name="existingCustomer" required>
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                        <div className="invalid-feedback">Please specify if you are an existing customer.</div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      {/* Country */}
                      <div className="mb-3">
                        <label htmlFor="country" className="form-label">
                          Country
                        </label>
                        <select 
                          className="form-select" 
                          id="country" 
                          name="country"
                          value={selectedCountry}
                          onChange={(e) => setSelectedCountry(e.target.value)}
                          required
                        >
                          <option value="">Select Country</option>
                          {countries.map((country) => (
                            <option key={country.isoCode} value={country.isoCode}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                        <div className="invalid-feedback">Please select your country.</div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      {/* State */}
                      <div className="mb-3">
                        <label htmlFor="state" className="form-label">
                          State
                        </label>
                        <select 
                          className="form-select" 
                          id="state" 
                          name="state"
                          value={selectedState}
                          onChange={(e) => setSelectedState(e.target.value)}
                          disabled={!selectedCountry}
                          required
                        >
                          <option value="">Select State</option>
                          {states.map((state) => (
                            <option key={state.isoCode} value={state.isoCode}>
                              {state.name}
                            </option>
                          ))}
                        </select>
                        <div className="invalid-feedback">Please select your state.</div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      {/* City */}
                      <div className="mb-3">
                        <label htmlFor="city" className="form-label">
                          City
                        </label>
                        <select 
                          className="form-select" 
                          id="city"
                          name="city"
                          disabled={!selectedState}
                          required
                        >
                          <option value="">Select City</option>
                          {cities.map((city) => (
                            <option key={city.name} value={city.name}>
                              {city.name}
                            </option>
                          ))}
                        </select>
                        <div className="invalid-feedback">Please select your city.</div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="mb-3">
                    <label htmlFor="additionalInfo" className="form-label">
                      Additional Information
                    </label>
                    <textarea
                      className="form-control"
                      id="additionalInfo"
                      name="additionalInfo"
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
                  
                  <div style={{marginTop: "38px"}}>
                    <h6>Office</h6>
                    <p>11 Cradle, EDII,</p>
                    <p>Near Bhat Circle</p>
                    <p>Gandhinagar - Ahmedabad Highway</p>
                    <p>Ahmedabad, Gujarat</p>
                    <p>India - 380058</p>
                  </div>
                </div>
                <div className="mb-4">
                  
                  <div style={{marginTop: "38px"}}  >
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
              
                  <div style={{marginTop: "38px"}}>
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

      <CallToAction />
      <Footer />

      
    </>
  )
}
