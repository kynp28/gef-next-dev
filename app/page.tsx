'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import ProductFeatures from '@/components/ProductFeatures';
import ProductModal from '@/components/ProductModal';
import About from '@/components/About';
import TrustBadges from '@/components/TrustBadges';
import VideoSection from '@/components/VideoSection';
import Locations from '@/components/Locations';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { ProductKey } from '@/lib/products';

export default function HomePage() {
  const [activeModalKey, setActiveModalKey] = useState<ProductKey | null>(null);

  const handleOpenModal = (key: ProductKey) => {
    setActiveModalKey(key);
  };

  const handleCloseModal = () => {
    setActiveModalKey(null);
  };

  return (
    <main>
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <HeroCarousel />

      {/* Product Detail Modal */}
      <ProductModal
        activeKey={activeModalKey}
        onClose={handleCloseModal}
      />

      {/* 3. Feature Highlight Sections */}
      <ProductFeatures onOpenModal={handleOpenModal} />

      {/* 4. About Us */}
      <About />

      {/* 5. Trust Badges */}
      <TrustBadges />

      {/* 6. Video Section */}
      <VideoSection />

      {/* 7. Find Locations */}
      <Locations />

      {/* 8. Review/Gallery Section */}
      <Gallery />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}
