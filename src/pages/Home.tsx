import { Car, PercentIcon, VerifiedIcon, LeafIcon } from "lucide-react";
import Card from "../components/Card";
import Header from "../components/Header";
import useData from "../hooks";
export const Home = () => {
  const res = useData();
  return (
    <div className="relative min-h-screen bg-black text-white font-body overflow-x-hidden">
      <div className="relative z-10">
        <Header />
        <div className="max-w-screen-lg mx-auto text-center px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            <Card Icon={Car} count={res.evCount} label="Total EVs" />
            <Card Icon={LeafIcon} count={`${res.averageRange} miles`} label="Avg Electric Reuse" />
            <Card Icon={VerifiedIcon} count={res.fastestGrowingCounty} label="Top County by Ove" />
            <Card Icon={PercentIcon} count={res.fastestGrowingYear} label="Fastest Growing Year" />
          </div>
        </div>
      </div>
    </div>
  );
};
