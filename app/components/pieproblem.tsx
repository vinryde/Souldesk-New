"use client";

import PieGraph from "./piegraph";

export default function AttritionDriversPie() {
  return (
    <div className="p-6">
      <PieGraph
        title="Top Drivers of Attrition"
        subtitle="Survey respondents cited these as the main reasons for attrition"
        labels={[
          "Return to office",
          "Compensation expectations",
          "Better market opportunities",
        ]}
        values={[12, 23, 27]}
        unit="%"
      />
    </div>
  );
}
