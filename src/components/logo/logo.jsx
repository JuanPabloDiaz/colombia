"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";
import Image from "next/image";
import Link from "next/link";

import { Typography } from "@/components/ui/typography";

export function Logo() {
  const { generalData } = useContext(AppContext);
  return (
    <Link href="/" className="flex items-center justify-center md:mb-20">
      <div>
        {generalData.flags && (
          <Image
            src={generalData.flags[0]} // Access the first element of the array
            alt={`${generalData.name} Col Logo`}
            width={100}
            height={100}
          />
        )}
      </div>
      <Typography
        variant="span"
        className="self-center whitespace-nowrap pl-2 text-xl font-semibold"
      >
        {"AMO COLOMBIA"}
      </Typography>
    </Link>
  );
}
