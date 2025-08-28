import Graph from "./bargraph"

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <Graph
        title="Attrition Rates by Industry (2024)"
        subtitle="Hover over bars to see precise attrition rates. Rates above 20% often signal systemic issues."
        labels={[
          "E-commerce",
          "Prof. Services",
          "IT",
          "Financial Svcs",
          "Hi-Tech",
          "Engineering",
          "Chemicals",
          "Automotive",
          "Mining",
        ]}
        values={[29, 25, 25, 24, 21, 14, 13, 12, 8]}
        unit="%"
      />

      <Graph
        title="Talent Acquisition Costs Per Hire"
        subtitle="The cost to replace an employee escalates dramatically with seniority and specialization."
        labels={["Junior-Mid", "Senior/Niche", "IT & Tech", "BFSI", "Leadership"]}
        values={[50000, 100000, 80000, 120000, 200000]}
        unit="₹"
      />
    </div>
  );
}
