import React from 'react';
import { Sparkles, Palette, ShieldCheck, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      title: 'Traditional Handloom',
      description: 'Celebrating traditional Indian weaving and saree designs.',
      icon: Sparkles,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      title: 'Elegant Designs',
      description: 'Collections selected for timeless and attractive styles.',
      icon: Palette,
      color: 'text-pink-700',
      bg: 'bg-pink-50',
    },
    {
      title: 'Quality Focus',
      description: 'A focus on quality and customer satisfaction.',
      icon: ShieldCheck,
      color: 'text-purple-900',
      bg: 'bg-purple-50',
    },
    {
      title: 'Personal Service',
      description: 'Friendly assistance for customers looking for the right saree.',
      icon: HeartHandshake,
      color: 'text-emerald-700',
      bg: 'bg-emerald-50',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-pink-700">
            Our Commitment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-950 mt-1">
            Why Choose RJ Fabrics
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            We are dedicated to presenting authentic handloom sarees with honest advice, reliable quality,
            and personal care for every customer.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-stone-50 rounded-2xl p-7 border border-stone-200 shadow-2xs hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-purple-950">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/60">
                  <span className="text-[11px] font-semibold tracking-wider text-pink-800 uppercase">
                    RJ Fabrics Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
