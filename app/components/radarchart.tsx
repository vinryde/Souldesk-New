"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Radar } from "react-chartjs-2";

// Register Radar chart components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface RadarChartProps {
  title: string;
  subtitle?: string;
  labels: string[];
  currentValues: number[];
  futureValues: number[];
}

const COLORS = {
  current: "rgba(255, 99, 132, 0.6)",
  future: "rgba(54, 162, 235, 0.6)",
};

const RadarChart: React.FC<RadarChartProps> = ({
  title,
  subtitle,
  labels,
  currentValues,
  futureValues,
}) => {
  const chartRef = useRef<any>(null);
  const [inView, setInView] = useState(false);

  // Intersection observer to animate only once on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (chartRef.current) {
      observer.observe(chartRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Currently Implemented",
        data: inView ? currentValues : currentValues.map(() => 0),
        backgroundColor: COLORS.current,
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Planned Implementation",
        data: inView ? futureValues : futureValues.map(() => 0),
        backgroundColor: COLORS.future,
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  const options: ChartOptions<"radar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: { color: "#374151", font: { size: 12, weight: 500 } },
      },
      tooltip: { enabled: true },
    },
    scales: {
      r: {
        angleLines: { color: "#f3f4f6" },
        grid: { color: "#e5e7eb" },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          color: "#6b7280",
          backdropColor: "transparent",
          stepSize: 20,
          font: { size: 11 },
          callback: (value) => `${value}%`,
        },
        pointLabels: {
          color: "#374151",
          font: { size: 12, weight: 500 },
        },
      },
    },
  };

  return (
    <div ref={chartRef} className="w-full rounded-2xl bg-white shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
      <div className="h-[500px]">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default RadarChart;
