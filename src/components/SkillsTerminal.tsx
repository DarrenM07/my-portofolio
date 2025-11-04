"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const categories = {
  skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Node.js", "Python"],
  languages: ["JavaScript", "TypeScript", "Python", "SQL"],
  frameworks: ["React", "Next.js", "Express"],
  tools: ["Git", "GitHub", "VS Code"],
  design: ["UI/UX", "Responsive Design", "Typography"],
};

function TerminalBox({ forcedDark, title }: { forcedDark: boolean; title?: string }) {
  const router = useRouter();
  const [output, setOutput] = useState<string[]>([
    "Darren's PowerShell",
    "Welcome to Skills Terminal v1.0.0",
    "Type 'help' to see available commands.",
    "",
  ]);

  const [cwd, setCwd] = useState<string>("C:\\Darren's\\skills");
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const typedRef = useRef<HTMLSpanElement | null>(null);
  const idleTimer = useRef<number | null>(null);
  const [isTyping, setIsTyping] = useState(true);
  // small vertical nudge for block caret (px)
  const caretTopOffset = -2; // adjusted per user request (-2..3)
  const [isFocused, setIsFocused] = useState(true);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const append = (line: string) => setOutput((s) => [...s, line]);

  function handleRunCommand(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;

    append(`PS ${cwd}> ${cmd}`);

    // ✨ Animasi khusus untuk perintah "help"
    if (cmd === "help") {
      const lines = [
        "Available commands:",
        "skills - List all skills",
        "languages - List programming languages",
        "frameworks - List frameworks & libraries",
        "tools - List development tools",
        "design - List design skills",
        "clear - Clear terminal",
        "cd about - Navigate to about section",
        "pwd - Show current section",
        "",
      ];

      let index = 0;
      const typeLine = () => {
        if (index < lines.length) {
          setTimeout(() => {
            append(lines[index]);
            index++;
            typeLine();
          }, 100); // ⏱️ 100ms per baris (ubah jadi 50–150 untuk speed berbeda)
        }
      };

      typeLine();
      return;
    }

    // 🧹 Clear command
    if (cmd === "clear") {
      setOutput([]);
      setInput("");
      setIsTyping(true);
      try {
        if (idleTimer.current) window.clearTimeout(idleTimer.current);
      } catch (e) {}
      idleTimer.current = window.setTimeout(() => {
        setIsTyping(false);
        idleTimer.current = null;
      }, 500) as unknown as number;
      return;
    }

    // 📂 pwd command
    if (cmd === "pwd") {
      append(cwd);
      append("");
      return;
    }

    // 📁 cd command
    if (cmd.startsWith("cd ")) {
      const dest = cmd.slice(3).trim();
      if (dest === "about") {
        const newCwd = "C:\\Darren's\\about";
        append(`Changing directory to ${newCwd}`);
        setCwd(newCwd);
        setTimeout(() => router.push("/about"), 250);
      } else {
        append(`cd: ${dest}: Directory not found`);
      }
      append("");
      return;
    }

    // ⚙️ Direct commands (skills, languages, frameworks, etc.)
    if (cmd in categories) {
      const key = cmd as keyof typeof categories;
      const list = categories[key];

      if (key === "skills") {
        append(`Found ${list.length} skills across categories:`);
        append(`Languages (${categories.languages.length}) ${categories.languages.join(", ")}...`);
      } else {
        append(list.join(", "));
      }
      append("");
      return;
    }

    // ❓ Unknown command
    append(`Unknown command: ${cmd}`);
    append("");
  }


  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleRunCommand(input);
      setInput("");
      setIsTyping(true);
      try { if (idleTimer.current) window.clearTimeout(idleTimer.current); } catch (e) {}
  idleTimer.current = window.setTimeout(() => { setIsTyping(false); idleTimer.current = null; }, 500) as unknown as number;
    }
  }

  function runChipLs(cat: keyof typeof categories) {
    handleRunCommand(cat);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setInput(val);
    setIsTyping(true);
    try { if (idleTimer.current) window.clearTimeout(idleTimer.current); } catch (e) {}
    // start idle timer: after 900ms of no typing, begin blinking
    idleTimer.current = window.setTimeout(() => {
      setIsTyping(false);
      idleTimer.current = null;
    }, 500) as unknown as number;
  }

  // Manage typing/idle state to control blinking (solid while typing; blink when idle)
  useEffect(() => {
    return () => {
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
    };
  }, []);

  const bg = forcedDark ? "#000000" : "#ffffff";
  const fg = forcedDark ? "#ffffff" : "#000000";
  const placeholderColor = forcedDark ? "#ffffff" : "#666666";
  const boxBorder = forcedDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';
  const boxShadow = forcedDark ? 'none' : '0 6px 24px rgba(16,24,40,0.04)';

  return (
    <div className="w-full max-w-2xl mx-auto md:mx-0 md:max-w-none">
      <div
        className="rounded-lg overflow-hidden mb-6 md:mb-0"
        style={{ backgroundColor: bg, color: fg, border: `1px solid ${boxBorder}`, boxShadow }}
      >
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/6" style={{ backgroundColor: bg }}>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-600" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="ml-3 text-sm font-medium" style={{ color: fg }}>{title ?? "Darren's PowerShell"}</div>
          </div>
          <div className="text-sm" style={{ color: forcedDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)' }}>PS</div>
        </div>

        <div className="p-6 min-h-[260px] font-mono text-sm" style={{ backgroundColor: bg, color: fg }}>
          {output.map((line, i) => (
            <div key={i} className={`leading-relaxed ${line.startsWith('PS') ? 'text-[var(--accent)]' : ''}`} style={{ color: line.startsWith('PS') ? undefined : fg }}>
              {line}
            </div>
          ))}

          <div className="mt-2">
            <div className="relative flex items-start gap-2" onClick={() => inputRef.current?.focus()}>
              <div className="text-[var(--accent)] font-mono select-none">PS {cwd}&gt;</div>

              <div className="flex-1 font-mono leading-snug" style={{ color: fg }}>
                <div className="inline-block w-full relative">
                  <div className="inline-block w-full relative">
                    <span ref={typedRef} className="typed inline-block whitespace-pre-wrap break-words" style={{ color: fg }}>
                    {input ? (
                      <>
                        {input}
                        {isFocused && (
                          <span
                            className={`inline-block caret-line ${isTyping ? 'caret-solid' : 'animate-blink'}`}
                            style={{
                              borderLeft: `2px solid ${fg}`,
                              height: '1em',
                              verticalAlign: 'text-bottom',
                              position: 'relative',
                              top: -2,
                              marginLeft: '1px',
                            }}
                          ></span>
                        )}
                      </>
                    ) : (
                      <>
                        {isFocused && (
                          <span
                            className="inline-block caret-line animate-blink"
                            style={{
                              borderLeft: `2px solid ${fg}`,
                              height: '1em',
                              verticalAlign: 'text-bottom',
                              position: 'relative',
                              top: -2,
                              marginRight: '4px',
                            }}
                          />
                        )}
                        <span style={{ color: placeholderColor }}>Type a command, e.g. help</span>
                      </>
                    )}
                    </span>
                  </div>

                  <input
                    ref={inputRef}
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="absolute inset-0 w-full h-full bg-transparent outline-none text-transparent placeholder-transparent caret-transparent"
                    placeholder="Type a command, e.g. help"
                    aria-label="Terminal input"
                    spellCheck={false}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                  />

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-3 border-t" style={{ backgroundColor: bg, borderTop: `1px solid ${boxBorder}` }}>
          <div className="flex flex-wrap gap-3">
            <button className="px-3 py-1 rounded-md border" style={{ backgroundColor: forcedDark ? 'rgba(255,255,255,0.03)' : '#f3f4f6', color: fg, borderColor: forcedDark ? 'rgba(255,255,255,0.08)' : '#e5e7eb', boxShadow: forcedDark ? 'none' : '0 1px 0 rgba(16,24,40,0.04)' }} onClick={() => runChipLs('skills')}>skills</button>
            <button className="px-3 py-1 rounded-md border" style={{ backgroundColor: forcedDark ? 'rgba(255,255,255,0.03)' : '#f3f4f6', color: fg, borderColor: forcedDark ? 'rgba(255,255,255,0.08)' : '#e5e7eb', boxShadow: forcedDark ? 'none' : '0 1px 0 rgba(16,24,40,0.04)' }} onClick={() => runChipLs('languages')}>languages</button>
            <button className="px-3 py-1 rounded-md border" style={{ backgroundColor: forcedDark ? 'rgba(255,255,255,0.03)' : '#f3f4f6', color: fg, borderColor: forcedDark ? 'rgba(255,255,255,0.08)' : '#e5e7eb', boxShadow: forcedDark ? 'none' : '0 1px 0 rgba(16,24,40,0.04)' }} onClick={() => runChipLs('frameworks')}>frameworks</button>
            <button className="px-3 py-1 rounded-md border" style={{ backgroundColor: forcedDark ? 'rgba(255,255,255,0.03)' : '#f3f4f6', color: fg, borderColor: forcedDark ? 'rgba(255,255,255,0.08)' : '#e5e7eb', boxShadow: forcedDark ? 'none' : '0 1px 0 rgba(16,24,40,0.04)' }} onClick={() => runChipLs('tools')}>tools</button>
            <button className="px-3 py-1 rounded-md border" style={{ backgroundColor: forcedDark ? 'rgba(255,255,255,0.03)' : '#f3f4f6', color: fg, borderColor: forcedDark ? 'rgba(255,255,255,0.08)' : '#e5e7eb', boxShadow: forcedDark ? 'none' : '0 1px 0 rgba(16,24,40,0.04)' }} onClick={() => runChipLs('design')}>design</button>
            <button className="px-3 py-1 rounded-md border" style={{ backgroundColor: forcedDark ? 'rgba(255,255,255,0.03)' : '#f3f4f6', color: fg, borderColor: forcedDark ? 'rgba(255,255,255,0.08)' : '#e5e7eb', boxShadow: forcedDark ? 'none' : '0 1px 0 rgba(16,24,40,0.04)' }} onClick={() => handleRunCommand('clear')}>clear</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SkillsTerminal() {
  // ✅ Detect current theme safely (avoid SSR mismatch)
  const [isDark, setIsDark] = useState<boolean | null>(null);

  // Guard: ensure only one SkillsTerminal is mounted per page
  const [alreadyMounted, setAlreadyMounted] = useState<boolean>(false);
  const [guardChecked, setGuardChecked] = useState<boolean>(false);

  // ✅ Initialize theme on client mount
  useEffect(() => {
    if (typeof document !== "undefined") {
      const dark = document.documentElement.classList.contains("dark");
      setIsDark(dark);
    }
  }, []);

  // ✅ Guard to prevent duplicate mount
  useEffect(() => {
    if (typeof window === "undefined") {
      setGuardChecked(true);
      return;
    }

    const key = "__SkillsTerminalMounted";
    if ((window as any)[key]) {
      console.warn("SkillsTerminal: duplicate mount detected — this instance will not render.");
      setAlreadyMounted(true);
      setGuardChecked(true);
      return;
    }

    (window as any)[key] = true;
    setGuardChecked(true);

    return () => {
      try {
        (window as any)[key] = false;
      } catch (e) {
        /* ignore */
      }
    };
  }, []);

  // ✅ Sync terminal with live theme toggle (MutationObserver)
  useEffect(() => {
    if (typeof document === "undefined") return;

    const update = () => {
      const dark = document.documentElement.classList.contains("dark");
      setIsDark(dark);
    };

    // initial read
    update();

    const htmlMo = new MutationObserver(() => update());
    htmlMo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      try {
        htmlMo.disconnect();
      } catch (e) {}
    };
  }, []);

  // ✅ Also watch system theme changes (if user prefers dark mode)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);

    if (mq.addEventListener) mq.addEventListener("change", listener);
    else if ((mq as any).addListener) (mq as any).addListener(listener);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", listener);
      else if ((mq as any).removeListener) (mq as any).removeListener(listener);
    };
  }, []);

  // 🧩 Prevent rendering until guard + theme known (avoid flicker)
  if (!guardChecked || isDark === null) {
    return <div suppressHydrationWarning style={{ minHeight: "300px" }} />;
  }

  if (alreadyMounted) {
    return null;
  }

return (
  <div className="w-full max-w-6xl mx-auto px-4 relative">
    <div className="md:flex md:gap-6">
      <div className="md:flex-1 md:basis-1/2">
        <TerminalBox forcedDark={isDark!} title="Darren's Terminal" />
      </div>
    </div>

    {/* Tombol Navigasi di luar terminal */}
    <div className="flex justify-between items-center mt-4">
      {/* Tombol kiri: cd about */}
      <button
        onClick={() => (window.location.href = "/about")}
        className="px-4 py-2 text-sm font-mono rounded-md border transition hover:opacity-80"
        style={{
          backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "#f3f4f6",
          color: isDark ? "#fff" : "#000",
          borderColor: isDark ? "rgba(255,255,255,0.1)" : "#e5e7eb",
          boxShadow: isDark ? "none" : "0 1px 0 rgba(16,24,40,0.04)",
        }}
      >
        cd about
      </button>

      {/* Tombol kanan: cd projects */}
      <button
        onClick={() => (window.location.href = "/projects")}
        className="px-4 py-2 text-sm font-mono rounded-md border transition hover:opacity-80"
        style={{
          backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "#f3f4f6",
          color: isDark ? "#fff" : "#000",
          borderColor: isDark ? "rgba(255,255,255,0.1)" : "#e5e7eb",
          boxShadow: isDark ? "none" : "0 1px 0 rgba(16,24,40,0.04)",
        }}
      >
        cd projects
      </button>
    </div>

    <style jsx>{`
      .animate-blink {
        animation: blink 1s step-end infinite;
      }
      .caret-solid {
        animation: none !important;
        opacity: 1 !important;
      }
      .block-caret {
        border-radius: 2px;
        line-height: 1;
        vertical-align: text-bottom;
        padding: 0 0.05ch;
      }
      .block-caret-empty {
        display: inline-block;
        line-height: 1;
        vertical-align: text-bottom;
      }
      @keyframes blink {
        50% {
          opacity: 0;
        }
      }
    `}</style>
  </div>
);
}