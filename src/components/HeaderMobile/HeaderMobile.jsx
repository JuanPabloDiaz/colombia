"use client";
import React, { useState } from "react";

import { Logo } from "@/components/logo";
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
    <header className="mb-2 flex justify-between bg-slate-950/90 p-4 md:hidden">
      <Logo />
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerTrigger>
          <Menu />
        </DrawerTrigger>
        <DrawerContent className="h-full bg-slate-950/90">
          <DrawerHeader className="mb-10 ">
            <DrawerClose>
              <X className="absolute right-3 top-9" />
            </DrawerClose>
            <DrawerTitle>
              <Logo />
            </DrawerTitle>
          </DrawerHeader>
          <Nav
            setOpen={setOpen}
            ul_className="flex flex-col justify-evenly items-center h-full text-xl font-semibold "
          />
        </DrawerContent>
      </Drawer>
    </header>
  );
};
