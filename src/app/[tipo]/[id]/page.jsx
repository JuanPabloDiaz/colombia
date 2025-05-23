"use client";
import React, { useContext } from "react";
import { AppContext } from "@/context";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

function BackButton({ tipo }) {
  return (
    <Link href={`/${tipo}`} passHref legacyBehavior>
      <a className="mb-4 inline-block rounded-lg bg-gray-800 px-6 py-2 text-base font-medium text-white shadow transition-colors hover:bg-gray-700">
        ← Volver
      </a>
    </Link>
  );
}

function formatMandatoDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const opts = { day: "numeric", month: "short", year: "numeric" };
  // Intl.DateTimeFormat devuelve "feb." o "jul.", quitamos el punto y ponemos mayúscula inicial
  let formatted = new Intl.DateTimeFormat("es-CO", opts).format(date);
  formatted = formatted.replace(
    /\b(\w{3})\./,
    (m, p1) => p1.charAt(0).toUpperCase() + p1.slice(1),
  );
  // Si Intl pone el mes en minúscula y sin punto, igual capitalizamos
  formatted = formatted.replace(
    / (\w{3}) /,
    (m, p1) => " " + p1.charAt(0).toUpperCase() + p1.slice(1) + " ",
  );
  return formatted.replace(".", "");
}

export default function EntityDetailPage({ params }) {
  const { tipo, id } = params;
  const [modalImg, setModalImg] = React.useState(null);

  const {
    presidentData,
    touristicAttractionData,
    mapData,
    invasiveSpecieData,
    departamentData,
    allAirportData,
    typicalDishData,
    traditionalFairAndFestivalData,
    fetchTraditionalFairAndFestivalById,
    traditionalFairAndFestivalDetail,
    isLoading,
  } = useContext(AppContext);

  // Selecciona el array adecuado según el tipo
  const dataMap = {
    presidentes: presidentData,
    turismo: touristicAttractionData,
    mapas: mapData,
    "especies-invasoras": invasiveSpecieData,
    aeropuertos: allAirportData,
    "platos-tipicos": typicalDishData,
    "ferias-y-festivales": traditionalFairAndFestivalData,
  };

  // --- LÓGICA ROBUSTA PARA FERIAS Y FESTIVALES ---
  const [localEntity, setLocalEntity] = React.useState(null);
  const [triedFetch, setTriedFetch] = React.useState(false);

  React.useEffect(() => {
    if (tipo !== "ferias-y-festivales") return;
    const list = traditionalFairAndFestivalData || [];
    const found = list.find((item) => String(item.id) === String(id));
    if (found) {
      setLocalEntity(found);
    } else if (!triedFetch) {
      fetchTraditionalFairAndFestivalById(id);
      setTriedFetch(true);
    }
  }, [
    tipo,
    id,
    traditionalFairAndFestivalData,
    fetchTraditionalFairAndFestivalById,
    triedFetch,
  ]);

  React.useEffect(() => {
    if (
      tipo === "ferias-y-festivales" &&
      traditionalFairAndFestivalDetail &&
      String(traditionalFairAndFestivalDetail.id) === String(id)
    ) {
      setLocalEntity(traditionalFairAndFestivalDetail);
    }
  }, [traditionalFairAndFestivalDetail, tipo, id]);

  // --- FIN LÓGICA ROBUSTA ---

  let entity;
  if (tipo === "departamentos") {
    entity = departamentData.find((dep) => String(dep.id) === String(id));
  } else {
    const list = dataMap[tipo] || [];
    entity = list.find((item) => String(item.id) === String(id));
  }

  if (!entity) {
    return (
      <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
        <span className="mb-4 text-lg font-semibold text-red-400">
          No se encontró información para este elemento.
        </span>
        <BackButton tipo={tipo} />
      </div>
    );
  }

  // Si es departamento, muestra layout especial con datos relacionados
  if (tipo === "departamentos") {
    return (
      <main className="flex min-h-[80vh] flex-col items-center py-8">
        <BackButton tipo={tipo} />
        <div className="mt-4 w-full max-w-3xl rounded-3xl bg-slate-900/90 p-8 text-white shadow-xl">
          <h1 className="text-primary-400 mb-4 text-3xl font-bold">
            {entity.name}
          </h1>
          <p className="mb-4 text-base leading-relaxed text-white/80">
            {entity.description}
          </p>
          <div className="mb-6 flex flex-wrap gap-4 text-sm">
            <div>
              <span className="font-semibold text-white/70">Superficie:</span>{" "}
              {entity.surface?.toLocaleString()} km²
            </div>
            <div>
              <span className="font-semibold text-white/70">Población:</span>{" "}
              {entity.population?.toLocaleString()}
            </div>
            <div>
              <span className="font-semibold text-white/70">Municipios:</span>{" "}
              {entity.municipalities}
            </div>
            <div>
              <span className="font-semibold text-white/70">Prefijo:</span>{" "}
              {entity.phonePrefix}
            </div>
            <div>
              <span className="font-semibold text-white/70">Región:</span>{" "}
              {entity.regionId}
            </div>
          </div>
          {entity.cityCapital && (
            <div className="mb-6 mt-3 rounded-lg bg-slate-900/80 p-3">
              <div className="font-bold text-white/80">
                Capital: {entity.cityCapital.name}
              </div>
              <div className="text-sm text-white/70">
                {entity.cityCapital.description}
              </div>
              <div className="mt-2 flex flex-wrap gap-4 text-xs">
                <div>
                  <span className="font-semibold">Superficie:</span>{" "}
                  {entity.cityCapital.surface?.toLocaleString()} km²
                </div>
                <div>
                  <span className="font-semibold">Población:</span>{" "}
                  {entity.cityCapital.population?.toLocaleString()}
                </div>
                <div>
                  <span className="font-semibold">Código Postal:</span>{" "}
                  {entity.cityCapital.postalCode}
                </div>
              </div>
            </div>
          )}
          {/* Puedes agregar más secciones para mapas, especies invasoras, áreas naturales, etc. */}
        </div>
      </main>
    );
  }

  // Layout especial para presidentes
  if (tipo === "presidentes") {
    return (
      <main className="flex min-h-[80vh] flex-col items-center py-8">
        <BackButton tipo={tipo} />
        <div className="mt-4 w-full max-w-3xl rounded-3xl bg-slate-900/90 p-8 text-white shadow-xl">
          <div className="flex flex-wrap gap-8">
            <div className="flex w-72 flex-none items-start justify-center">
              <img
                src={entity.image || "/assets/images/fallback-person.jpg"}
                alt={
                  entity.name + (entity.lastName ? " " + entity.lastName : "")
                }
                width={288}
                height={320}
                className="rounded-xl object-cover shadow-lg"
              />
            </div>
            <div className="min-w-[250px] flex-1">
              <h1 className="text-primary-400 mb-2 text-3xl font-bold">
                {entity.name} {entity.lastName}
              </h1>
              {(entity.startPeriodDate || entity.endPeriodDate) && (
                <div className="mb-2 text-base text-white/80">
                  <span className="font-semibold text-white/70">Mandato:</span>{" "}
                  {entity.startPeriodDate && (
                    <span>{formatMandatoDate(entity.startPeriodDate)} </span>
                  )}
                  {entity.endPeriodDate && (
                    <span>- {formatMandatoDate(entity.endPeriodDate)}</span>
                  )}
                </div>
              )}
              {entity.politicalParty && (
                <div className="mb-2 text-base text-white/80">
                  <span className="font-semibold text-white/70">
                    Partido político:
                  </span>{" "}
                  {entity.politicalParty}
                </div>
              )}
              {entity.city && (
                <div className="mb-2 text-base text-white/80">
                  <span className="font-semibold text-white/70">Ciudad:</span>{" "}
                  {entity.city.name}
                </div>
              )}
              <p className="mb-2 whitespace-pre-line text-base leading-relaxed text-white/90">
                {entity.description}
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Layout especial para Aeropuerto
  if (tipo === "aeropuertos") {
    return (
      <main className="flex min-h-[80vh] flex-col items-center py-8">
        <BackButton tipo={tipo} />
        <div className="mt-4 w-full max-w-2xl overflow-hidden rounded-3xl bg-slate-900/90 p-0 text-white shadow-xl">
          <div className="flex flex-col gap-2 p-6">
            <h1 className="text-primary-400 mb-1 text-3xl font-extrabold leading-tight">
              {entity.name}
            </h1>
            {entity.city && (
              <>
                <div className="text-primary-200 mb-1 flex items-center gap-2 text-lg font-medium">
                  <svg
                    className="text-primary-300 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {entity.city.name}
                </div>
                {entity.city.population && (
                  <div className="mb-1 text-base text-white/80">
                    <span className="font-semibold text-white/70">
                      Población:
                    </span>{" "}
                    {entity.city.population.toLocaleString()}
                  </div>
                )}
              </>
            )}
            <p className="mb-3 whitespace-pre-line text-base leading-relaxed text-white/90">
              {entity.description}
            </p>
            <div className="mb-6 flex flex-wrap gap-4 text-sm">
              <div>
                <span className="font-semibold text-white/70">Ciudad:</span>{" "}
                {entity.city?.name || "Ciudad no disponible"}
              </div>
              <div>
                <span className="font-semibold text-white/70">Tipo:</span>{" "}
                {entity.type || "Tipo no disponible"}
              </div>
              <div>
                <span className="font-semibold text-white/70">IATA:</span>{" "}
                {entity.iataCode || "IATA no disponible"}
              </div>
              <div>
                <span className="font-semibold text-white/70">OACI:</span>{" "}
                {entity.oaciCode || "OACI no disponible"}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Layout especial para turismo
  if (tipo === "turismo") {
    return (
      <main className="flex min-h-[80vh] flex-col items-center py-8">
        <BackButton tipo={tipo} />
        <div className="mt-4 w-full max-w-2xl overflow-hidden rounded-3xl bg-slate-900/90 p-0 text-white shadow-xl">
          {/* Imagen principal */}
          <div className="flex aspect-[4/3] w-full items-center justify-center bg-black">
            <img
              src={
                entity.images && entity.images.length > 0
                  ? entity.images[0]
                  : "/assets/images/fallback-place.jpg"
              }
              alt={entity.name}
              className="h-full max-h-[360px] w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 p-6">
            <h1 className="text-primary-400 mb-1 text-3xl font-extrabold leading-tight">
              {entity.name}
            </h1>
            {entity.city && (
              <>
                <div className="text-primary-200 mb-1 flex items-center gap-2 text-lg font-medium">
                  <svg
                    className="text-primary-300 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {entity.city.name}
                </div>
                {entity.city.population && (
                  <div className="mb-1 text-base text-white/80">
                    <span className="font-semibold text-white/70">
                      Población:
                    </span>{" "}
                    {entity.city.population.toLocaleString()}
                  </div>
                )}
              </>
            )}
            <p className="mb-3 whitespace-pre-line text-base leading-relaxed text-white/90">
              {entity.description}
            </p>
            {/* Galería si hay más de una imagen */}
            {entity.images && entity.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 pt-2">
                {entity.images.slice(1).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Imagen secundaria ${idx + 1}`}
                    width={120}
                    height={90}
                    className="flex-shrink-0 rounded object-cover shadow"
                  />
                ))}
              </div>
            )}
            {/* Botón Google Maps centrado al final */}
            {entity.latitude && entity.longitude && (
              <div className="mt-6 flex w-full justify-center">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${entity.latitude},${entity.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-gray-800 px-6 py-2 text-center text-base font-medium text-white shadow transition-colors hover:bg-gray-700"
                >
                  Ver en Google Maps
                </a>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  }

  // Layout especial para especies invasoras
  if (tipo === "especies-invasoras") {
    // Badge de riesgo
    const riskColors = {
      1: "bg-yellow-400 text-yellow-900",
      2: "bg-orange-500 text-white",
      3: "bg-red-600 text-white",
    };
    return (
      <main className="flex min-h-[80vh] flex-col items-center py-8">
        <BackButton tipo={tipo} />
        <div className="mt-4 w-full max-w-2xl overflow-hidden rounded-3xl bg-slate-900/90 text-white shadow-xl">
          {/* Imagen principal */}
          <div className="flex aspect-[4/3] w-full items-center justify-center bg-black">
            <img
              src={entity.urlImage || "/assets/images/fallback-species.jpg"}
              alt={entity.name}
              className="h-full max-h-[360px] w-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-3 p-6">
            <h1 className="text-primary-400 mb-1 text-3xl font-extrabold leading-tight">
              {entity.name}
            </h1>
            {entity.scientificName && (
              <div className="text-primary-200 mb-1 text-lg italic">
                {entity.scientificName}
              </div>
            )}
            {entity.commonNames && (
              <div className="mb-2 text-base text-white/80">
                <span className="font-semibold text-white/70">
                  Nombres comunes:
                </span>{" "}
                {entity.commonNames}
              </div>
            )}
            {entity.riskLevel && (
              <span
                className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold ${riskColors[entity.riskLevel] || "bg-gray-500 text-white"}`}
              >
                Nivel de riesgo: {entity.riskLevel}
              </span>
            )}
            {/* Impacto */}
            {entity.impact && (
              <section className="mb-2 mt-4">
                <h2 className="text-primary-300 mb-1 text-xl font-semibold">
                  Impacto
                </h2>
                <p className="whitespace-pre-line text-base text-white/90">
                  {entity.impact}
                </p>
              </section>
            )}
            {/* Manejo */}
            {entity.manage && (
              <section className="mt-2">
                <h2 className="text-primary-300 mb-1 text-xl font-semibold">
                  Manejo
                </h2>
                <p className="whitespace-pre-line text-base text-white/90">
                  {entity.manage}
                </p>
              </section>
            )}
          </div>
        </div>
      </main>
    );
  }

  // Layout especial para mapas
  if (tipo === "mapas") {
    // Extraer dominio fuente
    let sourceDomain = null;
    if (entity.urlSource) {
      try {
        sourceDomain = new URL(entity.urlSource).hostname.replace("www.", "");
      } catch {}
    }
    return (
      <main className="flex min-h-[80vh] flex-col items-center py-8">
        <BackButton tipo={tipo} />
        <div className="mt-4 flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-slate-900/90 text-white shadow-xl md:flex-row">
          {/* Columna de imágenes */}
          <div className="flex max-h-[600px] w-full flex-col items-center justify-center gap-4 overflow-y-auto bg-black p-4 md:max-h-none md:w-1/2">
            {entity.urlImages && entity.urlImages.length > 0 ? (
              entity.urlImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={entity.name + " mapa " + (idx + 1)}
                  className="mx-auto mb-2 max-h-[520px] min-h-[320px] w-auto rounded-xl object-contain shadow-lg"
                  style={{ background: "transparent" }}
                />
              ))
            ) : (
              <div className="flex h-48 w-full items-center justify-center rounded-xl bg-slate-800 text-white/60">
                Sin imagen
              </div>
            )}
          </div>
          {/* Columna de contenido */}
          <div className="flex w-full flex-col justify-center gap-4 p-8 md:w-1/2">
            <h1 className="text-primary-400 mb-2 text-left text-3xl font-extrabold leading-tight md:text-4xl">
              {entity.name}
            </h1>
            <p className="mb-2 whitespace-pre-line text-base leading-relaxed text-white/90">
              {entity.description}
            </p>
          </div>
        </div>
      </main>
    );
  }

  // Layout especial para platos tipicos
  if (tipo === "platos-tipicos") {
    return (
      <main className="flex min-h-[80vh] flex-col items-center py-8">
        <BackButton tipo={tipo} />
        <div className="mt-4 flex w-full max-w-2xl flex-col items-center rounded-3xl bg-slate-900/90 p-8 text-white shadow-xl">
          <div className="flex w-full flex-col items-center">
            <img
              src={entity.imageUrl || "/assets/images/fallback-place.jpg"}
              alt={entity.name}
              width={540}
              height={400}
              className="border-primary-400 mb-6 max-w-full rounded-3xl border-4 object-cover shadow-2xl"
              style={{ maxHeight: 400, objectFit: "cover" }}
            />
            <h1 className="text-primary-400 mb-4 text-center text-4xl font-extrabold">
              {entity.name}
            </h1>
            <p className="mb-6 whitespace-pre-line text-center text-lg leading-relaxed text-white/90">
              {entity.description}
            </p>
            <div className="mb-6 flex w-full flex-col items-center">
              <span className="text-primary-300 font-semibold">
                Ingredientes:
              </span>
              <span className="ml-2 text-center text-white/80">
                {entity.ingredients}
              </span>
            </div>
            {entity.department && (
              <div className="mt-6 w-full rounded-xl bg-slate-800/80 p-4 shadow-inner">
                <h2 className="text-primary-300 mb-1 text-center text-2xl font-bold">
                  Origen: {entity.department.name}
                </h2>
                <p className="mb-2 text-center text-white/70">
                  {entity.department.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  }

  // Layout para Ferias & Fiestas

  if (tipo === "ferias-y-festivales") {
    return (
      <main className="flex min-h-[80vh] flex-col items-center py-8">
        <BackButton tipo={tipo} />
        <div className="mt-4 flex w-full max-w-2xl flex-col items-center rounded-3xl bg-slate-900/90 p-8 text-white shadow-xl">
          <h1 className="text-primary-400 mb-4 text-center text-4xl font-extrabold">
            {entity.name}
          </h1>
          <div className="mb-6 flex w-full flex-col items-center">
            <span className="text-primary-300 font-semibold">Descripción:</span>
            <span className="ml-2 text-center text-white/80">
              {entity.description}
            </span>
            <span className="text-primary-300 font-semibold">Categoría:</span>
            <span className="ml-2 text-center text-white/80">
              {entity.category}
            </span>
          </div>
          {entity.startDate && entity.endDate && (
            <div className="mt-6 w-full rounded-xl bg-slate-800/80 p-4 shadow-inner">
              <h2 className="text-primary-300 mb-1 text-center text-xl font-bold">
                Inicio: {entity.startDate}
              </h2>
              <h2 className="text-primary-300 mb-1 text-center text-xl font-bold">
                Fin: {entity.endDate}
              </h2>
              <p>
                <strong>Municipio:</strong>{" "}
                {entity.municipality || "No especificado"}
              </p>
              <p>
                <strong>Región:</strong> {entity.region || "No especificada"}
              </p>
            </div>
          )}
        </div>
      </main>
    );
  }

  // Layout normal para otros tipos
  return (
    <main className="flex min-h-[80vh] flex-col items-center py-8">
      <BackButton tipo={tipo} />
      <div className="mt-4 w-full max-w-3xl rounded-3xl bg-slate-900/90 p-8 text-white shadow-xl">
        <div className="flex flex-wrap gap-8">
          <div className="flex w-80 flex-none items-start justify-center">
            <img
              src={
                tipo === "mapas"
                  ? entity.urlImages || "/assets/images/fallback-place.jpg"
                  : entity.image ||
                    entity.images ||
                    entity.urlImage ||
                    "/assets/images/fallback-place.jpg"
              }
              alt={entity.name}
              width={320}
              height={320}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
          <div className="min-w-[350px] flex-1">
            <h1 className="mb-2 text-3xl font-bold">
              {entity.name}
              {entity.lastName ? ` ${entity.lastName}` : ""}
            </h1>
            {entity.startPeriodDate && entity.endPeriodDate && (
              <span className="mb-4 inline-block rounded-lg bg-purple-600 px-4 py-1 text-base font-semibold text-white">
                {entity.startPeriodDate} - {entity.endPeriodDate}
              </span>
            )}
            {entity.scientificName && (
              <p className="mb-2 italic text-slate-300">
                {entity.scientificName}
              </p>
            )}
            <p className="mb-6 text-base leading-relaxed">
              {entity.description || entity.impact}
            </p>
            <p className="mb-6 text-base leading-relaxed">
              {entity.description}
            </p>
            {/* Otros campos relevantes */}
            {entity.languages && (
              <div className="mb-4">
                <strong>Lenguas:</strong>{" "}
                {Array.isArray(entity.languages)
                  ? entity.languages.join(", ")
                  : entity.languages}
              </div>
            )}
            {entity.region && (
              <div style={{ marginBottom: "1rem" }}>
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

export const dynamic = "force-dynamic";
