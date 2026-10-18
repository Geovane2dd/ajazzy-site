import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Code from "@/components/Code";
import JsonLd from "@/components/JsonLd";
import { abs, repoUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Documentation: install, udev rule, desktop app and CLI",
  description: "How to install Ajazzy on Linux, set up the udev rule for hidraw access, and use the GTK4 desktop app, and the optional ajazzyctl CLI, to configure AJAZZ mice.",
  alternates: { canonical: "/docs/" },
};

const toc = [
  ["install", "Installing"],
  ["permissions", "Permissions"],
  ["gui", "Using the app"],
  ["cli", "Command line (optional)"],
  ["battery", "Battery"],
];

const pages = [
  ["Overview", "Battery ring, DPI, report rate, lighting, battery saver, one-click profiles, button summary, device details."],
  ["Buttons", "Click a button on the product photo, pick a function, record a shortcut, add a macro or rapid-fire, reset."],
  ["Performance", "Battery saver, DPI stages, report rate, sensor tuning, sleep/wake/debounce."],
  ["Lighting", "Effect gallery, per-effect colours and speed, presets. Software effects are clearly labelled."],
  ["Macros", "Library with live recording, step editor, repeat modes, import/export."],
  ["Profiles", "Save, apply, import and export whole-mouse setups including macros."],
  ["Settings", "Theme, start with the computer, tray behaviour, low-battery warning, diagnostics."],
];

export default function DocsPage() {
  return (
    <PageShell
      path="/docs/"
      title="Documentation"
      lead="Everything you need to install Ajazzy, give it access to your mouse, and configure it from the desktop app, or from the command line if you prefer."
    >
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: "Ajazzy documentation",
        url: abs("/docs/"),
        about: "Configuring AJAZZ gaming mice on Linux",
        inLanguage: "en",
      }} />
      <div className="grid gap-12 lg:grid-cols-[14rem_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <nav aria-label="On this page" className="text-sm">
            <p className="font-semibold">On this page</p>
            <ul className="mt-3 space-y-2 text-muted">
              {toc.map(([id, label]) => (<li key={id}><a href={`#${id}`} className="hover:text-ink">{label}</a></li>))}
            </ul>
          </nav>
        </aside>

        <article className="max-w-3xl space-y-14 leading-relaxed text-muted [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink [&_h3]:mt-8 [&_h3]:font-semibold [&_h3]:text-ink [&_code]:font-mono [&_code]:text-[13px] [&_code]:text-ink [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-accent [&_p]:mt-3">
          <section id="install" className="scroll-mt-24">
            <h2>Installing</h2>
            <p>
              Every push to <code>main</code> publishes a <a href={`${repoUrl}/releases/latest`}>release</a> with a <code>.deb</code>, an <code>.rpm</code> and two
              standalone tarballs (CLI-only and GUI-only). The install command is spelled out in each release's notes.
            </p>
            <h3>Build from source</h3>
            <p>You need a C11 compiler. The GUI also needs GTK4 and libadwaita development headers (<code>gtk4-devel</code> / <code>libgtk-4-dev</code>, <code>libadwaita-devel</code> / <code>libadwaita-1-dev</code>). <code>gettext</code> is optional and only used for the Portuguese translation.</p>
            <Code label="Terminal">{`git clone ${repoUrl}.git
cd Ajazzy
make                 # ajazzyctl, ajazzy-gui (if GTK4/libadwaita found), pt_BR translation
sudo make install    # /usr/local by default; set PREFIX= to change`}</Code>
            <p>Build packages yourself with the scripts in <code>packaging/</code>: <code>build-deb.sh</code>, <code>build-rpm.sh</code>, <code>build-tarballs.sh</code>.</p>
          </section>

          <section id="permissions" className="scroll-mt-24">
            <h2>Permissions</h2>
            <p>The mouse's configuration interface appears as a <code>/dev/hidraw*</code> device owned by root. Install the udev rule so your user can talk to it without <code>sudo</code>, then replug the mouse or dongle.</p>
            <Code label="Terminal">{`sudo cp udev/71-ajazzy.rules /etc/udev/rules.d/
sudo udevadm control --reload-rules
sudo udevadm trigger`}</Code>
          </section>

          <section id="gui" className="scroll-mt-24">
            <h2>Using the app</h2>
            <p>
              Launch <code>ajazzy-gui</code> or find “Ajazzy” in your app launcher. It follows your system theme and uses the Portuguese translation on a <code>pt_BR</code> locale.
              Everything applies the moment you change it, and every value on screen is re-read from the mouse.
            </p>
            <div className="mt-5 overflow-x-auto rounded-lg border border-line">
              <table className="w-full min-w-[30rem] text-left text-sm">
                <thead className="bg-surface text-muted"><tr><th className="px-5 py-3 font-medium">Page</th><th className="px-5 py-3 font-medium">What it does</th></tr></thead>
                <tbody className="divide-y divide-line">
                  {pages.map(([p, d]) => (<tr key={p}><th scope="row" className="px-5 py-3 align-top font-medium text-ink">{p}</th><td className="px-5 py-3">{d}</td></tr>))}
                </tbody>
              </table>
            </div>
            <p>Shortcuts: <code>Ctrl+1…7</code> switch page, <code>F5</code> re-reads the mouse, <code>Ctrl+Q</code> quits. Closing the window keeps Ajazzy in the tray; on GNOME that needs the <a href="https://extensions.gnome.org/extension/615/appindicator-support/">AppIndicator extension</a>.</p>
          </section>

          <section id="cli" className="scroll-mt-24">
            <h2>Command line (optional)</h2>
            <p><code>ajazzyctl</code> is scriptable and ideal for headless setups, keybinds and automation.</p>
            <Code label="ajazzyctl">{`ajazzyctl info                          # what's connected, and what's confirmed for it
ajazzyctl battery
ajazzyctl dpi list
ajazzyctl dpi set 1 1600                # stage 1 -> 1600 DPI
ajazzyctl dpi active 3                  # switch to stage 3
ajazzyctl rate set 1000                 # 1000 Hz polling
ajazzyctl rgb steady ff0000 4           # solid colour (RRGGBB), brightness 0-4
ajazzyctl rgb breathing 4 2 ff0000 0000ff
ajazzyctl rgb off
ajazzyctl sensor liftoff 2              # 2 mm lift-off
ajazzyctl power sleep 600               # auto-sleep after 10 minutes
ajazzyctl keys set 5 volume-up          # button 5 -> volume up
ajazzyctl keys set-key 5 c ctrl         # button 5 -> Ctrl+C
ajazzyctl keys set-fire 5 5 1           # button 5 -> rapid-fire
ajazzyctl keys reset                    # reset every button
ajazzyctl macro set 5 10 a b            # button 5 -> press a, press b, 10 ms between`}</Code>
            <p><code>ajazzyctl watch</code> and <code>ajazzyctl raw</code> exist for protocol research, not everyday use.</p>
          </section>

          <section id="battery" className="scroll-mt-24">
            <h2>Easy on the mouse's battery</h2>
            <p>Presence is checked locally, battery is read only every 30 s (2 min when hidden in the tray), and nothing polls the mouse while it sleeps. The <strong className="text-ink">Battery saver</strong> switch combines 250 Hz, a short sleep timer, lights off and idle light-off, and restores your settings afterwards.</p>
          </section>
        </article>
      </div>
    </PageShell>
  );
}
