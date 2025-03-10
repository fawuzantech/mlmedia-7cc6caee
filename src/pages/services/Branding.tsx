
import { Box } from "lucide-react";
import { Link } from "react-router-dom";

const Branding = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-masslawry-blue">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/services" className="text-gray-500 hover:text-masslawry-blue">Services</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-masslawry-blue">Branding & Souvenirs</span>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="bg-masslawry-blue/10 p-3 rounded-full mr-4">
              <Box strokeWidth={1.5} className="w-8 h-8 text-masslawry-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Branding & Souvenirs</h1>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
            <div className="h-64 bg-gradient-to-r from-masslawry-orange to-masslawry-blue"></div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Complete Branding Solutions</h2>
              <p className="text-gray-700 mb-6">
                We create comprehensive branding packages and custom souvenirs that elevate your brand identity and leave a lasting impression on your customers, employees, and partners.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Brand Development</h3>
                  <p className="text-gray-600">Brand strategy, visual identity, messaging, and comprehensive brand guidelines.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Custom Souvenirs</h3>
                  <p className="text-gray-600">Branded merchandise, corporate gifts, event giveaways, and premium items.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Packaging Design</h3>
                  <p className="text-gray-600">Product packaging, labels, tags, and retail display materials that stand out.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Corporate Merchandise</h3>
                  <p className="text-gray-600">Uniforms, apparel, accessories, and custom items for your team and customers.</p>
                </div>
              </div>
              
              <div className="bg-masslawry-blue/5 p-6 rounded-xl mb-8">
                <h3 className="font-bold text-lg mb-2">Popular Branded Items</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-2 h-20 flex items-center justify-center">
                      <span className="text-2xl">👕</span>
                    </div>
                    <p className="text-sm">Apparel</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-2 h-20 flex items-center justify-center">
                      <span className="text-2xl">☕</span>
                    </div>
                    <p className="text-sm">Drinkware</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-2 h-20 flex items-center justify-center">
                      <span className="text-2xl">🖊️</span>
                    </div>
                    <p className="text-sm">Writing Tools</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-2 h-20 flex items-center justify-center">
                      <span className="text-2xl">🎒</span>
                    </div>
                    <p className="text-sm">Bags & Totes</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-2 h-20 flex items-center justify-center">
                      <span className="text-2xl">🔑</span>
                    </div>
                    <p className="text-sm">Keychains</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-2 h-20 flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                    <p className="text-sm">Tech Items</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-2 h-20 flex items-center justify-center">
                      <span className="text-2xl">🧢</span>
                    </div>
                    <p className="text-sm">Headwear</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-2 h-20 flex items-center justify-center">
                      <span className="text-2xl">🎁</span>
                    </div>
                    <p className="text-sm">Gift Sets</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Link 
                  to="/contact"
                  className="px-6 py-3 bg-masslawry-blue text-white rounded-lg hover:bg-masslawry-darkblue transition-colors shadow-md"
                >
                  Request Branding Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
