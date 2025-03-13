import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight, Linkedin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="mb-2">
              <img
                src="/lovable-uploads/0284b227-2af7-49a1-9313-5b8b321eceb7.png"
                alt="Masslawry Logo"
                className="h-12"
              />
            </div>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Your creative partner for digital printing, design, branding, web solutions, photography and 3D signs &
              fabrication.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                className="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                className="bg-gray-800 hover:bg-blue-400 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com"
                className="bg-gray-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              <span className="relative z-10">Services</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Digital Printing", path: "/services/digital-printing" },
                { name: "Graphic Design", path: "/services/graphic-design" },
                { name: "Branding", path: "/services/branding" },
                { name: "Web Solutions", path: "/services/web-solutions" },
                { name: "Photography", path: "/services/photography" },
                { name: "3D Signs & Fabrication", path: "/services/3d-signs" },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-2 bg-blue-500 rounded-full mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              <span className="relative z-10">Company</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-2 bg-blue-500 rounded-full mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              <span className="relative z-10">Contact Info</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin
                  size={18}
                  className="mr-3 text-blue-500 mt-1 flex-shrink-0 group-hover:text-blue-400 transition-colors"
                />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  NII ALORTEY STREET, Accra, Ghana
                </span>
              </li>
              <li className="flex items-center group">
                <Phone
                  size={18}
                  className="mr-3 text-blue-500 flex-shrink-0 group-hover:text-blue-400 transition-colors"
                />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">+233 (0) 242 084 800</span>
              </li>
              <li className="flex items-center group">
                <Mail
                  size={18}
                  className="mr-3 text-blue-500 flex-shrink-0 group-hover:text-blue-400 transition-colors"
                />
                <a href="mailto:masslawry@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  masslawry@gmail.com
                </a>
              </li>
              <li className="flex items-center group">
                <Clock
                  size={18}
                  className="mr-3 text-blue-500 flex-shrink-0 group-hover:text-blue-400 transition-colors"
                />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Masslawry Multimedia. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-500 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

