"use client";

import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

const API_COL_BASE_URL = "https://api-colombia.com/api/v1";
const ITEMS_PER_PAGE = 12;

export const DataProvider = ({ children }) => {
  const [activeApiCalls, setActiveApiCalls] = useState(0);
  const isLoading = activeApiCalls > 0;

  // *****************       GENERAL        *****************
  const [generalData, setGeneralData] = useState([]);
  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/Country/Colombia`)
      .then((response) => response.json())
      .then((json) => setGeneralData(json))
      .catch((error) => console.error("Error fetching General data: ", error))
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);

  // *****************       DEPARTAMENT        *****************
  const [allDepartamentData, setAllDepartamentData] = useState([]);
  const [departmentCurrentPage, setDepartmentCurrentPage] = useState(1);
  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/Department`)
      .then((response) => response.json())
      .then((json) => setAllDepartamentData(json))
      .catch((error) => console.error("Error fetching Departament data: ", error))
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const departmentTotalPages = Math.ceil(allDepartamentData.length / ITEMS_PER_PAGE);
  const goToDepartmentPage = (page) => {
    if (page >= 1 && page <= departmentTotalPages) {
      setDepartmentCurrentPage(page);
    }
  };
  const departmentStartIndex = (departmentCurrentPage - 1) * ITEMS_PER_PAGE;
  const departmentEndIndex = departmentStartIndex + ITEMS_PER_PAGE;
  const paginatedDepartmentData = allDepartamentData.slice(departmentStartIndex, departmentEndIndex);

  // *****************       REGION        *****************
  const [allRegionData, setAllRegionData] = useState([]);
  const [regionCurrentPage, setRegionCurrentPage] = useState(1);
  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/Region`)
      .then((response) => response.json())
      .then((json) => setAllRegionData(json))
      .catch((error) => console.error("Error fetching Region data: ", error))
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const regionTotalPages = Math.ceil(allRegionData.length / ITEMS_PER_PAGE);
  const goToRegionPage = (page) => {
    if (page >= 1 && page <= regionTotalPages) {
      setRegionCurrentPage(page);
    }
  };
  const regionStartIndex = (regionCurrentPage - 1) * ITEMS_PER_PAGE;
  const regionEndIndex = regionStartIndex + ITEMS_PER_PAGE;
  const paginatedRegionData = allRegionData.slice(regionStartIndex, regionEndIndex);

  // *****************       TOURISTIC ATTRACTION        *****************
  const [allTouristicAttractionData, setAllTouristicAttractionData] = useState([]);
  const [touristicAttractionCurrentPage, setTouristicAttractionCurrentPage] = useState(1);
  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/TouristicAttraction`)
      .then((response) => response.json())
      .then((json) => setAllTouristicAttractionData(json))
      .catch((error) => console.error("Error fetching Touristic Attraction data: ", error))
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const touristicAttractionTotalPages = Math.ceil(allTouristicAttractionData.length / ITEMS_PER_PAGE);
  const goToTouristicAttractionPage = (page) => {
    if (page >= 1 && page <= touristicAttractionTotalPages) {
      setTouristicAttractionCurrentPage(page);
    }
  };
  const touristicAttractionStartIndex = (touristicAttractionCurrentPage - 1) * ITEMS_PER_PAGE;
  const touristicAttractionEndIndex = touristicAttractionStartIndex + ITEMS_PER_PAGE;
  const paginatedTouristicAttractionData = allTouristicAttractionData.slice(touristicAttractionStartIndex, touristicAttractionEndIndex);

  // *****************       PRESIDENT        *****************
  const [allPresidentData, setAllPresidentData] = useState([]);
  const [presidentAdminCurrentPage, setPresidentAdminCurrentPage] = useState(1); // Renamed to avoid conflict with presidentId state
  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/President`)
      .then((response) => response.json())
      .then((json) => setAllPresidentData(json))
      .catch((error) => console.error("Error fetching President data: ", error))
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const presidentAdminTotalPages = Math.ceil(allPresidentData.length / ITEMS_PER_PAGE);
  const goToPresidentAdminPage = (page) => {
    if (page >= 1 && page <= presidentAdminTotalPages) {
      setPresidentAdminCurrentPage(page);
    }
  };
  const presidentAdminStartIndex = (presidentAdminCurrentPage - 1) * ITEMS_PER_PAGE;
  const presidentAdminEndIndex = presidentAdminStartIndex + ITEMS_PER_PAGE;
  const paginatedPresidentData = allPresidentData.slice(presidentAdminStartIndex, presidentAdminEndIndex);


  // *****************       PRESIDENT ID      *****************
  const [presidentId, setPresidentId] = useState([]);
  useEffect(() => {
    // This function is defined but not callable from outside due to empty dependency array.
    // Leaving as is, as per instructions.
    // const findOnePresident = (id) => {
    //   setActiveApiCalls((prev) => prev + 1);
    //   fetch(`${API_COL_BASE_URL}/President/${id}`)
    //     .then((response) => response.json())
    //     .then((json) => setPresidentId(json))
    //     .catch((error) => console.error("Error fetching President ID: ", error))
    //     .finally(() => setActiveApiCalls((prev) => prev - 1));
    // };
  }, []);

  // *****************       NATURAL AREA        *****************
  const [allNaturalAreaData, setAllNaturalAreaData] = useState([]);
  const [naturalAreaCurrentPage, setNaturalAreaCurrentPage] = useState(1);
  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/NaturalArea`)
      .then((response) => response.json())
      .then((json) => setAllNaturalAreaData(json))
      .catch((error) => console.error("Error fetching Natural Area data: ", error))
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const naturalAreaTotalPages = Math.ceil(allNaturalAreaData.length / ITEMS_PER_PAGE);
  const goToNaturalAreaPage = (page) => {
    if (page >= 1 && page <= naturalAreaTotalPages) {
      setNaturalAreaCurrentPage(page);
    }
  };
  const naturalAreaStartIndex = (naturalAreaCurrentPage - 1) * ITEMS_PER_PAGE;
  const naturalAreaEndIndex = naturalAreaStartIndex + ITEMS_PER_PAGE;
  const paginatedNaturalAreaData = allNaturalAreaData.slice(naturalAreaStartIndex, naturalAreaEndIndex);

  // *****************       CATEGORY NATURAL AREA        *****************
  const [allCategoryNaturalAreaData, setAllCategoryNaturalAreaData] = useState([]);
  const [categoryNaturalAreaCurrentPage, setCategoryNaturalAreaCurrentPage] = useState(1);
  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/CategoryNaturalArea`)
      .then((response) => response.json())
      .then((json) => setAllCategoryNaturalAreaData(json))
      .catch((error) => console.error("Error fetching Category Natural Area data: ", error))
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const categoryNaturalAreaTotalPages = Math.ceil(allCategoryNaturalAreaData.length / ITEMS_PER_PAGE);
  const goToCategoryNaturalAreaPage = (page) => {
    if (page >= 1 && page <= categoryNaturalAreaTotalPages) {
      setCategoryNaturalAreaCurrentPage(page);
    }
  };
  const categoryNaturalAreaStartIndex = (categoryNaturalAreaCurrentPage - 1) * ITEMS_PER_PAGE;
  const categoryNaturalAreaEndIndex = categoryNaturalAreaStartIndex + ITEMS_PER_PAGE;
  const paginatedCategoryNaturalAreaData = allCategoryNaturalAreaData.slice(categoryNaturalAreaStartIndex, categoryNaturalAreaEndIndex);

  // *****************       MAP       *****************
  const [mapData, setMapData] = useState([]);
  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/Map`)
      .then((response) => response.json())
      .then((json) => setMapData(json))
      .catch((error) => console.error("Error fetching Map data: ", error))
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);

  // *****************       INVASIVE SPECIE        *****************
  const [allInvasiveSpecieData, setAllInvasiveSpecieData] = useState([]);
  const [invasiveSpecieCurrentPage, setInvasiveSpecieCurrentPage] = useState(1);
  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/InvasiveSpecie`)
      .then((response) => response.json())
      .then((json) => setAllInvasiveSpecieData(json))
      .catch((error) => console.error("Error fetching Invasive Specie data: ", error))
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const invasiveSpecieTotalPages = Math.ceil(allInvasiveSpecieData.length / ITEMS_PER_PAGE);
  const goToInvasiveSpeciePage = (page) => {
    if (page >= 1 && page <= invasiveSpecieTotalPages) {
      setInvasiveSpecieCurrentPage(page);
    }
  };
  const invasiveSpecieStartIndex = (invasiveSpecieCurrentPage - 1) * ITEMS_PER_PAGE;
  const invasiveSpecieEndIndex = invasiveSpecieStartIndex + ITEMS_PER_PAGE;
  const paginatedInvasiveSpecieData = allInvasiveSpecieData.slice(invasiveSpecieStartIndex, invasiveSpecieEndIndex);

  // *****************       NATIVE COMMUNITY        *****************
  const [allNativeCommunityData, setAllNativeCommunityData] = useState([]);
  const [nativeCommunityCurrentPage, setNativeCommunityCurrentPage] = useState(1);
  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/NativeCommunity`)
      .then((response) => response.json())
      .then((json) => setAllNativeCommunityData(json))
      .catch((error) => console.error("Error fetching Native Community data: ", error))
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const nativeCommunityTotalPages = Math.ceil(allNativeCommunityData.length / ITEMS_PER_PAGE);
  const goToNativeCommunityPage = (page) => {
    if (page >= 1 && page <= nativeCommunityTotalPages) {
      setNativeCommunityCurrentPage(page);
    }
  };
  const nativeCommunityStartIndex = (nativeCommunityCurrentPage - 1) * ITEMS_PER_PAGE;
  const nativeCommunityEndIndex = nativeCommunityStartIndex + ITEMS_PER_PAGE;
  const paginatedNativeCommunityData = allNativeCommunityData.slice(nativeCommunityStartIndex, nativeCommunityEndIndex);

  // *****************       AIRPORT        *****************
  const [allAirportData, setAllAirportData] = useState([]);
  const [airportCurrentPage, setAirportCurrentPage] = useState(1);
  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/Airport`)
      .then((response) => response.json())
      .then((json) => setAllAirportData(json))
      .catch((error) => console.error("Error fetching Airport data: ", error))
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const airportTotalPages = Math.ceil(allAirportData.length / ITEMS_PER_PAGE);
  const goToAirportPage = (page) => {
    if (page >= 1 && page <= airportTotalPages) {
      setAirportCurrentPage(page);
    }
  };
  const airportStartIndex = (airportCurrentPage - 1) * ITEMS_PER_PAGE;
  const airportEndIndex = airportStartIndex + ITEMS_PER_PAGE;
  const paginatedAirportData = allAirportData.slice(airportStartIndex, airportEndIndex);

  // *****************       CONSTITUTION ARTICLE        *****************
  const [constitutionArticleData, setConstitutionArticleData] = useState([]);
  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/ConstitutionArticle`)
      .then((response) => response.json())
      .then((json) => setConstitutionArticleData(json))
      .catch((error) => console.error("Error fetching Constitution Article data: ", error))
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);

  // *****************       RADIO        *****************
  const [allRadioData, setAllRadioData] = useState([]);
  const [radioCurrentPage, setRadioCurrentPage] = useState(1);
  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/radio`)
      .then((response) => response.json())
      .then((json) => {
        // console.log("Radio Data: ", json); // Original console.log
        setAllRadioData(json);
      })
      .catch((error) => console.error("Error fetching Radio data: ", error))
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const radioTotalPages = Math.ceil(allRadioData.length / ITEMS_PER_PAGE);
  const goToRadioPage = (page) => {
    if (page >= 1 && page <= radioTotalPages) {
      setRadioCurrentPage(page);
    }
  };
  const radioStartIndex = (radioCurrentPage - 1) * ITEMS_PER_PAGE;
  const radioEndIndex = radioStartIndex + ITEMS_PER_PAGE;
  const paginatedRadioData = allRadioData.slice(radioStartIndex, radioEndIndex);

  // *****************       TYPICAL DISH        *****************
  const [allTypicalDishData, setAllTypicalDishData] = useState([]);
  const [typicalDishCurrentPage, setTypicalDishCurrentPage] = useState(1);
  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/TypicalDish`)
      .then((response) => response.json())
      .then((json) => setAllTypicalDishData(json))
      .catch((error) => console.error("Error fetching Typical Dish data: ", error))
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const typicalDishTotalPages = Math.ceil(allTypicalDishData.length / ITEMS_PER_PAGE);
  const goToTypicalDishPage = (page) => {
    if (page >= 1 && page <= typicalDishTotalPages) {
      setTypicalDishCurrentPage(page);
    }
  };
  const typicalDishStartIndex = (typicalDishCurrentPage - 1) * ITEMS_PER_PAGE;
  const typicalDishEndIndex = typicalDishStartIndex + ITEMS_PER_PAGE;
  const paginatedTypicalDishData = allTypicalDishData.slice(typicalDishStartIndex, typicalDishEndIndex);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        generalData,
        // Departament
        allDepartamentData,
        departamentData: paginatedDepartmentData,
        departmentCurrentPage,
        departmentTotalPages,
        goToDepartmentPage,
        // Region
        allRegionData,
        regionData: paginatedRegionData,
        regionCurrentPage,
        regionTotalPages,
        goToRegionPage,
        // Touristic Attraction
        allTouristicAttractionData,
        touristicAttractionData: paginatedTouristicAttractionData,
        touristicAttractionCurrentPage,
        touristicAttractionTotalPages,
        goToTouristicAttractionPage,
        // President
        allPresidentData,
        presidentData: paginatedPresidentData, // This is for the list of presidents
        presidentAdminCurrentPage, // Renamed to avoid conflict
        presidentAdminTotalPages,  // Renamed to avoid conflict
        goToPresidentAdminPage,    // Renamed to avoid conflict
        presidentId, // This is for fetching a single president by ID
        // Natural Area
        allNaturalAreaData,
        naturalAreaData: paginatedNaturalAreaData,
        naturalAreaCurrentPage,
        naturalAreaTotalPages,
        goToNaturalAreaPage,
        // Category Natural Area
        allCategoryNaturalAreaData,
        categoryNaturalAreaData: paginatedCategoryNaturalAreaData,
        categoryNaturalAreaCurrentPage,
        categoryNaturalAreaTotalPages,
        goToCategoryNaturalAreaPage,
        // Map
        mapData,
        // Invasive Specie
        allInvasiveSpecieData,
        invasiveSpecieData: paginatedInvasiveSpecieData,
        invasiveSpecieCurrentPage,
        invasiveSpecieTotalPages,
        goToInvasiveSpeciePage,
        // Native Community
        allNativeCommunityData,
        nativeCommunityData: paginatedNativeCommunityData,
        nativeCommunityCurrentPage,
        nativeCommunityTotalPages,
        goToNativeCommunityPage,
        // Airport
        allAirportData,
        airportData: paginatedAirportData,
        airportCurrentPage,
        airportTotalPages,
        goToAirportPage,
        // Constitution Article
        constitutionArticleData,
        // Radio
        allRadioData,
        radioData: paginatedRadioData,
        radioCurrentPage,
        radioTotalPages,
        goToRadioPage,
        // Typical Dish
        allTypicalDishData,
        typicalDishData: paginatedTypicalDishData,
        typicalDishCurrentPage,
        typicalDishTotalPages,
        goToTypicalDishPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};