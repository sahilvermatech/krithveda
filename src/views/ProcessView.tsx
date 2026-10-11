import React from 'react';
import { WHATSAPP_NUMBER } from '../data/products';
import { Sunrise, Wind, Cog, Flame, PackageCheck, MessageSquare } from 'lucide-react';

export const ProcessView: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Dawn Hand-Harvesting',
      subtitle: 'Gathering botanicals while dew keeps essential oils intact',
      icon: <Sunrise className="w-5 h-5 text-[#C87D25]" />,
      detail:
        'Botanical active ingredients are at their peak concentration at first light. We harvest hibiscus blossoms, tender moringa leaves, curry leaves, and bhringraj before 8:00 AM, before the harsh afternoon sun wilts the delicate plant cells.'
    },
    {
      num: '02',
      title: 'Elevated Shade Drying',
      subtitle: 'Slow dehydration under UV mesh racks',
      icon: <Wind className="w-5 h-5 text-[#1565C0]" />,
      detail:
        'Industrial manufacturers blast herbs with hot forced-air dryers (over 80°C) to speed up turnaround, turning green moringa into dull brown hay. We use elevated wire mesh racks in shade rooms with natural cross-ventilation. This preserves vibrant emerald chlorophyll, Vitamin C, and volatile terpenes.'
    },
    {
      num: '03',
      title: 'Low-RPM Stone Milling',
      subtitle: 'Grinding without frictional heat destruction',
      icon: <Cog className="w-5 h-5 text-[#5B5349]" />,
      detail:
        'Commercial steel hammer-mills generate extreme frictional heat (65°C–80°C) which destroys plant antioxidants and burns medicinal oils. We utilize traditional low-speed stone mills rotating at minimal RPM. The powder emerges cool to the touch, retaining natural aroma and bio-activity.'
    },
    {
      num: '04',
      title: '21-Day Solar & Copper Extraction',
      subtitle: 'The secret behind the Blue Hair Oil and Saffron Oil',
      icon: <Flame className="w-5 h-5 text-[#B45309]" />,
      detail:
        'For our Bhringraj Blue Hair Oil and Saffron Skin Oil, we combine fresh botanicals with pure cold-pressed oils inside heavy-bottom copper vats. The mixture is placed under morning sunlight for 21 days for gentle solar maceration, followed by gentle, low-temperature simmer extraction without burning.'
    },
    {
      num: '05',
      title: 'Weighed & Hand-Packed Weekly',
      subtitle: 'Zero warehouse backlog; small batches of under 50 units',
      icon: <PackageCheck className="w-5 h-5 text-[#166534]" />,
      detail:
        'Every pouch and bottle is filled, weighed, and sealed right at our home facility in batches of 30 to 50 units. We do not mass-manufacture thousands of cartons to sit in damp warehouses. What you receive was bottled within days of your order.'
    }
  ];

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Krithveda Naturals, I'd like to ask a question about how your oils and powders are made.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-10 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* Page Title */}
      <div className="space-y-3">
        <div className="text-xs uppercase tracking-widest font-semibold text-[#CA8A04]">
          The Artisanal Method
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#163627] leading-tight">
          How We Make It: From Harvest to Bottle
        </h1>
        <p className="text-base sm:text-lg text-[#4A5747] leading-relaxed">
          True herbal efficacy lives in the temperature and patience of processing. Here is the step-by-step journey of how our oils and powders are created.
        </p>
      </div>

      {/* Step by step cards */}
      <div className="space-y-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="p-6 sm:p-7 rounded-3xl bg-[#FCFAF4] border border-[#DFE6C8] shadow-xs flex flex-col sm:flex-row gap-5 items-start hover:border-[#1E5E3A]/40 transition-colors"
          >
            <div className="flex sm:flex-col items-center gap-3 shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#EFF6EB] to-[#FAF5DE] border border-[#DCE5C5] flex items-center justify-center">
                {step.icon}
              </div>
              <span className="font-mono text-xs font-bold text-[#CA8A04]">
                STEP {step.num}
              </span>
            </div>

            <div className="flex-1 space-y-1.5">
              <h2 className="font-serif text-xl font-bold text-[#163627]">
                {step.title}
              </h2>
              <div className="text-xs font-semibold text-[#B45309]">
                {step.subtitle}
              </div>
              <p className="text-xs sm:text-sm text-[#3E4E3D] leading-relaxed pt-1">
                {step.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Honesty Callout */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-[#EFF6EB] to-[#FAF5DE] rounded-3xl border border-[#DCE5C5] space-y-4">
        <h3 className="font-serif text-xl font-bold text-[#163627]">
          Why Our Products Don&apos;t Look or Smell Like Factory Cosmetics
        </h3>
        <p className="text-xs sm:text-sm text-[#4A5747] leading-relaxed">
          When you open a bottle of Krithveda Blue Hair Oil or a pouch of our Moringa, you might notice subtle seasonal variations in color or earthy botanical sediment resting at the bottom. That is the hallmark of genuine herbal formulation.
        </p>
        <p className="text-xs sm:text-sm text-[#4A5747] leading-relaxed">
          Factory shampoos use chemical emulsifiers, artificial green dyes, and heavy synthetic perfumes to guarantee that every bottle looks identical on a supermarket shelf. We never add artificial colors, chemical stabilizers, or synthetic fragrances. What you smell is real earth, amla, vetiver, and flowers.
        </p>
      </div>

      {/* Footer CTA */}
      <div className="pt-6 border-t border-[#DCE5C5] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-serif text-lg font-bold text-[#163627]">
            Want to see photos of this week&apos;s batch?
          </h4>
          <p className="text-xs text-[#6E7B6C]">
            We regularly share behind-the-scenes clips on our WhatsApp status.
          </p>
        </div>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="flex items-center gap-2 py-3 px-5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-bold transition-transform active:scale-95 shadow-xs whitespace-nowrap"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Connect on WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
