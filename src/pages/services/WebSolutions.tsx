
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const WebSolutions = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-masslawry-blue">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/services" className="text-gray-500 hover:text-masslawry-blue">Services</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-masslawry-blue">Web Solutions</span>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="bg-masslawry-blue/10 p-3 rounded-full mr-4">
              <Globe strokeWidth={1.5} className="w-8 h-8 text-masslawry-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Web Solutions</h1>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
            <div className="h-64 bg-gradient-to-r from-masslawry-blue to-masslawry-lightblue"></div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Modern Digital Experiences</h2>
              <p className="text-gray-700 mb-6">
                We create custom websites, web applications, and digital experiences that engage users, drive conversions, and grow your business online. Our solutions combine beautiful design with powerful functionality.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Website Development</h3>
                  <p className="text-gray-600">Custom websites, e-commerce platforms, landing pages, and corporate sites.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Web & Mobile Applications</h3>
                  <p className="text-gray-600">Custom web apps, dashboards, client portals, and SaaS solutions.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">UI/UX Design</h3>
                  <p className="text-gray-600">User research, wireframing, prototyping, and intuitive interface design.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">Maintenance, updates, performance optimization, and security monitoring.</p>
                </div>
              </div>
              
              <div className="bg-masslawry-blue/5 p-6 rounded-xl mb-8">
                <h3 className="font-bold text-lg mb-2">Our Web Development Technologies</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <div className="font-bold text-sm mb-1">Frontend</div>
                    <p className="text-xs text-gray-600">React, Vue, Angular</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <div className="font-bold text-sm mb-1">Backend</div>
                    <p className="text-xs text-gray-600">Node.js, PHP, Python</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <div className="font-bold text-sm mb-1">CMS</div>
                    <p className="text-xs text-gray-600">WordPress, Shopify</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <div className="font-bold text-sm mb-1">E-commerce</div>
                    <p className="text-xs text-gray-600">WooCommerce, Magento</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <div className="font-bold text-sm mb-1">Database</div>
                    <p className="text-xs text-gray-600">MySQL, MongoDB</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <div className="font-bold text-sm mb-1">UI Frameworks</div>
                    <p className="text-xs text-gray-600">Tailwind, Bootstrap</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <div className="font-bold text-sm mb-1">DevOps</div>
                    <p className="text-xs text-gray-600">AWS, Docker, CI/CD</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <div className="font-bold text-sm mb-1">Analytics</div>
                    <p className="text-xs text-gray-600">Google Analytics, Matomo</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Link 
                  to="/contact"
                  className="px-6 py-3 bg-masslawry-blue text-white rounded-lg hover:bg-masslawry-darkblue transition-colors shadow-md"
                >
                  Discuss Your Web Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebSolutions;
