import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { devices, repoUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Supported AJAZZ mice on Linux",
  description: "Every AJAZZ mouse Ajazzy detects, with confirmed vs. untested status. The AJ179 V2 MAX is confirmed; AJ139, AJ159, AJ179 and T500 variants share the same protocol.",
  alternates: { canonical: "/devices/" },
};

export default function DevicesPage() {
  return (
    <PageShell
      path="/devices/"
      title="Supported devices"
      lead="Compatible is not the same as confirmed. Every model below is in the official driver's device table; only the ones marked Confirmed have been run against real hardware."
    >
      <div className="overflow-x-auto rounded-lg border border-line">
        <table className="w-full min-w-[34rem] text-left text-sm">
          <caption className="sr-only">AJAZZ models detected by Ajazzy</caption>
          <thead className="bg-surface text-muted">
            <tr><th scope="col" className="px-5 py-3 font-medium">Model</th><th scope="col" className="px-5 py-3 font-medium">dev_id</th><th scope="col" className="px-5 py-3 font-medium">Modes</th><th scope="col" className="px-5 py-3 font-medium">Status</th></tr>
          </thead>
          <tbody className="divide-y divide-line">
            {devices.map((d) => (
              <tr key={d.model}>
                <th scope="row" className="px-5 py-3.5 font-medium">{d.model}</th>
                <td className="px-5 py-3.5 font-mono text-xs text-muted">{d.devIds}</td>
                <td className="px-5 py-3.5 text-muted">USB, 2.4G</td>
                <td className="px-5 py-3.5">
                  <span className={d.confirmed ? "font-medium text-accent" : "text-muted"}>{d.confirmed ? "Confirmed" : "Untested"}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <section>
          <h2 className="text-xl font-semibold tracking-tight">What “untested” means</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Untested does not mean broken. It means nobody has checked yet. The protocol is the same across the whole lineup according to the
            original driver, and both the CLI and GUI tell you plainly which capabilities are confirmed for the connected mouse.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold tracking-tight">Own one of these mice?</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Try it and report back. A working result flips on the capability bits for that model; a mismatch with a USBPcap capture is just as useful.{" "}
            <a href={`${repoUrl}/issues`} className="underline underline-offset-4 hover:text-accent">Open an issue</a> or read the{" "}
            <Link href="/contribute/" className="underline underline-offset-4 hover:text-accent">contribution guide</Link>.
          </p>
        </section>
      </div>

      <section className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight">USB identifiers</h2>
        <p className="mt-3 max-w-3xl text-muted">All models use the vendor HID interface <code className="font-mono text-sm">MI_02</code>. USB and 2.4G dongle modes use different PIDs; several models share a VID/PID pair, so the <code className="font-mono text-sm">dev_id</code> read from the device itself tells them apart.</p>
        <div className="mt-5 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead className="bg-surface text-muted"><tr><th className="px-5 py-3 font-medium">Mode</th><th className="px-5 py-3 font-medium">VID</th><th className="px-5 py-3 font-medium">PID</th></tr></thead>
            <tbody className="divide-y divide-line font-mono text-xs">
              <tr><td className="px-5 py-3 font-sans text-sm">USB</td><td className="px-5 py-3">248A</td><td className="px-5 py-3">5C2E, 5D2E, 5E2E, 5B2E (older)</td></tr>
              <tr><td className="px-5 py-3 font-sans text-sm">2.4G dongle</td><td className="px-5 py-3">248A or 249A</td><td className="px-5 py-3">5C2F, 5B2F (older)</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </PageShell>
  );
}
