'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFeedbackMessage(data.message || 'ส่งข้อความเรียบร้อยแล้ว ขอบคุณครับ');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        setStatus('error');
        setFeedbackMessage(data.error || 'เกิดข้อผิดพลาดในการส่งข้อมูล');
      }
    } catch {
      setStatus('error');
      setFeedbackMessage('ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้ กรุณาลองใหม่อีกครั้ง');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {status === 'success' && (
        <div
          style={{
            padding: '14px 16px',
            backgroundColor: 'var(--contact-soft-red, #edf8eb)',
            color: 'var(--contact-red, #187a07)',
            border: '1px solid var(--contact-red, #187a07)',
            fontSize: '0.9rem',
            lineHeight: 1.5,
          }}
        >
          <i className="fas fa-check-circle" style={{ marginRight: 8 }}></i>
          {feedbackMessage}
        </div>
      )}

      {status === 'error' && (
        <div
          style={{
            padding: '14px 16px',
            backgroundColor: '#fde8e8',
            color: '#c81e1e',
            border: '1px solid #f98080',
            fontSize: '0.9rem',
            lineHeight: 1.5,
          }}
        >
          <i className="fas fa-exclamation-circle" style={{ marginRight: 8 }}></i>
          {feedbackMessage}
        </div>
      )}

      <div className="form-field form-field-full">
        <label htmlFor="full-name">
          ชื่อ - นามสกุล <span>*</span>
        </label>
        <input
          id="full-name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
        />
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="phone">
            เบอร์โทร <span>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">อีเมล</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled={status === 'loading'}
          />
        </div>
      </div>

      <div className="form-field form-field-full">
        <label htmlFor="message">
          ข้อความ <span>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={7}
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
        ></textarea>
      </div>

      <button
        className="contact-submit"
        type="submit"
        disabled={status === 'loading'}
        style={{
          opacity: status === 'loading' ? 0.7 : 1,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
        }}
      >
        <i
          className={
            status === 'loading'
              ? 'fas fa-spinner fa-spin'
              : 'fas fa-paper-plane'
          }
        ></i>
        {status === 'loading' ? 'กำลังส่งข้อความ...' : 'ส่งข้อความ'}
      </button>
    </form>
  );
}
