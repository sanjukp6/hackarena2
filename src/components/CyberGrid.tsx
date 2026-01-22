import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function CyberGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      time += 0.01;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw perspective grid
      const horizon = canvas.height * 0.5;
      const gridSize = 60;
      const speed = time * 50;

      ctx.strokeStyle = 'rgba(249, 115, 22, 0.15)';
      ctx.lineWidth = 1;

      // Horizontal lines
      for (let i = 0; i < 30; i++) {
        const y = horizon + (i * i * 2) + (speed % (gridSize * 2));
        if (y > canvas.height) continue;

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines with perspective
      const vanishX = canvas.width / 2;
      for (let i = -20; i <= 20; i++) {
        const startX = vanishX + i * gridSize * 0.5;
        const endX = vanishX + i * gridSize * 8;

        ctx.beginPath();
        ctx.moveTo(startX, horizon);
        ctx.lineTo(endX, canvas.height);
        ctx.stroke();
      }

      // Floating particles
      ctx.fillStyle = 'rgba(249, 115, 22, 0.8)';
      for (let i = 0; i < 50; i++) {
        const x = (i * 137.5 + time * 20) % canvas.width;
        const y = (Math.sin(i + time) * 100 + canvas.height / 4);
        const size = Math.sin(i * 0.5 + time) * 2 + 2;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Glowing orbs
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.3, canvas.height * 0.3, 0,
        canvas.width * 0.3, canvas.height * 0.3, 200
      );
      gradient.addColorStop(0, 'rgba(239, 68, 68, 0.3)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7, canvas.height * 0.4, 0,
        canvas.width * 0.7, canvas.height * 0.4, 250
      );
      gradient2.addColorStop(0, 'rgba(249, 115, 22, 0.2)');
      gradient2.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
          scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute top-20 right-20 w-32 h-32 border border-orange-500/30 rounded-lg opacity-50"
        style={{ transformOrigin: 'center' }}
      />
      <motion.div
        animate={{
          rotate: -360,
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-40 left-20 w-24 h-24 border border-magenta-500/30"
        style={{
          borderColor: 'rgba(239, 68, 68, 0.3)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
        }}
      />
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/3 left-1/4 w-40 h-40 border border-red-500/20 rounded-full"
      />
    </>
  );
}
