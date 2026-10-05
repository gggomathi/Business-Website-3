import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, X } from 'lucide-react';
import { BUSINESS_INFO, getWhatsappUrl } from '../data/sarees';

interface MobileBottomBarProps {
  onEnquireClick: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onEnquireClick }) => {
  const [showCallModal, setShowCallModal] = useState(false);

  return (
    <>
      {/* Sticky Bottom Bar on Mobile only */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-stone-200 shadow-2xl py-2 px-3 backdrop-blur-md">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* Call Button */}
          <button
            onClick={() => setShowCallModal(true)}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-purple-50 text-purple-950 font-semibold text-xs active:bg-purple-100 transition-colors"
          >
            <Phone className="w-4 h-4 mb-1 text-purple-900" />
            <span className="text-[11px] leading-none">Call Now</span>
          </button>

          {/* WhatsApp Button */}
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white font-semibold text-xs active:bg-emerald-700 shadow-2xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 mb-1 fill-current" />
            <span className="text-[11px] leading-none">WhatsApp</span>
          </a>

          {/* Enquire Button */}
          <button
            onClick={onEnquireClick}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-pink-700 text-white font-semibold text-xs active:bg-pink-800 transition-colors"
          >
            <Mail className="w-4 h-4 mb-1" />
            <span className="text-[11px] leading-none">Enquire</span>
          </button>
        </div>
      </div>

      {/* Call Selector Modal */}
      {showCallModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl w-full max-w-sm p-5 shadow-2xl border border-stone-200 text-left animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-400">
                Direct Call
              </span>
              <button
                onClick={() => setShowCallModal(false)}
                className="p-1 text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-xs text-stone-600 mb-3">
                Select a phone line to connect directly with RJ Fabrics:
              </p>
              {BUSINESS_INFO.phones.map((phone) => (
                <a
                  key={phone.raw}
                  href={`tel:${phone.raw}`}
                  onClick={() => setShowCallModal(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-950 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-purple-800" />
                    <span className="font-mono text-sm font-semibold">{phone.display}</span>
                  </div>
                  <span className="text-xs font-semibold text-pink-700 uppercase">Dial</span>
                </a>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 text-center">
              <button
                onClick={() => setShowCallModal(false)}
                className="text-xs text-stone-500 font-medium py-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
