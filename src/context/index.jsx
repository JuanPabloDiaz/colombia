"use client";

import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  // *****************       AREA        *****************

  const [dataArea, setDataArea] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("api/area")
      .then((response) => response.json())
      .then((json) => {
        // console.log("Data Area: ", json); // Log the data
        setDataArea(json); // Add the data to the state (setItems)
        setIsLoading(false); // Set isLoading to false after fetching data
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false); // Set isLoading to false even if there was an error
      });
  }, []);

// *****************       Colombia        *****************

const [endpoints, setEndpoints] = useState([]); // State to store the data from the dummy API. It's an empty array because the data is an array of objects

// UseEffect is a hook to fetch the data from the API
useEffect(() => {
  // fetch("https://dummyjson.com/products")
  fetch("https://api-colombia.com/api/v1/Country/Colombia")
    .then((response) => response.json())
    .then((json) => {
      console.log("Data from API-Colombia: ", json); // Log the data
      setEndpoints(json); // Add the data to the state (setEndpoints)
    });
}, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        endpoints,
        setEndpoints,

      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
