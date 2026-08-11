import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { navItems } from '../data/navigationData';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background when scrolled
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const el = section as HTMLElement;
        const sectionTop = el.offsetTop - 100;
        const sectionHeight = el.offsetHeight;
        const sectionId = el.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Navbar height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? theme === 'dark' 
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' 
          : 'bg-white/95 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent focus:outline-none`}
              aria-label="Go to Home"
            >
              Tiewodros Bekele
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''} ${
                    theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-white hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Theme Toggle Button for Mobile */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button 
              className={`${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-white hover:text-white'
              } focus:outline-none`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className={`md:hidden ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        } p-4 animate-fade-in`}>
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''} py-3 ${
                  theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-white hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;