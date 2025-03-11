
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="mb-2">
              <img 
                src="/lovable-uploads/0284b227-2af7-49a1-9313-5b8b321eceb7.png" 
                alt="Masslawry Logo" 
                className="h-10 md:h-12"
              />
            </div>
            <p className="text-gray-400 max-w-xs">
              Your creative partner for digital printing, design, branding, web solutions, photography and 3D signs & fabrication.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/digital-printing" className="text-gray-400 hover:text-white transition-colors">Digital Printing</Link>
              </li>
              <li>
                <Link to="/services/graphic-design" className="text-gray-400 hover:text-white transition-colors">Graphic Design</Link>
              </li>
              <li>
                <Link to="/services/branding" className="text-gray-400 hover:text-white transition-colors">Branding</Link>
              </li>
              <li>
                <Link to="/services/web-solutions" className="text-gray-400 hover:text-white transition-colors">Web Solutions</Link>
              </li>
              <li>
                <Link to="/services/photography" className="text-gray-400 hover:text-white transition-colors">Photography</Link>
              </li>
              <li>
                <Link to="/services/3d-signs" className="text-gray-400 hover:text-white transition-colors">3D Signs & Fabrication</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-masslawry-orange mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Creative Avenue, Accra, Ghana</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-masslawry-orange flex-shrink-0" />
                <span className="text-gray-400">+233 (0) 302 266 450</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-masslawry-orange flex-shrink-0" />
                <span className="text-gray-400">+233 (0) 242 084 800</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-masslawry-orange flex-shrink-0" />
                <a href="mailto:info@masslawry.com" className="text-gray-400 hover:text-white transition-colors">info@masslawry.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Masslawry Multimedia. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
