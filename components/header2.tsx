"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import "../styles/all.css"

import { FaChevronDown } from "react-icons/fa"

export default function Header2() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState('')
  const [isLargeScreen, setIsLargeScreen] = useState(true)
  const [isSticky, setIsSticky] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Check screen size on mount and window resize
    const checkScreenSize = () => {
      const isLarge = window.innerWidth >= 1080
      setIsLargeScreen(isLarge)
      if (isLarge) {
        setIsMenuOpen(false)
        document.body.style.overflow = ''
      }
    }
    
    // Initial check
    checkScreenSize()
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : ''
  }

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? '' : name)
  }

  useEffect(() => {
    setActiveLink(pathname)
  }, [pathname])

  return (
    <header id="home">
      <div className={`main-navigation${isSticky ? ' sticky' : ''}`}>
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
                <button 
                  className="menu-toggle" 
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  ☰
                </button>
                <div 
                  className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} 
                  onClick={toggleMenu}
                />
                <nav id="mobile-menu" className={isMenuOpen ? 'active' : ''}>
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
                    <li className={`has-dropdown ${activeDropdown === 'services' ? 'active' : ''}`}>
                      <Link 
                        className={`${activeLink.startsWith('/services') ? 'current' : ''} dropdown-toggle`} 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault()
                          toggleDropdown('services')
                        }}
                      >
                        {'Services '}
                        <FaChevronDown className="dropdown-icon" />
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
                          <Link href="/game-development">
                            Game Development
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
              {/* Mobile menu styles */}
              <style jsx>{`
                @media (max-width: 1079px) {
                  .menu-toggle {
                    display: block !important;
                  }
                  .menu-overlay.active {
                    display: block !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                  }
                  #mobile-menu {
                    position: fixed;
                    top: 0;
                    right: -300px;
                    width: 280px;
                    height: 100%;
                    background: #fff;
                    z-index: 1001;
                    padding: 20px;
                    overflow-y: auto;
                    box-shadow: -2px 0 10px rgba(0,0,0,0.1);
                    transition: right 0.3s ease-in-out;
                  }
                  #mobile-menu.active {
                    right: 0;
                  }
                  #mobile-menu ul {
                    flex-direction: column !important;
                    align-items: flex-start !important;
                    padding: 20px 0 !important;
                  }
                  #mobile-menu li {
                    width: 100%;
                    margin: 10px 0;
                  }
                  #mobile-menu a {
                    color: #333 !important;
                    padding: 10px 0 !important;
                    display: block;
                    width: 100%;
                  }
                  .dropdown {
                    position: static !important;
                    display: none !important;
                    padding-left: 15px !important;
                    box-shadow: none !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                  }
                  .dropdown.active {
                    display: block !important;
                  }
                }
              `}</style>
              
              {/* Get Quote Buttons */}
              <div className="navbar-new-btn">
                <button className="navbar-new-btn-button">
                  <Link href="/Quotation">Get Quote</Link>
                </button>
                <button className="navbar-new-btn-button-2">
                  <Link href="/Quotation">{'>'}</Link>
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