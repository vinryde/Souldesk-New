"use client";
import { Stars, PointMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#BDE0FE", "#B5EAD7", "#90E0EF", "#48CAE4"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #f5f5dc 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-[100vh] place-content-center overflow-hidden bg-[#f5f5dc] px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="max-w-3xl bg-gradient-to-br from-gray-700 to-gray-400 bg-clip-text text-center text-5xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Soul Desk{" "}
          <span className="block text-xl bg-gradient-to-br from-gray-700 to-gray-400 bg-clip-text">
            Turn Attrition into Retention
          </span>
        </h1>
        <p className="my-3 max-w-3xl text-center text-sm md:text-md bg-gradient-to-br from-gray-800 to-gray-600 bg-clip-text font-medium text-transparent">
          High employee turnover is costing Indian companies more than just
          talent. This interactive report explores the profound financial and
          operational burden of attrition and presents a data-driven case for a
          holistic wellness platform as a strategic, high-ROI solution.
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-xl px-4 py-2 text-black transition-colors hover:bg-gray-950/50 hover:text-white"
        >
          Explore the Data
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>

      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        
      </div>

      {/* Curved Bracket Holding Hero Section */}
      <div className="absolute bottom-0 left-0 right-0 z-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
  
          {/* Flipped curve: opens upward */}
          <path
            fill="transparent"
            d="M0,0 Q720,320 1440,0 L1440,320 L0,320 Z"
          ></path>
          
        </svg>
      </div>
    </motion.section>
  );
};
