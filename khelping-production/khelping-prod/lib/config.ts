// ============================================================
// K-Helping Site Configuration
// ============================================================

export const siteConfig = {
  name: 'K-Helping',
  url: 'https://khelping.com',

  // ========== LIVE URLs ==========
  lineUrl: 'https://lin.ee/aaoVEiE',
  lineId: '@khelping',
  facebookUrl: 'https://www.facebook.com/khelping',
  facebookMessengerUrl: 'https://m.me/khelping',
  // ================================

  // Business info
  operatingHours: '09:00 - 00:00',
  operatingDays: '365',
  fee: '₩2,000',
  yearsSince: 2021,
  monthlyCustomers: '3,000+',
  facebookFollowers: '8,700+',

  // GA4 — UPDATE with actual ID after setup
  gaId: 'G-S1X5BM2LYF',

  // Locales
  defaultLocale: 'th' as const,
  locales: ['th', 'ko'] as const,
};

// ============================================================
// CTA Link helpers with UTM tracking
// ============================================================
export function getLineUrl(source: string): string {
  return `${siteConfig.lineUrl}?utm_source=khelping_web&utm_medium=cta&utm_campaign=${source}`;
}

export function getFacebookUrl(source: string): string {
  return `${siteConfig.facebookMessengerUrl}?utm_source=khelping_web&utm_medium=cta&utm_campaign=${source}`;
}
