import { metadata } from "@/components/metadata";
import PlatosTipicosClient from "./PlatosTipicosClient";

export const generateMetadata = () => ({
  title: `${metadata.food?.title} • Colombia 360`,
  description: metadata.food?.description,
  keywords: metadata.food?.keywords,
  path: metadata.food?.path,
});

// Required for Next.js on Cloudflare
export const runtime = "edge";

export default function PlatosTipicosPage() {
  return <PlatosTipicosClient />;
}
