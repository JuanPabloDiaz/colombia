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
    <div className="flex min-h-60 flex-col gap-3 rounded-xl bg-slate-950/90 p-6 text-white/90 shadow-xl">
      <h2 className="text-primary-400 mb-1 text-2xl font-bold">{entity.name}</h2>
      {entity.description && (
        <p className="mb-2 line-clamp-3 text-base leading-relaxed text-white/80">
          {entity.description}
        </p>
      )}
      <div className="mb-4 flex flex-wrap gap-4 text-sm">
        {fields.map(({ label, value }) => (
          <div key={label}>
            <span className="font-semibold text-white/70">{label}:</span>{" "}
            {value(entity)}
          </div>
        ))}
        {/* Renderiza campos extra si se pasan por props */}
        {extraFields && extraFields(entity)}
      </div>
      <Link href={entityLink} passHref legacyBehavior>
        <a className="mt-auto inline-block rounded-lg bg-gray-800 px-5 py-2 text-center text-base font-medium text-white shadow transition-colors hover:bg-gray-700">
          Ver más
        </a>
      </Link>
    </div>
  );
}

