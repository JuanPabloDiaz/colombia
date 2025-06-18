import ConstitucionClient from "./ConstitucionClient";
import { metadata as projectMetadata } from "@/components/metadata";

// Required for Next.js on Cloudflare
export const runtime = "edge";

export async function generateMetadata() {
  const pageMeta = projectMetadata.ley;
  return {
    title: `${pageMeta.title} • Colombia 360`,
    description: pageMeta.description,
    keywords: pageMeta.keywords,
    path: pageMeta.path,
  };
}

export default function ConstitucionPage() {
  return <ConstitucionClient />;
}
