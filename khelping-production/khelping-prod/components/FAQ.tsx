'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { trackFAQOpen } from '@/lib/analytics';

export default function FAQ() {
  const t = useTranslations('faq');
  const [open, setOpen] = useState<number | null>(null);

  const items = [
    { q: t('q1'), a: t('a1') }, { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') }, { q: t('q4'), a: t('a4') },
    { q: t('q5'), a: t('a5') }, { q: t('q6'), a: t('a6') },
  ];

  const toggle = (i: number) => {
    if (open !== i) trackFAQOpen(i, items[i].q);
    setOpen(open === i ? null : i);
  };

  return (
    <section className="bg-gray-50">
      <div className="section-container">
        <h2 className="text-center text-[clamp(24px,5vw,36px)] font-extrabold mb-9">{t('title')}</h2>
        <div className="max-w-[640px] mx-auto">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl mb-2.5 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 transition-all hover:shadow-soft">
              <div onClick={() => toggle(i)} className="px-5 py-4 cursor-pointer flex justify-between items-center font-semibold text-[15px]">
                <span>{item.q}</span>
                <span className="text-lg transition-transform duration-300" style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0)', color: '#00BCD4' }}>+</span>
              </div>
              {open === i && <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
