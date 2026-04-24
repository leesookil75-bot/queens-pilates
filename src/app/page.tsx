'use client';
import Image from 'next/image';
import Navbar from './components/Navbar';
import QuoteForm from './components/QuoteForm';

const products = [
  {
    id: 'reformer',
    name: '리포머',
    nameEn: 'Reformer',
    desc: '필라테스의 핵심 기구. 다양한 스프링 저항을 통해 전신 근력, 유연성, 균형 감각을 동시에 향상시킵니다. 스튜디오 필수 기구.',
    features: ['5단계 스프링 저항 조절', '안전 스탑바 장착', '미끄럼 방지 풋바', '내구성 강화 프레임'],
    badge: '베스트셀러',
  },
  {
    id: 'combo-reformer',
    name: '콤비리포머',
    nameEn: 'Combo Reformer',
    desc: '리포머와 캐딜락이 결합된 올인원 기구. 공간 효율성이 뛰어나 소형 스튜디오에 최적. 두 배의 운동 효과를 경험하세요.',
    features: ['리포머 + 캐딜락 일체형', '공간 절약 설계', '폴딩 타워 구조', '확장 가능한 스프링 시스템'],
    badge: '인기',
  },
  {
    id: 'chair',
    name: '필라테스 체어',
    nameEn: 'Pilates Chair',
    desc: '좌식 운동에 특화된 소형 기구. 상체, 하체, 코어를 집중 단련. 공간이 좁은 스튜디오나 홈 트레이닝에 이상적입니다.',
    features: ['콤팩트한 디자인', '4분할 스프링 저항', '휴대 가능한 무게', '고강도 코어 운동'],
    badge: '소형 스튜디오 추천',
  },
  {
    id: 'barrel',
    name: '바렐',
    nameEn: 'Barrel',
    desc: '척추 교정과 스트레칭에 특화된 기구. 라운드 배럴과 스파인 코렉터로 자세 개선 및 유연성 향상에 탁월한 효과를 발휘합니다.',
    features: ['척추 교정 최적화', '라운드 커브 구조', '고밀도 폼 패딩', '다용도 스트레칭'],
    badge: '재활·교정',
  },
];

const stats = [
  { num: '500+', label: '스튜디오 납품 실적' },
  { num: '10년+', label: '필라테스 기구 제조 경력' },
  { num: '100%', label: '국내 직접 제조' },
  { num: '1:1', label: '사후 전담 서비스' },
];

const faqItems = [
  { q: '납품 후 A/S는 어떻게 되나요?', a: '납품 후 1년 무상 A/S를 제공하며, 이후에도 전담 서비스팀이 신속하게 방문 수리해 드립니다.' },
  { q: '최소 주문 수량이 있나요?', a: '1대부터 주문 가능합니다. 스튜디오 오픈 패키지(5대 이상)는 별도 할인 견적을 제공해 드립니다.' },
  { q: '납기는 얼마나 걸리나요?', a: '주문 후 평균 2~4주 내 납품 가능합니다. 수량 및 옵션에 따라 달라질 수 있으니 문의해 주세요.' },
  { q: '색상 및 옵션 커스터마이징이 가능한가요?', a: '네, 프레임 색상, 패딩 소재 및 색상 등 다양한 옵션 커스터마이징이 가능합니다. 견적 시 말씀해 주세요.' },
];

export default function Home() {
  return (
    <main style={{ background: '#0d0d0d', minHeight: '100vh' }}>
      <Navbar />

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/hero.png" alt="퀸즈필라테스 프리미엄 스튜디오" fill style={{ objectFit: 'cover', opacity: 0.35 }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,13,13,0.9) 0%, rgba(13,13,13,0.5) 50%, rgba(13,13,13,0.8) 100%)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '120px 24px 80px' }}>
          <div className="fade-in-up">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '99px', padding: '6px 16px', marginBottom: '24px' }}>
              <span style={{ color: '#c9a84c', fontSize: '0.85rem', fontWeight: 600 }}>🏆 국내 직접 제조 프리미엄 필라테스 기구</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '1.5rem' }}>
              스튜디오의 품격을<br />
              <span className="shimmer">퀸즈필라테스</span>가<br />
              완성합니다
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#a09880', maxWidth: '560px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              10년 이상의 제조 노하우로 완성된 프리미엄 필라테스 기구.<br />
              리포머, 콤비리포머, 체어, 바렐 — 스튜디오 오픈부터 교체까지 전부 책임집니다.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#quote" className="btn-primary" style={{ textDecoration: 'none', fontSize: '1.05rem' }}>
                📋 무료 견적 받기
              </a>
              <a href="#products" className="btn-outline" style={{ textDecoration: 'none', fontSize: '1.05rem' }}>
                제품 둘러보기 →
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: '#a09880', fontSize: '0.75rem' }}>
          <span>스크롤</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #c9a84c, transparent)' }} />
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section style={{ background: 'linear-gradient(135deg, #161616, #1a1a14)', padding: '60px 24px', borderTop: '1px solid rgba(201,168,76,0.15)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
          {stats.map(s => (
            <div key={s.label}>
              <div className="gold-text" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900 }}>{s.num}</div>
              <div style={{ color: '#a09880', fontSize: '0.9rem', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:640px){.stats-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section id="products" className="section">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#c9a84c', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '3px', marginBottom: '12px' }}>PRODUCTS</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>
            퀸즈필라테스 <span className="gold-text">기구 라인업</span>
          </h2>
          <div className="gold-divider" />
          <p style={{ color: '#a09880', maxWidth: '500px', margin: '1.5rem auto 0', lineHeight: 1.7 }}>
            스튜디오 규모와 목적에 맞는 최적의 기구를 추천해 드립니다.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {products.map((p, i) => (
            <div key={p.id} className="gold-card hover-lift" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
              {/* Product image placeholder with gradient */}
              <div style={{
                height: '200px', borderRadius: '10px', marginBottom: '1.5rem',
                background: `linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.05) 100%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden'
              }}>
                <Image src="/reformer.png" alt={p.name} fill style={{ objectFit: 'contain', padding: '16px', opacity: 0.9 }} />
              </div>

              <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
                <span style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', color: '#c9a84c', fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: '99px' }}>
                  {p.badge}
                </span>
              </div>

              <p style={{ color: '#c9a84c', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '4px' }}>{p.nameEn.toUpperCase()}</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>{p.name}</h3>
              <p style={{ color: '#a09880', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{p.desc}</p>

              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#c8c0b0' }}>
                    <span style={{ color: '#c9a84c' }}>✓</span> {f}
                  </li>
                ))}
              </ul>

              <a href="#quote" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1.5rem',
                padding: '12px', borderRadius: '8px', border: '1px solid rgba(201,168,76,0.3)',
                color: '#c9a84c', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none',
              }}
              >
                이 기구 견적 받기 →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section id="story" style={{ background: '#111', padding: '100px 24px', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#c9a84c', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '3px', marginBottom: '12px' }}>OUR STORY</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 900, lineHeight: 1.3, marginBottom: '1.5rem' }}>
              단 한 대의 기구에도<br />
              <span className="gold-text">진심을 다합니다</span>
            </h2>
            <div className="gold-divider" style={{ margin: '0 0 2rem 0' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { icon: '🔩', title: '국내 직접 제조', desc: '해외 수입 부품이 아닌 국내에서 직접 설계·제작합니다. 품질의 모든 과정을 직접 관리합니다.' },
                { icon: '🛡️', title: '안전 기준 준수', desc: '국내 안전 기준을 100% 충족하며, 지속적인 품질 검사를 통해 완성도를 보장합니다.' },
                { icon: '🤝', title: '납품 후 책임 서비스', desc: '납품 이후에도 전담 서비스팀이 항상 함께합니다. A/S 걱정 없이 운영에만 집중하세요.' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.5rem', minWidth: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(201,168,76,0.1)', borderRadius: '10px' }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ color: '#a09880', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', height: '500px', borderRadius: '16px', overflow: 'hidden' }}>
            <Image src="/hero.png" alt="퀸즈필라테스 제조 공정" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(201,168,76,0.1), transparent)' }} />
          </div>
        </div>
        <style>{`@media(max-width:768px){#story > div > div{grid-template-columns:1fr!important;gap:3rem!important}}`}</style>
      </section>

      {/* ─── CASES ─── */}
      <section id="cases" className="section">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#c9a84c', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '3px', marginBottom: '12px' }}>SUCCESS CASES</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>
            전국 <span className="gold-text">500개 이상</span>의 스튜디오가<br />선택했습니다
          </h2>
          <div className="gold-divider" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {[
            { studio: '서울 강남구 ○○ 필라테스', size: '60평', devices: '리포머 8대 + 체어 4대', quote: '"기구 품질도 우수하고, 납품 이후 관리까지 완벽해서 매우 만족합니다."' },
            { studio: '부산 해운대구 △△ 필라테스', size: '40평', devices: '콤비리포머 6대 + 바렐 2대', quote: '"오픈 준비부터 납품까지 친절한 상담으로 걱정 없이 진행했어요."' },
            { studio: '경기 분당구 □□ 웰니스센터', size: '100평', devices: '리포머 12대 + 전 기구 풀세트', quote: '"퀸즈필라테스 기구로 세팅 후 고객 만족도가 크게 올랐습니다."' },
          ].map((c, i) => (
            <div key={i} className="gold-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #c9a84c, #e8c97a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>👑</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{c.studio}</div>
                  <div style={{ color: '#a09880', fontSize: '0.8rem' }}>{c.size} 규모</div>
                </div>
              </div>
              <div style={{ background: 'rgba(201,168,76,0.05)', borderRadius: '8px', padding: '12px', marginBottom: '1rem', fontSize: '0.85rem', color: '#c9a84c' }}>
                📦 {c.devices}
              </div>
              <p style={{ color: '#c8c0b0', fontSize: '0.9rem', lineHeight: 1.7, fontStyle: 'italic' }}>{c.quote}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ background: '#111', padding: '100px 24px', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#c9a84c', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '3px', marginBottom: '12px' }}>FAQ</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900 }}>자주 묻는 질문</h2>
            <div className="gold-divider" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqItems.map((f, i) => (
              <div key={i} className="gold-card" style={{ padding: '1.5rem 2rem' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '8px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span className="gold-text" style={{ minWidth: '20px' }}>Q.</span> {f.q}
                </h4>
                <p style={{ color: '#a09880', lineHeight: 1.7, paddingLeft: '32px', fontSize: '0.95rem' }}>
                  <span style={{ color: '#c9a84c', marginRight: '8px' }}>A.</span>{f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE ─── */}
      <section id="quote" className="section">
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#c9a84c', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '3px', marginBottom: '12px' }}>CONTACT</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>
              무료 견적 및 <span className="gold-text">상담 신청</span>
            </h2>
            <div className="gold-divider" />
            <p style={{ color: '#a09880', marginTop: '1.5rem', lineHeight: 1.7 }}>
              기구 종류, 수량, 예산을 알려주시면 맞춤 견적을 빠르게 보내드립니다.<br />
              스튜디오 창업 컨설팅도 무료로 제공합니다.
            </p>
          </div>

          <div className="gold-card" style={{ padding: '3rem' }}>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ borderTop: '1px solid rgba(201,168,76,0.15)', background: '#0a0a0a', padding: '48px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div style={{ marginBottom: '12px' }}>
              <span className="gold-text" style={{ fontSize: '1.2rem', fontWeight: 900 }}>QUEENS</span>
              <span style={{ color: '#f5f0e8', fontSize: '1.2rem', fontWeight: 300, letterSpacing: '2px', marginLeft: '4px' }}>PILATES</span>
            </div>
            <p style={{ color: '#a09880', fontSize: '0.85rem', lineHeight: 1.7 }}>
              국내 최고급 필라테스 기구 제조 브랜드<br />
              스튜디오 창업부터 개인 구매까지 함께합니다.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={{ color: '#c9a84c', fontWeight: 700, marginBottom: '4px' }}>연락처</p>
            <a href="tel:01035208808" style={{ color: '#a09880', textDecoration: 'none', fontSize: '0.9rem' }}>📞 010-3520-8808</a>
            <a href="mailto:mubin95@hanmail.net" style={{ color: '#a09880', textDecoration: 'none', fontSize: '0.9rem' }}>✉️ mubin95@hanmail.net</a>
            <p style={{ color: '#a09880', fontSize: '0.85rem', marginTop: '8px' }}>
              평일 09:00 - 18:00 / 토·일 휴무
            </p>
          </div>
        </div>
        <div style={{ maxWidth: '1200px', margin: '2rem auto 0', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
          <p style={{ color: '#555', fontSize: '0.8rem' }}>© 2025 퀸즈필라테스. All rights reserved.</p>
        </div>
      </footer>

      {/* ─── FLOATING CTA ─── */}
      <a href="#quote" style={{ textDecoration: 'none' }}>
        <div className="floating-cta">
          📋 <span>무료 견적 받기</span>
        </div>
      </a>
    </main>
  );
}
