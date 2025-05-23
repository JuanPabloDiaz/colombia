import RegionesClient from "./RegionesClient";
import { metadata as projectMetadata } from "@/components/metadata";

export async function generateMetadata() {
  const pageMeta = projectMetadata.reg;
  return {
    title: `${pageMeta.title} • Colombia 360`,
    description: pageMeta.description,
    keywords: pageMeta.keywords,
    path: pageMeta.path,
  };
}

export default function RegionesPage() {
  return <RegionesClient />;
}
