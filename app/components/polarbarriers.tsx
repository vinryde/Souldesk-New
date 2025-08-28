import React from "react";
import PolarAreaChart from "./polararea";

const BarriersChart: React.FC = () => {
  const labels = [
    "Skills gap in HR",
    "Poor data quality",
    "Low data interpretation capability",
    "Resistance to adoption",
    "Lack of tools/technology",
  ];

  const values = [60, 55, 40, 40, 40]; // percentages from the image

  return (
    <PolarAreaChart
      title="Key Barriers to Effective Use of Technology"
      subtitle="Source: Future of Work Survey 2025"
      labels={labels}
      values={values}
    />
  );
};

export default BarriersChart;
