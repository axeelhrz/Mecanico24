"use client";

import {
  useRef,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
};

export function SpotlightCard({
  children,
  className = "",
  href,
  target,
  rel,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLDivElement | null>(null);

  function onMove(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--spot-x", `${x}px`);
    el.style.setProperty("--spot-y", `${y}px`);

    const rx = ((y - rect.height / 2) / rect.height) * -4;
    const ry = ((x - rect.width / 2) / rect.width) * 4;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  }

  const style = {
    "--spot-x": "50%",
    "--spot-y": "50%",
  } as CSSProperties;

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={style}
        className={`spotlight-card ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={style}
      className={`spotlight-card ${className}`}
    >
      {children}
    </div>
  );
}
