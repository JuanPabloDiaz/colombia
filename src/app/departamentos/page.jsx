"use client";

import React, { useContext, useState, useMemo } from "react";
import { AppContext } from "@/context";
import PageSizeSelector from "@/components/ui/PageSizeSelector";
import Link from "next/link";
import Pagination from "@/components/ui/Pagination";
import EntityPageLayout from "@/components/ui/EntityPageLayout";
import { metadata } from "@/components/metadata";


const pageTitle = metadata.dep.title;
export default function Departamentos() {
  const { allDepartamentData, isLoading } = useContext(AppContext);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = useMemo(() => (allDepartamentData ? [...allDepartamentData].sort((a, b) => a.id - b.id) : []), [allDepartamentData]);
  const totalPages = useMemo(() => Math.ceil(sortedData.length / pageSize) || 1, [sortedData, pageSize]);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);
  React.useEffect(() => { setCurrentPage(1); }, [pageSize, sortedData]);

  // Show loading state only if data hasn't been loaded yet for the first time
  return (
    <>
      <title>{`${pageTitle} • Colombia 360`}</title>
      <EntityPageLayout
        title={pageTitle}
        isLoading={isLoading && (!allDepartamentData || allDepartamentData.length === 0)}
        gridCols="md:grid-cols-2 lg:grid-cols-4"
        pageSizeSelector={<PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />}
        pagination={
          totalPages > 1 && (
            <div className="flex justify-center mt-8 mb-8">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )
        }
      >
        {paginatedData.map((departament) => (
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
      </EntityPageLayout>
    </>
  );
}
