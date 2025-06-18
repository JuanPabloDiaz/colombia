import FestivosClient from "./FestivosClient";
import { metadata as projectMetadata } from "@/components/metadata";

export async function generateMetadata() {
  const pageMeta = projectMetadata.fes;
  return {
    title: `${pageMeta.title} • Colombia 360`,
    description: pageMeta.description,
    keywords: pageMeta.keywords,
    path: pageMeta.path,
  };
}

// Required for Next.js on Cloudflare
export const runtime = "edge";

export default function FestivosPage() {
  return <FestivosClient />;
}
