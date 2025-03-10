
import { Printer } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalPrinting = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-masslawry-blue">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/services" className="text-gray-500 hover:text-masslawry-blue">Services</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-masslawry-blue">Digital Printing</span>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="bg-masslawry-blue/10 p-3 rounded-full mr-4">
              <Printer strokeWidth={1.5} className="w-8 h-8 text-masslawry-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Digital Printing Services</h1>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
            <div className="h-64 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1" 
                alt="Digital Printing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-masslawry-blue/80 to-masslawry-lightblue/80"></div>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">High-Quality Print Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our digital printing services provide exceptional quality with fast turnaround times. We use state-of-the-art equipment to deliver vibrant, precise prints for all your business and personal needs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Large Format Printing</h3>
                  <div className="h-40 rounded-lg overflow-hidden mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1613978513693-124634ba49e3" 
                      alt="Large Format Printing" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600">Banners, posters, signage, and displays with vibrant colors and sharp details.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Business Materials</h3>
                  <div className="h-40 rounded-lg overflow-hidden mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1574351406668-19e0a67850a7" 
                      alt="Business Materials" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600">Business cards, letterheads, brochures, flyers, and presentation folders.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Marketing Collateral</h3>
                  <div className="h-40 rounded-lg overflow-hidden mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" 
                      alt="Marketing Collateral" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600">Catalogs, postcards, direct mail, and promotional materials to boost your campaigns.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Custom Merchandise</h3>
                  <div className="h-40 rounded-lg overflow-hidden mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f" 
                      alt="Custom Merchandise" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600">T-shirts, mugs, promotional items, and personalized gifts with your branding.</p>
                </div>
              </div>
              
              <div className="bg-masslawry-blue/5 p-6 rounded-xl mb-8">
                <h3 className="font-bold text-lg mb-2">Why Choose Our Printing Services?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-masslawry-blue text-white rounded-full p-1 mr-2 text-xs">✓</span>
                    <span>Fast turnaround times with rush options available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-masslawry-blue text-white rounded-full p-1 mr-2 text-xs">✓</span>
                    <span>Exceptional color accuracy and detail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-masslawry-blue text-white rounded-full p-1 mr-2 text-xs">✓</span>
                    <span>Eco-friendly materials and practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-masslawry-blue text-white rounded-full p-1 mr-2 text-xs">✓</span>
                    <span>Professional consultation to optimize your print materials</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center">
                <Link 
                  to="/contact"
                  className="px-6 py-3 bg-masslawry-blue text-white rounded-lg hover:bg-masslawry-darkblue transition-colors shadow-md"
                >
                  Get a Quote for Your Printing Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalPrinting;
