import React from "react";

export default function DepartamentoCard({ departamento }) {
  const {
    name,
    description,
    surface,
    population,
    municipalities,
    cityCapital,
    phonePrefix,
    regionId,
  } = departamento;

  return (
    <div className="flex min-h-60 flex-col gap-3 rounded-xl bg-slate-950/90 p-6 text-white/90 shadow-xl">
      <h2 className="text-primary-400 mb-1 text-2xl font-bold">{name}</h2>
      <p className="mb-2 text-base leading-relaxed text-white/80">
        {description}
      </p>
      <div className="flex flex-wrap gap-4 text-sm">
        <div>
          <span className="font-semibold text-white/70">Superficie:</span>{" "}
          {surface?.toLocaleString()} km²
        </div>
        <div>
          <span className="font-semibold text-white/70">Población:</span>{" "}
          {population?.toLocaleString()}
        </div>
        <div>
          <span className="font-semibold text-white/70">Municipios:</span>{" "}
          {municipalities}
        </div>
        <div>
          <span className="font-semibold text-white/70">Prefijo:</span>{" "}
          {phonePrefix}
        </div>
        <div>
          <span className="font-semibold text-white/70">Región:</span>{" "}
          {regionId}
        </div>
      </div>
      {cityCapital && (
        <div className="mt-3 rounded-lg bg-slate-900/80 p-3">
          <div className="font-bold text-white/80">
            Capital: {cityCapital.name}
          </div>
          <div className="text-sm text-white/70">{cityCapital.description}</div>
          <div className="mt-2 flex flex-wrap gap-4 text-xs">
            <div>
              <span className="font-semibold">Superficie:</span>{" "}
              {cityCapital.surface?.toLocaleString()} km²
            </div>
            <div>
              <span className="font-semibold">Población:</span>{" "}
              {cityCapital.population?.toLocaleString()}
            </div>
            <div>
              <span className="font-semibold">Código Postal:</span>{" "}
              {cityCapital.postalCode}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
