'use client';

import React from 'react';
import { useFadeIn } from '@/hooks/useFadeIn';

export default function VideoSection() {
  const { ref, fadeClass } = useFadeIn<HTMLElement>();

  return (
    <section ref={ref} className={`video-section ${fadeClass}`}>
      <div className="container">
        <h2 className="section-title">สัมผัสพลังแห่ง GEF</h2>
        <div className="video-container">
          <iframe
            width="540"
            height="960"
            src="/media/video/a9-plus.mp4"
            title="A9 Plus Video"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
