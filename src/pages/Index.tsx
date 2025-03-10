
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Featured from "@/components/Featured";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Animation for staggered elements
    const animateElements = () => {
      const elements = document.querySelectorAll(".service-card");
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("animate-fade-up");
        }, 100 * index);
      });
    };

    // Add intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "services") {
              animateElements();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      observer.observe(servicesSection);
    }

    return () => {
      if (servicesSection) {
        observer.unobserve(servicesSection);
      }
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <Featured />
      <Testimonials />
      <CTA />
      <ScrollToTop />
    </div>
  );
};

export default Index;
