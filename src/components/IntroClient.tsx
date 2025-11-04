"use client";

import SplitText from "@/components/SplitText";
import StarBorder from "@/components/StarBorder";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function IntroClient() {
  const greetings = [
    'Hello',
    'Olá',
    'Hola',
    'Bonjour',
    'こんにちは',
    '안녕하세요',
    'สวัสดี',
    '你好',
  ];
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((s) => (s + 1) % greetings.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative z-10 flex min-h-dvh flex-col items-center justify-center text-center px-6">
      <div className="mt-4">
        <SplitText
          text={greetings[i]}
          tag="h1"
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
          delay={30}
          duration={0.65}
          from={{ opacity: 0, y: 36 }}
          to={{ opacity: 1, y: 0 }}
          onLetterAnimationCompleteAction={() => { /* noop */ }}
        />
      </div>

      <div className="mt-10">
        <StarBorder className="inline-block" color="var(--foreground)" speed="5s">
            <Link href="/" prefetch aria-label="Start explore">→ say hi !</Link>
        </StarBorder>
      </div>
    </section>
  );
}
