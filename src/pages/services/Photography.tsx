
import { Camera } from "lucide-react";
import { Link } from "react-router-dom";

const Photography = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-masslawry-blue">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/services" className="text-gray-500 hover:text-masslawry-blue">Services</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-masslawry-blue">Photography</span>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="bg-masslawry-blue/10 p-3 rounded-full mr-4">
              <Camera strokeWidth={1.5} className="w-8 h-8 text-masslawry-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Photography Services</h1>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
            <div className="h-64 bg-gradient-to-r from-masslawry-darkblue to-masslawry-blue"></div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Professional Photography</h2>
              <p className="text-gray-700 mb-6">
                Our professional photography services capture the essence of your brand, products, and events with stunning visuals that tell your story and engage your audience.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Product Photography</h3>
                  <p className="text-gray-600">High-quality product shots, catalog images, and e-commerce photography.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Corporate Photography</h3>
                  <p className="text-gray-600">Headshots, team photos, workplace imagery, and corporate events.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Event Photography</h3>
                  <p className="text-gray-600">Conferences, trade shows, company functions, and special occasions.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Architectural Photography</h3>
                  <p className="text-gray-600">Interior and exterior shots, real estate photography, and location imagery.</p>
                </div>
              </div>
              
              <div className="bg-masslawry-blue/5 p-6 rounded-xl mb-8">
                <h3 className="font-bold text-lg mb-2">Our Photography Process</h3>
                <ol className="space-y-4 mt-4">
                  <li className="flex">
                    <div className="bg-masslawry-blue text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-medium">Consultation</h4>
                      <p className="text-gray-600 text-sm">We discuss your needs, style preferences, and how the images will be used.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-masslawry-blue text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-medium">Session Planning</h4>
                      <p className="text-gray-600 text-sm">We prepare a shot list, schedule, and coordinate logistics for the shoot.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-masslawry-blue text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-medium">Photography Session</h4>
                      <p className="text-gray-600 text-sm">Our professional photographers execute the shoot with attention to detail.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-masslawry-blue text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-medium">Post-Production</h4>
                      <p className="text-gray-600 text-sm">We select the best shots, apply professional editing, and prepare final images.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-masslawry-blue text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-medium">Delivery & Feedback</h4>
                      <p className="text-gray-600 text-sm">We provide the images in your preferred formats and ensure your satisfaction.</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div className="flex justify-center">
                <Link 
                  to="/contact"
                  className="px-6 py-3 bg-masslawry-blue text-white rounded-lg hover:bg-masslawry-darkblue transition-colors shadow-md"
                >
                  Book a Photography Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
