import React from "react";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";

export default function PageSection({ title, isLoading, gridCols = "md:grid-cols-2 lg:grid-cols-4", children }) {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-4 text-primary-400 text-center">{title}</h2>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-[30vh]">
          <LoadingSpinner size={56} />
        </div>
      ) : (
        <div className={`grid grid-cols-1 gap-4 ${gridCols}`}>{children}</div>
      )}
    </section>
  );
}
