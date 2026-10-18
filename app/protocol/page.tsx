import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { repoUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "How the AJAZZ protocol was reverse engineered",
  description: "Summary of the AJAZZ mouse HID protocol: USB capture with Wireshark/USBPcap, decompiling the official driver with Ghidra, and verifying each command on real hardware.",
  alternates: { canonical: "/protocol/" },
};

const steps = [
  ["Device table", "The installer's config.xml, extracted with innoextract without running it, gave the VID/PID table used for detection."],
  ["Traffic capture", "Wireshark with USBPcap on a Windows VM recorded real traffic while every control in the official app (DPI, RGB, report rate, button remapping) was operated, then the packets were diffed."],
  ["Decompilation", "For what a capture cannot show (every lighting mode, sensor commands, button-function codes, macro repeat modes), the official driver was decompiled with Ghidra."],
  ["Hardware verification", "Each command was confirmed by writing it to the real mouse and reading it back. Corrections found this way are documented, for example lift-off and wake-on-movement being separate commands."],
];

export default function ProtocolPage() {
  return (
    <PageShell
      path="/protocol/"
      title="Reverse engineering"
      lead="AJAZZ never published a Linux driver or a protocol spec. This is how Ajazzy's open implementation was derived."
    >
      <ol className="grid max-w-4xl gap-5">
        {steps.map(([t, d], i) => (
          <li key={t} className="flex gap-5 border-t border-line pt-5">
            <span className="font-mono text-sm text-muted">0{i + 1}</span>
            <div>
              <h2 className="font-semibold tracking-tight">{t}</h2>
              <p className="mt-2 leading-relaxed text-muted">{d}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-10 max-w-3xl leading-relaxed text-muted">
        The protocol covers the wire format and checksum, GET/SET command families, the DPI table, indicator colours, the button/key table, macros (including chunked content),
        the battery query and factory reset. Read the byte-by-byte document in the repository:{" "}
        <a href={`${repoUrl}/blob/main/docs/reverse-engineering.md`} className="underline underline-offset-4 hover:text-accent">docs/reverse-engineering.md</a>.
      </p>
    </PageShell>
  );
}
