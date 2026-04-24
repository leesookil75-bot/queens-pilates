'use client';

import { useState, useTransition } from 'react';
import { submitQuoteRequest } from '../actions';

const PRODUCTS = ['리포머', '콤비리포머', '필라테스 체어', '바렐', '기타'];

export default function QuoteForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [isPending, startTransition] = useTransition();

  const toggle = (p: string) => setSelected(prev =>
    prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    startTransition(async () => {
      const res = await submitQuoteRequest({
        name: fd.get('name') as string,
        phone: fd.get('phone') as string,
        email: fd.get('email') as string,
        studioName: fd.get('studioName') as string,
        products: selected,
        quantity: fd.get('quantity') as string,
        message: fd.get('message') as string,
      });
      if (res.success) setDone(true);
    });
  };

  if (done) return (
    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
      <h3 className="gold-text" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>견적 요청이 완료되었습니다!</h3>
      <p style={{ color: '#a09880' }}>빠른 시일 내 연락드리겠습니다. 감사합니다.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#a09880', marginBottom: '6px' }}>담당자명 *</label>
          <input name="name" required className="form-input" placeholder="홍길동" />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#a09880', marginBottom: '6px' }}>연락처 *</label>
          <input name="phone" required className="form-input" placeholder="010-0000-0000" />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#a09880', marginBottom: '6px' }}>이메일</label>
          <input name="email" type="email" className="form-input" placeholder="example@email.com" />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#a09880', marginBottom: '6px' }}>스튜디오 / 업체명</label>
          <input name="studioName" className="form-input" placeholder="OO 필라테스" />
        </div>
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '0.85rem', color: '#a09880', marginBottom: '10px' }}>관심 기구 (복수 선택 가능) *</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {PRODUCTS.map(p => (
            <button key={p} type="button" onClick={() => toggle(p)} style={{
              padding: '8px 18px', borderRadius: '99px', border: '1.5px solid',
              borderColor: selected.includes(p) ? '#c9a84c' : 'rgba(201,168,76,0.25)',
              background: selected.includes(p) ? 'rgba(201,168,76,0.15)' : 'transparent',
              color: selected.includes(p) ? '#c9a84c' : '#a09880',
              cursor: 'pointer', fontSize: '0.9rem', transition: 'all 0.2s'
            }}>{p}</button>
          ))}
        </div>
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '0.85rem', color: '#a09880', marginBottom: '6px' }}>예상 수량</label>
        <input name="quantity" className="form-input" placeholder="예: 리포머 5대, 체어 2대" />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '0.85rem', color: '#a09880', marginBottom: '6px' }}>추가 문의사항</label>
        <textarea name="message" className="form-input" rows={4} placeholder="스튜디오 평수, 오픈 일정, 예산 등 자유롭게 작성해 주세요." style={{ resize: 'none' }} />
      </div>
      <button type="submit" className="btn-primary" disabled={isPending} style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem', padding: '16px' }}>
        {isPending ? '전송 중...' : '🏋️ 무료 견적 요청하기'}
      </button>
      <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#a09880' }}>
        📞 즉시 상담: <a href="tel:01035208808" style={{ color: '#c9a84c' }}>010-3520-8808</a>
      </p>
    </form>
  );
}
