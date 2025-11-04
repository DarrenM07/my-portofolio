"use client";

import SplitText from "@/components/SplitText";
import { useEffect, useState } from "react";

export default function GreetingInline({ className = "" }: { className?: string }) {
  const greetings = [
    "Hello",
    "Olá",
    "Hola",
    "Bonjour",
    "こんにちは",
    "안녕하세요",
    "สวัสดี",
    "你好",
  ];

  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((s) => (s + 1) % greetings.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={`inline-block mb-6 rounded-full px-4 py-1 backdrop-blur ${className}`}>
      <SplitText
        text={greetings[i]}
        tag="span"
        className="text-sm font-medium"
        delay={30}
        duration={0.5}
        from={{ opacity: 0, y: 8 }}
        to={{ opacity: 1, y: 0 }}
      />
    </div>
  );
}
