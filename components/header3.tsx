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
    <header id="home" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      width: '100%',
      transition: 'all 0.3s ease-in-out',
      backgroundColor: isSticky ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      boxShadow: isSticky ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'
    }}>
      <div className="main-navigation" style={{
        background: isSticky ? 'linear-gradient(270deg, #00b0e7 0%, #75f389 100%)' : 'transparent',
        transition: 'all 0.3s ease-in-out'
      }}>
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
                <div className="main-menu f-right" style={{ marginRight: '180px' }}>
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
                {/* mobile menu */}
                <div className="mobile-menu"></div>
                
                {/* Get Quote Buttons - Only visible on screens ≥ 1080px */}
                {isLargeScreen && (
                  <div className="navbar-new-btn" style={{
                    position: 'absolute',
                    right: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    gap: '5px',
                    zIndex: 1002
                  }}>
                  <button className="navbar-new-btn-button" style={{
                    background: '#fff',
                    color: '#00b0e7',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '8px 15px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}>
                    <Link href="/Quotation" style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      display: 'block',
                      width: '100%',
                      height: '100%'
                    }}>Get Quote</Link>
                  </button>
                  <button className="navbar-new-btn-button-2" style={{
                    background: '#00b0e7',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Link href="/Quotation" style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      marginTop: '10px',
                      lineHeight: 1
                    }}>{'>'}</Link>
                  </button>
                </div>
                )}
                
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