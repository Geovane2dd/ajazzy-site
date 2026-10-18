import Link from "next/link";
import { author, issuesUrl, releasesUrl, repoUrl } from "@/lib/site";

const cols = [
  { title: "Product", links: [["Devices", "/devices/"], ["Download", "/download/"], ["Documentation", "/docs/"]] },
  { title: "Project", links: [["Protocol writeup", "/protocol/"], ["Contribute", "/contribute/"]] },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <p className="font-semibold tracking-tight">Ajazzy</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Open-source Linux driver for AJAZZ gaming mice. Not affiliated with AJAZZ; the name is used only to identify compatible hardware.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-sm font-semibold">{c.title}</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {c.links.map(([l, h]) => (<li key={h}><Link href={h} className="hover:text-ink">{l}</Link></li>))}
            </ul>
          </div>
        ))}
        <div>
          <p className="text-sm font-semibold">Community</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li><a href={repoUrl} className="hover:text-ink">GitHub</a></li>
            <li><a href={releasesUrl} className="hover:text-ink">Releases</a></li>
            <li><a href={issuesUrl} className="hover:text-ink">Issues</a></li>
            <li><a href={`${repoUrl}/blob/main/LICENSE`} className="hover:text-ink">GPL-3.0</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted">
          &copy; {new Date().getFullYear()} <a href={author.url} className="hover:text-ink">{author.name}</a> and Ajazzy contributors. Released under the GNU GPL v3.
        </p>
      </div>
    </footer>
  );
}
