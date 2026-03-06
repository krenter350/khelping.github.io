export interface Shop {
  name: string;
  cat: string;
  color: string;
  url: string;
  popular?: boolean;
  rank?: number;
  th: string;
  ko: string;
}

export const categories = {
  th: { all: "ทั้งหมด", general: "🛒 ช้อปปิ้งทั่วไป", beauty: "💄 บิวตี้", fashion: "👗 แฟชั่น", luxury: "✨ แบรนด์เนม", living: "🏠 ของใช้/อาหาร", electronics: "📱 อิเล็กทรอนิกส์", kpop: "🎵 K-POP/หนังสือ", sports: "⚽ กีฬา", kids: "🧸 เด็ก", health: "💊 สุขภาพ", pet: "🐾 สัตว์เลี้ยง" },
  ko: { all: "전체", general: "🛒 종합쇼핑", beauty: "💄 뷰티/화장품", fashion: "👗 패션/의류", luxury: "✨ 명품/럭셔리", living: "🏠 생활/식품", electronics: "📱 전자제품", kpop: "🎵 K-POP/도서", sports: "⚽ 스포츠", kids: "🧸 유아/키즈", health: "💊 건강/영양제", pet: "🐾 반려동물" },
};

export const shops: Shop[] = [
  { name: "Coupang", cat: "general", color: "#E31837", url: "coupang.com", popular: true, rank: 1, th: "ช้อปครบจบที่เดียว! ส่งเร็วด้วย Rocket Delivery ถึงบ้านพรุ่งนี้", ko: "로켓배송으로 내일 도착! 생활용품부터 전자제품까지 최저가" },
  { name: "Olive Young", cat: "beauty", color: "#A2C73B", url: "oliveyoung.co.kr", popular: true, rank: 2, th: "ร้านเครื่องสำอางอันดับ 1! มีทุกแบรนด์ K-Beauty ราคาดี", ko: "K-뷰티 원스톱 쇼핑! 화장품·스킨케어 최다 브랜드 보유" },
  { name: "Musinsa", cat: "fashion", color: "#000000", url: "musinsa.com", popular: true, rank: 3, th: "แฟชั่นเกาหลีอันดับ 1! แบรนด์สตรีท เสื้อผ้าผู้ชายเยอะ", ko: "국내 최대 패션 플랫폼! 스트릿 브랜드·남성 패션 강자" },
  { name: "Naver Shopping", cat: "general", color: "#03CF5D", url: "shopping.naver.com", popular: true, rank: 4, th: "เปรียบเทียบราคาจากทุกร้านค้าในเกาหลี หาของถูกสุดได้ที่นี่!", ko: "가격비교 최강! 모든 쇼핑몰 상품을 한번에 검색" },
  { name: "11번가 (11st)", cat: "general", color: "#FF0038", url: "11st.co.kr", popular: true, rank: 5, th: "ดีลลดราคาเยอะมาก สินค้าหลากหลาย มีของนำเข้าด้วย", ko: "특가 딜이 많고 다양한 카테고리. 해외직구도 가능" },
  { name: "Gmarket", cat: "general", color: "#00A650", url: "gmarket.co.kr", popular: true, rank: 6, th: "เว็บช้อปปิ้งเก่าแก่ ของถูก โปรเยอะ สินค้าครบทุกอย่าง", ko: "오랜 역사의 종합몰. 빅세일 이벤트가 많고 카테고리 다양" },
  { name: "Pet Friends", cat: "pet", color: "#FF8C00", url: "pet-friends.co.kr", popular: true, rank: 7, th: "ของใช้สัตว์เลี้ยง อาหารหมาแมว ส่งเร็วราคาดี", ko: "반려동물 용품 1위. 빠른배송·최저가" },
  { name: "Kurly", cat: "general", color: "#5F0080", url: "kurly.com", popular: true, rank: 8, th: "อาหารสด ผัก ผลไม้ส่งถึงบ้านเช้า! มีของดีเยอะ", ko: "새벽배송 프리미엄 식품. 신선식품·유기농 전문" },
  { name: "Daiso", cat: "living", color: "#FF0000", url: "daisomall.com", popular: true, rank: 9, th: "ของถูกมาก! เริ่มต้น ₩1,000 ของใช้ในบ้านครบ", ko: "₩1,000부터! 생활용품·문구·인테리어 소품" },
  { name: "Weverse Shop", cat: "kpop", color: "#1DB954", url: "weverseshop.io", popular: true, rank: 10, th: "ของ BTS, TXT, SEVENTEEN ของแท้จากค่าย HYBE!", ko: "하이브 공식 굿즈샵. BTS·세븐틴·TXT" },
  { name: "Auction", cat: "general", color: "#FF6600", url: "auction.co.kr", th: "คล้าย Gmarket ของถูก โปรโมชั่นเยอะ", ko: "지마켓과 유사한 종합몰. 생활용품 저렴" },
  { name: "SSG.COM", cat: "general", color: "#FF5452", url: "ssg.com", th: "ของดีมีคุณภาพ อาหารสด ของใช้พรีเมียม", ko: "신세계 계열 프리미엄 쇼핑몰. 식품·생활용품" },
  { name: "Lotte ON", cat: "general", color: "#E60012", url: "lotteon.com", th: "ลอตเต้ ช้อปปิ้งออนไลน์ สินค้าหลากหลาย", ko: "롯데 계열 종합몰. 백화점 상품부터 식품까지" },
  { name: "Innisfree", cat: "beauty", color: "#1B7340", url: "innisfree.com", th: "เครื่องสำอางธรรมชาติจากเชจู ราคาไม่แพง", ko: "제주 자연 성분 화장품. 가성비 좋은 스킨케어" },
  { name: "Laneige", cat: "beauty", color: "#0078C8", url: "laneige.com", th: "สกินแคร์พรีเมียม Water Sleeping Mask ดัง!", ko: "워터 슬리핑 마스크로 유명. 프리미엄 스킨케어" },
  { name: "COSRX", cat: "beauty", color: "#000000", url: "cosrx.co.kr", th: "สกินแคร์สำหรับผิวแพ้ง่าย เซรั่มหอยทากดัง!", ko: "민감성 피부 전문. 달팽이 뮤신 에센스 인기" },
  { name: "Rom&nd", cat: "beauty", color: "#C96B6B", url: "romand.co.kr", th: "ลิปทินท์สีสวยมาก! แบรนด์ฮิตในเกาหลี", ko: "저스틴 틴트 대표 브랜드. 트렌디한 컬러" },
  { name: "Torriden", cat: "beauty", color: "#4169E1", url: "torriden.com", th: "เซรั่มไฮยาลูรอน ขายดีมากใน Olive Young!", ko: "다이브인 세럼 올영 1위. 히알루론산 전문" },
  { name: "Anua", cat: "beauty", color: "#556B2F", url: "anua.co.kr", th: "โทนเนอร์ผักบุ้ง ขายดีสุดใน Olive Young!", ko: "어성초 토너 올영 대히트. 진정 스킨케어" },
  { name: "Beauty of Joseon", cat: "beauty", color: "#DAA520", url: "beautyofjoseon.com", th: "ครีมกันแดดดังมาก สกินแคร์แรงบันดาลใจจากโชซอน", ko: "조선미녀 선크림 글로벌 히트. 한방 스킨케어" },
  { name: "Mediheal", cat: "beauty", color: "#00BFFF", url: "mediheal.com", th: "มาสก์หน้าขายดีที่สุดในเกาหลี! เหมาะซื้อเป็นของฝาก", ko: "대한민국 마스크팩 1위. 선물용으로 인기" },
  { name: "Etude", cat: "beauty", color: "#FF6B9D", url: "etude.com", th: "เครื่องสำอางน่ารัก ราคาเบาๆ เหมาะสาวๆ วัยเรียน", ko: "귀여운 패키지, 합리적 가격. MZ세대 인기" },
  { name: "Sulwhasoo", cat: "beauty", color: "#8B6914", url: "sulwhasoo.com", th: "สกินแคร์แบรนด์หรูของเกาหลี ใช้สมุนไพร", ko: "한방 프리미엄 스킨케어. 윤조에센스 대표" },
  { name: "Ably", cat: "fashion", color: "#FF2D55", url: "a-bly.com", th: "แฟชั่นผู้หญิง ราคาถูก สไตล์เกาหลีแท้ๆ", ko: "여성 패션 앱 1위. 저렴하고 트렌디" },
  { name: "Zigzag", cat: "fashion", color: "#FF6B00", url: "zigzag.kr", th: "รวมร้านแฟชั่นเกาหลีเยอะมาก เปรียบเทียบราคาได้", ko: "여성 패션 앱. 다양한 쇼핑몰 비교" },
  { name: "W Concept", cat: "fashion", color: "#000000", url: "wconcept.co.kr", th: "แบรนด์ดีไซเนอร์เกาหลี เสื้อผ้าสไตล์มีคลาส", ko: "디자이너 브랜드 셀렉트샵. 프리미엄 패션" },
  { name: "29CM", cat: "fashion", color: "#1A1A1A", url: "29cm.co.kr", th: "เสื้อผ้ามินิมอล ของแต่งบ้าน เท่มาก", ko: "감성 큐레이션 셀렉트샵. 패션·라이프스타일" },
  { name: "StyleNanda", cat: "fashion", color: "#E91E8C", url: "stylenanda.com", th: "แฟชั่น+เครื่องสำอาง 3CE! สไตล์สาวเกาหลี", ko: "3CE 코스메틱+패션. K-스타일 아이콘" },
  { name: "NERDY", cat: "fashion", color: "#FF9900", url: "nerdy.kr", th: "แบรนด์สตรีทเกาหลี ดาราเกาหลีใส่เยอะ!", ko: "뉴트로 스트릿 브랜드. 셀럽들 착용 인기" },
  { name: "Mardi Mercredi", cat: "fashion", color: "#FFD700", url: "mardimercredi.com", th: "เสื้อปักดอกไม้ สไตล์น่ารักมินิมอล", ko: "플라워 로고 인기 브랜드. 감성 캐주얼" },
  { name: "Balaan", cat: "luxury", color: "#000000", url: "balaan.co.kr", th: "แบรนด์เนมแท้ 100% ราคาดีกว่าช็อป", ko: "명품 플랫폼. 정품 보장·국내 최저가" },
  { name: "Must It", cat: "luxury", color: "#2C2C2C", url: "mustit.co.kr", th: "เว็บแบรนด์เนมใหญ่ที่สุด ราคาเปรียบเทียบได้", ko: "국내 최대 명품 플랫폼. 다양한 브랜드" },
  { name: "E-Mart Mall", cat: "living", color: "#FFB81C", url: "emart.ssg.com", th: "ซูเปอร์มาร์เก็ตออนไลน์ อาหาร ของใช้ ราคาถูก", ko: "이마트 온라인. 식품·생필품 대량 구매" },
  { name: "IKEA Korea", cat: "living", color: "#0051BA", url: "ikea.co.kr", th: "เฟอร์นิเจอร์ ของแต่งบ้าน ราคาไม่แพง", ko: "가구·인테리어 소품. 합리적 가격" },
  { name: "CJ The Market", cat: "living", color: "#FF6B00", url: "cjthemarket.com", th: "อาหารแบรนด์ CJ บิบิโก ดังมาก!", ko: "CJ 식품 직영몰. 비비고·햇반 등" },
  { name: "Today's House", cat: "living", color: "#35C5F0", url: "ohou.se", th: "ของแต่งบ้าน เฟอร์นิเจอร์ มีรีวิวห้องจริง", ko: "인테리어 플랫폼. 가구·소품·시공" },
  { name: "10x10", cat: "living", color: "#FF6B6B", url: "10x10.co.kr", th: "ของแต่งบ้าน ของขวัญ น่ารัก เหมาะซื้อเป็นของฝาก", ko: "디자인 소품·문구·선물. 감성 라이프스타일" },
  { name: "Samsung Store", cat: "electronics", color: "#1428A0", url: "samsung.com/sec", th: "มือถือ เครื่องใช้ไฟฟ้า Samsung ของแท้", ko: "삼성 공식몰. 갤럭시·가전·이벤트" },
  { name: "Apple Korea", cat: "electronics", color: "#555555", url: "apple.com/kr", th: "iPhone, Mac, iPad ราคาเกาหลี", ko: "애플 공식몰. 교육 할인·각인 서비스" },
  { name: "Danawa", cat: "electronics", color: "#0078FF", url: "danawa.com", th: "เปรียบเทียบราคาอิเล็กทรอนิกส์ หาถูกสุด!", ko: "전자제품 가격비교 1위. 최저가 검색" },
  { name: "SM Global Shop", cat: "kpop", color: "#FF0099", url: "smglobalshop.com", th: "ของ EXO, NCT, aespa จาก SM!", ko: "SM 공식 글로벌샵. NCT·aespa·EXO" },
  { name: "YG Select", cat: "kpop", color: "#000000", url: "ygselect.com", th: "ของ BLACKPINK, TREASURE จาก YG!", ko: "YG 공식샵. 블랙핑크·트레저" },
  { name: "Ktown4u", cat: "kpop", color: "#FF3366", url: "ktown4u.com", th: "อัลบั้ม K-POP ครบทุกค่าย ซื้อนับชาร์ตได้!", ko: "K-POP 앨범 전문. 차트 반영·팬사인회 응모" },
  { name: "Yes24", cat: "kpop", color: "#253B80", url: "yes24.com", th: "ร้านหนังสือออนไลน์ อัลบั้ม ตั๋วคอนเสิร์ต", ko: "도서·음반·공연티켓 종합" },
  { name: "Nike Korea", cat: "sports", color: "#000000", url: "nike.com/kr", th: "รองเท้า เสื้อผ้า Nike ของแท้ มี Korea exclusive!", ko: "나이키 공식몰. 한국 한정판·멤버 혜택" },
  { name: "New Balance Korea", cat: "sports", color: "#CF0A2C", url: "nbkorea.com", th: "New Balance เกาหลี มี 993, 2002R ราคาดี!", ko: "뉴발란스 공식몰. 한국 한정·인기 모델" },
  { name: "North Face Korea", cat: "sports", color: "#000000", url: "thenorthfacekorea.co.kr", th: "เสื้อกันหนาว แจ็คเก็ต ชาวเกาหลีนิยมใส่มาก!", ko: "아웃도어 인기 브랜드. 한국 한정 모델" },
  { name: "Agabang", cat: "kids", color: "#FF69B4", url: "agabang.com", th: "เสื้อผ้าเด็กเกาหลี น่ารัก คุณภาพดี", ko: "유아동복 대표 브랜드. 고품질 소재" },
  { name: "iHerb Korea", cat: "health", color: "#6B8E23", url: "kr.iherb.com", th: "วิตามิน อาหารเสริม นำเข้า ราคาดี", ko: "건강식품·비타민. 직구 인기" },
  { name: "Chong Kun Dang", cat: "health", color: "#003366", url: "ckdmall.com", th: "วิตามิน อาหารเสริมแบรนด์เกาหลีดัง", ko: "종근당 건강 공식몰. 비타민·영양제" },
];

export const topShops = shops.filter(s => s.popular).sort((a, b) => (a.rank || 99) - (b.rank || 99));
