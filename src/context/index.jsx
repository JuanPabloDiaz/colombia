"use client";

import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

const API_COL_BASE_URL = "https://api-colombia.com/api/v1";
const ITEMS_PER_PAGE = 12;
const CONSTITUTION_ITEMS_PER_PAGE = 10;

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
      .catch((error) =>
        console.error("Error fetching Departament data: ", error),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const departmentTotalPages = Math.ceil(
    allDepartamentData.length / ITEMS_PER_PAGE,
  );
  const goToDepartmentPage = (page) => {
    if (page >= 1 && page <= departmentTotalPages) {
      setDepartmentCurrentPage(page);
    }
  };
  const departmentStartIndex = (departmentCurrentPage - 1) * ITEMS_PER_PAGE;
  const departmentEndIndex = departmentStartIndex + ITEMS_PER_PAGE;
  const paginatedDepartmentData = allDepartamentData.slice(
    departmentStartIndex,
    departmentEndIndex,
  );

  // *****************       REGION        *****************
  const [allRegionData, setAllRegionData] = useState([]);
  const [currentRegionDetail, setCurrentRegionDetail] = useState(null);
  const [currentRegionDepartments, setCurrentRegionDepartments] = useState([]);
  const [regionCurrentPage, setRegionCurrentPage] = useState(1);

  const fetchRegions = () => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/Region`)
      .then((response) => response.json())
      .then((json) => setAllRegionData(json))
      .catch((error) => console.error("Error fetching Regions: ", error))
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  };

  // *****************       HOLIDAYS        *****************
  const [holidaysByYearData, setHolidaysByYearData] = useState([]);
  const [holidaysByYearMonthData, setHolidaysByYearMonthData] = useState([]);

  const fetchHolidaysByYear = (year) => {
    if (!year) {
      setHolidaysByYearData([]);
      return;
    }
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/Holiday/year/${year}`)
      .then((response) => response.json())
      .then((json) => {
        setHolidaysByYearData(json);
        setHolidaysByYearMonthData([]); // Clear more specific data
      })
      .catch((error) => {
        console.error(`Error fetching Holidays for year ${year}: `, error);
        setHolidaysByYearData([]); // Set to empty on error
      })
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  };

  const fetchHolidaysByYearMonth = (year, month) => {
    if (!year || !month) {
      setHolidaysByYearMonthData([]);
      return;
    }
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/Holiday/year/${year}/month/${month}`)
      .then((response) => response.json())
      .then((json) => {
        setHolidaysByYearMonthData(json);
        setHolidaysByYearData([]); // Clear less specific data
      })
      .catch((error) => {
        console.error(
          `Error fetching Holidays for year ${year}, month ${month}: `,
          error,
        );
        setHolidaysByYearMonthData([]); // Set to empty on error
      })
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  };

  const fetchRegionById = (id) => {
    setCurrentRegionDetail(null); // Reset before fetching
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/Region/${id}`)
      .then((response) => response.json())
      .then((json) => setCurrentRegionDetail(json))
      .catch((error) =>
        console.error(`Error fetching Region by ID (${id}): `, error),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  };

  const fetchRegionDepartments = (id) => {
    setCurrentRegionDepartments([]); // Reset before fetching
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/Region/${id}/departments`)
      .then((response) => response.json())
      .then((json) => setCurrentRegionDepartments(json))
      .catch((error) =>
        console.error(`Error fetching Region Departments (${id}): `, error),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  };

  useEffect(() => {
    fetchRegions();
  }, []);

  const regionTotalPages = Math.ceil(allRegionData.length / ITEMS_PER_PAGE);
  const goToRegionPage = (page) => {
    if (page >= 1 && page <= regionTotalPages) {
      setRegionCurrentPage(page);
    }
  };
  const regionStartIndex = (regionCurrentPage - 1) * ITEMS_PER_PAGE;
  const regionEndIndex = regionStartIndex + ITEMS_PER_PAGE;
  const paginatedRegionData = allRegionData.slice(
    regionStartIndex,
    regionEndIndex,
  );

  // *****************       CITY        *****************
  const [allCityData, setAllCityData] = useState([]);
  const [currentCityDetail, setCurrentCityDetail] = useState(null);
  const [cityCurrentPage, setCityCurrentPage] = useState(1);

  const fetchCities = () => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/City`)
      .then((response) => response.json())
      .then((json) => setAllCityData(json))
      .catch((error) => console.error("Error fetching Cities: ", error))
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  };

  const fetchCityById = (id) => {
    setCurrentCityDetail(null); // Reset before fetching
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/City/${id}`)
      .then((response) => response.json())
      .then((json) => setCurrentCityDetail(json))
      .catch((error) =>
        console.error(`Error fetching City by ID (${id}): `, error),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const cityTotalPages = Math.ceil(allCityData.length / ITEMS_PER_PAGE);
  const goToCityPage = (page) => {
    if (page >= 1 && page <= cityTotalPages) {
      setCityCurrentPage(page);
    }
  };
  const cityStartIndex = (cityCurrentPage - 1) * ITEMS_PER_PAGE;
  const cityEndIndex = cityStartIndex + ITEMS_PER_PAGE;
  const paginatedCityData = allCityData.slice(cityStartIndex, cityEndIndex);

  // *****************       TOURISTIC ATTRACTION        *****************
  const [allTouristicAttractionData, setAllTouristicAttractionData] = useState(
    [],
  );
  const [touristicAttractionCurrentPage, setTouristicAttractionCurrentPage] =
    useState(1);
  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/TouristicAttraction`)
      .then((response) => response.json())
      .then((json) => setAllTouristicAttractionData(json))
      .catch((error) =>
        console.error("Error fetching Touristic Attraction data: ", error),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const touristicAttractionTotalPages = Math.ceil(
    allTouristicAttractionData.length / ITEMS_PER_PAGE,
  );
  const goToTouristicAttractionPage = (page) => {
    if (page >= 1 && page <= touristicAttractionTotalPages) {
      setTouristicAttractionCurrentPage(page);
    }
  };
  const touristicAttractionStartIndex =
    (touristicAttractionCurrentPage - 1) * ITEMS_PER_PAGE;
  const touristicAttractionEndIndex =
    touristicAttractionStartIndex + ITEMS_PER_PAGE;
  const paginatedTouristicAttractionData = allTouristicAttractionData.slice(
    touristicAttractionStartIndex,
    touristicAttractionEndIndex,
  );

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
  const presidentAdminTotalPages = Math.ceil(
    allPresidentData.length / ITEMS_PER_PAGE,
  );
  const goToPresidentAdminPage = (page) => {
    if (page >= 1 && page <= presidentAdminTotalPages) {
      setPresidentAdminCurrentPage(page);
    }
  };
  const presidentAdminStartIndex =
    (presidentAdminCurrentPage - 1) * ITEMS_PER_PAGE;
  const presidentAdminEndIndex = presidentAdminStartIndex + ITEMS_PER_PAGE;
  const paginatedPresidentData = allPresidentData.slice(
    presidentAdminStartIndex,
    presidentAdminEndIndex,
  );

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
      .catch((error) =>
        console.error("Error fetching Natural Area data: ", error),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const naturalAreaTotalPages = Math.ceil(
    allNaturalAreaData.length / ITEMS_PER_PAGE,
  );
  const goToNaturalAreaPage = (page) => {
    if (page >= 1 && page <= naturalAreaTotalPages) {
      setNaturalAreaCurrentPage(page);
    }
  };
  const naturalAreaStartIndex = (naturalAreaCurrentPage - 1) * ITEMS_PER_PAGE;
  const naturalAreaEndIndex = naturalAreaStartIndex + ITEMS_PER_PAGE;
  const paginatedNaturalAreaData = allNaturalAreaData.slice(
    naturalAreaStartIndex,
    naturalAreaEndIndex,
  );

  // *****************       CATEGORY NATURAL AREA        *****************
  const [allCategoryNaturalAreaData, setAllCategoryNaturalAreaData] = useState(
    [],
  );
  const [categoryNaturalAreaCurrentPage, setCategoryNaturalAreaCurrentPage] =
    useState(1);
  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/CategoryNaturalArea`)
      .then((response) => response.json())
      .then((json) => setAllCategoryNaturalAreaData(json))
      .catch((error) =>
        console.error("Error fetching Category Natural Area data: ", error),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const categoryNaturalAreaTotalPages = Math.ceil(
    allCategoryNaturalAreaData.length / ITEMS_PER_PAGE,
  );
  const goToCategoryNaturalAreaPage = (page) => {
    if (page >= 1 && page <= categoryNaturalAreaTotalPages) {
      setCategoryNaturalAreaCurrentPage(page);
    }
  };
  const categoryNaturalAreaStartIndex =
    (categoryNaturalAreaCurrentPage - 1) * ITEMS_PER_PAGE;
  const categoryNaturalAreaEndIndex =
    categoryNaturalAreaStartIndex + ITEMS_PER_PAGE;
  const paginatedCategoryNaturalAreaData = allCategoryNaturalAreaData.slice(
    categoryNaturalAreaStartIndex,
    categoryNaturalAreaEndIndex,
  );

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
      .catch((error) =>
        console.error("Error fetching Invasive Specie data: ", error),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const invasiveSpecieTotalPages = Math.ceil(
    allInvasiveSpecieData.length / ITEMS_PER_PAGE,
  );
  const goToInvasiveSpeciePage = (page) => {
    if (page >= 1 && page <= invasiveSpecieTotalPages) {
      setInvasiveSpecieCurrentPage(page);
    }
  };
  const invasiveSpecieStartIndex =
    (invasiveSpecieCurrentPage - 1) * ITEMS_PER_PAGE;
  const invasiveSpecieEndIndex = invasiveSpecieStartIndex + ITEMS_PER_PAGE;
  const paginatedInvasiveSpecieData = allInvasiveSpecieData.slice(
    invasiveSpecieStartIndex,
    invasiveSpecieEndIndex,
  );

  // *****************       NATIVE COMMUNITY        *****************
  const [allNativeCommunityData, setAllNativeCommunityData] = useState([]);
  const [nativeCommunityCurrentPage, setNativeCommunityCurrentPage] =
    useState(1);
  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/NativeCommunity`)
      .then((response) => response.json())
      .then((json) => setAllNativeCommunityData(json))
      .catch((error) =>
        console.error("Error fetching Native Community data: ", error),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const nativeCommunityTotalPages = Math.ceil(
    allNativeCommunityData.length / ITEMS_PER_PAGE,
  );
  const goToNativeCommunityPage = (page) => {
    if (page >= 1 && page <= nativeCommunityTotalPages) {
      setNativeCommunityCurrentPage(page);
    }
  };
  const nativeCommunityStartIndex =
    (nativeCommunityCurrentPage - 1) * ITEMS_PER_PAGE;
  const nativeCommunityEndIndex = nativeCommunityStartIndex + ITEMS_PER_PAGE;
  const paginatedNativeCommunityData = allNativeCommunityData.slice(
    nativeCommunityStartIndex,
    nativeCommunityEndIndex,
  );

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
  const paginatedAirportData = allAirportData.slice(
    airportStartIndex,
    airportEndIndex,
  );

  // *****************       CONSTITUTION ARTICLE        *****************
  const [allConstitutionArticlesData, setAllConstitutionArticlesData] =
    useState([]);
  const [
    constitutionArticlesPagedData,
    setConstitutionArticlesPagedData,
  ] = useState({ data: [], pagination: {} });
  const [
    currentConstitutionArticleDetail,
    setCurrentConstitutionArticleDetail,
  ] = useState(null);
  const [constitutionArticleCurrentPage, setConstitutionArticleCurrentPage] =
    useState(1);
  const [constitutionArticlePageSize, setConstitutionArticlePageSize] =
    useState(CONSTITUTION_ITEMS_PER_PAGE);
  const [constitutionArticleTotalItems, setConstitutionArticleTotalItems] =
    useState(0);
  const [
    searchedConstitutionArticles,
    setSearchedConstitutionArticles,
  ] = useState({ data: [], pagination: {} });

  const fetchAllConstitutionArticles = () => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/ConstitutionArticle`)
      .then((response) => response.json())
      .then((json) => setAllConstitutionArticlesData(json))
      .catch((error) =>
        console.error("Error fetching all Constitution Articles: ", error),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  };

  const fetchConstitutionArticlesPaged = (
    page,
    pageSize = CONSTITUTION_ITEMS_PER_PAGE,
  ) => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(
      `${API_COL_BASE_URL}/ConstitutionArticle/pagedList?page=${page}&pagesize=${pageSize}`,
    )
      .then((response) => response.json())
      .then((json) => {
        setConstitutionArticlesPagedData(json);
        setConstitutionArticleTotalItems(json.totalItems || 0); // Assuming API returns totalItems
        setConstitutionArticleCurrentPage(page);
        setConstitutionArticlePageSize(pageSize);
      })
      .catch((error) =>
        console.error("Error fetching paged Constitution Articles: ", error),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  };

  const fetchConstitutionArticleById = (id) => {
    setCurrentConstitutionArticleDetail(null); // Reset before fetching
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/ConstitutionArticle/${id}`)
      .then((response) => response.json())
      .then((json) => setCurrentConstitutionArticleDetail(json))
      .catch((error) =>
        console.error(
          `Error fetching Constitution Article by ID (${id}): `,
          error,
        ),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  };

  const searchConstitutionArticlesByKeyword = (
    keyword,
    page,
    pageSize = CONSTITUTION_ITEMS_PER_PAGE,
  ) => {
    setSearchedConstitutionArticles({ data: [], pagination: {} }); // Reset
    setActiveApiCalls((prev) => prev + 1);
    fetch(
      `${API_COL_BASE_URL}/ConstitutionArticle/search/${keyword}?page=${page}&pagesize=${pageSize}`,
    )
      .then((response) => response.json())
      .then((json) => setSearchedConstitutionArticles(json))
      .catch((error) =>
        console.error(
          `Error searching Constitution Articles by keyword (${keyword}): `,
          error,
        ),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  };

  const searchConstitutionArticlesByChapter = (
    chapter,
    page,
    pageSize = CONSTITUTION_ITEMS_PER_PAGE,
  ) => {
    setSearchedConstitutionArticles({ data: [], pagination: {} }); // Reset
    setActiveApiCalls((prev) => prev + 1);
    fetch(
      `${API_COL_BASE_URL}/ConstitutionArticle/byChapterNumber/${chapter}?page=${page}&pagesize=${pageSize}`,
    )
      .then((response) => response.json())
      .then((json) => setSearchedConstitutionArticles(json))
      .catch((error) =>
        console.error(
          `Error searching Constitution Articles by chapter (${chapter}): `,
          error,
        ),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  };

  useEffect(() => {
    fetchAllConstitutionArticles();
    fetchConstitutionArticlesPaged(1, CONSTITUTION_ITEMS_PER_PAGE);
  }, []);

  const constitutionArticleTotalPages = Math.ceil(
    constitutionArticleTotalItems / constitutionArticlePageSize,
  );

  const goToConstitutionArticlePage = (page) => {
    fetchConstitutionArticlesPaged(page, constitutionArticlePageSize);
  };

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
      .catch((error) =>
        console.error("Error fetching Typical Dish data: ", error),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);
  const typicalDishTotalPages = Math.ceil(
    allTypicalDishData.length / ITEMS_PER_PAGE,
  );
  const goToTypicalDishPage = (page) => {
    if (page >= 1 && page <= typicalDishTotalPages) {
      setTypicalDishCurrentPage(page);
    }
  };
  const typicalDishStartIndex = (typicalDishCurrentPage - 1) * ITEMS_PER_PAGE;
  const typicalDishEndIndex = typicalDishStartIndex + ITEMS_PER_PAGE;
  const paginatedTypicalDishData = allTypicalDishData.slice(
    typicalDishStartIndex,
    typicalDishEndIndex,
  );

  // *****************       TRADITIONAL FAIR AND FESTIVAL        *****************
  const [
    allTraditionalFairAndFestivalData,
    setAllTraditionalFairAndFestivalData,
  ] = useState([]);
  const [
    traditionalFairAndFestivalCurrentPage,
    setTraditionalFairAndFestivalCurrentPage,
  ] = useState(1);
  const [
    traditionalFairAndFestivalDetail,
    setTraditionalFairAndFestivalDetail,
  ] = useState(null);
  const [
    traditionalFairAndFestivalCityInfo,
    setTraditionalFairAndFestivalCityInfo,
  ] = useState(null);

  useEffect(() => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/TraditionalFairAndFestival`)
      .then((response) => response.json())
      .then((json) => setAllTraditionalFairAndFestivalData(json))
      .catch((error) =>
        console.error(
          "Error fetching Traditional Fair and Festival data: ",
          error,
        ),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  }, []);

  const traditionalFairAndFestivalTotalPages = Math.ceil(
    allTraditionalFairAndFestivalData.length / ITEMS_PER_PAGE,
  );
  const goToTraditionalFairAndFestivalPage = (page) => {
    if (page >= 1 && page <= traditionalFairAndFestivalTotalPages) {
      setTraditionalFairAndFestivalCurrentPage(page);
    }
  };
  const traditionalFairAndFestivalStartIndex =
    (traditionalFairAndFestivalCurrentPage - 1) * ITEMS_PER_PAGE;
  const traditionalFairAndFestivalEndIndex =
    traditionalFairAndFestivalStartIndex + ITEMS_PER_PAGE;
  const paginatedTraditionalFairAndFestivalData =
    allTraditionalFairAndFestivalData.slice(
      traditionalFairAndFestivalStartIndex,
      traditionalFairAndFestivalEndIndex,
    );

  const fetchTraditionalFairAndFestivalById = (id) => {
    setTraditionalFairAndFestivalDetail(null); // Reset before fetching
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/TraditionalFairAndFestival/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => setTraditionalFairAndFestivalDetail(json))
      .catch((error) => {
        setTraditionalFairAndFestivalDetail(null); // Ensure null on error
        console.error(
          `Error fetching Traditional Fair and Festival by ID (${id}): `,
          error,
        );
      })
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  };

  const fetchTraditionalFairAndFestivalCityDetails = (fairId) => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/TraditionalFairAndFestival/${fairId}/city`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => setTraditionalFairAndFestivalCityInfo(json))
      .catch((error) =>
        console.error(
          `Error fetching City Details for Traditional Fair and Festival (${fairId}): `,
          error,
        ),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  };

  const searchTraditionalFairAndFestivalByName = (name) => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/TraditionalFairAndFestival/name/${name}`)
      .then((response) => response.json())
      .then((json) => {
        setAllTraditionalFairAndFestivalData(json);
        setTraditionalFairAndFestivalCurrentPage(1);
      })
      .catch((error) =>
        console.error(
          `Error searching Traditional Fair and Festival by Name (${name}): `,
          error,
        ),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  };

  const searchTraditionalFairAndFestivalByKeyword = (keyword) => {
    setActiveApiCalls((prev) => prev + 1);
    fetch(`${API_COL_BASE_URL}/TraditionalFairAndFestival/search/${keyword}`)
      .then((response) => response.json())
      .then((json) => {
        setAllTraditionalFairAndFestivalData(json);
        setTraditionalFairAndFestivalCurrentPage(1);
      })
      .catch((error) =>
        console.error(
          `Error searching Traditional Fair and Festival by Keyword (${keyword}): `,
          error,
        ),
      )
      .finally(() => setActiveApiCalls((prev) => prev - 1));
  };

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
        regionData: paginatedRegionData, // This is the paginated list for general browsing
        regionCurrentPage,
        regionTotalPages,
        goToRegionPage,
        fetchRegionById,
        currentRegionDetail,
        fetchRegionDepartments,
        currentRegionDepartments,
        // City
        allCityData,
        cityData: paginatedCityData,
        cityCurrentPage,
        cityTotalPages,
        goToCityPage,
        fetchCityById,
        currentCityDetail,
        // Touristic Attraction
        allTouristicAttractionData,
        touristicAttractionData: paginatedTouristicAttractionData,
        touristicAttractionCurrentPage,
        touristicAttractionTotalPages,
        goToTouristicAttractionPage,
        // President
        allPresidentData,
        presidentData: paginatedPresidentData,
        presidentAdminCurrentPage,
        presidentAdminTotalPages,
        goToPresidentAdminPage,
        presidentId,
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
        allConstitutionArticlesData, // Full list of articles
        constitutionArticlesPagedData, // Paginated list of articles
        constitutionArticleCurrentPage,
        constitutionArticleTotalPages,
        goToConstitutionArticlePage,
        fetchConstitutionArticleById,
        currentConstitutionArticleDetail,
        searchConstitutionArticlesByKeyword,
        searchConstitutionArticlesByChapter,
        searchedConstitutionArticles,
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
        // Traditional Fair and Festival
        allTraditionalFairAndFestivalData,
        traditionalFairAndFestivalData: paginatedTraditionalFairAndFestivalData,
        traditionalFairAndFestivalCurrentPage,
        traditionalFairAndFestivalTotalPages,
        goToTraditionalFairAndFestivalPage,
        traditionalFairAndFestivalDetail,
        fetchTraditionalFairAndFestivalById,
        traditionalFairAndFestivalCityInfo,
        fetchTraditionalFairAndFestivalCityDetails,
        searchTraditionalFairAndFestivalByName,
        searchTraditionalFairAndFestivalByKeyword,
        // Holidays
        holidaysByYearData,
        fetchHolidaysByYear,
        holidaysByYearMonthData,
        fetchHolidaysByYearMonth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
