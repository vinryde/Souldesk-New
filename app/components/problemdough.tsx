import DoughnutChart from "./doughnut";

export default function ProblemDough() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      
      <DoughnutChart
        title="Employee Experience Factors (Set 1)"
        subtitle="Percentage of respondents agreeing"
        labels={[
          "Mental health support",
          "Career growth",
          "Rewards & recognition",
          "Purpose-led organisation"
        ]}
        values={[90, 85, 65, 70]}
        unit="%"
      />

      <DoughnutChart
        title="Employee Experience Factors (Set 2)"
        subtitle="Percentage of respondents agreeing"
        labels={[
          "Positive culture",
          "Leadership DNA",
          "Flexible work arrangements",
          "DEI"
        ]}
        values={[90, 70, 80, 95]}
        unit="%"
      />
    </div>
  );
}
