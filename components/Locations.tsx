'use client';

import React from 'react';
import { useFadeIn } from '@/hooks/useFadeIn';

export default function Locations() {
  const { ref, fadeClass } = useFadeIn<HTMLElement>();

  return (
    <section ref={ref} id="locations" className={`locations ${fadeClass}`}>
      <div className="container">
        <div className="location-header">
          <h2>เลือกสาขาใกล้บ้านคุณ</h2>
        </div>

        <div className="locations-grid">
          {/* Branch 1: Chonburi */}
          <div className="location-card">
            <div className="location-info">
              <h3>สาขาชลบุรี (สำนักงานใหญ่)</h3>
              <p>
                <i className="fas fa-map-marker-alt"></i> บริษัทหอมไกล ชลบุรี จำกัด 1/47 ม.3 ต.เสม็ด อ.เมืองชลบุรี ชลบุรี 20000
              </p>
              <p>
                <i className="fas fa-phone"></i> 061-771-1139
              </p>
              <p>
                <i className="fas fa-clock"></i> จันทร์-อาทิตย์ 8:30-18:00
              </p>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.472486818005!2d100.94368217484785!3d13.320858887027574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d4adb40decf41%3A0xedf6b9d2ca47354a!2z4Liu4Li04Lil4Lil4LmM4LiE4Lit4Lif4Lif4LmMIOC4quC4suC4guC4suC4iuC4peC4muC4uOC4o-C4tSAoIOC4o-C5ieC4suC4meC4q-C4reC4oeC5hOC4geC4pSDguIrguKXguJrguLjguKPguLUgKQ!5e0!3m2!1sen!2sth!4v1785304445216!5m2!1sen!2sth"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

          {/* Branch 2: Pattaya */}
          <div className="location-card">
            <div className="location-info">
              <h3>สาขาพัทยา</h3>
              <p>
                <i className="fas fa-map-marker-alt"></i> เมืองพัทยา อ.บางละมุง ชลบุรี 20150
              </p>
              <p>
                <i className="fas fa-phone"></i> 062-259-6950
              </p>
              <p>
                <i className="fas fa-clock"></i> จันทร์-เสาร์ 08:30-18:00 | หยุดวันอาทิตย์
              </p>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.782481372273!2d100.8955107748405!3d12.921697387389106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310295425b1fb4fb%3A0xff858caf711358b1!2z4Lij4LmJ4Liy4LiZ4Lir4Lit4Lih4LmE4LiB4Lil4Lie4Lix4LiX4Lii4LiyIChIaWxsa29mZiBIb21nbGFpIFBhdHRheWEp!5e0!3m2!1sen!2sth!4v1785305918090!5m2!1sen!2sth"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
