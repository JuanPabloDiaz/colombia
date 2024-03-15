"use client";

import React, { useContext } from "react";
import { AppContext } from "../../context";
import Image from "next/image";

export default function Col() {

	const { generalData } = useContext(AppContext);
	return (
		<>

			<h1>{generalData.name}</h1>
      <h2>
        Capital: <span>{generalData.stateCapital}</span>
      </h2>

      <div className="flex flex-col items-start justify-normal gap-2">
        <p>
          Population: <span>{generalData.population}</span>
        </p>
        <p>
          Surface: <span>{generalData.surface}</span>
        </p>
        <p>
          currency: <span>{generalData.currency}</span>
          <span>{generalData.currencyCode}</span>
          <span>{generalData.currencySymbol}</span>
        </p>
        <p>
          Description: <span>{generalData.description}</span>
        </p>
        <p>
          languages: <span>{generalData.languages}</span>
        </p>
        <div>
          {generalData.languages?.map((language, index) => (
            <p key={index}>{language}</p>
          ))}
        </div>
        <p>
          timeZone: <span>{generalData.timeZone}</span>
        </p>
        <p>
          isoCode: <span>{generalData.isoCode}</span>
        </p>
        <p>
          internetDomain: <span>{generalData.internetDomain}</span>
        </p>
        <p>
          phonePrefix: <span>{generalData.phonePrefix}</span>
        </p>
        <p>
          radioPrefix: <span>{generalData.radioPrefix}</span>
        </p>
        <p>
          aircraftPrefix: <span>{generalData.aircraftPrefix}</span>
        </p>
        <p>
          subRegion: <span>{generalData.subRegion}</span>
        </p>
        <p>
          region: <span>{generalData.region}</span>
        </p>
        <p>borders:</p>
        <div>
          {generalData.borders?.map((countries, index) => (
            <p key={index}>{countries}</p>
          ))}
        </div>
        <div>
          {generalData.flags?.map((flag, index) => (
            <Image key={index} src={flag} alt={generalData.name} width={500}
            height={300} />
          ))}
        </div>
        <div>
          {generalData.borders?.map((countries, index) => (
            <p key={index}>{countries}</p>
          ))}
        </div>
      </div>
		</>
	)
}

