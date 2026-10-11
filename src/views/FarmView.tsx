import React from 'react';
import { CROPS_GROWN_ON_FARM } from '../data/story';
import { WHATSAPP_NUMBER } from '../data/products';
import { Sprout, Sun, Droplets, MapPin, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';

export const FarmView: React.FC = () => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Krithveda Naturals, I'd like to ask a question about your farm practices.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-10 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#CA8A04]">
          <MapPin className="w-4 h-4 text-[#CA8A04]" />
          <span>The Agricultural Farm · Coastal Andhra Pradesh</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#163627] leading-tight">
          Where Every Pouch Begins: The Farm
        </h1>
        <p className="text-base sm:text-lg text-[#4A5747] leading-relaxed max-w-3xl">
          Most cosmetic brands operate out of commercial industrial estates. Krithveda begins in deep, fertile soil nourished by organic compost, clean canal water, and tropical sunshine.
        </p>
      </div>

      {/* What "No Chemicals" Means in Daily Practice */}
      <div className="bg-gradient-to-br from-[#EFF6EB] to-[#FAF5DE] rounded-3xl p-6 sm:p-9 border border-[#DCE5C5] space-y-6">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#163627]">
            Transparent Soil Science
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#163627] mt-0.5">
            What &ldquo;Chemical-Free&rdquo; Actually Looks Like On Our Soil
          </h2>
          <p className="text-xs sm:text-sm text-[#4A5747] mt-1.5">
            Anyone can print &ldquo;organic&rdquo; on a plastic bottle. Here are the biological inputs we brew on our farm beds:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#FCFAF4] p-5 rounded-2xl border border-[#DFE6C8] space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#DCFCE7] text-[#166534] flex items-center justify-center">
              <Droplets className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#163627]">
              Jeevamrutha Culture
            </h3>
            <p className="text-xs text-[#526150] leading-relaxed">
              Fermented indigenous desi cow dung, cow urine, jaggery, pulse flour, and virgin bund soil. Fed every 15 days to multiply beneficial soil bacteria and mycorrhizal fungi.
            </p>
          </div>

          <div className="bg-[#FCFAF4] p-5 rounded-2xl border border-[#DFE6C8] space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#FEF3C7] text-[#B45309] flex items-center justify-center">
              <Sun className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#163627]">
              Neemastra &amp; Agniastra
            </h3>
            <p className="text-xs text-[#526150] leading-relaxed">
              We never spray chemical organophosphates or synthetic pesticides. We boil neem leaves, wild chilies, and garlic cloves into biological pest repellents that keep pests away without harming honeybees.
            </p>
          </div>

          <div className="bg-[#FCFAF4] p-5 rounded-2xl border border-[#DFE6C8] space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#E2F0D9] text-[#1E5E3A] flex items-center justify-center">
              <Sprout className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#163627]">
              Living Green Mulch
            </h3>
            <p className="text-xs text-[#526150] leading-relaxed">
              Sunn-hemp and dry moringa trimmings are layered across our turmeric and bhringraj beds. This prevents water evaporation in the heat, shields earthworms, and adds natural humus.
            </p>
          </div>
        </div>
      </div>

      {/* Honest Sourcing Division: What is grown on farm vs sourced */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-[#EFF7ED] rounded-3xl border border-[#CFE4CD] space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#166534]">
            <CheckCircle2 className="w-4 h-4" />
            <span>Grown Directly On Our Farm</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-[#163627]">
            100% On-Site Agricultural Harvest
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#3E4E3D]">
            <li className="flex items-start gap-2">
              <span className="text-[#166534] font-bold">✓</span>
              <span><strong>Moringa:</strong> Perennial grove harvested every 45 days</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#166534] font-bold">✓</span>
              <span><strong>Kasthuri &amp; Curcumin Turmeric:</strong> High-oil desi heirloom rhizomes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#166534] font-bold">✓</span>
              <span><strong>Fresh Bhringraj:</strong> Grown along moist soil channels</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#166534] font-bold">✓</span>
              <span><strong>Hibiscus &amp; Damask Rose:</strong> Dawn-picked fresh blossoms</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#166534] font-bold">✓</span>
              <span><strong>Neem, Holy Basil (Tulsi) &amp; Curry Leaves:</strong> Boundary trees</span>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-[#FEFBE8] rounded-3xl border border-[#F5E7AE] space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
            <ShieldCheck className="w-4 h-4 text-[#CA8A04]" />
            <span>Ethically Procured Partners</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-[#163627]">
            What We Procure From Trusted Growers
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#4E4322]">
            <li className="flex items-start gap-2">
              <span className="text-[#B45309] font-bold">•</span>
              <span><strong>Wild Desi Amla:</strong> Foraged from certified organic forest belts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#B45309] font-bold">•</span>
              <span><strong>Kashmiri Saffron:</strong> Pure Mongra stigmas directly from Pampore farmers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#B45309] font-bold">•</span>
              <span><strong>Cold-Pressed Coconut Oil:</strong> Wood-pressed (&lsquo;Mara Chekku&rsquo;) by coastal village millers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#B45309] font-bold">•</span>
              <span><strong>Sweet Almond &amp; Olive Oil:</strong> Pure cold-pressed unrefined food-grade base oils</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#B45309] font-bold">•</span>
              <span><strong>Desi Finger Millet (Ragi):</strong> Procured from rain-fed dryland millet cooperatives</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Farm Crops & Seasons Table */}
      <div className="space-y-4">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#163627]">
            Crops &amp; Harvest Seasons on the Farm
          </h2>
          <p className="text-xs sm:text-sm text-[#6E7B6C] mt-1">
            We work with nature&apos;s timetable. Here is when our crops are sown, tended, and harvested:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#DFE6C8]">
          <table className="w-full text-left text-xs sm:text-sm bg-[#FCFAF4] divide-y divide-[#E8EED9]">
            <thead className="bg-[#EEF6EA] text-[#163627] font-semibold">
              <tr>
                <th className="py-3.5 px-4">Botanical Crop</th>
                <th className="py-3.5 px-4">Harvest Season</th>
                <th className="py-3.5 px-4">Farm Practice</th>
                <th className="py-3.5 px-4">Featured Product</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8EED9] text-[#465444]">
              {CROPS_GROWN_ON_FARM.map((crop, idx) => (
                <tr key={idx} className="hover:bg-[#FAF5DE]/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-[#163627]">
                    {crop.name}
                  </td>
                  <td className="py-3.5 px-4 text-[#CA8A04] font-medium">
                    {crop.season}
                  </td>
                  <td className="py-3.5 px-4 leading-relaxed">
                    {crop.practice}
                  </td>
                  <td className="py-3.5 px-4 text-[#166534] font-medium">
                    {crop.usedIn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Farm Visit Note */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#EFF6EB] to-[#FAF5DE] border border-[#DCE5C5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3E4E3D]">
        <div>
          <strong>Curious about our farm?</strong> We are situated in Andhra Pradesh. While we are a working farm and not a commercial tourist resort, we gladly welcome customers by prior appointment.
        </div>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="py-2.5 px-4 bg-[#163627] hover:bg-[#1E5E3A] text-white rounded-xl font-semibold transition-colors shrink-0 flex items-center gap-1.5 border border-[#2B5A42]"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Ask on WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
