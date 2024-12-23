import React from "react";
import LiveStream from "../components/gallery/LiveStream"; // The live stream component
import PredictionBoxes from "../components/gallery/PredictionBoxes"; // The prediction chart component

const GalleryPage = () => {
  return (
    <div className="d-flex flex-column vh-100" style={{ padding: "20px" }}>
      <h2 className="text-center mb-4">Live Game Broadcast and AI Predictions</h2>
      <div className="d-flex flex-row h-100">
        {/* Live Stream Section */}
        <div
          className="flex-grow-1 bg-light shadow-lg me-3"
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            height: "100%",
          }}
        >
          <LiveStream />
        </div>

        {/* Predictions Section */}
        <div
          className="d-flex flex-column justify-content-start"
          style={{ width: "300px", gap: "16px" }}
        >
          <PredictionBoxes />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
