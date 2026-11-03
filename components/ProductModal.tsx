'use client';

import React, { useEffect } from 'react';
import { ProductKey, productModalData } from '@/lib/products';

interface ProductModalProps {
  activeKey: ProductKey | null;
  onClose: () => void;
}

export default function ProductModal({ activeKey, onClose }: ProductModalProps) {
  useEffect(() => {
    if (activeKey) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeKey]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeKey) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeKey, onClose]);

  if (!activeKey) return null;

  const product = productModalData[activeKey];
  if (!product) return null;

  return (
    <div
      id="productModal"
      className="modal show"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className="modal-body">
          {/* Left: Image */}
          <div className="modal-image">
            <img id="modalImage" src={product.image} alt={product.title} />
          </div>

          {/* Right: Details */}
          <div className="modal-details">
            <h2 id="modalTitle">{product.title}</h2>
            <h3 id="modalSubtitle">{product.subtitle}</h3>

            {product.description && (
              <p id="modalDescription">{product.description}</p>
            )}

            <div className="modal-features">
              <h4>คุณสมบัติ:</h4>
              <ul id="modalFeatures">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="modal-specs">
              <h4>ข้อมูลจำเพาะ:</h4>
              <div id="modalSpecs">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="spec-item">
                    <strong>{spec.label}:</strong>
                    <span>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-price">
              <span>ราคา: </span>
              <span id="modalPrice" className="price">
                {product.price}
              </span>
            </div>

            <a
              href="https://page.line.me/992smxye?openQrModal=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              ติดต่อสั่งซื้อ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
