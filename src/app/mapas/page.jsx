import { metadata } from "@/components/metadata";
import MapasClient from "./MapasClient";

export const generateMetadata = () => ({
  title: `${metadata.map.title} • Colombia 360`,
  description: metadata.map.description,
  keywords: metadata.map.keywords,
  path: metadata.map.path,
});

// Required for Next.js on Cloudflare
export const runtime = "edge";

export default function MapasPage() {
  return <MapasClient />;
}
