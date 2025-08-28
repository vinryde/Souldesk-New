import LineChart from "./linechart";

export default function HRTechLineChart() {
  return (
    <div className="p-6">
      <LineChart
        title="HR Technology Adoption: Current vs Future"
        subtitle="Survey data comparing current implementation to planned adoption levels across HR functions."
        labels={[
          "Recruitment",
          "Onboarding",
          "L&D",
          "Performance Management",
          "Employee Engagement",
        ]}
        currentValues={[80, 70, 60, 55, 70]}
        futureValues={[95, 90, 80, 90, 95]}
      />
    </div>
  );
}
