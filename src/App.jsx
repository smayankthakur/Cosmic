import { useState, useEffect } from 'react';
import StarField from './components/StarField';
import ContentRenderer from './components/ContentRenderer';
import { TABS, ENTITIES } from './data/astro';

const ENTITY_META = {
  m: { label: 'Mayank', short: 'M', color: '#4A8CDB', bg: 'rgba(74,140,219,0.2)', desc: 'Scorpio · Rahu MD', role: 'Founder / Builder' },
  d: { label: 'Deeksha', short: 'D', color: '#C4607A', bg: 'rgba(196,96,122,0.2)', desc: 'Taurus · Mercury MD', role: 'Creator / Seeker' },
  t: { label: 'Together', short: '∞', color: '#C9A84C', bg: 'rgba(201,168,76,0.2)', desc: 'Joint Destiny', role: 'Synastry & Union' },
  c: { label: 'Crossroads', short: '⊕', color: '#1DBEAA', bg: 'rgba(29,190,170,0.15)', desc: 'Decision Points', role: 'Karmic Choice' },
  s: { label: 'Separation', short: '⟁', color: '#C0506A', bg: 'rgba(192,80,106,0.15)', desc: 'The Price', role: 'Void Analysis' },
};

export default function App() {
  const [entity, setEntity] = useState('m');
  const [tab, setTab] = useState('foundation');
  const [introGone, setIntroGone] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // After intro animation completes
  useEffect(() => {
    const t = setTimeout(() => setIntroGone(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const handleEntity = (e) => {
    setEntity(e);
    setMobileMenuOpen(false);
  };

  const em = ENTITY_META[entity];

  return (
    <>
      <StarField />

      {/* Intro overlay */}
      {!introGone && (
        <div className="intro-overlay" aria-live="polite">
          <div className="intro-symbol">M × D</div>
          <div className="intro-title">Cosmic Matrix · Astrological Analysis Software</div>
          <div className="intro-sub">Vedic · KP · Bhrigu Nandi Nadi</div>
        </div>
      )}

      <div className="app-shell">
        {/* ── SIDEBAR ── */}
        <aside className="sidebar" aria-label="Primary navigation">
          <div className="sidebar-brand">
            <div className="brand-symbol">M × D</div>
            <div className="brand-title">Cosmic Matrix</div>
          </div>

          <nav className="sidebar-section" aria-label="Entity selection">
            <div className="sidebar-label">Entities</div>
            {['m', 'd'].map(id => {
              const meta = ENTITY_META[id];
              return (
                <button
                  key={id}
                  className={`sidebar-item${entity === id ? ' active' : ''}`}
                  onClick={() => handleEntity(id)}
                  aria-current={entity === id ? 'page' : undefined}
                  style={{ width: '100%', textAlign: 'left', font: 'inherit', cursor: 'pointer' }}
                >
                  <div className="sidebar-avatar" style={{ background: meta.bg, color: meta.color }}>
                    {meta.short}
                  </div>
                  {meta.label}
                </button>
              );
            })}
          </nav>

          <div style={{ borderTop: '1px solid var(--border-b)', margin: '0.25rem 0' }} />

          <nav className="sidebar-section" aria-label="Joint analysis">
            <div className="sidebar-label">Joint Analysis</div>
            {['t', 'c', 's'].map(id => {
              const meta = ENTITY_META[id];
              return (
                <button
                  key={id}
                  className={`sidebar-item${entity === id ? ' active' : ''}`}
                  onClick={() => handleEntity(id)}
                  aria-current={entity === id ? 'page' : undefined}
                  style={{ width: '100%', textAlign: 'left', font: 'inherit', cursor: 'pointer' }}
                >
                  <div className="sidebar-avatar" style={{ background: meta.bg, color: meta.color, fontSize: '12px' }}>
                    {meta.short}
                  </div>
                  {meta.label}
                </button>
              );
            })}
          </nav>

          <div className="sidebar-footer">
            <div className="sidebar-dasha">
              <strong>Active View</strong>
              <span style={{ color: em.color }}>{em.label}</span>
              <span style={{ display: 'block', marginTop: '0.1rem' }}>{em.desc}</span>
              <span style={{ fontSize: '0.62rem', color: 'var(--dim)' }}>{em.role}</span>
            </div>
            <div style={{ marginTop: '0.75rem', borderTop: '1px solid var(--border-b)', paddingTop: '0.6rem' }}>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.5rem', letterSpacing: '2px', color: 'var(--dim)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>System</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--dim)', lineHeight: '1.6' }}>
                Vedic · KP · Nadi<br />
                Lahiri Ayanamsha<br />
                Vimshottari Dasha
              </div>
            </div>
          </div>
        </aside>

        {/* ── RIGHT COLUMN ── */}
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>

          {/* Top bar */}
          <header className="topbar" role="tablist" aria-label="Analysis dimension">
            {TABS.map((t, i) => (
              <span key={t.id} style={{ display: 'inline-flex', alignItems: 'center' }}>
                {i > 0 && <span className="tab-sep" aria-hidden="true" />}
                <button
                  role="tab"
                  aria-selected={tab === t.id}
                  className={`tab-btn${tab === t.id ? ' active' : ''}`}
                  onClick={() => setTab(t.id)}
                >
                  <span aria-hidden="true" style={{ marginRight: '0.25rem', opacity: 0.6 }}>{t.icon}</span>
                  {t.label}
                </button>
              </span>
            ))}
          </header>

          {/* Entity header strip */}
          <div style={{
            background: 'rgba(8,4,15,0.9)',
            borderBottom: '1px solid var(--border-b)',
            padding: '0.7rem 1.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: em.color,
              boxShadow: `0 0 8px ${em.color}`,
              flexShrink: 0,
            }} />
            <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.75rem', color: em.color, letterSpacing: '2px' }}>
              {em.label.toUpperCase()}
            </span>
            <span style={{ color: 'var(--dim)', fontSize: '0.7rem' }}>·</span>
            <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', color: 'var(--gold-d)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              {TABS.find(t => t.id === tab)?.label}
            </span>
            <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--dim)', fontStyle: 'italic' }}>
              {em.desc}
            </span>
          </div>

          {/* Main scrollable content */}
          <main
            className="main-content"
            role="tabpanel"
            aria-label={`${em.label} — ${TABS.find(t => t.id === tab)?.label}`}
            key={`${entity}-${tab}`}
          >
            <ContentRenderer entity={entity} tab={tab} />
          </main>
        </div>
      </div>
    </>
  );
}
