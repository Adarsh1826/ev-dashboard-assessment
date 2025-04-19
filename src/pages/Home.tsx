import { Car, PercentIcon, VerifiedIcon, LeafIcon } from "lucide-react";
import Card from "../components/Card";
import useData from "../hooks";
import EVAdoptionChart from "../charts/EvAdoptionPerYear";
import Mlist from "../charts/Mlist";
import MlistPieChart from "../charts/MlistPieChart";
import TypeOfEv from "../charts/TypeOfEv";
import Country from "../charts/Country";
import Bar from "../components/Bar";

export const Home = () => {
  const res = useData();
  return (
    <div className="min-h-screen bg-black text-white font-body">
      <Bar type="header" heading="EVision Dashboard" footer="Charting the Electric Revolution — Past, Present, and Beyond"/>
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        <div className="flex flex-wrap justify-center gap-8">
          <Card Icon={Car} count={res.evCount} label="Total EVs" />
          <Card Icon={LeafIcon} count={`${res.averageRange} miles`} label="Avg Electric Range" />
          <Card Icon={VerifiedIcon} count={res.fastestGrowingCounty} label="Top County by EVs" />
          <Card Icon={PercentIcon} count={res.fastestGrowingYear} label="Fastest Growing Year" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full flex flex-col p-4 bg-gray-900 rounded">
            <h2 className="text-lg font-semibold mb-4">EV Adoption Over Time</h2>
            <EVAdoptionChart />
          </div>

          <div className="w-full flex flex-col p-4 bg-gray-900 rounded">
            <h2 className="text-lg font-semibold mb-4">Top EV Manufacturers</h2>
            <Mlist />
          </div>
          
          <div className="w-full flex flex-col p-4 bg-gray-900 rounded">
            <h2 className="text-lg font-semibold mb-4 text-center">County-wise EV Ownership</h2>
            <Country />
          </div>
          <div className="w-full flex flex-col p-4 bg-gray-900 rounded">
            <h2 className="text-lg font-semibold mb-4 text-center">EV Distribution by Type</h2>
            <TypeOfEv />
          </div>
        </div>
        <div className="flex justify-center px-4">
  <div className="w-full max-w-xl flex flex-col p-4 bg-gray-900 rounded">
    <h2 className="text-lg font-semibold mb-4 text-center">EV Market Share</h2>
    <div className="flex-1">
      <MlistPieChart />
    </div>
  </div>
</div>

<Bar type="footer" footer="Made By Adarsh"/>
      </div>
    </div>
  );
};
