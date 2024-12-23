import React, { useState } from "react";

const ResultsFilter = () => {
  const [year, setYear] = useState("2024");
  const [region, setRegion] = useState("");
  const [sport, setSport] = useState("");

  const handleFilter = () => {
    console.log("Filtering with:", { year, region, sport });
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Filter Results</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="year" className="form-label">
            Year
          </label>
          <input
            id="year"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Enter year"
          />
        </div>
        <div>
          <label htmlFor="region" className="form-label">
            Region
          </label>
          <select
            id="region"
            className="form-select"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="" disabled>
              Select region
            </option>
            <option value="nr1">NR-1</option>
            <option value="nr2">NR-2</option>
            <option value="cc">CC</option>
          </select>
        </div>
        <div>
          <label htmlFor="sport" className="form-label">
            Sport
          </label>
          <select
            id="sport"
            className="form-select"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
          >
            <option value="" disabled>
              Select sport
            </option>
            <option value="cricket">Cricket</option>
            <option value="football">Football</option>
            <option value="basketball">Basketball</option>
            <option value="badminton">Badminton</option>
          </select>
        </div>
        <button className="btn btn-primary w-100" onClick={handleFilter}>
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default ResultsFilter;
