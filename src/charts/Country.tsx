import { useState, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import useData from "../hooks";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Country = () => {
  const { countryDensity } = useData();
  const [topN, setTopN] = useState(10);

  const slicedCount = useMemo(
    () => countryDensity.slice(0, topN),
    [countryDensity, topN]
  );
  const borderColors = slicedCount.map((_, idx) => {
    const hue = Math.round((idx * 360) / slicedCount.length);
    return `hsl(${hue}, 70%, 50%)`;
  });
  const backgroundColors = borderColors.map(hsl => {
    return hsl.replace('hsl', 'hsla').replace(')', ', 0.3)');
  });
  const data = {
    labels: slicedCount.map(([make]) => make),
    datasets: [
      {
        label: `Top ${topN} Counties by EV Usage`,
        data: slicedCount.map(([, count]) => count),
        borderRadius: 6,
        borderColor: borderColors,
        backgroundColor: backgroundColors,
        fill: true,
        
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white",
        },
      },
      tooltip: {
        backgroundColor: "#1f2937",
        titleColor: "#f3f4f6",
        bodyColor: "#e5e7eb",
      },
    },
    
  };
  return (
    <div className="p-4 bg-black rounded-xl shadow-lg shadow-purple-600/30">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-semibold">Top Country</h2>
        <select
          className="bg-[#1f2937] text-white border border-gray-700 rounded px-3 py-1"
          value={topN}
          onChange={(e) => setTopN(Number(e.target.value))}
        >
          {[5, 10, 15, 20, 30, 50, 100].map((n) => (
            <option key={n} value={n}>
              Top {n}
            </option>
          ))}
        </select>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Country;
