"use client";
import React, { useContext } from "react";
import { AppContext } from "@/context";
import Link from "next/link";

function BackButton({ tipo }) {
  return (
    <Link href={`/${tipo}`} passHref legacyBehavior>
      <a
        className="inline-block mb-4 px-6 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition-colors text-base font-medium"
      >
        ← Volver
      </a>
    </Link>
  );
}

export default function EntityDetailPage({ params }) {
  const { tipo, id } = params;
  const {
    presidentData,
    touristicAttractionData,
    mapData,
    invasiveSpecieData,
    departamentData,
    // ...agrega aquí otros arrays del contexto si tienes más tipos
  } = useContext(AppContext);

  // Selecciona el array adecuado según el tipo
  const dataMap = {
    presidentes: presidentData,
    turismo: touristicAttractionData,
    mapas: mapData,
    "especies-invasoras": invasiveSpecieData,
    // ...agrega más si tienes otros tipos
  };

  let entity;
  if (tipo === "departamentos") {
    entity = departamentData.find(dep => String(dep.id) === String(id));
  } else {
    const list = dataMap[tipo] || [];
    entity = list.find(item => String(item.id) === String(id));
  }

  if (!entity) {
    return <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
      <span className="text-lg text-red-400 font-semibold mb-4">No se encontró información para este elemento.</span>
      <BackButton tipo={tipo} />
    </div>;
  }

  // Si es departamento, muestra layout especial con datos relacionados
  if (tipo === "departamentos") {
    return (
      <main className="min-h-[80vh] flex flex-col items-center py-8">
        <BackButton tipo={tipo} />
        <div className="w-full max-w-3xl bg-slate-900/90 rounded-3xl shadow-xl p-8 text-white mt-4">
          <h1 className="text-3xl font-bold mb-4 text-primary-400">{entity.name}</h1>
          <p className="text-base leading-relaxed mb-4 text-white/80">{entity.description}</p>
          <div className="flex flex-wrap gap-4 text-sm mb-6">
            <div><span className="font-semibold text-white/70">Superficie:</span> {entity.surface?.toLocaleString()} km²</div>
            <div><span className="font-semibold text-white/70">Población:</span> {entity.population?.toLocaleString()}</div>
            <div><span className="font-semibold text-white/70">Municipios:</span> {entity.municipalities}</div>
            <div><span className="font-semibold text-white/70">Prefijo:</span> {entity.phonePrefix}</div>
            <div><span className="font-semibold text-white/70">Región:</span> {entity.regionId}</div>
          </div>
          {entity.cityCapital && (
            <div className="mt-3 bg-slate-900/80 rounded-lg p-3 mb-6">
              <div className="font-bold text-white/80">Capital: {entity.cityCapital.name}</div>
              <div className="text-white/70 text-sm">{entity.cityCapital.description}</div>
              <div className="flex flex-wrap gap-4 mt-2 text-xs">
                <div><span className="font-semibold">Superficie:</span> {entity.cityCapital.surface?.toLocaleString()} km²</div>
                <div><span className="font-semibold">Población:</span> {entity.cityCapital.population?.toLocaleString()}</div>
                <div><span className="font-semibold">Código Postal:</span> {entity.cityCapital.postalCode}</div>
              </div>
            </div>
          )}
          {/* Puedes agregar más secciones para mapas, especies invasoras, áreas naturales, etc. */}
        </div>
      </main>
    );
  }

  // Layout normal para otros tipos
  return (
    <main className="min-h-[80vh] flex flex-col items-center py-8">
      <BackButton tipo={tipo} />
      <div className="w-full max-w-3xl bg-slate-900/90 rounded-3xl shadow-xl p-8 text-white mt-4">
        <div className="flex flex-wrap gap-8">
          <div className="flex-none w-80 flex items-start justify-center">
            <img
              src={
                tipo === 'mapas'
                  ? entity.urlImages || '/assets/images/fallback-place.jpg'
                  : entity.image || entity.images || entity.urlImage || '/assets/images/fallback-place.jpg'
              }
              alt={entity.name}
              width={320}
              height={320}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
          <div className="flex-1 min-w-[350px]">
            <h1 className="text-3xl font-bold mb-2">{entity.name}{entity.lastName ? ` ${entity.lastName}` : ''}</h1>
            {entity.startPeriodDate && entity.endPeriodDate && (
              <span className="inline-block bg-purple-600 text-white rounded-lg px-4 py-1 font-semibold mb-4 text-base">
                {entity.startPeriodDate} - {entity.endPeriodDate}
              </span>
            )}
            {entity.scientificName && (
              <p className="italic text-slate-300 mb-2">{entity.scientificName}</p>
            )}
            <p className="text-base leading-relaxed mb-6">{entity.description || entity.impact}</p>
            <p className="text-base leading-relaxed mb-6">{entity.description}</p>
            {/* Otros campos relevantes */}
            {entity.languages && (
              <div className="mb-4">
                <strong>Lenguas:</strong> {Array.isArray(entity.languages) ? entity.languages.join(', ') : entity.languages}
              </div>
            )}
            {entity.region && (
              <div style={{ marginBottom: '1rem' }}>
                <strong>Región:</strong> {entity.region}
              </div>
            )}
            {/* Puedes agregar más campos dinámicamente según el tipo */}
          </div>
        </div>
      </div>
    </main>
  );
}

export const dynamic = "force-dynamic"; // Next.js 13+ para rutas dinámicas
