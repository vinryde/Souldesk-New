"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineChartProps {
  title: string;
  subtitle?: string;
  labels: string[];
  currentValues: number[];
  futureValues: number[];
}

const COLORS = {
  current: "rgba(255, 99, 132, 0.8)", // orange/red tone (same as bar)
  future: "rgba(54, 162, 235, 0.8)", // blue/gray tone (same as bar)
};

const LineChart: React.FC<LineChartProps> = ({
  title,
  subtitle,
  labels,
  currentValues,
  futureValues,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null); // DOM element ref
  const chartRef = useRef<any>(null); // Chart.js instance ref
  const [inView, setInView] = useState(false);

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

    if (containerRef.current) {
      observer.observe(containerRef.current); // Observe DOM node, not chart instance
    }

    return () => observer.disconnect();
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Currently Implemented",
        data: inView ? currentValues : currentValues.map(() => 0),
        borderColor: COLORS.current,
        backgroundColor: COLORS.current,
        tension: 0.4,
        fill: false,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: "Planned Implementation",
        data: inView ? futureValues : futureValues.map(() => 0),
        borderColor: COLORS.future,
        backgroundColor: COLORS.future,
        tension: 0.4,
        fill: false,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: { color: "#374151", font: { size: 12, weight: 500 } },
      },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        ticks: { color: "#6b7280", font: { size: 11, weight: 500 } },
        grid: { color: "#f3f4f6" },
      },
      y: {
        ticks: {
          color: "#6b7280",
          font: { size: 11 },
          callback: (value) => `${value}%`,
        },
        grid: { color: "#e5e7eb" },
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div ref={containerRef} className="w-full rounded-2xl bg-white shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
      <div className="h-[400px]">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
