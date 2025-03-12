
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Home } from 'lucide-react';
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
      { 
        name: 'Digital Printing', 
        path: '/services/digital-printing',
        image: '/lovable-uploads/631d0fe8-646b-4916-9fe4-79d92837afb9.png'
      },
      { 
        name: 'Graphic Design', 
        path: '/services/graphic-design',
        image: '/lovable-uploads/e1ea17d6-b420-4039-b2f3-d02d21e1881d.png'
      },
      { 
        name: 'Branding', 
        path: '/services/branding',
        image: '/lovable-uploads/a455ab21-f546-4190-a4ef-831f234a1339.png'
      },
      { 
        name: 'Web Solutions', 
        path: '/services/web-solutions',
        image: '/lovable-uploads/054fb5cba-b15a-4d71-a744-21fea4827016.png'
      },
      { 
        name: 'Photography', 
        path: '/services/photography',
        image: '/lovable-uploads/ba9cdcf1-6446-42bc-8e84-7ab0c3cc84ca.png'
      },
      { 
        name: '3D Signs & Fabrication', 
        path: '/services/3d-signs',
        image: '/lovable-uploads/682f810a-fae4-4744-b530-c8838bc23067.png'
      },
    ]},
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const FloatingHomeButton = () => (
    <Link 
      to="/"
      className="fixed bottom-8 right-8 p-3 bg-masslawry-blue text-white rounded-full shadow-lg hover:bg-masslawry-darkblue transition-all duration-300 z-50"
      aria-label="Back to Home"
    >
      <Home className="h-6 w-6" />
    </Link>
  );
  
  return (
    <>
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300", 
        scrollPosition > 50 
          ? "py-2 bg-white/80 backdrop-blur-md shadow-sm" 
          : "py-6 bg-transparent"
      )}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/0284b227-2af7-49a1-9313-5b8b321eceb7.png" 
                alt="Masslawry Logo" 
                className="h-10 md:h-12"
              />
            </Link>
            
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button 
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
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
                    <div 
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className={cn(
                        "absolute top-full left-0 mt-2 w-72 rounded-lg bg-white shadow-lg opacity-0 invisible transition-all duration-300 transform -translate-y-2",
                        (openDropdown === item.name || item.name === openDropdown) && "opacity-100 visible translate-y-0"
                      )}
                    >
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="flex items-center px-4 py-2 hover:bg-gray-50 transition-colors"
                          >
                            <div className="w-12 h-12 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                              <img 
                                src={subItem.image} 
                                alt={subItem.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-sm font-medium">{subItem.name}</span>
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
            
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
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
                        "h-5 w-5 transition-transform", 
                        openDropdown === item.name && "rotate-180"
                      )} />
                    </button>
                    
                    <div className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      openDropdown === item.name ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}>
                      <div className="overflow-hidden">
                        <div className="space-y-2 pt-2 pl-4">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="flex items-center space-x-3 py-2"
                              onClick={() => {
                                setIsOpen(false);
                                setOpenDropdown(null);
                              }}
                            >
                              <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                                <img 
                                  src={subItem.image} 
                                  alt={subItem.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <span className="text-sm">{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <Link
              to="/contact"
              className="block w-full py-3 text-center text-white bg-masslawry-blue hover:bg-masslawry-darkblue rounded-md transition-colors shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>
      
      <FloatingHomeButton />
    </>
  );
}
