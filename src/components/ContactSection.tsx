import React, { useState } from 'react';
import { MapPin, Phone, Mail, FileText, MessageCircle, ExternalLink, Send, Check } from 'lucide-react';
import { BUSINESS_INFO, getWhatsappUrl } from '../data/sarees';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    sareeInterest: 'Silk Sarees',
    message: '',
  });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pre-fill WhatsApp with the form contents for seamless real contact
    const text = `Hello RJ Fabrics, my name is ${formData.name}. Phone: ${formData.phone || 'Not provided'}. Saree Interest: ${formData.sareeInterest}. Note: ${formData.message || 'Please contact me regarding your handloom sarees.'}`;
    window.open(getWhatsappUrl(text), '_blank', 'noopener,noreferrer');
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-pink-700">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-950 mt-1">
            Contact RJ Fabrics
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            We are always happy to help you select the ideal handloom saree. Visit us in Madathukulam,
            reach out via phone call, or message us on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Business Information & Contact Cards */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-2xs space-y-6">
              <h3 className="font-serif text-2xl font-bold text-purple-950 border-b border-stone-100 pb-4">
                Business Details
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-900 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">Address</h4>
                  <p className="mt-1 text-sm text-stone-600 leading-relaxed">
                    <strong>RJ FABRICS</strong>
                    <br />
                    No. 890, B, Sakthi Nagar,
                    <br />
                    Narasingapuram Village,
                    <br />
                    Krishnapuram Post, Madathukulam TK,
                    <br />
                    Tiruppur DT – 642111, Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-700 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">Phone Numbers</h4>
                  <div className="mt-1 space-y-1">
                    <p className="text-sm text-stone-700 font-mono">
                      <a href="tel:+917904396868" className="hover:text-purple-950 hover:underline">
                        79043 96868
                      </a>
                    </p>
                    <p className="text-sm text-stone-700 font-mono">
                      <a href="tel:+919894089557" className="hover:text-purple-950 hover:underline">
                        98940 89557
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">Email Address</h4>
                  <p className="mt-1 text-sm text-stone-700">
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="hover:text-purple-950 hover:underline break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* GSTIN */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 mt-1">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">GSTIN Registration</h4>
                  <p className="mt-1 text-sm font-mono text-purple-950 font-semibold">
                    {BUSINESS_INFO.gstin}
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Registered Handloom & Textile Enterprise
                  </p>
                </div>
              </div>

              {/* Prominent Action Buttons */}
              <div className="pt-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-purple-950 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-2xs transition-colors text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors text-center"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>

            {/* Embedded Location Map Frame */}
            <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-purple-950">
                    Location: Krishnapuram, Madathukulam TK
                  </h4>
                  <p className="text-xs text-stone-500">Tiruppur District – 642111, Tamil Nadu</p>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-pink-700 hover:text-pink-800"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="w-full h-64 rounded-xl overflow-hidden border border-stone-200 bg-stone-100 relative">
                <iframe
                  title="RJ Fabrics Location Map"
                  src="https://maps.google.com/maps?q=Madathukulam,Krishnapuram,Tamil+Nadu,642111&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry / Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-2xs text-left">
              <div className="border-b border-stone-100 pb-4 mb-6">
                <span className="text-xs uppercase tracking-wider font-semibold text-pink-700">
                  Quick Inquiry
                </span>
                <h3 className="font-serif text-2xl font-bold text-purple-950 mt-1">
                  Send a Message to RJ Fabrics
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Fill in your details below to directly consult with our handloom team.
                </p>
              </div>

              {formSent ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">
                    Message Sent to WhatsApp!
                  </h4>
                  <p className="text-xs text-emerald-800">
                    Thank you for your interest in RJ Fabrics. We have opened WhatsApp so you can continue the chat directly with our team.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="text-xs font-semibold text-emerald-900 underline pt-2 cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sundaram"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:border-purple-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:border-purple-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Saree Category of Interest
                    </label>
                    <select
                      value={formData.sareeInterest}
                      onChange={(e) => setFormData({ ...formData, sareeInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl bg-white focus:outline-none focus:border-purple-800"
                    >
                      <option value="Traditional Handloom Sarees">Traditional Handloom Sarees</option>
                      <option value="Cotton Sarees">Cotton Sarees</option>
                      <option value="Silk Sarees">Silk Sarees</option>
                      <option value="Wedding Collection">Wedding Collection</option>
                      <option value="Festive Collection">Festive Collection</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Message or Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about the colors, occasion, or specific design you are seeking..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:outline-none focus:border-purple-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-purple-950 hover:bg-purple-900 active:scale-98 rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Connect on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
