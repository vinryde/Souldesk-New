import { AuroraHero } from "./components/futurastic-hero-section";
import Navbar from "./components/navbar";
import SectionHeader from "./components/sectionheader";
import ProblemDashboard from "./components/problembar";
import ProblemTwo from "./components/problemtwo";
import AttritionDriversPie from "./components/pieproblem";
import WorkModelBubbleChart from "./components/bubbleproblem";
import ProblemDough from "./components/problemdough";
import HRTechLineChart from "./components/hrline";
import TechBarriersChart from "./components/horiproblem";
import DotGrid from "./components/DotGrid";
import Ballpit from "./components/Ballpit";
import { BentoDemoOne } from "./components/newfeaturesbento";
import BasicAccordion from "./components/accordion-1";
import { ContactForm } from "./components/contact";
import NavBarDemo from "./components/menuone";

export default function Home() {
  return (
    

     <div className="h-[200vh]">
     
      <NavBarDemo/>
     <AuroraHero/>
     
     
     
     <SectionHeader
        title="The High Cost of a Revolving Door"
        subtitle=" Employee attrition in India isn't just a statistic; it's a significant financial drain impacting profitability and operational stability. The charts below visualize the scale of this problem across industries and the direct costs associated with replacing talent."
        align="center"
        className="mt-10"
      />
      <div className="relative">
     
      <ProblemDashboard/>
      <AttritionDriversPie/>
       
      
      </div>
      <div className="relative">
      
      <SectionHeader
        title="Keeping Talent Is the New Business Battleground"
        subtitle=" Despite widespread recognition of attrition risks, only certain company sizes show confidence in their retention strategies, exposing gaps that a wellness-driven solution could fill."
        align="center"
        className="mt-10 p-5"
        titleClassName="max-w-4xl text-center mx-auto"
        subtitleClassName="max-w-2xl text-center mx-auto"
      />
      <ProblemTwo/>
      </div>
      <SectionHeader
        title="The Rise of Flexibility as a Retention Strategy"
        subtitle=" Rigid models fuel attrition, while hybrid–flexible days are emerging as the dominant work model to enhance belonging and retention."
        align="center"
        className="mt-10 p-5"
        titleClassName="max-w-4xl text-center mx-auto"
        subtitleClassName="max-w-2xl text-center mx-auto"
      />
      <WorkModelBubbleChart/>
      <SectionHeader
        title="Top Drivers of Employee Experience"
        subtitle=" These graphs show employees prioritizing DEI and well-being first, ahead of career growth, leadership, and other traditional engagement drivers."
        align="center"
        className="mt-10 p-5"
        titleClassName="max-w-4xl text-center mx-auto"
        subtitleClassName="max-w-2xl text-center mx-auto"
      />
      <ProblemDough/>
      <SectionHeader
        title="Key Barriers to Effective Use of Technology"
        subtitle="Organizations face challenges such as skills gaps, poor data quality, limited data interpretation, resistance to adoption, and lack of adequate tools, all of which limit the full impact of technology."
        align="center"
        className="mt-10 p-5"
        titleClassName="max-w-4xl text-center mx-auto"
        subtitleClassName="max-w-2xl text-center mx-auto"
        />
       <TechBarriersChart/>
       <HRTechLineChart/>
       <SectionHeader
        title="The Proactive Solution: Holistic Wellness"
        subtitle="Instead of reactively managing departures, Soul Desk offers a strategic investment in holistic wellness that addresses the root causes of attrition. We foster a supportive culture that values employees' total well-being, encompassing their physical, mental, financial, and social health — including family support."
        align="center"
        className="mt-10 p-5"
        titleClassName="max-w-4xl text-center mx-auto"
        subtitleClassName="max-w-3xl text-center mx-auto"
        />
       <BentoDemoOne/>
       <SectionHeader
        title="Blueprint for an Impactful Platform"
        subtitle="To succeed, a B2B wellness platform must be more than a collection of features. It must be an integrated, intelligent, and engaging experience. Click each section to expand."
        align="center"
        className="mt-10 p-5"
        titleClassName="max-w-4xl text-center mx-auto"
        subtitleClassName="max-w-3xl text-center mx-auto"
        />
       <BasicAccordion/>
       <ContactForm/>
       
     
     
      


     </div>
  );
}
