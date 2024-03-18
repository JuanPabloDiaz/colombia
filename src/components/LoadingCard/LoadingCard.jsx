import React from "react";

import { Skeleton } from "../ui/skeleton";

export const LoadingCard = () => {
  return (
    <main className="flex items-center justify-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </main>
  );
};
