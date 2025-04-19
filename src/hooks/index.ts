import { useState,useEffect } from "react";
import Papa from "papaparse"
type VehicleData = {
    City: string;
    Make: string;
    Model: string;
    ElectricRange: string;
    "Clean Alternative Fuel Vehicle (CAFV) Eligibility": string;
    [key: string]: any;
  };
const useData = ()=>{
    const [data , setData] = useState<VehicleData[]>([])
    useEffect(() => {
        Papa.parse<VehicleData>(
          '/Electric_Vehicle_Population_Data.csv',
          {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
              setData(results.data);
            },
          }
        );
      }, []);
    const evCount = data.length.toString()
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
            ? (validRanges.reduce((a, b) => a + b, 0) / validRanges.length).toFixed(1)
            : "0.0";
        return {evCount,uniqueMakes,cafvPercentage,averageRange}

}
export default useData