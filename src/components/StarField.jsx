import { useEffect, useRef } from 'react';

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Regular stars
    const stars = Array.from({ length: 280 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 0.9 + 0.15,
      o: Math.random(),
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.006 + 0.002,
    }));

    // Bright accent stars with cross glow
    const brightStars = Array.from({ length: 18 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 1.2,
      o: Math.random() * 0.5 + 0.3,
      phase: Math.random() * Math.PI * 2,
    }));

    // Slow-drifting nebula wisps
    const wisps = Array.from({ length: 4 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      rx: Math.random() * 200 + 120,
      ry: Math.random() * 100 + 60,
      hue: [260, 280, 240, 200][Math.floor(Math.random() * 4)],
      o: Math.random() * 0.04 + 0.01,
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.04,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Nebula wisps
      wisps.forEach(w => {
        w.x += w.vx; w.y += w.vy;
        if (w.x < -200) w.x = canvas.width + 200;
        if (w.x > canvas.width + 200) w.x = -200;
        if (w.y < -100) w.y = canvas.height + 100;
        if (w.y > canvas.height + 100) w.y = -100;
        const grad = ctx.createRadialGradient(w.x, w.y, 0, w.x, w.y, w.rx);
        grad.addColorStop(0, `hsla(${w.hue}, 60%, 45%, ${w.o})`);
        grad.addColorStop(1, `hsla(${w.hue}, 60%, 45%, 0)`);
        ctx.beginPath();
        ctx.ellipse(w.x, w.y, w.rx, w.ry, 0, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Regular stars twinkle
      stars.forEach(s => {
        s.o = 0.08 + 0.55 * Math.abs(Math.sin(t * s.speed * 60 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(215, 195, 145, ${s.o})`;
        ctx.fill();
      });

      // Bright stars with cross glow
      brightStars.forEach(s => {
        const pulse = 0.4 + 0.5 * Math.abs(Math.sin(t * 0.012 + s.phase));
        // Core
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 215, 155, ${s.o * pulse})`;
        ctx.fill();
        // Glow halo
        const halo = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 5);
        halo.addColorStop(0, `rgba(201,168,76,${0.12 * pulse})`);
        halo.addColorStop(1, 'rgba(201,168,76,0)');
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();
        // Cross rays
        ctx.save();
        ctx.globalAlpha = 0.18 * pulse;
        ctx.strokeStyle = 'rgba(240,215,155,1)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(s.x - s.r * 6, s.y);
        ctx.lineTo(s.x + s.r * 6, s.y);
        ctx.moveTo(s.x, s.y - s.r * 6);
        ctx.lineTo(s.x, s.y + s.r * 6);
        ctx.stroke();
        ctx.restore();
      });

      t += 0.012;
      animId = requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} id="starfield" aria-hidden="true" />;
}
