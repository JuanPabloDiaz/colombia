"use client";

import React, { useContext } from "react";
import { AppContext } from "../../context";

export default function Info() {

	const { endpoints } = useContext(AppContext);
	return (
		<>
			<h1>{endpoints.name}</h1>
      <h2>
        Capital: <span>{endpoints.stateCapital}</span>
      </h2>
		</>
	)
}

