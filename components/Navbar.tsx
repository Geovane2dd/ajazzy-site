import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { basePath, nav, repoUrl } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight">
          <img src={`${basePath}/icon.svg`} alt="" width={26} height={26} />
          Ajazzy
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted">
            {nav.map((l) => (
              <li key={l.href}><Link href={l.href} className="transition-colors hover:text-ink">{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2 text-sm font-medium">
          <ThemeToggle />
          <a href={repoUrl} className="rounded-md border border-line px-3.5 py-2 transition-colors hover:bg-surface">GitHub</a>
          <Link href="/download/" className="rounded-md bg-accent px-3.5 py-2 text-accent-ink transition-opacity hover:opacity-90">Download</Link>
        </div>
      </div>
      <nav aria-label="Mobile" className="border-t border-line md:hidden">
        <ul className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-6 py-2.5 text-sm text-muted">
          {nav.map((l) => (<li key={l.href} className="shrink-0"><Link href={l.href} className="hover:text-ink">{l.label}</Link></li>))}
        </ul>
      </nav>
    </header>
  );
}
