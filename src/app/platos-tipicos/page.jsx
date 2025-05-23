import { metadata } from "@/components/metadata";
import PlatosTipicosClient from "./PlatosTipicosClient";

export const generateMetadata = () => ({
  title: `${metadata.plato?.title} • Colombia 360`,
  description: metadata.plato?.description,
  keywords: metadata.plato?.keywords,
});

export default function PlatosTipicosPage() {
  return <PlatosTipicosClient />;
}
