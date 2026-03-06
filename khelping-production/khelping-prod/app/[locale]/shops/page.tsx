'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import { shops, topShops, categories } from '@/data/shops';
import { getLineUrl, getFacebookUrl } from '@/lib/config';
import { trackCTA, trackShopVisit, trackShopOrderClick, trackShopSearch, trackShopCategoryFilter } from '@/lib/analytics';

export default function ShopsPage() {
  const t = useTranslations('shopDirectory');
  const ct = useTranslations('cta');
  const pathname = usePathname();
  const locale = pathname.startsWith('/ko') ? 'ko' : 'th';
  const catLabels = categories[locale as keyof typeof categories];

  const [activeCat, setActiveCat] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = activeCat === 'all' ? shops : shops.filter(s => s.cat === activeCat);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(s => s.name.toLowerCase().includes(q) || s.th.toLowerCase().includes(q) || s.ko.toLowerCase().includes(q));
    }
    return list;
  }, [activeCat, search]);

  const handleCatClick = (key: string) => {
    setActiveCat(key);
    setSearch('');
    trackShopCategoryFilter(key);
  };

  const handleSearch = (val: string) => {
    setSearch(val);
    if (val.length >= 2) trackShopSearch(val, filtered.length);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <header className="pt-20 pb-10 text-center" style={{ background: 'linear-gradient(160deg, #E0F7FA 0%, #B2EBF2 40%, #F3E5F5 100%)' }}>
        <div className="max-w-[800px] mx-auto px-5">
          <h1 className="text-[clamp(28px,6vw,44px)] font-extrabold mb-3">
            <span className="text-gradient">{t('title')}</span>
          </h1>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">{t('subtitle')}</p>
          <div className="max-w-[480px] mx-auto relative mb-3">
            <input type="text" value={search} onChange={e => handleSearch(e.target.value)}
              placeholder={t('search')}
              className="w-full px-5 py-3.5 pl-11 rounded-full border-2 border-gray-100 text-[15px] outline-none bg-white shadow-soft focus:border-[#00BCD4] transition-colors" />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔍</span>
          </div>
          <p className="text-xs text-gray-300">{filtered.length} {t('count')}</p>
        </div>
      </header>

      <div className="max-w-[1100px] mx-auto px-4">
        {/* Tip bar */}
        <div className="rounded-xl px-5 py-3.5 my-6 border text-center text-sm font-semibold"
          style={{ background: 'linear-gradient(135deg, #E0F7FA, #F3E5F5)', borderColor: '#B2EBF2', color: '#00BCD4' }}>
          {t('tip')}
        </div>

        {/* Top 10 */}
        {activeCat === 'all' && !search && (
          <div className="mb-10">
            <h2 className="text-[22px] font-extrabold mb-1">{t('topTitle')}</h2>
            <p className="text-[13px] text-gray-400 mb-5">{t('topDesc')}</p>
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {topShops.map((shop, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 text-center min-w-[120px] transition-all hover:-translate-y-1 hover:shadow-medium">
                  <div className="relative w-12 h-12 rounded-xl mx-auto mb-2 flex items-center justify-center text-white font-extrabold text-xl" style={{ background: shop.color }}>
                    {shop.name[0]}
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold"
                      style={{ background: i < 3 ? '#FFD700' : '#00BCD4', color: i < 3 ? '#333' : '#fff' }}>{i + 1}</div>
                  </div>
                  <div className="text-xs font-bold text-gray-700 whitespace-nowrap">{shop.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 sticky top-[52px] z-50 bg-gray-50 pt-2 no-scrollbar">
          {Object.entries(catLabels).map(([key, label]) => (
            <button key={key} onClick={() => handleCatClick(key)}
              className={`px-4 py-2 rounded-full border text-[13px] font-semibold whitespace-nowrap transition-all cursor-pointer ${activeCat === key ? 'text-white border-[#00BCD4]' : 'bg-white border-gray-200 hover:border-[#00BCD4] hover:text-[#00BCD4]'}`}
              style={activeCat === key ? { background: '#00BCD4', borderColor: '#00BCD4' } : {}}>
              {label}
            </button>
          ))}
        </div>

        {/* Shop grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
          {filtered.map((shop, i) => (
            <div key={shop.name + i} className="bg-white rounded-2xl border border-gray-100 p-5 transition-all hover:-translate-y-1 hover:shadow-medium hover:border-[#00BCD4]">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-extrabold text-xl"
                  style={{ background: shop.color, boxShadow: `0 4px 12px ${shop.color}33` }}>
                  {shop.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold">{shop.name}</h3>
                    {shop.popular && <span className="bg-orange-50 text-orange-500 text-[10px] font-bold px-2 py-0.5 rounded-full">{t('popular')}</span>}
                  </div>
                  <p className="text-[13px] text-gray-400 leading-relaxed mb-3">{locale === 'th' ? shop.th : shop.ko}</p>
                  <div className="flex gap-2 flex-wrap">
                    <a href={`https://${shop.url}`} target="_blank" rel="noopener noreferrer"
                      onClick={() => trackShopVisit(shop.name, shop.cat)}
                      className="bg-gray-100 text-gray-500 border border-gray-200 px-3.5 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1 hover:bg-gray-200 transition-colors no-underline">
                      🔗 {t('visit')}
                    </a>
                    <a href={getLineUrl(`shop_${shop.name}`)} target="_blank" rel="noopener noreferrer"
                      onClick={() => { trackShopOrderClick(shop.name, shop.cat); trackCTA('line', 'shop_card'); }}
                      className="text-white px-3.5 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1 hover:scale-[1.03] transition-transform no-underline"
                      style={{ background: 'linear-gradient(135deg, #00BCD4, #7B2D8E)' }}>
                      🛒 {t('order')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-300">
            <div className="text-5xl mb-3">🔍</div>
            <p>{locale === 'th' ? 'ไม่พบร้านค้าที่ค้นหา' : '검색 결과가 없습니다'}</p>
          </div>
        )}

        {/* Mid CTA */}
        <div className="rounded-[20px] px-6 py-10 text-center mb-10 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #00BCD4, #7B2D8E)' }}>
          <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/[0.06]" />
          <h2 className="text-[clamp(20px,4vw,28px)] font-extrabold text-white mb-2">{ct('title')}</h2>
          <p className="text-sm text-white/80 mb-6">{ct('subtitle')}</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a href={getLineUrl('shops_cta')} target="_blank" rel="noopener noreferrer"
              className="btn-line px-6 py-3 text-[15px]">💬 {ct('line')}</a>
            <a href={getFacebookUrl('shops_cta')} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 text-[15px] font-bold no-underline"
              style={{ color: '#1877F2' }}>📘 {ct('fb')}</a>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingCTA />
      <div className="h-16" />
    </main>
  );
}
