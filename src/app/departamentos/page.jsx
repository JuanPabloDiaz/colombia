import { metadata } from "@/components/metadata";
import DepartamentosClient from "./DepartamentosClient";

export const generateMetadata = () => ({
  title: `${metadata.dep.title} • Colombia 360`,
  description: metadata.dep.description,
  keywords: metadata.dep.keywords,
  path: metadata.dep.path,
});

// Required for Next.js on Cloudflare
export const runtime = "edge";

export default function DepartamentosPage() {
  return <DepartamentosClient />;
}
