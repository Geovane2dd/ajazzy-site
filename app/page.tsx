import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Code from "@/components/Code";
import Screenshot from "@/components/Screenshot";
import { abs, author, description, devices, faq, features, releasesUrl, repoUrl, siteName } from "@/lib/site";

const facts = [
  ["License", "GPL-3.0"],
  ["Built with", "C11, GTK4, libadwaita"],
  ["Packages", ".deb, .rpm, tarballs"],
  ["Connection", "USB and 2.4G dongle"],
];


const eyebrow = "text-sm font-semibold text-accent";
const h2 = "mt-2 text-3xl font-semibold tracking-tight sm:text-4xl";

export default function HomePage() {
  const confirmed = devices.filter((d) => d.confirmed).length;
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "SoftwareApplication",
            "@id": abs("/#software"),
            name: siteName,
            description,
            url: abs("/"),
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Linux",
            license: "https://www.gnu.org/licenses/gpl-3.0.html",
            codeRepository: repoUrl,
            downloadUrl: releasesUrl,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            author: { "@type": "Person", name: author.name, url: author.url },
          },
          { "@type": "WebSite", "@id": abs("/#website"), url: abs("/"), name: siteName, inLanguage: "en" },
          { "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        ],
      }} />
      <Navbar />
      <main>
        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
            <div className="max-w-3xl">
              <p className="text-sm text-muted">
                Open source · GPL-3.0 · <a href={repoUrl} className="prose-link">Active development</a>
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
                Configure AJAZZ mice on Linux. Natively.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                Ajazzy is a native desktop app for AJAZZ gaming mice: DPI, lighting, buttons, macros, profiles and battery in one window,
                talking to the hardware directly. No Windows VM, no Wine. A command-line tool is included for scripting.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
                <Link href="/download/" className="rounded-md bg-accent px-5 py-3 text-accent-ink transition-opacity hover:opacity-90">Download for Linux</Link>
                <Link href="/docs/" className="rounded-md border border-line bg-bg px-5 py-3 transition-colors hover:bg-bg/60">Read the docs</Link>
                <a href={repoUrl} className="rounded-md px-3 py-3 text-muted transition-colors hover:text-ink">View on GitHub →</a>
              </div>
              <p className="mt-6 text-sm text-muted">Native GTK4 app · light and dark themes · English and Português · tray icon with battery level</p>
            </div>
            <div className="mx-auto mt-14 max-w-4xl">
              <Screenshot name="home" alt="Ajazzy overview page showing an AJ179 V2 MAX at 90% battery with DPI, report rate and lighting summary" priority />
            </div>
          </div>
        </section>

        <section aria-label="At a glance" className="border-b border-line">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-wide text-muted">{k}</dt>
                <dd className="mt-1 font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="features" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-24">
          <p className={eyebrow}>Features</p>
          <h2 className={h2}>The whole configuration surface, in one app.</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">Changes apply as you make them, and every value on screen is read back from the mouse.</p>
          <ul className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([t, d]) => (
              <li key={t} className="border-b border-r border-line p-6">
                <h3 className="font-semibold tracking-tight">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl space-y-24 px-6 py-24">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className={eyebrow}>Performance</p>
                <h2 className={h2}>Tune DPI and polling per stage.</h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Six DPI stages from 400 to 26000 with a slider or presets, an indicator colour for each, and 125 to 1000 Hz polling.
                  Battery saver changes several settings at once and restores your previous ones when you switch it off.
                </p>
              </div>
              <Screenshot name="performance" alt="Ajazzy performance page with battery saver, six DPI stages, indicator colour and report rate" />
            </div>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="md:order-2">
                <p className={eyebrow}>Lighting</p>
                <h2 className={h2}>Firmware effects, clearly separated from software ones.</h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Six effects run inside the mouse. Colour cycle and custom fade are software effects that need Ajazzy open, and the app labels them.
                  Effects the official driver disables for a model are only offered where that model's table enables them.
                </p>
              </div>
              <div className="md:order-1"><Screenshot name="lighting" alt="Ajazzy lighting page with effects, colour count and presets" /></div>
            </div>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className={eyebrow}>Buttons and macros</p>
                <h2 className={h2}>Remap anything. Record the rest.</h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Click a button on the product photo and pick a function, record a keyboard shortcut, set rapid-fire or assign a macro with your real timing.
                  Macros live on the mouse, per button.
                </p>
              </div>
              <Screenshot name="buttons" alt="Ajazzy buttons page for remapping mouse buttons" />
            </div>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="md:order-2">
                <p className={eyebrow}>Macros and profiles</p>
                <h2 className={h2}>Record, edit, save, switch.</h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Record keys and clicks live, fix the steps in an editor, and keep a library with import and export. Save the whole mouse setup as a profile
                  and apply it with one click, or automatically when the mouse connects.
                </p>
              </div>
              <div className="md:order-1"><Screenshot name="macros" alt="Ajazzy macros page with recording and step editor" /></div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className={eyebrow}>Also included</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">A command line for scripting.</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Prefer a terminal, or want a keybind or a systemd unit? <code className="font-mono text-sm text-ink">ajazzyctl</code> covers the same hardware settings.
            </p>
            <p className="mt-5 text-sm font-medium"><Link href="/docs/#cli" className="prose-link">CLI reference →</Link></p>
          </div>
          <Code label="ajazzyctl">{`ajazzyctl info
ajazzyctl dpi set 1 1600
ajazzyctl rgb steady ff0000 4
ajazzyctl keys set 5 volume-up`}</Code>
        </section>

        <section className="border-y border-line bg-surface">
          <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-2">
            <div>
              <p className={eyebrow}>Compatibility</p>
              <h2 className={h2}>{devices.length} models, {confirmed} confirmed.</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Every model in the official driver's device table is detected and shares the same protocol. Only the AJ179 V2 MAX has been verified on real hardware,
                and Ajazzy tells you plainly when you are on unconfirmed ground.
              </p>
              <p className="mt-6 text-sm font-medium"><Link href="/devices/" className="prose-link">See all supported devices →</Link></p>
            </div>
            <div>
              <p className={eyebrow}>Open source</p>
              <h2 className={h2}>Reverse engineered, and documented.</h2>
              <p className="mt-4 leading-relaxed text-muted">
                The protocol was derived from USB captures and the official driver, then every command was checked against a real mouse. The byte-level writeup is public.
              </p>
              <p className="mt-6 flex gap-6 text-sm font-medium">
                <Link href="/protocol/" className="prose-link">Protocol writeup →</Link>
                <Link href="/contribute/" className="prose-link">Add your mouse →</Link>
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-20 mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className={eyebrow}>FAQ</p>
            <h2 className={h2}>Common questions</h2>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  {f.q}
                  <span className="text-xl text-muted transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-ink text-bg">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Install Ajazzy</h2>
              <p className="mt-2 max-w-xl opacity-70">Packages for Debian, Ubuntu, Fedora and openSUSE, or build it from source.</p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-medium">
              <Link href="/download/" className="rounded-md bg-accent px-5 py-3 text-accent-ink hover:opacity-90">Download</Link>
              <Link href="/docs/" className="rounded-md border border-bg/25 px-5 py-3 hover:bg-bg/10">Documentation</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
