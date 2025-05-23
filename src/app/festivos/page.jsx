import FestivosClient from "./FestivosClient";
import { metadata as projectMetadata } from "@/components/metadata";

export async function generateMetadata() {
  const pageMeta = projectMetadata.festivos; // festivos key was added in previous step
  return {
    title: `${pageMeta.title} • Colombia 360`,
    description: pageMeta.description,
    keywords: pageMeta.keywords,
    // path: pageMeta.path, // Optional: include if your layout/other components use it
  };
}

export default function FestivosPage() {
  return <FestivosClient />;
}
