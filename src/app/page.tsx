import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Navigation from "@/components/Navigation";
import EraSection from "@/components/EraSection";
import WhyBTSisBTS from "@/components/WhyBTSisBTS";
import ClosingSection from "@/components/ClosingSection";
import { eras } from "@/data/eras";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Intro />

      <div id="timeline">
        {eras.map((era, index) => (
          <EraSection key={era.id} era={era} index={index} />
        ))}
      </div>

      <WhyBTSisBTS />
      <ClosingSection />
    </main>
  );
}
