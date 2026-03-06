'use client';

import { useTranslations } from 'next-intl';
import { getLineUrl, getFacebookUrl, siteConfig } from '@/lib/config';
import { trackCTA } from '@/lib/analytics';
import { useSectionTracker } from '@/lib/hooks/useSectionTracker';

export default function HeroSection() {
  const t = useTranslations('hero');
  const ts = useTranslations('stats');
  const ref = useSectionTracker('hero');

  const stats = [
    { num: '5+', label: ts('years') },
    { num: siteConfig.monthlyCustomers, label: ts('monthly') },
    { num: siteConfig.facebookFollowers, label: ts('followers') },
    { num: siteConfig.operatingDays, label: ts('days') },
  ];

  return (
    <section ref={ref as any} data-section="hero"
      className="pt-24 pb-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #E0F7FA 0%, #B2EBF2 25%, #E0F7FA 50%, #E1BEE7 75%, #F3E5F5 100%)' }}>
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,188,212,0.1), transparent)' }} />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,45,142,0.06), transparent)' }} />

      <div className="max-w-[960px] mx-auto px-5 text-center relative z-10">
        <div className="inline-block rounded-full px-5 py-1.5 text-[13px] font-semibold mb-5 animate-fade-in-up"
          style={{ background: 'rgba(0,188,212,0.1)', color: '#00BCD4' }}>
          {t('badge')}
        </div>

        <h1 className="text-[clamp(32px,7vw,52px)] font-extrabold leading-tight mb-4 tracking-tight">
          <span className="text-gray-800">{t('title1')}</span><br />
          <span className="text-gradient">{t('title2')}</span>
        </h1>

        <p className="text-[clamp(16px,3.5vw,20px)] text-gray-500 mb-6 leading-relaxed">
          {t('subtitle')}
        </p>

        <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 mb-8 border-2"
          style={{ boxShadow: '0 4px 20px rgba(0,188,212,0.12)', borderColor: '#E0F7FA' }}>
          <span className="text-[clamp(22px,5vw,32px)] font-extrabold" style={{ color: '#00BCD4' }}>{t('fee')}</span>
          <span className="text-[13px] text-gray-400 border-l border-gray-200 pl-3">{t('feeDetail')}</span>
        </div>

        <div className="flex justify-center gap-3 flex-wrap mb-12">
          <a href={getLineUrl('hero')} target="_blank" rel="noopener noreferrer"
            onClick={() => trackCTA('line', 'hero')}
            className="btn-line px-7 py-3.5 text-base animate-pulse-soft">
            💬 {t('ctaLine')}
          </a>
          <a href={getFacebookUrl('hero')} target="_blank" rel="noopener noreferrer"
            onClick={() => trackCTA('facebook', 'hero')}
            className="btn-fb px-7 py-3.5 text-base">
            📘 {t('ctaFb')}
          </a>
        </div>

        <div className="grid grid-cols-4 gap-3 max-w-[560px] mx-auto">
          {stats.map((s, i) => (
            <div key={i} className="bg-white/80 backdrop-blur rounded-2xl py-4 px-2">
              <div className="text-[clamp(20px,4vw,28px)] font-extrabold" style={{ color: '#00BCD4' }}>{s.num}</div>
              <div className="text-[11px] text-gray-400 font-medium mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
