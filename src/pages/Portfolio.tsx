"use client"

import { useState } from "react"
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ExternalLink, X } from "lucide-react"
import { cn } from "@/lib/utils"
import FloatingButtons from "@/components/ui/FloatingButtons"
import Hero from "@/components/Hero"
import ServicesMenu from "@/components/ServicesMenu"

const portfolioItems = [
  {
    id: "digital-printing",
    category: "Digital Printing",
    description: "High-quality digital prints for various business and personal needs.",
    images: [
      "/lovable-uploads/58388015-ac09-41ff-bdab-454600db3a85.png",
      "/lovable-uploads/615e1682-4ec3-4b80-9068-56d371fa90d6.png",
      "/lovable-uploads/naa/WhatsApp Image 2025-03-09 at 11.04.31_874c20ec.jpg",
      "/lovable-uploads/naa/print_house.jpg",
      "/lovable-uploads/naa/perception_creative.jpg",
    ],
  },
  {
    id: "graphic-design",
    category: "Graphic Design & 3D Modeling",
    description: "Creative design and 3D modeling for branding, products, and visualization.",
    images: [
      "/lovable-uploads/naa/WhatsApp Image 2025-03-09 at 11.04.33_7067350c.jpg",
      "/lovable-uploads/naa/WhatsApp Image 2025-03-09 at 11.04.33_b8c4ce5f.jpg",
      "/lovable-uploads/naa/graphic_design_sample_01.jpg",
      "/lovable-uploads/naa/perception_creative.jpg",
      "/lovable-uploads/naa/multimedia.jpg",
    ],
  },
  {
    id: "branding",
    category: "Branding & Souvenirs",
    description: "Custom branding materials, promotional items, and souvenirs.",
    images: [
      "/lovable-uploads/naa/WhatsApp Image 2025-03-09 at 11.04.33_14981e58.jpg",
      "/lovable-uploads/naa/WhatsApp Image 2025-03-09 at 11.04.31_1a053403.jpg",
      "/lovable-uploads/naa/souvenirs.jpg",
    ],
  },
  {
    id: "web-solutions",
    category: "Web Solutions / E-Solutions",
    description: "Modern websites and digital solutions tailored for business growth.",
    images: [
      "/lovable-uploads/naa/docs/IMG-20250309-WA0013.jpg",
      "/lovable-uploads/naa/multimedia.jpg",
      "/lovable-uploads/naa/office_staff.jpg",
    ],
  },
  {
    id: "photography",
    category: "Photography",
    description: "Professional photography services capturing key moments and branding shots.",
    images: [
      "/lovable-uploads/naa/docs/photography.jpg",
      "/lovable-uploads/naa/btl_events.jpg",
      "/lovable-uploads/naa/multimedia.jpg",
    ],
  },
  {
    id: "signages",
    category: "3D/2D Signs & Fabrication",
    description: "Custom signs, illuminated designs, and fabrication for businesses.",
    images: [
      "/lovable-uploads/naa/WhatsApp Image 2025-03-09 at 11.04.35_29148d97.jpg",
      "/lovable-uploads/naa/WhatsApp Image 2025-03-09 at 11.04.31_874c20ec.jpg",
      "/lovable-uploads/naa/bello_sign.jpg",
      "/lovable-uploads/naa/blue_sign.jpg",
    ],
  },
]

const Portfolio = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeSlides, setActiveSlides] = useState<Record<string, number>>({})

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  const openLightbox = (image: string) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }
  
  const nextSlide = (categoryId: string, imagesLength: number) => {
    setActiveSlides(prev => ({
      ...prev,
      [categoryId]: ((prev[categoryId] || 0) + 1) % imagesLength
    }))
  }

  const prevSlide = (categoryId: string, imagesLength: number) => {
    setActiveSlides(prev => ({
      ...prev,
      [categoryId]: ((prev[categoryId] || 0) - 1 + imagesLength) % imagesLength
    }))
  }

  return (
    <div className="overflow-x-hidden">
      <Hero className="min-h-[60vh]" />
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-masslawry-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Discover our comprehensive range of printing and signage solutions designed to meet all your business needs.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Services Menu Sidebar */}
            <div className="md:w-1/4">
              <div className="sticky top-24">
                <ServicesMenu />
                
                {/* Contact CTA */}
                <div className="mt-6 bg-masslawry-orange text-white p-6 rounded-md shadow-md">
                  <h3 className="text-xl font-bold mb-3">Need a Quote?</h3>
                  <p className="mb-4">Contact us today for fast, professional service and competitive pricing.</p>
                  <a 
                    href="/contact" 
                    className="block text-center py-2 px-4 bg-white text-masslawry-orange font-medium rounded hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioItems.map((item, index) => (
                  <div
                    key={index}
                    id={item.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.images[0] || "/placeholder.svg"}
                        alt={`${item.category} preview`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onClick={() => openLightbox(item.images[0])}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                        <div className="p-6 w-full">
                          <h3 className="text-xl font-bold text-white mb-2">{item.category}</h3>
                          <p className="text-white/90 text-sm line-clamp-2">{item.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <button
                        onClick={() => toggleCategory(item.category)}
                        className="flex items-center justify-between w-full text-sm font-medium text-masslawry-blue hover:text-masslawry-orange transition-colors"
                      >
                        <span>See Examples</span>
                        {expandedCategory === item.category ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>

                      <div
                        className={cn(
                          "transition-all duration-300 overflow-hidden",
                          expandedCategory === item.category ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0",
                        )}
                      >
                        {/* Carousel Slider */}
                        <div className="relative rounded-lg overflow-hidden">
                          {item.images.map((image, i) => (
                            <div
                              key={i}
                              className={`transition-opacity duration-500 ${
                                (activeSlides[item.id] || 0) === i ? 'block opacity-100' : 'hidden opacity-0'
                              }`}
                              onClick={() => openLightbox(image)}
                            >
                              <div className="relative aspect-video">
                                <img
                                  src={image || "/placeholder.svg"}
                                  alt={`${item.category} ${i + 1}`}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                                  <ExternalLink className="w-6 h-6 text-white" />
                                </div>
                              </div>
                            </div>
                          ))}
                          
                          {/* Navigation buttons */}
                          {item.images.length > 1 && (
                            <>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  prevSlide(item.id, item.images.length);
                                }} 
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full hover:bg-black/70 transition-colors z-10"
                                aria-label="Previous image"
                              >
                                <ChevronLeft className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  nextSlide(item.id, item.images.length);
                                }} 
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full hover:bg-black/70 transition-colors z-10"
                                aria-label="Next image"
                              >
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </>
                          )}
                        </div>
                        
                        {/* Indicators */}
                        {item.images.length > 1 && (
                          <div className="flex justify-center mt-3 space-x-1.5">
                            {item.images.map((_, i) => (
                              <button
                                key={i}
                                onClick={(e) => {
                                  e.stopPropagation(); 
                                  setActiveSlides(prev => ({ ...prev, [item.id]: i }));
                                }}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  (activeSlides[item.id] || 0) === i ? 'bg-masslawry-orange' : 'bg-gray-300'
                                }`}
                                aria-label={`Go to slide ${i + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button
            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Enlarged view"
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
      <FloatingButtons />
    </div>
  )
}

export default Portfolio

