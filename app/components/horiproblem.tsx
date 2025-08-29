import React from "react";
import HoriGraph from "./horibar"; // import the horizontal Graph component

const TechBarriersChart = () => {
  const labels = [
    "Skills gap in HR",
    "Poor data quality",
    "Low data interpretation capability",
    "Resistance to adoption",
    "Lack of tools/technology",
  ];

  const values = [60, 55, 40, 40, 40];

  return (
    <div className="p-6">
    <HoriGraph
      title="Key barriers to effective use of technology"
      subtitle="Future of Work Survey 2025"
      labels={labels}
      values={values}
      unit="%"
    />
    </div>
  );
};

export default TechBarriersChart;
