import Graph from "./bargraph"

export default function ProblemTwo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <Graph
        title="Confidence in Retention Strategy"
        subtitle="Employee headcount vs. confidence in retention."
        labels={[
          "Less than 500",
          "500–1,000",
          "1,001–5,000",
          "5,001–10,000",
          "Greater than 10,000",
        ]}
        values={[35, 5, 15, 5, 25]}
        unit="%"
      />

      <Graph
        title="Actively Tailoring Their EVP"
        subtitle="Employee headcount vs. EVP tailoring activity."
        labels={[
          "Less than 500",
          "500–1,000",
          "1,001–5,000",
          "5,001–10,000",
          "Greater than 10,000",
        ]}
        values={[30, 5, 10, 5, 20]}
        unit="%"
      />
    </div>
  );
}
