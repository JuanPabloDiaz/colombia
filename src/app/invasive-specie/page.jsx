"use client";

import React, { useContext, isLoading } from "react";
import { AppContext } from "../../context";
import Image from "next/image";
import CardDivider from "../../components/Chakra/Card/CardDivider";
import CardDetail from "../../components/Chakra/Card/CardDetail";

export default function InvasiveSpecie() {
  return (
    <>
      <div>
        <h1>Invasive Specie</h1>
        <Image
          src="https://flagcdn.com/w320/us.png"
          alt="US Flag"
          width={320}
          height={213}
        />
      </div>
      {/* <CardDivider />
      <CardDetail /> */}
    </>
  );
}
