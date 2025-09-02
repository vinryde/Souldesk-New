"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  ChartOptions,
} from "chart.js";
import { Pie } from "react-chartjs-2";

// Register Chart.js components for Pie chart
ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface PieGraphProps {
  title: string;
  subtitle?: string;
  labels: string[];
  values: number[];
  unit?: string; // optional (%, ₹, $, etc.)
}

const COLORS = ["#BDE0FE", "#A2D2FF", "#90E0EF", "#48CAE4"]
;

const PieGraph: React.FC<PieGraphProps> = ({ title, subtitle, labels, values, unit }) => {
  const chartRef = useRef<any>(null);
  const [inView, setInView] = useState(false);

  // Intersection observer to trigger animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect(); // only animate once
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
        label: title,
        data: inView ? values : values.map(() => 0),
        backgroundColor: labels.map((_, i) => COLORS[i % COLORS.length]),
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2500,
      easing: "easeOutQuart",
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#374151",
          font: { size: 12, weight: 500 },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw as number;
            return unit ? `${value}${unit}` : String(value);
          },
        },
      },
    },
  };

  return (
    <div
      ref={chartRef}
      className="w-full rounded-2xl bg-[#fceef5]/40 backdrop-blur-3xl shadow-md hover:bg-linear-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200 p-6"
    >
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
      <div className="h-[350px]">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieGraph;
