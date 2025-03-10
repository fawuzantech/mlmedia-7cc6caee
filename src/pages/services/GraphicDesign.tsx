
import { Paintbrush } from "lucide-react";
import { Link } from "react-router-dom";

const GraphicDesign = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-masslawry-blue">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/services" className="text-gray-500 hover:text-masslawry-blue">Services</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-masslawry-blue">Graphic Design & 3D Modeling</span>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="bg-masslawry-blue/10 p-3 rounded-full mr-4">
              <Paintbrush strokeWidth={1.5} className="w-8 h-8 text-masslawry-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Graphic Design & 3D Modeling</h1>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
            <div className="h-64 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5" 
                alt="Graphic Design" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-masslawry-lightblue/80 to-masslawry-orange/80"></div>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Creative Design Solutions</h2>
              <p className="text-gray-700 mb-6">
                Our expert designers create stunning visuals that communicate your brand's message effectively. From logos and branding to 3D models and visualizations, we bring your ideas to life with creativity and precision.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Logo & Brand Identity</h3>
                  <div className="h-40 rounded-lg overflow-hidden mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a" 
                      alt="Logo & Brand Identity" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600">Distinctive logos, color palettes, typography, and comprehensive brand guidelines.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Print & Digital Design</h3>
                  <div className="h-40 rounded-lg overflow-hidden mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1626785774573-4b799315345d" 
                      alt="Print & Digital Design" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600">Marketing materials, social media graphics, advertisements, and UI/UX design.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">3D Modeling</h3>
                  <div className="h-40 rounded-lg overflow-hidden mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1617791160505-6f00504e3519" 
                      alt="3D Modeling" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600">Product renderings, architectural visualizations, character design, and prototype models.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Illustration & Motion</h3>
                  <div className="h-40 rounded-lg overflow-hidden mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea" 
                      alt="Illustration & Motion" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600">Custom illustrations, infographics, animations, and motion graphics.</p>
                </div>
              </div>
              
              <div className="bg-masslawry-blue/5 p-6 rounded-xl mb-8">
                <h3 className="font-bold text-lg mb-2">Our Design Process</h3>
                <ol className="space-y-4 mt-4">
                  <li className="flex">
                    <div className="bg-masslawry-blue text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-medium">Discovery & Strategy</h4>
                      <p className="text-gray-600 text-sm">We learn about your brand, audience, and objectives to create a strategic foundation.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-masslawry-blue text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-medium">Concept Development</h4>
                      <p className="text-gray-600 text-sm">We create multiple design concepts based on your requirements and feedback.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-masslawry-blue text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-medium">Refinement</h4>
                      <p className="text-gray-600 text-sm">We refine the selected concept with detailed adjustments and iterations.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-masslawry-blue text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-medium">Finalization & Delivery</h4>
                      <p className="text-gray-600 text-sm">We deliver the final designs in all required formats with complete specifications.</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div className="flex justify-center">
                <Link 
                  to="/contact"
                  className="px-6 py-3 bg-masslawry-blue text-white rounded-lg hover:bg-masslawry-darkblue transition-colors shadow-md"
                >
                  Start Your Design Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
