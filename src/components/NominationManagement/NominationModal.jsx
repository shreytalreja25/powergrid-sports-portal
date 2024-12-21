import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export function NominationModal({ nomination, onClose }) {
  console.log("Modal rendered with nomination:", nomination); // Log when modal is rendered

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
    console.log("Status changed to:", newStatus); // Log status change
    setStatus(newStatus);
  };

  const handleSave = () => {
    console.log("Saving changes:", { status, remarks, travelPlan }); // Log save action
    onClose();
  };

  return (
    <Modal show onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Manage Nomination: {nomination.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label className="form-label">Year</label>
            <input
              type="text"
              className="form-control"
              value={travelPlan.year}
              onChange={(e) =>
                setTravelPlan({ ...travelPlan, year: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Arrival Date</label>
            <input
              type="date"
              className="form-control"
              value={travelPlan.arrivalDate}
              onChange={(e) =>
                setTravelPlan({ ...travelPlan, arrivalDate: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Departure Date</label>
            <input
              type="date"
              className="form-control"
              value={travelPlan.departureDate}
              onChange={(e) =>
                setTravelPlan({ ...travelPlan, departureDate: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Remarks</label>
            <textarea
              className="form-control"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Status</label>
            <div>
              <Button variant="success" onClick={() => handleStatusChange("Approved")}>
                Approve
              </Button>
              <Button variant="danger" onClick={() => handleStatusChange("Declined")}>
                Decline
              </Button>
              <Button variant="warning" onClick={() => handleStatusChange("Modified")}>
                Modify
              </Button>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
