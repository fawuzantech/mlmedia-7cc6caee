import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={cn("relative min-h-[90vh] flex items-center pt-24 pb-12", className)}>
      {/* Background with overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/c46e7d86-c563-427d-af16-4bd5b9bf3ff6.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-masslawry-blue/90 to-masslawry-orange/90"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 items-center">
          <div className="flex-1 space-y-8 lg:pr-8 text-white">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="h-px w-10 bg-white"></div>
                <span className="text-sm font-medium">MASSLAWRY MULTIMEDIA</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                American Quality,
                <br />
                <span className="text-masslawry-orange">Chinese Prices</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl md:pr-10 max-w-2xl leading-relaxed text-white/90">
              We are a signage and digital printing company that provides you with QUALITY services & products. Masslawry offers a complete line of signs and related products, including: Banners, Awards, SAV, Copies, Photo Papers, Decals, Window Lettering, Vehicle Graphics, Full Colour Large Format Graphics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-md bg-masslawry-orange text-white font-medium flex items-center justify-center gap-2 hover:bg-masslawry-darkorange transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="px-6 py-3 rounded-md border-2 border-white text-white font-medium flex items-center justify-center hover:bg-white/10 transition-all duration-300"
              >
                What We Do
              </Link>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl -z-10 opacity-60"></div>
              <div className="glass-card w-full h-full overflow-hidden rounded-3xl shadow-2xl border-2 border-white/20">
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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 animate-bounce-subtle">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
