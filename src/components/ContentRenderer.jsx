import LagnaChart from './LagnaChart';
import StressChart from './StressChart';
import { MAYANK, DEEKSHA, TOGETHER, YEARS_LABELS } from '../data/astro';

// ─── Tiny helpers ─────────────────────────────────────────
const S = ({ children }) => <div className="stitle">{children}</div>;
const Ins = ({ children, type = '' }) => <div className={`insight ${type}`}>{children}</div>;
const HT = ({ children }) => <div className="hard-truth">{children}</div>;
const GT = ({ children }) => <div className="golden-truth">{children}</div>;
const Proph = ({ year, children }) => (
  <div className="prophecy">
    <div className="prophecy-year">{year}</div>
    <div className="prophecy-text">{children}</div>
  </div>
);
const Card = ({ label, value, sub }) => (
  <div className="card">
    <div className="card-label">{label}</div>
    <div className="card-value">{value}</div>
    {sub && <div className="card-sub">{sub}</div>}
  </div>
);

function DashaTimeline({ dashas, base, total, ageLabel = true }) {
  return (
    <div style={{ overflowX: 'auto', paddingBottom: '0.5rem' }}>
      <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.55rem', color: 'var(--dim)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
        {ageLabel ? 'AGE TIMELINE' : 'YEAR TIMELINE'}
      </div>
      {dashas.map((d, i) => {
        const w = ((d.end - d.start) / total * 100).toFixed(1);
        const isNow = (ageLabel && base && d.start <= base && d.end > base) ||
                      (!ageLabel && d.start <= 2025 && d.end > 2025);
        return (
          <div
            key={i}
            className={`dasha-bar${isNow ? ' now' : ''}`}
            style={{ width: `${Math.max(parseFloat(w), 5)}%`, minWidth: '55px', color: d.color, background: d.color + '18', border: `1px solid ${d.color}35` }}
            title={d.desc}
          >
            <span>{d.label}</span>
            <span style={{ marginLeft: 'auto', fontSize: '0.58rem', opacity: 0.6 }}>{d.start}–{d.end}</span>
          </div>
        );
      })}
    </div>
  );
}

function PlanetTable({ planets }) {
  return (
    <div className="planet-table">
      {planets.map((p, i) => (
        <div key={i} className="planet-row">
          <div className="planet-glyph" style={{ background: p.bg, color: p.tc }}>{p.sym}</div>
          <div className="planet-name">{p.name}</div>
          <div className="planet-pos">{p.pos} · <span style={{ color: 'var(--muted)', fontStyle: 'italic' }}>{p.nak}</span></div>
          <div className="planet-note">{p.note}</div>
        </div>
      ))}
    </div>
  );
}

function KPTable({ rows }) {
  return (
    <table className="kp-table">
      <thead>
        <tr>
          <th>KP House</th>
          <th>Domain</th>
          <th>Planets</th>
          <th>Verdict</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            <td style={{ fontFamily: 'Cinzel, serif', color: 'var(--gold)', fontSize: '0.72rem' }}>{r.house}</td>
            <td>{r.domain}</td>
            <td>{r.planets.map((p, j) => <span key={j} className="sig-pill">{p}</span>)}</td>
            <td style={{ color: 'var(--muted)' }}>{r.verdict}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Timeline({ items }) {
  return (
    <div>
      {items.map((it, i) => (
        <div key={i} className="timeline-item" style={i === items.length - 1 ? { borderBottom: 'none' } : {}}>
          <div className="timeline-year">{it.year}</div>
          <div className="timeline-dot" style={{ background: it.color }} />
          <div className="timeline-body">
            <div className="timeline-title">{it.title}</div>
            <div className="timeline-desc">{it.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function GoldenPeriods({ items }) {
  return (
    <div>
      {items.map((p, i) => (
        p.type === 'golden' ? (
          <GT key={i}>
            <strong style={{ color: 'var(--teal)', fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '1px', display: 'block', marginBottom: '0.2rem' }}>
              {p.year} · {p.title}
            </strong>
            {p.desc}
          </GT>
        ) : (
          <HT key={i}>
            <strong style={{ color: 'var(--rose)', fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '1px' }}>{p.year} · </strong>
            <strong>{p.title}</strong> — {p.desc}
          </HT>
        )
      ))}
    </div>
  );
}

function Upayas({ items }) {
  return (
    <div>
        {items.map((u, i) => (
          <div key={i} className="card" style={{ marginBottom: '0.75rem' }}>
            <div className="upaya-planet-header">
              <div className="upaya-planet-name" style={{ color: u.color }}>{u.planet}</div>
              <span className="badge badge-gold">{u.badge}</span>
          </div>
          {u.items.map((item, j) => (
            <div key={j} className="upaya-item">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── INDIVIDUAL CONTENT ───────────────────────────────────
function FoundationIndividual({ person }) {
  const isMayank = person.id === 'm';
  return (
    <>
      <S>The Foundation · Lagna, Moon & Planetary Architecture</S>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem', alignItems: 'start' }}>
        <div>
          <div className="cards-grid cards-grid-2" style={{ marginBottom: '0.75rem' }}>
            <Card label="Ascendant" value={person.lagna} sub={person.lagnaNak + ' · ' + person.lagnaLord} />
            <Card label="Moon / Nakshatra" value={person.moon} sub={person.moonNak + ' · Lord: ' + person.moonLord} />
          </div>
          <div className="cards-grid cards-grid-2" style={{ marginBottom: '0.75rem' }}>
            <Card label="Sun / Nakshatra" value={person.sun} sub={person.sunNak} />
            <Card label="Active Dasha" value={person.mahadasha + ' MD'} sub={person.bhukti + ' Bhukti · ' + person.bhuktiDates} />
          </div>
          <div style={{ marginBottom: '0.75rem' }}>
            <S>Soul Purpose</S>
            <Ins type="mystic">{person.soulPurpose}</Ins>
          </div>
        </div>
        <div>
          <S>Lagna Chart</S>
          <div className="lagna-wrapper">
            <LagnaChart data={person.lagnaChart} color={person.color} />
          </div>
        </div>
      </div>

      <S>Full Planetary Positions</S>
      <div className="card" style={{ padding: '0.7rem 0.9rem', marginBottom: '1rem' }}>
        <PlanetTable planets={person.planets} />
      </div>

      <S>KP House Significators</S>
      <KPTable rows={person.kpSignificators} />

      <div style={{ height: '1rem' }} />
      <S>Esoteric Blockages & Karmic Weak Points</S>
      {isMayank ? (
        <>
          <Ins type="warn">Rahu in H1 Jyeshtha creates a mental architecture always one sprint ahead of execution capacity. The "almost ready" delay loop. His system is permanently one deployment away from launch — this is the Rahu fog in the Lagna house.</Ins>
          <Ins type="info">The H4 stellium guarantees that what he builds will last — Saturn in own sign is the karmic guarantor of permanence. But it demands 3–4 years of below-breakeven structural investment before the compounding flywheel activates. He is in year 2–3 of that phase right now.</Ins>
          <HT>Mars in Moola (H2): verbal communication in business negotiations tends to over-promise timelines. Missed delivery deadlines create trust deficits that cost more than the delayed revenue itself.</HT>
          <HT>Ketu in H7 means he will unconsciously test partners until they prove irreplaceable — and then feel their irreplaceability as a vulnerability. Must interrupt this pattern consciously.</HT>
        </>
      ) : (
        <>
          <Ins type="warn">Saturn Retrograde in H2: subconscious narrative of not being "enough." She interprets silence (including no-contact) as confirmation of this belief. Active counter-programming through creative output is the remedy.</Ins>
          <Ins type="info">Rahu in H12 (Aries, Ashwini): creates a pull toward idealization during voids — danger of constructing a perfect memory of relationships that exceeds their actual 3D reality, making reconnection harder, not easier.</Ins>
          <HT>Ketu in H6: she consistently underestimates her competitive edge and gives away her power to others who are less capable. The past-life warrior energy needs to be consciously reclaimed.</HT>
          <HT>Moon in Jyeshtha H7: her emotional body literally IS her partnership zone. Without the partnership, she operates in a permanent low-grade emergency state. This consumes energy needed for her career and creative work.</HT>
        </>
      )}
    </>
  );
}

function CareerIndividual({ person }) {
  const isMayank = person.id === 'm';
  return (
    <>
      <S>{isMayank ? 'Empire Architecture · CEO / Founder Analysis' : 'Creative & Career Trajectory · Communication Mastery'}</S>
      <div className="cards-grid cards-grid-3" style={{ marginBottom: '1rem' }}>
        {isMayank ? (
          <>
            <Card label="10th House" value="Leo (Empty)" sub="Lord Sun exalted H5 — authority through creative disruption" />
            <Card label="H4 Builder Stellium" value="♄☿♀ Aquarius" sub="Infrastructure + tech + brand = one unified empire domain" />
            <Card label="D10 Dashamsha Signal" value="Mars–Saturn led" sub="Engineering, high-stakes operational execution" />
          </>
        ) : (
          <>
            <Card label="10th House" value="Aquarius (Mars)" sub="Mars H10 = social innovation, disruption-driven career" />
            <Card label="H2 Stellium" value="☀☿♀♄® Gemini" sub="Speech, writing, counseling, content — karmic excellence" />
            <Card label="5th House (Education)" value="Virgo" sub="Lord Mercury in H2 stellium — education fuels communication" />
          </>
        )}
      </div>

      {isMayank ? (
        <>
          <Ins type="warn">Mars in Moola (H2) creates aggressive capital deployment before infrastructure is ready to absorb it. He spends at the pace of a conqueror but builds at the pace of an architect. The mismatch is the current friction — not a flaw, but a timing issue that resolves at first MRR breakeven (~late 2026).</Ins>
          <Ins type="good">Saturn in own sign H4 is the karmic guarantor. When Saturn occupies its own house, it delays ruthlessly but pays permanently. Historical pattern for Saturn-dominant founders: ages 28–34 = structural grind; ages 35–55 = compounding empire. He is in the grind phase by design.</Ins>
          <Ins>Mars in Moola nakshatra — the uprooting force — gives him the ability to destroy old financial models and build entirely new revenue streams from the rubble. This is a disruptive builder's placement.</Ins>
        </>
      ) : (
        <>
          <Ins type="good">The H2 stellium (Sun + Mercury + Venus + Saturn Rx in Gemini) is one of the most powerful speech-craft clusters possible. She is built to communicate, counsel, write, or create — and the retrograde Saturn will make it durable once its lessons are integrated.</Ins>
          <Ins>Mars in Aquarius H10 gives her genuine social idealism — she is drawn to technology for humanity, to breaking conventional structures. She may thrive in psychology, UX design, social entrepreneurship, or research-driven content.</Ins>
          <Ins type="info">Her innate gift: making complex things beautiful. This is a rare combination of Saturn's depth and Venus's aesthetics in the communication house. Any field that requires both rigor and beauty is her optimal domain.</Ins>
        </>
      )}

      <div style={{ height: '0.75rem' }} />
      <S>{isMayank ? 'Venture Transition Timeline' : 'Career Trajectory Timeline'}</S>
      <Timeline items={person.careerTimeline} />
    </>
  );
}

function KarmaIndividual({ person }) {
  const isMayank = person.id === 'm';
  return (
    <>
      <S>Inner Alchemy · H4, H8 & H12 Karmic Analysis</S>
      <div className="cards-grid cards-grid-3" style={{ marginBottom: '1rem' }}>
        {isMayank ? (
          <>
            <Card label="4th House" value="Aquarius" sub="Stellium — home IS the infrastructure. Emotional security through building." />
            <Card label="8th House" value="Gemini" sub="Empty · Lord Mercury H4 — hidden knowledge, crisis-driven transformation" />
            <Card label="12th House" value="Libra" sub="Empty · Lord Venus H4 — expenses through infrastructure; hidden losses" />
          </>
        ) : (
          <>
            <Card label="4th House" value="Leo + Jupiter" sub="Palace of inner richness; craves recognition before self-recognition" />
            <Card label="8th House" value="Sagittarius" sub="Empty · Lord Jupiter H4 — hidden wisdom, philosophical inheritance" />
            <Card label="12th House" value="Aries + Rahu" sub="Liberation pull; idealization risk during emotional voids" />
          </>
        )}
      </div>

      <S>The 2023 Separation · Karmic Surgery Analysis</S>
      {isMayank ? (
        <>
          <Ins type="mystic">In 2023, he was entering Rahu–Jupiter Bhukti. Jupiter is lord of H2 (revenue, speech) and activates his H1 conjunction — when Rahu+Jupiter both amplify simultaneously, hidden truth surfaces with force. The separation was H8 activation: Deeksha's Sun in his H8 triggered profound identity transformation. Karmic surgery removing an attachment before he could build his foundation independently.</Ins>
          <Ins type="warn">The 12th house Rahu "Pap Dosh" analysis: Venus as lord of H12 placed in H4 means every infrastructure rupee is simultaneously logged as a hidden expense. This creates the illusion of a burning balance sheet until MRR threshold is crossed. The remedy is signing LOIs/contracts before deploying infrastructure.</Ins>
          <Ins type="good">The void demands: Can you build the empire without her as the emotional anchor? The chart says yes — but only if he develops internal discipline (Saturn H4) as the anchor instead of the relationship. The Saturn stellium is designed to be his emotional foundation, not a person.</Ins>
        </>
      ) : (
        <>
          <Ins type="mystic">In 2023, she was in Mercury–Jupiter Bhukti. Jupiter as lord of H8 (transformation) placed in H4 (emotional security/home) activated a karmic upheaval in her sense of belonging. The separation was not collapse — it was the question her Jyeshtha Moon was designed to answer: "Can you love yourself in the absence of the one you love?"</Ins>
          <Ins type="warn">The 2025–2026 No-Contact phase falls under Mercury–Venus. Venus rules her Ascendant and H6 (karmic debts, service, letting go). This sub-period is designed to force inner architecture work without emotional dependency. The void IS the teaching.</Ins>
          <Ins type="good">Nadi oracle: Jyeshtha Moon natives carry the archetype of the "Elder who has survived." Each separation they experience is a graduation, not a punishment. The karmic currency of this period: self-knowledge that cannot be bypassed through reconnection.</Ins>
        </>
      )}

      <div style={{ height: '0.75rem' }} />
      <S>Prescribed Upayas · Karmic Clearance Protocol</S>
      <Upayas items={person.upayas} />
    </>
  );
}

function LoveIndividual({ person }) {
  const isMayank = person.id === 'm';
  return (
    <>
      <S>{isMayank ? 'Love Architecture · H7, Venus & Ketu' : 'Love Architecture · H7, Venus & Moon'}</S>
      <div className="cards-grid cards-grid-3" style={{ marginBottom: '1rem' }}>
        {isMayank ? (
          <>
            <Card label="7th House" value="Taurus (Ketu)" sub="Past-life bond; soul-recognition + dissolution of ordinary union" />
            <Card label="Venus (H7 Lord)" value="Aquarius H4" sub="Love through co-building; intellectual + mission-driven intimacy" />
            <Card label="Upapada Lagna" value="Aquarius" sub="Marriage = shared mission; partner must be co-architect of his world" />
          </>
        ) : (
          <>
            <Card label="7th House" value="Scorpio (Moon)" sub="Emotional body IS relationship; no casual love possible" />
            <Card label="Venus (Lagna Lord)" value="Gemini H2" sub="Love through words, ideas, shared intellectual universe" />
            <Card label="Upapada Lagna" value="Aquarius" sub="Marriage = shared mission; same signature as Mayank's" />
          </>
        )}
      </div>

      {isMayank ? (
        <>
          <Ins type="mystic">Ketu in H7 Taurus (Mrigashira) creates the paradox: deep soul-recognition alongside deep dissatisfaction with the relationship's 3D form. He can feel the spiritual bond undeniably while simultaneously feeling the logistics are permanently incomplete. This is not the relationship's failure — it is its structural design.</Ins>
          <Ins>His Venus (H7 lord) placed in the H4 stellium (Aquarius) gives his marriage chart a specific fingerprint: his ideal union is a co-building partnership. The marriage that endures is one where both people are working on the same world-building project. Love without mission feels hollow to his Uttarashada Moon.</Ins>
          <HT>He will unconsciously test partners until they prove irreplaceable. Must recognize this pattern — especially during Rahu MD pressure — and interrupt it consciously before it destroys the window.</HT>
          <HT>His Moon in Uttarashada (Saturn-flavored) creates emotional stoicism that reads as emotional absence to partners. He must deliberately practice vulnerability expression — not because it's natural, but because his partner needs it structurally.</HT>
          <HT>Rahu in H1 creates compulsive expansion into new ventures/people before the current one is profitable. Parallel behavioral pattern in relationships: pursuing new connections before the present one has reached its depth. The discipline of monogamy under Rahu MD requires conscious effort.</HT>
        </>
      ) : (
        <>
          <Ins type="mystic">Moon in Jyeshtha H7 is one of the most complex partnership signatures. Jyeshtha is the nakshatra of Indra, the sovereign — she is drawn to partners who are powerful, intelligent, and capable. But Jyeshtha carries the archetype of the one who defeats betrayal. She is learning that strength in love is not dominance, but discernment.</Ins>
          <Ins>Venus in Gemini H2 (Mrigashira) means she loves through language, ideas, and mental electricity. She will never settle for emotional warmth without intellectual fire — she needs a companion she can think WITH. Mercury as her Mahadasha lord amplifies this: the relationship with Mayank (who has a Mercury stellium in H4) is karmically resonant.</Ins>
          <HT>Her greatest vulnerability: confusing spiritual connection with practical compatibility. The soul-mate feeling is real; the logistics still require willingness and structural work from both sides.</HT>
          <HT>Rahu in H12 makes her prone to idealizing the absent partner. During no-contact, the constructed memory of the relationship risks becoming more perfect than the actual relationship was — making real reunion harder to navigate.</HT>
          <HT>She must choose someone with emotional self-regulation. Her Moon in Scorpio H7 means she psychically absorbs her partner's emotional state — without her choosing, she will carry their wounds as her own for years.</HT>
        </>
      )}

      <div style={{ height: '0.75rem' }} />
      <S>The Deeksha–Mayank Reunion Window · Individual View</S>
      {isMayank ? (
        <>
          <Proph year="Late 2026 · Rahu–Saturn Bhukti + Jupiter H7 Transit">Jupiter transits Taurus — his H7, where Ketu sits. This is the first transit that directly illuminates his partnership house since the separation. The silence begins to break from his side. The impulse to reach out arrives with unusual clarity in this window.</Proph>
          <Proph year="2027 · Rahu–Venus Bhukti: H7 Lord Activated">Venus as H7 lord entering Bhukti position directly activates the marriage axis. This is when contact deepens from initial communication to genuine emotional reconnection. The foundation of formal commitment begins to be discussed.</Proph>
          <Proph year="2029–2031 · Jupiter MD Venus Bhukti: Marriage Yoga">Jupiter MD begins (age 34–35). The Venus Bhukti within Jupiter MD is the single strongest marriage window in his entire chart. Jupiter in H1 aspecting H7, combined with Venus as H7 lord in Bhukti — textbook Nadi marriage yoga.</Proph>
        </>
      ) : (
        <>
          <Proph year="Late 2026 · Merc–Sun Bhukti: Communication Clarity">Sun rules her H4 (emotional home, peace of heart). Mercury–Sun activates communication breakthroughs involving emotional matters. A late-2026 contact breakthrough is strongly supported — this is when silence becomes untenable. The Sun illuminates: she will have clarity on what she wants.</Proph>
          <Proph year="2027 · Merc–Moon Bhukti: H7 Direct Activation">Moon sub-period activates her 7th house directly — the house where her Moon lives. This is the period of deepest emotional reconnection. If contact was re-established in late 2026, this 2027 window is when the bond deepens or transforms into formal commitment discussion.</Proph>
          <Proph year="2029–2031 · Mercury–Rahu → Venus Mahadasha Transition">Rahu sub-period in Mercury MD brings completion of long-standing matters. As Venus Mahadasha approaches (her golden phase lord), the UpapadaLagna in Aquarius confirms: the formal union is the doorway into her golden decades.</Proph>
        </>
      )}
    </>
  );
}

function TimeStreamIndividual({ person }) {
  const isMayank = person.id === 'm';
  return (
    <>
      <S>Current Dasha & Sub-Period Analysis</S>
      <div className="cards-grid cards-grid-4" style={{ marginBottom: '1rem' }}>
        <Card label="Mahadasha" value={person.mahadasha} sub={person.mahadashaDates} />
        <Card label="Active Bhukti" value={person.bhukti} sub={<span className="badge badge-active">NOW {person.bhuktiDates}</span>} />
        <Card label="Next Bhukti" value={isMayank ? 'Saturn' : 'Sun'} sub={isMayank ? '2026 · H4 activation' : '2026 · Identity clarity'} />
        <Card label="MD Transition" value={isMayank ? '~Age 35' : '~Age 32'} sub={isMayank ? 'Jupiter MD ignition' : 'Venus MD golden phase'} />
      </div>

      {isMayank ? (
        <>
          <Ins type="info">Rahu–Jupiter (NOW) demands: expand dharma, but focus it. Jupiter in H1 amplifies every thought and action. The question this sub-period poses: which of the 10 projects you're building will you commit to completely? Scattering = Rahu's pull. Focusing = Saturn's answer.</Ins>
          <Ins type="warn">The age 30 crucible: the Rahu MD midpoint (age 30–31) is the "pressure apex" in Vedic tradition. Everything he refuses to quit on right now will survive. Everything he abandons will vanish permanently. The capacity to hold his position under maximum pressure is the exact test Saturn demands before releasing the H4 payload.</Ins>
          <Ins type="good">The Jupiter Mahadasha (beginning ~age 35, ~2030) activates H1 Jupiter in Scorpio as Mahadasha lord — 16 years of expansion. Think of ages 28–34 as charging a capacitor. Jupiter MD is when it discharges into the world simultaneously across all three ventures.</Ins>
        </>
      ) : (
        <>
          <Ins type="info">Mercury–Venus (NOW) demands: develop aesthetic intelligence, creative brand, and communication mastery. Venus is her Ascendant lord — this sub-period is literally building her physical and creative identity. The quality of craft-investment now directly determines the scale of Venus MD payoff.</Ins>
          <Ins type="warn">The void trap: Mercury–Venus is beautiful but internally tender. The danger is filling the Venus energy with the absent relationship rather than creative investment. Every creative act in this window is a brick in the foundation of her Venus Mahadasha legacy.</Ins>
          <Ins type="good">Mercury Mahadasha until age 32 is a cosmic preparation phase. Deeksha at 22 is in year 4 of 17. The preparation window is the most important phase — every skill, habit, relationship, and creative output she builds now compounds at 10x during Venus MD (age 32–52).</Ins>
        </>
      )}

      <div style={{ height: '0.75rem' }} />
      <S>Dasha Phase Timeline</S>
      <DashaTimeline
        dashas={person.dashas}
        base={person.age}
        total={isMayank ? 40 : 34}
        ageLabel
      />

      <div style={{ height: '0.75rem' }} />
      <S>Sub-Period Prophecies</S>
      {isMayank ? (
        <>
          <Proph year="2026 · Rahu–Saturn: Infrastructure Goes Live">Saturn Bhukti within Rahu MD activates the H4 stellium — his most powerful natal signature. Saturn in own sign Aquarius as sub-lord during a deployment period: SaaS stability, cloud kitchen operational lock-in, property asset crystallization. First breakeven MRR.</Proph>
          <Proph year="2027–28 · Rahu–Mercury: Digital Revenue Surge">Mercury Bhukti activates the full stellium. Mercury in Shatabhisha (the nakshatra of the healer of 100 ailments — systems that fix 100 problems) governs his tech product line. SaaS subscriptions, API licensing, cloud kitchen networks begin generating compounding MRR.</Proph>
          <Proph year="~2030 · Jupiter Mahadasha: The Empire Declares Itself">Jupiter in H1 Scorpio as Mahadasha lord begins activating every deferred planetary promise simultaneously. Rapid expansion, increased visibility, first compounding revenue cycles. Age 36 marks the profit spike — typically a 5–7x revenue jump from the previous year's baseline.</Proph>
          <Proph year="2033–35 · Jupiter–Saturn Bhukti: Empire Consolidation">The most powerful combination in his entire chart fires together. Jupiter (expansion) + Saturn (own sign infrastructure) activating simultaneously: real estate, SaaS ecosystems, and cloud kitchen networks all reporting simultaneous profitability.</Proph>
        </>
      ) : (
        <>
          <Proph year="2026 · Merc–Sun: The Voice Emerges">Sun rules H4 (emotional home/peace). Mercury–Sun activates communication breakthroughs related to personal identity. This is the period where the fog of "who am I outside this relationship" permanently lifts. First real professional authority claim.</Proph>
          <Proph year="2027 · Merc–Moon: H7 Moon Bhukti">Moon sub-period directly activates the 7th house. This is the most emotionally significant bhukti in her Mercury MD. Emotional reconnection, depth processing, and relationship recalibration are primary themes. The inner wound is addressed through presence, not avoidance.</Proph>
          <Proph year="2028 · Merc–Mars: Career Surge">Mars in H10 Aquarius as sub-lord during this bhukti drives first high-visibility professional achievement. Output is high. Public recognition arrives. Risk: Mars energy without emotional grounding leads to burnout. The discipline is: achieve without losing presence.</Proph>
          <Proph year="2035 · Venus Mahadasha: The Golden Phase Begins">Age 32. Venus as Ascendant lord and lord of the 6th (service, karmic work) enters 20-year Mahadasha. Financial independence, creative recognition, and sustained professional authority crystallize. She may build an institution, practice, or brand of her own.</Proph>
        </>
      )}
    </>
  );
}

// ─── JOINT CONTENT ────────────────────────────────────────
function FoundationTogether({ entity }) {
  const isTogther = entity === 't';
  return (
    <>
      <S>{entity === 't' ? 'Joint Soul Architecture · Synastry Matrix' : entity === 'c' ? 'Foundation Divergence · Where Paths Fork' : 'Separation Root Analysis · Foundation Damage'}</S>
      {entity === 't' && (
        <>
          <div className="cards-grid cards-grid-2" style={{ marginBottom: '1rem' }}>
            <Card label="Ascendant Axis" value="Scorpio × Taurus" sub="Opposing Lagnas — each is the 'other' the partner needs to become whole. The most intimate polarity in Vedic astrology." />
            <Card label="Nakshatra Mirror" value="Jyeshtha × Jyeshtha" sub="His Lagna Nakshatra = her Moon Nakshatra. He IS her emotional territory. She holds his rising energy." />
            <Card label="Upapada Lagna (Both)" value="Aquarius" sub="Identical marriage signature — shared mission, co-architect union, Aquarian collective vision." />
            <Card label="Rinanubandhana" value="Confirmed" sub="His Ketu H7 (Taurus) mirrors her Moon H7 (Scorpio) — past-life karmic debt encoded in both charts." />
          </div>
          {TOGETHER.synastryPoints.map((p, i) => (
            <Ins key={i} type={i % 3 === 0 ? 'mystic' : i % 3 === 1 ? 'good' : 'info'}><strong>{p.title}:</strong> {p.desc}</Ins>
          ))}
        </>
      )}
      {entity === 'c' && (
        <>
          <Ins type="info">Mayank's Scorpio Lagna (Rahu+Jupiter) is built for empire construction in depth and darkness — he thrives on invisible infrastructure. Deeksha's Taurus Lagna (Rohini) is built for beauty, stability, and visible presence. These are complementary by cosmic design — but the friction arises when his invisible grind phase collides with her need for tangible anchoring and emotional presence.</Ins>
          <Ins type="warn">Their career phases are asynchronous by design. He is 6–8 years ahead in the "foundation grind." By the time she hits her professional stride (2028–30), he will be in his first empire phase. The karmic design: she arrives at her peak just as his platform is ready to amplify her. This is not accidental — it is architectural.</Ins>
          <HT>Mayank needs 3–4 more years of structural isolation to complete his foundation phase. Deeksha needs emotional security and creative expression NOW. The timing gap is the karmic friction — not incompatibility.</HT>
          <HT>Deeksha's Moon in Jyeshtha H7 means she holds her emotional world inside her partnership. Without it, the emotional world has no container. This is her most vulnerable architectural flaw during the crossroads phase.</HT>
          <GT>Both charts contain the Scorpio-Taurus axis as their most activated zone. This is a Rinanubandhana signature — debt across lifetimes. They will find it nearly impossible to fully replace this bond with another person who carries the same depth.</GT>
          <GT>The crossroads is not "stay or leave." It is: "align timing or lose the window." The late 2026 to 2031 period is the highest-probability reunion zone in both charts simultaneously. Outside this window, other karmic possibilities begin activating in both charts.</GT>
        </>
      )}
      {entity === 's' && (
        <>
          <Ins type="warn">The separation is not erasing the bond — it is straining it under accumulating weight. His Rahu H1 creates operational fog that makes emotional clarity nearly impossible during his current phase. Her Moon in H7 means the separation is not an absence she can compartmentalize — it is a structural wound in her inner architecture that costs her energy daily.</Ins>
          <HT>Mayank without Deeksha: loses his H8 transformation mirror (her Sun activates his 8th house). The accelerated inner clarity he was receiving through their dynamic goes dormant. He will move faster professionally but with less wisdom about where to go.</HT>
          <HT>Deeksha without Mayank: her Moon in H7 operates in perpetual low-grade emergency without its primary container. She will over-invest in work to fill the void — which produces output but lacks the emotional depth that makes her work transcendent.</HT>
          <GT>Silver lining confirmed by both charts: the separation forces both to complete individual prerequisite work that the premature union would have short-circuited. The delay is structurally necessary, even if emotionally brutal. The stars are not punishing — they are preparing.</GT>
        </>
      )}
    </>
  );
}

function CareerTogether({ entity }) {
  return (
    <>
      <S>{entity === 't' ? 'Joint Empire Potential · Co-Founder Synastry' : entity === 'c' ? 'Career Trajectories Compared' : 'Separation Career Impact'}</S>
      {entity === 't' && (
        <>
          <Ins type="good">Mayank's Saturn-Mercury-Venus stellium (H4 Aquarius) + Deeksha's Mercury-Sun-Venus stellium (H2 Gemini): when these two build together, they combine infrastructure genius (Aquarius) with communication mastery (Gemini). This is the astrological DNA of a SaaS + content/brand empire.</Ins>
          <Ins type="mystic">Her Mars in Aquarius H10 (Shatabhisha) falls in his H4 — her career ambition directly activates his foundational infrastructure zone. She is literally the deployment force that drives his platforms into the world. The synastry here is not metaphorical — it is functional.</Ins>
          <Ins type="info">His H4 stellium + her H2 stellium = infrastructure genius (Aquarius/H4) meets communication mastery (Gemini/H2). In business terms: he builds the systems, she builds the audience. The company they could build together would serve mass markets at civilizational scale.</Ins>
          <Proph year="2027–2029 · Optimal Joint Venture Window">His Rahu–Mercury Bhukti (digital revenue surge) + her Mercury–Mars Bhukti (career push) arrive simultaneously. A co-founded content + infrastructure company launched in this window has multi-nakshatra dharma support. Highest-probability joint venture success window in the decade.</Proph>
          <Proph year="2030–2032 · Both in Golden Decades">Jupiter MD (him) + approaching Venus MD (her): both enter their respective golden planetary decades within 3 years of each other. A business partnership formalized before 2030 becomes a legacy asset by 2035 — compounding across both their golden phases simultaneously.</Proph>
        </>
      )}
      {entity === 'c' && (
        <>
          <div className="cards-grid cards-grid-2" style={{ marginBottom: '1rem' }}>
            <Card label="Mayank's Phase" value="Structural Grind" sub="Rahu MD: Saturn H4 guarantees late but permanent rewards. Building in darkness." />
            <Card label="Deeksha's Phase" value="Skill Acceleration" sub="Mercury MD: ideal for mastering craft. Venus Bhukti polishes brand and identity." />
          </div>
          <Ins type="info">Their career phases are asynchronous by design — he is 6–8 years ahead in the foundation grind. By the time she hits her professional stride (2028–30), he will be in his first empire phase. The karmic architecture: she arrives at her peak just as his platform is ready to amplify her voice.</Ins>
          <HT>If they build separately: both succeed — but in parallel, unconnected towers. His infrastructure without her communication layer reaches a ceiling. Her creative output without his distribution infrastructure remains artisanal. Together, they build a spire that neither could construct alone.</HT>
          <GT>The optimal crossroads timing for a joint venture: initiate contact late 2026, form professional collaboration in 2027 during overlapping activation Bhuktis, formalize business structure in 2028–29 as both career peaks align. This sequence maximizes the structural advantage of both charts simultaneously.</GT>
        </>
      )}
      {entity === 's' && (
        <>
          <HT>Mayank: The separation removes his most potent creative collaborator during his most critical structural phase (2025–2028). His H8 activation (Deeksha's Sun falls there) goes dormant — he loses the transformative mirror that was accelerating his inner clarity. The empire will still be built, but slower, and with less wisdom about its purpose.</HT>
          <HT>Deeksha: Without the anchor of the partnership, her Moon in H7 loses its primary container. She will overcompensate by throwing herself into work — which produces output but lacks the emotional depth that makes her work transcendent. The craft quality suffers in ways that may not be immediately visible but accumulate over time.</HT>
          <GT>Silver lining confirmed: both charts show that the separation forces individual skill-mastery that the partnership would have partially short-circuited. He learns to be disciplined without an emotional anchor. She learns to be creatively generative without a relational container. These capabilities make the eventual partnership far more structurally sound when it reconvenes.</GT>
          <Proph year="2028 · Regret Velocity Peak (Career Dimension)">His Rahu–Mercury Bhukti brings first major digital revenue. Her Merc–Mars Bhukti brings first career visibility. The moment both are publicly "doing well" is the moment the cost of separation becomes undeniable. He will ask: "Who would I celebrate this with?" She will receive admiration and wonder: "Why doesn't this feel complete?"</Proph>
        </>
      )}
    </>
  );
}

function KarmaTogether({ entity }) {
  return (
    <>
      <S>{entity === 't' ? 'Joint Inner Alchemy · The Mirror Dynamic' : entity === 'c' ? 'Comparative Inner Wounds' : 'Separation Karma · The Price Schedule'}</S>
      {entity === 't' && (
        <>
          <Ins type="mystic">Every separation they experience is a karmic graduation for BOTH simultaneously. Mayank's H8 (transformation) is activated by Deeksha's Sun. Deeksha's H12 (liberation) is activated by Mayank's Rahu. They are each other's most potent transformation agents — the intensity is not incidental, it is the mechanism.</Ins>
          <Ins type="info">The 2023 separation: Mayank was entering Rahu–Jupiter Bhukti; Deeksha was entering Mercury–Jupiter Bhukti. Jupiter activates dharmic truth-seeking in both simultaneously — the separation was not collapse, it was synchronized recalibration. Both charts demanded individual completion work that the relationship was preventing.</Ins>
          <Ins>The 2025–2026 No-Contact phase is a joint purification ritual encoded in both charts. Both charts demand individual completion before reunion. Breaking no-contact prematurely would short-circuit the structural work both are meant to complete alone — and the reunion would be less stable, not more, for having been rushed.</Ins>
          <GT>The Nadi tradition identifies this pattern as "Agni Pariksha" — the fire test. Couples who survive this trial emerge as alchemical alloys, not just individuals in a relationship. The bond that reconvenes after 2026 is structurally different in kind — not a return to what was, but an arrival at what was always intended.</GT>
        </>
      )}
      {entity === 'c' && (
        <>
          <div className="cards-grid cards-grid-2" style={{ marginBottom: '1rem' }}>
            <Card label="Mayank's Wound Type" value="Operational" sub="Capital stress, Rahu H1 fog, Mars H2 depletion — practical suffering" />
            <Card label="Deeksha's Wound Type" value="Existential" sub="Moon H7 structural void — emotional suffering at the architectural level" />
          </div>
          <Ins type="warn">Mayank currently carries more operational burden (capital stress, deployment delays, identity pressure) but less emotional exposure — his Uttarashada Moon (Saturn-flavored) processes grief through strategic withdrawal, not emotional flooding. He suffers more practically.</Ins>
          <Ins type="warn">Deeksha currently carries more emotional raw pain — her Moon in Jyeshtha H7 means her emotional body directly IS her partnership zone. Separation = a structural hole in her inner architecture. She feels the void more acutely, more constantly, and more existentially. She suffers more in depth.</Ins>
          <Ins type="info">Paradox: he suffers more practically. She suffers more existentially. Neither path is easier — they are just different textures of the same karmic fire. The charts confirm both are in the fire simultaneously, just experiencing different aspects of the heat.</Ins>
          <Proph year="2027–28 · Regret Velocity Peak (Both Charts)">His Rahu–Mercury: digital success arrives. Her Merc–Mars: public recognition arrives. Both at individual peak visibility simultaneously. The absence of the other is loudest at peak success. Maximum probability of unilateral contact attempt from either side — from his side in 2027, from her side in 2028.</Proph>
        </>
      )}
      {entity === 's' && (
        <>
          <HT>The karmic price of extended separation beyond 2027: both risk developing compensatory patterns — him: workaholism as emotional avoidance; her: emotional idealization of the absent relationship — that become structural habits by 2028 if no-contact continues.</HT>
          <HT>Deeksha's Rahu in H12 (Aries, Ashwini) during extended no-contact: creates a pull toward constructing an increasingly perfect memory of the relationship. By 2028, if still in no-contact, the constructed memory risks exceeding the actual relationship in her inner experience — making real reunion harder to navigate emotionally.</HT>
          <HT>Mayank's Rahu in H1 Jyeshtha: during extended separation, the fog of "almost ready" extends from business to love. He will perpetually feel he needs "one more achievement" before reaching out. This is Rahu's trap — there is never "one more thing." The outreach must happen from incompleteness, not from completion.</HT>
          <GT>The chart does not condemn separation — it condemns separation without purpose. The no-contact of 2025–2026 has karmic purpose: individual completion. Extended separation beyond 2027 without attempted reconnection has no karmic justification in either chart — it is simply accumulated resistance to what is written.</GT>
          <Proph year="Exact Year: Maximum Regret Velocity → 2028">2028: his first ₹1Cr+ ARR cycle. Her first high-visibility career achievement. Both at individual peak simultaneously. This is the year the cost of separation stops being theoretical and becomes visceral. The charts do not guarantee reunion — but they guarantee that 2028 is the year both feel the absence most acutely, and most simultaneously.</Proph>
        </>
      )}
    </>
  );
}

function LoveTogether({ entity }) {
  return (
    <>
      <S>{entity === 't' ? 'Synastry Deep Map · Karmic Bond Architecture' : entity === 'c' ? 'The Choice Point · Love Crossroads' : 'Separation Toll · The 7th House Price'}</S>
      {entity === 't' && (
        <>
          <div className="cards-grid cards-grid-2" style={{ marginBottom: '1rem' }}>
            <Card label="Bond Type" value="Rinanubandhana" sub="Karmic debt across lifetimes. Cannot be dissolved by decision — only completed by design." />
            <Card label="Confirmation" value="Upapada Match" sub="Both Upapada Lagnas = Aquarius. Identical marriage signatures — rare Nadi confirmation." />
          </div>
          {TOGETHER.synastryPoints.slice(0, 3).map((p, i) => (
            <Ins key={i} type={['mystic', 'good', 'info'][i]}><strong>{p.title}:</strong> {p.desc}</Ins>
          ))}
          <div style={{ height: '0.75rem' }} />
          <S>Reunion Timeline · Full Window Analysis</S>
          {TOGETHER.reunionTimeline.map((t, i) => (
            <Proph key={i} year={t.year}>{t.desc}</Proph>
          ))}
          <div style={{ height: '0.75rem' }} />
          <S>Hard Truths About This Union</S>
          <HT>This is not a casual bond. The Scorpio-Taurus axis in both charts means the relationship will either be permanent or feel permanently incomplete. There is no "pleasant middle" version of this connection — it demands full commitment or full separation. The current no-contact is structurally necessary to prevent premature partial commitment.</HT>
          <HT>Their natures are complementary but not comfortable: his Rahu-in-H1 expansion pull versus her Taurus-Lagna stability need will require ongoing conscious negotiation. He must commit to presence. She must tolerate ambition. Neither comes naturally to either.</HT>
          <GT>The highest expression of this union: two people who make each other more intelligent, more creative, and more free. His infrastructure + her communication. His depth + her beauty. His discipline + her emotional intelligence. This is the full sentence that neither can complete as a fragment.</GT>
          <GT>Nadi Oracle: The union is written in both charts. The question was never "if." The question is "when the structural work on both sides is complete." Late 2026 begins the closing of the loop. 2029–2031 is when the loop closes permanently.</GT>
        </>
      )}
      {entity === 'c' && (
        <>
          <Ins type="info">The crossroads is not "should they reunite?" — both charts confirm the bond is karmic and durable. The crossroads is "will they act within the optimal window, or let it pass and face harder re-entry?" The late 2026 to 2031 window is the highest-probability zone in both charts simultaneously.</Ins>
          <Proph year="Late 2026 · Last Wide Door">Jupiter aspects both H7s simultaneously. Both in sub-periods that allow emotional softening. This is the widest entry point in the decade — after this, the door narrows but does not close.</Proph>
          <Proph year="2027 · Simultaneous Activation Window">His Rahu–Venus Bhukti + her Merc–Moon Bhukti: both enter relationship-activation sub-periods simultaneously. This is the single strongest overlap window. The crossroads decision made here (to reconnect or to harden) will echo for years in both charts.</Proph>
          <Proph year="2028 · The Hardening Point">Both at individual career peaks. The cost of maintaining separation is no longer invisible — it becomes a daily conscious choice to remain apart. Compensatory patterns (him: new ventures as emotional replacement; her: admiring connections without depth) begin solidifying if no action is taken.</Proph>
          <Proph year="2031 · The Alternative Path Opens">His Jupiter–Venus Bhukti. Her early Venus Mahadasha. If no reunion by this point, both charts show alternative partnership possibilities activating. The Rinanubandhana thread does not break — but a new chapter begins layering over it. The karmic debt does not disappear; it gets deferred to another lifetime.</Proph>
          <HT>The optimal crossroads action: Mayank initiates contact late 2026 (when Jupiter aspects his H7 and Deeksha's stellium simultaneously). This aligns with the widest planetary window and prevents compensatory patterns from hardening in either chart.</HT>
        </>
      )}
      {entity === 's' && (
        <>
          <HT>Deeksha's Moon in Jyeshtha H7: the separation is not merely emotional — it is structural. Her H7 Moon means her entire sense of emotional reality is organized around the partnership axis. Without it, her inner architecture operates in a permanent low-grade emergency state, consuming energy that should fuel her career and creative life.</HT>
          <HT>Mayank's Ketu in H7 Taurus: Ketu is the headless node — it dissolves the house it occupies. During separation, his H7 becomes a zone of void and past-life memory. He will feel the relationship like a phantom limb — present in its absence, impossible to replace through substitution.</HT>
          <Ins type="warn">The separation scenario does not end in clean separation in either chart. Both confirm repeated pull-back attempts. The question is whether the pull-back happens within the optimal window (2026–2031) or after accumulated compensatory patterns have hardened into structural character traits.</Ins>
          <Proph year="2028 · Exact Year — Regret Maximum Velocity">Both charts converge on 2028 as the year the cost of separation becomes visceral and unavoidable. His first major revenue cycle. Her first public career recognition. Both "successful" on the surface — and both, in private, asking who this is for. The absence is loudest at the peak.</Proph>
          <Proph year="2031 · The 8-Year Mark">8 years post-meeting, ~5 years post-separation. Both in their planetary golden decades (his Jupiter MD, her Venus MD approaching). If still separated, both will carry the frequency of this bond as a permanent background note for the rest of their lives — informing every subsequent relationship without resolution.</Proph>
          <GT>The Nadi tradition on extended separation with Rinanubandhana: the karmic debt is not cancelled by time. It accumulates interest. Every year the reunion is delayed beyond the optimal window adds karmic weight to the eventual reconnection — making it simultaneously more necessary and more complex. The stars are infinitely patient. The optimal window is not.</GT>
        </>
      )}
    </>
  );
}

function TimeStreamTogether({ entity }) {
  return (
    <>
      <S>{entity === 't' ? 'Joint Dasha Synchronization' : entity === 'c' ? 'Divergence Points Timeline' : 'Separation Cost Schedule'}</S>
      {entity === 't' && (
        <>
          <Ins type="good">The golden overlap window: 2029–2032. His Jupiter MD (expansion) runs concurrently with her Ketu MD transition into Venus MD. Two people entering their golden planetary cycles within 3 years of each other is an exceptional Nadi synchronization marker for permanent union.</Ins>
          <Ins type="info">2025–2026: His Rahu–Jupiter + her Merc–Venus. Both in sub-periods of expansion and beauty-building. The separation during this phase is paradoxical: individually optimal, jointly painful.</Ins>
          <Ins type="mystic">2027–2028: His Rahu–Mercury + her Merc–Moon. Both activate their primary planetary strength simultaneously. Mercury rules both their key domains (his H4 stellium, her entire MD). Highest joint communication intelligence window in the decade — the optimal period for deep reconnection and shared project initiation.</Ins>
        </>
      )}
      {entity === 'c' && (
        <>
          <Proph year="2026 · Last Easy Entry Window">Jupiter transits both charts favorably. Both in sub-periods that allow emotional softening. The widest door — after this, the door narrows but does not close. Optimal crossroads action: Mayank initiates contact before this window passes.</Proph>
          <Proph year="2027 · Simultaneous Activation Peak">His Rahu–Venus + her Merc–Moon: both relationship-activation Bhuktis fire simultaneously. The crossroads decision made in this window will set the trajectory for both charts for the next 5+ years.</Proph>
          <Proph year="2028 · The Hardening">Both at individual career peaks. Compensatory patterns begin solidifying if no reunion action is taken. The cost of separation shifts from abstract to structural.</Proph>
          <Proph year="2031 · Alternative Path Activates">If no reunion by here, both charts show other karmic partnerships beginning to attract. The Rinanubandhana thread remains but is joined by new karmic threads. Complexity increases.</Proph>
        </>
      )}
      {entity === 's' && (
        <>
          <Proph year="2025–2026 · No-Contact Phase">Both charts: structurally necessary. Highest individual development velocity. Joint cost: accumulating emotional calcification. This phase has karmic justification — it does not need to be extended beyond late 2026.</Proph>
          <Proph year="2027 · Point of No Easy Return">If contact is not initiated by mid-2027, compensatory relationship patterns begin hardening into habits in both charts. His habit: finding emotional substitutes in new ventures. Her habit: idealizing the absent relationship into something unreachable.</Proph>
          <Proph year="2028 · Maximum Regret Velocity">Both at peak individual visibility. The absence of the other is loudest at peak success. Maximum probability of unilateral contact attempt — but the contact is harder to navigate because both have accumulated more separateness.</Proph>
          <Proph year="2031 · The 8-Year Mark">8 years since connection, ~5 since separation. Both in golden decades. If still apart: both carry this bond as a permanent background frequency. The karmic debt is not resolved — it defers to another cycle.</Proph>
        </>
      )}
      <div style={{ height: '0.75rem' }} />
      <S>Joint Dasha Overlay Timeline</S>
      <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '0.5rem', fontStyle: 'italic' }}>
        <span style={{ color: MAYANK.color }}>■ Mayank</span>  <span style={{ color: DEEKSHA.color }}>■ Deeksha</span>
      </div>
      <DashaTimeline
        dashas={TOGETHER.jointDashas.map(d => ({ ...d, label: d.label }))}
        base={null}
        total={35}
        ageLabel={false}
      />
    </>
  );
}

function DashasTab({ entity }) {
  if (entity === 'm') return (
    <>
      <S>Mayank · Vimshottari Dasha Lifetime Map</S>
      <Ins type="info">Rahu Mahadasha (2018–2036, 18 years) is the defining cycle of his current life chapter. Uttarashada Nakshatra root (Moon) anchors Sun as the next Mahadasha lord — but the Rahu-to-Jupiter transition (~age 35) is the single most important planetary event in his near-term life.</Ins>
      <DashaTimeline dashas={MAYANK.dashas} base={MAYANK.age} total={40} ageLabel />
      <div style={{ height: '0.75rem' }} />
      <Ins type="good">Saturn in own sign H4 as part of Rahu's sub-periods (Rahu–Saturn Bhukti, 2026) is a once-in-a-lifetime combination for founders. This is when the entire H4 stellium's stored potential begins its irreversible discharge toward empire-scale outcomes.</Ins>
      <Proph year="Age 35–36 · Jupiter Mahadasha Ignition">The transition from Rahu MD to Jupiter MD is the axis upon which his entire adult life pivots. Everything before is preparation. Everything after is compound. The 16-year Jupiter MD (H1, Scorpio, Anuradha) will be characterized by expansion, public recognition, and multi-domain profitability — provided the Rahu MD structural foundation is completed without shortcut.</Proph>
    </>
  );

  if (entity === 'd') return (
    <>
      <S>Deeksha · Vimshottari Dasha Lifetime Map</S>
      <Ins type="info">Mercury Mahadasha (2018–2035, 17 years) is the craftsperson's cycle — designed to develop every communication and creative skill to full maturity. The Jyeshtha Moon (Mercury-ruled) is why Mercury governs this extended formative phase.</Ins>
      <DashaTimeline dashas={DEEKSHA.dashas} base={DEEKSHA.age} total={34} ageLabel />
      <div style={{ height: '0.75rem' }} />
      <Ins type="good">Venus Mahadasha (age 32–52) is the golden promise that the Mercury MD is preparing her for. 20 years of Venus as Ascendant lord operating as Mahadasha lord — the longest golden phase available in the Vimshottari system for a Taurus Lagna native. The quality of investment in the Mercury MD years directly determines the altitude of the Venus MD payoff.</Ins>
      <Proph year="Age 32 · Venus Mahadasha: The Golden Promise">Every skill, habit, relationship, creative output, and earned wisdom from the Mercury MD (ages 15–32) becomes the seed capital for Venus MD. The compounding here is not financial — it is karmic. She is in year 4 of 17 of the preparation phase. The preparation is the golden period in disguise.</Proph>
    </>
  );

  return (
    <>
      <S>Joint Dasha Overlay · Synchronized Lifetime Map</S>
      <Ins type="mystic">The rarest feature of this synastry: both individuals enter their planetary golden decades (his Jupiter MD, her Venus MD) within approximately 3 years of each other (2030 and 2035 respectively). This synchronization is not coincidence — it is the Nadi signature of a destined alignment. Their golden decades overlap for approximately 17 years (2035–2052).</Ins>
      <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '0.5rem', fontStyle: 'italic' }}>
        <span style={{ color: MAYANK.color }}>■ Mayank</span>  <span style={{ color: DEEKSHA.color }}>■ Deeksha</span>
      </div>
      <DashaTimeline dashas={TOGETHER.jointDashas} base={null} total={35} ageLabel={false} />
      <div style={{ height: '0.75rem' }} />
      <GT>The 2035–2052 overlap: both in Venus/Jupiter golden decades simultaneously. If the union is formalized in 2029–2031, they will spend 17+ years of their golden decades as a united empire — the combined output of a Scorpio founder in Jupiter MD and a Taurus creator in Venus MD, operating as one system, is one of the most potent natal combinations in Vedic synastry.</GT>
    </>
  );
}

function StressTab({ entity }) {
  if (entity === 'm') return (
    <>
      <S>Mayank · Stress vs Empire Growth · 2025–2034</S>
      <StressChart stressData={MAYANK.stressData} successData={MAYANK.successData} stressLabel="Capital / Operational Stress" successLabel="Empire Growth Index" stressColor="#C0506A" successColor="#C9A84C" />
      <div style={{ height: '0.75rem' }} />
      <Ins type="warn">2025–2026 peak stress zone corresponds to the Rahu–Jupiter/Saturn Bhukti transition — maximum operational complexity before first breakeven. The chart confirms: he is at or near the absolute stress peak RIGHT NOW. It does not get harder after 2026.</Ins>
      <Ins type="good">The crossover point (where growth index exceeds stress index) occurs in approximately 2028 — during Rahu–Mercury Bhukti. This is the visual confirmation of when the empire begins paying for itself structurally, not just in vision.</Ins>
    </>
  );

  if (entity === 'd') return (
    <>
      <S>Deeksha · Emotional Friction vs Creative Growth · 2025–2034</S>
      <StressChart stressData={DEEKSHA.stressData} successData={DEEKSHA.successData} stressLabel="Emotional / Processing Friction" successLabel="Career & Creative Growth" stressColor="#9B8FB5" successColor="#1DBEAA" />
      <div style={{ height: '0.75rem' }} />
      <Ins type="warn">Her stress curve peaks slightly earlier (2025) because the emotional processing phase of the separation is most acute in the current Merc–Venus Bhukti. Venus rules connection and beauty — during no-contact, this energy has no external outlet and turns inward as friction.</Ins>
      <Ins type="good">Her crossover point occurs in 2027–28 — the Merc–Moon/Mars Bhukti window. This confirms that by 2028 her creative and career growth has structurally outpaced her emotional friction. The chart shows her recovery trajectory is faster than Mayank's business trajectory — she will be emotionally operational before he is financially operational.</Ins>
    </>
  );

  if (entity === 't') return (
    <>
      <S>Together vs Apart · 10-Year Dual Trajectory · 2025–2034</S>
      <StressChart
        stressData={TOGETHER.togetherStress}
        successData={TOGETHER.togetherSuccess}
        stressLabel="Together: Reunion Cost / Friction"
        successLabel="Together: Combined Trajectory"
        stressColor="#C0506A"
        successColor="#C9A84C"
        extraDatasets={[
          { key: 'apartStress', data: TOGETHER.apartStress, label: 'Apart: Long-term Cost', color: '#5E4478' },
          { key: 'apartSuccess', data: TOGETHER.apartSuccess, label: 'Apart: Individual Recovery', color: '#B0B0E0' },
        ]}
      />
      <div style={{ height: '0.75rem' }} />
      <Ins type="good">Together trajectory: steep short-term adjustment cost (2025–2027) rapidly overtaken by combined growth. By 2029, the together success index exceeds the apart recovery index by approximately 50 percentage points — and the gap widens every year thereafter.</Ins>
      <Ins type="warn">Apart trajectory: individual recovery is real but plateaus around 40–50%. The "apart success" line represents each person's individual achievement ceiling when operating without the synastry boost. Neither chart reaches its full natal promise independently — each requires the other as an activation agent for their highest expression.</Ins>
    </>
  );

  if (entity === 'c') return (
    <>
      <S>Crossroads · Aligned vs Diverged · 10-Year Projection</S>
      <StressChart
        stressData={[70,65,55,42,30,25,20,18,15,12]}
        successData={[30,35,52,65,75,82,87,90,92,94]}
        stressLabel="Crossroads Friction (if diverged path)"
        successLabel="Aligned Trajectory (if reconnected)"
        stressColor="#9B8FB5"
        successColor="#C9A84C"
      />
      <Ins type="info">The crossroads chart shows a decision point: the friction line (diverged path) and the success line (aligned path) converge and cross in approximately 2027. Before this crossing, both paths feel similarly costly. After 2027, the divergence in outcome accelerates rapidly.</Ins>
      <HT>Every year the crossroads decision is deferred beyond late 2026 increases the friction cost of the diverged path while simultaneously narrowing the entry ramp for the aligned path. The window does not close — but it narrows measurably each year after 2027.</HT>
    </>
  );

  return (
    <>
      <S>Separation · Long-Term Cost Projection · 2025–2034</S>
      <StressChart
        stressData={[80,85,88,90,88,82,75,68,60,55]}
        successData={[20,16,13,10,13,20,28,34,38,42]}
        stressLabel="Long-term Separation Cost (accumulating)"
        successLabel="Individual Recovery Index"
        stressColor="#C0506A"
        successColor="#B0B0E0"
      />
      <Ins type="warn">The separation cost chart is the most unusual of the five entities: the stress line INCREASES through 2028 before declining. This is the "regret velocity" curve — the cost of separation is not immediate, it accumulates as both individuals reach their peaks and feel the absence most acutely at the peak (2028).</Ins>
      <Ins>The individual recovery index (gray line) rises slowly but plateaus around 40% — representing the ceiling of individual achievement without the synastry activation. This is not failure; it is an incomplete sentence. Both charts are capable of independent success — but the natal promise of both is calibrated for the union.</Ins>
    </>
  );
}

function GoldenTab({ entity }) {
  if (entity === 'm') return (
    <>
      <S>Mayank · Golden & Testing Periods</S>
      <GoldenPeriods items={MAYANK.goldenPeriods} />
    </>
  );
  if (entity === 'd') return (
    <>
      <S>Deeksha · Golden & Testing Periods</S>
      <GoldenPeriods items={DEEKSHA.goldenPeriods} />
    </>
  );

  const jointPeriods = entity === 't' ? [
    { year: 'Late 2026', type: 'golden', title: 'Communication Window Opens', desc: 'Jupiter activates both H7s. Silence breaks. First contact after no-contact.' },
    { year: '2027', type: 'golden', title: 'Simultaneous Relationship Activation', desc: 'His Rahu–Venus + her Merc–Moon. Both in relationship Bhuktis at once. Crystallization window.' },
    { year: '2029–31', type: 'golden', title: 'Marriage Window · Dual Golden Decades', desc: 'Jupiter MD (him) + approaching Venus MD (her). The Nadi marriage yoga confirmed by both charts simultaneously.' },
    { year: '2035–52', type: 'golden', title: 'Overlapping Golden Decades', desc: 'Both in Venus/Jupiter MDs. 17+ years of combined peak output. Legacy empire phase.' },
    { year: '2025–26', type: 'testing', title: 'No-Contact: Structurally Necessary', desc: 'Individually optimal, jointly painful. Breaking early risks structural damage to both charts.' },
    { year: '2028', type: 'testing', title: 'Regret Velocity Peak', desc: 'Both at individual career peaks simultaneously. The absence is loudest at the peak.' },
  ] : entity === 'c' ? [
    { year: 'Late 2026', type: 'golden', title: 'Last Wide Decision Door', desc: 'Jupiter favorable in both charts. Optimal entry point for reunion initiation.' },
    { year: '2027', type: 'golden', title: 'Overlapping Activation Window', desc: 'Both in relationship Bhuktis. Highest probability crossroads resolution window.' },
    { year: '2028', type: 'testing', title: 'Hardening Point', desc: 'Individual peaks solidify. Compensatory patterns begin if no action taken.' },
    { year: '2031', type: 'testing', title: 'Alternative Path Opens', desc: 'Other karmic partnerships begin activating in both charts if no reunion.' },
  ] : [
    { year: '2025–26', type: 'golden', title: 'No-Contact Has Purpose', desc: 'Individual completion work. The karmic design demands this phase. Honor it.' },
    { year: '2028', type: 'testing', title: 'Maximum Regret Velocity', desc: 'Both at individual peaks. Absence loudest. Maximum unilateral contact pressure.' },
    { year: '2031+', type: 'testing', title: 'Long-Term Cost Accumulation', desc: 'Karmic debt deferred. Each year increases the weight of eventual reconnection.' },
    { year: '2035+', type: 'testing', title: 'Ghost Frequency', desc: 'Both in golden decades. If still separated: this bond becomes a permanent background frequency in all subsequent relationships.' },
  ];

  return (
    <>
      <S>{entity === 't' ? 'Joint Golden & Testing Periods' : entity === 'c' ? 'Crossroads: Golden Windows & Testing Points' : 'Separation: Cost Milestones'}</S>
      <GoldenPeriods items={jointPeriods} />
    </>
  );
}

function MilestonesTab({ entity }) {
  if (entity === 'm') return (
    <>
      <S>Mayank · 10-Year Milestones · 2025–2035</S>
      <Timeline items={MAYANK.milestones} />
    </>
  );
  if (entity === 'd') return (
    <>
      <S>Deeksha · 10-Year Milestones · 2025–2035</S>
      <Timeline items={DEEKSHA.milestones} />
    </>
  );

  const jointMilestones = entity === 't' ? [
    { year: '2025–26', color: '#C0506A', title: 'No-Contact: Structurally Necessary', desc: 'Both completing individual prerequisite work. Most painful phase. Most necessary. Honor the design.' },
    { year: 'Late 2026', color: '#D4920A', title: 'First Contact Window Opens', desc: 'Jupiter activates both H7s simultaneously. The silence becomes untenable for both.' },
    { year: '2027', color: '#C9A84C', title: 'Depth Phase: Contact to Commitment', desc: 'Both in relationship-activation Bhuktis. Bond deepens from initial contact to genuine depth.' },
    { year: '2028', color: '#C9A84C', title: 'Joint Visibility: Individual Peaks Align', desc: 'Both at career peaks simultaneously. The partnership becomes publicly acknowledged.' },
    { year: '2029', color: '#1DBEAA', title: 'Joint Venture Formation', desc: 'Both career peaks + relationship commitment = optimal business partnership initiation window.' },
    { year: '2030–31', color: '#1DBEAA', title: 'Marriage Window Confirmed', desc: 'Jupiter MD (him) + Venus MD approaching (her). Formal union. Both chart marriage yogas fire.' },
    { year: '2033', color: '#1DBEAA', title: 'First Joint Empire Milestone', desc: 'Combined infrastructure (him) + communication (her) reaches first multi-crore output.' },
    { year: '2035+', color: '#E8C97A', title: 'Overlapping Golden Decades Begin', desc: 'Both in Jupiter/Venus MDs. 17+ years of combined peak. The life\'s work declared.' },
  ] : entity === 'c' ? [
    { year: '2025', color: '#9B8FB5', title: 'Crossroads Entry: Maximum Ambiguity', desc: 'Both in individually optimal Bhuktis. Jointly costly. The decision window has not yet opened.' },
    { year: 'Late 2026', color: '#D4920A', title: 'Decision Window Opens: Wide Door', desc: 'Jupiter activates both charts favorably. Easiest entry for reunion. First clear choice point.' },
    { year: '2027', color: '#C9A84C', title: 'Peak Decision Pressure', desc: 'Both in relationship Bhuktis simultaneously. The crossroads is most vivid. Choose.' },
    { year: '2028', color: '#C0506A', title: 'Individual Peaks / Regret Maximum', desc: 'Both career-visible. The absence is loudest. Hardest and most necessary moment.' },
    { year: '2031', color: '#C0506A', title: 'Alternative Paths Activate', desc: 'If no reunion: other karmic connections begin attracting. Complexity multiplies.' },
    { year: '2035', color: '#E8C97A', title: 'Permanent Trajectory Set', desc: 'Both in golden decades. The trajectory chosen in 2026–2028 is now a structural feature of both lives.' },
  ] : [
    { year: '2025', color: '#C0506A', title: 'Separation Active: Maximum Acute Pain', desc: 'Her Moon H7 in structural void. His Rahu H1 amplifying operational fog. Both at peak individual load.' },
    { year: '2026', color: '#C0506A', title: 'Hardening Begins', desc: 'No-contact extends beyond karmic necessity. Compensatory patterns begin forming.' },
    { year: '2027', color: '#C0506A', title: 'Point of No Easy Return', desc: 'If no contact initiated: compensatory patterns become habits. Re-entry cost doubles.' },
    { year: '2028', color: '#C0506A', title: 'Regret Velocity Peak', desc: 'Both at individual career peaks. Absence is loudest. Both feel it simultaneously.' },
    { year: '2031', color: '#9B8FB5', title: 'Alternative Paths Layer Over Bond', desc: 'Rinanubandhana thread remains but new karmic threads complicate the pattern.' },
    { year: '2035+', color: '#9B8FB5', title: 'Ghost Frequency Permanent', desc: 'Both in golden decades. If separated: this bond becomes a lifelong background frequency — informing all subsequent relationships without resolution.' },
  ];

  return (
    <>
      <S>{entity === 't' ? 'Joint Milestones · 2025–2035+' : entity === 'c' ? 'Crossroads Milestones' : 'Separation Cost Milestones'}</S>
      <Timeline items={jointMilestones} />
    </>
  );
}

// ─── MASTER RENDERER ──────────────────────────────────────
export default function ContentRenderer({ entity, tab }) {
  const isIndividual = entity === 'm' || entity === 'd';
  const person = entity === 'm' ? MAYANK : entity === 'd' ? DEEKSHA : null;

  const wrap = (content) => <div key={`${entity}-${tab}`}>{content}</div>;

  if (tab === 'foundation') return wrap(isIndividual ? <FoundationIndividual person={person} /> : <FoundationTogether entity={entity} />);
  if (tab === 'career') return wrap(isIndividual ? <CareerIndividual person={person} /> : <CareerTogether entity={entity} />);
  if (tab === 'karma') return wrap(isIndividual ? <KarmaIndividual person={person} /> : <KarmaTogether entity={entity} />);
  if (tab === 'love') return wrap(isIndividual ? <LoveIndividual person={person} /> : <LoveTogether entity={entity} />);
  if (tab === 'timestream') return wrap(isIndividual ? <TimeStreamIndividual person={person} /> : <TimeStreamTogether entity={entity} />);
  if (tab === 'dashas') return wrap(<DashasTab entity={entity} />);
  if (tab === 'stress') return wrap(<StressTab entity={entity} />);
  if (tab === 'golden') return wrap(<GoldenTab entity={entity} />);
  if (tab === 'milestones') return wrap(<MilestonesTab entity={entity} />);

  return null;
}
