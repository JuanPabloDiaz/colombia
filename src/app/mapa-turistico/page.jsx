import { metadata } from "@/components/metadata";
import MapaTuristicoClient from "./MapaTuristicoClient";

export const generateMetadata = () => ({
  title: `${metadata.mapTur.title} • Colombia 360`,
  description: metadata.mapTur.description,
  keywords: metadata.mapTur.keywords,
  path: metadata.mapTur.path,
});

export default function MapaTuristicoPage() {
  return <MapaTuristicoClient />;
}
