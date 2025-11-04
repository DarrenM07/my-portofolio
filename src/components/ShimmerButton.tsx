"use client";

import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export default function ShimmerButton({ className = "", children, ...props }: Props) {
  return (
    <button
      {...props}
      className={`relative overflow-hidden rounded-xl px-5 py-2 font-medium text-white
                  bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600
                  shadow-lg transition-transform active:scale-95 ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full
                   bg-gradient-to-r from-transparent via-white/30 to-transparent
                   [animation:shimmer_2s_linear_infinite]"
      />
      <style>{`@keyframes shimmer { to { transform: translateX(100%); } }`}</style>
    </button>
  );
}
