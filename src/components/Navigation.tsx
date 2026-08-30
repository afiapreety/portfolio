import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['about', 'work', 'education', 'skills', 'contact'];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 text-white transition-all duration-300 ${scrolled ? 'border-b border-violet-300/10 bg-ocean/80 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => handleNavClick('home')}
            className="text-sm font-medium tracking-tight text-white transition-colors hover:text-primary"
          >
            Afia Anjum Preety
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`text-sm capitalize transition-colors ${
                  activeSection === item 
                    ? 'text-primary font-medium'
                    : 'text-slate-300 hover:text-primary'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="text-slate-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-violet-300/10 bg-ocean/95 backdrop-blur-xl md:hidden">
          <div className="px-6 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="block w-full py-2 text-left text-sm capitalize text-slate-300 hover:text-primary"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
