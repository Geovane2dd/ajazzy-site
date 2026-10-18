import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { author, description, siteName, siteUrl, tagline } from "@/lib/site";

const geistSans = localFont({ src: "./fonts/GeistVF.woff", variable: "--font-geist-sans", weight: "100 900", display: "swap" });
const geistMono = localFont({ src: "./fonts/GeistMonoVF.woff", variable: "--font-geist-mono", weight: "100 900", display: "swap" });

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d10" },
  ],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${siteName} — ${tagline}`, template: `%s · ${siteName}` },
  description,
  applicationName: siteName,
  keywords: [
    "AJAZZ Linux driver", "AJAZZ mouse Linux", "AJ179 V2 MAX Linux", "open source mouse driver",
    "Linux gaming mouse configuration", "hidraw", "DPI RGB macros Linux", "GTK4", "libadwaita", "ajazzyctl",
  ],
  authors: [author],
  creator: author.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  openGraph: { type: "website", url: siteUrl, siteName, title: `${siteName} — ${tagline}`, description, locale: "en_US" },
  twitter: { card: "summary_large_image", title: `${siteName} — ${tagline}`, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
