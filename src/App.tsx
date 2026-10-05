import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Collections } from './components/Collections';
import { ProductGallery } from './components/ProductGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WhatsAppSection } from './components/WhatsAppSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Sarees');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCollection = (categoryName: string) => {
    setSelectedCategory(categoryName);
    scrollToSection('gallery');
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-purple-950 selection:text-white antialiased">
      {/* Sticky Navigation Bar */}
      <Header onNavigate={scrollToSection} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreCollections={() => scrollToSection('collections')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* About RJ Fabrics */}
        <About />

        {/* Handloom Saree Collections */}
        <Collections onSelectCategory={handleSelectCollection} />

        {/* Product / Saree Gallery */}
        <ProductGallery
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Why Choose RJ Fabrics */}
        <WhyChooseUs />

        {/* WhatsApp Consultation & Enquiry CTA */}
        <WhatsAppSection />

        {/* Contact Section with Maps & Business Details */}
        <ContactSection />
      </main>

      {/* Professional Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Mobile-First Fixed Contact Bottom Bar */}
      <MobileBottomBar onEnquireClick={() => scrollToSection('contact')} />
    </div>
  );
}
