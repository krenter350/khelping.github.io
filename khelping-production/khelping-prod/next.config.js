const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Performance headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Cache static assets
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(th|ko)',
        headers: [
          // SEO: tell search engines about language versions
          {
            key: 'Link',
            value: '<https://khelping.com/th>; rel="alternate"; hreflang="th", <https://khelping.com/ko>; rel="alternate"; hreflang="ko"',
          },
        ],
      },
    ];
  },

  // Redirect root to Thai (default language)
  async redirects() {
    return [
      {
        source: '/',
        destination: '/th',
        permanent: true,
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
