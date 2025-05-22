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
  minHeight = "min-h-[80vh]",
}) {
  return (
    <main className={`py-8 ${minHeight}`}>
      {pageSizeSelector}
      <PageSection title={title} isLoading={isLoading} gridCols={gridCols}>
        {isLoading && (!children || (Array.isArray(children) && children.length === 0)) ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="rounded-xl bg-slate-950/90 text-white/90 shadow-xl flex flex-col gap-3 p-6 min-h-60 animate-pulse"></div>
            ))}
          </div>
        ) : (
          children
        )}
      </PageSection>
      {pagination}
    </main>
  );
}
