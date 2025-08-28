"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

interface PolarAreaChartProps {
  title: string;
  subtitle?: string;
  labels: string[];
  values: number[];
}

const COLORS = [
 "#13FFAA", "#1E67C6", "#CE84CF", "#DD335C" // blue
];

const PolarAreaChart: React.FC<PolarAreaChartProps> = ({
  title,
  subtitle,
  labels,
  values,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
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
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Key Barriers (%)",
        data: inView ? values : values.map(() => 0),
        backgroundColor: COLORS,
        borderColor: COLORS.map((c) => c.replace("0.8", "1")),
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"polarArea"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2000,
      easing: "easeInOutSine",
      loop: false, // subtle looping
    },
    plugins: {
      legend: {
        position: "right",
        labels: { color: "#374151", font: { size: 12, weight: 500 } },
      },
      tooltip: { enabled: true },
    },
    scales: {
      r: {
        ticks: {
          color: "#6b7280",
          backdropColor: "transparent",
          callback: (value) => `${value}%`,
        },
        grid: { color: "#e5e7eb" },
        angleLines: { color: "#f3f4f6" },
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
        <PolarArea data={data} options={options} />
      </div>
    </div>
  );
};

export default PolarAreaChart;
