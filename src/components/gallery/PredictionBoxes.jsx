import React from "react";
import PredictionChart from "./PredictionChart";

const PredictionBoxes = () => {
  const predictions = [
    { title: "Team A Prediction", data: [70, 25, 5] }, // [Win %, Loss %, Draw %]
    { title: "Team B Prediction", data: [30, 50, 20] },
    { title: "Overall Match Prediction", data: [40, 35, 25] },
  ];

  return (
    <div className="row">
      {predictions.map((prediction, index) => (
        <div className="col-12 mb-4" key={index}>
          <PredictionChart title={prediction.title} data={prediction.data} />
        </div>
      ))}
    </div>
  );
};

export default PredictionBoxes;
