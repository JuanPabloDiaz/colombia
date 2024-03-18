"use client";

import { Nav } from "@/components/Nav";
import { Logusss } from "@/components/Logusss";

export const Sidebar = () => {
  return (
    <aside className="fixed hidden min-h-screen w-[300px] min-w-[300px] flex-col gap-4 bg-black/80 p-4 md:block">
      <div>
        <Logusss />
      </div>
      <div className="grow">
        <Nav ul_className="flex flex-col items-baseline gap-8" />
      </div>
    </aside>
  );
};
