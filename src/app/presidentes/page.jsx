import { metadata } from "@/components/metadata";
import PresidentesClient from "./PresidentesClient";

export const generateMetadata = () => ({
  title: `${metadata.pre?.title} • Colombia 360`,
  description: metadata.pre?.description,
  keywords: metadata.pre?.keywords,
  path: metadata.pre?.path,
});

export default function PresidentesPage() {
  return <PresidentesClient />;
}
