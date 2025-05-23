"use client";

import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "@/context";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
// Assuming basic Input and Button components are available or create simple ones
// For simplicity, using standard HTML input/button styled with Tailwind.
// import { Input } from "@/components/ui/input"; // If available
// import { Button } from "@/components/ui/button"; // If available

export default function FestivosClient() {
  const {
    holidaysByYearData,
    fetchHolidaysByYear,
    holidaysByYearMonthData,
    fetchHolidaysByYearMonth,
    isLoading,
  } = useContext(AppContext);

  const [yearInput, setYearInput] = useState("");
  const [monthInput, setMonthInput] = useState("");
  const [displayedHolidays, setDisplayedHolidays] = useState([]);
  const [currentQueryType, setCurrentQueryType] = useState(""); // 'year' or 'yearMonth'
  const [feedbackMessage, setFeedbackMessage] = useState("");

  useEffect(() => {
    if (currentQueryType === "year" && holidaysByYearData) {
      setDisplayedHolidays(holidaysByYearData);
      if (holidaysByYearData.length === 0 && !isLoading) {
        setFeedbackMessage(
          "No se encontraron festivos para el año especificado.",
        );
      } else {
        setFeedbackMessage("");
      }
    } else if (currentQueryType === "yearMonth" && holidaysByYearMonthData) {
      setDisplayedHolidays(holidaysByYearMonthData);
      if (holidaysByYearMonthData.length === 0 && !isLoading) {
        setFeedbackMessage(
          "No se encontraron festivos para el año y mes especificados.",
        );
      } else {
        setFeedbackMessage("");
      }
    } else if (!isLoading && displayedHolidays.length > 0 && currentQueryType) {
      // Data is displayed, clear feedback
      setFeedbackMessage("");
    }
  }, [
    holidaysByYearData,
    holidaysByYearMonthData,
    currentQueryType,
    isLoading,
    displayedHolidays.length, // Added missing dependency
  ]);

  const handleSearch = () => {
    setFeedbackMessage(""); // Clear previous messages
    setDisplayedHolidays([]); // Clear previous results

    const year = parseInt(yearInput, 10);
    const month = monthInput ? parseInt(monthInput, 10) : null;

    if (isNaN(year) || yearInput.length !== 4) {
      setFeedbackMessage("Por favor, ingrese un año válido (YYYY).");
      return;
    }

    if (month !== null && (isNaN(month) || month < 1 || month > 12)) {
      setFeedbackMessage(
        "Por favor, ingrese un mes válido (1-12) o déjelo vacío.",
      );
      return;
    }

    if (month) {
      setCurrentQueryType("yearMonth");
      fetchHolidaysByYearMonth(year, month);
    } else {
      setCurrentQueryType("year");
      fetchHolidaysByYear(year);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Fecha no disponible";
    return new Date(dateString).toLocaleDateString("es-CO", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC", // Assuming dates from API are UTC or should be treated as such for consistency
    });
  };

  return (
    <div className="container mx-auto min-h-screen p-4 antialiased">
      <section className="rounded-xl bg-slate-900/80 p-6 shadow-xl md:p-8">
        <h1 className="text-primary-400 mb-6 text-center text-3xl font-bold md:text-4xl">
          Consultar Días Festivos
        </h1>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <input
            type="number"
            value={yearInput}
            onChange={(e) => setYearInput(e.target.value)}
            placeholder="Año (YYYY)"
            className="focus:border-primary-500 focus:ring-primary-500 rounded-md border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-1"
          />
          <input
            type="number"
            value={monthInput}
            onChange={(e) => setMonthInput(e.target.value)}
            placeholder="Mes (MM - opcional)"
            className="focus:border-primary-500 focus:ring-primary-500 rounded-md border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-1"
          />
          <button
            onClick={handleSearch}
            disabled={isLoading}
            className="bg-primary-600 hover:bg-primary-700 rounded-md px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-3 md:col-span-1"
          >
            {isLoading ? "Buscando..." : "Buscar"}
          </button>
        </div>

        {feedbackMessage && !isLoading && (
          <p className="mt-4 text-center text-yellow-400">{feedbackMessage}</p>
        )}

        {isLoading && <LoadingSpinner />}

        {!isLoading && displayedHolidays.length > 0 && (
          <div className="mt-8">
            <h2 className="text-primary-300 mb-4 text-2xl font-semibold">
              Resultados:
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {displayedHolidays.map((holiday, index) => (
                <div key={index} className="rounded-lg bg-slate-800 p-4 shadow">
                  <h3 className="text-lg font-semibold text-white">
                    {holiday.name}
                  </h3>
                  <p className="text-sm text-slate-300">
                    Fecha: {formatDate(holiday.date)}
                  </p>
                  <p className="text-sm text-slate-400">Tipo: {holiday.type}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {!isLoading &&
          displayedHolidays.length === 0 &&
          currentQueryType &&
          !feedbackMessage && (
            <p className="mt-8 text-center text-slate-300">
              No se encontraron festivos para esta consulta.
            </p>
          )}
      </section>
    </div>
  );
}
