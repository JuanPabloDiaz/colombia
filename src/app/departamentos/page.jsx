import { metadata } from "@/components/metadata";
import DepartamentosClient from "./DepartamentosClient";

export const generateMetadata = () => ({
  title: `${metadata.dep.title} • Colombia 360`,
  description: metadata.dep.description,
  keywords: metadata.dep.keywords,
  path: metadata.dep.path,
});

export default function DepartamentosPage() {
  return <DepartamentosClient />;
}
