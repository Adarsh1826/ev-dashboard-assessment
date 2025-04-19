import { LucideIcon } from "lucide-react";

type CardProps = {
  Icon: LucideIcon;
  count: string;
  label: string;
};
const Card = ({ Icon, count, label }: CardProps) => {
  return (
    <div className="w-full max-w-[180px] h-28 flex flex-col justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#9333ea,0_0_15px_#9333ea,0_0_30px_#9333ea]
 space-y-1 transition transform hover:scale-105 bg-black">
      <Icon className="w-6 h-6 text-sky-200" />
      <h4 className="text-xs font-medium">{label}</h4>
      <span className="text-lg font-bold">{count}</span>
    </div>
  );
};

export default Card;
