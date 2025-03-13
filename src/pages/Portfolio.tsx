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
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Portfolio</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {portfolioItems.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg">
              {/* Header Section */}
              <button
                onClick={() => toggleCategory(service.category)}
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-200 transition-all rounded-t-lg"
              >
                <div>
                  <h3 className="text-2xl font-semibold">{service.category}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                {openCategory === service.category ? (
                  <ChevronUp className="w-6 h-6 text-gray-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                )}
              </button>

              {/* Images Section (Only visible when expanded) */}
              {openCategory === service.category && (
                <div className="grid md:grid-cols-3 gap-4 p-6 border-t">
                  {service.images.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      alt={`${service.category} ${i + 1}`}
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
