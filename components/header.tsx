"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import "../styles/all.css"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    setActiveLink(pathname)
  }, [pathname])

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
              <div className="main-menu f-right" style={{ marginRight: '160px' }}>
                <nav id="mobile-menu">
                  <ul style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    margin: 0, 
                    padding: 0,
                    flexWrap: 'wrap',
                    justifyContent: 'flex-end'
                  }}>
                    <li>
                      <Link className={activeLink === '/' ? 'current' : ''} href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className={activeLink.startsWith('/about-us') ? 'current' : ''} href="/about-us">
                        About Us
                      </Link>
                    </li>
                    {/* dropdown menu-area */}
                    <li className="has-dropdown">
                      <Link 
                        className={`${activeLink.startsWith('/services') ? 'current' : ''} dropdown-toggle`} 
                        href="#" 
                        onClick={(e) => e.preventDefault()}
                      >
                        {'Services '}
                        <i className="fas fa-angle-down" />
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <Link href="/web-application-development">
                            Web Application Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/mobile-application-development">
                            Mobile Application Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/ecommerce-development">
                            E-Commerce Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/digital-marketing">
                            Digital Marketing
                          </Link>
                        </li>
                        <li>
                          <Link href="/internship">
                            {'Internship/Training'}
                          </Link>
                        </li>
                        <li>
                          <Link href="/crm-development">
                            {'CRM Development'}
                          </Link>
                        </li>
                        <li>
                          <Link href="/web-erp-development">
                            {'Web ERP Development'}
                          </Link>
                        </li>
                        <li>
                          <Link href="/prototype-development">
                            {'Prototype Development'}
                          </Link>
                        </li>
                        <li>
                          <Link href="/api-development">
                            {'API Development'}
                          </Link>
                        </li>
                        <li>
                          <Link href="/field-force-management">
                            Field Force Management
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link 
                        className={activeLink.startsWith('/portfolio') ? 'current' : ''} 
                        href="/portfolio"
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={activeLink.startsWith('/hiring') ? 'current' : ''}
                        href="hiring"
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        Hire Us <i className="fas fa-briefcase ml-1" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        className={activeLink.startsWith('/contact') ? 'current' : ''} 
                        href="/contact"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* mobile menu */}
              <div className="mobile-menu"></div>
              
              {/* Get Quote Buttons */}
              <div className="navbar-new-btn">
                <button className="navbar-new-btn-button">
                  <Link href="/Quotation">Get Quote</Link>
                </button>
                <button className="navbar-new-btn-button-2">
                  <Link href="/Quotation">></Link>
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
