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
    <header className="fixed z-50 mb-2 flex w-full justify-between bg-slate-950/90 p-4 shadow-sm shadow-gray-600 md:hidden">
      <Logo width={50} height={50} />
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerTrigger>
          <Menu className="rounded-full hover:bg-gray-400/90 hover:text-black" />
        </DrawerTrigger>
        <DrawerContent className="h-full border-none bg-slate-950/80">
          <DrawerHeader className="mb-10">
            <DrawerClose>
              <X className="absolute right-3 top-9" />
            </DrawerClose>
            <DrawerTitle>
              <Logo width={50} height={50} />
            </DrawerTitle>
          </DrawerHeader>
          <Nav
            setOpen={setOpen}
            ul_className="flex flex-col justify-around items-center h-full text-xl font-semibold"
          />
        </DrawerContent>
      </Drawer>
    </header>
  );
};
