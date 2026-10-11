import React, { useState } from 'react';
import { FAQS } from '../data/faq';
import { WHATSAPP_NUMBER } from '../data/products';
import { ChevronDown, MessageSquare, HelpCircle } from 'lucide-react';

export const FAQView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // first two open by default

  const categories = ['All', 'Orders', 'Products', 'Ingredients', 'Shipping'];

  const filteredFaqs =
    activeCategory === 'All'
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleAskWhatsApp = () => {
    const text = encodeURIComponent("Hi Krithveda Naturals, I have a question about your products that isn't answered in the FAQ.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-10 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Title */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#CA8A04]">
          <HelpCircle className="w-4 h-4 text-[#CA8A04]" />
          <span>Clear Answers</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#163627] leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-[#4A5747] leading-relaxed">
          Honest answers about how we farm, formulate, test, ship, and support our customers.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-1.5 p-1 bg-[#EEF6EA] rounded-xl overflow-x-auto border border-[#DCE5C5] scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-[#FAF5DE] to-[#FFFDF7] text-[#163627] font-bold shadow-xs border border-[#E5A91A]/40'
                : 'text-[#4A5747] hover:text-[#163627] hover:bg-[#FAF5DE]/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3.5">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div
              key={idx}
              className="rounded-2xl border border-[#DFE6C8] bg-[#FCFAF4] overflow-hidden transition-all shadow-xs hover:border-[#1E5E3A]/40"
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 text-sm sm:text-base font-serif font-bold text-[#163627] hover:text-[#1E5E3A] transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#CA8A04] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#163627]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-[#3E4E3D] leading-relaxed border-t border-[#E8EED9] pt-3.5">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Can't find answer? */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-[#EFF6EB] to-[#FAF5DE] rounded-3xl border border-[#DCE5C5] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
        <div>
          <h3 className="font-serif text-lg font-bold text-[#163627]">
            Have a question that is not listed here?
          </h3>
          <p className="text-xs text-[#6E7B6C] mt-1">
            Ask us directly on WhatsApp. We answer with transparency, not generic sales scripts.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAskWhatsApp}
          className="flex items-center gap-2 py-2.5 px-5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-bold transition-transform active:scale-95 shadow-xs whitespace-nowrap shrink-0"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Ask Us on WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
