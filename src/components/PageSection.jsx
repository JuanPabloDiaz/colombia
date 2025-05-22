import React from "react";
import LoadingCard from "@/components/Loading/LoadingCard";

export default function PageSection({ title, isLoading, gridCols = "md:grid-cols-2 lg:grid-cols-4", children }) {
  return (
    <>
      {title && (
        <h1 className="mx-auto mb-8 w-fit rounded-xl bg-slate-950/90 p-4 text-4xl font-bold text-white/60">
          {title}
        </h1>
      )}
      <section className="flex items-center justify-center">
        {isLoading ? (
          <LoadingCard />
        ) : (
          <div className={`grid grid-cols-1 gap-4 ${gridCols}`}>
            {children}
          </div>
        )}
      </section>
    </>
  );
}
