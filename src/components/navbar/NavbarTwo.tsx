'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import Logo from '../Logo'
import { menuItems } from '@/constants'

const Navbar = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="header-wrap header-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-sm-5 col-xl-2">
            <Logo />
          </div>
          <div className="col-xl-7 d-none d-xl-block">
            <div className="main-menu">
              <ul>
                {menuItems.map((menuItem, index) => (
                  <li key={index}>
                    {menuItem.subItems ? (
                      <>
                        <button onClick={toggleSubMenu} className="menu-button">
                          {menuItem.label} {menuItem.icon}
                        </button>
                        <Transition
                          show={subMenuOpen}
                          enter="transition duration-300 ease-out"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="transition duration-200 ease-in"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95">
                          <ul className="sub-menu">
                            {menuItem.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a href={subItem.link}>{subItem.label}</a>
                              </li>
                            ))}
                          </ul>
                        </Transition>
                      </>
                    ) : (
                      <a href={menuItem.link}>{menuItem.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 d-none d-sm-block pl-xl-0 text-right">
            <a href="contact.html" className="theme-btn">
              Consultancy <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="mobile-nav-bar d-block col-sm-1 col-6 d-xl-none">
            <div className="mobile-nav-wrap">
              <button onClick={toggleMobileMenu} id="hamburger">
                <i className="fal fa-bars"></i>
              </button>
              <Transition
                show={mobileMenuOpen}
                enter="transition duration-300 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition duration-200 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <div className="mobile-nav">
                  <button
                    type="button"
                    className="close-nav"
                    onClick={toggleMobileMenu}>
                    <i className="fal fa-times-circle"></i>
                  </button>
                  <nav className="sidebar-nav">
                    <ul className="metismenu" id="mobile-menu">
                      {menuItems.map((menuItem, index) => (
                        <li key={index}>
                          {menuItem.subItems ? (
                            <>
                              <button
                                onClick={toggleSubMenu}
                                className="menu-button">
                                {menuItem.label}
                              </button>
                              <Transition
                                show={subMenuOpen}
                                enter="transition duration-300 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="transition duration-200 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <ul className="sub-menu">
                                  {menuItem.subItems.map(
                                    (subItem, subIndex) => (
                                      <li key={subIndex}>
                                        <a href={subItem.link}>
                                          {subItem.label}
                                        </a>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </Transition>
                            </>
                          ) : (
                            <a href={menuItem.link}>{menuItem.label}</a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <div className="action-bar">
                    <a href="mailto:modinatheme@gmail.com">
                      <i className="fal fa-envelope-open-text"></i>
                      info@webmail.com
                    </a>
                    <a href="tel:123-456-7890">
                      <i className="fal fa-phone"></i>987-098-098-09
                    </a>
                    <a href="contact.html" className="d-btn theme-btn black">
                      Consultancy
                    </a>
                  </div>
                </div>
              </Transition>
            </div>
            <div
              className={`overlay ${mobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
