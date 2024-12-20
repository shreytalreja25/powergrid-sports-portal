import React from "react";

const DashboardSection = ({ title, description, children }) => {
  return (
    <section className="my-5">
      <div className="text-center mb-4">
        <h2 className="h1">{title}</h2>
        <p className="text-muted">{description}</p>
      </div>
      <div className="row g-4">{children}</div>
    </section>
  );
};

export default DashboardSection;
