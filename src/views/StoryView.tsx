import React from 'react';
import { FOUNDER_STORY } from '../data/story';
import { WHATSAPP_NUMBER } from '../data/products';
import { Terminal, Sprout, Flame, CheckCircle, MessageSquare } from 'lucide-react';

export const StoryView: React.FC = () => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Krithveda Naturals, I read your story and would love to know more about your farm batches!");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-10 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Title Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#CA8A04]">
          <Sprout className="w-4 h-4 text-[#2E7D32]" />
          <span>Our Story &amp; Founders</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#163627] leading-tight">
          {FOUNDER_STORY.headline}
        </h1>
        <p className="text-base sm:text-lg text-[#4A5747] leading-relaxed italic">
          &ldquo;{FOUNDER_STORY.shortBio}&rdquo;
        </p>
      </div>

      {/* Engineer Mindset vs Soil Reality Comparison Box */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-[#EFF6EB] to-[#FAF5DE] rounded-3xl border border-[#DCE5C5] space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163627]">
          <Terminal className="w-4 h-4 text-[#163627]" />
          <span>The Transition: Code vs. Agriculture</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-[#3E4E3D]">
          <div className="p-4 bg-[#FCFAF4] rounded-2xl border border-[#DFE6C8]">
            <strong className="text-[#163627] block font-semibold mb-1">In Software Development:</strong>
            <p className="text-[#526150] leading-relaxed">
              If an edge case triggers a 500 error, you inspect stack traces, apply a patch, commit, and re-run unit tests within minutes.
            </p>
          </div>
          <div className="p-4 bg-[#FCFAF4] rounded-2xl border border-[#DFE6C8]">
            <strong className="text-[#163627] block font-semibold mb-1">On an Organic Farm:</strong>
            <p className="text-[#526150] leading-relaxed">
              If an unseasonal cloudburst hits day five of turmeric sun-drying, there is no &quot;undo&quot; command. You rebuild with soil patience and seasonal humility.
            </p>
          </div>
        </div>
      </div>

      {/* Main Narrative Paragraphs */}
      <div className="space-y-6 text-sm sm:text-base text-[#2E3B2D] leading-relaxed">
        {FOUNDER_STORY.paragraphs.map((para, idx) => (
          <p key={idx} className="leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {/* Honest Failure Detail (Batch #1) */}
      <div className="p-6 bg-[#FEFBE8] rounded-3xl border border-[#F5E7AE] space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
          <Flame className="w-4 h-4 text-[#B45309]" />
          <span>The Lesson of Our First Batch (2021)</span>
        </div>
        <h3 className="font-serif text-lg font-bold text-[#163627]">
          Why We Threw Out 40 Liters of Herbal Hair Oil
        </h3>
        <p className="text-xs sm:text-sm text-[#4E4322] leading-relaxed">
          When we prepared our first large pilot batch of Bhringraj Blue Oil, we used thin stainless-steel boiling vats on standard burners. The temperature spiked past 85°C. In less than twenty minutes, the delicate herbal bio-actives from fresh amla and hibiscus evaporated, leaving behind a scorched, burnt aroma.
        </p>
        <p className="text-xs sm:text-sm text-[#4E4322] leading-relaxed">
          Commercial brands would have simply dumped artificial jasmine fragrance to mask the burn. We couldn&apos;t. We poured all 40 liters into our compost pit and spent the next three months learning traditional slow-fire extraction in thick copper-bottom vats with 21-day solar curing.
        </p>
      </div>

      {/* The Story of "Wife of Vamsi" Label */}
      <div className="p-6 bg-[#EFF7ED] rounded-3xl border border-[#CFE4CD] space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#166534]">
          <CheckCircle className="w-4 h-4 text-[#166534]" />
          <span>Behind the Label: &quot;Wife of Vamsi&quot; &amp; &quot;KritVeda&quot;</span>
        </div>
        <h3 className="font-serif text-lg font-bold text-[#163627]">
          Real Kitchen Table Origins, Not A Madison Avenue Brand
        </h3>
        <p className="text-xs sm:text-sm text-[#3E4E3D] leading-relaxed">
          When our packages arrived with the line <em>&ldquo;The product by Wife of Vamsi&rdquo;</em>, customers asked if it was a joke or a legal brand. It is our actual family truth. Vamsi&apos;s wife formulated and personally ground the first hair packs and skin oils on our kitchen table. Neighbors and relatives asked for refills, and our local printer ran small sticker sheets.
        </p>
        <p className="text-xs sm:text-sm text-[#3E4E3D] leading-relaxed">
          We chose never to scrub that away to look like a generic corporate brand. That name is our reminder of who we are: two engineers and a dedicated family making honest things for other families.
        </p>
      </div>

      {/* Founder Quote */}
      <blockquote className="border-l-4 border-[#E5A91A] pl-6 py-2 text-base sm:text-lg italic font-serif text-[#163627] leading-relaxed bg-[#FAF5DE]/40 rounded-r-2xl">
        &ldquo;{FOUNDER_STORY.quote}&rdquo;
      </blockquote>

      {/* Direct Contact Button */}
      <div className="pt-6 border-t border-[#DCE5C5] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-serif text-lg font-bold text-[#163627]">
            Have a question for Vamsi or the team?
          </h4>
          <p className="text-xs text-[#6E7B6C]">
            We reply directly on WhatsApp without automated bot replies.
          </p>
        </div>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="flex items-center gap-2 py-3 px-5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-bold transition-transform active:scale-95 shadow-xs whitespace-nowrap"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Say Hello on WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
