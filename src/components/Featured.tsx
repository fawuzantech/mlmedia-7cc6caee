
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Featured() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "Branding & Packaging",
      category: "Brand Identity",
      image: "/lovable-uploads/c3d06af3-525e-41f5-8120-97f5381e90c2.png",
      link: "/portfolio/branding"
    },
    {
      id: 2,
      title: "Product Photography",
      category: "Photography",
      image: "/lovable-uploads/ea884af2-a238-492e-9b57-6d8a12e98c8a.png",
      link: "/portfolio/photography"
    },
    {
      id: 3,
      title: "Custom 3D Signage",
      category: "3D Fabrication",
      image: "/lovable-uploads/5742d975-0b2b-423a-8823-250b5b6d0fc0.png",
      link: "/portfolio/3d-signs"
    }
  ];
  
  useEffect(() => {
    // Auto-advance carousel
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [projects.length]);
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-full bg-masslawry-orange/10 text-masslawry-orange text-sm font-medium mb-4">
              Featured Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quality showcased in every project
            </h2>
            <p className="text-lg text-gray-600">
              Browse through our selected work that demonstrates our creative capabilities and attention to detail.
            </p>
          </div>
          
          <Link 
            to="/portfolio" 
            className="inline-flex items-center font-medium text-masslawry-blue hover:text-masslawry-orange transition-colors mt-4 md:mt-0"
          >
            View All Projects <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
          
          {/* Project images */}
          <div className="relative h-[500px] md:h-[600px]">
            {projects.map((project, index) => (
              <img
                key={project.id}
                src={project.image}
                alt={project.title}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-expo-out",
                  activeIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-110"
                )}
              />
            ))}
          </div>
          
          {/* Project info overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-10">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "transition-all duration-700 ease-expo-out",
                  activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <Link
                  to={project.link}
                  className="inline-flex items-center text-white border border-white/50 hover:bg-white/20 px-4 py-2 rounded-md transition-all duration-300"
                >
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          
          {/* Pagination dots */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-white w-8" : "bg-white/50"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
