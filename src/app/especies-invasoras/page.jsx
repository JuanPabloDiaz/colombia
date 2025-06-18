import { metadata } from "@/components/metadata";
import EspeciesInvasorasClient from "./EspeciesInvasorasClient";

export const generateMetadata = () => ({
  title: `${metadata.espInv.title} • Colombia 360`,
  description: metadata.espInv.description,
  keywords: metadata.espInv.keywords,
  path: metadata.espInv.path,
});

// Required for Next.js on Cloudflare
export const runtime = "edge";

export default function EspeciesInvasorasPage() {
  return <EspeciesInvasorasClient />;
}
