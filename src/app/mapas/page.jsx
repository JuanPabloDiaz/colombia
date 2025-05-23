import { metadata } from "@/components/metadata";
import MapasClient from "./MapasClient";

export const generateMetadata = () => ({
  title: `${metadata.map.title} • Colombia 360`,
  description: metadata.map.description,
  keywords: metadata.map.keywords,
});

export default function MapasPage() {
  return <MapasClient />;
}
