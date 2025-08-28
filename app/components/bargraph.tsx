"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface GraphProps {
  title: string;
  subtitle?: string;
  labels: string[];
  values: number[];
  unit?: string; // optional (%, ₹, $, etc.)
}

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Graph: React.FC<GraphProps> = ({ title, subtitle, labels, values, unit }) => {
  const chartRef = useRef<any>(null);
  const [inView, setInView] = useState(false);

  // Intersection observer to trigger animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect(); // run animation only once
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
        data: inView ? values : values.map(() => 0), // start from 0, animate to real values
        backgroundColor: values.map((_, i) => COLORS[i % COLORS.length]),
        borderRadius: 6,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 3200, // animation speed (ms)
      easing: "easeOutQuart", // smooth easing
    },
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            return unit ? `${unit}${value}` : String(value);
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#374151",
          font: { size: 12, weight: 500 },
        },
      },
      y: {
        grid: { color: "#f3f4f6" },
        ticks: {
          color: "#6b7280",
          callback: function (tickValue) {
            return unit ? `${unit}${tickValue}` : String(tickValue);
          },
        },
      },
    },
  };

  return (
    <div
      ref={chartRef}
      className="w-full rounded-2xl bg-white shadow-md p-6"
    >
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
      <div className="h-[350px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Graph;
