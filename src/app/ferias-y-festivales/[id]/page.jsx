"use client";

import React, { useEffect, useContext } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import { AppContext } from "@/context";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import PageSizeSelector from "@/components/ui/PageSizeSelector"; 
import PageSection from "@/components/PageSection";
import Pagination from "@/components/ui/Pagination";

export default function FeriaYFestivalDetailPage() {
  const { id } = useParams();
  const {
    traditionalFairAndFestivalDetail,
    fetchTraditionalFairAndFestivalById,
    isLoading,
    fetchTraditionalFairAndFestivalCityDetails,
    traditionalFairAndFestivalCityInfo,
  } = useContext(AppContext);

  useEffect(() => {
    if (id) {
      fetchTraditionalFairAndFestivalById(id);
      fetchTraditionalFairAndFestivalCityDetails(id);
    }
  }, [id, fetchTraditionalFairAndFestivalById, fetchTraditionalFairAndFestivalCityDetails]);

  if (isLoading || (!traditionalFairAndFestivalDetail && !traditionalFairAndFestivalCityInfo)) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <LoadingSpinner />
        <p className="ml-2 text-gray-700">Cargando detalles...</p>
      </div>
    );
  }

  if (!isLoading && !traditionalFairAndFestivalDetail && !traditionalFairAndFestivalCityInfo) {
    return (
      <>
        <Head>
          <title>Error al cargar detalles • Colombia 360</title>
        </Head>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="text-center p-10 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-red-600 mb-4">No se pudo cargar la información</h1>
            <p className="text-gray-700 mb-4">
              Ocurrió un error al intentar obtener los detalles de la feria o festival con el ID: {id}.
              <br />Es posible que el recurso no exista o que haya un problema de conexión con la API.
            </p>
            <button onClick={() => { window.location.reload(); }} className="mt-2 mr-4 px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              Reintentar
            </button>
            <a href="/ferias-y-festivales" className="mt-2 inline-block px-6 py-2 text-sm font-medium text-white bg-gray-500 rounded-lg hover:bg-gray-700">
              Volver a la lista
            </a>
          </div>
        </div>
      </>
    );
  }
  
  // Helper to format dates, you might want to use a library like date-fns for more complex formatting
  const formatDate = (dateString) => {
    if (!dateString) return "No especificada";
    try {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    } catch (e) {
      return dateString; // Return original if formatting fails
    }
  };

  return (
    <>
      <Head>
        <title>{`${traditionalFairAndFestivalDetail?.name || "Detalle de Feria/Festival"} • Colombia 360`}</title>
      </Head>

      <div className="container mx-auto px-4 py-8 pt-24 min-h-screen bg-gray-50"> {/* Added pt-24 for navbar offset */}
        {traditionalFairAndFestivalDetail && (
          <article className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="relative w-full h-64 md:h-96"> {/* Image container */}
              <Image
                src={traditionalFairAndFestivalDetail.imageUrl || traditionalFairAndFestivalDetail.image}
                alt={`Imagen de ${traditionalFairAndFestivalDetail.name}`}
                layout="fill"
                objectFit="cover" // Changed to cover for better image display
                className="transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>

            <div className="p-6 md:p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {traditionalFairAndFestivalDetail.name}
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6 text-sm text-gray-700">
                <p><strong>Inicio:</strong> {formatDate(traditionalFairAndFestivalDetail.startDate)}</p>
                <p><strong>Fin:</strong> {formatDate(traditionalFairAndFestivalDetail.endDate)}</p>
                <p><strong>Municipio:</strong> {traditionalFairAndFestivalDetail.municipality || "No especificado"}</p>
                <p><strong>Región:</strong> {traditionalFairAndFestivalDetail.region || "No especificada"}</p>
                {traditionalFairAndFestivalDetail.category && (
                  <p className="md:col-span-2"><strong>Categoría:</strong> {traditionalFairAndFestivalDetail.category}</p>
                )}
              </div>

              <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Descripción</h2>
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {traditionalFairAndFestivalDetail.description || "Descripción no disponible."}
              </p>

              {traditionalFairAndFestivalCityInfo && Object.keys(traditionalFairAndFestivalCityInfo).length > 0 && (
                 <div className="mt-8 pt-6 border-t border-gray-200">
                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Información de la Ciudad Anfitriona</h2>
                  {/* Assuming traditionalFairAndFestivalCityInfo is an object with city details */}
                  {/* Adjust the fields based on the actual structure of traditionalFairAndFestivalCityInfo */}
                  <p><strong>Nombre:</strong> {traditionalFairAndFestivalCityInfo.name || "No disponible"}</p>
                  <p><strong>Departamento:</strong> {traditionalFairAndFestivalCityInfo.department?.name || "No disponible"}</p>
                  {/* Add more city details here as they become known */}
                  {traditionalFairAndFestivalCityInfo.description && (
                    <p className="mt-2 text-gray-600 whitespace-pre-line">
                      {traditionalFairAndFestivalCityInfo.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          </article>
        )}
      </div>
    </>
  );
}
