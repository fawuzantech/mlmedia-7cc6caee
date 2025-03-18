"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, ExternalLink, X } from "lucide-react"
import { cn } from "@/lib/utils"
import FloatingButtons from "@/components/ui/FloatingButtons"
import Hero from "@/components/Hero"

const portfolioItems = [
  {
    category: "Digital Printing",
    description: "High-quality digital prints for various business and personal needs.",
    images: [
      "/lovable-uploads/58388015-ac09-41ff-bdab-454600db3a85.png",
      "/lovable-uploads/615e1682-4ec3-4b80-9068-56d371fa90d6.png",
      "/lovable-uploads/naa/WhatsApp Image 2025-03-09 at 11.04.31_874c20ec.jpg",
    ],
  },
  {
    category: "Graphic Design & 3D Modeling",
    description: "Creative design and 3D modeling for branding, products, and visualization.",
    images: [
      "/lovable-uploads/naa/WhatsApp Image 2025-03-09 at 11.04.33_7067350c.jpg",
      "/lovable-uploads/naa/WhatsApp Image 2025-03-09 at 11.04.33_b8c4ce5f.jpg",
      "/lovable-uploads/naa/graphic_design_sample_01.jpg"
    ],
  },
  {
    category: "Branding & Souvenirs",
    description: "Custom branding materials, promotional items, and souvenirs.",
    images: [
      "/lovable-uploads/naa/WhatsApp Image 2025-03-09 at 11.04.33_14981e58.jpg",
      "/lovable-uploads/naa/WhatsApp Image 2025-03-09 at 11.04.31_1a053403.jpg",
    ],
  },
  {
    category: "Web Solutions / E-Solutions",
    description: "Modern websites and digital solutions tailored for business growth.",
    images: [
      "/lovable-uploads/naa/docs/IMG-20250309-WA0013.jpg"
    ],
  },
  {
    category: "Photography",
    description: "Professional photography services capturing key moments and branding shots.",
    images: [
     "/lovable-uploads/naa/docs/photography.jpg",
    ],
  },
  {
    category: "3D/2D Signs & Fabrication",
    description: "Custom signs, illuminated designs, and fabrication for businesses.",
    images: [
      "/lovable-uploads/naa/WhatsApp Image 2025-03-09 at 11.04.35_29148d97.jpg",
      "lovable-uploads/naa/WhatsApp Image 2025-03-09 at 11.04.31_874c20ec.jpg",
    ],
  },
]

const Portfolio = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  const openLightbox = (image: string) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <div className="overflow-x-hidden">
      <Hero className="min-h-[60vh]" />
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Portfolio</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Explore our diverse range of creative work and solutions tailored for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.images[0] || "/placeholder.svg"}
                    alt={`${item.category} preview`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onClick={() => openLightbox(item.images[0])}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-xl font-bold text-white mb-2">{item.category}</h3>
                      <p className="text-white/80 text-sm line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <button
                    onClick={() => toggleCategory(item.category)}
                    className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <span>View Gallery</span>
                    {expandedCategory === item.category ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>

                  <div
                    className={cn(
                      "grid grid-cols-2 gap-2 mt-4 transition-all duration-300 overflow-hidden",
                      expandedCategory === item.category ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    {item.images.map((image, i) => (
                      <div
                        key={i}
                        className="relative aspect-square rounded-md overflow-hidden cursor-pointer"
                        onClick={() => openLightbox(image)}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${item.category} ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                          <ExternalLink className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
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

