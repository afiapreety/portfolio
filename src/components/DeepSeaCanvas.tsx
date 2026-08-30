import { useEffect, useRef } from 'react';

type Jellyfish = {
  x: number;
  y: number;
  size: number;
  speed: number;
  phase: number;
  opacity: number;
};

type Particle = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  phase: number;
};

export default function DeepSeaCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: 0, y: 0, active: false };
    let width = 0;
    let height = 0;
    let frame = 0;
    let jellyfish: Jellyfish[] = [];
    let particles: Particle[] = [];

    const createScene = () => {
      const jellyfishCount = width < 700 ? 3 : 6;
      jellyfish = Array.from({ length: jellyfishCount }, (_, index) => ({
        x: width * (0.12 + Math.random() * 0.82),
        y: height * (0.08 + Math.random() * 0.86),
        size: width < 700 ? 34 + Math.random() * 26 : 44 + Math.random() * 54,
        speed: 0.06 + Math.random() * 0.1,
        phase: Math.random() * Math.PI * 2,
        opacity: index === 0 ? 0.68 : 0.28 + Math.random() * 0.3,
      }));

      particles = Array.from({ length: width < 700 ? 30 : 58 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.5 + Math.random() * 1.8,
        speed: 0.08 + Math.random() * 0.2,
        opacity: 0.12 + Math.random() * 0.42,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createScene();
    };

    const drawJellyfish = (jelly: Jellyfish, time: number) => {
      const pulse = 1 + Math.sin(time * 0.0012 + jelly.phase) * 0.035;
      const size = jelly.size * pulse;

      context.save();
      context.translate(jelly.x, jelly.y);
      context.globalAlpha = jelly.opacity;

      const glow = context.createRadialGradient(0, 0, 0, 0, 0, size * 1.45);
      glow.addColorStop(0, 'rgba(216, 180, 254, 0.42)');
      glow.addColorStop(0.5, 'rgba(168, 85, 247, 0.16)');
      glow.addColorStop(1, 'rgba(76, 29, 149, 0)');
      context.fillStyle = glow;
      context.beginPath();
      context.arc(0, 0, size * 1.45, 0, Math.PI * 2);
      context.fill();

      const bell = context.createLinearGradient(0, -size, 0, size * 0.35);
      bell.addColorStop(0, 'rgba(243, 232, 255, 0.78)');
      bell.addColorStop(0.45, 'rgba(192, 132, 252, 0.48)');
      bell.addColorStop(1, 'rgba(124, 58, 237, 0.12)');
      context.fillStyle = bell;
      context.strokeStyle = 'rgba(221, 214, 254, 0.7)';
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(-size, 0);
      context.bezierCurveTo(-size * 0.86, -size * 0.92, size * 0.86, -size * 0.92, size, 0);
      context.quadraticCurveTo(0, size * 0.36, -size, 0);
      context.closePath();
      context.fill();
      context.stroke();

      for (let tentacle = 0; tentacle < 7; tentacle += 1) {
        const startX = -size * 0.7 + (tentacle / 6) * size * 1.4;
        const sway = Math.sin(time * 0.0016 + jelly.phase + tentacle) * size * 0.18;
        context.strokeStyle = tentacle % 2 === 0
          ? 'rgba(216, 180, 254, 0.56)'
          : 'rgba(167, 139, 250, 0.35)';
        context.lineWidth = tentacle % 2 === 0 ? 1.15 : 0.8;
        context.beginPath();
        context.moveTo(startX, size * 0.1);
        context.bezierCurveTo(
          startX + sway,
          size * 0.75,
          startX - sway,
          size * 1.25,
          startX + sway * 0.55,
          size * (1.65 + (tentacle % 3) * 0.24),
        );
        context.stroke();
      }

      context.restore();
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);

      if (pointer.active) {
        const cursorGlow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 180);
        cursorGlow.addColorStop(0, 'rgba(192, 132, 252, 0.12)');
        cursorGlow.addColorStop(1, 'rgba(139, 92, 246, 0)');
        context.fillStyle = cursorGlow;
        context.fillRect(pointer.x - 180, pointer.y - 180, 360, 360);
      }

      particles.forEach((particle) => {
        if (!reduceMotion) {
          particle.y -= particle.speed;
          particle.x += Math.sin(time * 0.0008 + particle.phase) * 0.08;
          if (particle.y < -4) {
            particle.y = height + 4;
            particle.x = Math.random() * width;
          }
        }
        context.fillStyle = `rgba(216, 180, 254, ${particle.opacity})`;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      });

      jellyfish.forEach((jelly) => {
        if (!reduceMotion) {
          jelly.y -= jelly.speed;
          jelly.x += Math.sin(time * 0.00035 + jelly.phase) * 0.08;
          if (jelly.y + jelly.size * 2 < 0) {
            jelly.y = height + jelly.size * 2;
            jelly.x = width * (0.08 + Math.random() * 0.84);
          }
        }
        drawJellyfish(jelly, time);
      });

      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    const updatePointer = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = pointer.x >= 0 && pointer.x <= width && pointer.y >= 0 && pointer.y <= height;
    };

    const clearPointer = () => {
      pointer.active = false;
    };

    resize();
    draw();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    window.addEventListener('pointermove', updatePointer);
    window.addEventListener('blur', clearPointer);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', updatePointer);
      window.removeEventListener('blur', clearPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />;
}
