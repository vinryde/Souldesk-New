"use client";

import React from "react";
import BubbleGraph from "./bubblechart";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C", "#F59E0B"];

const WorkModelBubbleChart = () => {
  // Survey data
  const workModels = [
    { label: "Fully on-site", value: 15 },
    { label: "Hybrid – fixed days", value: 35 },
    { label: "Hybrid – flexible days", value: 45 },
    { label: "Mostly remote", value: 5 },
  ];

  // Keep x as numeric index for the chart
  const data = workModels.map((model, index) => ({
    x: index + 1,       // numeric positions
    y: model.value,     // percentage on Y axis
    r: model.value / 2, // bubble size scaled
    label: model.label,
    backgroundColor: COLORS[index % COLORS.length],
  }));

  return (
    <div className="p-6">
      <BubbleGraph
        title="Work Models Adoption"
        subtitle="Survey findings on employee work preferences"
        datasetLabel="Work Models"
        data={data}
        unitX="Work Models"
        unitY="% of Respondents"
        customLabels={workModels.map(m => m.label)} // these labels will map 1→Fully on-site, 2→Hybrid-fixed...
      />
    </div>
  );
};

export default WorkModelBubbleChart;
