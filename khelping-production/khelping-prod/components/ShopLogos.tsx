'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const shops = [
  { name: 'Coupang', color: '#E31837' }, { name: 'Olive Young', color: '#A2C73B' },
  { name: 'Naver', color: '#03CF5D' }, { name: '11st', color: '#FF0038' },
  { name: 'Gmarket', color: '#00A650' }, { name: 'Musinsa', color: '#000000' },
  { name: 'SSG', color: '#FF5452' }, { name: 'StyleNanda', color: '#E91E8C' },
];

export default function ShopLogos() {
  const t = useTranslations('shops');
  const pathname = usePathname();
  const locale = pathname.startsWith('/ko') ? 'ko' : 'th';

  return (
    <section className="bg-white">
      <div className="section-container">
        <h2 className="text-center text-[clamp(20px,4.5vw,30px)] font-extrabold mb-9">{t('title')}</h2>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 max-w-[600px] mx-auto">
          {shops.map((shop, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium cursor-default">
              <div className="w-11 h-11 rounded-xl mx-auto mb-2 flex items-center justify-center text-white font-extrabold text-lg"
                style={{ background: shop.color }}>{shop.name[0]}</div>
              <div className="text-[11px] font-semibold text-gray-500">{shop.name}</div>
            </div>
          ))}
        </div>
        <p className="text-center mt-5 text-xs text-gray-300">{t('note')}</p>
        <div className="text-center mt-4">
          <Link href={`/${locale}/shops`} className="text-sm font-bold no-underline transition-colors" style={{ color: '#00BCD4' }}>
            {t('viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}
