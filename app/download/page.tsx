import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Code from "@/components/Code";
import { releasesUrl, repoUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download Ajazzy for Linux (.deb, .rpm, tarball)",
  description: "Download the latest Ajazzy release: .deb for Debian/Ubuntu, .rpm for Fedora/openSUSE, standalone CLI and GUI tarballs, or build from source.",
  alternates: { canonical: "/download/" },
};

const options = [
  { name: "Debian / Ubuntu", file: ".deb", cmd: "sudo apt install ./ajazzy_*.deb" },
  { name: "Fedora / openSUSE", file: ".rpm", cmd: "sudo dnf install ./ajazzy-*.rpm" },
  { name: "Any distro", file: ".tar.gz", cmd: "tar xf ajazzy-*.tar.gz   # CLI-only or GUI-only tarball" },
];

export default function DownloadPage() {
  return (
    <PageShell
      path="/download/"
      title="Download"
      lead="Every commit to main is built and published as a release. Pick the package for your distribution, then install the udev rule."
    >
      <a href={releasesUrl} className="inline-block rounded bg-ink px-5 py-2.5 text-sm font-medium text-bg hover:opacity-85">
        Latest release on GitHub →
      </a>
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {options.map((o) => (
          <li key={o.name} className="border-t border-line pt-5">
            <p className="font-mono text-xs text-muted">{o.file}</p>
            <h2 className="mt-2 text-lg font-semibold tracking-tight">{o.name}</h2>
            <Code>{o.cmd}</Code>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted">Exact file names and commands are listed in each release's notes; the commands above are typical examples.</p>

      <section className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">After installing</h2>
          <p className="mt-3 text-muted">Allow your user to access the mouse, then replug it. See <Link href="/docs/#permissions" className="underline underline-offset-4 hover:text-accent">Permissions</Link>.</p>
          <Code>{`sudo cp udev/71-ajazzy.rules /etc/udev/rules.d/
sudo udevadm control --reload-rules && sudo udevadm trigger`}</Code>
        </div>
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Build from source</h2>
          <p className="mt-3 text-muted">C11 compiler, plus GTK4 and libadwaita headers for the GUI.</p>
          <Code>{`git clone ${repoUrl}.git
cd Ajazzy && make && sudo make install`}</Code>
        </div>
      </section>
    </PageShell>
  );
}
