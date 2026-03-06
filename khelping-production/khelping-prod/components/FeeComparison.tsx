'use client';

import { useTranslations } from 'next-intl';
import { useSectionTracker } from '@/lib/hooks/useSectionTracker';

const rows = [
  { th: 'สินค้า ₩100,000 × 1 ชิ้น', ko: '10만원 상품 1개', other: '₩5,000~10,000', kh: '₩2,000' },
  { th: 'สินค้า ₩100,000 × 5 ชิ้น', ko: '10만원 상품 5개 (같은주소)', other: '₩25,000~50,000', kh: '₩2,000' },
  { th: 'สินค้า ₩100,000 × 10 ชิ้น', ko: '10만원 상품 10개 (같은주소)', other: '₩50,000~100,000', kh: '₩2,000' },
];

export default function FeeComparison() {
  const t = useTranslations('fee');
  const ref = useSectionTracker('fee_comparison');
  const locale = typeof window !== 'undefined' && window.location.pathname.startsWith('/ko') ? 'ko' : 'th';

  return (
    <section ref={ref as any} data-section="fee_comparison" className="bg-white">
      <div className="section-container">
        <h2 className="text-center text-[clamp(24px,5vw,36px)] font-extrabold mb-2">{t('title')}</h2>
        <p className="text-center text-gray-400 text-[15px] mb-9">{t('subtitle')}</p>
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-0 rounded-2xl overflow-hidden shadow-soft min-w-[500px]">
            <thead>
              <tr>
                <th className="bg-gray-800 text-white px-5 py-4 text-left text-sm font-bold">{t('header1')}</th>
                <th className="bg-gray-800 text-white px-5 py-4 text-left text-sm font-bold">{t('header2')}</th>
                <th className="text-white px-5 py-4 text-left text-sm font-bold" style={{ background: '#00BCD4' }}>{t('header3')}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td className="px-5 py-4 text-sm border-b border-gray-100 bg-white text-gray-700">
                    {locale === 'ko' ? row.ko : row.th}
                  </td>
                  <td className="px-5 py-4 text-sm border-b border-gray-100 bg-white text-gray-400">{row.other}</td>
                  <td className="px-5 py-4 text-sm border-b border-gray-100 font-extrabold" style={{ background: '#E0F7FA', color: '#00BCD4' }}>{row.kh}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center mt-5 text-[15px] font-semibold" style={{ color: '#00BCD4' }}>{t('note')}</p>
      </div>
    </section>
  );
}
