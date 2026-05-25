import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { YEARS_LABELS } from '../data/astro';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: '#0F0820',
      border: '1px solid rgba(201,168,76,0.3)',
      borderRadius: '6px',
      padding: '0.6rem 0.8rem',
      fontFamily: 'Cormorant Garamond, serif',
    }}>
      <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', color: '#C9A84C', marginBottom: '0.3rem', letterSpacing: '1px' }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ fontSize: '0.82rem', color: p.color, marginTop: '0.15rem' }}>
          {p.name}: <strong>{Math.round(p.value)}%</strong>
        </div>
      ))}
    </div>
  );
};

export default function StressChart({ stressData, successData, stressLabel, successLabel, stressColor, successColor, extraDatasets }) {
  const data = YEARS_LABELS.map((yr, i) => ({
    year: yr,
    stress: stressData[i],
    success: successData[i],
    ...(extraDatasets ? Object.fromEntries(extraDatasets.map(d => [d.key, d.data[i]])) : {}),
  }));

  return (
    <div>
      <div className="chart-legend">
        <span className="legend-item">
          <span className="legend-swatch" style={{ background: stressColor || '#C0506A' }} />
          {stressLabel || 'Stress / Friction'}
        </span>
        <span className="legend-item">
          <span className="legend-swatch" style={{ background: successColor || '#C9A84C', borderTop: '2px dashed ' + (successColor || '#C9A84C') }} />
          {successLabel || 'Growth / Success'}
        </span>
        {extraDatasets?.map((d, i) => (
          <span key={i} className="legend-item">
            <span className="legend-swatch" style={{ background: d.color }} />
            {d.label}
          </span>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ top: 8, right: 12, bottom: 4, left: -10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(201,168,76,0.07)" />
          <XAxis dataKey="year" tick={{ fill: '#9080A8', fontFamily: 'Cinzel, serif', fontSize: 9 }} axisLine={{ stroke: 'rgba(201,168,76,0.15)' }} tickLine={false} />
          <YAxis tick={{ fill: '#9080A8', fontFamily: 'Cinzel, serif', fontSize: 9 }} axisLine={false} tickLine={false} tickFormatter={v => v + '%'} domain={[0, 100]} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="stress" name={stressLabel || 'Stress'} stroke={stressColor || '#C0506A'} strokeWidth={2} dot={{ fill: stressColor || '#C0506A', r: 3 }} activeDot={{ r: 5 }} />
          <Line type="monotone" dataKey="success" name={successLabel || 'Growth'} stroke={successColor || '#C9A84C'} strokeWidth={2} strokeDasharray="6 3" dot={{ fill: successColor || '#C9A84C', r: 3, strokeDasharray: '' }} activeDot={{ r: 5 }} />
          {extraDatasets?.map((d, i) => (
            <Line key={i} type="monotone" dataKey={d.key} name={d.label} stroke={d.color} strokeWidth={2} strokeDasharray={i % 2 === 0 ? '4 2' : '8 3'} dot={{ fill: d.color, r: 2 }} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
