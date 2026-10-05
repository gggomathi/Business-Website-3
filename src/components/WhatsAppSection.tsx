import React, { useState } from 'react';
import { MessageCircle, Check, Send, Sparkles, Smartphone } from 'lucide-react';
import { BUSINESS_INFO, getWhatsappUrl } from '../data/sarees';

export const WhatsAppSection: React.FC = () => {
  const [selectedPreference, setSelectedPreference] = useState('All Handloom Designs');
  const [customNote, setCustomNote] = useState('');

  const preferences = [
    'All Handloom Designs',
    'Pure Silk Sarees',
    'Fine Cotton Sarees',
    'Bridal & Wedding Sarees',
    'Festive Occasion Sarees',
  ];

  const handleComposeWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    let message = `Hello RJ Fabrics, I am interested in your handloom saree collection`;
    if (selectedPreference) {
      message += ` specifically for ${selectedPreference}`;
    }
    if (customNote.trim()) {
      message += `. ${customNote.trim()}`;
    } else {
      message += `. Please share the available designs and details.`;
    }

    window.open(getWhatsappUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-950 via-purple-900 to-stone-900 text-white relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Pitch */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-300">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Personal Service
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Enquire on WhatsApp
            </h2>

            <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
              We make shopping simple and personalized. Connect directly with RJ Fabrics on WhatsApp
              to view real photos, drape videos, discuss color combinations, and place orders.
            </p>

            <div className="space-y-3 pt-2 text-sm text-purple-200">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Direct WhatsApp Number: <strong className="text-white font-mono">{BUSINESS_INFO.whatsappDisplay}</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Instant response with latest handloom designs & photos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Prompt delivery support across Tamil Nadu & throughout India</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-98 rounded-xl shadow-lg shadow-emerald-950/50 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Interactive WhatsApp Quick Helper */}
          <div className="lg:col-span-6">
            <div className="bg-white text-stone-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-purple-200/20 text-left">
              <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-purple-950">
                    Quick WhatsApp Consultation
                  </h3>
                  <p className="text-xs text-stone-500">
                    Pre-fills your message for one-click chat
                  </p>
                </div>
              </div>

              <form onSubmit={handleComposeWhatsApp} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                    What are you looking for?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {preferences.map((pref) => (
                      <button
                        type="button"
                        key={pref}
                        onClick={() => setSelectedPreference(pref)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                          selectedPreference === pref
                            ? 'bg-purple-950 text-white shadow-xs'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                        }`}
                      >
                        {pref}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Optional Note or Saree Preference
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g., Looking for a purple silk saree for an upcoming family wedding..."
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:border-purple-800 focus:ring-1 focus:ring-purple-800"
                  />
                </div>

                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-xs text-stone-600">
                  <p className="font-medium text-purple-950">Default Message Preview:</p>
                  <p className="italic mt-1 text-[11px] leading-relaxed">
                    &ldquo;Hello RJ Fabrics, I am interested in your handloom saree collection
                    {selectedPreference ? ` specifically for ${selectedPreference}` : ''}.
                    {customNote.trim() ? ` ${customNote}` : ' Please share the available designs and details.'}&rdquo;
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-98 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Start WhatsApp Chat Now</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
