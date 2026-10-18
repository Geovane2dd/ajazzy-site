export default function Code({ children, label }: { children: string; label?: string }) {
  return (
    <figure className="my-5 overflow-hidden rounded-md bg-code">
      {label && <figcaption className="px-4 pt-3 font-mono text-xs text-code-ink/50">{label}</figcaption>}
      <pre className="overflow-x-auto px-4 py-3 font-mono text-[13px] leading-relaxed text-code-ink"><code>{children}</code></pre>
    </figure>
  );
}
