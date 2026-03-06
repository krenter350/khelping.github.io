'use client';

import { useTranslations } from 'next-intl';
import { getLineUrl, getFacebookUrl } from '@/lib/config';
import { trackCTA } from '@/lib/analytics';
import { useSectionTracker } from '@/lib/hooks/useSectionTracker';

export default function FinalCTA() {
  const t = useTranslations('cta');
  const ref = useSectionTracker('final_cta');

  return (
    <section ref={ref as any} data-section="final_cta" className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #00BCD4, #7B2D8E)' }}>
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/[0.03]" />
      <div className="section-container text-center relative z-10">
        <h2 className="text-[clamp(26px,6vw,40px)] font-extrabold text-white mb-3">{t('title')}</h2>
        <p className="text-base text-white/80 mb-8">{t('subtitle')}</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href={getLineUrl('final_cta')} target="_blank" rel="noopener noreferrer"
            onClick={() => trackCTA('line', 'final_cta')}
            className="btn-line px-9 py-4 text-lg animate-pulse-soft">💬 {t('line')}</a>
          <a href={getFacebookUrl('final_cta')} target="_blank" rel="noopener noreferrer"
            onClick={() => trackCTA('facebook', 'final_cta')}
            className="inline-flex items-center gap-2 bg-white rounded-full px-9 py-4 text-lg font-bold cursor-pointer transition-all shadow-medium hover:-translate-y-0.5"
            style={{ color: '#1877F2' }}>📘 {t('fb')}</a>
        </div>
      </div>
    </section>
  );
}
