"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";
import Image from "next/image";
import Link from "next/link";

import { Typography } from "@/components/ui/typography";
import { LoadingLogo } from "../LoadingLogo";

export function Logo() {
  const { generalData, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <LoadingLogo />;
  }
  return (
    <Link href="/" className="flex items-center justify-center md:mb-20">
      <div>
        {generalData.flags && (
          <Image
            src={generalData.flags[0]}
            alt={`${generalData.name} Col Logo`}
            width={100}
            height={100}
            className="rounded-xl shadow-md shadow-gray-600"
          />
        )}
      </div>
      <Typography
        variant="span"
        className="self-center whitespace-nowrap pl-2 text-xl font-semibold"
      >
        {"AMO COL"}
      </Typography>
    </Link>
  );
}
