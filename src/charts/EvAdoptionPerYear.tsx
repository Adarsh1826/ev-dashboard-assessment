import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import useData from "../hooks";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Filler);

const EVAdoptionChart = () => {
  const { evAdoptionData } = useData();

  const data = {
    labels: evAdoptionData.map((item) => item.year),
    datasets: [
      {
        label: "EVs Registered",
        data: evAdoptionData.map((item) => item.count),
        borderColor: "#8b5cf6",                  
        backgroundColor: "rgba(139,92,246,0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#8b5cf6",         
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#c4b5fd", 
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
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255,255,255,0.05)",
          borderDash: [4, 4],
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255,255,255,0.05)",
          borderDash: [4, 4],
        },
      },
    },
  };
  return (
    <div className="p-4 bg-black rounded-xl shadow-lg shadow-purple-600/30">
      <h2 className="text-white text-xl font-semibold mb-4">EV Adoption Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};
export default EVAdoptionChart;
