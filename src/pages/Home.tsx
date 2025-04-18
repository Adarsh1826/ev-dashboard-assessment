import { Car, PercentIcon, VerifiedIcon,LeafIcon } from "lucide-react";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import Header from "../components/Header";
import BackgroundGradient from "../components/Background";
type VehicleData = {
  City: string;
  Make: string;
  Model: string;
  ElectricRange: string;
  "Clean Alternative Fuel Vehicle (CAFV) Eligibility": string;
  [key: string]: any;
};
export const Home = () => {
  const [data, setData] = useState<VehicleData[]>([]);
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
        ? (validRanges.reduce((a, b) => a + b, 0) / validRanges.length).toFixed(1)
        : "0.0";
    
  return (
    <div className="relative min-h-screen overflow-hidden">
    <BackgroundGradient/>
    <div className="relative z-10">
    <Header />
    
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card Icon={Car} count={evCount} label="EVs" />
        <Card Icon={VerifiedIcon} count={uniqueMakes} label="Unique Makes" />
        <Card Icon={PercentIcon} count={`${cafvPercentage}%`} label="% CAFV Eligible" />
        <Card Icon={LeafIcon} count={averageRange} label="Average,Electric mi" />
      </div>
    </div>
    </div>
    </div>
  );
};
