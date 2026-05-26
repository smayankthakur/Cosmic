import { useState, useEffect } from 'react';
import StarField from './components/StarField';
import ContentRenderer from './components/ContentRenderer';
import CosmicLogo from './components/CosmicLogo';
import { TABS } from './data/astro';

const ENTITY_META = {
  m: { label: 'Mayank', short: 'M', color: '#4A8CDB', bg: 'rgba(74,140,219,0.2)', desc: 'Scorpio · Rahu MD', role: 'Founder · Builder' },
  d: { label: 'Deeksha', short: 'D', color: '#C4607A', bg: 'rgba(196,96,122,0.2)', desc: 'Taurus · Mercury MD', role: 'Creator · Seeker' },
  t: { label: 'Together', short: '∞', color: '#C9A84C', bg: 'rgba(201,168,76,0.2)', desc: 'Joint Destiny', role: 'Synastry & Union' },
  c: { label: 'Crossroads', short: '⊕', color: '#1DBEAA', bg: 'rgba(29,190,170,0.15)', desc: 'Decision Points', role: 'Karmic Choice' },
  s: { label: 'Separation', short: '⟁', color: '#C0506A', bg: 'rgba(192,80,106,0.15)', desc: 'The Price', role: 'Void Analysis' },
};

export default function App() {
  const [entity, setEntity] = useState('m');
  const [tab, setTab]       = useState('foundation');
  const [introGone, setIntroGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIntroGone(true), 4200);
    return () => clearTimeout(t);
  }, []);

  const em = ENTITY_META[entity];
  const currentTab = TABS.find(t => t.id === tab);

  return (
    <>
      <StarField />

      {/* ── INTRO OVERLAY ── */}
      {!introGone && (
        <div className="intro-overlay" aria-live="polite" role="status">
          <div className="intro-logo-wrap">
            <CosmicLogo size={120} animate className="intro-logo-svg" />
          </div>
          <div className="intro-title">Cosmic Matrix</div>
          <div className="intro-subtitle">Astrological Analysis Software</div>
          <div className="intro-tagline">Vedic · KP · Bhrigu Nandi Nadi</div>
          <div className="intro-progress" aria-hidden="true" />
        </div>
      )}

      <div className="app-shell">

        {/* ── SIDEBAR ── */}
        <aside className="sidebar" aria-label="Primary navigation">

          {/* Brand / Logo */}
          <div className="sidebar-brand">
            <div className="logo-mark">
              <div className="logo-svg-wrap">
                <CosmicLogo size={64} animate />
              </div>
            </div>
            <div className="brand-name">Cosmic Matrix</div>
            <div className="brand-tagline">Vedic · KP · Nadi</div>
          </div>

          {/* Individual entities */}
          <nav className="sidebar-section" aria-label="Individual charts">
            <div className="sidebar-label">Individuals</div>
            {['m', 'd'].map(id => {
              const meta = ENTITY_META[id];
              return (
                <button
                  key={id}
                  className={`sidebar-item${entity === id ? ' active' : ''}`}
                  onClick={() => setEntity(id)}
                  aria-current={entity === id ? 'page' : undefined}
                >
                  <div className="sidebar-avatar" style={{ background: meta.bg, color: meta.color }}>
                    {meta.short}
                  </div>
                  {meta.label}
                </button>
              );
            })}
          </nav>

          <div className="sidebar-divider" />

          {/* Joint analysis */}
          <nav className="sidebar-section" aria-label="Joint analysis">
            <div className="sidebar-label">Joint Analysis</div>
            {['t', 'c', 's'].map(id => {
              const meta = ENTITY_META[id];
              return (
                <button
                  key={id}
                  className={`sidebar-item${entity === id ? ' active' : ''}`}
                  onClick={() => setEntity(id)}
                  aria-current={entity === id ? 'page' : undefined}
                >
                  <div className="sidebar-avatar" style={{ background: meta.bg, color: meta.color, fontSize: '13px' }}>
                    {meta.short}
                  </div>
                  {meta.label}
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="sidebar-footer">
            <div className="sidebar-dasha">
              <strong>Active View</strong>
              <div className="sidebar-dasha-val" style={{ color: em.color }}>{em.label}</div>
              <div className="sidebar-dasha-sub">{em.desc}</div>
              <div className="sidebar-dasha-sub" style={{ marginTop: '0.1rem', color: 'var(--dim)' }}>{em.role}</div>
            </div>
            <div className="sidebar-system">
              <div className="sidebar-system-title">Astrological System</div>
              <div className="sidebar-system-val">
                Vedic · KP · Nadi<br />
                Lahiri Ayanamsha<br />
                Vimshottari Dasha
              </div>
            </div>
          </div>
        </aside>

        {/* ── RIGHT COLUMN ── */}
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>

          {/* Top-bar tabs */}
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
                  <span className="tab-icon" aria-hidden="true">{t.icon}</span>
                  {t.label}
                </button>
              </span>
            ))}
          </header>

          {/* Entity strip */}
          <div className="entity-strip" aria-label="Current context">
            <div
              className="entity-strip-dot"
              style={{ background: em.color, boxShadow: `0 0 8px ${em.color}` }}
            />
            <span className="entity-strip-name" style={{ color: em.color }}>
              {em.label}
            </span>
            <span className="entity-strip-sep">·</span>
            <span className="entity-strip-tab">
              {currentTab?.icon} {currentTab?.label}
            </span>
            <span className="entity-strip-desc">{em.desc} · {em.role}</span>
          </div>

          {/* Main content */}
          <main
            className="main-content"
            role="tabpanel"
            aria-label={`${em.label} — ${currentTab?.label}`}
            key={`${entity}-${tab}`}
          >
            <ContentRenderer entity={entity} tab={tab} />
          </main>
        </div>
      </div>
    </>
  );
}
