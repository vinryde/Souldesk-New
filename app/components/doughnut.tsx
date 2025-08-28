"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Doughnut chart components
ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  title: string;
  subtitle?: string;
  labels: string[];
  values: number[];
  unit?: string; // optional (%, ₹, $, etc.)
}

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C", "#F59E0B", "#10B981"];

const DoughnutChart: React.FC<DoughnutChartProps> = ({ 
  title, 
  subtitle, 
  labels, 
  values, 
  unit 
}) => {
  const chartRef = useRef<any>(null);
  const [inView, setInView] = useState(false);

  // Intersection observer for animation trigger
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
        label: title,
        data: inView ? values : values.map(() => 0), // animate from 0
        backgroundColor: values.map((_, i) => COLORS[i % COLORS.length]),
        borderWidth: 2,
        hoverOffset: 8,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: "easeOutQuart",
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#374151",
          font: { size: 12, weight: 500 },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw as number;
            return `${label}: ${value} ${unit ? unit : ""}`;
          },
        },
      },
    },
  };

  return (
    <div ref={chartRef} className="w-full rounded-2xl bg-white shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
      <div className="h-[350px]">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
