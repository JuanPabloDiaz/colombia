"use client";

import React from "react";
import { useContext } from "react";
import { AppContext } from "@/context";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import { metadata } from "@/components/metadata";

const pageTitle = metadata.mapTur.title;

const MapaTuristicoClient = () => {
  const { isLoading } = useContext(AppContext);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingSpinner size={56} />
      </div>
    );
  }

  return (
    <EntityPageLayout
      title={pageTitle}
      isLoading={isLoading}
      gridCols="container mx-auto px-4 py-8"
    >
      <div className="flex flex-col gap-2 rounded-xl bg-slate-950/90 p-4 text-white/90 shadow-md md:gap-3 md:p-6 md:shadow-xl">
        <p className="mb-2 text-center text-lg text-gray-200">
          Explora los mejores destinos turísticos de Colombia en este mapa
          interactivo
        </p>
      </div>

      <div className="relative h-[70vh] w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
        <iframe
          src="https://turismo.colombia.jpdiaz.dev/"
          width="100%"
          height="100%"
          className="border-0"
          title="Mapa Turístico de Colombia"
          loading="lazy"
          allowFullScreen
        />
      </div>

      <div className="flex min-h-48 flex-col gap-2 rounded-xl bg-slate-950/90 p-4 text-white/90 shadow-md md:min-h-60 md:gap-3 md:p-6 md:shadow-xl">
        <h2 className="mb-2 text-xl font-semibold">Acerca de este mapa</h2>
        <p className="mb-2 text-gray-200">
          Este mapa interactivo muestra los principales destinos turísticos de
          Colombia, permitiéndote explorar la diversidad cultural, histórica y
          natural del país.
        </p>
        <p className="text-gray-200">
          Puedes hacer clic en los marcadores para obtener más información sobre
          cada destino, incluyendo descripciones, imágenes y consejos para
          visitantes.
        </p>
        <div className="mt-4 flex justify-center">
          <a
            href="https://turismo.colombia.jpdiaz.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/90"
          >
            Ver en pantalla completa
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </EntityPageLayout>
  );
};

export default MapaTuristicoClient;
