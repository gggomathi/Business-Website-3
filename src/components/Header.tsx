import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { BUSINESS_INFO, getWhatsappUrl } from '../data/sarees';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPhoneSelector, setShowPhoneSelector] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="group flex flex-col justify-center text-left"
          >
            <span className="font-serif tracking-widest text-2xl sm:text-3xl font-bold text-purple-950 transition-colors group-hover:text-pink-700">
              RJ FABRICS
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-pink-700 font-medium">
              Handloom Sarees
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-700">
            <button
              onClick={() => handleNavClick('home')}
              className="hover:text-purple-900 transition-colors py-1 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-purple-900 transition-colors py-1 cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('collections')}
              className="hover:text-purple-900 transition-colors py-1 cursor-pointer"
            >
              Collections
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="hover:text-purple-900 transition-colors py-1 cursor-pointer"
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="hover:text-purple-900 transition-colors py-1 cursor-pointer"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-purple-900 transition-colors py-1 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Primary Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Call Now with Quick Dropdown/Dialer */}
            <div className="relative">
              <button
                onClick={() => setShowPhoneSelector(!showPhoneSelector)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-purple-950 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-all cursor-pointer whitespace-nowrap shadow-2xs"
                title="Call RJ Fabrics"
              >
                <Phone className="w-3.5 h-3.5 text-purple-800" />
                <span>Call Now</span>
              </button>

              {showPhoneSelector && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-stone-200 rounded-xl shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-stone-400 uppercase tracking-wider border-b border-stone-100">
                    Direct Phone Lines
                  </div>
                  {BUSINESS_INFO.phones.map((phone) => (
                    <a
                      key={phone.raw}
                      href={`tel:${phone.raw}`}
                      onClick={() => setShowPhoneSelector(false)}
                      className="flex items-center justify-between px-3 py-2 text-xs text-stone-700 hover:bg-purple-50 hover:text-purple-900 transition-colors"
                    >
                      <span className="font-mono font-medium">{phone.display}</span>
                      <span className="text-[10px] text-pink-700 font-semibold uppercase">Call</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* WhatsApp Button */}
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 text-emerald-600 bg-emerald-50 rounded-lg"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-purple-900 hover:bg-stone-100 rounded-lg cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 pt-2 pb-4">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2 px-3 text-base font-medium text-stone-800 hover:bg-purple-50 hover:text-purple-900 rounded-lg"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 px-3 text-base font-medium text-stone-800 hover:bg-purple-50 hover:text-purple-900 rounded-lg"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('collections')}
              className="text-left py-2 px-3 text-base font-medium text-stone-800 hover:bg-purple-50 hover:text-purple-900 rounded-lg"
            >
              Collections
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="text-left py-2 px-3 text-base font-medium text-stone-800 hover:bg-purple-50 hover:text-purple-900 rounded-lg"
            >
              Product Gallery
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="text-left py-2 px-3 text-base font-medium text-stone-800 hover:bg-purple-50 hover:text-purple-900 rounded-lg"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 px-3 text-base font-medium text-stone-800 hover:bg-purple-50 hover:text-purple-900 rounded-lg"
            >
              Contact RJ Fabrics
            </button>
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2.5">
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
              Contact Directly
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-purple-950 bg-purple-50 border border-purple-200 rounded-lg text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>79043 96868</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phones[1].raw}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-purple-950 bg-purple-50 border border-purple-200 rounded-lg text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>98940 89557</span>
              </a>
            </div>
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-white bg-emerald-600 rounded-lg text-center shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp (98940 89557)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
