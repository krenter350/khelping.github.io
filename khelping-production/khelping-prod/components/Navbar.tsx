'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { getLineUrl, getFacebookUrl } from '@/lib/config';
import { trackCTA, trackLanguageSwitch } from '@/lib/analytics';

export default function Navbar() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.startsWith('/ko') ? 'ko' : 'th';

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const switchLang = () => {
    const newLocale = currentLocale === 'th' ? 'ko' : 'th';
    trackLanguageSwitch(currentLocale, newLocale);
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        padding: scrolled ? '10px 20px' : '16px 20px',
      }}
    >
      <div className="max-w-[960px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-extrabold text-base"
            style={{ background: 'linear-gradient(135deg, #00BCD4, #7B2D8E)' }}>K</div>
          <span className="font-extrabold text-lg" style={{ color: '#29B6F6' }}>K-Helping</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={switchLang}
            className="bg-gray-100 border border-gray-200 rounded-full px-3 py-1.5 text-xs font-semibold cursor-pointer flex items-center gap-1.5 hover:bg-gray-200 transition-colors">
            {currentLocale === 'th' ? '🇹🇭 TH' : '🇰🇷 KO'} <span className="text-gray-400 text-[10px]">▾</span>
          </button>
          <a href={getLineUrl('nav')} target="_blank" rel="noopener noreferrer"
            onClick={() => trackCTA('line', 'nav')}
            className="btn-line px-3 py-1.5 text-xs hidden sm:inline-flex">💬 LINE</a>
          <a href={getFacebookUrl('nav')} target="_blank" rel="noopener noreferrer"
            onClick={() => trackCTA('facebook', 'nav')}
            className="btn-fb px-3 py-1.5 text-xs hidden sm:inline-flex">📘 FB</a>
        </div>
      </div>
    </nav>
  );
}
