// "use client";
// import React, { useEffect } from "react";

import InteractiveColombiaMap from "@/components/InteractiveMap/InteractiveColombiaMap";
import PageSection from "@/components/PageSection";

const sortedData = [];

export default function Pruebaa() {
  return (
    <PageSection title="Prueba 2">
      <InteractiveColombiaMap departments={sortedData} />
    </PageSection>
  );
}
