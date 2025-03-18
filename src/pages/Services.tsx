import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import ServicesMenu from "@/components/ServicesMenu";
import FloatingButtons from "@/components/ui/FloatingButtons";

interface Example {
  image: string;
  caption: string;
}

interface ServiceData {
  id: string;
  title: string;
  description: string;
  image: string;
  examples: Example[];
}

const servicesData = [
  {
    id: "digital-printing",
    title: "Digital Printing",
    description: "High-quality digital prints for various business and personal needs. We provide precision printing for banners, posters, business cards, flyers, brochures and more. Our state-of-the-art printing equipment delivers vibrant colors and sharp details.",
    image: "/lovable-uploads/58388015-ac09-41ff-bdab-454600db3a85.png",
    examples: [
      {
        image: "/lovable-uploads/naa/print_house.jpg",
        caption: "Printing Solutions Provider"
      },
      {
        image: "/lovable-uploads/naa/perception_creative.jpg",
        caption: "Creative & Production Services"
      }
    ]
  },
  {
    id: "graphic-design",
    title: "Graphic Design & 3D Modeling",
    description: "Creative design and 3D modeling for branding, products, and visualization. Our designers create compelling visuals that bring your ideas to life, from logos and brand identity to product renderings and architectural visualizations.",
    image: "/lovable-uploads/naa/WhatsApp Image 2025-03-09 at 11.04.33_7067350c.jpg",
    examples: [
      {
        image: "/lovable-uploads/naa/perception_creative.jpg",
        caption: "All Your Design Works"
      },
      {
        image: "/lovable-uploads/naa/multimedia.jpg",
        caption: "Multimedia Production"
      }
    ]
  },
  {
    id: "branding",
    title: "Branding & Souvenirs",
    description: "Custom branding materials, promotional items, and souvenirs that help build recognition and loyalty. From branded corporate gifts to custom merchandise, we help you create lasting impressions with your audience.",
    image: "/lovable-uploads/naa/WhatsApp Image 2025-03-09 at 11.04.33_14981e58.jpg",
    examples: [
      {
        image: "/lovable-uploads/naa/souvenirs.jpg",
        caption: "Custom Branded Souvenirs"
      },
      {
        image: "/lovable-uploads/naa/perception_creative.jpg",
        caption: "Brand Identity Development"
      }
    ]
  },
  {
    id: "web-solutions",
    title: "Web Solutions / E-Solutions",
    description: "Modern websites and digital solutions tailored for business growth. We create responsive, user-friendly websites and digital tools that help businesses establish a strong online presence and streamline operations.",
    image: "/lovable-uploads/naa/docs/IMG-20250309-WA0013.jpg",
    examples: [
      {
        image: "/lovable-uploads/naa/multimedia.jpg",
        caption: "Digital Media Solutions"
      },
      {
        image: "/lovable-uploads/naa/office_staff.jpg",
        caption: "Web Development Team"
      }
    ]
  },
  {
    id: "photography",
    title: "Photography",
    description: "Professional photography services capturing key moments and branding shots. Our photographers specialize in product photography, corporate events, and commercial photography that showcases your business in the best light.",
    image: "/lovable-uploads/naa/docs/photography.jpg",
    examples: [
      {
        image: "/lovable-uploads/naa/btl_events.jpg",
        caption: "Event Photography"
      },
      {
        image: "/lovable-uploads/naa/multimedia.jpg",
        caption: "Multimedia Production"
      }
    ]
  },
  {
    id: "signages",
    title: "3D/2D Signs & Fabrication",
    description: "Custom signs, illuminated designs, and fabrication for businesses. From storefront signage to interior branding elements, we create custom-built solutions that help your business stand out and make a statement.",
    image: "/lovable-uploads/naa/WhatsApp Image 2025-03-09 at 11.04.35_29148d97.jpg",
    examples: [
      {
        image: "/lovable-uploads/naa/bello_sign.jpg",
        caption: "Installation of Signage"
      },
      {
        image: "/lovable-uploads/naa/blue_sign.jpg",
        caption: "Illuminated 3D Signage"
      }
    ]
  }
];

export default function Services() {
  const [activeSlides, setActiveSlides] = useState<Record<string, number>>({});

  const nextSlide = (serviceId: string, examplesLength: number) => {
    setActiveSlides(prev => ({
      ...prev,
      [serviceId]: ((prev[serviceId] || 0) + 1) % examplesLength
    }));
  };

  const prevSlide = (serviceId: string, examplesLength: number) => {
    setActiveSlides(prev => ({
      ...prev,
      [serviceId]: ((prev[serviceId] || 0) - 1 + examplesLength) % examplesLength
    }));
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Hero className="min-h-[60vh]" />
      
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-masslawry-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Masslawry provides a complete range of printing, design, and digital solutions to help your business stand out from the competition. Explore our services below.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Services Menu Sidebar */}
            <div className="lg:w-1/4 order-2 lg:order-1">
              <div className="sticky top-24">
                <ServicesMenu />
                
                {/* Contact CTA */}
                <div className="mt-6 bg-masslawry-orange text-white p-6 rounded-md shadow-md">
                  <h3 className="text-xl font-bold mb-3">Need a Quote?</h3>
                  <p className="mb-4">Contact us today for fast, professional service and competitive pricing.</p>
                  <Link 
                    to="/contact" 
                    className="block text-center py-2 px-4 bg-white text-masslawry-orange font-medium rounded hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Services Content */}
            <div className="lg:w-3/4 order-1 lg:order-2">
              <div className="space-y-16">
                {servicesData.map((service) => (
                  <div id={service.id} key={service.id} className="scroll-mt-24">
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                          <div className="p-8 w-full">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{service.title}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                        
                        {/* Examples Slider */}
                        {service.examples && service.examples.length > 0 && (
                          <div className="mt-8">
                            <h4 className="text-lg font-semibold text-gray-800 mb-4">Project Examples</h4>
                            <div className="relative">
                              <div className="relative overflow-hidden rounded-lg">
                                {service.examples.map((example, index) => (
                                  <div 
                                    key={index} 
                                    className={`transition-opacity duration-500 ${
                                      (activeSlides[service.id] || 0) === index ? 'block opacity-100' : 'hidden opacity-0'
                                    }`}
                                  >
                                    <div className="relative aspect-[16/9]">
                                      <img 
                                        src={example.image} 
                                        alt={example.caption} 
                                        className="w-full h-full object-cover rounded-lg"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                        <div className="p-6 w-full">
                                          <p className="text-white font-medium">{example.caption}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Navigation buttons */}
                              {service.examples.length > 1 && (
                                <>
                                  <button 
                                    onClick={() => prevSlide(service.id, service.examples.length)} 
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                                    aria-label="Previous image"
                                  >
                                    <ChevronLeft className="w-5 h-5" />
                                  </button>
                                  <button 
                                    onClick={() => nextSlide(service.id, service.examples.length)} 
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                                    aria-label="Next image"
                                  >
                                    <ChevronRight className="w-5 h-5" />
                                  </button>
                                </>
                              )}
                              
                              {/* Indicators */}
                              {service.examples.length > 1 && (
                                <div className="flex justify-center mt-4 space-x-2">
                                  {service.examples.map((_, index) => (
                                    <button
                                      key={index}
                                      onClick={() => setActiveSlides(prev => ({ ...prev, [service.id]: index }))}
                                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                        (activeSlides[service.id] || 0) === index ? 'bg-masslawry-orange' : 'bg-gray-300'
                                      }`}
                                      aria-label={`Go to slide ${index + 1}`}
                                    />
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                        
                        <div className="mt-8">
                          <Link 
                            to="/contact" 
                            className="inline-flex items-center text-masslawry-blue hover:text-masslawry-orange transition-colors font-medium"
                          >
                            Get a Quote
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FloatingButtons />
    </div>
  );
} 