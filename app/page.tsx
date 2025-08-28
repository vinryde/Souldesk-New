import { AuroraHero } from "./components/futurastic-hero-section";
import Navbar from "./components/navbar";
import SectionHeader from "./components/sectionheader";
import ProblemDashboard from "./components/problembar";
import ProblemTwo from "./components/problemtwo";
import AttritionDriversPie from "./components/pieproblem";
import WorkModelBubbleChart from "./components/bubbleproblem";
import ProblemDough from "./components/problemdough";
import HRTechLineChart from "./components/hrline";
import BarriersChart from "./components/polarbarriers";


export default function Home() {
  return (
    

     <div className="h-[200vh]">
      <Navbar/>
     <AuroraHero/>
     <SectionHeader
        title="The High Cost of a Revolving Door"
        subtitle=" Employee attrition in India isn't just a statistic; it's a significant financial drain impacting profitability and operational stability. The charts below visualize the scale of this problem across industries and the direct costs associated with replacing talent."
        align="center"
      />
      <ProblemDashboard/>
      <AttritionDriversPie/>
      <SectionHeader
        title="Keeping Talent Is the New Business Battleground"
        subtitle=" Despite widespread recognition of attrition risks, only certain company sizes show confidence in their retention strategies, exposing gaps that a wellness-driven solution could fill."
        align="center"
        className="mt-10 p-5"
        titleClassName="max-w-4xl text-center mx-auto"
        subtitleClassName="max-w-2xl text-center mx-auto"
      />
      <ProblemTwo/>
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
      <HRTechLineChart/>
      <BarriersChart/>
     
      


     </div>
  );
}
