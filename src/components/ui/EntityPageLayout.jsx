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
        {isLoading &&
        (!children || (Array.isArray(children) && children.length === 0)) ? (
          <div className="grid w-full max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="flex min-h-60 animate-pulse flex-col gap-3 rounded-xl bg-slate-950/90 p-6 text-white/90 shadow-xl"
              ></div>
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
