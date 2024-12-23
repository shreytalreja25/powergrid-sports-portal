import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PredictionChart = ({ title, data }) => {
  const chartData = {
    labels: ["Win", "Loss", "Draw"],
    datasets: [
      {
        data: data, // Example: [75, 20, 5]
        backgroundColor: ["#4caf50", "#f44336", "#ffc107"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="card shadow text-center mb-4">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div style={{ height: "200px" }}>
          <Doughnut data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default PredictionChart;
