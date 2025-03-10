
import { Box } from "lucide-react";
import { Link } from "react-router-dom";

const ThreeDSigns = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-masslawry-blue">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/services" className="text-gray-500 hover:text-masslawry-blue">Services</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-masslawry-blue">3D Signs & Fabrication</span>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="bg-masslawry-blue/10 p-3 rounded-full mr-4">
              <Box strokeWidth={1.5} className="w-8 h-8 text-masslawry-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">3D Signs & Fabrication</h1>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
            <div className="h-64 bg-gradient-to-r from-masslawry-orange to-masslawry-blue"></div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Custom 3D Signs & Fabrication</h2>
              <p className="text-gray-700 mb-6">
                Make your brand stand out with our custom 3D signs, displays, and fabrication services. We create high-impact visual elements that help your business get noticed and remembered.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">3D Business Signs</h3>
                  <p className="text-gray-600">Dimensional lettering, logo signs, reception signs, and corporate branding elements.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Retail Displays</h3>
                  <p className="text-gray-600">Product displays, point-of-purchase displays, window displays, and kiosks.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Exhibition & Events</h3>
                  <p className="text-gray-600">Trade show booths, event signage, backdrop walls, and promotional elements.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Custom Fabrication</h3>
                  <p className="text-gray-600">Prototypes, architectural elements, art installations, and specialty items.</p>
                </div>
              </div>
              
              <div className="bg-masslawry-blue/5 p-6 rounded-xl mb-8">
                <h3 className="font-bold text-lg mb-2">Materials & Techniques</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <div className="font-bold text-sm mb-1">Acrylic</div>
                    <p className="text-xs text-gray-600">Clear, colored, frosted</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <div className="font-bold text-sm mb-1">Metal</div>
                    <p className="text-xs text-gray-600">Aluminum, stainless steel</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <div className="font-bold text-sm mb-1">Wood</div>
                    <p className="text-xs text-gray-600">Natural and engineered</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <div className="font-bold text-sm mb-1">PVC & Foam</div>
                    <p className="text-xs text-gray-600">Lightweight, versatile</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <div className="font-bold text-sm mb-1">LED Lighting</div>
                    <p className="text-xs text-gray-600">Front & back illumination</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <div className="font-bold text-sm mb-1">Digital Printing</div>
                    <p className="text-xs text-gray-600">Full-color graphics</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <div className="font-bold text-sm mb-1">CNC Cutting</div>
                    <p className="text-xs text-gray-600">Precision fabrication</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <div className="font-bold text-sm mb-1">3D Printing</div>
                    <p className="text-xs text-gray-600">Prototypes, complex shapes</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <div className="font-bold text-sm mb-1">Laser Engraving</div>
                    <p className="text-xs text-gray-600">Detailed finishes</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Link 
                  to="/contact"
                  className="px-6 py-3 bg-masslawry-blue text-white rounded-lg hover:bg-masslawry-darkblue transition-colors shadow-md"
                >
                  Request a Custom 3D Sign Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDSigns;
