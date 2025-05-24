"use client";

import { Nav } from "@/components/Nav";
import { Logo } from "@/components/Logo";

export const Sidebar = ({ setOpen }) => {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[280px] min-w-[280px] flex-col gap-4 bg-black/90 p-4 shadow-lg shadow-black/30 md:flex md:w-[300px] md:min-w-[300px]">
      <div className="mb-4 flex justify-center">
        <Logo width={70} height={70} />
      </div>
      <div className="flex-1 overflow-y-auto pb-4 pr-1 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <Nav
          ul_className="flex flex-col items-baseline gap-3"
          setOpen={setOpen}
        />
      </div>
    </aside>
  );
};
