"use client";
import { useRef } from "react";
import Link from "next/link";

export default function MagneticButton({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    el.style.transform = `translate(${dx * 4}px, ${dy * 4}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const className = "btn-primary text-xl px-10 py-5 will-change-transform min-h-[56px] min-w-[200px] relative overflow-hidden group";
  
  // If href is empty or disabled, render as a disabled button
  if (!href || href === "") {
    return (
      <button
        ref={ref as React.RefObject<HTMLButtonElement>}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`${className} opacity-75 cursor-default`}
        disabled
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
      </button>
    );
  }

  return (
    <Link
      href={href}
      role="button"
      ref={ref as React.RefObject<HTMLAnchorElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
    </Link>
  );
}
