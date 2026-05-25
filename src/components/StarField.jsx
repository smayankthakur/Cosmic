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

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.0 + 0.2,
      o: Math.random(),
      speed: Math.random() * 0.008 + 0.003,
      phase: Math.random() * Math.PI * 2,
    }));

    // A few larger "constellation" stars
    const brightStars = Array.from({ length: 12 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 1,
      o: Math.random() * 0.4 + 0.4,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(s => {
        s.o = 0.1 + 0.55 * Math.abs(Math.sin(t * s.speed * 30 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210, 190, 140, ${s.o})`;
        ctx.fill();
      });

      brightStars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 201, 122, ${s.o})`;
        ctx.fill();
        // Cross glow
        ctx.strokeStyle = `rgba(232, 201, 122, ${s.o * 0.3})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(s.x - s.r * 3, s.y);
        ctx.lineTo(s.x + s.r * 3, s.y);
        ctx.moveTo(s.x, s.y - s.r * 3);
        ctx.lineTo(s.x, s.y + s.r * 3);
        ctx.stroke();
      });

      t += 0.015;
      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => { resize(); };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="starfield" aria-hidden="true" />;
}
