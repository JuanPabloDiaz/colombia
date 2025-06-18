"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HomeIcon, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center px-4 text-center">
      <div className="mb-8 flex flex-col items-center">
        <div className="relative mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-yellow-400">
          <Image
            src="/assets/images/colombia-flag.svg"
            alt="Colombia Flag"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <h1 className="mb-2 text-4xl font-bold text-yellow-400">404</h1>
        <h2 className="mb-6 rounded-lg bg-slate-900/90 p-6 text-white/90 text-2xl font-semibold">La página que buscas no existe</h2>
        
      </div>

        <Link
          href="/"
          className="flex items-center justify-center rounded-lg bg-slate-900/90 text-white/90 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-slate-900/90"
        >
          <HomeIcon className="mr-2 h-4 w-4" />
          Volver al inicio
        </Link>
    </div>
  );
}


