import MapaTuristicoClient from "./MapaTuristicoClient";

export const metadata = {
  title: "Mapa Turístico • Colombia 360",
  description: "Explora los mejores destinos turísticos de Colombia en un mapa interactivo",
  keywords: "mapa turístico, turismo Colombia, destinos turísticos, lugares para visitar en Colombia",
  path: "/mapa-turistico",
};

export default function MapaTuristicoPage() {
  return <MapaTuristicoClient />;
}
