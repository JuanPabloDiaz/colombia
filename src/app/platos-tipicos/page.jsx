import { metadata } from "@/components/metadata";
import PlatosTipicosClient from "./PlatosTipicosClient";

export const generateMetadata = () => ({
  title: `${metadata.food?.title} • Colombia 360`,
  description: metadata.food?.description,
  keywords: metadata.food?.keywords,
  path: metadata.food?.path,
});

export default function PlatosTipicosPage() {
  return <PlatosTipicosClient />;
}
