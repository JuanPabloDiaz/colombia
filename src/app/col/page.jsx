"use client";

import React, { useContext } from "react";
import { AppContext } from "../../context";
import Image from "next/image";

export default function Col() {

	const { endpoints } = useContext(AppContext);
	return (
		<>

			<h1>{endpoints.name}</h1>
      <h2>
        Capital: <span>{endpoints.stateCapital}</span>
      </h2>

      <div className="flex flex-col items-start justify-normal gap-2">
        <p>
          Population: <span>{endpoints.population}</span>
        </p>
        <p>
          Surface: <span>{endpoints.surface}</span>
        </p>
        <p>
          currency: <span>{endpoints.currency}</span>
          <span>{endpoints.currencyCode}</span>
          <span>{endpoints.currencySymbol}</span>
        </p>
        <p>
          Description: <span>{endpoints.description}</span>
        </p>
        <p>
          languages: <span>{endpoints.languages}</span>
        </p>
        <div>
          {endpoints.languages?.map((language, index) => (
            <p key={index}>{language}</p>
          ))}
        </div>
        <p>
          timeZone: <span>{endpoints.timeZone}</span>
        </p>
        <p>
          isoCode: <span>{endpoints.isoCode}</span>
        </p>
        <p>
          internetDomain: <span>{endpoints.internetDomain}</span>
        </p>
        <p>
          phonePrefix: <span>{endpoints.phonePrefix}</span>
        </p>
        <p>
          radioPrefix: <span>{endpoints.radioPrefix}</span>
        </p>
        <p>
          aircraftPrefix: <span>{endpoints.aircraftPrefix}</span>
        </p>
        <p>
          subRegion: <span>{endpoints.subRegion}</span>
        </p>
        <p>
          region: <span>{endpoints.region}</span>
        </p>
        <p>borders:</p>
        <div>
          {endpoints.borders?.map((countries, index) => (
            <p key={index}>{countries}</p>
          ))}
        </div>
        <div>
          {endpoints.flags?.map((flag, index) => (
            <Image key={index} src={flag} alt={endpoints.name} width={500}
            height={300} />
          ))}
        </div>
        <div>
          {endpoints.borders?.map((countries, index) => (
            <p key={index}>{countries}</p>
          ))}
        </div>
      </div>
		</>
	)
}

