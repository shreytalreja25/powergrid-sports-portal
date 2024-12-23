import React from "react";

const ResultsSummary = () => {
  const summaryData = {
    totalEvents: 25,
    totalParticipants: 150,
    totalGold: 50,
    totalSilver: 45,
    totalBronze: 40,
  };

  return (
    <div className="bg-light p-4 rounded shadow mb-4">
      <h2 className="text-center mb-4">Results Summary</h2>
      <div className="row text-center">
        <div className="col-md-2 col-6">
          <h4 className="mb-0">{summaryData.totalEvents}</h4>
          <p className="text-muted">Total Events</p>
        </div>
        <div className="col-md-2 col-6">
          <h4 className="mb-0">{summaryData.totalParticipants}</h4>
          <p className="text-muted">Participants</p>
        </div>
        <div className="col-md-2 col-4">
          <h4 className="mb-0">{summaryData.totalGold}</h4>
          <p className="text-warning">Gold Medals</p>
        </div>
        <div className="col-md-2 col-4">
          <h4 className="mb-0">{summaryData.totalSilver}</h4>
          <p className="text-muted">Silver Medals</p>
        </div>
        <div className="col-md-2 col-4">
          <h4 className="mb-0">{summaryData.totalBronze}</h4>
          <p className="text-secondary">Bronze Medals</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsSummary;
