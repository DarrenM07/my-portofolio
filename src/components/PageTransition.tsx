"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [current, setCurrent] = useState<{ key: string; node: React.ReactNode } | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const exitTimer = useRef<number | null>(null);
  const DURATION = 280; // ms

  // On first mount show children
  useEffect(() => {
    setCurrent({ key: pathname || "_", node: children });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When pathname or children changes, animate out the previous and replace after DURATION
  useEffect(() => {
    if (!current) {
      setCurrent({ key: pathname || "_", node: children });
      return;
    }

    if (current.key === pathname) {
      // same route, update node
      setCurrent({ key: pathname || "_", node: children });
      return;
    }

    // start exit
    setIsExiting(true);
    try {
      if (exitTimer.current) window.clearTimeout(exitTimer.current);
    } catch (e) {}
    exitTimer.current = window.setTimeout(() => {
      setCurrent({ key: pathname || "_", node: children });
      setIsExiting(false);
      exitTimer.current = null;
    }, DURATION) as unknown as number;

    return () => {
      try {
        if (exitTimer.current) window.clearTimeout(exitTimer.current);
      } catch (e) {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, children]);

  if (!current) return null;

  return (
    <div className="page-transition-viewport">
      <div key={String(current.key)} className={`page-panel ${isExiting ? "exit" : "enter"}`}>
        {current.node}
      </div>

      <style jsx>{`
        .page-transition-viewport { position: relative; }
        .page-panel.enter { animation: pageEnter ${DURATION}ms cubic-bezier(0.2, 0.9, 0.2, 1) both; }
        .page-panel.exit { animation: pageExit ${DURATION}ms ease both; }

        @keyframes pageEnter {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pageExit {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}
