import { useState } from "react";
import { Link } from "react-router-dom";

const portfolioItems = [
  { 
    id: 1, 
    category: "web", 
    title: "E-commerce Website", 
    client: "Fashion Brand",
    image: "/lovable-uploads/photo-1488590528505-98d2b5aba04b.jpg"
  },
  { 
    id: 2, 
    category: "print", 
    title: "Product Catalog", 
    client: "Furniture Company",
    image: "/lovable-uploads/e1ea17d6-b420-4039-b2f3-d02d21e1881d.png"
  },
  { 
    id: 3, 
    category: "branding", 
    title: "Brand Identity", 
    client: "Tech Startup",
    image: "/lovable-uploads/a455ab21-f546-4190-a4ef-831f234a1339.png"
  },
  { 
    id: 4, 
    category: "photography", 
    title: "Product Photoshoot", 
    client: "Cosmetics Line",
    image: "/lovable-uploads/ba9cdcf1-6446-42bc-8e84-7ab0c3cc84ca.png"
  },
  { 
    id: 5, 
    category: "3d", 
    title: "3D Store Signage", 
    client: "Retail Chain",
    image: "/lovable-uploads/682f810a-fae4-4744-b530-c8838bc23067.png"
  },
  { 
    id: 6, 
    category: "web", 
    title: "Corporate Website", 
    client: "Law Firm",
    image: "/lovable-uploads/photo-1486312338219-ce68d2c6f44d.jpg"
  },
  { 
    id: 7, 
    category: "print", 
    title: "Annual Report", 
    client: "Financial Services",
    image: "/lovable-uploads/054fb5cba-b15a-4d71-a744-21fea4827016.png"
  },
  { 
    id: 8, 
    category: "branding", 
    title: "Logo Design", 
    client: "Restaurant",
    image: "/lovable-uploads/631d0fe8-646b-4916-9fe4-79d92837afb9.png"
  },
  { 
    id: 9, 
    category: "photography", 
    title: "Event Coverage", 
    client: "Conference",
    image: "/lovable-uploads/photo-1581091226825-a6a2a5aee158.jpg"
  },
  { 
    id: 10, 
    category: "3d", 
    title: "Trade Show Booth", 
    client: "Technology Company",
    image: "/lovable-uploads/photo-1461749280684-dccba630e2f6.jpg"
  },
  { 
    id: 11, 
    category: "web", 
    title: "Mobile Application", 
    client: "Fitness Brand",
    image: "/lovable-uploads/photo-1518770660439-4636190af475.jpg"
  },
  { 
    id: 12, 
    category: "print", 
    title: "Packaging Design", 
    client: "Food Producer",
    image: "/lovable-uploads/682f810a-fae4-4744-b530-c8838bc23067.png"
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredItems = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped clients achieve their creative goals.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button 
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === "all" 
                ? "bg-masslawry-blue text-white" 
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            } transition-colors`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter("web")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === "web" 
                ? "bg-masslawry-blue text-white" 
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            } transition-colors`}
          >
            Web Solutions
          </button>
          <button 
            onClick={() => setFilter("print")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === "print" 
                ? "bg-masslawry-blue text-white" 
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            } transition-colors`}
          >
            Print Design
          </button>
          <button 
            onClick={() => setFilter("branding")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === "branding" 
                ? "bg-masslawry-blue text-white" 
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            } transition-colors`}
          >
            Branding
          </button>
          <button 
            onClick={() => setFilter("photography")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === "photography" 
                ? "bg-masslawry-blue text-white" 
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            } transition-colors`}
          >
            Photography
          </button>
          <button 
            onClick={() => setFilter("3d")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === "3d" 
                ? "bg-masslawry-blue text-white" 
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            } transition-colors`}
          >
            3D Fabrication
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group hover-lift bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-60 relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-masslawry-blue font-medium mb-2">
                  {item.category === "web" && "Web Solutions"}
                  {item.category === "print" && "Print Design"}
                  {item.category === "branding" && "Branding"}
                  {item.category === "photography" && "Photography"}
                  {item.category === "3d" && "3D Fabrication"}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">Client: {item.client}</p>
                <Link 
                  to={`/portfolio/${item.id}`}
                  className="inline-flex items-center text-sm font-medium text-masslawry-blue hover:text-masslawry-orange transition-colors"
                >
                  View Project Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            to="/contact"
            className="px-6 py-3 bg-masslawry-blue text-white rounded-lg hover:bg-masslawry-darkblue transition-colors shadow-md"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
