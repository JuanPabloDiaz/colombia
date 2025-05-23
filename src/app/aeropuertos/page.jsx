import { metadata } from "@/components/metadata";
import AeropuertosClient from "./AeropuertosClient";

export const generateMetadata = () => ({
  title: `${metadata.air.title} • Colombia 360`,
  description: metadata.air.description,
  keywords: metadata.air.keywords,
});

export default function AeropuertosPage() {
  return <AeropuertosClient />;
}
