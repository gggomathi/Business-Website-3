import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, getWhatsappUrl } from '../data/sarees';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pb-20 md:pb-10 pt-16">
      {/* Decorative subtle border line */}
      <div className="h-0.5 bg-gradient-to-r from-amber-600 via-pink-600 to-purple-800 -mt-16 mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-left">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif tracking-widest text-2xl font-bold text-white">
                RJ FABRICS
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-pink-400 font-semibold mt-1">
                Handloom Sarees
              </p>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed pr-4">
              Handloom Sarees – Tradition Woven with Elegance. Bringing you authentic weaving
              craftsmanship from Madathukulam, Tiruppur DT, Tamil Nadu.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                Pure Handloom Weaving Heritage
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Product Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-us')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider text-xs">
              Contact RJ Fabrics
            </h4>
            <div className="space-y-3 text-sm text-stone-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-1" />
                <span className="leading-relaxed">
                  {BUSINESS_INFO.addressLine1}, {BUSINESS_INFO.addressLine2}, {BUSINESS_INFO.addressLine3}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <div className="flex flex-wrap gap-x-3 font-mono text-xs sm:text-sm text-stone-300">
                  <a href="tel:+917904396868" className="hover:text-white">
                    79043 96868
                  </a>
                  <span>·</span>
                  <a href="tel:+919894089557" className="hover:text-white">
                    98940 89557
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-mono text-xs sm:text-sm text-stone-300"
                >
                  WhatsApp: {BUSINESS_INFO.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-white text-xs sm:text-sm text-stone-300 break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="pt-2 text-xs">
                <span className="text-stone-500 uppercase tracking-wider">GSTIN: </span>
                <span className="font-mono text-stone-300 font-medium">{BUSINESS_INFO.gstin}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & GSTIN */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 RJ Fabrics. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Tiruppur, Tamil Nadu, India</span>
            <span>·</span>
            <span>GSTIN: {BUSINESS_INFO.gstin}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
