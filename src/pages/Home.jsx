import Hero from "../components/sections/home/Hero";
import CapabilityHighlights from "../components/sections/home/CapabilityHighlights";
import AboutPreview from "../components/sections/home/AboutPreview";
import ServicesOverview from "../components/sections/home/ServicesOverview";
import WhyChoosePAMYLKA from "../components/sections/home/WhyChoosePAMYLKA";
import HowWeWork from "../components/sections/home/HowWeWork";
import Testimonials from "../components/sections/home/Testimonials";
import FinalCTA from "../components/sections/home/FinalCTA";

function Home() {
  return (
    <main>
      <Hero />
      <CapabilityHighlights />
      <AboutPreview />
      <ServicesOverview />
      <WhyChoosePAMYLKA />
      <FinalCTA />
      <Testimonials />
    </main>
  );
}

export default Home;