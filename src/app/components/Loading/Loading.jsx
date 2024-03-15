import React from "react";

import { EosIconsLoading } from "../icons";
import { Skeleton } from "../ui/skeleton";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center text-white font-bold py-2 px-4 rounded">
      <>
        <div className="flex flex-col items-center justify-center gap-4">
          <Skeleton className="relative m-2 h-[250px] w-[250px] rounded-xl bg-slate-300/30 p-1">
            <div className="flex justify-center items-center h-full">
              <EosIconsLoading className="mr-2 h-8 w-8" />
              <p>Loading Graph...</p>
            </div>
          </Skeleton>
        </div>
      </>
    </div>
  );
};
