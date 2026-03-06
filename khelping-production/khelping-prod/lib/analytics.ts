// ============================================================
// GA4 Event Tracking for Khelping
// ============================================================
// Usage:
//   import { trackEvent, trackCTA, trackShopClick } from '@/lib/analytics';
//   trackCTA('line', 'hero');
//   trackShopClick('Coupang', 'beauty');
// ============================================================

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// ============================================================
// Core event sender
// ============================================================
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

// ============================================================
// 1. CTA Button Clicks
// ============================================================
// Track LINE/Facebook button clicks with location context
//
// Locations: 'nav', 'hero', 'section_mid', 'final_cta', 'floating', 'footer'
//
// GA4 Report: Events > click_line_cta / click_facebook_cta
//   → Secondary dimension: cta_location
//   → Shows which CTA position converts best
// ============================================================

export type CTAChannel = 'line' | 'facebook';
export type CTALocation =
  | 'nav'           // Top navigation bar
  | 'hero'          // Hero section
  | 'pain_section'  // After pain points
  | 'steps_section' // After 3-step process
  | 'fee_section'   // After fee comparison
  | 'trust_section' // After trust/reviews
  | 'final_cta'     // Final CTA section
  | 'floating'      // Mobile floating bottom bar
  | 'footer'        // Footer
  | 'shop_card';    // Individual shop card in directory

export function trackCTA(channel: CTAChannel, location: CTALocation) {
  trackEvent(`click_${channel}_cta`, {
    cta_channel: channel,
    cta_location: location,
  });
}

// ============================================================
// 2. Shop Directory Events
// ============================================================
// Track interactions with the shop directory page
//
// GA4 Report: Events > shop_visit / shop_order_click
//   → Secondary dimension: shop_name, shop_category
//   → Shows which shops drive the most interest & orders
// ============================================================

export function trackShopVisit(shopName: string, category: string) {
  trackEvent('shop_visit', {
    shop_name: shopName,
    shop_category: category,
  });
}

export function trackShopOrderClick(shopName: string, category: string) {
  trackEvent('shop_order_click', {
    shop_name: shopName,
    shop_category: category,
  });
}

export function trackShopSearch(query: string, resultCount: number) {
  trackEvent('shop_search', {
    search_query: query,
    result_count: resultCount,
  });
}

export function trackShopCategoryFilter(category: string) {
  trackEvent('shop_category_filter', {
    category: category,
  });
}

// ============================================================
// 3. Page Section Scroll Tracking
// ============================================================
// Track how far users scroll on the landing page
// Helps identify where users drop off
//
// GA4 Report: Events > section_view
//   → Secondary dimension: section_name
//   → Shows conversion funnel through page sections
// ============================================================

export type PageSection =
  | 'hero'
  | 'pain_points'
  | 'how_it_works'
  | 'fee_comparison'
  | 'trust_reviews'
  | 'shops'
  | 'faq'
  | 'final_cta';

const viewedSections = new Set<string>();

export function trackSectionView(section: PageSection) {
  // Only track each section once per page load
  if (viewedSections.has(section)) return;
  viewedSections.add(section);

  trackEvent('section_view', {
    section_name: section,
  });
}

// Reset on page navigation
export function resetSectionTracking() {
  viewedSections.clear();
}

// ============================================================
// 4. Language Switch Tracking
// ============================================================
export function trackLanguageSwitch(fromLang: string, toLang: string) {
  trackEvent('language_switch', {
    from_language: fromLang,
    to_language: toLang,
  });
}

// ============================================================
// 5. FAQ Interaction Tracking
// ============================================================
export function trackFAQOpen(questionIndex: number, questionText: string) {
  trackEvent('faq_open', {
    question_index: questionIndex,
    question_text: questionText.substring(0, 50), // Truncate for GA4
  });
}

// ============================================================
// 6. Review Carousel Interaction
// ============================================================
export function trackReviewView(reviewIndex: number, isAutoScroll: boolean) {
  trackEvent('review_view', {
    review_index: reviewIndex,
    is_auto_scroll: isAutoScroll,
  });
}

// ============================================================
// 7. Outbound Link Tracking
// ============================================================
export function trackOutboundLink(url: string, context: string) {
  trackEvent('outbound_link', {
    link_url: url,
    link_context: context,
  });
}

// ============================================================
// Helper: Intersection Observer for Section Tracking
// ============================================================
// Use this in components to auto-track section visibility:
//
//   const ref = useSectionTracker('hero');
//   <section ref={ref}>...</section>
// ============================================================
export function createSectionObserver(
  callback: (sectionId: string) => void
): IntersectionObserver | null {
  if (typeof window === 'undefined') return null;

  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) callback(sectionId);
        }
      });
    },
    { threshold: 0.3 }
  );
}
