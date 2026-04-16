"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TopographyBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  lineCount?: number;
  lineColor?: string;
  backgroundColor?: string;
  speed?: number;
  strokeWidth?: number;
}

export function TopographyBackground({
  className,
  children,
  lineCount = 20,
  lineColor = "rgba(120, 120, 120, 0.2)",
  backgroundColor = "transparent",
  speed = 1,
  strokeWidth = 1,
}: TopographyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const isMobile = window.innerWidth < 768;
    const effectiveLineCount = isMobile
      ? Math.floor(lineCount * 0.6)
      : lineCount;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    let animationId: number;
    let tick = 0;

    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    const getHeight = (x: number, t: number) => {
      const scale = 0.002;
      return (
        Math.sin(x * scale * 2 + t) * 40 +
        Math.sin(x * scale * 3.7 + t * 0.7) * 20 +
        Math.sin(x * scale * 1.3 - t * 0.5) * 50 +
        Math.sin(x * scale * 5.1 + t * 1.2) * 15 +
        Math.sin(x * scale * 0.7 + t * 0.3) * 60
      );
    };

    const animate = () => {
      tick += 0.005 * speed;

      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const spacing = height / (effectiveLineCount - 1);
      const padding = 100;

      for (let i = 0; i < effectiveLineCount; i++) {
        const baseY = spacing * i;

        ctx.beginPath();

        let started = false;
        for (let x = -padding; x <= width + padding; x += 5) {
          const terrainHeight = getHeight(x + i * 150, tick);
          const y = baseY + terrainHeight;

          if (!started) {
            ctx.moveTo(x, y);
            started = true;
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, [lineCount, lineColor, backgroundColor, speed, strokeWidth]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className,
      )}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Top and Bottom Fades for seamless transitions */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950 to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent z-10" />

      {children && (
        <div className="relative z-10 h-full w-full">{children}</div>
      )}
    </div>
  );
}
