import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Triggers', href: '#triggers' },
    { name: 'Process', href: '#process' },
    { name: 'Customization', href: '#customization' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold tracking-tight text-white font-mono">
              HandshakeIO
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#report"
              className="px-4 py-2 border border-emerald-500/30 text-emerald-400 text-sm font-medium rounded hover:bg-emerald-500/10 transition-colors font-mono"
            >
              Get Sample Report
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-400 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#report"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 px-3 py-2 rounded-md text-base font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-center"
            >
              Get Sample Report
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;