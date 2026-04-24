'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: '제품 소개', href: '#products' },
    { label: '제조 스토리', href: '#story' },
    { label: '납품 사례', href: '#cases' },
    { label: '견적 문의', href: '#quote' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(13,13,13,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
      transition: 'all 0.3s ease',
      padding: '0 24px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
        <a href="#" style={{ textDecoration: 'none' }}>
          <span className="gold-text" style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.5px' }}>QUEENS</span>
          <span style={{ color: '#f5f0e8', fontSize: '1.4rem', fontWeight: 300, letterSpacing: '2px', marginLeft: '4px' }}>PILATES</span>
        </a>

        {/* Desktop menu */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ color: '#a09880', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
              onMouseLeave={e => (e.currentTarget.style.color = '#a09880')}
            >{l.label}</a>
          ))}
          <a href="#quote" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.9rem', textDecoration: 'none' }}>
            견적 요청
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', color: '#c9a84c', fontSize: '1.5rem', cursor: 'pointer' }} className="mobile-menu-btn">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{ background: 'rgba(13,13,13,0.98)', borderTop: '1px solid rgba(201,168,76,0.1)', padding: '1rem 24px 1.5rem' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '14px 0', color: '#f5f0e8', textDecoration: 'none', fontSize: '1.1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >{l.label}</a>
          ))}
          <a href="#quote" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ marginTop: '1rem', justifyContent: 'center', textDecoration: 'none', display: 'flex' }}>
            무료 견적 요청
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
