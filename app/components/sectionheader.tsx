"use client";
import React from "react";
import clsx from "clsx";

interface SectionHeaderProps {
  title: string;                // main heading
  subtitle?: string;            // optional subheading
  align?: "left" | "center";    // alignment control
  className?: string;           // extra styles from parent
  titleClassName?: string;      // custom styles for title
  subtitleClassName?: string;   // custom styles for subtitle
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = "center",
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}) => {
  return (
    <div
      className={clsx(
        "max-w-4xl mx-auto mb-12 px-4",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2
        className={clsx(
          "text-3xl md:text-4xl font-bold text-gray-900",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-3 text-lg md:text-xl text-gray-600",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
