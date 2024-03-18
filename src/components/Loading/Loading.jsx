import React from "react";

import { EosIconsLoading } from "../icons";
import { Skeleton } from "../ui/skeleton";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center rounded px-4 py-2 font-bold text-white">
      <>
        <div className="flex flex-col items-center justify-center gap-4">
          <Skeleton className="relative m-2 h-[250px] w-[250px] rounded-xl bg-slate-300/30 p-1">
            <div className="flex h-full items-center justify-center">
              <EosIconsLoading className="mr-2 h-8 w-8" />
              <p>Loading...</p>
            </div>
          </Skeleton>
        </div>
      </>
    </div>
  );
};
