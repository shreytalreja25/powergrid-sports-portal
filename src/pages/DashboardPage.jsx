import React from "react";
import Header from "../components/Header";
import MetricsCard from "../components/MetricsCard";
import DashboardSection from "../components/DashboardSection";

const DashboardPage = () => {
  const metrics = [
    {
      title: "Women Participation",
      value: "45%",
      description: "+20.1% from last year",
      icon: "fas fa-female",
    },
    {
      title: "Total Medals",
      value: "54",
      description: "+19 from last year",
      icon: "fas fa-medal",
    },
    {
      title: "Regional Ranking",
      value: "2nd",
      description: "+1 position from last year",
      icon: "fas fa-trophy",
    },
    {
      title: "Uttam Awards",
      value: "12",
      description: "+3 from last year",
      icon: "fas fa-award",
    },
  ];

  return (
    <div className="container">
      {/* Header Section */}
      <Header
        title="Sports Portal"
        subtitle="Manage sports events, nominations, results, and achievements for regional and inter-organizational activities."
      />

      {/* Dashboard Section */}
      <DashboardSection
        title="Dashboard"
        description="Key performance metrics and statistics"
      >
        {/* Render Metrics Cards */}
        {metrics.map((metric, index) => (
          <div key={index} className="col-md-3 col-sm-6">
            <MetricsCard
              title={metric.title}
              value={metric.value}
              description={metric.description}
              icon={metric.icon}
            />
          </div>
        ))}
      </DashboardSection>
    </div>
  );
};

export default DashboardPage;
