import Prism from "./Prismone";
import GradientText from "./GradientText";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center text-center overflow-hidden bg-[#ADE8F4]">
      {/* Prism Background */}
      <div className="absolute inset-0">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={2.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0.4}
          colorFrequency={1.2}
          noise={0.2}
          glow={1.2}
          suspendWhenOffscreen={true}
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-6xl px-6">
      <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="text-5xl font-sans">
         <span className="text-white"> Soul Desk</span>
          <br />Turn Attrition into Retention
          </GradientText>
        <p className="text-lg md:text-xl text-zinc-700 mb-8 max-w-3xl">
          High employee turnover is costing Indian companies more than just talent. 
          This interactive report explores the profound financial and operational burden of attrition 
          and presents a data-driven case for a holistic wellness platform as a strategic, high-ROI solution.
        </p>
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-lg hover:opacity-90 transition">
          Explore the Data
        </button>
      </div>

      {/* Gradient Overlay for readability */}
     
    </section>
  )
}