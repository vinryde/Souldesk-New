import React, { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

type QuoteProps = {
  children: ReactNode;
};

const Quote = ({ children }: QuoteProps) => {
  return (
    <ScrollReveal
      baseOpacity={0}
      enableBlur={true}
      baseRotation={5}
      blurStrength={10}
      textClassName = "text-xl"
    >
      {children}
    </ScrollReveal>
  );
};

export default Quote;
