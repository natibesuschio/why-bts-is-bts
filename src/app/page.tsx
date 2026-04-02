import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Navigation from "@/components/Navigation";
import EraSection from "@/components/EraSection";
import ChangedEverything from "@/components/ChangedEverything";
import WhyBTSisBTS from "@/components/WhyBTSisBTS";
import ClosingSection from "@/components/ClosingSection";
import { eras } from "@/data/eras";
import { principles } from "@/data/principles";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Navigation eras={eras} />
      <Intro />

      <div className="relative">
        {eras.map((era, index) => (
          <div key={era.id}>
            <EraSection era={era} />
            {index === 1 || index === 3 ? <ChangedEverything /> : null}
          </div>
        ))}
      </div>

      <WhyBTSisBTS principles={principles} />
      <ClosingSection />
    </main>
  );
}