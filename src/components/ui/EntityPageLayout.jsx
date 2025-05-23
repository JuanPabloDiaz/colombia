"use client";

import React from "react";
import PageSection from "@/components/PageSection";

export default function EntityPageLayout({
  title,
  isLoading = false,
  gridCols = "md:grid-cols-2 lg:grid-cols-4",
  pageSizeSelector = null,
  children,
  pagination = null,
  minHeight = "min-h-[60vh] md:min-h-[80vh]",
}) {
  return (
    <main className={`py-4 md:py-8 ${minHeight}`}>
      <div className="mb-2 md:mb-4">{pageSizeSelector}</div>
      <PageSection title={title} isLoading={isLoading} gridCols={gridCols}>
        {isLoading &&
        (!children || (Array.isArray(children) && children.length === 0)) ? (
          <div className="grid w-full max-w-7xl grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="flex min-h-40 md:min-h-60 animate-pulse flex-col gap-2 md:gap-3 rounded-xl bg-slate-950/90 p-4 md:p-6 text-white/90 shadow-md md:shadow-xl"
              ></div>
            ))}
          </div>
        ) : (
          children
        )}
      </PageSection>
      {pagination && (
        <div className="mb-4 mt-4 flex justify-center md:mb-8 md:mt-8">
          {pagination}
        </div>
      )}
    </main>
  );
}
