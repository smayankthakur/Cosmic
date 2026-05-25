export default function LagnaChart({ data, color }) {
  const { placements = {} } = data;

  // North Indian chart: fixed house positions in the diamond grid
  // Each house gets a polygon region. We label them with rashi and planets.
  const housePositions = {
    1:  { cx: 140, cy: 48,  label: '1' },
    2:  { cx: 232, cy: 48,  label: '2' },
    3:  { cx: 270, cy: 140, label: '3' },
    4:  { cx: 232, cy: 232, label: '4' },
    5:  { cx: 140, cy: 232, label: '5' },
    6:  { cx: 48,  cy: 232, label: '6' },
    7:  { cx: 10,  cy: 140, label: '7' },
    8:  { cx: 48,  cy: 48,  label: '8' },
    9:  { cx: 70,  cy: 100, label: '9' },
    10: { cx: 140, cy: 140, label: '10'},
    11: { cx: 210, cy: 100, label: '11'},
    12: { cx: 210, cy: 180, label: '12'},
  };

  // Simplified: use a 3×3 grid approach for North Indian style
  // Center square + 4 corner triangles + 4 side triangles
  const gold = color || '#C9A84C';
  const goldDim = 'rgba(201,168,76,0.15)';
  const goldLine = 'rgba(201,168,76,0.35)';
  const textCol = '#E8C97A';
  const mutedCol = '#9080A8';

  const renderPlanets = (houseNum) => {
    const items = placements[houseNum] || [];
    return items;
  };

  return (
    <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={`North Indian birth chart`}>
      <rect width="280" height="280" rx="6" fill="#0F0820" stroke={goldLine} strokeWidth="0.6" />

      {/* Main cross lines */}
      <line x1="0" y1="0" x2="140" y2="140" stroke={goldLine} strokeWidth="0.5" />
      <line x1="280" y1="0" x2="140" y2="140" stroke={goldLine} strokeWidth="0.5" />
      <line x1="0" y1="280" x2="140" y2="140" stroke={goldLine} strokeWidth="0.5" />
      <line x1="280" y1="280" x2="140" y2="140" stroke={goldLine} strokeWidth="0.5" />

      {/* Inner diamond lines */}
      <line x1="0" y1="93" x2="93" y2="0" stroke={goldLine} strokeWidth="0.4" />
      <line x1="187" y1="0" x2="280" y2="93" stroke={goldLine} strokeWidth="0.4" />
      <line x1="0" y1="187" x2="93" y2="280" stroke={goldLine} strokeWidth="0.4" />
      <line x1="187" y1="280" x2="280" y2="187" stroke={goldLine} strokeWidth="0.4" />

      {/* House boxes */}
      <rect x="93" y="0" width="94" height="93" fill={goldDim} stroke={goldLine} strokeWidth="0.4" />
      <rect x="187" y="93" width="93" height="94" fill="rgba(201,168,76,0.04)" stroke={goldLine} strokeWidth="0.4" />
      <rect x="93" y="187" width="94" height="93" fill="rgba(201,168,76,0.04)" stroke={goldLine} strokeWidth="0.4" />
      <rect x="0" y="93" width="93" height="94" fill="rgba(201,168,76,0.04)" stroke={goldLine} strokeWidth="0.4" />
      <rect x="93" y="93" width="94" height="94" fill="rgba(201,168,76,0.03)" stroke={goldLine} strokeWidth="0.5" />

      {/* House 1 - top center (Lagna) */}
      <text x="140" y="26" fill={gold} fontSize="7" fontFamily="Cinzel, serif" textAnchor="middle" opacity="0.7">H1 · Lagna</text>
      {renderPlanets(1).map((p, i) => (
        <text key={i} x="140" y={38 + i * 11} fill={i === 0 ? gold : textCol} fontSize={i === 0 && p === 'ASC' ? "9" : "8"} fontFamily="Cinzel, serif" textAnchor="middle" fontWeight={p === 'ASC' ? '600' : '400'}>{p}</text>
      ))}

      {/* House 2 - top right */}
      <text x="234" y="26" fill={mutedCol} fontSize="6.5" fontFamily="Cinzel, serif" textAnchor="middle" opacity="0.6">H2</text>
      {renderPlanets(2).map((p, i) => (
        <text key={i} x="234" y={38 + i * 10} fill={textCol} fontSize="8" fontFamily="Cinzel, serif" textAnchor="middle">{p}</text>
      ))}

      {/* House 3 - right */}
      <text x="252" y="134" fill={mutedCol} fontSize="6.5" fontFamily="Cinzel, serif" textAnchor="middle" opacity="0.6">H3</text>
      {renderPlanets(3).map((p, i) => (
        <text key={i} x="252" y={146 + i * 10} fill={textCol} fontSize="8" fontFamily="Cinzel, serif" textAnchor="middle">{p}</text>
      ))}

      {/* House 4 - bottom right */}
      <text x="234" y="210" fill={mutedCol} fontSize="6.5" fontFamily="Cinzel, serif" textAnchor="middle" opacity="0.6">H4</text>
      {renderPlanets(4).map((p, i) => (
        <text key={i} x="234" y={220 + i * 10} fill={textCol} fontSize="8" fontFamily="Cinzel, serif" textAnchor="middle">{p}</text>
      ))}

      {/* House 5 - bottom center */}
      <text x="140" y="210" fill={mutedCol} fontSize="6.5" fontFamily="Cinzel, serif" textAnchor="middle" opacity="0.6">H5</text>
      {renderPlanets(5).map((p, i) => (
        <text key={i} x="140" y={220 + i * 10} fill={textCol} fontSize="8" fontFamily="Cinzel, serif" textAnchor="middle">{p}</text>
      ))}

      {/* House 6 - bottom left */}
      <text x="46" y="210" fill={mutedCol} fontSize="6.5" fontFamily="Cinzel, serif" textAnchor="middle" opacity="0.6">H6</text>
      {renderPlanets(6).map((p, i) => (
        <text key={i} x="46" y={220 + i * 10} fill={textCol} fontSize="8" fontFamily="Cinzel, serif" textAnchor="middle">{p}</text>
      ))}

      {/* House 7 - left */}
      <text x="28" y="134" fill={mutedCol} fontSize="6.5" fontFamily="Cinzel, serif" textAnchor="middle" opacity="0.6">H7</text>
      {renderPlanets(7).map((p, i) => (
        <text key={i} x="28" y={146 + i * 10} fill={textCol} fontSize="8" fontFamily="Cinzel, serif" textAnchor="middle">{p}</text>
      ))}

      {/* House 8 - top left */}
      <text x="46" y="26" fill={mutedCol} fontSize="6.5" fontFamily="Cinzel, serif" textAnchor="middle" opacity="0.6">H8</text>
      {renderPlanets(8).map((p, i) => (
        <text key={i} x="46" y={38 + i * 10} fill={textCol} fontSize="8" fontFamily="Cinzel, serif" textAnchor="middle">{p}</text>
      ))}

      {/* House 10 - center */}
      <text x="140" y="124" fill={mutedCol} fontSize="6" fontFamily="Cinzel, serif" textAnchor="middle" opacity="0.5">H10</text>
      {renderPlanets(10).map((p, i) => (
        <text key={i} x="140" y={134 + i * 10} fill={textCol} fontSize="8" fontFamily="Cinzel, serif" textAnchor="middle">{p}</text>
      ))}

      {/* House 12 - right inner */}
      <text x="210" y="162" fill={mutedCol} fontSize="6" fontFamily="Cinzel, serif" textAnchor="middle" opacity="0.5">H12</text>
      {renderPlanets(12).map((p, i) => (
        <text key={i} x="210" y={172 + i * 10} fill={textCol} fontSize="7.5" fontFamily="Cinzel, serif" textAnchor="middle">{p}</text>
      ))}

      {/* Decorative corner mandalas */}
      <circle cx="140" cy="140" r="3" fill={gold} opacity="0.3" />
      <circle cx="140" cy="140" r="8" fill="none" stroke={gold} strokeWidth="0.3" opacity="0.2" />
    </svg>
  );
}
