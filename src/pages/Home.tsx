import { Car, PercentIcon, VerifiedIcon, LeafIcon } from "lucide-react";
import Card from "../components/Card";
import Header from "../components/Header";
import useData from "../hooks";
import EVAdoptionChart from "../charts/EvAdoptionPerYear";
import Mlist from "../charts/Mlist";
import MlistPieChart from "../charts/MlistPieChart";
import TypeOfEv from "../charts/TypeOfEv";
export const Home = () => {
  const res = useData();
  return (
    <div className="min-h-screen bg-black text-white font-body">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        <div className="flex flex-wrap justify-center gap-8">
          <Card Icon={Car} count={res.evCount} label="Total EVs" />
          <Card Icon={LeafIcon} count={`${res.averageRange} miles`} label="Avg Electric Range" />
          <Card Icon={VerifiedIcon} count={res.fastestGrowingCounty} label="Top County by EVs" />
          <Card Icon={PercentIcon} count={res.fastestGrowingYear} label="Fastest Growing Year" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div >
            <h2 className="text-lg font-semibold mb-4">EV Adoption Over Time</h2>
            <EVAdoptionChart />
          </div>
          <div >
            <h2 className="text-lg font-semibold mb-4">Top EV Manufacturers</h2>
            <Mlist />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4 text-center">EV Market Share</h2>
            <MlistPieChart />
          </div>
          <div >
            <h2 className="text-lg font-semibold mb-4 text-center">EV Distribution by Type</h2>
            <TypeOfEv />
          </div>
        </div>
      </div>
    </div>
  );
};

