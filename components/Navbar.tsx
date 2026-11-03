'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavbarProps {
  isContactPage?: boolean;
}

export default function Navbar({ isContactPage = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [openBrand, setOpenBrand] = useState<string | null>(null);

  useEffect(() => {
    if (isContactPage) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isContactPage]);

  const smoothScrollTo = (targetId: string) => {
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      smoothScrollTo(href);
      setMobileMenuOpen(false);
    }
  };

  const handleProductsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setProductsDropdownOpen(!productsDropdownOpen);
    smoothScrollTo('#products');
  };

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>, brand: string) => {
    e.preventDefault();
    setOpenBrand(openBrand === brand ? null : brand);
  };

  if (isContactPage) {
    return (
      <nav className="navbar contact-navbar" id="navbar">
        <div className="container nav-container">
          <Link href="/" className="logo">
            <span className="logo-text">GEF</span>
          </Link>

          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
          </ul>

          <div
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            aria-label="เปิดเมนู"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <a
          href="#home"
          className="logo"
          onClick={(e) => handleAnchorClick(e, '#home')}
        >
          <span className="logo-text">GEF</span>
        </a>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" onClick={(e) => handleAnchorClick(e, '#home')}>
              Home
            </a>
          </li>

          <li className={`dropdown ${productsDropdownOpen ? 'open' : ''}`}>
            {/* ปุ่มเปิดเมนูสินค้า */}
            <a
              href="#products"
              className="products-trigger"
              aria-expanded={productsDropdownOpen}
              onClick={handleProductsClick}
            >
              สินค้า <i className="fas fa-chevron-down"></i>
            </a>

            {/* รายการแบรนด์ */}
            <ul className="dropdown-menu">
              {/* แบรนด์ HURACAN */}
              <li className={`dropdown-submenu ${openBrand === 'huracan' ? 'open' : ''}`}>
                <a
                  href="#"
                  className="brand-trigger"
                  aria-expanded={openBrand === 'huracan'}
                  onClick={(e) => handleBrandClick(e, 'huracan')}
                >
                  HURACAN <i className="fas fa-chevron-right"></i>
                </a>

                {/* รุ่นในแบรนด์ HURACAN */}
                <ul className="brand-menu">
                  <li>
                    <a
                      href="#product-k9pro"
                      onClick={(e) => handleAnchorClick(e, '#product-k9pro')}
                    >
                      K9 PRO
                    </a>
                  </li>
                </ul>
              </li>

              {/* แบรนด์ GEF */}
              <li className={`dropdown-submenu ${openBrand === 'gef' ? 'open' : ''}`}>
                <a
                  href="#"
                  className="brand-trigger"
                  aria-expanded={openBrand === 'gef'}
                  onClick={(e) => handleBrandClick(e, 'gef')}
                >
                  GEF <i className="fas fa-chevron-right"></i>
                </a>

                {/* รุ่นในแบรนด์ GEF */}
                <ul className="brand-menu">
                  <li>
                    <a
                      href="#product-a9plus"
                      onClick={(e) => handleAnchorClick(e, '#product-a9plus')}
                    >
                      A9 PLUS
                    </a>
                    <a
                      href="#product-s9pro"
                      onClick={(e) => handleAnchorClick(e, '#product-s9pro')}
                    >
                      S9 PRO
                    </a>
                    <a
                      href="#product-v3pro"
                      onClick={(e) => handleAnchorClick(e, '#product-v3pro')}
                    >
                      V3 PRO
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              ติดต่อเรา
            </Link>
          </li>
        </ul>

        <div
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
