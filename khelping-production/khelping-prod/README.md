# K-Helping Website

한국 거주 태국인을 위한 한국 쇼핑몰 구매대행 서비스 웹사이트.

## 빠른 시작

```bash
# 1. 패키지 설치
npm install

# 2. 환경변수 설정
cp .env.example .env.local
# .env.local에서 GA4 ID 입력

# 3. 개발 서버 시작
npm run dev

# 4. 브라우저에서 확인
# http://localhost:3000/th (태국어)
# http://localhost:3000/ko (한국어)
```

## Vercel 배포

```bash
# 방법 1: Vercel CLI
npm install -g vercel
vercel          # 프리뷰 배포
vercel --prod   # 프로덕션 배포

# 방법 2: GitHub 연동 (권장)
# 1. 이 프로젝트를 GitHub에 push
# 2. vercel.com에서 GitHub 저장소 연결
# 3. 자동 배포 설정 완료
```

## 커스텀 도메인 (khelping.com)

Vercel 대시보드 → Settings → Domains → `khelping.com` 추가

DNS 설정:
```
Type    Name    Value                    TTL
A       @       76.76.21.21              3600
CNAME   www     cname.vercel-dns.com     3600
```

## 프로젝트 구조

```
app/[locale]/          → 다국어 라우팅 (/th, /ko)
  page.tsx             → 메인 랜딩페이지
  shops/page.tsx       → 쇼핑몰 디렉토리
components/            → 재사용 컴포넌트
messages/              → 번역 파일 (th.json, ko.json)
data/                  → 쇼핑몰, 후기 데이터
public/images/reviews/ → 후기 이미지 24장 (WebP)
lib/analytics.ts       → GA4 이벤트 추적
lib/config.ts          → LINE/Facebook URL 설정
```

## 기술 스택

- Next.js 14 + TypeScript
- Tailwind CSS
- next-intl (다국어)
- Vercel (호스팅 + CDN)
- Google Analytics 4
