import React from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-r from-[#EFF6EB]/80 via-[#FAF5DE]/80 to-[#EEF6EB]/80 border-y border-[#DCE5C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#CA8A04] mb-1">
            <MessageSquareQuote className="w-4 h-4 text-[#CA8A04]" />
            <span>Community Feedback</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#163627]">
            Real Experiences From Real Families
          </h2>
          <p className="text-xs sm:text-sm text-[#4A5747] mt-2 leading-relaxed">
            Direct feedback from customers who order regularly through our WhatsApp channel across India.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FCFAF3] rounded-2xl p-6 border border-[#DFE6C8] shadow-xs flex flex-col justify-between hover:border-[#1E5E3A]/40 transition-colors"
            >
              <div>
                {/* Product context unboxed text */}
                <div className="flex items-center justify-between text-xs text-[#6E7B6C] mb-2.5">
                  <span className="font-semibold text-[#163627]">{t.productUsed}</span>
                  <span className="text-[#CA8A04] font-medium">{t.durationUsed}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#163627] leading-snug mb-3">
                  &ldquo;{t.headline}&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-[#465444] leading-relaxed">
                  {t.story}
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-5 pt-4 border-t border-[#E8EED9] flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-xs text-[#163627]">
                    {t.name}
                  </h4>
                  <span className="text-[11px] text-[#6E7B6C]">
                    {t.location}
                  </span>
                </div>

                {t.verifiedOrder && (
                  <div className="flex items-center gap-1 text-[11px] font-medium text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-sm">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Buyer</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
