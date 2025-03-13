import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const portfolioItems = [
  {
    category: "Digital Printing",
    description: "High-quality digital prints for various business and personal needs.",
    images: [
      "https://source.unsplash.com/600x400/?printing,design",
      "https://source.unsplash.com/600x400/?poster,advertisement",
      "https://source.unsplash.com/600x400/?flyer,brochure",
    ],
  },
  {
    category: "Graphic Design & 3D Modeling",
    description: "Creative design and 3D modeling for branding, products, and visualization.",
    images: [
      "https://source.unsplash.com/600x400/?graphicdesign,illustration",
      "https://source.unsplash.com/600x400/?3dmodeling,art",
      "https://source.unsplash.com/600x400/?logo,branding",
    ],
  },
  {
    category: "Branding & Souvenirs",
    description: "Custom branding materials, promotional items, and souvenirs.",
    images: [
      "https://source.unsplash.com/600x400/?branding,packaging",
      "https://source.unsplash.com/600x400/?corporategifts,souvenirs",
      "https://source.unsplash.com/600x400/?merchandise,custom",
    ],
  },
  {
    category: "Web Solutions / E-Solutions",
    description: "Modern websites and digital solutions tailored for business growth.",
    images: [
      "https://source.unsplash.com/600x400/?webdesign,uiux",
      "https://source.unsplash.com/600x400/?coding,technology",
      "https://source.unsplash.com/600x400/?website,development",
    ],
  },
  {
    category: "Photography",
    description: "Professional photography services capturing key moments and branding shots.",
    images: [
      "https://source.unsplash.com/600x400/?photography,portrait",
      "https://source.unsplash.com/600x400/?photoshoot,studio",
      "https://source.unsplash.com/600x400/?camera,creative",
    ],
  },
  {
    category: "3D/2D Signs & Fabrication",
    description: "Custom signs, illuminated designs, and fabrication for businesses.",
    images: [
      "https://source.unsplash.com/600x400/?signage,storefront",
      "https://source.unsplash.com/600x400/?3dsign,led",
      "https://source.unsplash.com/600x400/?fabrication,neonsign",
    ],
  },
];

const Portfolio = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12 animate-fade-in">
          Our Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
              onMouseEnter={() => setHoveredCategory(service.category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Main Image with Overlay */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={service.images[0]}
                  alt={`${service.category} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-semibold text-white px-4 text-center">
                    {service.category}
                  </h3>
                </div>
              </div>

              {/* Description (Visible on Hover) */}
              <div
                className={cn(
                  "p-6 bg-white transition-all duration-300",
                  hoveredCategory === service.category ? "opacity-100 h-auto" : "opacity-0 h-0"
                )}
              >
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {service.images.slice(1).map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      alt={`${service.category} ${i + 2}`}
                      className="rounded-lg shadow-md w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
