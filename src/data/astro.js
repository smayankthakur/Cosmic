// ────────────────────────────────────────────────────────────
// MAYANK THAKUR · 25 Mar 1995 · 10:55 PM IST · Paharganj, Delhi
// Lahiri Ayanamsha · Tropical to Sidereal conversion applied
// ────────────────────────────────────────────────────────────
export const MAYANK = {
  id: 'm',
  name: 'Mayank',
  fullName: 'Mayank Thakur',
  dob: '25 March 1995',
  time: '10:55 PM IST',
  place: 'Paharganj, New Delhi',
  age: 31,
  color: '#4A8CDB',
  colorDim: 'rgba(74,140,219,0.18)',
  lagna: 'Scorpio',
  lagnaNak: 'Jyeshtha Pada 1',
  lagnaLord: 'Mars + Ketu',
  moon: 'Capricorn',
  moonNak: 'Uttarashada Pada 3',
  moonLord: 'Sun',
  sun: 'Aries',
  sunNak: 'Ashwini (Exalted)',
  mahadasha: 'Rahu',
  mahadashaDates: '2018–2036',
  bhukti: 'Jupiter',
  bhuktiDates: '2025–2026',
  soulPurpose: 'The Invincible Architect. Scorpio Lagna + Uttarashada Moon creates a soul designed to destroy obsolete systems and build what has never existed. Rahu+Jupiter in H1 = a founder who cannot operate within conventional structures — he must build his own container.',

  planets: [
    { sym: '☀', bg: 'rgba(255,220,80,0.14)', tc: '#FFE080', name: 'Sun', pos: 'Aries 11° · H5', nak: 'Ashwini', note: 'Exalted — creative authority, leadership signature' },
    { sym: '☽', bg: 'rgba(200,200,255,0.14)', tc: '#C0C0F0', name: 'Moon', pos: 'Capricorn 20° · H3', nak: 'Uttarashada', note: 'Strategic, enduring, built for empire not ease' },
    { sym: '♂', bg: 'rgba(255,100,100,0.14)', tc: '#FF9090', name: 'Mars', pos: 'Sagittarius 8° · H2', nak: 'Moola', note: 'Near-debilitated; aggressive capital deployment' },
    { sym: '☿', bg: 'rgba(150,220,255,0.14)', tc: '#90D8FF', name: 'Mercury', pos: 'Aquarius 14° · H4', nak: 'Shatabhisha', note: 'H4 Stellium; systems architect mind' },
    { sym: '♀', bg: 'rgba(255,160,200,0.14)', tc: '#FFB0D0', name: 'Venus', pos: 'Aquarius 22° · H4', nak: 'Purva Bhadra', note: 'H7 lord in stellium — love through co-building' },
    { sym: '♃', bg: 'rgba(255,160,60,0.14)', tc: '#FFBB60', name: 'Jupiter', pos: 'Scorpio 8° · H1', nak: 'Anuradha', note: 'In Lagna — dharma amplified; wisdom in body' },
    { sym: '♄', bg: 'rgba(160,160,220,0.14)', tc: '#B0B0E0', name: 'Saturn', pos: 'Aquarius 5° · H4', nak: 'Dhanishta (own)', note: 'Own sign H4 stellium anchor; empire guarantor' },
    { sym: '☊', bg: 'rgba(255,120,120,0.14)', tc: '#FF8888', name: 'Rahu', pos: 'Scorpio 28° · H1', nak: 'Jyeshtha', note: 'Mahadasha lord in Lagna; amplifies obsessive building' },
    { sym: '☋', bg: 'rgba(120,200,120,0.14)', tc: '#80C880', name: 'Ketu', pos: 'Taurus 28° · H7', nak: 'Mrigashira', note: 'H7 dissolution — past-life love bond; karmic union' },
  ],

  lagnaChart: {
    // House number → rashi number (1=Aries…12=Pisces)
    houses: { 1:'Sco', 2:'Sag', 3:'Cap', 4:'Aqu', 5:'Pis', 6:'Ari', 7:'Tau', 8:'Gem', 9:'Can', 10:'Leo', 11:'Vir', 12:'Lib' },
    placements: {
      1: ['☊Rahu', '♃Jup', 'ASC'],
      2: ['♂Mars'],
      3: ['☽Moon'],
      4: ['♄Sat', '☿Merc', '♀Ven'],
      5: ['☀Sun'],
      7: ['☋Ketu'],
    }
  },

  kpSignificators: [
    { house: 'H1', domain: 'Self, identity, health', planets: ['☊Rahu','♃Jupiter'], verdict: 'Rahu+Jupiter conjunct — amplified identity, spiritual obsession with building' },
    { house: 'H2', domain: 'Revenue, speech, family', planets: ['♂Mars (Moola)'], verdict: 'Mars in Moola: destroys old financial models, builds entirely new revenue streams' },
    { house: 'H4', domain: 'Infrastructure, IP, property', planets: ['♄Saturn','☿Mercury','♀Venus'], verdict: 'Triple stellium in own sign — karmic domain of lasting asset-building' },
    { house: 'H7', domain: 'Marriage, partnerships', planets: ['☋Ketu (Taurus)'], verdict: 'Ketu dissolves ordinary union; past-life recognition essential for lasting bond' },
    { house: 'H10', domain: 'Career apex, public authority', planets: ['Empty (Leo)'], verdict: 'Lord Sun exalted H5 — authority through creative disruption, not hierarchy' },
    { house: 'H11', domain: 'MRR, gains, network', planets: ['Empty (Virgo)'], verdict: 'Lord Mercury in H4 stellium — gains are structurally sourced, compound over time' },
  ],

  dashas: [
    { label: 'Rahu–Jup', start: 31, end: 32.2, color: '#4A8CDB', desc: 'Crucible phase. Maximum complexity before first payoff.' },
    { label: 'Rahu–Sat', start: 32.2, end: 33.6, color: '#9B8FB5', desc: 'H4 stellium activation. First MRR stability.' },
    { label: 'Rahu–Merc', start: 33.6, end: 34.6, color: '#90D8FF', desc: 'Digital revenue surge. ₹1Cr ARR window.' },
    { label: 'Rahu–Ketu', start: 34.6, end: 35.2, color: '#80C880', desc: 'Karmic closure, relationship clarity.' },
    { label: 'Rahu–Ven', start: 35.2, end: 36, color: '#FFB0D0', desc: 'Love + empire convergence.' },
    { label: 'Jupiter MD', start: 36, end: 52, color: '#C9A84C', desc: '16-year empire phase. All promises activate.' },
    { label: 'Saturn MD', start: 52, end: 70, color: '#B0B0E0', desc: 'Legacy consolidation.' },
  ],

  stressData: [88, 80, 60, 42, 28, 18, 12, 9, 7, 5],
  successData: [12, 24, 46, 64, 80, 90, 94, 97, 98, 99],

  careerTimeline: [
    { year: '2026', color: '#D4920A', title: 'Rahu–Saturn: H4 Stellium Activates', desc: 'SaaS deployment stable. Cloud kitchen breakeven. First MRR lock-in.' },
    { year: '2027–28', color: '#C9A84C', title: 'Rahu–Mercury: Digital Revenue Surge', desc: 'First ₹1Cr ARR cycle. Shatabhisha networks compound. Tech platform profitable.' },
    { year: '2029', color: '#C9A84C', title: 'Rahu–Ketu/Venus: Personal Convergence', desc: 'Love and empire narrative merge. Reunion window opens.' },
    { year: '2030+', color: '#1DBEAA', title: 'Jupiter Mahadasha: 16-Year Empire', desc: 'All deferred promises activate simultaneously. Real estate + SaaS + cloud kitchens.' },
    { year: '2033', color: '#1DBEAA', title: 'Age 38: Multi-Crore Cash Flow', desc: 'Jupiter–Saturn Bhukti — H4 stellium discharges its full payload.' },
    { year: '2035', color: '#1DBEAA', title: 'Age 40: Empire Phase Complete', desc: 'Institutional-grade operation. Public recognition of founder status.' },
  ],

  milestones: [
    { year: '2025', color: '#C0506A', title: 'Crucible: Maximum Load', desc: 'Capital stressed. Rahu fog peak. Foundation poured invisibly.' },
    { year: '2026', color: '#D4920A', title: 'First MRR Stability', desc: 'Saturn Bhukti activates H4. Infrastructure goes live.' },
    { year: '2027', color: '#C9A84C', title: '₹1Cr ARR Window', desc: 'Mercury Bhukti. Digital compounding begins.' },
    { year: 'Late 2026', color: '#C9A84C', title: 'Communication Window', desc: 'Jupiter aspects H7 and Deeksha\'s stellium. Silence breaks.' },
    { year: '2030', color: '#1DBEAA', title: 'Jupiter MD Ignition', desc: 'Age 35. Empire phase. 16-year expansion.' },
    { year: '2031', color: '#1DBEAA', title: 'Marriage Window', desc: 'Jupiter MD Venus Bhukti. Formal union confirmed.' },
    { year: '2033', color: '#1DBEAA', title: 'Multi-Crore Cashflow', desc: 'All three ventures simultaneously profitable.' },
    { year: '2035', color: '#E8C97A', title: 'Legacy Institution', desc: 'The empire declares itself publicly.' },
  ],

  upayas: [
    { planet: '♄ Saturn', badge: 'H4 Stellium Anchor', color: '#B0B0E0',
      items: ['Chant Om Sham Shanicharaya Namah — 108× every Saturday at dawn', 'Donate iron/mustard oil/black sesame to laborers on Saturdays', 'Wear blue sapphire (neelam) in silver on right middle finger, consecrated on Saturday under Uttara Bhadrapada', 'Seva to construction workers, sanitation workers — aligns with Saturn H4 (infrastructure) karma'] },
    { planet: '☊ Rahu', badge: 'H1 Pap Dosh Clearance', color: '#FF8888',
      items: ['Chant Om Raam Rahave Namah — 108× on Saturdays during Rahu Kaal', 'Perform Rahu-Jupiter Shanti Pooja on a Thursday under Anuradha nakshatra', 'Donate to homeless, foreign migrants, or hospice organizations (H12 Rahu seva)', 'Energized Taavij: Rahu+Saturn binding yantra worn on right arm'] },
    { planet: '♃ Jupiter', badge: '144-Day Deeksha Protocol', color: '#FFBB60',
      items: ['Ashtakshar Mantra "Om Namo Narayanaya" — 108× daily for 3 mandalas (48 days each = 144 days total)', 'Mandala 1 (1–48): Clears Rahu fog from H1 — "almost ready" delay dissolves', 'Mandala 2 (49–96): Saturn structural discipline activates — decisions become cleaner', 'Mandala 3 (97–144): Jupiter expansion channel opens — right opportunities appear with unusual clarity'] },
  ],

  goldenPeriods: [
    { year: '2026–27', type: 'golden', title: 'Infrastructure Payoff Begins', desc: 'Saturn Bhukti: first durable revenue. H4 promise starts discharging.' },
    { year: '2027–28', type: 'golden', title: 'Digital Revenue Compound', desc: 'Mercury Bhukti: tech platform ARR compounds. Networks scale.' },
    { year: '2030–36', type: 'golden', title: 'Jupiter MD: Empire Phase', desc: '16 years of expansion, recognition, and wealth crystallization.' },
    { year: '2025–26', type: 'testing', title: 'Maximum Capital Stress', desc: 'Rahu–Jupiter: operational complexity before first payoff.' },
    { year: '2033–35', type: 'golden', title: 'Multi-Crore Simultaneous Profit', desc: 'All three ventures profitable. Institutional-grade operation.' },
  ],
};

// ────────────────────────────────────────────────────────────
// DEEKSHA SURYAWANSHI · 21 Jun 2003 · 04:21 AM IST · Bhopal, MP
// ────────────────────────────────────────────────────────────
export const DEEKSHA = {
  id: 'd',
  name: 'Deeksha',
  fullName: 'Deeksha Suryawanshi',
  dob: '21 June 2003',
  time: '04:21 AM IST',
  place: 'Bhopal, Madhya Pradesh',
  age: 22,
  color: '#C4607A',
  colorDim: 'rgba(196,96,122,0.18)',
  lagna: 'Taurus',
  lagnaNak: 'Rohini Pada 4',
  lagnaLord: 'Venus',
  moon: 'Scorpio',
  moonNak: 'Jyeshtha Pada 2',
  moonLord: 'Mercury',
  sun: 'Gemini',
  sunNak: 'Mrigashira',
  mahadasha: 'Mercury',
  mahadashaDates: '2018–2035',
  bhukti: 'Venus',
  bhuktiDates: '2025–2026',
  soulPurpose: 'Lakshmi in the Underworld. Taurus Lagna (Rohini) — magnetic, grounded, built for beauty. Moon in Jyeshtha (Scorpio) — inner world of fire and depth. The combination: a soul that builds lasting beauty by transforming pain into wisdom. "Carrier of Lakshmi-consciousness inside a Kali container."',

  planets: [
    { sym: '☀', bg: 'rgba(255,220,80,0.14)', tc: '#FFE080', name: 'Sun', pos: 'Gemini 6° · H2', nak: 'Mrigashira', note: 'Intellect & speech force; strong in Mercury sign' },
    { sym: '☽', bg: 'rgba(200,200,255,0.14)', tc: '#C0C0F0', name: 'Moon', pos: 'Scorpio 18° · H7', nak: 'Jyeshtha', note: 'Emotional body IS relationship; loves completely' },
    { sym: '♂', bg: 'rgba(255,100,100,0.14)', tc: '#FF9090', name: 'Mars', pos: 'Aquarius 14° · H10', nak: 'Shatabhisha', note: 'Career ambition; social disruption drive; H10 power' },
    { sym: '☿', bg: 'rgba(150,220,255,0.14)', tc: '#90D8FF', name: 'Mercury', pos: 'Gemini 22° · H2', nak: 'Punarvasu', note: 'Mahadasha lord; gifted communicator, craft mastery' },
    { sym: '♀', bg: 'rgba(255,160,200,0.14)', tc: '#FFB0D0', name: 'Venus', pos: 'Gemini 2° · H2', nak: 'Mrigashira', note: 'Bhukti lord now; love through words, ideas, beauty' },
    { sym: '♃', bg: 'rgba(255,160,60,0.14)', tc: '#FFBB60', name: 'Jupiter', pos: 'Leo 18° · H4', nak: 'Purva Phalguni', note: 'H4 inner richness; inheritance of creative wisdom' },
    { sym: '♄', bg: 'rgba(160,160,220,0.14)', tc: '#B0B0E0', name: 'Saturn', pos: 'Gemini 10° · H2 (R)', nak: 'Ardra', note: 'Retrograde; delayed self-worth but durable when arrived' },
    { sym: '☊', bg: 'rgba(255,120,120,0.14)', tc: '#FF8888', name: 'Rahu', pos: 'Aries 28° · H12', nak: 'Ashwini', note: 'Liberation pull; foreign horizons; spiritual idealization' },
    { sym: '☋', bg: 'rgba(120,200,120,0.14)', tc: '#80C880', name: 'Ketu', pos: 'Libra 28° · H6', nak: 'Vishakha', note: 'Past-life warrior; dissolves competition; power leak' },
  ],

  lagnaChart: {
    houses: { 1:'Tau', 2:'Gem', 3:'Can', 4:'Leo', 5:'Vir', 6:'Lib', 7:'Sco', 8:'Sag', 9:'Cap', 10:'Aqu', 11:'Pis', 12:'Ari' },
    placements: {
      1: ['ASC'],
      2: ['☀Sun','☿Merc','♀Ven','♄Sat(R)'],
      4: ['♃Jup'],
      6: ['☋Ketu'],
      7: ['☽Moon'],
      10: ['♂Mars'],
      12: ['☊Rahu'],
    }
  },

  kpSignificators: [
    { house: 'H2', domain: 'Income, speech, H2 stellium', planets: ['☀Sun','☿Mercury','♀Venus','♄Saturn(R)'], verdict: 'Most powerful stellium — communication, craft, art = karmic income channel' },
    { house: 'H5', domain: 'Education, creativity', planets: ['Empty (Virgo)'], verdict: 'Lord Mercury in H2 stellium — education fuels communication mastery' },
    { house: 'H7', domain: 'Partnership, marriage', planets: ['☽Moon (Jyeshtha)'], verdict: 'Moon here: emotional body IS relationship; partnership = emotional architecture' },
    { house: 'H10', domain: 'Career, public life', planets: ['♂Mars (Aquarius)'], verdict: 'Mars in H10 = career in social innovation, disruption, Aquarian mission-work' },
    { house: 'H12', domain: 'Liberation, foreign, loss', planets: ['☊Rahu (Ashwini)'], verdict: 'Rahu H12 = spiritual liberation seeker; danger of idealization during voids' },
  ],

  dashas: [
    { label: 'Merc–Ven', start: 22, end: 23, color: '#C4607A', desc: 'Aesthetic intelligence peaks. Creative identity building.' },
    { label: 'Merc–Sun', start: 23, end: 24, color: '#FFB060', desc: 'Identity clarity. First professional voice.' },
    { label: 'Merc–Moon', start: 24, end: 26, color: '#8899CC', desc: 'H7 Moon activates. Emotional reconnection phase.' },
    { label: 'Merc–Mars', start: 26, end: 27, color: '#FF7070', desc: 'Career surge. First high-visibility achievement.' },
    { label: 'Merc–Rahu', start: 27, end: 29, color: '#BB88DD', desc: 'Unconventional path opens. International horizon.' },
    { label: 'Ketu MD', start: 29, end: 36, color: '#70AA70', desc: '7-year depth, mastery over breadth.' },
    { label: 'Venus MD', start: 36, end: 56, color: '#C9A84C', desc: 'Golden 20 years — creative, financial, relational peak.' },
  ],

  stressData: [70, 58, 44, 30, 20, 13, 9, 6, 4, 3],
  successData: [18, 30, 44, 58, 70, 80, 86, 90, 94, 97],

  careerTimeline: [
    { year: '2025–26', color: '#C4607A', title: 'Merc–Venus: Craft & Brand Building', desc: 'Aesthetic intelligence peaks. Finds creative domain, potential mentor.' },
    { year: '2026', color: '#D4920A', title: 'Merc–Sun: Professional Voice Emerges', desc: 'Fog lifts. First real authority. Identity assertion begins.' },
    { year: '2027', color: '#C9A84C', title: 'Merc–Moon: Emotional & Career Depth', desc: 'H7 Moon Bhukti. Reconnection + creative depth merge.' },
    { year: '2028', color: '#C9A84C', title: 'Merc–Mars: Career Surge', desc: 'Mars in H10 drives first high-visibility professional achievement.' },
    { year: '2030', color: '#1DBEAA', title: 'Merc–Rahu: Disruption Window', desc: 'Unconventional platform or international expansion opens.' },
    { year: '2035', color: '#C9A84C', title: 'Venus Mahadasha Begins', desc: 'Age 32. 20-year golden phase. Financial independence, creative legacy.' },
  ],

  milestones: [
    { year: '2025', color: '#9B8FB5', title: 'Merc–Venus: Skill Foundation', desc: 'Building creative craft. Inner healing work.' },
    { year: '2026', color: '#D4920A', title: 'Identity Clarity', desc: 'Merc–Sun: professional voice, first authority.' },
    { year: '2027', color: '#C9A84C', title: 'Emotional Reconnection', desc: 'Merc–Moon Bhukti activates H7 directly.' },
    { year: '2028', color: '#C9A84C', title: 'First Career Peak', desc: 'Merc–Mars: public recognition begins.' },
    { year: '2031', color: '#1DBEAA', title: 'Union Window', desc: 'Jupiter MD (him) + Venus MD approaching (her).' },
    { year: '2035', color: '#C9A84C', title: 'Venus MD Begins', desc: 'Age 32. Golden 20 years starts.' },
    { year: '2040', color: '#E8C97A', title: 'Creative Legacy', desc: 'Practice, platform, or institution of lasting cultural value.' },
    { year: '2050', color: '#E8C97A', title: 'Life\'s Work Complete', desc: 'Venus MD culmination. Lasting contribution to world.' },
  ],

  upayas: [
    { planet: '♄ Saturn Rx', badge: 'Self-Worth Healing', color: '#B0B0E0',
      items: ['Chant Om Sham Shanicharaya Namah — 108× every Saturday at dusk', 'Feed black sesame ladoos to crows or donate mustard oil to Shani temple', 'Wear iron ring on right middle finger, consecrated on Saturday under Uttara Bhadrapada', 'Seva to elderly, disabled, marginalized on Saturdays'] },
    { planet: '☽ Moon', badge: 'Emotional Sovereignty', color: '#C0C0F0',
      items: ['Chant Om Som Somaya Namah — 108× Monday morning after bathing, facing east', 'Offer water to the Moon on Purnima nights with gratitude intention', 'Wear moonstone or pearl (set in silver) on left hand — remove during eclipses', 'Daily water ritual at dawn: mindful glass of water, setting emotional clarity intention'] },
    { planet: '☊ Rahu', badge: 'H12 Grounding', color: '#FF8888',
      items: ['Chant Om Raam Rahave Namah or Durga Saptashloki once weekly', 'Donate to homeless migrants, foreign aid, or hospice — H12 seva grounds Rahu', 'Give Rahu intentional spiritual food: meditation, journaling, dream-work', 'Avoid excessive escapism; Rahu H12 without discipline = unconscious idealization loops'] },
    { planet: '☿ Mercury', badge: 'Mahadasha Amplification', color: '#90D8FF',
      items: ['Chant Om Bum Budhaya Namah — 17× every Wednesday to honor the 17-year cycle', 'Donate green moong dal, books, or green clothing to students on Wednesdays', 'Keep emerald or green tourmaline on study/work desk — amplifies Mercury domains', 'Begin any important communication, writing, or study project on a Wednesday'] },
  ],

  goldenPeriods: [
    { year: '2026', type: 'golden', title: 'Identity Clarity Breakthrough', desc: 'Merc–Sun: first professional voice, fog of self permanently lifts.' },
    { year: '2027–28', type: 'golden', title: 'Emotional + Career Double-Peak', desc: 'Moon + Mars Bhuktis: love reconnection and career surge simultaneously.' },
    { year: '2035–55', type: 'golden', title: 'Venus MD: Golden 20 Years', desc: 'Creative authority, financial independence, profound love.' },
    { year: '2025–26', type: 'testing', title: 'Processing Phase', desc: 'Merc–Venus: beautiful but internally tender. Build craft, not dependency.' },
    { year: '2029–32', type: 'testing', title: 'Ketu MD Transition', desc: 'Depth over breadth. Letting go of what no longer serves.' },
  ],
};

// ────────────────────────────────────────────────────────────
// SYNASTRY & JOINT DATA
// ────────────────────────────────────────────────────────────
export const TOGETHER = {
  id: 't',
  name: 'Together',
  color: '#C9A84C',
  colorDim: 'rgba(201,168,76,0.18)',

  synastryPoints: [
    { title: 'Jyeshtha Mirror Bond', desc: 'Mayank\'s Lagna Nakshatra (Jyeshtha) = Deeksha\'s Moon Nakshatra. He IS her emotional territory. She holds his rising energy in her inner world. One of the most intimate nakshatra overlaps in Vedic synastry.' },
    { title: 'Scorpio–Taurus Karmic Axis', desc: 'Their ascendants oppose across the 1/7 axis — each is literally the "other" the partner needs to become whole. His Ketu H7 (Taurus) mirrors her Moon H7 (Scorpio). Both have Scorpio/Taurus as their marriage signature.' },
    { title: 'Rinanubandhana Confirmed', desc: 'His Ketu in H7 Taurus + her Moon in H7 Scorpio = a past-life karmic debt encoded in both charts simultaneously. This bond cannot be fully dissolved by decision — only completed by design.' },
    { title: 'Upapada Lagna: Both Aquarius', desc: 'Marriage signature in both charts = Aquarius. Their ideal union is a shared mission — co-architects building something at civilizational scale. Partnership without purpose feels hollow to both.' },
    { title: 'Venus Language Resonance', desc: 'His Venus (H4, Aquarius) and her Venus (H2, Gemini) are both in Mercury-ruled nakshatras. Love languages are intellectually identical — both require mental electricity, shared projects, and verbal intimacy.' },
    { title: 'H8 Transformation Activation', desc: 'Her Sun (Gemini H2) falls in his H8 — she activates his transformation zone. Every interaction forces him to encounter hidden parts of himself. Intensity is structural, not optional.' },
  ],

  reunionTimeline: [
    { year: 'Late 2026', color: '#D4920A', title: 'Jupiter Aspects Both H7s: Silence Breaks', desc: 'Jupiter transits Taurus/Gemini activating his Ketu-H7 and her Mercury-Sun-Venus stellium simultaneously. Both charts receive a communication activation in the same window. This is the first natural entry point after no-contact.' },
    { year: '2027', color: '#C9A84C', title: 'Rahu–Venus (him) + Merc–Moon (her): Crystallization', desc: 'His Venus Bhukti activates H7 lord directly. Her Moon Bhukti activates H7 directly. Both enter relationship-activation sub-periods simultaneously — the strongest joint partnership window in the decade.' },
    { year: '2029–31', color: '#1DBEAA', title: 'Marriage Window: Dual Golden Decades Begin', desc: 'His Jupiter MD + her approaching Venus MD. Two people entering their planetary golden cycles within 3 years of each other is the Nadi signature for permanent union. The 2029–31 window has multi-layer support from both charts.' },
  ],

  jointDashas: [
    { label: 'M: Rahu–Jup', start: 2025, end: 2026, color: '#4A8CDB', who: 'm' },
    { label: 'D: Merc–Ven', start: 2025, end: 2026, color: '#C4607A', who: 'd' },
    { label: 'M: Rahu–Sat', start: 2026, end: 2027.3, color: '#9B8FB5', who: 'm' },
    { label: 'D: Merc–Sun', start: 2026, end: 2027, color: '#FFB060', who: 'd' },
    { label: 'D: Merc–Moon', start: 2027, end: 2029, color: '#8899CC', who: 'd' },
    { label: 'M: Rahu–Merc', start: 2027.3, end: 2028.5, color: '#90D8FF', who: 'm' },
    { label: 'D: Merc–Mars', start: 2029, end: 2030, color: '#FF7070', who: 'd' },
    { label: 'M: Rahu–Ven', start: 2028.5, end: 2030, color: '#FFB0D0', who: 'm' },
    { label: 'M: Jupiter MD', start: 2030, end: 2048, color: '#C9A84C', who: 'm' },
    { label: 'D: Ketu MD', start: 2032, end: 2039, color: '#70AA70', who: 'd' },
    { label: 'D: Venus MD', start: 2039, end: 2059, color: '#E8C97A', who: 'd' },
  ],

  togetherStress: [82, 70, 45, 28, 15, 8, 5, 4, 3, 3],
  togetherSuccess: [8, 18, 48, 70, 86, 94, 97, 98, 99, 99],
  apartStress: [75, 80, 85, 88, 84, 78, 70, 62, 55, 50],
  apartSuccess: [22, 20, 18, 16, 20, 28, 36, 42, 46, 50],
};

export const CROSSROADS = {
  id: 'c',
  name: 'Crossroads',
  color: '#1DBEAA',
  colorDim: 'rgba(29,190,170,0.18)',
};

export const SEPARATION = {
  id: 's',
  name: 'Separation',
  color: '#C0506A',
  colorDim: 'rgba(192,80,106,0.18)',
};

export const TABS = [
  { id: 'foundation', label: 'Foundation', icon: '◎' },
  { id: 'career', label: 'Career & Empire', icon: '⬡' },
  { id: 'karma', label: 'Inner Alchemy', icon: '☽' },
  { id: 'love', label: 'Love & Synastry', icon: '♡' },
  { id: 'timestream', label: 'Time-Stream', icon: '⟁' },
  { id: 'dashas', label: 'Dasha Lifetimes', icon: '∿' },
  { id: 'stress', label: 'Stress vs Success', icon: '⊛' },
  { id: 'golden', label: 'Golden Periods', icon: '✦' },
  { id: 'milestones', label: '10-Year Milestones', icon: '◈' },
];

export const ENTITIES = [MAYANK, DEEKSHA, TOGETHER, CROSSROADS, SEPARATION];

export const YEARS_LABELS = ['2025','2026','2027','2028','2029','2030','2031','2032','2033','2034'];
