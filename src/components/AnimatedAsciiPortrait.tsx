import { useEffect, useRef } from 'react';

const CHARACTERS = '@%#*+=-:.';

type Particle = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  character: string;
  opacity: number;
  phase: number;
  delay: number;
};

const REVEAL_SPREAD = 450;
const REVEAL_FADE = 220;

export default function AnimatedAsciiPortrait() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = frameRef.current;

    if (!canvas || !frame) return;

    const context = canvas.getContext('2d');
    const image = new Image();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let particles: Particle[] = [];
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let cellHeight = 0;
    let revealStart = reduceMotion ? -Infinity : 0;
    let revealing = !reduceMotion;

    if (!context) return;

    const draw = (time = performance.now()) => {
      if (revealing && revealStart === 0) revealStart = time;
      const revealElapsed = time - revealStart;
      if (revealing && revealElapsed > REVEAL_SPREAD + REVEAL_FADE) revealing = false;
      context.clearRect(0, 0, width, height);
      context.font = `600 ${cellHeight * 1.05}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';

      const pointer = pointerRef.current;
      const radius = Math.max(62, width * 0.24);

      particles.forEach((particle) => {
        const idleX = reduceMotion ? 0 : Math.sin(time * 0.0012 + particle.phase) * 0.8;
        const idleY = reduceMotion ? 0 : Math.cos(time * 0.001 + particle.phase * 1.4) * 0.55;
        let targetX = particle.baseX + idleX;
        let targetY = particle.baseY + idleY;
        let isDisturbed = false;

        if (pointer.active) {
          const deltaX = particle.baseX - pointer.x;
          const deltaY = particle.baseY - pointer.y;
          const distance = Math.hypot(deltaX, deltaY);

          if (distance < radius) {
            const force = (1 - distance / radius) ** 2;
            const safeDistance = Math.max(distance, 1);
            targetX += (deltaX / safeDistance) * force * 34;
            targetY += (deltaY / safeDistance) * force * 34;
            targetX += Math.sin(time * 0.014 + particle.phase) * force * 6;
            targetY += Math.cos(time * 0.012 + particle.phase) * force * 6;
            isDisturbed = true;
          }
        }

        const easing = pointer.active ? 0.16 : 0.1;
        particle.x += (targetX - particle.x) * easing;
        particle.y += (targetY - particle.y) * easing;

        const reveal = revealing
          ? Math.min(1, Math.max(0, (revealElapsed - particle.delay) / REVEAL_FADE))
          : 1;
        if (reveal === 0) return;

        context.fillStyle = isDisturbed
          ? `rgba(165, 91, 65, ${Math.min(1, particle.opacity + 0.18) * reveal})`
          : `rgba(41, 37, 36, ${particle.opacity * reveal})`;
        context.fillText(particle.character, particle.x, particle.y);
      });

      if (!reduceMotion || pointer.active || revealing) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    const buildPortrait = () => {
      if (!image.complete || !image.naturalWidth) return;

      cancelAnimationFrame(animationFrame);
      width = frame.clientWidth;
      height = frame.clientHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const columns = width < 330 ? 52 : 72;
      const rows = Math.round(columns * (height / width) * 0.55);
      const cellWidth = width / columns;
      cellHeight = height / rows;
      const sampleCanvas = document.createElement('canvas');
      const sampleContext = sampleCanvas.getContext('2d', { willReadFrequently: true });

      if (!sampleContext) return;

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      sampleCanvas.width = columns;
      sampleCanvas.height = rows;
      sampleContext.drawImage(image, 0, 0, columns, rows);

      const pixels = sampleContext.getImageData(0, 0, columns, rows).data;
      particles = [];

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const index = (row * columns + column) * 4;
          const red = pixels[index];
          const green = pixels[index + 1];
          const blue = pixels[index + 2];
          const maximum = Math.max(red, green, blue);
          const minimum = Math.min(red, green, blue);
          const brightness = (red * 0.299 + green * 0.587 + blue * 0.114) / 255;
          const saturation = maximum === 0 ? 0 : (maximum - minimum) / maximum;

          // The extracted source has a near-white neutral backdrop. Ignore it so
          // the canvas contains only the figure's character silhouette.
          if (brightness > 0.9 && saturation < 0.085) continue;

          const characterIndex = Math.min(
            CHARACTERS.length - 1,
            Math.floor(brightness * CHARACTERS.length),
          );
          const baseX = column * cellWidth + cellWidth / 2;
          const baseY = row * cellHeight + cellHeight / 2;

          particles.push({
            baseX,
            baseY,
            x: baseX,
            y: baseY,
            character: CHARACTERS[characterIndex],
            opacity: Math.max(0.38, 1 - brightness * 0.5),
            phase: column * 0.31 + row * 0.17,
            delay: (row / rows) * REVEAL_SPREAD + Math.random() * 80,
          });
        }
      }

      draw();
    };

    image.addEventListener('load', buildPortrait);
    image.src = `${import.meta.env.BASE_URL}profile-ascii.jpg`;
    if (image.complete) buildPortrait();
    const resizeObserver = new ResizeObserver(buildPortrait);
    resizeObserver.observe(frame);

    return () => {
      cancelAnimationFrame(animationFrame);
      image.removeEventListener('load', buildPortrait);
      resizeObserver.disconnect();
    };
  }, []);

  const updatePointer = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerRef.current = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
      active: true,
    };
  };

  return (
    <figure className="relative mx-auto w-full max-w-[12rem] sm:max-w-[14rem] lg:max-w-[17rem]">
      <div
        ref={frameRef}
        className="relative aspect-[3/4] cursor-crosshair select-none touch-none"
        onPointerEnter={updatePointer}
        onPointerMove={updatePointer}
        onPointerLeave={() => {
          pointerRef.current.active = false;
        }}
      >
        <canvas
          ref={canvasRef}
          className="block h-full w-full"
          role="img"
          aria-label="Animated ASCII art figure of Afia Anjum Preety"
        />
      </div>
    </figure>
  );
}
