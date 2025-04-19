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
const TypeOfEv = () => {
  const { typeev } = useData();
  const labels = typeev.map(([type]) => type);
  const values = typeev.map(([, count]) => count);
  const total = values.reduce((sum, count) => sum + count, 0);
  const data = {
    labels,
    datasets: [
      {
        label: "EV Type Count",
        data: values,backgroundColor: [
          "#10B981", "#22d3ee", "#3B82F6"
        ],
        borderRadius: 6,
        barThickness: 40,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const value = context.parsed.y;
            const percent = ((value / total) * 100).toFixed(1);
            return `${value} (${percent}%)`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "#2d2d2d",
        },
      },
    },
  };

  return (
    <div className="bg-[#000000] p-6 rounded-xl text-white mt-6 shadow-lg shadow-purple-600/30">
      <h3 className="text-lg font-semibold text-center mb-4">
        EV Distribution by Type
      </h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TypeOfEv;
