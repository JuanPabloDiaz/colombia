"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";
import Link from "next/link";
import Pagination from "@/components/ui/Pagination"; // Import the Pagination component

export default function Departamentos() {
  const {
    departamentData, // This is the paginated slice
    isLoading,
    departmentCurrentPage,
    departmentTotalPages,
    goToDepartmentPage,
  } = useContext(AppContext);

  // Show loading state only if data hasn't been loaded yet for the first time
  if (isLoading && (!departamentData || departamentData.length === 0)) {
    return (
      <section className="flex items-center justify-center min-h-[60vh]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="rounded-xl bg-slate-950/90 text-white/90 shadow-xl flex flex-col gap-3 p-6 min-h-60 animate-pulse"></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <main className="py-8 min-h-[80vh]">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary-400">Departamentos de Colombia</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl mx-auto">
        {(Array.isArray(departamentData) ? departamentData : [])
          .sort((a, b) => a.id - b.id) // Existing sort maintained
          .map((departament) => (
            <div key={departament.id || departament.name} className="rounded-xl bg-slate-950/90 text-white/90 shadow-xl flex flex-col gap-3 p-6 min-h-60">
              <h2 className="text-2xl font-bold mb-1 text-primary-400">{departament.name}</h2>
              <p className="text-base leading-relaxed mb-2 text-white/80 line-clamp-3">{departament.description}</p>
              <div className="flex flex-wrap gap-4 text-sm mb-4">
                <div><span className="font-semibold text-white/70">Superficie:</span> {departament.surface?.toLocaleString()} km²</div>
                <div><span className="font-semibold text-white/70">Población:</span> {departament.population?.toLocaleString()}</div>
                <div><span className="font-semibold text-white/70">Municipios:</span> {departament.municipalities}</div>
              </div>
              <Link href={`/departamentos/${departament.id}`} passHref legacyBehavior>
                <a className="inline-block mt-auto px-5 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition-colors text-base font-medium text-center">Ver más</a>
              </Link>
            </div>
          ))}
      </div>
      {!isLoading && departmentTotalPages > 1 && (
        <div className="flex justify-center mt-8 mb-8">
          <Pagination
            currentPage={departmentCurrentPage}
            totalPages={departmentTotalPages}
            onPageChange={goToDepartmentPage}
          />
        </div>
      )}
    </main>
  );
}
