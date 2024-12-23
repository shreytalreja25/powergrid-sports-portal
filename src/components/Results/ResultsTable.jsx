import React, { useState } from "react";
import ResultDetailsModal from "./ResultDetailsModal";

const sampleResults = [
  { id: 1, event: "Men's 100m Sprint", sport: "Athletics", gold: "John Doe", silver: "Mike Smith", bronze: "Tom Brown", date: "2024-03-15" },
  { id: 2, event: "Women's Basketball", sport: "Basketball", gold: "Team A", silver: "Team B", bronze: "Team C", date: "2024-03-16" },
  { id: 3, event: "Men's Cricket", sport: "Cricket", gold: "Team X", silver: "Team Y", bronze: "Team Z", date: "2024-03-17" },
  { id: 4, event: "Women's Badminton Singles", sport: "Badminton", gold: "Jane Doe", silver: "Sarah Johnson", bronze: "Emily Davis", date: "2024-03-18" },
];

const ResultsTable = () => {
  const [selectedResult, setSelectedResult] = useState(null);

  return (
    <>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Event</th>
            <th>Sport</th>
            <th>Gold</th>
            <th>Silver</th>
            <th>Bronze</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sampleResults.map((result) => (
            <tr key={result.id}>
              <td>{result.event}</td>
              <td>{result.sport}</td>
              <td>
                <span className="badge bg-yellow-500">{result.gold}</span>
              </td>
              <td>
                <span className="badge bg-gray-300">{result.silver}</span>
              </td>
              <td>
                <span className="badge bg-orange-500">{result.bronze}</span>
              </td>
              <td>{result.date}</td>
              <td>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => setSelectedResult(result)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedResult && (
        <ResultDetailsModal
          result={selectedResult}
          onClose={() => setSelectedResult(null)}
        />
      )}
    </>
  );
};

export default ResultsTable;
