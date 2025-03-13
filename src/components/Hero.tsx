
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={cn("relative min-h-[90vh] flex items-center pt-24 pb-12", className)}>
      {/* Subtle background patterns */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-grid-pattern"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] [background-size:16px_16px]"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 items-center">
          <div className="flex-1 space-y-8 lg:pr-8 stagger-fade-up">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="h-px w-10 bg-masslawry-orange"></div>
                <span className="text-sm text-gray-600 font-medium">MASSLAWRY MULTIMEDIA</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Qualitative solutions<br />
                with <span className="text-gradient"> and fast timely delivery</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-600 md:text-xl md:pr-10 max-w-2xl leading-relaxed">
             Masslawry is cutting edge Multimedia and E-solution that focuses on hiqhly qualitative  and timely delivery of services such as Digital printing, graphic design, 
              branding, web solutions, photography and 3D signs & fabrication. 
              We blend state-of-the-art technology with scheduled time ranges to bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-md bg-masslawry-blue text-white font-medium flex items-center justify-center gap-2 hover:bg-masslawry-darkblue transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 font-medium flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-masslawry-blue/20 to-masslawry-orange/20 rounded-3xl blur-3xl -z-10 opacity-60"></div>
              <div className="glass-card w-full h-full overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="/lovable-uploads/c46e7d86-c563-427d-af16-4bd5b9bf3ff6.png" 
                  alt="Masslawry creative showcase" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-masslawry-orange rounded-full opacity-80 blur-xl animate-pulse-subtle"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-masslawry-blue rounded-full opacity-70 blur-xl animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce-subtle">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
