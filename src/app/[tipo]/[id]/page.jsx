import React from "react";
import CardDetail from "@/components/ChakraCard/CardDetail";

// Simulated fetchers for each entity type (replace with your real fetch logic)
const fetchEntity = async (tipo, id) => {
  // Replace this with your real data fetching logic
  switch (tipo) {
    case "presidentes":
      // Fetch or import presidentes data here
      return { name: "Simón Bolívar", lastName: "Bolívar", description: "Primer presidente de Colombia.", image: "/assets/images/avatar.png", startPeriodDate: "1819", endPeriodDate: "1830" };
    case "turismo":
      return { name: "Cascada del Fin del Mundo", description: "Hermoso lugar en Putumayo.", images: "/assets/images/fallback-place.jpg" };
    case "especies-invasoras":
      return { name: "Rana Toro", description: "Especie invasora peligrosa.", images: "/assets/images/fallback-place.jpg" };
    // ...otros tipos
    default:
      return null;
  }
};

export default async function EntityDetailPage({ params }) {
  const { tipo, id } = params;
  const entity = await fetchEntity(tipo, id);

  if (!entity) {
    return <div className="text-red-500 text-center mt-8">No se encontró información para este elemento.</div>;
  }

  // Puedes personalizar qué props pasas a CardDetail según el tipo
  return (
    <div className="flex justify-center mt-10">
      <CardDetail
        title={entity.name + (entity.lastName ? ` ${entity.lastName}` : "")}
        description={entity.description}
        imageUrl={entity.image || entity.images}
        badgeText={entity.startPeriodDate && entity.endPeriodDate ? `${entity.startPeriodDate} - ${entity.endPeriodDate}` : undefined}
        imageWidth={320}
        imageHeight={320}
        imageStyle="cover"
        buttonOne={"Volver"}
        // Puedes agregar más props según el tipo
      />
    </div>
  );
}

export const dynamic = "force-dynamic"; // Next.js 13+ para rutas dinámicas
