import { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  baseY: number;
  angle: number;
  speed: number;
  radius: number;
  opacity: number;
  strand: number; // 0 or 1
  helix: number;  // 0 = right side, 1 = left side
}

export default function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let scrollY = 0;
    let currentDpr = 1;
    const particles: Particle[] = [];
    const particleCount = 50; // per helix

    const resize = () => {
      currentDpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * currentDpr;
      canvas.height = window.innerHeight * currentDpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const initParticles = () => {
      particles.length = 0;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isMobile = w < 768;
      const count = isMobile ? 30 : particleCount;

      // On mobile: single centered helix. On desktop: two helixes flanking content
      const helixConfigs = isMobile
        ? [{ centerXRatio: 0.5, helixId: 0 }]
        : [
            { centerXRatio: 0.80, helixId: 0 },
            { centerXRatio: 0.18, helixId: 1 },
          ];

      for (const config of helixConfigs) {
        for (let i = 0; i < count; i++) {
          const t = i / count;
          const yPos = t * h * 2 - h * 0.5;
          const angle = t * Math.PI * 6;

          // Strand 1
          particles.push({
            x: 0, y: 0,
            baseY: yPos,
            angle: angle,
            speed: 0.003 + Math.random() * 0.004,
            radius: isMobile ? 2 + Math.random() * 2 : 2.5 + Math.random() * 3,
            opacity: 0.2 + Math.random() * 0.3,
            strand: 0,
            helix: config.helixId,
          });
          // Strand 2
          particles.push({
            x: 0, y: 0,
            baseY: yPos,
            angle: angle + Math.PI,
            speed: 0.003 + Math.random() * 0.004,
            radius: isMobile ? 2 + Math.random() * 2 : 2.5 + Math.random() * 3,
            opacity: 0.2 + Math.random() * 0.3,
            strand: 1,
            helix: config.helixId,
          });
        }
      }
    };

    const onScroll = () => { scrollY = window.scrollY; };

    const draw = (time: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.setTransform(currentDpr, 0, 0, currentDpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const scrollOffset = scrollY * 0.25;
      const timeS = time * 0.001;

      const isDark = document.documentElement.classList.contains('dark');
      const color1 = isDark ? '120, 175, 200' : '75, 115, 155';    // lightened navy / blue
      const color2 = isDark ? '210, 230, 226' : '90, 138, 182';   // lightened soft cyan / blue
      const linkColor = isDark ? '210, 230, 226' : '90, 138, 182'; // lightened connecting links

      const isMobile = w < 768;
      const helixCenters = isMobile ? [w * 0.5] : [w * 0.80, w * 0.18];
      const helixRadii = isMobile
        ? [40 + Math.min(w * 0.06, 30)]
        : [70 + Math.min(w * 0.04, 50), 60 + Math.min(w * 0.03, 40)];

      // Update positions
      for (const p of particles) {
        const dynamicAngle = p.angle + timeS * p.speed * 50;
        const baseRadius = helixRadii[p.helix];
        const helixRadius = baseRadius + Math.sin((p.baseY / (h * 2)) * Math.PI) * 30;
        const centerX = helixCenters[p.helix];

        p.x = centerX + Math.cos(dynamicAngle) * helixRadius;
        p.y = p.baseY + scrollOffset + Math.sin(timeS * 0.4 + p.angle * 0.5) * 6;

        // Wrap vertically
        const totalH = h * 2;
        p.y = ((p.y % totalH) + totalH) % totalH - h * 0.5;
      }

      // Draw connecting lines between strand pairs
      for (let i = 0; i < particles.length - 1; i += 2) {
        const a = particles[i];
        const b = particles[i + 1];
        if (a.y > -50 && a.y < h + 50 && b.y > -50 && b.y < h + 50) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${linkColor}, ${isDark ? 0.05 : 0.15})`;
          ctx.lineWidth = isDark ? 1 : 1.5;
          ctx.stroke();
        }
      }

      // Draw strand curves per helix
      for (let helixId = 0; helixId < 2; helixId++) {
        for (let strand = 0; strand < 2; strand++) {
          const strandParticles: Particle[] = [];
          for (const p of particles) {
            if (p.helix === helixId && p.strand === strand && p.y > -50 && p.y < h + 50) {
              strandParticles.push(p);
            }
          }
          if (strandParticles.length < 2) continue;
          strandParticles.sort((a, b) => a.y - b.y);

          ctx.beginPath();
          ctx.moveTo(strandParticles[0].x, strandParticles[0].y);
          for (let i = 1; i < strandParticles.length; i++) {
            const prev = strandParticles[i - 1];
            const curr = strandParticles[i];
            const cpx = (prev.x + curr.x) / 2;
            const cpy = (prev.y + curr.y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, cpx, cpy);
          }
          const strandColor = strand === 0 ? color1 : color2;
          ctx.strokeStyle = `rgba(${strandColor}, ${isDark ? 0.13 : 0.22})`;
          ctx.lineWidth = isDark ? 1.5 : 2;
          ctx.stroke();
        }
      }

      // Draw particles
      for (const p of particles) {
        if (p.y < -50 || p.y > h + 50) continue;
        const color = p.strand === 0 ? color1 : color2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${isDark ? p.opacity * 0.9 : p.opacity * 1.25})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    const onResize = () => { resize(); initParticles(); };

    resize();
    initParticles();
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
