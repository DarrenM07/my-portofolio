// Simple static grid background replacement for the previous DotGrid
"use client";

import "./DotGrid.css";

type Props = {
  className?: string;
};

export default function DotGrid({ className = "" }: Props) {
  // Render a simple CSS grid background. This uses Tailwind arbitrary
  // values when Tailwind is enabled; otherwise the CSS fallback in
  // DotGrid.css provides the same appearance.
  return (
    <div aria-hidden className={`dot-grid ${className}`}>
      <div className="dot-grid__grid" />
    </div>
  );
}
