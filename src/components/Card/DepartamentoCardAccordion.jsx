import React, { useState } from "react";

export default function DepartamentoCardAccordion({ departamento }) {
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

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative flex h-64 min-h-60 flex-col gap-3 overflow-hidden rounded-xl bg-slate-950/90 p-6 text-white/90 shadow-xl">
      <h2 className="text-primary-400 mb-1 line-clamp-1 text-2xl font-bold">
        {name}
      </h2>
      <p
        className={`mb-2 text-base leading-relaxed text-white/80 ${expanded ? "" : "line-clamp-3"}`}
      >
        {description}
      </p>
      <div
        className={`flex flex-wrap gap-4 text-sm ${expanded ? "" : "line-clamp-2"}`}
      >
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
      {cityCapital && expanded && (
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
      <div className="absolute bottom-4 right-6">
        <button
          className="bg-primary-500 hover:bg-primary-600 rounded-full px-4 py-1 text-xs font-semibold text-white shadow transition-colors"
          onClick={() => setExpanded((e) => !e)}
        >
          {expanded ? "Ver menos" : "Leer más"}
        </button>
      </div>
      {expanded && (
        <div
          className="absolute inset-0 z-0 bg-black/30"
          style={{ pointerEvents: "none" }}
        ></div>
      )}
    </div>
  );
}
