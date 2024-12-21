import React from "react";

const sampleNominations = [
  { id: 1, name: "John Doe", employeeNumber: "EMP001", sport: "Football", status: "Pending" },
  { id: 2, name: "Jane Smith", employeeNumber: "EMP002", sport: "Basketball", status: "Approved" },
  { id: 3, name: "Mike Johnson", employeeNumber: "EMP003", sport: "Cricket", status: "Declined" },
  { id: 4, name: "Sarah Williams", employeeNumber: "EMP004", sport: "Badminton", status: "Modified" },
];

export function NominationTable({ onSelectNomination }) {
  const getBadgeClass = (status) => {
    switch (status) {
      case "Pending":
        return "badge bg-dark";
      case "Approved":
        return "badge bg-success";
      case "Declined":
        return "badge bg-danger";
      case "Modified":
        return "badge bg-warning text-dark";
      default:
        return "badge bg-secondary";
    }
  };

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
                <span className={getBadgeClass(nomination.status)}>
                  {nomination.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-dark btn-sm"
                  onClick={() => onSelectNomination(nomination)}
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
