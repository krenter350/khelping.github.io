'use client';

import { useTranslations } from 'next-intl';
import { useSectionTracker } from '@/lib/hooks/useSectionTracker';

export default function PainPoints() {
  const t = useTranslations('pain');
  const ref = useSectionTracker('pain_points');

  const items = [
    { bad: t('bad1'), good: t('good1') },
    { bad: t('bad2'), good: t('good2') },
    { bad: t('bad3'), good: t('good3') },
    { bad: t('bad4'), good: t('good4') },
    { bad: t('bad5'), good: t('good5') },
  ];

  return (
    <section ref={ref as any} data-section="pain_points" className="bg-white">
      <div className="section-container">
        <h2 className="text-center text-[clamp(24px,5vw,36px)] font-extrabold mb-2">{t('title')}</h2>
        <p className="text-center text-gray-400 text-[15px] mb-10">{t('subtitle')}</p>
        <div className="flex flex-col gap-3 max-w-[640px] mx-auto">
          {items.map((item, i) => (
            <div key={i} className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center bg-gray-50 rounded-2xl px-5 py-4 border border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-lg">❌</span>
                <span className="text-sm text-gray-400 line-through">{item.bad}</span>
              </div>
              <span className="text-xl text-gray-300">→</span>
              <div className="flex items-center gap-2">
                <span className="text-lg">✅</span>
                <span className="text-sm font-bold text-teal-700">{item.good}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
