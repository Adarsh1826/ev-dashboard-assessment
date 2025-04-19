import { useState, useEffect } from "react";
import Papa from "papaparse";
type VehicleData = {
  City: string;
  County: string;
  State: string;
  "Model Year": string;
  Make: string;
  Model: string;
  "Electric Vechicle Type" :string;
  "Electric Range": string;
  "Clean Alternative Fuel Vehicle (CAFV) Eligibility": string;
  [key: string]: any;
};
// data fetch kr  rha hu
const useData = () => {
  const [data, setData] = useState<VehicleData[]>([]);
  useEffect(() => {
    Papa.parse<VehicleData>("/Electric_Vehicle_Population_Data.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  }, []);
// data use kr rha hu
  const evCount = data.length.toString();
  const uniqueMakes = new Set(data.map((item) => item.Make)).size.toString();
  const cafvEligibleCount = data.filter(
    (item) =>
      item["Clean Alternative Fuel Vehicle (CAFV) Eligibility"]
        ?.trim()
        .toLowerCase() === "clean alternative fuel vehicle eligible"
  ).length;

  const cafvPercentage =
    data.length > 0
      ? ((cafvEligibleCount / data.length) * 100).toFixed(1)
      : "0.0";

  const validRanges = data
    .map((item) => Number(item["Electric Range"]))
    .filter((num) => !isNaN(num) && num > 0);

  const averageRange =
    validRanges.length > 0
      ? (
          validRanges.reduce((a, b) => a + b, 0) / validRanges.length
        ).toFixed(1)
      : "0.0";
  const yearlyCounts: Record<string, number> = {};
  data.forEach((item) => {
    const year = item["Model Year"];
    if (year) {
      yearlyCounts[year] = (yearlyCounts[year] || 0) + 1;
    }
  });

  const yearGrowth: Record<string, number> = {};
  const sortedYears = Object.keys(yearlyCounts).sort();
  sortedYears.forEach((year, index) => {
    if (index > 0) {
      const prevYear = sortedYears[index - 1];
      yearGrowth[year] = yearlyCounts[year] - yearlyCounts[prevYear];
    }
  });

  const fastestGrowingYear = Object.entries(yearGrowth).reduce(
    (max, current) => (current[1] > max[1] ? current : max),
    ["", -Infinity]
  )[0];
  const countyCounts: Record<string, number> = {};
  data.forEach((item) => {
    const county = item.County;
    if (county) {
      countyCounts[county] = (countyCounts[county] || 0) + 1;
    }
  });
  const fastestGrowingCounty = Object.entries(countyCounts).reduce(
    (max, current) => (current[1] > max[1] ? current : max),
    ["", -Infinity]
  )[0];
  const evsByYear: Record<string, number> = {};
  data.forEach((item) => {
    const year = item["Model Year"];
    if (year) {
        evsByYear[year] = (evsByYear[year] || 0) + 1;
    }
  });
const sortedYearss = Object.keys(evsByYear).sort();
const evAdoptionData = sortedYearss.map((year) => ({
  year,
  count: evsByYear[year],
}));
const topManufacturers = Object.entries(
  data.reduce((acc, item) => {
    const make = item.Make?.trim();
    if (make) {
      acc[make] = (acc[make] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>)
).sort((a, b) => b[1] - a[1]); 

// ek electruc vechicle type add krna hai

const typeev = Object.entries(
  data.reduce((acc, item) => {
    const type = item["Electric Vehicle Type"]?.trim();
    if (type) {
      acc[type] = (acc[type] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>)
);

// comurty data fetching kr rha hu
const countryDensity = Object.entries(
  data.reduce((acc, item) => {
    const country = item.County || "";
    acc[country] = (acc[country] || 0) + 1;
    return acc;
  }, {} as Record<string,number>) 
).sort((a, b) => b[1] - a[1]); ;

  return {
    evCount,
    uniqueMakes,
    cafvPercentage,
    averageRange,
    fastestGrowingYear,
    fastestGrowingCounty,
    evAdoptionData,
    topManufacturers,
    typeev,
    countryDensity
  };
};
export default useData;
