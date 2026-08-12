"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
  style?: CSSProperties;
};

export function Parallax({
  children,
  className,
  speed = 0.1,
  style,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let y = 0;
    let targetY = 0;

    const update = () => {
      y += (targetY - y) * 0.12;
      el.style.setProperty("--parallax-y", `${y}px`);
      if (Math.abs(targetY - y) > 0.1) {
        raf = window.requestAnimationFrame(update);
      }
    };

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      targetY = (viewCenter - center) * speed;
      cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, ["--parallax-y" as string]: "0px" }}
    >
      {children}
    </div>
  );
}
