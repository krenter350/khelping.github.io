'use client';

import { useTranslations } from 'next-intl';
import { useSectionTracker } from '@/lib/hooks/useSectionTracker';

const stepColors = ['#00BCD4', '#7B2D8E', '#00897B'];

const chatData = {
  th: [
    [{ from: 'user', msg: 'สนใจตัวนี้ค่ะ 🛒' }, { from: 'user', msg: '[ลิงก์ Olive Young]' }, { from: 'bot', msg: 'ได้เลยค่ะ! รอเช็คราคาสักครู่นะคะ 😊' }],
    [{ from: 'bot', msg: 'สรุปยอดค่ะ:' }, { from: 'bot', msg: '🧴 เซรั่ม ₩25,000\n💄 ลิปทินท์ ₩12,000\n📦 ค่าบริการ ₩2,000\n──────────\n💰 รวม ₩39,000' }, { from: 'user', msg: 'โอเคค่ะ สั่งเลย!' }],
    [{ from: 'user', msg: 'โอนแล้วค่ะ ✅' }, { from: 'bot', msg: 'ได้รับแล้วค่ะ! สั่งซื้อเรียบร้อย 🎉' }, { from: 'bot', msg: '📋 ใบเสร็จ: [รูปใบเสร็จ]\nจัดส่งไปที่บ้านภายใน 1-3 วันค่ะ' }],
  ],
  ko: [
    [{ from: 'user', msg: '이거 주문하고 싶어요 🛒' }, { from: 'user', msg: '[올리브영 링크]' }, { from: 'bot', msg: '네! 가격 확인하고 바로 알려드릴게요 😊' }],
    [{ from: 'bot', msg: '총액 안내드립니다:' }, { from: 'bot', msg: '🧴 세럼 ₩25,000\n💄 립틴트 ₩12,000\n📦 수수료 ₩2,000\n──────────\n💰 합계 ₩39,000' }, { from: 'user', msg: '네 주문해주세요!' }],
    [{ from: 'user', msg: '입금했습니다 ✅' }, { from: 'bot', msg: '확인했습니다! 주문 완료 🎉' }, { from: 'bot', msg: '📋 영수증: [영수증 이미지]\n자택 배송 1~3일 소요됩니다' }],
  ],
};

function ChatBubble({ msg, from }: { msg: string; from: string }) {
  const isUser = from === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className="max-w-[80%] px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-line shadow-sm"
        style={{
          borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
          background: isUser ? '#00BCD4' : '#f0f0f0',
          color: isUser ? '#fff' : '#333',
        }}>{msg}</div>
    </div>
  );
}

function ChatMockup({ messages, color }: { messages: any[]; color: string }) {
  return (
    <div className="bg-white rounded-[20px] p-4 shadow-medium border border-gray-100 max-w-[320px] mx-auto">
      <div className="rounded-xl px-3.5 py-2 mb-3 flex items-center gap-2" style={{ background: color }}>
        <div className="w-7 h-7 rounded-full bg-white/30 flex items-center justify-center text-sm font-bold text-white">K</div>
        <span className="text-white font-semibold text-[13px]">K-Helping</span>
        <span className="text-white/70 text-[11px] ml-auto">Online</span>
      </div>
      {messages.map((m: any, i: number) => <ChatBubble key={i} msg={m.msg} from={m.from} />)}
    </div>
  );
}

export default function HowItWorks() {
  const t = useTranslations('steps');
  const ref = useSectionTracker('how_it_works');
  const locale = typeof window !== 'undefined' && window.location.pathname.startsWith('/ko') ? 'ko' : 'th';

  const steps = [
    { step: 'STEP 1', title: t('step1Title'), desc: t('step1Desc') },
    { step: 'STEP 2', title: t('step2Title'), desc: t('step2Desc') },
    { step: 'STEP 3', title: t('step3Title'), desc: t('step3Desc') },
  ];

  const chats = chatData[locale as keyof typeof chatData] || chatData.th;

  return (
    <section ref={ref as any} data-section="how_it_works"
      style={{ background: 'linear-gradient(160deg, #E0F7FA 0%, #B2EBF2 30%, #E1BEE7 70%, #F3E5F5 100%)' }}>
      <div className="section-container">
        <h2 className="text-center text-[clamp(24px,5vw,36px)] font-extrabold mb-2">{t('title')}</h2>
        <p className="text-center text-gray-400 text-[15px] mb-12">{t('subtitle')}</p>
        <div className="flex flex-col gap-12">
          {steps.map((step, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <div className="inline-block rounded-full px-4 py-1 text-xs font-bold text-white mb-3 tracking-wider"
                  style={{ background: stepColors[i] }}>{step.step}</div>
                <h3 className="text-[clamp(20px,4vw,28px)] font-extrabold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <ChatMockup messages={chats[i]} color={stepColors[i]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
