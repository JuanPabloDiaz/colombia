import { metadata } from "@/components/metadata";
import EspeciesInvasorasClient from "./EspeciesInvasorasClient";

export const generateMetadata = () => ({
  title: `${metadata.espInv.title} • Colombia 360`,
  description: metadata.espInv.description,
  keywords: metadata.espInv.keywords,
});

export default function EspeciesInvasorasPage() {
  return <EspeciesInvasorasClient />;
}