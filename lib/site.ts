export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://ajazzy.geovanedd.com").replace(/\/$/, "");
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const siteName = "Ajazzy";
export const repoUrl = "https://github.com/Geovane2dd/Ajazzy";
export const releasesUrl = `${repoUrl}/releases/latest`;
export const issuesUrl = `${repoUrl}/issues`;
export const author = { name: "Geovane2dd", url: "https://github.com/Geovane2dd" };

export const tagline = "Open-source Linux driver for AJAZZ gaming mice";
export const description =
  "Ajazzy is a reverse-engineered, open-source Linux driver for AJAZZ gaming mice. Configure DPI, RGB lighting, buttons, macros and battery from a native GTK4 desktop app, with an ajazzyctl CLI included for scripting. No Windows VM, no Wine.";

export const nav = [
  { label: "Devices", href: "/devices/" },
  { label: "Docs", href: "/docs/" },
  { label: "Download", href: "/download/" },
  { label: "Protocol", href: "/protocol/" },
  { label: "Contribute", href: "/contribute/" },
];

export type Device = {
  model: string;
  devIds: string;
  confirmed: boolean;
  file: string;
};

export const devices: Device[] = [
  { model: "AJ179 V2 MAX", devIds: "N625", confirmed: true, file: "devices/aj179v2max.h" },
  { model: "AJ139 PRO", devIds: "M129, M139", confirmed: false, file: "devices/aj139pro.h" },
  { model: "AJ139 V2 PRO", devIds: "M139", confirmed: false, file: "devices/aj139v2pro.h" },
  { model: "AJ159", devIds: "M620, P630", confirmed: false, file: "devices/aj159.h" },
  { model: "AJ159 MC", devIds: "M630, M620", confirmed: false, file: "devices/aj159mc.h" },
  { model: "AJ159P MC", devIds: "N620", confirmed: false, file: "devices/aj159pmc.h" },
  { model: "AJ179", devIds: "M179, P179, M184", confirmed: false, file: "devices/aj179.h" },
  { model: "AJ179P MC", devIds: "179P", confirmed: false, file: "devices/aj179pmc.h" },
  { model: "AJ179 V2", devIds: "N624", confirmed: false, file: "devices/aj179v2.h" },
  { model: "T500", devIds: "T500", confirmed: false, file: "devices/t500.h" },
];

export const features = [
  ["Native desktop app", "A GTK4 and libadwaita app that follows your system theme, with a tray icon showing the battery level and English and Portuguese interfaces. Nothing to apply: every change goes straight to the mouse."],
  ["DPI and report rate", "Six DPI stages with values and indicator colours, the number of stages the DPI button cycles through, and 125, 250, 500 or 1000 Hz polling."],
  ["Lighting", "Off, steady (any RGB) and breathing with up to 7 colours run in the mouse's firmware. Colour cycle and custom fade are software effects and only run while Ajazzy is open; the app labels them as such."],
  ["Buttons", "Mouse functions, media keys, system shortcuts, any keyboard shortcut, rapid-fire, or disabled. Macros can be assigned per button."],
  ["Macros", "Record keys and clicks with your real timing, edit the steps (up to 101), choose a repeat mode, import and export. Stored on the mouse."],
  ["Sensor and power", "Lift-off distance, angle snapping, ripple control, motion sync, sleep timer, wake on movement, light off when idle, button debounce."],
  ["Profiles", "Whole-mouse snapshots including macros, import/export, optionally applied when the mouse connects. Profiles are local to your PC."],
  ["Battery", "A real 0-100% reading and charging state. It is queried rarely so that Ajazzy does not wake the mouse's radio more than needed. A battery saver switch lowers the report rate and idle timers."],
] as const;

export const faq = [
  {
    q: "Is there an official AJAZZ driver for Linux?",
    a: "No. AJAZZ only ships a Windows app, AJAZZ Driver (X). Ajazzy talks to the mouse directly over hidraw using a protocol reverse-engineered from USB captures and the official driver.",
  },
  {
    q: "Which AJAZZ mice does Ajazzy support?",
    a: "The AJ179 V2 MAX is confirmed on real hardware. Nine more models share the same protocol according to the official driver's device table and are listed as untested until someone verifies them.",
  },
  {
    q: "Do I need Wine or a Windows virtual machine?",
    a: "No. Ajazzy is native Linux software written in C: a GTK4/libadwaita desktop app, plus an ajazzyctl command-line tool for scripting.",
  },
  {
    q: "Do I need root to use it?",
    a: "Only once, to install a udev rule that gives your user access to the mouse's /dev/hidraw device. After that Ajazzy runs as a normal user.",
  },
  {
    q: "Which Linux distributions are supported?",
    a: "Each release provides a .deb, an .rpm and standalone tarballs. It can also be built from source on any distribution with a C11 compiler and, for the GUI, GTK4 and libadwaita.",
  },
  {
    q: "What license is Ajazzy under?",
    a: "GPL-3.0. The source code is on GitHub.",
  },
];

export function abs(path: string) {
  return `${siteUrl}${basePath}${path}`;
}
