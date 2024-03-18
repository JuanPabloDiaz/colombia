// Header.jsx
import React from "react";
import { Nav } from "@/components/Nav";

export const Header = () => {
  return (
    <div className="mt-2 w-full bg-slate-800/80 py-4 font-semibold">
      <div>
        <Nav ul_className="flex items-center justify-around" />
      </div>
    </div>
  );
};
