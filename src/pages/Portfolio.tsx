const portfolioItems = [
  {
    category: "Digital Printing",
    description: "High-quality digital prints for various business and personal needs.",
    images: [
      "/uploads/digital-printing1.jpg",
      "/uploads/digital-printing2.jpg",
      "/uploads/digital-printing3.jpg",
    ],
  },
  {
    category: "Graphic Design & 3D Modeling",
    description: "Creative design and 3D modeling for branding, products, and visualization.",
    images: [
      "/uploads/graphic-design1.jpg",
      "/uploads/graphic-design2.jpg",
      "/uploads/graphic-design3.jpg",
    ],
  },
  {
    category: "Branding & Souvenirs",
    description: "Custom branding materials, promotional items, and souvenirs.",
    images: [
      "/uploads/branding1.jpg",
      "/uploads/branding2.jpg",
      "/uploads/branding3.jpg",
    ],
  },
  {
    category: "Web Solutions / E-Solutions",
    description: "Modern websites and digital solutions tailored for business growth.",
    images: [
      "/uploads/web-solutions1.jpg",
      "/uploads/web-solutions2.jpg",
      "/uploads/web-solutions3.jpg",
    ],
  },
  {
    category: "Photography",
    description: "Professional photography services capturing key moments and branding shots.",
    images: [
      "/uploads/photography1.jpg",
      "/uploads/photography2.jpg",
      "/uploads/photography3.jpg",
    ],
  },
  {
    category: "3D/2D Signs & Fabrication",
    description: "Custom signs, illuminated designs, and fabrication for businesses.",
    images: [
      "/uploads/3d-signs1.jpg",
      "/uploads/3d-signs2.jpg",
      "/uploads/3d-signs3.jpg",
    ],
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Portfolio</h2>

        {portfolioItems.map((service, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">{service.category}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>

            {/* Image Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {service.images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt={`${service.category} ${i + 1}`}
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
