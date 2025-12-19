import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2" 
          : "bg-gradient-to-r from-blue-700 via-teal-600 to-green-600 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Left Logo */}
          <div className="flex items-center gap-3 cursor-pointer group transition-transform duration-300 hover:scale-105 z-50">
            <span className="text-2xl animate-bounce">🏢</span>
            <span className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
              (isScrolled || isMobileMenuOpen) ? "text-blue-700" : "text-white"
            }`}>
              PADMAMBA
            </span>
          </div>

          {/* Desktop Menu (Hidden on mobile) */}
          <div className={`hidden md:flex items-center gap-10 font-medium transition-colors duration-300 ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}>
            <NavLink href="#services" label="Services" isScrolled={isScrolled} />
            <NavLink href="#products" label="Products" isScrolled={isScrolled} />
            <NavLink href="#contact" label="Contact" isScrolled={isScrolled} />
          </div>

          {/* Mobile Menu Button (Visible only on mobile) */}
          <div className="md:hidden flex items-center z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`text-3xl focus:outline-none transition-colors duration-300 ${
                (isScrolled || isMobileMenuOpen) ? "text-gray-800" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden absolute top-0 left-0 w-full bg-white text-gray-800 shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100 py-20" : "max-h-0 opacity-0"
        }`}>
          <div className="flex flex-col items-center gap-8 text-xl font-semibold">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition">Services</a>
            <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition">Products</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Sub-component for animated links (Desktop)
const NavLink = ({ href, label, isScrolled }) => (
  <a
    href={href}
    className="relative group overflow-hidden py-1 transition duration-300"
  >
    {label}
    {/* Animated Underline */}
    <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out ${
      isScrolled ? "bg-blue-600" : "bg-white"
    }`}></span>
  </a>
);

export default Navbar;