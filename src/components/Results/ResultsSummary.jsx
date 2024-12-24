import React from "react";
import { FaMedal, FaTrophy, FaUsers, FaCalendarAlt, FaStar } from "react-icons/fa";

const ResultsSummary = () => {
  const summaryData = {
    totalEvents: 25,
    totalParticipants: 150,
    totalGold: 50,
    totalSilver: 45,
    totalBronze: 40,
  };

  return (
    <div
      className="p-5 rounded shadow mb-4"
      style={{
        background: "linear-gradient(to bottom right, #4e8cff, #34e89e)",
        color: "white",
      }}
    >
      <h2 className="text-center mb-5">Results Summary</h2>
      <div className="row justify-content-center text-center">
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div
            className="p-4 rounded shadow-lg"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              color: "white",
            }}
          >
            <FaCalendarAlt size={36} className="mb-3" />
            <h4 className="mb-0">{summaryData.totalEvents}</h4>
            <p className="text-light">Total Events</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div
            className="p-4 rounded shadow-lg"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              color: "white",
            }}
          >
            <FaUsers size={36} className="mb-3" />
            <h4 className="mb-0">{summaryData.totalParticipants}</h4>
            <p className="text-light">Participants</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div
            className="p-4 rounded shadow-lg"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              color: "white",
            }}
          >
            <FaTrophy size={36} className="mb-3 text-warning" />
            <h4 className="mb-0">{summaryData.totalGold}</h4>
            <p className="text-light">Gold Medals</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div
            className="p-4 rounded shadow-lg"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              color: "white",
            }}
          >
            <FaStar size={36} className="mb-3 text-secondary" />
            <h4 className="mb-0">{summaryData.totalSilver}</h4>
            <p className="text-light">Silver Medals</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div
            className="p-4 rounded shadow-lg"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              color: "white",
            }}
          >
            <FaMedal size={36} className="mb-3 text-warning" />
            <h4 className="mb-0">{summaryData.totalBronze}</h4>
            <p className="text-light">Bronze Medals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSummary;
