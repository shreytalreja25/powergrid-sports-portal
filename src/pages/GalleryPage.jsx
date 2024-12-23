import React from "react";
import LiveStream from "../components/gallery/LiveStream";
import PredictionBoxes from "../components/gallery/PredictionBoxes";

const GalleryPage = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Live Game Broadcast and AI Predictions</h1>
      <div className="row">
        {/* Live Stream */}
        <div className="col-md-8 mb-4">
          <LiveStream />
        </div>
        {/* Prediction Boxes */}
        <div className="col-md-4">
          <PredictionBoxes />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
