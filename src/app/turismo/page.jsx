import { metadata } from "@/components/metadata";
import TurismoClient from "./TurismoClient";

export const generateMetadata = () => ({
  title: `${metadata.tur?.title} • Colombia 360`,
  description: metadata.tur?.description,
  keywords: metadata.tur?.keywords,
});

export default function TurismoPage() {
  return <TurismoClient />;
}
