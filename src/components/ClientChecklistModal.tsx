import React from 'react';
import { ActivePage } from '../types';
import { CheckCircle2, X, ClipboardCheck, Sparkles, ExternalLink } from 'lucide-react';

interface ClientChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: ActivePage) => void;
}

export const ClientChecklistModal: React.FC<ClientChecklistModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  if (!isOpen) return null;

  const clientCollected = [
    { label: 'Business Basics', status: 'Verified', detail: 'Krithveda Naturals (KritVeda). Tagline: "Grown on our farm. Made in our home." Story of two software engineers turned organic farmers.' },
    { label: 'Product Catalog & Pricing', status: 'Verified', detail: 'All 12 items configured with exact sizes, prices (₹250–₹2100), full ingredients, benefits, and how-to-use.' },
    { label: 'Real Product Photography', status: 'Verified', detail: 'All 9 real batch photos from client mapped with verified labels ("Wife of Vamsi", 20 Herbal Ingredients, batch dates).' },
    { label: 'Trust Materials & Reviews', status: 'Verified', detail: '5 customer reviews with names, locations, and verified outcomes for hair, skin, and moringa.' },
    { label: 'Contact & Order Channels', status: 'Verified', detail: 'WhatsApp +91 76808 02942, catalog wa.me/c/7680802942, Andhra Pradesh farm region, 9 AM – 8 PM reply hours.' },
    { label: 'Brand & Packaging Nuances', status: 'Verified', detail: 'Explained "KritVeda" and "Wife of Vamsi" on packaging labels transparently in Founder Story and FAQ.' },
  ];

  const pagesBuilt = [
    { page: 'home' as ActivePage, label: 'Home Page', desc: 'Hero, Say-and-Do proof strip, 6 featured products, founder note, 3-step order, real batch gallery, testimonials.' },
    { page: 'story' as ActivePage, label: 'Our Story (About)', desc: 'From tech to soil, the overheated oil batch in 2021, kitchen-table origins with Vamsi’s wife.' },
    { page: 'farm' as ActivePage, label: 'The Farm (The "Do")', desc: 'Jeevamrutha, Neemastra, soil practices, crops grown on-site vs sustainably procured.' },
    { page: 'process' as ActivePage, label: 'How We Make It', desc: 'Step-by-step: Dawn harvest, shade drying, low-RPM stone milling, 21-day solar & copper steep.' },
    { page: 'products' as ActivePage, label: 'Products Catalog', desc: 'Full 12 items with search, filters (Hair, Skin, Pantry), price sorting, and rich detail modal.' },
    { page: 'how-to-order' as ActivePage, label: 'How to Order & Policies', desc: '3-step guide, flat ₹70 shipping, strict No-COD rule, UPI/Bank details, damage replacement guarantee.' },
    { page: 'faq' as ActivePage, label: 'FAQ', desc: 'Questions on testing, shelf life, child safety, why no COD, courier tracking, 2-step henna/indigo.' },
    { page: 'contact' as ActivePage, label: 'Contact & Inquiry', desc: 'Direct WhatsApp link, catalog link, working hours, interactive inquiry draft composer.' },
    { page: 'privacy' as ActivePage, label: 'Privacy Policy & Terms', desc: 'Zero website data tracking disclosure, WhatsApp encryption, shipping, and herbal disclaimers.' }
  ];

  const technicalSetup = [
    { label: 'WhatsApp 1-Tap Ordering', status: 'Live', detail: 'Prefilled URL-encoded messages for all 12 products and custom sizes.' },
    { label: 'WhatsApp Order List Builder (v1.1)', status: 'Live', detail: 'Multi-item browser cart with quantity controls, subtotal, and automatic ₹70 shipping total.' },
    { label: 'Mobile-First Responsive Layout', status: 'Live', detail: 'Bottom sticky bar < 15% viewport height, touch targets ≥ 44px, fast tap responsiveness.' },
    { label: 'Zero Broken Image Fallback', status: 'Live', detail: 'Realistic packaging renders with error recovery so no broken image icon ever appears.' },
    { label: 'Clean Botanical Typography & Colors', status: 'Live', detail: 'Cormorant Garamond serif + Plus Jakarta Sans on warm cream & forest green palette.' },
    { label: 'SEO & OpenGraph Metadata', status: 'Live', detail: 'Branded meta title, description, and WhatsApp social link previews.' }
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FCFAF4] rounded-3xl shadow-2xl border border-[#DFE6C8] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-[#DCE5C5] bg-gradient-to-r from-[#EFF6EB] to-[#FAF5DE]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#163627] text-white flex items-center justify-center">
              <ClipboardCheck className="w-4 h-4 text-[#FEF08A]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#163627]">
                Client Onboarding &amp; Deliverables Checklist
              </h3>
              <p className="text-[11px] text-[#4A5747]">
                Full breakdown of client deliverables, pages built, and technical setup
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#4A5747] hover:text-[#163627] hover:bg-black/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-7 text-xs">
          {/* Section 1: Collected From Client */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-serif text-base font-bold text-[#163627] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#CA8A04]" />
                1. Collected From Client (Day 1 Brief)
              </h4>
              <span className="text-[10px] font-bold text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-md border border-[#BBF7D0]">
                6 / 6 Completed
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {clientCollected.map((c, i) => (
                <div key={i} className="p-3 bg-[#FAF5DE]/60 rounded-xl border border-[#DFD5A8] space-y-1">
                  <div className="flex items-center justify-between font-semibold text-[#163627]">
                    <span>{c.label}</span>
                    <span className="flex items-center gap-1 text-[10px] text-[#166534]">
                      <CheckCircle2 className="w-3 h-3 text-[#1E5E3A]" />
                      {c.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#526150] leading-relaxed">
                    {c.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Pages Built */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-serif text-base font-bold text-[#163627] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#CA8A04]" />
                2. Pages &amp; Sections Built (Ready For Review)
              </h4>
              <span className="text-[10px] font-bold text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-md border border-[#BBF7D0]">
                9 / 9 Live
              </span>
            </div>

            <div className="space-y-2">
              {pagesBuilt.map((p, i) => (
                <div
                  key={i}
                  className="p-2.5 bg-[#FAF8EE] rounded-xl border border-[#DFE6C8] flex items-center justify-between gap-3 hover:border-[#163627] transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <span className="font-bold text-[#163627] block text-xs">
                      {p.label}
                    </span>
                    <span className="text-[11px] text-[#526150] truncate block">
                      {p.desc}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onNavigate(p.page);
                    }}
                    className="px-2.5 py-1 text-[11px] font-semibold text-[#163627] bg-[#EFF6EB] hover:bg-[#163627] hover:text-white rounded-lg transition-colors shrink-0 border border-[#DCE5C5]"
                  >
                    View Page
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Technical & Operational Setup */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-serif text-base font-bold text-[#163627] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#CA8A04]" />
                3. Technical &amp; Operational Setup
              </h4>
              <span className="text-[10px] font-bold text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-md border border-[#BBF7D0]">
                6 / 6 Implemented
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {technicalSetup.map((t, i) => (
                <div key={i} className="p-3 bg-[#FAF5DE]/60 rounded-xl border border-[#DFD5A8] space-y-1">
                  <div className="flex items-center justify-between font-semibold text-[#163627]">
                    <span>{t.label}</span>
                    <span className="text-[10px] text-[#166534] font-bold">
                      {t.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#526150] leading-relaxed">
                    {t.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Pre-Launch Sign-off Status */}
          <div className="p-4 bg-[#EFF7ED] rounded-2xl border border-[#CFE4CD] space-y-2">
            <h4 className="font-serif text-sm font-bold text-[#163627] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#166534]" />
              Pre-Launch Checklist Sign-Off
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-[#2C4835]">
              <div>✓ All 12 product prices verified</div>
              <div>✓ Flat ₹70 shipping enforced</div>
              <div>✓ Strict No-COD rule visible</div>
              <div>✓ WhatsApp link pre-fills working</div>
              <div>✓ Mobile &lt;15% sticky bar passed</div>
              <div>✓ Zero broken image fallback active</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-[#DCE5C5] bg-[#FCFAF4] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="py-2 px-5 bg-[#163627] text-white rounded-xl text-xs font-semibold hover:bg-[#1E5E3A] transition-colors"
          >
            Close Checklist
          </button>
        </div>
      </div>
    </div>
  );
};
