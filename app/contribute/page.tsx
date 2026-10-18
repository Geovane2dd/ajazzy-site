import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Code from "@/components/Code";
import { issuesUrl, repoUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contribute: add your AJAZZ mouse",
  description: "Help Ajazzy support more AJAZZ mice: test an untested model, add a device file, or report a protocol difference with a USBPcap capture.",
  alternates: { canonical: "/contribute/" },
};

export default function ContributePage() {
  return (
    <PageShell
      path="/contribute/"
      title="Contribute"
      lead="Ajazzy is young and has only been tested on one exact model. Testing your mouse is the most valuable contribution you can make."
    >
      <div className="grid max-w-4xl gap-5 sm:grid-cols-3">
        {[
          ["Test a model", "Run ajazzyctl on an untested mouse and report what works."],
          ["Add a device", "Add a devices/<model>.h file and register it."],
          ["Report differences", "Describe mismatches, ideally with a USBPcap capture."],
        ].map(([t, d]) => (
          <div key={t} className="border-t border-line pt-5">
            <h2 className="font-semibold tracking-tight">{t}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
          </div>
        ))}
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight">Adding a new mouse model</h2>
        <ol className="mt-5 list-decimal space-y-3 pl-5 leading-relaxed text-muted marker:text-accent">
          <li>Get the model's VID/PID/dev_id combinations from the original driver's <code className="font-mono text-sm text-ink">config.xml</code>.</li>
          <li>Copy <code className="font-mono text-sm text-ink">devices/aj159.h</code> as a template and fill in the entries. Leave <code className="font-mono text-sm text-ink">confirmed</code> at 0 until tested.</li>
          <li>Add the include and a line in the <code className="font-mono text-sm text-ink">groups[]</code> table in <code className="font-mono text-sm text-ink">devices/registry.c</code>.</li>
          <li>Build, plug in the mouse and try each feature with <code className="font-mono text-sm text-ink">ajazzyctl</code>. Enable the matching <code className="font-mono text-sm text-ink">AJAZZ_CAP_*</code> bits for what works.</li>
          <li>Open a pull request.</li>
        </ol>
        <Code label="Extracting config.xml">{`innoextract -e "AJAZZ Driver (X)-x.x.x.x.exe"
cat app/config.xml`}</Code>
        <div className="mt-8 flex gap-3 text-sm font-medium">
          <a href={repoUrl} className="rounded bg-ink px-5 py-2.5 text-bg hover:opacity-85">Open the repository</a>
          <a href={issuesUrl} className="prose-link py-2.5">Report an issue</a>
        </div>
      </section>
    </PageShell>
  );
}
