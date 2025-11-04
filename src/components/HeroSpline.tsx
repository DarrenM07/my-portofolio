"use client";

import dynamic from "next/dynamic";
import { HTMLAttributes, memo, useEffect, useState } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

type Props = HTMLAttributes<HTMLDivElement> & {
  /** If provided, this is used as the light-scene URL */
  sceneLight?: string;
  /** If provided, this is used as the dark-scene URL */
  sceneDark?: string;
  /** fallback single scene (kept for compatibility) */
  scene?: string;
  /** Optional CSS transform string to apply to the spline wrapper for the light scene (e.g. 'translateX(6%) translateY(4%) scale(1)') */
  sceneLightOffset?: string;
  /** Optional CSS transform string to apply to the spline wrapper for the dark scene */
  sceneDarkOffset?: string;
};

const DEFAULT_LIGHT = "https://prod.spline.design/2r0vSg8PZVAUrn13/scene.splinecode";
const DEFAULT_DARK = "https://prod.spline.design/LRES4pVbmvSya9aa/scene.splinecode";

function HeroSplineBase({ sceneLight, sceneDark, scene, className = "", sceneLightOffset, sceneDarkOffset, ...props }: Props) {
  const [mode, setMode] = useState<'dark' | 'light'>(() => {
    if (typeof document === 'undefined') return 'light';
    const el = document.documentElement;
    if (el.classList.contains('dark')) return 'dark';
    if (el.classList.contains('light')) return 'light';
    // fallback to system
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // compute which scene to use
  const lightScene = sceneLight || scene || DEFAULT_LIGHT;
  const darkScene = sceneDark || scene || DEFAULT_DARK;
  const sceneUrl = mode === 'dark' ? darkScene : lightScene;
  const otherSceneUrl = mode === 'dark' ? lightScene : darkScene;

  // control current visible scene and fading
  const [currentSceneUrl, setCurrentSceneUrl] = useState(sceneUrl);
  const [isFading, setIsFading] = useState(false);
  const transitionMs = 450;

  // when mode (thus sceneUrl) changes, perform fade out -> switch -> fade in
  useEffect(() => {
    if (sceneUrl === currentSceneUrl) return;

    // start fade out
    setIsFading(true);

    const outTimer = window.setTimeout(() => {
      // swap scene (this remounts Spline via key)
      setCurrentSceneUrl(sceneUrl);

      // small delay to allow mount, then fade in
      const inTimer = window.setTimeout(() => setIsFading(false), 80);
      // clear inTimer if unmounted
      return () => window.clearTimeout(inTimer);
    }, transitionMs);

    return () => window.clearTimeout(outTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sceneUrl]);

  useEffect(() => {
    // observe class changes on <html> so theme toggle is reactive
    const root = document.documentElement;
    const obs = new MutationObserver(() => {
      if (root.classList.contains('dark')) setMode('dark');
      else if (root.classList.contains('light')) setMode('light');
      else {
        // if neither class present, fallback to system
        setMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      }
    });
    obs.observe(root, { attributes: true, attributeFilter: ['class'] });

    // also listen for storage events (other tabs)
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'theme') {
        const val = e.newValue;
        if (val === 'dark' || val === 'light') setMode(val);
      }
    };
    window.addEventListener('storage', onStorage);

    return () => {
      obs.disconnect();
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  // initial entrance animation for light mode to match dark theme positioning/visuals
  useEffect(() => {
    // only trigger on first mount
    let t: number | undefined;
    try {
      if (mode === 'light' && currentSceneUrl === sceneUrl) {
        setIsFading(true);
        t = window.setTimeout(() => setIsFading(false), transitionMs + 80);
      }
    } catch (_) {
      /* noop */
    }
    return () => {
      if (t) window.clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`relative w-full overflow-hidden ${className}`} {...props}>
      <div
        className="absolute inset-0 overflow-visible"
        style={{
          transition: `opacity ${transitionMs}ms ease`,
          opacity: isFading ? 0 : 1,
        }}
      >
        {/* Visible Spline - keyed by currentSceneUrl so it remounts when swapped */}
        {/* apply per-scene offsets so we can nudge camera/framing differences between scenes */}
        <div
          className="spline-offset"
          style={{
            transform:
              mode === 'dark'
                ? sceneDarkOffset || 'translateX(15%) translateY(7%) scale(1.1)'
                : sceneLightOffset || 'translateX(24%) translateY(11%) scale(1.1)'
          }}
        >
          <Spline key={currentSceneUrl} scene={currentSceneUrl} />
        </div>
      </div>

      {/* Preload the alternate scene offscreen to reduce load time when switching */}
      <div
        aria-hidden
        className="spline-preload"
        style={{ position: 'absolute', left: -9999, top: 0, width: 1, height: 1, overflow: 'hidden', pointerEvents: 'none' }}
      >
        {/* Render the other scene offscreen to encourage the Spline runtime to fetch assets ahead of time */}
        <Spline key={otherSceneUrl} scene={otherSceneUrl} />
      </div>

      {/* Overlay removed — headline/intro moved to page overlay */}
    </div>
  );
}

export default memo(HeroSplineBase);
