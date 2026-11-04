'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface SlideData {
  videoSrc: string;
  videoType: string;
  title: string;
  subtitle: string;
  btnLink: string;
  preload?: 'none' | 'metadata' | 'auto';
}

const slidesData: SlideData[] = [
  {
    videoSrc: '/media/video/SMT01.mp4',
    videoType: 'video/mp4',
    title: 'THE FUTURE OF COMMERCIAL BLENDERS',
    subtitle: 'สัมผัสประสบการณ์การปั่นระดับพรีเมียม ด้วยพลังและเทคโนโลยีล้ำสมัยจาก GEF',
    btnLink: '#product-a9plus',
    preload: 'auto',
  },
  {
    videoSrc: '/media/video/huracan.mov',
    videoType: 'video/mp4',
    title: 'Huracan K9 PRO',
    subtitle: 'พลัง 1,500 - 2,000W เงียบกว่า ทนทานกว่า ตอบโจทย์ทุกธุรกิจเครื่องดื่ม',
    btnLink: '#product-k9pro',
    preload: 'metadata', // Don't download all 64MB at once until played
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  }, []);

  // Interval timer for 12 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 12000);

    return () => clearInterval(timer);
  }, [nextSlide, currentSlide]);

  // Manage video play/pause based on active slide
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === currentSlide) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Auto-play was prevented
          });
        }
      } else {
        video.pause();
      }
    });
  }, [currentSlide]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    <header id="home" className="hero">
      <div className="hero-carousel">
        {slidesData.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`slide ${isActive ? 'active' : ''}`}
            >
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                autoPlay={isActive}
                muted
                loop
                playsInline
                preload={slide.preload || 'metadata'}
                className="hero-media"
              >
                <source src={slide.videoSrc} type={slide.videoType} />
              </video>
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <a
                  href={slide.btnLink}
                  className="btn btn-primary"
                  onClick={(e) => handleLinkClick(e, slide.btnLink)}
                >
                  รายละเอียดเพิ่มเติม
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="carousel-controls">
        <button id="prev-slide" onClick={prevSlide} aria-label="Previous Slide">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button id="next-slide" onClick={nextSlide} aria-label="Next Slide">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </header>
  );
}
