import { MetadataRoute } from 'next';

const BASE_URL = 'https://khelping.com';
const locales = ['th', 'ko'];

// ============================================================
// Dynamic Sitemap Generation
// ============================================================
// Pages are automatically added here as you create new routes.
// Google Search Console will read this at: khelping.com/sitemap.xml
// ============================================================

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/shops', priority: 0.9, changeFrequency: 'weekly' as const },
    // Phase 2
    // { path: '/reviews', priority: 0.8, changeFrequency: 'weekly' as const },
    // { path: '/guide', priority: 0.7, changeFrequency: 'monthly' as const },
    // Phase 3
    // { path: '/blog', priority: 0.6, changeFrequency: 'daily' as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}${page.path}`])
          ),
        },
      });
    }
  }

  return entries;
}
