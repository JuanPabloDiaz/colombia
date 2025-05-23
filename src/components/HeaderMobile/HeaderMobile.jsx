"use client";
import React, { useState } from "react";

import { Logo } from "@/components/Logo";
import { Nav } from "@/components/Nav";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";

export const HeaderMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed z-50 mb-2 flex w-full items-center justify-between bg-slate-950/95 p-3 shadow-md shadow-gray-700 md:hidden">
      <Logo width={40} height={40} />
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerTrigger>
          <Menu className="h-7 w-7 rounded-full p-1 hover:bg-gray-400/90 hover:text-black active:bg-gray-500" />
        </DrawerTrigger>
        <DrawerContent className="h-full border-none bg-slate-950/95">
          <DrawerHeader className="mb-6">
            <DrawerClose>
              <X className="absolute right-3 top-3 h-6 w-6 rounded-full p-1 hover:bg-gray-600/80" />
            </DrawerClose>
            <DrawerTitle className="mt-2">
              <Logo width={40} height={40} />
            </DrawerTitle>
          </DrawerHeader>
          <Nav
            setOpen={setOpen}
            ul_className="flex flex-col items-center justify-start gap-3 overflow-y-auto pb-20 text-base font-medium"
          />
        </DrawerContent>
      </Drawer>
    </header>
  );
};
