import React from "react";

import { Skeleton } from "../ui/skeleton";

export default function LoadingCardInfo() {
  return (
    <main className="flex items-center justify-center space-x-4 p-4">
      <div className="space-y-2">
        <Skeleton className="h-8 w-[100px]" />
        <Skeleton className="h-2 w-[200px]" />
        <Skeleton className="h-8 w-[300px]" />
        <Skeleton className="h-4 w-[260px]" />
        <Skeleton className="h-2 w-[200px]" />
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[260px]" />
      </div>
      <Skeleton className=" h-56 w-56 rounded-xl" />
    </main>
  );
}
