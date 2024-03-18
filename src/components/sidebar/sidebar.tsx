"use client";

import { Nav } from "@/components/Nav";
import { Logo } from "@/components/logo";

export default function Sidebar() {
  return (
    // <div className="fixed flex min-h-screen w-[300px] min-w-[300px] flex-col gap-4 bg-black/80 p-4">
    <div
      className="fixed flex w-[300px] min-w-[300px] flex-col gap-4 bg-black/80 p-4"
      style={{ minHeight: "calc(100vh - 9vh)" }}
    >
      <div>
        <Logo />
      </div>
      <div className="grow">
        <Nav ul_className="flex flex-col items-baseline gap-8" />
      </div>
    </div>
  );
}
