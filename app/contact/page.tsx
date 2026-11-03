import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './contact.css';

export const metadata: Metadata = {
  title: 'ติดต่อ GEF | Contact',
  description: 'ช่องทางการติดต่อ บริษัท หอมไกล ชลบุรี จำกัด (GEF Thailand Co., Ltd.)',
};

export default function ContactPage() {
  return (
    <>
      {/* Navbar สำหรับหน้า Contact */}
      <Navbar isContactPage />

      <main className="contact-page">
        <div className="container contact-layout">
          {/* ช่องทางการติดต่อ */}
          <section className="contact-left" aria-labelledby="contact-info-title">
            <div className="contact-panel contact-info-panel">
              <div className="section-kicker">CHANNELS</div>
              <h1 id="contact-info-title">ช่องทางติดต่อ</h1>
              <h2>บริษัทหอมไกล ชลบุรี จำกัด</h2>
              <p className="company-name">GEF Thailand Co., Ltd.</p>

              <div className="contact-list">
                <a className="contact-item" href="tel:0617711139">
                  <span className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </span>
                  <span>
                    <small>โทรศัพท์</small>
                    <strong>061 771 1139</strong>
                  </span>
                </a>

                <a className="contact-item" href="mailto:homglaigroup@gmail.com">
                  <span className="contact-icon">
                    <i className="fas fa-at"></i>
                  </span>
                  <span>
                    <small>อีเมล</small>
                    <strong>homglaigroup@gmail.com</strong>
                  </span>
                </a>

                <a
                  className="contact-item"
                  href="https://page.line.me/992smxye?openQrModal=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-icon">
                    <i className="fab fa-line"></i>
                  </span>
                  <span>
                    <small>LINE OFFICIAL</small>
                    <strong>@992smxye</strong>
                  </span>
                </a>

                <a
                  className="contact-item"
                  href="https://www.facebook.com/GEFThailand/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-icon">
                    <i className="fab fa-facebook-f"></i>
                  </span>
                  <span>
                    <small>FACEBOOK</small>
                    <strong>GEF Thailand</strong>
                  </span>
                </a>

                <a
                  className="contact-item contact-item-address"
                  href="https://maps.app.goo.gl/Dox42EzqwnMx67pZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="เปิดแผนที่ Google Maps ของ GEF"
                >
                  <span className="contact-icon">
                    <i className="fas fa-location-dot"></i>
                  </span>
                  <span>
                    <small>ที่ตั้ง</small>
                    <strong>
                      1/47 ม.3 ต.เสม็ด อ.เมืองชลบุรี จ.ชลบุรี
                    </strong>
                  </span>
                </a>
              </div>
            </div>

            <div className="opening-hours">
              <div className="section-kicker">OPEN HOURS</div>
              <p>จันทร์ – อาทิตย์ 08:30 – 18:00 น.</p>
            </div>
          </section>

          {/* ฟอร์มส่งข้อความ */}
          <section
            className="contact-panel contact-form-panel"
            aria-labelledby="message-title"
          >
            <div className="section-kicker">SEND MESSAGE</div>
            <h2 id="message-title">ฝากข้อความถึงเรา</h2>

            <form
              className="contact-form"
              action="mailto:homglaigroup@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="form-field form-field-full">
                <label htmlFor="full-name">
                  ชื่อ - นามสกุล <span>*</span>
                </label>
                <input id="full-name" name="ชื่อ-นามสกุล" type="text" required />
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="phone">
                    เบอร์โทร <span>*</span>
                  </label>
                  <input id="phone" name="เบอร์โทร" type="tel" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">อีเมล</label>
                  <input id="email" name="อีเมล" type="email" />
                </div>
              </div>

              <div className="form-field form-field-full">
                <label htmlFor="message">
                  ข้อความ <span>*</span>
                </label>
                <textarea
                  id="message"
                  name="ข้อความ"
                  rows={7}
                  required
                ></textarea>
              </div>

              <button className="contact-submit" type="submit">
                <i className="fas fa-paper-plane"></i>
                ส่งข้อความ
              </button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
