import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "DIGITAL PRINTING",
    path: "/portfolio#digital-printing"
  },
  {
    name: "GRAPHIC DESIGN & 3D MODELING",
    path: "/portfolio#graphic-design"
  },
  {
    name: "BRANDING & SOUVENIRS",
    path: "/portfolio#branding"
  },
  {
    name: "WEB SOLUTIONS / E-SOLUTIONS",
    path: "/portfolio#web-solutions"
  },
  {
    name: "PHOTOGRAPHY",
    path: "/portfolio#photography"
  },
  {
    name: "3D/2D SIGNAGES & FABRICATION",
    path: "/portfolio#signages"
  }
];

export default function ServicesMenu() {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <div className="bg-masslawry-blue text-white py-3 px-4 flex items-center">
        <span className="font-semibold">OUR SERVICES</span>
        <ChevronRight className="w-5 h-5 ml-auto" />
      </div>
      <div className="divide-y divide-gray-100">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.path}
            className="flex items-center py-3 px-4 hover:bg-gray-50 transition-colors group"
          >
            <ChevronRight className="w-5 h-5 mr-3 text-masslawry-orange" />
            <span className="font-medium text-gray-700 group-hover:text-masslawry-blue transition-colors">
              {service.name}
            </span>
            <ChevronRight className="w-4 h-4 ml-auto text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>
    </div>
  );
} 