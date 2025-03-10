
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', dropdown: [
      { name: 'Digital Printing', path: '/services/digital-printing' },
      { name: 'Graphic Design', path: '/services/graphic-design' },
      { name: 'Branding', path: '/services/branding' },
      { name: 'Web Solutions', path: '/services/web-solutions' },
      { name: 'Photography', path: '/services/photography' },
      { name: '3D Signs & Fabrication', path: '/services/3d-signs' },
    ]},
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300", 
      scrollPosition > 50 
        ? "py-2 bg-white/80 backdrop-blur-md shadow-sm" 
        : "py-6 bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl font-bold text-masslawry-blue">
              <span className="text-masslawry-orange">M</span>asslawry
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button 
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    className="flex items-center space-x-1 text-sm font-medium hover:text-masslawry-orange transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link 
                    to={item.path} 
                    className="text-sm font-medium hover:text-masslawry-orange transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
                
                {item.dropdown && (
                  <div className={cn(
                    "absolute top-full left-0 mt-2 w-64 p-2 rounded-md glass-card opacity-0 invisible transition-all duration-300 transform -translate-y-2",
                    openDropdown === item.name && "opacity-100 visible translate-y-0",
                    "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
                  )}>
                    <div className="py-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm rounded-md hover:bg-masslawry-blue/10 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link 
              to="/contact"
              className="px-5 py-2 text-sm font-medium text-white bg-masslawry-blue hover:bg-masslawry-darkblue rounded-md transition-colors shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out transform",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
        style={{ top: '64px' }}
      >
        <div className="container mx-auto px-4 py-6 space-y-6">
          {navItems.map((item) => (
            <div key={item.name} className="space-y-2">
              {item.dropdown ? (
                <>
                  <button 
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    className="flex items-center justify-between w-full text-lg font-medium"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      openDropdown === item.name && "rotate-180"
                    )} />
                  </button>
                  <div className={cn(
                    "space-y-1 pl-4 border-l-2 border-masslawry-blue/20 overflow-hidden transition-all",
                    openDropdown === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block py-2 text-base hover:text-masslawry-orange transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link 
                  to={item.path} 
                  className="block text-lg font-medium hover:text-masslawry-orange transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          <div className="pt-4">
            <Link 
              to="/contact"
              className="block w-full py-3 text-center text-white bg-masslawry-blue hover:bg-masslawry-darkblue rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
