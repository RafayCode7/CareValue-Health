import { Hero } from "./components/Hero";
import { FeaturesSection } from "./components/FeaturesSection";
import SliderSection from "./components/SliderSection";
import FAQComponent from "./components/FAQComponent";
import { CoreServices } from "./components/CoreServices";
import { PatientTestimonials } from "./components/PatientTestimonials";
import { ServicesOverview } from "./components/ServicesOverview";
import ContactCardSection from "./components/ContactCardSection";
import InfoCardSection from "./components/InfoCardSection";
import ChatbotStartPage from "./components/ChatbotStartPage";
import Testimonials from "./user/testimonials/page";
import { TestimonialsAndDataEntry } from "./components/TestimonialsAndDataEntry";
import { CoreBenefitsSection } from "./components/CoreBenefitsSection";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StickyCTA } from "./components/StickyCTA";
// import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <TestimonialsAndDataEntry/>
    <CoreBenefitsSection/>
      {/* <SliderSection /> */}

      {/* Hero and Chatbot layout */}
      <div className="flex flex-col md:flex-row items-center justify-between py-10 px-6 md:px-16 lg:px-24 bg-white">
        {/* Hero on the left */}
        {/* <div className="w-full md:w-1/2 p-6 md:p-12">
          <Hero />
        </div> */}

        {/* Chatbot on the right */}
        <div className="w-full md:w-1/2 p-6 md:p-12">
          {/* <ChatbotStartPage /> */}
        </div>
      </div>

      <InfoCardSection />
      <CoreServices />
      <ContactCardSection />
      <PatientTestimonials />
      <FeaturesSection />
      <FAQComponent />
      <StickyCTA/>
      <Footer/>
    </>
  );
}
