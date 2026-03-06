import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import '@/styles/globals.css';

// ============================================================
// Dynamic SEO Metadata per locale
// ============================================================
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });

  const baseUrl = 'https://khelping.com';

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),

    // Open Graph (Facebook sharing)
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}`,
      siteName: 'K-Helping',
      locale: locale === 'th' ? 'th_TH' : 'ko_KR',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-image-${locale}.png`,
          width: 1200,
          height: 630,
          alt: 'Khelping - Korea Shopping Proxy Service',
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/images/og-image-${locale}.png`],
    },

    // Alternate languages (hreflang)
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'th': `${baseUrl}/th`,
        'ko': `${baseUrl}/ko`,
        'x-default': `${baseUrl}/th`,
      },
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Additional meta
    other: {
      'google-site-verification': 'YOUR_GOOGLE_VERIFICATION_CODE',
    },
  };
}

// ============================================================
// Layout Component
// ============================================================
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} dir="ltr">
      <head>
        {/* Google Fonts - Sarabun (Thai) + Noto Sans KR (Korean fallback) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'K-Helping',
              description: locale === 'th'
                ? 'บริการสั่งซื้อสินค้าจากเว็บช้อปปิ้งเกาหลี สำหรับคนไทยในเกาหลี'
                : '한국 거주 태국인을 위한 한국 쇼핑몰 구매대행 서비스',
              url: 'https://khelping.com',
              telephone: '', // Add actual contact
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                  'Friday', 'Saturday', 'Sunday',
                ],
                opens: '09:00',
                closes: '00:00',
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'KR',
              },
              sameAs: [
                'https://www.facebook.com/khelping',
                'https://lin.ee/aaoVEiE',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>

        {/* Analytics */}
        <GoogleAnalytics />
        <Analytics /> {/* Vercel Analytics */}
      </body>
    </html>
  );
}
