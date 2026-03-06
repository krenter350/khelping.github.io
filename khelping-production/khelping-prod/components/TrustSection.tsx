'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useSectionTracker } from '@/lib/hooks/useSectionTracker';
import { featuredReviews } from '@/data/reviews';

export default function TrustSection() {
  const t = useTranslations('trust');
  const ref = useSectionTracker('trust_reviews');
  const [idx, setIdx] = useState(0);
  const reviews = featuredReviews;

  useEffect(() => {
    const timer = setInterval(() => setIdx(p => (p + 1) % reviews.length), 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section ref={ref as any} data-section="trust_reviews"
      style={{ background: 'linear-gradient(160deg, #E0F7FA 0%, #B2EBF2 30%, #E1BEE7 70%, #F3E5F5 100%)' }}>
      <div className="section-container">
        <h2 className="text-center text-[clamp(24px,5vw,36px)] font-extrabold mb-2">{t('title')}</h2>
        <p className="text-center text-gray-400 text-[15px] mb-9">{t('subtitle')}</p>

        {/* Review Image Carousel */}
        <div className="relative max-w-[400px] mx-auto mb-10">
          <div className="relative overflow-hidden rounded-2xl shadow-medium bg-white" style={{ aspectRatio: '3/4' }}>
            {reviews.map((r, i) => (
              <div key={r.id}
                className="absolute inset-0 transition-all duration-500"
                style={{ opacity: i === idx ? 1 : 0, transform: i === idx ? 'scale(1)' : 'scale(0.95)' }}>
                <Image src={r.image} alt={`Customer review ${i + 1}`} fill className="object-cover rounded-2xl" sizes="400px" />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 mt-4">
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className="h-2 rounded-full border-none cursor-pointer transition-all duration-300"
                style={{ width: i === idx ? 24 : 8, background: i === idx ? '#00BCD4' : '#ddd' }} />
            ))}
          </div>
        </div>

        {/* Receipt info */}
        <div className="bg-white rounded-[20px] p-7 max-w-[480px] mx-auto shadow-soft border border-gray-100 text-center">
          <div className="text-[40px] mb-3">🧾</div>
          <h3 className="text-lg font-bold mb-2">{t('receiptTitle')}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">{t('receiptDesc')}</p>
        </div>
      </div>
    </section>
  );
}
