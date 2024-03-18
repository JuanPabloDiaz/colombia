"use client";

import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

const API_COL_BASE_URL = "https://api-colombia.com/api/v1";

export const DataProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  //       Get Information From Colombia API

  // *****************       GENERAL        *****************

  const [generalData, setGeneralData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${API_COL_BASE_URL}/Country/Colombia`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("General Data: ", json);
        setGeneralData(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching General data: ", error);
        setIsLoading(false);
      });
  }, []);

  // *****************       DEPARTAMENT        *****************

  const [departamentData, setDepartamentData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${API_COL_BASE_URL}/Department`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("Departament Data: ", json);
        setDepartamentData(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Departament data: ", error);
        setIsLoading(false);
      });
  }, []);

  // *****************       REGION        *****************

  const [regionData, setRegionData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${API_COL_BASE_URL}/Region`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("Region Data: ", json);
        setRegionData(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Region data: ", error);
        setIsLoading(false);
      });
  }, []);

  // *****************       REGION ID      *****************

  // ADD REGION ID FUNCTION --> findOneRegion

  // TO SELECT ONE REGION

  // fetch(`${API_COL_BASE_URL}/Region/${id}/departments`)

  // *****************       TOURISTIC ATTRACTION        *****************

  const [touristicAttractionData, setTouristicAttractionData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${API_COL_BASE_URL}/TouristicAttraction`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("Touristic Attraction Data: ", json);
        setTouristicAttractionData(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Touristic Attraction data: ", error);
        setIsLoading(false);
      });
  }, []);

  // *****************       PRESIDENT        *****************

  const [presidentData, setPresidentData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${API_COL_BASE_URL}/President`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("President Data: ", json);
        setPresidentData(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching President data: ", error);
        setIsLoading(false);
      });
  }, []);

  // *****************       PRESIDENT ID      *****************

  // ADD PRESIDENT ID FUNCTION --> findOnePresident

  // TO SELECT ONE PRESIDENT

  // fetch(`${API_COL_BASE_URL}/President/${id}`)

  const [presidentId, setPresidentId] = useState([]);

  useEffect(() => {
    const findOnePresident = (id) => {
      setIsLoading(true);

      fetch(`${API_COL_BASE_URL}/President/${id}`)
        .then((response) => response.json())
        .then((json) => {
          // console.log("President ID: ", json);
          setPresidentId(json);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching President ID: ", error);
          setIsLoading(false);
        });
    };
  }, []);

  // *****************       NATURAL AREA        *****************

  const [naturalAreaData, setNaturalAreaData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${API_COL_BASE_URL}/NaturalArea`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("Natural Area Data: ", json);
        setNaturalAreaData(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Natural Area data: ", error);
        setIsLoading(false);
      });
  }, []);

  // *****************       CATEGORY NATURAL AREA        *****************

  const [categoryNaturalAreaData, setCategoryNaturalAreaData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${API_COL_BASE_URL}/CategoryNaturalArea`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("Category Natural Area Data: ", json);
        setCategoryNaturalAreaData(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Category Natural Area data: ", error);
        setIsLoading(false);
      });
  }, []);

  // *****************       MAP       *****************

  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${API_COL_BASE_URL}/Map`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("Map Data: ", json);
        setMapData(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Map data: ", error);
        setIsLoading(false);
      });
  }, []);

  // *****************       MAP ID      *****************

  // ADD MAP ID FUNCTION --> findOneMap

  // TO SELECT ONE MAP

  // fetch(`${API_COL_BASE_URL}/Map/${id}`)

  // *****************       INVASIVE SPECIE        *****************

  const [invasiveSpecieData, setInvasiveSpecieData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${API_COL_BASE_URL}/InvasiveSpecie`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("Invasive Specie Data: ", json);
        setInvasiveSpecieData(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Invasive Specie data: ", error);
        setIsLoading(false);
      });
  }, []);

  // *****************       NATIVE COMMUNITY        *****************

  const [nativeCommunityData, setNativeCommunityData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${API_COL_BASE_URL}/NativeCommunity`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("Native Community Data: ", json);
        setNativeCommunityData(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Native Community data: ", error);
        setIsLoading(false);
      });
  }, []);

  // *****************       AIRPORT        *****************

  const [airportData, setAirportData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${API_COL_BASE_URL}/Airport`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("Airport Data: ", json);
        setAirportData(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Airport data: ", error);
        setIsLoading(false);
      });
  }, []);

  // *****************       CONSTITUTION ARTICLE        *****************

  const [constitutionArticleData, setConstitutionArticleData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${API_COL_BASE_URL}/ConstitutionArticle`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("Constitution Article Data: ", json);
        setConstitutionArticleData(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Constitution Article data: ", error);
        setIsLoading(false);
      });
  }, []);

  // *****************       RADIO        *****************

  const [radioData, setRadioData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${API_COL_BASE_URL}/radio`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("Radio Data: ", json);
        setRadioData(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Radio data: ", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        generalData,
        setGeneralData,
        departamentData,
        setDepartamentData,
        regionData,
        setRegionData,
        touristicAttractionData,
        setTouristicAttractionData,
        presidentData,
        setPresidentData,
        naturalAreaData,
        setNaturalAreaData,
        categoryNaturalAreaData,
        setCategoryNaturalAreaData,
        mapData,
        setMapData,
        invasiveSpecieData,
        setInvasiveSpecieData,
        nativeCommunityData,
        setNativeCommunityData,
        airportData,
        setAirportData,
        constitutionArticleData,
        setConstitutionArticleData,
        radioData,
        setRadioData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
