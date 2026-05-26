import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { YEARS_LABELS } from '../data/astro';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: 'rgba(12,7,25,0.97)',
      border: '1px solid rgba(201,168,76,0.35)',
      borderRadius: '8px',
      padding: '0.75rem 1rem',
      fontFamily: 'Cormorant Garamond, serif',
      boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
    }}>
      <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', color: '#C9A84C', marginBottom: '0.4rem', letterSpacing: '1.5px' }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ fontSize: '0.95rem', color: p.color, marginTop: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: p.color, display: 'inline-block', flexShrink: 0 }} />
          <span style={{ color: 'var(--cream-d, #D8C9A8)' }}>{p.name}:</span>
          <strong style={{ color: p.color }}>{Math.round(p.value)}%</strong>
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
          <span>{stressLabel || 'Stress / Friction'}</span>
        </span>
        <span className="legend-item">
          <span className="legend-swatch" style={{ background: successColor || '#C9A84C' }} />
          <span>{successLabel || 'Growth / Success'}</span>
        </span>
        {extraDatasets?.map((d, i) => (
          <span key={i} className="legend-item">
            <span className="legend-swatch" style={{ background: d.color }} />
            <span>{d.label}</span>
          </span>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 10, right: 16, bottom: 4, left: -8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(201,168,76,0.07)" />
          <XAxis
            dataKey="year"
            tick={{ fill: '#8878A0', fontFamily: 'Cinzel, serif', fontSize: 10, letterSpacing: '0.5px' }}
            axisLine={{ stroke: 'rgba(201,168,76,0.15)' }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#8878A0', fontFamily: 'Cinzel, serif', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={v => v + '%'}
            domain={[0, 100]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone" dataKey="stress" name={stressLabel || 'Stress'}
            stroke={stressColor || '#C0506A'} strokeWidth={2.5}
            dot={{ fill: stressColor || '#C0506A', r: 4, strokeWidth: 0 }}
            activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
          />
          <Line
            type="monotone" dataKey="success" name={successLabel || 'Growth'}
            stroke={successColor || '#C9A84C'} strokeWidth={2.5} strokeDasharray="7 3"
            dot={{ fill: successColor || '#C9A84C', r: 4, strokeWidth: 0 }}
            activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
          />
          {extraDatasets?.map((d, i) => (
            <Line
              key={i} type="monotone" dataKey={d.key} name={d.label}
              stroke={d.color} strokeWidth={2} strokeDasharray={i % 2 === 0 ? '4 3' : '9 4'}
              dot={{ fill: d.color, r: 3, strokeWidth: 0 }}
              activeDot={{ r: 5 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
