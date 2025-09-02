
 import{BrainIcon, Activity, HandCoins, HandHeart, BookUser } from "lucide-react";  
  import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
  
  const features = [
    {
      Icon: BookUser,
      name: "The Family Factor",
      description:
        "Extending benefits to families is a critical differentiator. Insurance and life event support (like parenthood) show deep commitment, especially boosting retention among female talent.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: BrainIcon,
      name: "Mental Wellness",
      description:
        "Frictionless access to coaching, therapy, and mindfulness tools to combat stress and burnout.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: Activity,
      name: "Physical Wellness",
      description:
        "Gamified challenges, fitness sessions, and nutrition tracking to boost health and morale.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: HandCoins,
      name: "Financial Wellness",
      description:
        "Literacy courses and budgeting tools to reduce financial stress and improve stability.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: HandHeart,
      name: "Social Wellness",
      description:
        "Events and recognition programs that foster community and belonging.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];
  
  
  function BentoDemoOne() {
    return (
      <BentoGrid className="lg:grid-rows-3 p-6">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    );
  }
  
  export { BentoDemoOne };