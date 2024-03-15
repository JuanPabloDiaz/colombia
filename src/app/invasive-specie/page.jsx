"use client";

import React, { useContext, isLoading } from "react";
import { AppContext } from "../../context";
import Image from "next/image";
import CardDivider from "../../components/Chakra/Card/CardDivider";
import CardDetail from "../../components/Chakra/Card/CardDetail";

export default function InvasiveSpecie() {
  const { invasiveSpecieData, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h1>Invasive Specie</h1>
      </div>
      <div>
        {invasiveSpecieData.map((specie, index) => (
          <Image
            key={index}
            src={specie.urlImage}
            alt={`Invasive Specie ${index + 1}`}
            width={320}
            height={213}
          />
        ))}
      </div>
      {/* <CardDivider />
      <CardDetail /> */}
    </>
  );
}
