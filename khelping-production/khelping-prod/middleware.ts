import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  // Redirect / to /th
  localePrefix: 'always',
});

export const config = {
  // Match all pathnames except for
  // - api routes
  // - _next (Next.js internals)
  // - static files (images, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
