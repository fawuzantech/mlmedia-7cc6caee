import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FloatingButtons from "@/components/ui/FloatingButtons";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Featured />
      <Testimonials />
      <CTA />
      <FloatingButtons />
    </div>
  );
};

export default Index;
