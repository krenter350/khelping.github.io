'use client';

import { useEffect, useRef } from 'react';
import { trackSectionView, type PageSection } from '@/lib/analytics';

// ============================================================
// useSectionTracker Hook
// ============================================================
// Automatically tracks when a section becomes visible (30%+)
//
// Usage:
//   const ref = useSectionTracker('hero');
//   <section ref={ref} data-section="hero">...</section>
// ============================================================

export function useSectionTracker(sectionId: PageSection) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackSectionView(sectionId);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionId]);

  return ref;
}
