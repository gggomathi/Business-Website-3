export interface SareeProduct {
  id: string;
  name: string;
  category: 'Traditional Handloom' | 'Cotton Sarees' | 'Silk Sarees' | 'Wedding Collection' | 'Festive Collection';
  description: string;
  fabric: string;
  weaveDetail: string;
  colorTone: string;
  image: string;
  featured?: boolean;
}

export interface CollectionCategory {
  id: string;
  name: string;
  categoryKey: 'Traditional Handloom' | 'Cotton Sarees' | 'Silk Sarees' | 'Wedding Collection' | 'Festive Collection';
  description: string;
  image: string;
  accent: string;
}

export const BUSINESS_INFO = {
  name: 'RJ FABRICS',
  tagline: 'Handloom Sarees',
  heroSubtitle: 'Handloom Sarees – Tradition Woven with Elegance',
  heroDescription:
    'Discover beautiful handloom sarees that bring together traditional craftsmanship, elegant designs and timeless style.',
  addressLine1: 'No. 890, B, Sakthi Nagar, Narasingapuram Village',
  addressLine2: 'Krishnapuram Post, Madathukulam TK',
  addressLine3: 'Tiruppur DT – 642111, Tamil Nadu, India',
  fullAddress:
    'No. 890, B, Sakthi Nagar, Narasingapuram Village, Krishnapuram Post, Madathukulam TK, Tiruppur DT – 642111, Tamil Nadu, India',
  phones: [
    { display: '79043 96868', raw: '+917904396868' },
    { display: '98940 89557', raw: '+919894089557' },
  ],
  whatsappNumber: '919894089557',
  whatsappDisplay: '98940 89557',
  email: 'jjayakrishnan289@gmail.com',
  gstin: '33ASPPJ3998R1ZL',
  defaultWhatsappMessage:
    'Hello RJ Fabrics, I am interested in your handloom saree collection. Please share the available designs and details.',
};

export const getWhatsappUrl = (customMessage?: string) => {
  const message = customMessage || BUSINESS_INFO.defaultWhatsappMessage;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const getProductWhatsappUrl = (sareeName: string, category: string) => {
  const message = `Hello RJ Fabrics, I am interested in "${sareeName}" (${category}) from your handloom collection. Please share the available designs, fabric details, and photos.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const COLLECTIONS_DATA: CollectionCategory[] = [
  {
    id: 'cat-traditional',
    name: 'Traditional Handloom Sarees',
    categoryKey: 'Traditional Handloom',
    description: 'Traditional designs inspired by Indian weaving heritage.',
    image: '/src/assets/images/hero_saree_showcase_1791217649380.jpg',
    accent: 'bg-purple-900',
  },
  {
    id: 'cat-cotton',
    name: 'Cotton Sarees',
    categoryKey: 'Cotton Sarees',
    description: 'Comfortable and elegant sarees suitable for everyday and traditional wear.',
    image: '/src/assets/images/category_cotton_saree_1791217682982.jpg',
    accent: 'bg-emerald-900',
  },
  {
    id: 'cat-silk',
    name: 'Silk Sarees',
    categoryKey: 'Silk Sarees',
    description: 'Elegant sarees suitable for celebrations and special occasions.',
    image: '/src/assets/images/category_silk_saree_1791217668069.jpg',
    accent: 'bg-purple-950',
  },
  {
    id: 'cat-wedding',
    name: 'Wedding Collection',
    categoryKey: 'Wedding Collection',
    description: 'Traditional and elegant sarees for wedding occasions.',
    image: '/src/assets/images/category_wedding_saree_1791217698720.jpg',
    accent: 'bg-pink-900',
  },
  {
    id: 'cat-festive',
    name: 'Festive Collection',
    categoryKey: 'Festive Collection',
    description: 'Beautiful designs suitable for festivals and celebrations.',
    image: '/src/assets/images/category_festive_saree_1791217710843.jpg',
    accent: 'bg-amber-900',
  },
];

export const SAREE_PRODUCTS: SareeProduct[] = [
  {
    id: 'saree-1',
    name: 'Regal Violet & Gold Zari Pure Silk Saree',
    category: 'Silk Sarees',
    description: 'Luxurious pure handloom silk saree with rich woven gold zari borders and opulent contrast pallu.',
    fabric: 'Pure Handloom Silk',
    weaveDetail: 'Traditional Korvai Border with Zari Buttas',
    colorTone: 'Royal Purple & Antique Gold',
    image: '/src/assets/images/category_silk_saree_1791217668069.jpg',
    featured: true,
  },
  {
    id: 'saree-2',
    name: 'Heritage South Indian Fine Cotton Saree',
    category: 'Cotton Sarees',
    description: 'Breathable, lightweight handloom cotton saree adorned with delicate contrast temple weaving.',
    fabric: 'Fine Count Handloom Cotton',
    weaveDetail: 'Temple Border with Minimalist Pallu Stripes',
    colorTone: 'Earthy Mustard & Forest Green Border',
    image: '/src/assets/images/category_cotton_saree_1791217682982.jpg',
    featured: true,
  },
  {
    id: 'saree-3',
    name: 'Grand Bridal Magenta Wedding Silk Saree',
    category: 'Wedding Collection',
    description: 'Exquisite bridal trousseau saree featuring dense zari jacquard motifs and auspicious temple pallu.',
    fabric: 'Traditional Bridal Heavy Silk',
    weaveDetail: 'Rich Mayil (Peacock) & Mango Zari Motifs',
    colorTone: 'Deep Magenta Pink & Pure Golden Zari',
    image: '/src/assets/images/category_wedding_saree_1791217698720.jpg',
    featured: true,
  },
  {
    id: 'saree-4',
    name: 'Celebration Festive Gold Butta Saree',
    category: 'Festive Collection',
    description: 'Bright festive handloom saree with glowing woven buttas and graceful traditional drape.',
    fabric: 'Silk-Cotton Handloom Blend',
    weaveDetail: 'Shimmering Jacquard Zari Butta Work',
    colorTone: 'Royal Aubergine & Rich Gold',
    image: '/src/assets/images/category_festive_saree_1791217710843.jpg',
    featured: true,
  },
  {
    id: 'saree-5',
    name: 'Classic Handloom Weave Heritage Saree',
    category: 'Traditional Handloom',
    description: 'Authentic artisan-woven handloom saree reflecting timeless South Indian textile traditions.',
    fabric: 'Pure Handloom Silk Blend',
    weaveDetail: 'Handcrafted Border with Authentic Selvedge',
    colorTone: 'Deep Plum & Crimson Pink Accent',
    image: '/src/assets/images/hero_saree_showcase_1791217649380.jpg',
    featured: true,
  },
  {
    id: 'saree-6',
    name: 'Madathukulam Fine Cotton Handloom Saree',
    category: 'Cotton Sarees',
    description: 'Elegantly woven daily and formal cotton saree crafted for superior comfort and all-day grace.',
    fabric: '100% Breathable Combed Cotton',
    weaveDetail: 'Fine Thread Border with Traditional Pallu',
    colorTone: 'Soothing Beige with Magenta Border',
    image: '/src/assets/images/category_cotton_saree_1791217682982.jpg',
  },
  {
    id: 'saree-7',
    name: 'Royal Purple Kanchi-Style Zari Silk Saree',
    category: 'Silk Sarees',
    description: 'Timeless heirloom piece with shimmering gold threadwork on regal deep purple pure silk.',
    fabric: 'Traditional South Silk',
    weaveDetail: 'Grand Petal Border & Intricate Zari Pallu',
    colorTone: 'Deep Regal Violet & Burnished Gold',
    image: '/src/assets/images/category_silk_saree_1791217668069.jpg',
  },
  {
    id: 'saree-8',
    name: 'Auspicious Muhurtham Crimson Pink Silk',
    category: 'Wedding Collection',
    description: 'Heavy ceremonial bridal drape handwoven with festive glory, perfect for weddings and pujas.',
    fabric: 'Pure Heavyweight Silk',
    weaveDetail: 'Ornate Temple Border with Floral Vines',
    colorTone: 'Rani Pink & Bright Gold Zari',
    image: '/src/assets/images/category_wedding_saree_1791217698720.jpg',
  },
  {
    id: 'saree-9',
    name: 'Festive Twilight Handloom Silk Cotton',
    category: 'Festive Collection',
    description: 'Lightweight festive drape with subtle lustre, ideal for family celebrations and temple visits.',
    fabric: 'Fine Silk Cotton Blend',
    weaveDetail: 'Traditional Chevron Border and Thread Work',
    colorTone: 'Wine Purple & Festive Gold',
    image: '/src/assets/images/category_festive_saree_1791217710843.jpg',
  },
  {
    id: 'saree-10',
    name: 'Traditional Temple Border Artisan Handloom',
    category: 'Traditional Handloom',
    description: 'Rooted in heritage, this handloom saree highlights authentic geometric temple motifs and soft drape.',
    fabric: 'Authentic Handloom Yarn',
    weaveDetail: 'Ganga-Jamuna Contrast Border Motif',
    colorTone: 'Rich Royal Purple & Rose Magenta',
    image: '/src/assets/images/hero_saree_showcase_1791217649380.jpg',
  },
  {
    id: 'saree-11',
    name: 'Pastel Handwoven Comfort Cotton Saree',
    category: 'Cotton Sarees',
    description: 'Understated elegance for workwear and daily tradition, with natural softness and pure breathability.',
    fabric: 'Premium Handloom Cotton',
    weaveDetail: 'Subtle Zari Pinstripe Selvedge',
    colorTone: 'Cream Ivory & Soft Pink Temple Lines',
    image: '/src/assets/images/category_cotton_saree_1791217682982.jpg',
  },
  {
    id: 'saree-12',
    name: 'Grand Kalyana Muhurtham Gold Weave Saree',
    category: 'Wedding Collection',
    description: 'Special wedding edition with dense traditional pallu weaving that radiates regal bridal grandeur.',
    fabric: 'Traditional Wedding Silk',
    weaveDetail: 'All-over Buttas with Heavy Zari Pallu',
    colorTone: 'Deep Royal Wine & Imperial Gold',
    image: '/src/assets/images/category_wedding_saree_1791217698720.jpg',
  },
];

export const WHY_CHOOSE_US_DATA = [
  {
    id: 'why-1',
    title: 'Traditional Handloom',
    description: 'Celebrating traditional Indian weaving and saree designs.',
    iconName: 'Sparkles',
  },
  {
    id: 'why-2',
    title: 'Elegant Designs',
    description: 'Collections selected for timeless and attractive styles.',
    iconName: 'Palette',
  },
  {
    id: 'why-3',
    title: 'Quality Focus',
    description: 'A focus on quality and customer satisfaction.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'why-4',
    title: 'Personal Service',
    description: 'Friendly assistance for customers looking for the right saree.',
    iconName: 'HeartHandshake',
  },
];
