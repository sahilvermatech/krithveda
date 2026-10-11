import React from 'react';
import { SAY_AND_DO_ITEMS } from '../data/story';
import { Sprout, RefreshCw, Users, FileText, CheckCircle2 } from 'lucide-react';

export const SayAndDoStrip: React.FC = () => {
  const icons = [
    <Sprout className="w-5 h-5 text-[#2E7D32]" key="sprout" />,
    <RefreshCw className="w-5 h-5 text-[#CA8A04]" key="refresh" />,
    <Users className="w-5 h-5 text-[#1E5E3A]" key="users" />,
    <FileText className="w-5 h-5 text-[#163627]" key="file" />
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-[#EFF6EB] via-[#FAF5DC] to-[#EFF6EB] border-y border-[#DCE5C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#CA8A04] mb-1">
            Walk The Talk
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#163627]">
            What We Say vs. What We Actually Do
          </h2>
          <p className="text-xs sm:text-sm text-[#4A5747] mt-2 leading-relaxed">
            Every herbal brand promises &quot;pure and natural.&quot; Here is the exact farm practice behind every word we claim.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SAY_AND_DO_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FCFAF3] rounded-2xl p-5 border border-[#DFE6C8] shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Say claim */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F2F7EC] border border-[#D8E4C7] flex items-center justify-center shrink-0">
                    {icons[idx]}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#CA8A04]">
                      The Claim
                    </span>
                    <h3 className="font-serif text-base font-bold text-[#163627] leading-snug">
                      &ldquo;{item.say}&rdquo;
                    </h3>
                  </div>
                </div>

                {/* The Do Proof */}
                <div className="mt-3 pt-3 border-t border-[#E8EED9]">
                  <div className="flex items-start gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1E5E3A] shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-[#163627] leading-snug">
                      The Proof: {item.do}
                    </span>
                  </div>
                  <p className="text-xs text-[#526150] leading-relaxed pl-6">
                    {item.proofDetail}
                  </p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-4 pt-3 border-t border-[#E8EED9] text-[10px] text-[#6E7B6C] font-medium flex items-center justify-between">
                <span>Observed on farm</span>
                <span className="text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-sm font-semibold">100% Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
