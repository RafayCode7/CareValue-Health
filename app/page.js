import { Hero } from "./components/Hero";
import { FeaturesSection } from "./components/FeaturesSection";
import SliderSection from "./components/SliderSection";
import FAQComponent from "./components/FAQComponent";
import { CoreServices } from "./components/CoreServices";
import { PatientTestimonials } from "./components/PatientTestimonials";
import { ServicesOverview } from "./components/ServicesOverview";


export default function Home() {
  return (
    <>
      <Hero />
      <CoreServices/>
      <PatientTestimonials/>
      
      {/* <SliderSection/> */}
      <FeaturesSection />
     <FAQComponent/>
      
    </>
  );
}
