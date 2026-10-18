import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Ajazzy — Open-source Linux driver for AJAZZ gaming mice";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#0b0d10", color: "#fff" }}>
        <div style={{ fontSize: 28, color: "#f0564a", letterSpacing: 6 }}>OPEN SOURCE · GPL-3.0</div>
        <div style={{ fontSize: 120, fontWeight: 800, marginTop: 24, lineHeight: 1.05 }}>Ajazzy</div>
        <div style={{ fontSize: 42, color: "#9aa1ad", marginTop: 24 }}>Linux driver for AJAZZ gaming mice. DPI, RGB, buttons, macros.</div>
      </div>
    ),
    size,
  );
}
