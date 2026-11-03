'use client';

import React from 'react';
import { featureProducts, FeatureProductData, ProductKey } from '@/lib/products';
import { useFadeIn } from '@/hooks/useFadeIn';

interface ProductFeaturesProps {
  onOpenModal: (key: ProductKey) => void;
}

function FeatureRow({
  product,
  onOpenModal,
}: {
  product: FeatureProductData;
  onOpenModal: (key: ProductKey) => void;
}) {
  const { ref, fadeClass } = useFadeIn<HTMLDivElement>();

  return (
    <div
      ref={ref}
      id={product.id}
      className={`feature-row ${product.reverse ? 'reverse' : ''} ${fadeClass}`}
    >
      <div className="feature-image">
        <img src={product.image} alt={product.imageAlt} />
      </div>
      <div className="feature-text">
        <h2>{product.title}</h2>
        <h3>{product.subtitle}</h3>
        <p>{product.description}</p>
        <ul className="feature-list">
          {product.featureList.map((item, idx) => (
            <li key={idx}>
              <i className="fas fa-check-circle"></i> {item}
            </li>
          ))}
        </ul>
        <button
          onClick={() => onOpenModal(product.key)}
          className="btn btn-outline"
        >
          ดูข้อมูลเพิ่มเติม
        </button>
      </div>
    </div>
  );
}

export default function ProductFeatures({ onOpenModal }: ProductFeaturesProps) {
  return (
    <section id="products" className="features">
      {featureProducts.map((product) => (
        <FeatureRow
          key={product.id}
          product={product}
          onOpenModal={onOpenModal}
        />
      ))}
    </section>
  );
}
