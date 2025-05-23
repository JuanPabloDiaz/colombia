import { metadata } from "@/components/metadata";
import PlatosTipicosClient from "./PlatosTipicosClient";

export const generateMetadata = () => ({
  title: `${metadata.plaTip?.title} • Colombia 360`,
  description: metadata.plaTip?.description,
  keywords: metadata.plaTip?.keywords,
  path: metadata.plaTip?.path,
});

export default function PlatosTipicosPage() {
  return <PlatosTipicosClient />;
}
