import React, { useState, useEffect } from 'react';
import { ARTIST_NAME, NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-sm py-4 border-b border-gray-100' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold tracking-widest z-50 mix-blend-difference text-neutral-900">
            {ARTIST_NAME}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden z-50 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-8 text-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-serif italic hover:text-gray-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;