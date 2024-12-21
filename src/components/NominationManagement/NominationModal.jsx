import React, { useState } from "react";

export function NominationModal({ nomination, onClose }) {
  const [status, setStatus] = useState(nomination.status);
  const [remarks, setRemarks] = useState("");
  const [travelPlan, setTravelPlan] = useState({
    year: new Date().getFullYear(),
    arrivalDate: "",
    departureDate: "",
    modeOfTravel: "",
    trainNumber: "",
    flightDetails: "",
    timings: "",
    otherDetails: "",
  });

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const handleSave = () => {
    console.log("Saving changes:", { status, remarks, travelPlan });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Manage Nomination: {nomination.name}</h2>
        <div>
          <label>Year</label>
          <input
            type="text"
            value={travelPlan.year}
            onChange={(e) => setTravelPlan({ ...travelPlan, year: e.target.value })}
          />
          <label>Arrival Date</label>
          <input
            type="date"
            value={travelPlan.arrivalDate}
            onChange={(e) => setTravelPlan({ ...travelPlan, arrivalDate: e.target.value })}
          />
          <label>Departure Date</label>
          <input
            type="date"
            value={travelPlan.departureDate}
            onChange={(e) => setTravelPlan({ ...travelPlan, departureDate: e.target.value })}
          />
          <label>Mode of Travel</label>
          <input
            type="text"
            value={travelPlan.modeOfTravel}
            onChange={(e) => setTravelPlan({ ...travelPlan, modeOfTravel: e.target.value })}
          />
          <label>Train Number</label>
          <input
            type="text"
            value={travelPlan.trainNumber}
            onChange={(e) => setTravelPlan({ ...travelPlan, trainNumber: e.target.value })}
          />
          <label>Flight Details</label>
          <input
            type="text"
            value={travelPlan.flightDetails}
            onChange={(e) => setTravelPlan({ ...travelPlan, flightDetails: e.target.value })}
          />
          <label>Timings</label>
          <input
            type="text"
            value={travelPlan.timings}
            onChange={(e) => setTravelPlan({ ...travelPlan, timings: e.target.value })}
          />
          <label>Other Details</label>
          <textarea
            value={travelPlan.otherDetails}
            onChange={(e) => setTravelPlan({ ...travelPlan, otherDetails: e.target.value })}
          />
          <label>Status</label>
          <div>
            <button onClick={() => handleStatusChange("Approved")}>Approve</button>
            <button onClick={() => handleStatusChange("Declined")}>Decline</button>
            <button onClick={() => handleStatusChange("Modified")}>Modify</button>
          </div>
          <label>Remarks</label>
          <textarea value={remarks} onChange={(e) => setRemarks(e.target.value)} />
        </div>
        <div>
          <button onClick={handleSave}>Save Changes</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
