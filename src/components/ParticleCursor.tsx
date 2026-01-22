import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    hue: number;
}

export function ParticleCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number>();

    useEffect(() => {
        // Disable on mobile/touch devices for performance
        if ('ontouchstart' in window) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };

            // Add new particles on mouse move
            for (let i = 0; i < 2; i++) {
                particlesRef.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    life: 1,
                    maxLife: 1,
                    size: Math.random() * 4 + 2,
                    hue: Math.random() > 0.5 ? 25 : 0, // Orange or Red
                });
            }

            // Limit particles for performance
            if (particlesRef.current.length > 100) {
                particlesRef.current = particlesRef.current.slice(-100);
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current = particlesRef.current.filter((p) => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.02;
                p.size *= 0.98;

                if (p.life <= 0) return false;

                const alpha = p.life * 0.8;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

                // Create gradient for glow effect
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
                gradient.addColorStop(0, `hsla(${p.hue}, 100%, 70%, ${alpha})`);
                gradient.addColorStop(0.5, `hsla(${p.hue}, 100%, 50%, ${alpha * 0.5})`);
                gradient.addColorStop(1, `hsla(${p.hue}, 100%, 50%, 0)`);

                ctx.fillStyle = gradient;
                ctx.fill();

                return true;
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    // Don't render on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[90]"
            style={{ mixBlendMode: 'screen' }}
        />
    );
}
