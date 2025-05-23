import Link from "next/link";

// Configuración de campos por tipo de entidad
const ENTITY_FIELDS = {
  aeropuerto: [
    { label: "Ciudad", value: (e) => e.city?.name || "Ciudad no disponible" },
    { label: "Tipo", value: (e) => e.type || "Tipo no disponible" },
    { label: "IATA", value: (e) => e.iataCode || "IATA no disponible" },
    { label: "OACI", value: (e) => e.oaciCode || "OACI no disponible" },
  ],
  departamento: [
    { label: "Superficie", value: (e) => e.surface ? `${e.surface} km²` : "Superficie no disponible" },
    { label: "Población", value: (e) => e.population?.toLocaleString() || "Población no disponible" },
    { label: "Municipios", value: (e) => e.municipalities || "Municipios no disponibles" },
  ],
  // Agrega más tipos aquí según lo necesites
};

export default function EntityCard({ entity, type = "aeropuerto", linkBase, extraFields }) {
  const fields = ENTITY_FIELDS[type] || [];
  const entityLink = linkBase || `/${type}s/${entity.id}`;

  return (
    <div className="flex min-h-48 md:min-h-60 flex-col gap-2 md:gap-3 rounded-xl bg-slate-950/90 p-4 md:p-6 text-white/90 shadow-md md:shadow-xl">
      <h2 className="text-primary-400 mb-1 text-xl md:text-2xl font-bold line-clamp-2">{entity.name}</h2>
      {entity.description && (
        <p className="mb-1 md:mb-2 line-clamp-2 md:line-clamp-3 text-sm md:text-base leading-relaxed text-white/80">
          {entity.description}
        </p>
      )}
      <div className="mb-2 md:mb-4 flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm">
        {fields.map(({ label, value }) => (
          <div key={label} className="w-full md:w-auto">
            <span className="font-semibold text-white/70">{label}:</span>{" "}
            <span className="break-words">{value(entity)}</span>
          </div>
        ))}
        {/* Renderiza campos extra si se pasan por props */}
        {extraFields && extraFields(entity)}
      </div>
      <Link href={entityLink} passHref legacyBehavior>
        <a className="mt-auto inline-block rounded-lg bg-gray-800 px-3 py-1.5 md:px-5 md:py-2 text-center text-sm md:text-base font-medium text-white shadow transition-colors hover:bg-gray-700 active:bg-gray-600">
          Ver más
        </a>
      </Link>
    </div>
  );
}

