import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { COLLECTIONS_DATA, CollectionCategory } from '../data/sarees';

interface CollectionsProps {
  onSelectCategory: (categoryKey: string) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectCategory }) => {
  return (
    <section id="collections" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] font-semibold text-pink-700 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Weaves
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-950">
            Handloom Saree Collections
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Explore our curated handloom saree categories, woven with authentic fibers, traditional motifs,
            and timeless aesthetics for every milestone and celebration.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS_DATA.map((item: CollectionCategory, index) => {
            // Span 2 columns for the first featured item on large screens for visual interest
            const isFeatured = index === 0;

            return (
              <div
                key={item.id}
                className={`group flex flex-col bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Container with 4:3 or 16:9 aspect */}
                <div className={`relative overflow-hidden ${isFeatured ? 'h-64 sm:h-80' : 'h-64'}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Subtle category title floating overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                      Handloom Series
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Content area */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left space-y-4">
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => onSelectCategory(item.categoryKey)}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-950 group-hover:text-pink-700 transition-colors cursor-pointer"
                    >
                      <span>View Collection</span>
                      <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
