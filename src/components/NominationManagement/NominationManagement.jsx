import React, { useState } from "react";
import { NominationTable } from "./NominationTable";
import { NominationModal } from "./NominationModal";

export function NominationManagement() {
  const [selectedNomination, setSelectedNomination] = useState(null); // Holds the currently selected nomination
  const [isModalOpen, setIsModalOpen] = useState(false); // Controls modal visibility

  const handleManageClick = (nomination) => {
    console.log("Manage button clicked for nomination:", nomination); // Log when a nomination is selected
    setSelectedNomination(nomination); // Set the selected nomination
    setIsModalOpen(true); // Open the modal
    console.log("Triggering modal opening...");
  };

  const handleCloseModal = () => {
    console.log("Modal close button clicked"); // Log when modal close button is clicked
    setSelectedNomination(null); // Clear the selected nomination
    setIsModalOpen(false); // Close the modal
  };

  // Debugging: Log when the state changes
  React.useEffect(() => {
    console.log("Modal open state updated:", isModalOpen);
  }, [isModalOpen]);

  return (
    <div className="container my-4">
      <h1>Manage Nominations</h1>
      <NominationTable onSelectNomination={handleManageClick} />

      {/* Render the modal only when isModalOpen is true */}
      {isModalOpen && (
        <NominationModal nomination={selectedNomination} onClose={handleCloseModal} />
      )}
    </div>
  );
}
