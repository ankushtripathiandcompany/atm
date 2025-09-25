"use client";

import { useCallback, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";

// Rotation calculator
function calculateCardRotation({
  currentX,
  currentY,
  centerX,
  centerY,
  maxRotationX,
  maxRotationY,
}: {
  currentX: number;
  currentY: number;
  centerX: number;
  centerY: number;
  maxRotationX: number;
  maxRotationY: number;
}) {
  const deltaX = currentX - centerX;
  const deltaY = currentY - centerY;
  const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  const rotationFactor = distance / maxDistance;
  const rotationY = (
    (-deltaX / centerX) *
    maxRotationY *
    rotationFactor
  ).toFixed(2);
  const rotationX = (
    (deltaY / centerY) *
    maxRotationX *
    rotationFactor
  ).toFixed(2);
  return { rotationX, rotationY };
}

export default function GithubCardSkew({ className }: { className?: string }) {
  // generic HTMLElement ref
  const containerRef = useRef<HTMLElement>(null);
  // timeout ID as number
  const resetRef = useRef<number | null>(null);

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!containerRef.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();
    const { rotationX, rotationY } = calculateCardRotation({
      centerX: width / 2,
      centerY: height / 2,
      currentX: x,
      currentY: y,
      maxRotationX: 4,
      maxRotationY: 6,
    });

    containerRef.current.style.setProperty("--x", `${rotationX}deg`);
    containerRef.current.style.setProperty("--y", `${rotationY}deg`);
  }, []);

  useMousePosition(containerRef, update);

  return (
    <div
      ref={containerRef as any} // HTMLElement generic covers div
      className={cn(
        "flex max-w-80 transform-gpu flex-col gap-4 rounded-3xl border border-border bg-zinc-700 p-10 text-zinc-200 shadow-lg transition-transform ease-linear will-change-transform",
        className
      )}
      style={{
        transform: "perspective(400px) rotateX(var(--x)) rotateY(var(--y))",
        transitionDuration: "50ms",
      }}
      onMouseEnter={() => {
        resetRef.current = window.setTimeout(() => {
          if (!containerRef.current) return;
          containerRef.current.style.transitionDuration = "0ms";
        }, 300);
      }}
      onMouseLeave={() => {
        if (resetRef.current !== null) {
          window.clearTimeout(resetRef.current);
          resetRef.current = null;
        }
        if (!containerRef.current) return;
        containerRef.current.style.transitionDuration = "50ms";
        containerRef.current.style.setProperty("--x", "0deg");
        containerRef.current.style.setProperty("--y", "0deg");
      }}
    >
      <h1 className="font-mono text-6xl tracking-tight">55%</h1>
      <p className="text-xl font-medium text-zinc-400">
        Developer preference for GitHub Copilot
      </p>
      <span className="mt-4 text-sm text-zinc-400">
        Stack Overflow 2023 Survey
      </span>
    </div>
  );
}
