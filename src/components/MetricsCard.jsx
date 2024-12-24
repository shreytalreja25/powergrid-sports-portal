import React from "react";

const MetricsCard = ({ title, value, description, icon }) => {
  return (
    <div className="card text-center shadow-sm">
      <div className="card-body">
        <div className="mb-3">
          <i className={`${icon} fa-3x text-primary`}></i>
        </div>
        <h3 className="card-title">{title}</h3>
        <h2 className="fw-bold">{value}</h2>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  );
};

export default MetricsCard;
