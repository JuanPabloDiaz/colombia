"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context";
import Image from "next/image";
import CardDivider from "@/components/Chakra/Card/CardDivider";
import CardDetail from "@/components/Chakra/Card/CardDetail";

import { metadata } from "@/components/metadata";

export default function Prueba() {
  const pageTitle = metadata.test.title;
  return (
    <>
      <title>{`${pageTitle} • AmoCol`}</title>
      <h1>{pageTitle}</h1>
      <div>
        <Image
          src="https://flagcdn.com/w320/us.png"
          alt="US Flag"
          width={320}
          height={213}
        />
      </div>
      <CardDivider />
      <CardDetail />
    </>
  );
}
