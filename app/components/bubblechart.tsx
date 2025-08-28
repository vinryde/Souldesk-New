"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  BubbleController,
} from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, BubbleController, Title, Tooltip, Legend);

interface BubbleGraphProps {
  title: string;
  subtitle?: string;
  datasetLabel: string;
  data: { x: number; y: number; r: number; label: string; backgroundColor?: string }[];
  unitX?: string;
  unitY?: string;
  customLabels?: string[];
}

const BubbleGraph: React.FC<BubbleGraphProps> = ({ 
  title, 
  subtitle, 
  datasetLabel = "Dataset", 
  data, 
  unitX, 
  unitY,
  customLabels
}) => {
  const chartRef = useRef<any>(null);
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
    if (chartRef.current) {
      observer.observe(chartRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const chartData = {
    labels: customLabels || data.map(d => d.label), // <-- category labels on X
    datasets: [
      {
        label: datasetLabel,
        data: inView 
          ? data.map((d, i) => ({ x: i, y: d.y, r: d.r, label: d.label }))
          : data.map((d, i) => ({ x: i, y: d.y, r: 0, label: d.label })), // animate radius
        backgroundColor: data.map((d) => d.backgroundColor || "#1E67C6"),
      },
    ],
  };

  const options: ChartOptions<"bubble"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => {
            const raw = context.raw as any;
            return `${raw.label}: ${raw.y}${unitY || ""}`;
          },
        },
      },
    },
    scales: {
      x: {
        type: "category", // <-- force category axis (only labels)
        labels: customLabels || data.map(d => d.label),
        title: { display: !!unitX, text: unitX },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        title: { display: !!unitY, text: unitY },
      },
    },
  };

  return (
    <div ref={chartRef} className="w-full rounded-2xl bg-white shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
      <div className="h-[400px]">
        <Bubble data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BubbleGraph;
