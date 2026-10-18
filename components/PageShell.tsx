import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import JsonLd from "./JsonLd";
import { abs, siteName } from "@/lib/site";

export default function PageShell({
  title, lead, path, children,
}: { title: string; lead: string; path: string; children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: siteName, item: abs("/") },
          { "@type": "ListItem", position: 2, name: title, item: abs(path) },
        ],
      }} />
      <Navbar />
      <main>
        <header className="border-b border-line bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
            <p className="text-sm text-muted"><Link href="/" className="hover:text-ink">Ajazzy</Link> / {title}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>
          </div>
        </header>
        <div className="mx-auto max-w-6xl px-6 py-14">{children}</div>
      </main>
      <Footer />
    </>
  );
}
