import React from "react";
import ResultsHeader from "../components/results/ResultsHeader";
import ResultsFilter from "../components/results/ResultsFilter";
import ResultsTable from "../components/results/ResultsTable";
import ResultsSummary from "../components/results/ResultsSummary";

const ResultsPage = () => {
  return (
    <div className="container mx-auto py-10 my-4">
      <ResultsHeader />
      <div className="grid gap-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <ResultsFilter />
        </div>
        <div className="md:col-span-3">
          <ResultsSummary />
          <ResultsTable />
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
