"use client";

import React, { ElementType, useRef } from "react";

interface SplitTextProps {
  text: string;
  tag?: ElementType;
  className?: string;
  delay?: number; // ms between letters
  duration?: number; // seconds for letter animation
  from?: { opacity?: number; y?: number };
  to?: { opacity?: number; y?: number };
  onLetterAnimationCompleteAction?: () => void;
}

/**
 * Lightweight SplitText: splits a string into characters and animates them
 * using CSS animations. Props mirror what IntroClient expects.
 */
export default function SplitText({
  text,
  tag = "span",
  className = "",
  delay = 30,
  duration = 0.6,
  from = { opacity: 0, y: 24 },
  to = { opacity: 1, y: 0 },
  onLetterAnimationCompleteAction,
}: SplitTextProps) {
  const ref = useRef<HTMLElement | null>(null);

  const Tag = tag as any;

  const elements = Array.from(text).map((ch, i) => {
    const isSpace = ch === " ";
    const style: React.CSSProperties = {
      display: "inline-block",
      whiteSpace: isSpace ? "pre" : undefined,
      animationName: "split-anim",
      animationDuration: `${duration}s`,
      animationTimingFunction: "cubic-bezier(.2,.9,.2,1)",
      animationFillMode: "both",
      animationDelay: `${i * delay}ms`,
      // pass transform offsets via CSS variables on the parent
    };

    // call completion handler on last character end
    const onAnimationEnd = i === text.length - 1 ? onLetterAnimationCompleteAction : undefined;

    return (
      <span key={`ch-${i}`} className="split-char" style={style} onAnimationEnd={onAnimationEnd}>
        {isSpace ? "\u00A0" : ch}
      </span>
    );
  });

  const parentStyle: any = {
    // CSS variables consumed by the keyframes
    "--from-opacity": (from?.opacity ?? 0).toString(),
    "--to-opacity": (to?.opacity ?? 1).toString(),
    "--from-y": `${from?.y ?? 24}px`,
    "--to-y": `${to?.y ?? 0}px`,
  };

  return (
    <Tag ref={ref} className={`inline-block overflow-hidden split-parent ${className}`} style={parentStyle}>
      {elements}

      <style jsx>{`
        .split-parent { line-height: 1; }
        .split-char { will-change: transform, opacity; }

        @keyframes split-anim {
          from {
            opacity: var(--from-opacity);
            transform: translateY(var(--from-y));
          }
          to {
            opacity: var(--to-opacity);
            transform: translateY(var(--to-y));
          }
        }
      `}</style>
    </Tag>
  );
}
