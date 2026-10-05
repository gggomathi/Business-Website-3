import React from 'react';
import { ArrowRight, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, getWhatsappUrl } from '../data/sarees';

interface HeroProps {
  onExploreCollections: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCollections, onContactClick }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-stone-900 text-stone-100">
      {/* Decorative Gold & Purple Background Pattern Overlay */}
      <div className="absolute inset-0 bg-radial from-purple-950/60 via-stone-900 to-stone-950 pointer-events-none" />
      
      {/* Subtle traditional zari border accent line at top */}
      <div className="h-1 bg-gradient-to-r from-amber-600 via-pink-600 to-purple-800" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Clean unboxed editorial kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium tracking-wider text-pink-400">
              <span className="uppercase tracking-[0.2em]">Tiruppur, Tamil Nadu</span>
              <span aria-hidden="true" className="text-stone-500">·</span>
              <span className="text-stone-300">Authentic Handloom</span>
              <span aria-hidden="true" className="text-stone-500">·</span>
              <span className="text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Pure Craftsmanship
              </span>
            </div>

            {/* Main Brand Title */}
            <div>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                RJ FABRICS
              </h1>
              <p className="mt-3 font-serif text-xl sm:text-2xl lg:text-3xl text-pink-300 font-medium tracking-wide">
                Handloom Sarees – Tradition Woven with Elegance
              </p>
            </div>

            {/* Exact User Description */}
            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
              Discover beautiful handloom sarees that bring together traditional craftsmanship,
              elegant designs and timeless style.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreCollections}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-pink-700 hover:bg-pink-800 active:scale-98 rounded-xl shadow-lg shadow-pink-950/40 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-stone-200 bg-stone-800/80 hover:bg-stone-800 hover:text-white border border-stone-700 rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Contact Us</span>
              </button>

              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-300 hover:text-emerald-200 bg-emerald-950/50 hover:bg-emerald-950/80 border border-emerald-700/50 rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Quick Contact & Trust Strip */}
            <div className="pt-6 border-t border-stone-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-stone-400">
              <div>
                <span className="block text-stone-500 uppercase tracking-wider text-[10px]">Direct Assistance</span>
                <a href={`tel:${BUSINESS_INFO.phones[0].raw}`} className="text-stone-200 hover:text-pink-400 font-mono transition-colors">
                  {BUSINESS_INFO.phones[0].display}
                </a>
              </div>
              <div>
                <span className="block text-stone-500 uppercase tracking-wider text-[10px]">WhatsApp Support</span>
                <a href={getWhatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-stone-200 hover:text-emerald-400 font-mono transition-colors">
                  {BUSINESS_INFO.whatsappDisplay}
                </a>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-stone-500 uppercase tracking-wider text-[10px]">Business Registration</span>
                <span className="text-stone-200 font-mono">GST: {BUSINESS_INFO.gstin}</span>
              </div>
            </div>
          </div>

          {/* Right Saree Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-600/30 via-pink-600/20 to-purple-600/30 rounded-2xl blur-lg opacity-70 transform rotate-1" />
              
              <div className="relative rounded-2xl overflow-hidden border border-stone-700/80 shadow-2xl bg-stone-800">
                <img
                  src="/src/assets/images/hero_saree_showcase_1791217649380.jpg"
                  alt="RJ Fabrics Handloom Saree showcase with traditional purple and magenta pallu and gold zari border"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG placeholder if image path changes
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add('flex', 'items-center', 'justify-center', 'p-8', 'text-center');
                    }
                  }}
                />

                {/* Subtle caption overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 text-left">
                  <p className="text-xs uppercase tracking-widest text-amber-400 font-medium">
                    Handloom Masterpiece
                  </p>
                  <p className="text-sm font-serif font-semibold text-white mt-0.5">
                    Authentic South Indian Weaving Heritage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
