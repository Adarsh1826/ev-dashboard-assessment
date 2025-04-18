import { LucideIcon } from "lucide-react";
type data = {
    Icon:LucideIcon,
    count:string ,
    label:string
}
const Card = ({ Icon , count ,label}:data) => {
  return (
    <div className="bg-blue-50 rounded-xl shadow-sm p-6 flex flex-col items-center justify-center w-40 space-y-2">
      <Icon className="text-blue-600 w-8 h-8" />
      <h4 className="text-sm text-gray-700 font-medium">{label}</h4>
      <span className="text-xl font-bold text-black">{count}</span>
    </div>
  );
};

export default Card;
