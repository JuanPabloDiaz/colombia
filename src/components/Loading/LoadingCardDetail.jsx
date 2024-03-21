import React from "react";

import { Skeleton } from "../ui/skeleton";

export default function LoadingCardDetail() {
  return (
    <main className="items-center justify-center space-y-4 rounded-lg p-2 shadow-sm shadow-white">
      <Skeleton className="h-40 w-40 rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-1 w-[120px]" />
        <Skeleton className="h-8 w-[150px]" />
        <div className="flex justify-around">
          <Skeleton className="h-6 w-[50px]" />
          <Skeleton className="h-6 w-[50px]" />
        </div>
      </div>
    </main>
  );
}
