import React from "react";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";

export default function PageSection({
  title,
  isLoading,
  gridCols = "md:grid-cols-2 lg:grid-cols-4",
  children,
}) {
  return (
    <section className="mb-8">
      <h2 className="text-primary-400 mb-4 text-center text-3xl font-bold rounded-lg bg-primary w-fit mx-auto p-2 shadow-sm shadow-primary-600 ">
        {title}
      </h2>
      {isLoading ? (
        <div className="flex min-h-[30vh] items-center justify-center">
          <LoadingSpinner size={56} />
        </div>
      ) : (
        <div className={`grid grid-cols-1 gap-4 ${gridCols}`}>{children}</div>
      )}
    </section>
  );
}
