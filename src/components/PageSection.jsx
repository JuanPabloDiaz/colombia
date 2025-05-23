import React from "react";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";

export default function PageSection({
  title,
  isLoading,
  gridCols = "md:grid-cols-2 lg:grid-cols-4",
  children,
}) {
  return (
    <section className="mb-6 md:mb-8">
      <h2 className="text-primary-400 mb-3 md:mb-4 text-center text-xl md:text-3xl font-bold rounded-lg bg-primary w-fit mx-auto p-2 shadow-sm shadow-primary-600 ">
        {title}
      </h2>
      {isLoading ? (
        <div className="flex min-h-[20vh] md:min-h-[30vh] items-center justify-center">
          <LoadingSpinner size={40} className="md:w-[56px] md:h-[56px]" />
        </div>
      ) : (
        <div className={`grid grid-cols-1 gap-3 md:gap-4 ${gridCols}`}>{children}</div>
      )}
    </section>
  );
}
