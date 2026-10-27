import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageType } from '../types/portfolio';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'SERVICES', page: 'services' },
    { label: 'PROJECTS', page: 'projects' },
    { label: 'ABOUT', page: 'about' },
    { label: 'CONTACT', page: 'contact' },
  ];

  const handleLink = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-30 bg-[#faf8f3]/95 backdrop-blur-md border-b border-black/5 shadow-xs">
      <nav className="w-[min(1160px,92%)] mx-auto h-[76px] flex items-center justify-between gap-5">
        {/* Brand Logo */}
        <button
          type="button"
          onClick={() => handleLink('home')}
          className="flex items-center gap-2.5 text-[21px] font-extrabold tracking-[-1.2px] text-[#171717] hover:opacity-90 transition-opacity bg-transparent border-0 p-0 cursor-pointer"
        >
          <img
            src="/public/assets/aistudio/image_0c1aed62.png"
            alt="Md. Abdul Alek"
            className="w-8 h-8 rounded-full object-cover border-2 border-[#ffbd20] shadow-xs"
          />
          <span>ALEK.DEV</span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-[28px] text-[11px] font-extrabold text-[#171717]">
          {navLinks.map((item) => (
            <button
              key={item.page}
              type="button"
              onClick={() => handleLink(item.page)}
              className={`py-2 bg-transparent border-0 border-b-2 transition-all cursor-pointer font-bold ${
                currentPage === item.page
                  ? 'border-[#ffbd20] text-[#171717]'
                  : 'border-transparent text-[#171717] hover:text-[#d99a00]'
              }`}
              aria-current={currentPage === item.page ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Primary Action Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleLink('contact')}
            className="hidden sm:inline-flex items-center justify-center gap-2 bg-[#ffbd20] hover:bg-[#f4a900] text-[#171717] px-5 py-3 rounded-md text-xs font-extrabold transition-all hover:-translate-y-0.5 cursor-pointer border-0 shadow-xs active:translate-y-0"
          >
            LET'S WORK TOGETHER ↗
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#171717] bg-transparent border-0 cursor-pointer"
            aria-label="Open navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf8f3] border-b border-[#dedbd4] px-6 py-5 space-y-2">
          {navLinks.map((item) => (
            <button
              key={item.page}
              type="button"
              onClick={() => handleLink(item.page)}
              className={`w-full text-left py-2.5 text-xs font-extrabold block border-b border-black/5 bg-transparent ${
                currentPage === item.page ? 'text-[#d99a00]' : 'text-[#171717]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => handleLink('contact')}
              className="w-full py-3 bg-[#ffbd20] text-[#171717] text-xs font-extrabold rounded-md border-0 cursor-pointer"
            >
              LET'S WORK TOGETHER ↗
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
