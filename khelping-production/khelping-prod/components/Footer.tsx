'use client';

import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { siteConfig, getLineUrl, getFacebookUrl } from '@/lib/config';
import { trackCTA, trackLanguageSwitch } from '@/lib/analytics';

export default function Footer() {
  const t = useTranslations('footer');
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.startsWith('/ko') ? 'ko' : 'th';

  const switchTo = (newLocale: string) => {
    if (newLocale !== locale) {
      trackLanguageSwitch(locale, newLocale);
      router.push(pathname.replace(`/${locale}`, `/${newLocale}`));
    }
  };

  return (
    <footer className="text-center" style={{ background: '#1a1a2e', color: 'rgba(255,255,255,0.6)', padding: '40px 20px' }}>
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-extrabold text-sm"
          style={{ background: 'linear-gradient(135deg, #00BCD4, #7B2D8E)' }}>K</div>
        <span className="font-extrabold text-lg text-white">K-Helping</span>
      </div>
      <p className="text-sm mb-2">{t('hours')}</p>
      <div className="flex justify-center gap-3 mb-4">
        <a href={getLineUrl('footer')} target="_blank" rel="noopener noreferrer"
          onClick={() => trackCTA('line', 'footer')}
          className="btn-line px-3.5 py-1.5 text-xs">LINE</a>
        <a href={getFacebookUrl('footer')} target="_blank" rel="noopener noreferrer"
          onClick={() => trackCTA('facebook', 'footer')}
          className="btn-fb px-3.5 py-1.5 text-xs">Facebook</a>
      </div>
      <div className="flex justify-center gap-3 mb-4">
        <button onClick={() => switchTo('th')}
          className="border rounded-full px-3.5 py-1 text-white text-[13px] cursor-pointer"
          style={{ background: locale === 'th' ? 'rgba(255,255,255,0.15)' : 'transparent', borderColor: 'rgba(255,255,255,0.2)' }}>🇹🇭 ไทย</button>
        <button onClick={() => switchTo('ko')}
          className="border rounded-full px-3.5 py-1 text-white text-[13px] cursor-pointer"
          style={{ background: locale === 'ko' ? 'rgba(255,255,255,0.15)' : 'transparent', borderColor: 'rgba(255,255,255,0.2)' }}>🇰🇷 한국어</button>
      </div>
      <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.3)' }}>{t('copyright')}</p>
    </footer>
  );
}
