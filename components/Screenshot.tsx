import { basePath } from "@/lib/site";

export default function Screenshot({ name, alt, priority }: { name: string; alt: string; priority?: boolean }) {
  return (
    <img
      src={`${basePath}/screens/${name}.webp`}
      alt={alt}
      width={1120}
      height={1048}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className="h-auto w-full rounded-lg border border-line"
    />
  );
}
