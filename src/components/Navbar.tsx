import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Digital Printing", path: "/services/digital-printing" },
        { name: "Graphic Design", path: "/services/graphic-design" },
        { name: "Branding", path: "/services/branding" },
        { name: "Web Solutions", path: "/services/web-solutions" },
        { name: "Photography", path: "/services/photography" },
        { name: "3D Signs & Fabrication", path: "/services/3d-signs" },
      ],
    },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleMouseEnter = (name: string) => {
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    // Delay closing to allow cursor movement to dropdown
    setTimeout(() => {
      setOpenDropdown(null);
    }, 100); // Reduced delay for smoother experience
  };

  const FloatingHomeButton = () => (
    <Link
      to="/"
      className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50"
      aria-label="Back to Home"
    >
      <Home className="h-6 w-6" />
    </Link>
  );

  return (
    <>
      {/* Navbar */}
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrollPosition > 50
            ? "py-2 bg-white/80 backdrop-blur-md shadow-sm"
            : "py-6 bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/0284b227-2af7-49a1-9313-5b8b321eceb7.png"
                alt="Masslawry Logo"
                className="h-10 md:h-12"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors cursor-pointer">
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </div>

                      {openDropdown === item.name && (
                        <div
                          className="absolute top-full left-0 mt-2 w-72 rounded-lg bg-white shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto"
                          onMouseEnter={() => handleMouseEnter(item.name)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="py-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors block"
                                onClick={() => setOpenDropdown(null)}
                              >
                                <span>{subItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                to="/contact"
                className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-md hover:shadow-lg"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out transform",
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          )}
          style={{ top: "64px" }}
        >
          <div className="container mx-auto px-4 py-6 space-y-6">
            {navItems.map((item) => (
              <div key={item.name} className="space-y-2">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full text-lg font-medium text-gray-700"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          openDropdown === item.name && "rotate-180"
                        )}
                      />
                    </button>

                    {openDropdown === item.name && (
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="flex items-center space-x-3 py-2 text-sm text-gray-700"
                            onClick={() => {
                              setIsOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block text-lg font-medium text-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              className="block w-full py-3 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-md"
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
