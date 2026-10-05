import React from 'react';
import { Sparkles, HeartHandshake, Eye, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/sarees';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Information */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-pink-700">
                Heritage & Dedication
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-950 mt-1">
                About RJ Fabrics
              </h2>
              <div className="w-16 h-1 bg-amber-600 mt-4 rounded-full" />
            </div>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
              Based in Tiruppur, Tamil Nadu, <strong>RJ Fabrics</strong> specializes in authentic handloom
              sarees, curating traditionally inspired collections that celebrate Indian weaving artistry.
              We believe every saree tells a story of meticulous handwork, heritage motifs, and grace.
            </p>

            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              Our focus is simple: bringing you handloom sarees characterized by quality-focused selection,
              comfort, and timeless elegance. Whether you are seeking refined cotton sarees for comfortable
              daily and festive wear, rich silk weaves for celebratory moments, or regal wedding bridal
              ensembles, RJ Fabrics offers an attentive, customer-friendly service to help you find the
              perfect drape.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-stone-200/80 shadow-2xs">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-purple-950">Handloom Sarees</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Authentic weaves inspired by traditional South Indian textile craftsmanship.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-stone-200/80 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-pink-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-purple-950">Quality-Focused Selection</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Carefully inspected threads, borders, and pallu motifs for enduring beauty.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-stone-200/80 shadow-2xs">
                <Eye className="w-5 h-5 text-purple-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-purple-950">Elegant Styles</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Timeless color combinations, fine zari borders, and classic motifs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-stone-200/80 shadow-2xs">
                <HeartHandshake className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-purple-950">Customer-Friendly Service</h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Personalized consultation, photos, and direct support on WhatsApp and phone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Location & Trust Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-stone-200 shadow-md p-6 sm:p-8 space-y-6 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 rounded-full blur-2xl pointer-events-none" />

              <div className="border-b border-stone-100 pb-4">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-400">
                  Business Location
                </span>
                <h3 className="font-serif text-2xl font-bold text-purple-950 mt-1">
                  Rooted in Tiruppur
                </h3>
              </div>

              <div className="space-y-4 text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-800 block">Registered Address:</span>
                    <p className="mt-1 leading-relaxed text-stone-600">
                      {BUSINESS_INFO.addressLine1}
                      <br />
                      {BUSINESS_INFO.addressLine2}
                      <br />
                      {BUSINESS_INFO.addressLine3}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100">
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-stone-500 font-medium">Business Activity:</span>
                    <span className="text-purple-950 font-semibold">Handloom Sarees Retail & Sourcing</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-stone-500 font-medium">Official GSTIN:</span>
                    <span className="font-mono text-purple-950 font-semibold">{BUSINESS_INFO.gstin}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-stone-500 font-medium">State:</span>
                    <span className="text-stone-800">Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-purple-50/70 border border-purple-100 rounded-xl">
                <p className="text-xs text-purple-900 leading-relaxed italic">
                  &ldquo;Tradition is not just what we wear, but how it is created. At RJ Fabrics, each handloom saree honours the artisan&rsquo;s craft and elevates your celebrations.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
