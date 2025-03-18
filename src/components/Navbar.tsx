"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "What We Do", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <>
      {/* Navbar */}
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrollPosition > 50 ? "py-2 bg-white/80 backdrop-blur-md shadow-sm" : "py-6 bg-transparent",
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
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
                >
                  {item.name}
                </Link>
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
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
          )}
          style={{ top: "64px" }}
        >
          <div className="container mx-auto px-4 py-6 space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-lg font-medium text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
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
    </>
  )
}

