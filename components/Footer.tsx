'use client';

import React from 'react';

export default function Footer() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div className="footer-col brand-col">
          <h2 className="footer-logo">GEF</h2>
          <p>
            นวัตกรรมเครื่องจักรสำหรับอุตสาหกรรมเครื่องดื่มระดับพรีเมียม ที่ผู้เชี่ยวชาญไว้วางใจ
          </p>
          <div className="social-links">
            <a
              href="https://www.facebook.com/GEFThailand/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://page.line.me/992smxye?openQrModal=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Line"
            >
              <i className="fab fa-line"></i>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3>เกี่ยวกับเรา</h3>
          <ul>
            <li>
              <a
                href="#about-company"
                onClick={(e) => handleAnchorClick(e, '#about-company')}
              >
                ประวัติบริษัท
              </a>
            </li>
            <li>
              <a
                href="#locations"
                onClick={(e) => handleAnchorClick(e, '#locations')}
              >
                สาขาทั้งหมด
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                onClick={(e) => handleAnchorClick(e, '#reviews')}
              >
                ความไว้วางใจจากลูกค้า
              </a>
            </li>
            <li>
              <a
                href="#news"
                onClick={(e) => handleAnchorClick(e, '#news')}
              >
                ข่าวสารและกิจกรรม
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>สินค้า</h3>
          <ul>
            <li>
              <a
                href="#product-k9pro"
                onClick={(e) => handleAnchorClick(e, '#product-k9pro')}
              >
                Huracan K9 PRO
              </a>
            </li>
            <li>
              <a
                href="#product-a9plus"
                onClick={(e) => handleAnchorClick(e, '#product-a9plus')}
              >
                GEF A9 PLUS
              </a>
            </li>
            <li>
              <a
                href="#product-s9pro"
                onClick={(e) => handleAnchorClick(e, '#product-s9pro')}
              >
                GEF S9 PRO
              </a>
            </li>
            <li>
              <a
                href="#product-v3pro"
                onClick={(e) => handleAnchorClick(e, '#product-v3pro')}
              >
                GEF V3 PRO
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h3>ติดต่อเรา</h3>
          <p>
            <i className="fas fa-clock"></i> จันทร์ - อาทิตย์: 08:30 - 18:00 น.
          </p>
          <p>
            <i className="fas fa-envelope"></i> homglaigroup@gmail.com
          </p>
          <p>
            <i className="fas fa-phone"></i> 061-771-1139
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> บริษัทหอมไกล ชลบุรี จำกัด 1/47 ม.3 ต.เสม็ด อ.เมืองชลบุรี ชลบุรี 20000
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 GEF · บริษัท หอมไกล ชลบุรี จำกัด · All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
