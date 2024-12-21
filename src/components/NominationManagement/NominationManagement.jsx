import React, { useState } from "react";
import { NominationTable } from "./NominationTable";
import { NominationModal } from "./NominationModal";

export function NominationManagement() {
    const [selectedNomination, setSelectedNomination] = useState(null); // Holds the currently selected nomination
    const [isModalOpen, setIsModalOpen] = useState(false); // Controls modal visibility

    const handleManageClick = (nomination) => {
        setSelectedNomination(nomination); // Set the selected nomination
        setIsModalOpen(true); // Open the modal
    };

    const handleCloseModal = () => {
        setSelectedNomination(null); // Clear the selected nomination
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div className="container my-4">
            <h1>Manage Nominations</h1>
            <NominationTable onSelectNomination={handleManageClick} />

            {isModalOpen && (
                <NominationModal nomination={selectedNomination} onClose={handleCloseModal} />
            )}
        </div>
    );
}
