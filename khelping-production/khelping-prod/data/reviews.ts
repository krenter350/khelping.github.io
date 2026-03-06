// ============================================================
// K-Helping Review Data
// ============================================================
// 24 real customer reviews from LINE/Facebook
// Images stored in /public/images/reviews/
// ============================================================

export interface Review {
  id: string;
  image: string;         // path relative to /public
  featured: boolean;     // show on landing page carousel (max 8)
  category: string;      // product category for Phase 2 filtering
}

export const reviews: Review[] = [
  // === FEATURED (Landing page carousel — 8 best) ===
  { id: "r01", image: "/images/reviews/1100347.webp",  featured: true,  category: "general" },
  { id: "r02", image: "/images/reviews/1100247_0.webp", featured: true,  category: "beauty" },
  { id: "r03", image: "/images/reviews/1100281_0.webp", featured: true,  category: "living" },
  { id: "r04", image: "/images/reviews/1100286_0.webp", featured: true,  category: "general" },
  { id: "r05", image: "/images/reviews/1100273_0.webp", featured: true,  category: "beauty" },
  { id: "r06", image: "/images/reviews/1100335_0.webp", featured: true,  category: "general" },
  { id: "r07", image: "/images/reviews/1100272_0.webp", featured: true,  category: "beauty" },
  { id: "r08", image: "/images/reviews/1100338_0.webp", featured: true,  category: "living" },

  // === ADDITIONAL (Phase 2 /reviews page) ===
  { id: "r09", image: "/images/reviews/1100249_0.webp", featured: false, category: "beauty" },
  { id: "r10", image: "/images/reviews/1100274_0.webp", featured: false, category: "beauty" },
  { id: "r11", image: "/images/reviews/1100275_0.webp", featured: false, category: "living" },
  { id: "r12", image: "/images/reviews/1100276_0.webp", featured: false, category: "beauty" },
  { id: "r13", image: "/images/reviews/1100277_0.webp", featured: false, category: "general" },
  { id: "r14", image: "/images/reviews/1100279_0.webp", featured: false, category: "beauty" },
  { id: "r15", image: "/images/reviews/1100280_0.webp", featured: false, category: "general" },
  { id: "r16", image: "/images/reviews/1100282_0.webp", featured: false, category: "living" },
  { id: "r17", image: "/images/reviews/1100283_0.webp", featured: false, category: "beauty" },
  { id: "r18", image: "/images/reviews/1100284_0.webp", featured: false, category: "general" },
  { id: "r19", image: "/images/reviews/1100285_0.webp", featured: false, category: "beauty" },
  { id: "r20", image: "/images/reviews/1100336_0.webp", featured: false, category: "living" },
  { id: "r21", image: "/images/reviews/1100337_0.webp", featured: false, category: "general" },
  { id: "r22", image: "/images/reviews/1100339_0.webp", featured: false, category: "beauty" },
  { id: "r23", image: "/images/reviews/1100340_0.webp", featured: false, category: "living" },
  { id: "r24", image: "/images/reviews/1100341_0.webp", featured: false, category: "general" },
];

// Helper: get featured reviews for landing page
export const featuredReviews = reviews.filter(r => r.featured);

// Helper: get all reviews for /reviews page
export const allReviews = reviews;
