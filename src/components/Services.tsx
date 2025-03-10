
import { Link } from "react-router-dom";
import { Printer, Paintbrush, Globe, Camera, Box, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard = ({ icon, title, description, link, className, style }: ServiceProps) => (
  <div className={cn("service-card group", className)} style={style}>
    <div>
      <div className="service-icon">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
    <Link 
      to={link}
      className="inline-flex items-center font-medium text-masslawry-blue hover:text-masslawry-orange transition-colors"
    >
      Learn more <ArrowRight className="ml-1 w-4 h-4" />
    </Link>
  </div>
);

export default function Services() {
  const services = [
    {
      icon: <Printer strokeWidth={1.5} />,
      title: "Digital Printing",
      description: "High-quality printing services including large format, merchandising, and custom materials.",
      link: "/services/digital-printing"
    },
    {
      icon: <Paintbrush strokeWidth={1.5} />,
      title: "Graphic Design & 3D Modeling",
      description: "Creative design solutions including logos, branding materials, and 3D visualizations.",
      link: "/services/graphic-design"
    },
    {
      icon: <Box strokeWidth={1.5} />,
      title: "Branding & Souvenirs",
      description: "Complete branding packages and custom souvenirs to elevate your brand identity.",
      link: "/services/branding"
    },
    {
      icon: <Globe strokeWidth={1.5} />,
      title: "Web Solutions",
      description: "Custom websites, applications, and digital experiences built with modern technologies.",
      link: "/services/web-solutions"
    },
    {
      icon: <Camera strokeWidth={1.5} />,
      title: "Photography",
      description: "Professional photography services for products, events, portraits, and commercial use.",
      link: "/services/photography"
    },
    {
      icon: <Box strokeWidth={1.5} />,
      title: "3D Signs & Fabrication",
      description: "Custom signage, displays, and fabrication services to make your brand stand out.",
      link: "/services/3d-signs"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-masslawry-blue/10 text-masslawry-blue text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Creative Solutions
          </h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of services to bring your creative visions to life with quality and precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-masslawry-blue text-white font-medium hover:bg-masslawry-darkblue transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
