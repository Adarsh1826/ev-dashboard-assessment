import { Car, VerifiedIcon } from "lucide-react"
import Card from "../components/Card"
import { useEffect, useState } from "react";
import Papa from "papaparse";
type VehicleData = {
    City: string;
    Make: string;
    Model: string;
    ElectricRange: string;
    [key: string]: any;
};
  
export const Home = () => {
     const [data, setData] = useState<VehicleData[]>([]);
     useEffect(() => {
       Papa.parse<VehicleData>('/Electric_Vehicle_Population_Data.csv', {
         download: true,
         header: true,
         skipEmptyLines: true,
         complete: (results) => {
           setData(results.data);
         }
       });
     }, []);
const uniqueMakes = new Set(data.map((item) => item.Make)).size.toString();
  return (
    <div className="flex grid-cols-4 sm:grid-cols-1">
        <Card Icon={Car} count={data.length.toString()} label="Evs" />
        <Card Icon={VerifiedIcon} count={uniqueMakes}label="Unique Makes" />
        
    </div>
  )
}
