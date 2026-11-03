'use client';

import React from 'react';
import { useFadeIn } from '@/hooks/useFadeIn';

export default function TrustBadges() {
  const { ref, fadeClass } = useFadeIn<HTMLDivElement>();

  return (
    <section className="trust-badges">
      <div ref={ref} className={`container badges-grid ${fadeClass}`}>
        <div className="badge-item">
          <i className="fas fa-truck-fast"></i>
          <h4>จัดส่งฟรี</h4>
          <p>เมื่อสั่งซื้อตามเงื่อนไข</p>
        </div>
        <div className="badge-item">
          <i className="fas fa-shield-halved"></i>
          <h4>รับประกัน 1 ปี</h4>
          <p>มั่นใจในคุณภาพและบริการ</p>
        </div>
        <div className="badge-item">
          <i className="fas fa-phone"></i>
          <h4>บริการหลังการขาย</h4>
          <p>พร้อมให้คำปรึกษาตลอด 24 ชม.</p>
        </div>
      </div>
    </section>
  );
}
