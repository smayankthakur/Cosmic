# Cosmic Matrix · M × D
## Astrological Analysis Software · Vedic + KP + Nadi

A full-featured astrological life-map dashboard for Mayank & Deeksha — individually, jointly, and across every karmic dimension.

---

## Stack

- **React 18** + **Vite 5**
- **Recharts** — dual-line Stress vs Success charts
- **Lucide React** — icons
- **Google Fonts** — Cinzel + Cormorant Garamond
- **Vercel** — zero-config deployment

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite. Done.

### Option B — GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. **Framework Preset:** Vite (auto-detected)
5. **Build Command:** `npm run build`
6. **Output Directory:** `dist`
7. Click **Deploy**

### Option C — Direct Upload

```bash
npm run build
# Upload the /dist folder to vercel.com/new → "Deploy without Git"
```

---

## Architecture

```
src/
├── App.jsx                 # Shell: sidebar + topbar + entity header
├── main.jsx                # React root
├── styles.css              # Celestial Noir design system
├── data/
│   └── astro.js            # All planetary data, dashas, KP significators
└── components/
    ├── StarField.jsx        # Animated star canvas
    ├── LagnaChart.jsx       # North Indian diamond grid SVG
    ├── StressChart.jsx      # Recharts dual-line component
    └── ContentRenderer.jsx  # All 45 tab×entity content intersections
```

## Navigation Matrix

| Sidebar \ Tab     | Foundation | Career | Karma | Love | Time-Stream | Dashas | Stress | Golden | Milestones |
|-------------------|-----------|--------|-------|------|-------------|--------|--------|--------|------------|
| **Mayank**        | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Deeksha**       | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Together**      | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Crossroads**    | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Separation**    | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

45 unique content intersections. All astrologically calculated from birth data.

---

## Astrological Basis

- **Ayanamsha:** Lahiri (Chitrapaksha)
- **System:** Vimshottari Dasha
- **Mayank:** 25 Mar 1995 · 10:55 PM IST · Paharganj, Delhi → Scorpio Lagna, Uttarashada Moon, Rahu MD
- **Deeksha:** 21 Jun 2003 · 04:21 AM IST · Bhopal, MP → Taurus Lagna, Jyeshtha Moon, Mercury MD
- Cross-verify planetary positions with Jagannatha Hora or Kala for clinical precision.
