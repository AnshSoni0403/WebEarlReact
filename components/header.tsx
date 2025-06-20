"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import "../styles/all.css"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header id="home" style={{
      backgroundImage: "url('/img/navbg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      zIndex: 1
    }}>
      <div className="main-navigation">
        <div className="container">
          <div className="row">
            {/* logo-area */}
            <div className="col-xl-2 col-lg-3 col-md-3">
              <div className="logo-area">
                <Link href="/">
                  <Image src="/img/logo.png" alt="WebEarl" width={240} height={60} />
                </Link>
              </div>
            </div>
            {/* mainmenu-area */}
            <div className="col-xl-10 col-lg-9 col-md-9">
              <div className="main-menu f-right">
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <Link className="current" href="/">
                        home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    {/* dropdown menu-area */}
                    <li>
                      <Link href="#" onClick={(e) => e.preventDefault()}>
                        Services <i className="fas fa-angle-down"></i>
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <Link href="/web-application-development">Web Application Development</Link>
                        </li>
                        <li>
                          <Link href="/mobile-application-development">Mobile Application Development</Link>
                        </li>
                        <li>
                          <Link href="/ecommerce-development">E-Commerce Development</Link>
                        </li>
                        <li>
                          <Link href="/digital-marketing">Digital Marketing</Link>
                        </li>
                        <li>
                          <Link href="/internship">Internship/Training</Link>
                        </li>
                        <li>
                          <Link href="/crm-development">CRM Development</Link>
                        </li>
                        <li>
                          <Link href="/web-erp-development">Web ERP Development</Link>
                        </li>
                        <li>
                          <Link href="/prototype-development">Prototype Development</Link>
                        </li>
                        <li>
                          <Link href="/api-development">API Development</Link>
                        </li>
                        <li>
                          <Link href="/field-force-management">FieldFource Management</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/portfolio">portfolio</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact">contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* mobile menu */}
              <div className="mobile-menu"></div>
              
              {/* Get Quote Buttons */}
              <div className="navbar-new-btn">
                <button className="navbar-new-btn-button">
                  <Link href="/quotation">Get Quote</Link>
                </button>
                <button className="navbar-new-btn-button-2">
                  <Link href="/quotation">></Link>
                </button>
              </div>
              
              {/* Search */}
              {/* <div className="search-box-area">
                <div id="search" className={`fade ${isSearchOpen ? "open" : ""}`}>
                  <Link href="#" className="close-btn" onClick={() => setIsSearchOpen(false)}>
                    <em className="fa fa-times"></em>
                  </Link>
                  <input placeholder="what are you looking for?" id="searchbox" type="search" />
                </div>
                <div className="search-icon-area">
                  <Link href="#" onClick={() => setIsSearchOpen(true)}>
                    <i className="fa fa-search"></i>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
