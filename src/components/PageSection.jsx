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
      <h2 className="text-primary-400 shadow-primary-600 mx-auto mb-3 w-fit rounded-lg bg-primary p-2 text-center text-xl font-bold shadow-sm md:mb-4 md:text-3xl ">
        {title}
      </h2>
      {isLoading ? (
        <div className="flex min-h-[20vh] items-center justify-center md:min-h-[30vh]">
          <LoadingSpinner size={40} className="md:h-[56px] md:w-[56px]" />
        </div>
      ) : (
        <div className={`grid grid-cols-1 gap-3 md:gap-4 ${gridCols}`}>
          {children}
        </div>
      )}
    </section>
  );
}
