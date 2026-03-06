# Khelping 웹사이트 기술 설계서

## 프로젝트 개요

이 문서는 Khelping 웹사이트의 **Next.js 프로젝트 초기 세팅**, **SEO 메타 태그 설계**, **GA4 이벤트 추적 설계**를 포함합니다.

---

## 1. 프로젝트 구조

```
khelping-web/
├── app/
│   ├── [locale]/            ← 다국어 라우팅 (/th, /ko)
│   │   ├── layout.tsx       ← SEO 메타 + 폰트 + GA4 + JSON-LD
│   │   ├── page.tsx         ← 메인 랜딩페이지
│   │   └── shops/
│   │       └── page.tsx     ← 쇼핑몰 디렉토리 페이지
│   ├── sitemap.ts           ← 동적 사이트맵 (자동 생성)
│   └── robots.ts            ← 크롤링 규칙
├── components/
│   ├── GoogleAnalytics.tsx  ← GA4 스크립트
│   ├── Navbar.tsx           ← 상단 네비게이션
│   ├── HeroSection.tsx      ← 히어로 섹션
│   ├── PainPoints.tsx       ← 불편 해결 섹션
│   ├── HowItWorks.tsx       ← 3단계 프로세스
│   ├── FeeComparison.tsx    ← 수수료 비교
│   ├── TrustSection.tsx     ← 신뢰 요소
│   ├── ShopLogos.tsx        ← 쇼핑몰 로고
│   ├── FAQ.tsx              ← 자주 묻는 질문
│   ├── FinalCTA.tsx         ← 최종 CTA
│   ├── FloatingCTA.tsx      ← 모바일 하단 고정 버튼
│   └── Footer.tsx           ← 푸터
├── lib/
│   ├── analytics.ts         ← GA4 이벤트 추적 함수 전체
│   ├── config.ts            ← 사이트 설정 (LINE/FB URL, 상수)
│   └── hooks/
│       └── useSectionTracker.ts ← 섹션 가시성 추적 훅
├── messages/
│   ├── th.json              ← 태국어 번역 (전체)
│   └── ko.json              ← 한국어 번역 (전체)
├── styles/
│   └── globals.css          ← Tailwind + 커스텀 스타일
├── public/
│   ├── images/              ← OG 이미지, 후기 스크린샷
│   └── icons/               ← 쇼핑몰 아이콘, 파비콘
├── data/                    ← 쇼핑몰 데이터, 후기 데이터
├── .env.example             ← 환경변수 템플릿
├── next.config.js           ← Next.js 설정 (i18n, 리다이렉트, 헤더)
├── tailwind.config.ts       ← Tailwind 커스텀 설정
├── tsconfig.json            ← TypeScript 설정
├── middleware.ts            ← 다국어 라우팅 미들웨어
└── package.json             ← 의존성 패키지
```

---

## 2. SEO 메타 태그 설계

### 2.1 페이지별 메타 태그

#### 메인 랜딩페이지 `/th`

| 태그 | 값 |
|------|-----|
| title | Khelping \| บริการสั่งซื้อสินค้าเกาหลี ไม่ต้องสมัครสมาชิก |
| description | สั่งซื้อสินค้าจากเว็บช้อปปิ้งเกาหลีได้ง่ายๆ ไม่ต้องสมัครสมาชิก... |
| og:locale | th_TH |
| og:image | /images/og-image-th.png (1200x630) |

#### 메인 랜딩페이지 `/ko`

| 태그 | 값 |
|------|-----|
| title | Khelping \| 한국 쇼핑몰 구매대행 - 회원가입 없이 주문 |
| description | 한국 쇼핑몰 구매대행 서비스. 링크/사진만 보내주세요... |
| og:locale | ko_KR |
| og:image | /images/og-image-ko.png (1200x630) |

### 2.2 hreflang 설정 (자동)

layout.tsx에서 자동으로 생성됩니다:

```html
<link rel="alternate" hreflang="th" href="https://khelping.com/th" />
<link rel="alternate" hreflang="ko" href="https://khelping.com/ko" />
<link rel="alternate" hreflang="x-default" href="https://khelping.com/th" />
```

### 2.3 JSON-LD 구조화 데이터

layout.tsx에 LocalBusiness 스키마가 포함되어 있어 Google에서 비즈니스 정보를 인식합니다:
- 서비스명, 운영시간, 주소(한국), SNS 링크

### 2.4 OG 이미지 준비사항

Facebook에서 링크 공유 시 보이는 미리보기 이미지:

- **크기**: 1200 x 630px
- **태국어 버전**: og-image-th.png → "ช้อปเกาหลี ไม่ต้องสมัครสมาชิก" + Khelping 로고
- **한국어 버전**: og-image-ko.png → "한국 쇼핑, 회원가입 없이!" + Khelping 로고
- **배경**: 코랄 핑크 그라디언트 (브랜드 색상)

### 2.5 sitemap.xml (자동)

`app/sitemap.ts`에서 자동 생성됩니다. 새 페이지 추가 시 배열에 추가만 하면 됩니다.

### 2.6 배포 후 할 일

1. **Google Search Console** 등록 → 사이트맵 제출
2. **Naver Search Advisor** 등록 (한국어 검색 노출용)
3. **Facebook Sharing Debugger**로 OG 태그 확인

---

## 3. GA4 이벤트 추적 설계

### 3.1 추적 이벤트 전체 목록

| 이벤트명 | 트리거 | 파라미터 | 분석 목적 |
|----------|--------|----------|-----------|
| `click_line_cta` | LINE 버튼 클릭 | cta_location | 어떤 위치의 CTA가 효과적인지 |
| `click_facebook_cta` | FB 버튼 클릭 | cta_location | 어떤 위치의 CTA가 효과적인지 |
| `section_view` | 섹션 30% 이상 노출 | section_name | 사용자 스크롤 깊이 & 이탈 지점 |
| `shop_visit` | 쇼핑몰 "사이트 방문" 클릭 | shop_name, shop_category | 어떤 쇼핑몰에 관심이 많은지 |
| `shop_order_click` | 쇼핑몰 "Khelping으로 주문" 클릭 | shop_name, shop_category | 쇼핑몰별 주문 전환 |
| `shop_search` | 쇼핑몰 검색 | search_query, result_count | 고객이 찾는 쇼핑몰 파악 |
| `shop_category_filter` | 카테고리 필터 클릭 | category | 인기 카테고리 파악 |
| `language_switch` | 언어 변경 | from_language, to_language | 언어 사용 비율 |
| `faq_open` | FAQ 질문 클릭 | question_index, question_text | 고객이 궁금해하는 것 |
| `review_view` | 후기 카드 노출 | review_index, is_auto_scroll | 후기 관심도 |
| `outbound_link` | 외부 링크 클릭 | link_url, link_context | 외부 이동 추적 |

### 3.2 CTA 위치별 추적

```
cta_location 값:
├── nav           → 상단 네비게이션 버튼
├── hero          → 히어로 섹션 버튼
├── pain_section  → Pain Points 섹션 하단
├── steps_section → 3단계 설명 후
├── fee_section   → 수수료 비교 후
├── trust_section → 후기 섹션 후
├── final_cta     → 최종 CTA 섹션
├── floating      → 모바일 하단 고정 버튼
├── footer        → 푸터 버튼
└── shop_card     → 쇼핑몰 카드 내 주문 버튼
```

### 3.3 GA4 보고서 활용 방법

**전환 퍼널 분석:**
Events → section_view로 각 섹션 도달률을 확인합니다.
hero → pain_points → how_it_works → fee_comparison → trust → final_cta
이탈이 많은 섹션을 개선하면 됩니다.

**CTA 효과 비교:**
Events → click_line_cta + click_facebook_cta를 cta_location별로 비교합니다.
어떤 위치의 버튼이 가장 많이 클릭되는지 확인합니다.

**쇼핑몰 인기도:**
Events → shop_visit와 shop_order_click을 shop_name별로 비교합니다.
방문은 많지만 주문이 적은 쇼핑몰 → 해당 쇼핑몰의 코멘트나 배치를 개선합니다.

### 3.4 코드에서 사용하는 방법

```tsx
// CTA 버튼에 추적 추가
import { trackCTA } from '@/lib/analytics';

<button onClick={() => trackCTA('line', 'hero')} className="btn-line">
  LINE으로 주문
</button>

// 섹션 가시성 자동 추적
import { useSectionTracker } from '@/lib/hooks/useSectionTracker';

function HeroSection() {
  const ref = useSectionTracker('hero');
  return <section ref={ref}>...</section>;
}

// 쇼핑몰 클릭 추적
import { trackShopVisit, trackShopOrderClick } from '@/lib/analytics';

<a onClick={() => trackShopVisit('Coupang', 'general')}>사이트 방문</a>
<button onClick={() => trackShopOrderClick('Coupang', 'general')}>주문</button>
```

---

## 4. 개발 시작 방법

### 4.1 로컬 환경 세팅

```bash
# 1. 프로젝트 폴더로 이동
cd khelping-web

# 2. 패키지 설치
npm install

# 3. 환경변수 설정
cp .env.example .env.local
# .env.local 파일을 열어서 실제 값 입력

# 4. 개발 서버 시작
npm run dev

# 5. 브라우저에서 확인
# http://localhost:3000/th (태국어)
# http://localhost:3000/ko (한국어)
```

### 4.2 Vercel 배포

```bash
# 1. Vercel CLI 설치 (처음 한 번)
npm install -g vercel

# 2. 배포
vercel

# 3. 프로덕션 배포
vercel --prod

# 4. 커스텀 도메인 연결
# Vercel 대시보드 → Settings → Domains → khelping.com 추가
# DNS 레코드: CNAME → cname.vercel-dns.com
```

### 4.3 도메인 DNS 설정

```
Type    Name    Value                    TTL
A       @       76.76.21.21              3600
CNAME   www     cname.vercel-dns.com     3600
```

---

## 5. 콘텐츠 교체 가이드

프로토타입에 더미 데이터가 들어 있습니다. 아래 파일을 교체하세요:

| 항목 | 파일 위치 | 교체 내용 |
|------|-----------|-----------|
| 로고 | public/images/logo.svg | Khelping 로고 파일 |
| OG 이미지 | public/images/og-image-th.png, og-image-ko.png | Facebook 공유용 이미지 |
| 채팅 스크린샷 | public/images/step1.png ~ step3.png | 실제 주문 과정 채팅 캡처 |
| 후기 이미지 | public/images/reviews/ | 고객 후기 스크린샷 |
| 영수증 샘플 | public/images/receipt-sample.png | 실제 영수증 (개인정보 가림) |
| LINE URL | lib/config.ts → lineUrl | ✅ 설정 완료 (https://lin.ee/aaoVEiE) |
| Facebook URL | lib/config.ts → facebookUrl | ✅ 설정 완료 (facebook.com/khelping) |
| GA4 ID | lib/config.ts → gaId | ✅ 설정 완료 (G-S1X5BM2LYF) |
| 태국어 카피 | messages/th.json | 태국 직원 검수 후 수정 |
| 한국어 카피 | messages/ko.json | 필요 시 수정 |

---

## 6. Phase별 페이지 추가 방법

### Phase 2: 후기 페이지 추가

```bash
# 1. 파일 생성
mkdir -p app/[locale]/reviews
touch app/[locale]/reviews/page.tsx

# 2. sitemap.ts에 추가
# pages 배열에 { path: '/reviews', ... } 추가

# 3. nav에 링크 추가
# messages/th.json, ko.json의 nav에 reviews 항목 추가
```

### Phase 3: 블로그 추가

```bash
# 1. MDX 지원 추가
npm install @next/mdx @mdx-js/loader

# 2. 블로그 폴더 구조
app/[locale]/blog/
├── page.tsx          ← 블로그 목록
└── [slug]/
    └── page.tsx      ← 개별 포스트

# 3. CMS 연동 (선택)
# Sanity, Contentful, Notion 등 검토
```
