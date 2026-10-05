import React, { useState } from 'react';
import { MessageCircle, ZoomIn, X, Sparkles, Filter, Info, UploadCloud, Plus } from 'lucide-react';
import { SAREE_PRODUCTS, SareeProduct, getProductWhatsappUrl, getWhatsappUrl } from '../data/sarees';

interface ProductGalleryProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const [activeModalSaree, setActiveModalSaree] = useState<SareeProduct | null>(null);
  const [customSarees, setCustomSarees] = useState<SareeProduct[]>([]);
  const [showAddCustomModal, setShowAddCustomModal] = useState(false);
  const [customForm, setCustomForm] = useState({
    name: '',
    category: 'Silk Sarees' as SareeProduct['category'],
    description: '',
    fabric: 'Pure Handloom Silk',
    weaveDetail: '',
    colorTone: '',
    imageUrl: '',
  });

  const allSarees = [...customSarees, ...SAREE_PRODUCTS];

  const categories = [
    'All Sarees',
    'Traditional Handloom',
    'Cotton Sarees',
    'Silk Sarees',
    'Wedding Collection',
    'Festive Collection',
  ];

  const filteredSarees =
    selectedCategory === 'All Sarees'
      ? allSarees
      : allSarees.filter((saree) => saree.category === selectedCategory);

  const handleAddCustomSaree = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customForm.name || !customForm.imageUrl) return;

    const newSaree: SareeProduct = {
      id: `custom-${Date.now()}`,
      name: customForm.name,
      category: customForm.category,
      description: customForm.description || 'Authentic handloom saree by RJ Fabrics.',
      fabric: customForm.fabric || 'Handloom',
      weaveDetail: customForm.weaveDetail || 'Traditional Handcrafted Weave',
      colorTone: customForm.colorTone || 'Traditional Shades',
      image: customForm.imageUrl,
    };

    setCustomSarees([newSaree, ...customSarees]);
    setShowAddCustomModal(false);
    setCustomForm({
      name: '',
      category: 'Silk Sarees',
      description: '',
      fabric: 'Pure Handloom Silk',
      weaveDetail: '',
      colorTone: '',
      imageUrl: '',
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomForm((prev) => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] font-semibold text-pink-700 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Handloom Showcase
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-950">
            Saree Gallery
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Browse our handpicked creations. Click on any design to inspect the weave craftsmanship or
            enquire directly on WhatsApp for color options, drape videos, and current availability.
          </p>
        </div>

        {/* Filter Bar and Owner Photo Helper */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Functional Segmented Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto p-1 bg-stone-200/80 rounded-xl scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-purple-950 text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-900 hover:bg-stone-300/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Business Owner Photo Upload / Custom Preview Trigger */}
          <div className="w-full sm:w-auto flex justify-end">
            <button
              onClick={() => setShowAddCustomModal(true)}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-purple-900 bg-white border border-purple-200 hover:border-purple-300 rounded-lg shadow-2xs hover:bg-purple-50 transition-colors cursor-pointer"
              title="Add or replace photos with real RJ Fabrics saree products"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Preview Owner Photo</span>
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSarees.map((saree) => {
            const whatsappUrl = getProductWhatsappUrl(saree.name, saree.category);

            return (
              <div
                key={saree.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-2xs hover:shadow-lg transition-all duration-300 text-left"
              >
                {/* Image Container with Zoom Affordance */}
                <div className="relative h-64 overflow-hidden bg-stone-100 cursor-pointer" onClick={() => setActiveModalSaree(saree)}>
                  <img
                    src={saree.image}
                    alt={`${saree.name} - Handloom Saree from RJ Fabrics`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-black/75 text-white rounded-lg backdrop-blur-xs">
                      <ZoomIn className="w-3.5 h-3.5" />
                      View Details
                    </span>
                  </div>

                  {/* Clean unboxed category label */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-semibold tracking-wider text-purple-950 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md shadow-2xs uppercase">
                      {saree.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3
                      onClick={() => setActiveModalSaree(saree)}
                      className="font-serif text-lg font-bold text-stone-900 group-hover:text-purple-950 transition-colors line-clamp-1 cursor-pointer"
                      title={saree.name}
                    >
                      {saree.name}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {saree.description}
                    </p>

                    {/* Fabric details unboxed */}
                    <div className="pt-2 text-[11px] text-stone-500 flex flex-wrap gap-x-2 gap-y-0.5">
                      <span className="font-medium text-stone-700">{saree.fabric}</span>
                      <span aria-hidden="true">·</span>
                      <span>{saree.colorTone}</span>
                    </div>
                  </div>

                  {/* WhatsApp Enquiry Button */}
                  <div className="pt-2 border-t border-stone-100">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-98 rounded-xl shadow-2xs transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSarees.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 p-8">
            <Info className="w-8 h-8 text-stone-400 mx-auto mb-2" />
            <p className="text-stone-600 font-medium">No sarees found in this category.</p>
            <button
              onClick={() => onCategoryChange('All Sarees')}
              className="mt-3 px-4 py-2 text-xs font-semibold text-purple-950 bg-purple-50 rounded-lg hover:bg-purple-100"
            >
              View All Collections
            </button>
          </div>
        )}

        {/* Saree Detail & Weave Lightbox Modal */}
        {activeModalSaree && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-in zoom-in-95 duration-200">
              <button
                onClick={() => setActiveModalSaree(null)}
                className="absolute top-3 right-3 z-10 p-2 text-stone-500 hover:text-stone-900 bg-white/80 hover:bg-white rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-72 md:h-full bg-stone-900">
                  <img
                    src={activeModalSaree.image}
                    alt={activeModalSaree.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between text-left space-y-6">
                  <div className="space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-pink-700">
                      {activeModalSaree.category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-purple-950">
                      {activeModalSaree.name}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {activeModalSaree.description}
                    </p>

                    <div className="pt-3 border-t border-stone-100 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-stone-500 font-medium">Fabric Quality:</span>
                        <span className="font-semibold text-stone-800">{activeModalSaree.fabric}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500 font-medium">Weaving Highlight:</span>
                        <span className="font-semibold text-stone-800">{activeModalSaree.weaveDetail}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500 font-medium">Color Palette:</span>
                        <span className="font-semibold text-stone-800">{activeModalSaree.colorTone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 space-y-3">
                    <p className="text-[11px] text-stone-500 leading-snug">
                      Contact RJ Fabrics on WhatsApp with this saree name to request available color
                      variations, drape photos, or video calls directly from our Tiruppur counter.
                    </p>

                    <a
                      href={getProductWhatsappUrl(activeModalSaree.name, activeModalSaree.category)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Business Owner Photo Upload Modal */}
        {showAddCustomModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 text-left">
              <button
                onClick={() => setShowAddCustomModal(false)}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-pink-700">
                  Business Owner Tool
                </span>
                <h3 className="font-serif text-2xl font-bold text-purple-950 mt-1">
                  Preview Your RJ Fabrics Photo
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Test and showcase actual saree photos taken in your shop or workshop.
                </p>
              </div>

              <form onSubmit={handleAddCustomSaree} className="space-y-4 text-sm">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Saree Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Pure Kanchipuram Weave Purple Silk Saree"
                    value={customForm.name}
                    onChange={(e) => setCustomForm({ ...customForm, name: e.target.value })}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:border-purple-800"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Collection Category
                    </label>
                    <select
                      value={customForm.category}
                      onChange={(e) =>
                        setCustomForm({
                          ...customForm,
                          category: e.target.value as SareeProduct['category'],
                        })
                      }
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs bg-white focus:outline-none focus:border-purple-800"
                    >
                      <option value="Traditional Handloom">Traditional Handloom</option>
                      <option value="Cotton Sarees">Cotton Sarees</option>
                      <option value="Silk Sarees">Silk Sarees</option>
                      <option value="Wedding Collection">Wedding Collection</option>
                      <option value="Festive Collection">Festive Collection</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Fabric
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Pure Silk, Fine Cotton"
                      value={customForm.fabric}
                      onChange={(e) => setCustomForm({ ...customForm, fabric: e.target.value })}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs focus:outline-none focus:border-purple-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Upload Saree Photo or Paste Image URL *
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-stone-300 rounded-xl cursor-pointer hover:bg-stone-50 transition-colors">
                      <UploadCloud className="w-5 h-5 text-stone-500" />
                      <span className="text-xs font-medium text-stone-600">
                        Upload Image from Device
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>

                    <div className="text-center text-[11px] text-stone-400 font-medium">OR</div>

                    <input
                      type="url"
                      placeholder="https://example.com/saree-photo.jpg"
                      value={customForm.imageUrl}
                      onChange={(e) => setCustomForm({ ...customForm, imageUrl: e.target.value })}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs focus:outline-none focus:border-purple-800"
                    />
                  </div>
                  {customForm.imageUrl && (
                    <div className="mt-2 h-24 rounded-lg overflow-hidden border border-stone-200">
                      <img
                        src={customForm.imageUrl}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddCustomModal(false)}
                    className="px-4 py-2 text-xs font-medium text-stone-600 hover:bg-stone-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-purple-950 hover:bg-purple-900 rounded-lg shadow-2xs"
                  >
                    Add to Gallery
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
