import { useRef, useEffect } from 'react';

export default function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: { x: number; y: number; r: number; dx: number; dy: number; offset: number }[] = [];
        const numParticles = 40;

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = canvas.clientWidth * dpr;
            canvas.height = canvas.clientHeight * dpr;
            ctx.scale(dpr, dpr);
        };

        const init = () => {
            resize();
            particles = [];
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    r: Math.random() * 2 + 1,
                    dx: (Math.random() - 0.5) * 0.5,
                    dy: -Math.random() * 0.3 - 0.1, // Drifting upwards
                    offset: Math.random() * Math.PI * 2, // For sine wave drift
                });
            }
        };

        let animationId: number;
        let time = 0;

        const render = () => {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;

            ctx.clearRect(0, 0, width, height);
            time += 0.01;

            // Draw lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(6, 182, 212, ${0.08 * (1 - dist / 120)})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw particles
            ctx.fillStyle = 'rgba(6, 182, 212, 0.3)';
            particles.forEach((p) => {
                p.x += Math.sin(time + p.offset) * 0.2 + p.dx;
                p.y += p.dy;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) {
                    p.y = height;
                    p.x = Math.random() * width;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            });

            animationId = requestAnimationFrame(render);
        };

        init();
        render();

        window.addEventListener('resize', init);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', init);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
        />
    );
}
