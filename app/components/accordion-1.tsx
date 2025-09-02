import { Accordion } from "@ark-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";

export default function BasicAccordion() {
  const items = [
    {
      id: "integrated_holistic_offerings",
      title: "Integrated Holistic Offerings",
      content: "Seamlessly combine physical, mental, financial, and social wellness programs. This includes gamified health challenges, one-on-one coaching, mental health support, financial literacy tools, and community-building activities to address the employee as a whole person."
    },
    {
      id: "comprehensive_family_benefits",
      title: "Comprehensive Family Benefits",
      content: "Extending benefits to families, including group health/life insurance and specialized support for parenthood (nutrition, mental health, coaching). This demonstrates a deep commitment that fosters unparalleled loyalty and retention."
    },
    {
      id: "technology_personalization",
      title: "Technology & Personalization",
      content: "We leverage cutting-edge technology to deliver scalable, personalized wellness plans and robust analytics. Our analytics dashboard helps HR leaders track engagement, demonstrate ROI, and gain insights for improvement."
    },
    {
      id: "engaging_culturally_relevant_experience",
      title: "Engaging & Culturally Relevant Experience",
      content: "Ensure high adoption with a mobile-first design, gamification, peer recognition, and culturally sensitive activities. The platform should be fun, accessible, and integrated into the daily workflow."
    }
  ];
  

  return (
    <Accordion.Root
      defaultValue={["react"]}
      collapsible
      className="w-full max-w-4xl mx-auto bg-linear-to-br bg-[#fceef5]/40 backdrop-blur-3xl dark:bg-[#fceef5]/40 rounded-xl"
    >
      {items.map((item) => (                 
        <Accordion.Item
          key={item.id}
          value={item.id}
          className="group border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
        >
          <Accordion.ItemTrigger className="w-full text-lg px-4 py-3 flex items-center justify-between text-left hover:bg-linear-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-200">
            <span className="font-medium text-gray-900 dark:text-white">
              {item.title}
            </span>
            <Accordion.ItemIndicator className="ml-2 transition-transform duration-200 data-[state=open]:rotate-180">
              <ChevronDownIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </Accordion.ItemIndicator>                  
          </Accordion.ItemTrigger>
          <Accordion.ItemContent className="px-4 pb-3 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            <div className="pt-3 font-serif">{item.content}</div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
