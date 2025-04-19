import { Car, PercentIcon, VerifiedIcon,LeafIcon } from "lucide-react";
import Card from "../components/Card";
import Header from "../components/Header";
import BackgroundGradient from "../components/Background";
import useData from "../hooks";

export const Home = () => {
    const res = useData()
    // alert(typeof res)
  return (
    <div className="relative min-h-screen overflow-hidden">
    <BackgroundGradient/>
    <div className="relative z-10">
    <Header />
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card Icon={Car} count={res.evCount} label="EVs" />
        <Card Icon={VerifiedIcon} count={res.uniqueMakes} label="Unique Makes" />
        <Card Icon={PercentIcon} count={`${res.cafvPercentage}%`} label="% CAFV Eligible" />
        <Card Icon={LeafIcon} count={res.averageRange} label="Average,Electric mi" />
      </div>
    </div>
    </div>
    </div>
  );
};
