
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Printer, Paintbrush, Globe, Camera, Box } from "lucide-react";
import { cn } from "@/lib/utils";

const ServicesPage = () => {
  const services = [
    {
      icon: <Printer strokeWidth={1.5} />,
      title: "Digital Printing",
      description: "High-quality printing services including large format, merchandising, and custom materials.",
      link: "/services/digital-printing",
      image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Paintbrush strokeWidth={1.5} />,
      title: "Graphic Design & 3D Modeling",
      description: "Creative design solutions including logos, branding materials, and 3D visualizations.",
      link: "/services/graphic-design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Box strokeWidth={1.5} />,
      title: "Branding & Souvenirs",
      description: "Complete branding packages and custom souvenirs to elevate your brand identity.",
      link: "/services/branding",
      image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Globe strokeWidth={1.5} />,
      title: "Web Solutions",
      description: "Custom websites, applications, and digital experiences built with modern technologies.",
      link: "/services/web-solutions",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Camera strokeWidth={1.5} />,
      title: "Photography",
      description: "Professional photography services for products, events, portraits, and commercial use.",
      link: "/services/photography",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Box strokeWidth={1.5} />,
      title: "3D Signs & Fabrication",
      description: "Custom signage, displays, and fabrication services to make your brand stand out.",
      link: "/services/3d-signs",
      image: "https://images.unsplash.com/photo-1535970793482-07de93762dc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-600">
            We offer comprehensive creative solutions to bring your vision to life.
            Browse our range of professional services designed to meet your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="service-card group overflow-hidden">
              <div className="mb-4 h-48 overflow-hidden rounded-xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <div className="service-icon">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
              <Link 
                to={service.link}
                className="inline-flex items-center font-medium text-masslawry-blue hover:text-masslawry-orange transition-colors"
              >
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
