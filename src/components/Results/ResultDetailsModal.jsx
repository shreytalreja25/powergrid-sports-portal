import React from "react";

const ResultDetailsModal = ({ result, onClose }) => {
  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{result.event} Results</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p><strong>Sport:</strong> {result.sport}</p>
            <p><strong>Date:</strong> {result.date}</p>
            <p><strong>Gold:</strong> {result.gold}</p>
            <p><strong>Silver:</strong> {result.silver}</p>
            <p><strong>Bronze:</strong> {result.bronze}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDetailsModal;
