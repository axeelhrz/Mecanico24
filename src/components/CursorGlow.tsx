"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -9999, y: -9999 });
  const current = useRef({ x: -9999, y: -9999 });
  const raf = useRef<number | null>(null);
  const visible = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    const render = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      current.current.x += dx * 0.22;
      current.current.y += dy * 0.22;

      glow.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      glow.style.opacity = visible.current ? "1" : "0";

      raf.current = requestAnimationFrame(render);
    };

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible.current) {
        visible.current = true;
        current.current = { x: e.clientX, y: e.clientY };
      }
    };

    const onLeave = () => {
      visible.current = false;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] hidden overflow-hidden md:block"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-0 top-0 h-[380px] w-[380px] rounded-full opacity-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle at center, rgba(201,209,92,0.2) 0%, rgba(201,209,92,0.07) 28%, transparent 64%)",
          willChange: "transform, opacity",
        }}
      />
    </div>
  );
}
