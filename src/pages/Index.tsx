
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Featured from "@/components/Featured";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FloatingButton from '../components/ui/FloatingButton'
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <Featured />
      <Testimonials />
      <CTA />
      <ScrollToTop />
      <FloatingButton />
    </div>
  );
};

export default Index;
