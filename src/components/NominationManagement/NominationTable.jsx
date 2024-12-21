import React from "react";

const sampleNominations = [
  { id: 1, name: "John Doe", employeeNumber: "EMP001", sport: "Football", status: "Pending" },
  { id: 2, name: "Jane Smith", employeeNumber: "EMP002", sport: "Basketball", status: "Approved" },
  { id: 3, name: "Mike Johnson", employeeNumber: "EMP003", sport: "Cricket", status: "Declined" },
  { id: 4, name: "Sarah Williams", employeeNumber: "EMP004", sport: "Badminton", status: "Modified" },
];

export function NominationTable({ onSelectNomination }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">Employee Number</th>
            <th scope="col">Name</th>
            <th scope="col">Sport</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {sampleNominations.map((nomination) => (
            <tr key={nomination.id}>
              <td>{nomination.employeeNumber}</td>
              <td>{nomination.name}</td>
              <td>{nomination.sport}</td>
              <td>
                <span className="badge bg-secondary">{nomination.status}</span>
              </td>
              <td>
                <button
                  className="btn btn-dark btn-sm"
                  onClick={() => {
                    console.log("Manage button clicked for:", nomination); // Log button click
                    onSelectNomination(nomination);
                  }}
                >
                  Manage
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
