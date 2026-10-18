import type { MetadataRoute } from "next";
import { basePath, description, siteName } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ajazzy — Linux driver for AJAZZ mice",
    short_name: siteName,
    description,
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#0b0d10",
    theme_color: "#0b0d10",
    icons: [{ src: `${basePath}/icon.svg`, sizes: "any", type: "image/svg+xml" }],
  };
}
