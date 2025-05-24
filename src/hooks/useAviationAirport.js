import { useState, useEffect } from 'react';

const useAviationAirport = (icaoCode) => {
  const [airportData, setAirportData] = useState(null);
  // Initialize isLoading to true as per requirement, but useEffect will manage it based on icaoCode.
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!icaoCode) {
      setAirportData(null);
      setIsLoading(false); // Set to false if no icaoCode is provided
      setError(null); // Clear any previous error or set a specific one like "ICAO code is required"
      return;
    }

    const fetchAirportData = async () => {
      setIsLoading(true); // Set loading to true when a fetch is initiated
      setError(null);
      setAirportData(null); // Reset previous data

      try {
        // Correct endpoint: https://api.aviationapi.com/v1/airports/{icao_code}
        const response = await fetch(`https://api.aviationapi.com/v1/airports/${icaoCode}`);

        if (!response.ok) {
          if (response.status === 404) {
            setError(`Airport with ICAO code "${icaoCode}" not found.`);
          } else {
            setError(`Error fetching airport data: ${response.status} ${response.statusText}`);
          }
          setAirportData(null);
          // setIsLoading(false); // Moved to finally block
          return; // Return early as response was not ok
        }

        const responseData = await response.json(); // Renamed to avoid conflict with outer scope 'data' if any

        // The API returns { "data": [...] }
        if (responseData && responseData.data && responseData.data.length > 0) {
          setAirportData(responseData.data[0]);
        } else if (responseData && responseData.data && responseData.data.length === 0) {
          // Valid request, but ICAO code not found in the database or no data
          setError(`Airport with ICAO code "${icaoCode}" not found or no data available.`);
          setAirportData(null);
        } else {
          // This case might occur if the API structure is different than expected (e.g. responseData.data is missing)
          setError("Received unexpected data structure from API.");
          setAirportData(null);
        }
      } catch (err) {
        setError(`Failed to fetch airport data: ${err.message}`);
        setAirportData(null);
      } finally {
        setIsLoading(false); // Set loading to false after fetch attempt (success or failure)
      }
    };

    fetchAirportData();
  }, [icaoCode]); // Dependency array ensures this runs when icaoCode changes

  return {
    aviationAirportData: airportData,
    isAviationAirportLoading: isLoading,
    aviationAirportError: error,
  };
};

export default useAviationAirport;
