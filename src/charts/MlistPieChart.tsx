import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import useData from "../hooks";

ChartJS.register(ArcElement, Tooltip, Legend);

const MlistPieChart = () => {
  const { topManufacturers } = useData();

  const [topN, setTopN] = useState(10);

  const sliced = topManufacturers.slice(0, topN);
  const total = sliced.reduce((sum, [, count]) => sum + count, 0);

  const data = {
    labels: sliced.map(([make]) => make),
    datasets: [
      {
        data: sliced.map(([, count]) => count),
        backgroundColor: [
          "#8b5cf6", "#22d3ee", "#facc15", "#f87171", "#34d399",
          "#f472b6", "#60a5fa", "#a78bfa", "#fbbf24", "#4ade80"
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.parsed;
            const label = context.label;
            const percent = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} (${percent}%)`;
          },
        },
      },
      legend: {
        position: 'bottom' as const,
        labels: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div className="bg-[#000000] p-6 rounded-xl shadow-xl text-white mt-6"
    
    style={{
        boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)", 
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-center w-full">
          EV Market Share Pie Representation
        </h3>
        <select
          value={topN}
          onChange={(e) => setTopN(Number(e.target.value))}
          className="ml-4 bg-gray-800 text-white text-sm rounded p-1 border border-gray-600"
        >
          {[5, 10, 15, 20,30,40,50,100].map(n => (
            <option key={n} value={n}>
              Top {n}
            </option>
          ))}
        </select>
      </div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default MlistPieChart;
