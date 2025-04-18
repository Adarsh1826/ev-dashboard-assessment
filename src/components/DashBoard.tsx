import Papa from "papaparse";
import { useEffect, useState } from "react";

type EVRecord = {
  VIN: string;
  County: string;
  City: string;
  State: string;
  PostalCode: string;
  ModelYear: string;
  Make: string;
  Model: string;
  ElectricVehicleType: string;
  CAFVEligibility: string;
  ElectricRange: string;
  BaseMSRP: string;
  LegislativeDistrict: string;
  DOLVehicleID: string;
  VehicleLocation: string;
  ElectricUtility: string;
  CensusTract: string;
};

function Dashboard() {
  const [data, setData] = useState<EVRecord[]>([]);

  useEffect(() => {
    Papa.parse<EVRecord>("/Electric_Vehicle_Population_Data.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results: Papa.ParseResult<EVRecord>) => {
        setData(results.data);
      }
    });
  }, []);

  return (
    <div>
      <h1>EV Dashboard</h1>
      <p>Total records loaded: {data.length}</p>
    </div>
  );
}

export default Dashboard;
