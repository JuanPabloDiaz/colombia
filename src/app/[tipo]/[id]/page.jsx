"use client";
import React, { useContext } from "react";
import { AppContext } from "@/context";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

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

function formatMandatoDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const opts = { day: 'numeric', month: 'short', year: 'numeric' };
  // Intl.DateTimeFormat devuelve "feb." o "jul.", quitamos el punto y ponemos mayúscula inicial
  let formatted = new Intl.DateTimeFormat('es-CO', opts).format(date);
  formatted = formatted.replace(/\b(\w{3})\./, (m, p1) => p1.charAt(0).toUpperCase() + p1.slice(1));
  // Si Intl pone el mes en minúscula y sin punto, igual capitalizamos
  formatted = formatted.replace(/ (\w{3}) /, (m, p1) => ' ' + p1.charAt(0).toUpperCase() + p1.slice(1) + ' ');
  return formatted.replace('.', '');
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
    const found = list.find(item => String(item.id) === String(id));
    if (found) {
      setLocalEntity(found);
    } else if (!triedFetch) {
      fetchTraditionalFairAndFestivalById(id);
      setTriedFetch(true);
    }
  }, [tipo, id, traditionalFairAndFestivalData, fetchTraditionalFairAndFestivalById, triedFetch]);

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

  // Layout especial para presidentes
  if (tipo === "presidentes") {
    return (
      <main className="min-h-[80vh] flex flex-col items-center py-8">
        <BackButton tipo={tipo} />
        <div className="w-full max-w-3xl bg-slate-900/90 rounded-3xl shadow-xl p-8 text-white mt-4">
          <div className="flex flex-wrap gap-8">
            <div className="flex-none w-72 flex items-start justify-center">
              <img
                src={entity.image || '/assets/images/fallback-person.jpg'}
                alt={entity.name + (entity.lastName ? ' ' + entity.lastName : '')}
                width={288}
                height={320}
                className="rounded-xl object-cover shadow-lg"
              />
            </div>
            <div className="flex-1 min-w-[250px]">
              <h1 className="text-3xl font-bold mb-2 text-primary-400">
                {entity.name} {entity.lastName}
              </h1>
              {(entity.startPeriodDate || entity.endPeriodDate) && (
                <div className="mb-2 text-white/80 text-base">
                  <span className="font-semibold text-white/70">Mandato:</span>{' '}
                  {entity.startPeriodDate && (
                    <span>{formatMandatoDate(entity.startPeriodDate)} </span>
                  )}
                  {entity.endPeriodDate && (
                    <span>- {formatMandatoDate(entity.endPeriodDate)}</span>
                  )}
                </div>
              )}
              {entity.politicalParty && (
                <div className="mb-2 text-white/80 text-base">
                  <span className="font-semibold text-white/70">Partido político:</span> {entity.politicalParty}
                </div>
              )}
              {entity.city && (
                <div className="mb-2 text-white/80 text-base">
                  <span className="font-semibold text-white/70">Ciudad:</span> {entity.city.name}
                </div>
              )}
              <p className="text-base leading-relaxed mb-2 text-white/90 whitespace-pre-line">
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
      <main className="min-h-[80vh] flex flex-col items-center py-8">
        <BackButton tipo={tipo} />
        <div className="w-full max-w-2xl bg-slate-900/90 rounded-3xl shadow-xl p-0 text-white mt-4 overflow-hidden">
          <div className="p-6 flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold mb-1 text-primary-400 leading-tight">{entity.name}</h1>
            {entity.city && (
              <>
                <div className="mb-1 text-lg text-primary-200 font-medium flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {entity.city.name}
                </div>
                {entity.city.population && (
                  <div className="mb-1 text-base text-white/80">
                    <span className="font-semibold text-white/70">Población:</span> {entity.city.population.toLocaleString()}
                  </div>
                )}
              </>
            )}
            <p className="text-base leading-relaxed mb-3 text-white/90 whitespace-pre-line">
              {entity.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm mb-6">
              <div><span className="font-semibold text-white/70">Ciudad:</span> {entity.city?.name || "Ciudad no disponible"}</div>
              <div><span className="font-semibold text-white/70">Tipo:</span> {entity.type || "Tipo no disponible"}</div>
              <div><span className="font-semibold text-white/70">IATA:</span> {entity.iataCode || "IATA no disponible"}</div>
              <div><span className="font-semibold text-white/70">OACI:</span> {entity.oaciCode || "OACI no disponible"}</div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Layout especial para turismo
  if (tipo === "turismo") {
    return (
      <main className="min-h-[80vh] flex flex-col items-center py-8">
        <BackButton tipo={tipo} />
        <div className="w-full max-w-2xl bg-slate-900/90 rounded-3xl shadow-xl p-0 text-white mt-4 overflow-hidden">
          {/* Imagen principal */}
          <div className="w-full aspect-[4/3] bg-black flex items-center justify-center">
            <img
              src={entity.images && entity.images.length > 0 ? entity.images[0] : '/assets/images/fallback-place.jpg'}
              alt={entity.name}
              className="object-cover w-full h-full max-h-[360px]"
            />
          </div>
          <div className="p-6 flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold mb-1 text-primary-400 leading-tight">{entity.name}</h1>
            {entity.city && (
              <>
                <div className="mb-1 text-lg text-primary-200 font-medium flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {entity.city.name}
                </div>
                {entity.city.population && (
                  <div className="mb-1 text-base text-white/80">
                    <span className="font-semibold text-white/70">Población:</span> {entity.city.population.toLocaleString()}
                  </div>
                )}
              </>
            )}
            <p className="text-base leading-relaxed mb-3 text-white/90 whitespace-pre-line">
              {entity.description}
            </p>
            {/* Galería si hay más de una imagen */}
            {entity.images && entity.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 pt-2">
                {entity.images.slice(1).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Imagen secundaria ${idx+1}`}
                    width={120}
                    height={90}
                    className="rounded shadow object-cover flex-shrink-0"
                  />
                ))}
              </div>
            )}
            {/* Botón Google Maps centrado al final */}
            {(entity.latitude && entity.longitude) && (
              <div className="w-full flex justify-center mt-6">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${entity.latitude},${entity.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition-colors text-base font-medium text-center"
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
      3: "bg-red-600 text-white"
    };
    return (
      <main className="min-h-[80vh] flex flex-col items-center py-8">
        <BackButton tipo={tipo} />
        <div className="w-full max-w-2xl bg-slate-900/90 rounded-3xl shadow-xl text-white mt-4 overflow-hidden">
          {/* Imagen principal */}
          <div className="w-full aspect-[4/3] bg-black flex items-center justify-center">
            <img
              src={entity.urlImage || '/assets/images/fallback-species.jpg'}
              alt={entity.name}
              className="object-contain w-full h-full max-h-[360px]"
            />
          </div>
          <div className="p-6 flex flex-col gap-3">
            <h1 className="text-3xl font-extrabold text-primary-400 leading-tight mb-1">{entity.name}</h1>
            {entity.scientificName && (
              <div className="italic text-lg text-primary-200 mb-1">{entity.scientificName}</div>
            )}
            {entity.commonNames && (
              <div className="text-base text-white/80 mb-2">
                <span className="font-semibold text-white/70">Nombres comunes:</span> {entity.commonNames}
              </div>
            )}
            {entity.riskLevel && (
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${riskColors[entity.riskLevel] || 'bg-gray-500 text-white'}`}>
                Nivel de riesgo: {entity.riskLevel}
              </span>
            )}
            {/* Impacto */}
            {entity.impact && (
              <section className="mt-4 mb-2">
                <h2 className="text-xl font-semibold text-primary-300 mb-1">Impacto</h2>
                <p className="text-base text-white/90 whitespace-pre-line">{entity.impact}</p>
              </section>
            )}
            {/* Manejo */}
            {entity.manage && (
              <section className="mt-2">
                <h2 className="text-xl font-semibold text-primary-300 mb-1">Manejo</h2>
                <p className="text-base text-white/90 whitespace-pre-line">{entity.manage}</p>
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
        sourceDomain = new URL(entity.urlSource).hostname.replace('www.', '');
      } catch {}
    }
    return (
      <main className="min-h-[80vh] flex flex-col items-center py-8">
        <BackButton tipo={tipo} />
        <div className="w-full max-w-5xl bg-slate-900/90 rounded-3xl shadow-xl text-white mt-4 overflow-hidden flex flex-col md:flex-row">
          {/* Columna de imágenes */}
          <div className="md:w-1/2 w-full bg-black flex flex-col items-center justify-center p-4 gap-4 overflow-y-auto max-h-[600px] md:max-h-none">
            {entity.urlImages && entity.urlImages.length > 0 ? (
              entity.urlImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={entity.name + ' mapa ' + (idx+1)}
                  className="rounded-xl object-contain shadow-lg w-auto max-h-[520px] min-h-[320px] mx-auto mb-2"
                  style={{ background: 'transparent' }}
                />
              ))
            ) : (
              <div className="w-full h-48 flex items-center justify-center bg-slate-800 rounded-xl text-white/60">Sin imagen</div>
            )}
          </div>
          {/* Columna de contenido */}
          <div className="md:w-1/2 w-full flex flex-col justify-center p-8 gap-4">
            <h1 className="text-3xl font-extrabold text-primary-400 leading-tight mb-2 text-left md:text-4xl">{entity.name}</h1>
            <p className="text-base leading-relaxed text-white/90 whitespace-pre-line mb-2">{entity.description}</p>

          </div>
        </div>
      </main>
    );
  }

  // Layout especial para platos tipicos
  if (tipo === "platos-tipicos") {
    return (
      <main className="min-h-[80vh] flex flex-col items-center py-8">
        <BackButton tipo={tipo} />
        <div className="w-full max-w-2xl bg-slate-900/90 rounded-3xl shadow-xl p-8 text-white mt-4 flex flex-col items-center">
          <div className="w-full flex flex-col items-center">
            <img
              src={entity.imageUrl || '/assets/images/fallback-place.jpg'}
              alt={entity.name}
              width={540}
              height={400}
              className="rounded-3xl object-cover shadow-2xl border-4 border-primary-400 mb-6 max-w-full"
              style={{ maxHeight: 400, objectFit: 'cover' }}
            />
            <h1 className="text-4xl font-extrabold mb-4 text-primary-400 text-center">{entity.name}</h1>
            <p className="text-lg leading-relaxed mb-6 text-white/90 whitespace-pre-line text-center">{entity.description}</p>
            <div className="mb-6 w-full flex flex-col items-center">
              <span className="font-semibold text-primary-300">Ingredientes:</span>
              <span className="ml-2 text-white/80 text-center">{entity.ingredients}</span>
            </div>
            {entity.department && (
              <div className="mt-6 p-4 bg-slate-800/80 rounded-xl shadow-inner w-full">
                <h2 className="text-2xl font-bold text-primary-300 mb-1 text-center">Origen: {entity.department.name}</h2>
                <p className="text-white/70 mb-2 text-center">{entity.department.description}</p>
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
      <main className="min-h-[80vh] flex flex-col items-center py-8">
      <BackButton tipo={tipo} />
      <div className="w-full max-w-2xl bg-slate-900/90 rounded-3xl shadow-xl p-8 text-white mt-4 flex flex-col items-center">
       
          <h1 className="text-4xl font-extrabold mb-4 text-primary-400 text-center">{entity.name}</h1>
          <div className="mb-6 w-full flex flex-col items-center">
            <span className="font-semibold text-primary-300">Descripción:</span>
            <span className="ml-2 text-white/80 text-center">{entity.description}</span>
            <span className="font-semibold text-primary-300">Categoría:</span>
            <span className="ml-2 text-white/80 text-center">{entity.category}</span>
          </div>
          {entity.startDate && entity.endDate && (
            <div className="mt-6 p-4 bg-slate-800/80 rounded-xl shadow-inner w-full">
              <h2 className="text-xl font-bold text-primary-300 mb-1 text-center">Inicio: {entity.startDate}</h2>
              <h2 className="text-xl font-bold text-primary-300 mb-1 text-center">Fin: {entity.endDate}</h2>
              <p><strong>Municipio:</strong> {entity.municipality || "No especificado"}</p>
              <p><strong>Región:</strong> {entity.region || "No especificada"}</p></div>
          )}
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
