"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  details: {
    tech: string[];
    period: string;
    notes?: string;
  };
  // support either a single image path or an array of image paths for a slider
  image?: string | string[];
  repo?: string;
  live?: string;
};

export default function ProjectsListClient({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const [isDark, setIsDark] = useState<boolean>(false);

  // detect theme by reading <html> class and observe changes
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const read = () => setIsDark(document.documentElement.classList.contains('dark'));
    read();
    const mo = new MutationObserver(() => read());
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => mo.disconnect();
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setSelected(null);
    }
    if (selected) {
      document.addEventListener('keydown', onKey);
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // focus close button
      setTimeout(() => closeRef.current?.focus(), 0);
      return () => {
        document.removeEventListener('keydown', onKey);
        document.body.style.overflow = prev;
      };
    }
    return () => {};
  }, [selected]);

  return (
    <>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => {
          const thumb = p.image ? (Array.isArray(p.image) ? p.image[0] : p.image) : null;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelected(p)}
              aria-haspopup="dialog"
              aria-expanded={selected?.id === p.id}
              className="group text-left glass rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              {thumb && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img src={thumb} alt={`${p.title} thumbnail`} loading="lazy" className="w-full h-36 md:h-44 object-cover" />
                </div>
              )}

              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <span aria-hidden className="inline-flex size-8 items-center justify-center rounded-full border border-white/15 group-hover:bg-white/10 transition">→</span>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)]">{p.desc}</p>
              <div className="mt-4 text-xs text-[var(--muted)]">{p.subtitle}</div>
            </button>
          );
        })}
      </div>

      {selected && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-60 flex items-start justify-center p-6 pt-24"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
          style={{ pointerEvents: 'auto' }}
        >
          <div
            className="absolute inset-0"
            onClick={() => setSelected(null)}
            style={{
              backgroundColor: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(250,250,250,0.85)',
              backdropFilter: 'blur(4px)',
            }}
          />

          <div
            className="relative max-w-2xl w-full rounded-2xl shadow-lg z-10 overflow-hidden modal-panel"
            style={{ backgroundColor: isDark ? '#0b0b0b' : '#ffffff', color: isDark ? '#fff' : '#000', marginTop: '1rem' }}
          >
            {/* Top image / slider */}
            {selected.image && (() => {
              const images = Array.isArray(selected.image) ? selected.image : [selected.image];
              return (
                <ImageSlider images={images} title={selected.title} />
              );
            })()}

            {/* Absolute close X in top-right */}
            <button
              ref={closeRef}
              onClick={() => setSelected(null)}
              aria-label="Close dialog"
              className="absolute right-4 top-4 rounded-full p-2 bg-white/90 hover:bg-white/100 dark:bg-black/80 dark:hover:bg-black text-sm"
              style={{ border: '1px solid rgba(0,0,0,0.08)' }}
            >
              ×
            </button>

            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 id="project-title" className="text-2xl font-bold">{selected.title}</h2>
                  <div className="text-sm text-[var(--muted)] mt-1">{selected.subtitle}</div>
                </div>
              </div>

              <div className="mt-4 text-sm text-[var(--muted)]">
                <p className="mb-4">{selected.desc}</p>

                {/* Notes / Features: allow newline-separated bullets */}
                {selected.details.notes && (
                  (() => {
                    const lines = selected.details.notes.split('\n').map((l) => l.trim()).filter(Boolean);
                    const isList = lines.some((l) => l.startsWith('-') || l.startsWith('•') || l.startsWith('*'));
                    if (isList) {
                      return (
                        <ul className="list-disc pl-5 space-y-3 text-sm mb-4">
                          {lines.map((ln, idx) => (
                            <li key={idx}>{ln.replace(/^[-•*]\s?/, '')}</li>
                          ))}
                        </ul>
                      );
                    }
                    return <div className="mb-4 text-sm">{selected.details.notes}</div>;
                  })()
                )}

                <div className="flex flex-wrap gap-2 mt-2">
                  {selected.details.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 border rounded-md text-[var(--muted)]">{t}</span>
                  ))}
                </div>

                <div className="mt-3 text-sm">
                  <strong>When:</strong> {selected.details.period}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {selected.repo && (
                  <a
                    href={selected.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-4 py-3 bg-gray-800 text-white rounded-md shadow-sm hover:opacity-90"
                    style={{ backgroundColor: isDark ? '#111' : '#111', color: '#fff' }}
                  >
                    <span>View on GitHub</span>
                    <span aria-hidden>→</span>
                  </a>
                )}

                {selected.live && (
                  <a
                    href={selected.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 border rounded-md text-sm"
                    style={{ color: isDark ? '#fff' : '#000' }}
                  >
                    View site
                  </a>
                )}
              </div>
            </div>
          </div>
          <style jsx>{`
            .overlay-bg { opacity: 0; background-color: rgba(0,0,0,0.5); animation: overlayFade 240ms ease forwards; }
            @keyframes overlayFade { from { opacity: 0 } to { opacity: 1 } }

            .modal-panel { opacity: 0; transform: translateY(12px); animation: modalFade 260ms ease forwards, modalSlide 260ms cubic-bezier(0.2,0.9,0.2,1) forwards; }
            @keyframes modalFade { from { opacity: 0 } to { opacity: 1 } }
            @keyframes modalSlide { from { transform: translateY(12px) } to { transform: translateY(0) } }
          `}</style>
        </div>
      )}
    </>
  );
}

// Small inline image slider used by the modal header. Keeps implementation local to this file.
function ImageSlider({ images, title }: { images: string[]; title: string }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => setIdx(0), [images]);

  if (!images || images.length === 0) return null;

  const prev = () => setIdx((s) => (s - 1 + images.length) % images.length);
  const next = () => setIdx((s) => (s + 1) % images.length);

  return (
    <div className="w-full h-64 md:h-80 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
      <img src={images[idx]} alt={`${title} screenshot ${idx + 1}`} className="w-full h-full object-cover" />

      {images.length > 1 && (
        <>
          <button
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2"
            style={{ zIndex: 20 }}
          >
            ‹
          </button>

          <button
            aria-label="Next image"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2"
            style={{ zIndex: 20 }}
          >
            ›
          </button>

          <div className="absolute left-0 right-0 bottom-2 flex items-center justify-center gap-2 z-20">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full ${i === idx ? 'bg-white' : 'bg-white/40'}`}
                style={{ opacity: 0.95 }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
