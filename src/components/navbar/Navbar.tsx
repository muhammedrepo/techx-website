'use client'
import Link from 'next/link'
import Logo from '../Logo'
import { usePathname } from 'next/navigation'
import { menuItems } from '@/constants'
import { useState } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const navlinkWhite = pathname !== '/' && pathname !== '/news'

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  const toggleSubMenu = () => {
    setSubMenuIsOpen(!subMenuIsOpen)
  }

  return (
    <header className="header-wrap header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-sm-5 col-xl-2">
            <Logo />
          </div>
          <div className="col-xl-7 d-none d-xl-block">
            <div className={`main-menu ${navlinkWhite ? 'text-white' : ''}`}>
              <ul>
                {menuItems.map((menuItem, index) => (
                  <li key={index}>
                    {menuItem.subItems ? (
                      <>
                        <a href="#" className="has-arrow">
                          {menuItem.label} {menuItem.icon}
                        </a>
                        <ul className="sub-menu">
                          {menuItem.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link href={subItem.link}>{subItem.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link href={menuItem.link}>{menuItem.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 d-none d-sm-block pl-xl-0 text-right">
            <Link href="/contact" className="theme-btn">
              Consultancy <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="mobile-nav-bar d-block col-sm-1 col-6 d-xl-none">
            <div className="mobile-nav-wrap">
              <div id="hamburger" onClick={toggleMobileNav}>
                <i className="fal fa-bars"></i>
              </div>
              <div className={`mobile-nav ${isMobileNavOpen ? 'show' : ''}`}>
                <button
                  type="button"
                  className="close-nav"
                  onClick={toggleMobileNav}>
                  <i className="fal fa-times-circle"></i>
                </button>
                <nav className="sidebar-nav">
                  <ul className="metismenu" id="mobile-menu">
                    {menuItems.map((menuItem, index) => (
                      <li key={index}>
                        {menuItem.subItems ? (
                          <>
                            <a
                              href="#"
                              className="has-arrow"
                              onClick={toggleSubMenu}>
                              {menuItem.label}
                            </a>

                            <ul className="sub-menu">
                              {menuItem.subItems.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  {subMenuIsOpen && (
                                    <Link href={subItem.link}>
                                      {subItem.label}
                                    </Link>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link href={menuItem.link}>{menuItem.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="action-bar">
                  <Link href="mailto:modinatheme@gmail.com">
                    <i className="fal fa-envelope-open-text"></i>
                    info@webmail.com
                  </Link>
                  <Link href="tel:123-456-7890">
                    <i className="fal fa-phone"></i>987-098-098-09
                  </Link>
                  <Link href="/contact" className="d-btn theme-btn black">
                    Consultancy
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`overlay ${isMobileNavOpen ? 'active' : ''}`}
              onClick={toggleMobileNav}></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
