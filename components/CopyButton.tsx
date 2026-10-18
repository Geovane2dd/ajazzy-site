"use client";
import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try { await navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 1500); } catch {}
      }}
      className="rounded px-2.5 py-1 font-mono text-xs text-code-ink/70 transition-colors hover:bg-white/10 hover:text-code-ink"
      aria-label="Copy command"
    >
      {done ? "Copied" : "Copy"}
    </button>
  );
}
