'use client';

import { useTranslations } from 'next-intl';
import { getLineUrl, getFacebookUrl } from '@/lib/config';
import { trackCTA } from '@/lib/analytics';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[99] flex gap-2.5"
      style={{
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        padding: '10px 16px',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
        borderTop: '1px solid #f0f0f0',
      }}>
      <a href={getLineUrl('floating')} target="_blank" rel="noopener noreferrer"
        onClick={() => trackCTA('line', 'floating')}
        className="btn-line flex-1 justify-center py-3 text-[15px]">💬 LINE</a>
      <a href={getFacebookUrl('floating')} target="_blank" rel="noopener noreferrer"
        onClick={() => trackCTA('facebook', 'floating')}
        className="btn-fb flex-1 justify-center py-3 text-[15px]">📘 Facebook</a>
    </div>
  );
}
