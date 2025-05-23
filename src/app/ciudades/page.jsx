import CiudadesClient from "./CiudadesClient";
import { metadata as projectMetadata } from "@/components/metadata";

export async function generateMetadata() {
  const pageMeta = projectMetadata.ciudades;
  return {
    title: `${pageMeta.title} • Colombia 360`,
    description: pageMeta.description,
    keywords: pageMeta.keywords,
    // path: pageMeta.path, // Optional: include if your layout/other components use it
  };
}

export default function CiudadesPage() {
  return <CiudadesClient />;
}
