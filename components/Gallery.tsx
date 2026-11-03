'use client';

import React from 'react';
import { useFadeIn } from '@/hooks/useFadeIn';

export default function Gallery() {
  const { ref, fadeClass } = useFadeIn<HTMLElement>();

  return (
    <section ref={ref} id="reviews" className={`gallery ${fadeClass}`}>
      <div className="container">
        <h2 className="section-title">ความไว้วางใจจากลูกค้า</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img
              src="/media/image/196CCC7C-DE51-40F7-8FE0-A8A8CFC6867A.jpg"
              alt="Gallery 1"
            />
          </div>
          <div className="gallery-item">
            <img
              src="/media/image/4C62E4EF-858E-4EB6-ACBF-0D9BD97AEB7D.jpg"
              alt="Gallery 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
