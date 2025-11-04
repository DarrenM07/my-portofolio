// src/app/intro/page.tsx
import IntroClient from '@/components/IntroClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Welcome • Darren",
  description: "Intro page — greetings in many languages",
};

export default function IntroPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      {/* client interactive intro */}
      <IntroClient />
    </main>
  );
}
