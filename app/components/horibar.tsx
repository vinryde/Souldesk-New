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

const COLORS = ["#BDE0FE", "#A2D2FF", "#90E0EF", "#48CAE4"];

const HoriGraph: React.FC<GraphProps> = ({ title, subtitle, labels, values, unit }) => {
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
    indexAxis: "y", // 👈 makes the chart horizontal
    animation: {
      duration: 3200,
      easing: "easeOutQuart",
    },
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            return unit ? `${value}${unit}` : String(value);
          },
        },
      },
    },
    scales: {
      x: {
        grid: { color: "#f3f4f6" }, // x = value axis now
        ticks: {
          color: "#6b7280",
          callback: function (tickValue) {
            return unit ? `${tickValue}${unit}` : String(tickValue);
          },
        },
      },
      y: {
        grid: { display: false }, // y = category axis
        ticks: {
          color: "#374151",
          font: { size: 12, weight: 500 },
        },
      },
    },
  };

  return (
    <div
      ref={chartRef}
      className="w-full rounded-2xl bg-[#fceef5]/40 backdrop-blur-3xl hover:bg-linear-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200 p-6"
    >
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
      <div className="h-[350px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default HoriGraph;
