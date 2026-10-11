import React from 'react';
import { WHATSAPP_DISPLAY, FLAT_SHIPPING_CHARGE } from '../data/products';
import { ShieldCheck, Truck, RefreshCw, FileText, Lock } from 'lucide-react';

export const PrivacyPolicyView: React.FC = () => {
  return (
    <div className="py-10 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Title */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#CA8A04]">
          <FileText className="w-4 h-4 text-[#CA8A04]" />
          <span>Policies &amp; Legal Disclosures</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#163627] leading-tight">
          Privacy Policy &amp; Ordering Terms
        </h1>
        <p className="text-xs sm:text-sm text-[#4A5747]">
          Last Updated: 11 October 2026 · Effective immediately for Krithveda Naturals (KritVeda).
        </p>
      </div>

      {/* Quick Summary Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-[#FCFAF4] rounded-2xl border border-[#DFE6C8] space-y-1.5">
          <Lock className="w-4 h-4 text-[#166534]" />
          <h2 className="text-xs font-bold text-[#163627]">Zero Website Data Collection</h2>
          <p className="text-[11px] text-[#526150] leading-relaxed">
            We do not use tracking pixels, user account databases, or sell customer profiles.
          </p>
        </div>
        <div className="p-4 bg-[#FCFAF4] rounded-2xl border border-[#DFE6C8] space-y-1.5">
          <Truck className="w-4 h-4 text-[#166534]" />
          <h2 className="text-xs font-bold text-[#163627]">Flat ₹{FLAT_SHIPPING_CHARGE} Shipping</h2>
          <p className="text-[11px] text-[#526150] leading-relaxed">
            All-India flat fee per parcel with dispatch in 24–48 hours and live tracking.
          </p>
        </div>
        <div className="p-4 bg-[#FCFAF4] rounded-2xl border border-[#DFE6C8] space-y-1.5">
          <ShieldCheck className="w-4 h-4 text-[#166534]" />
          <h2 className="text-xs font-bold text-[#163627]">Strict No-COD Rule</h2>
          <p className="text-[11px] text-[#526150] leading-relaxed">
            Orders are 100% pre-paid via UPI or bank transfer to protect small farm batch costs.
          </p>
        </div>
      </div>

      {/* Policy Sections */}
      <div className="space-y-8 text-xs sm:text-sm text-[#3E4E3D] leading-relaxed">
        {/* 1. Privacy Policy */}
        <section className="space-y-3 p-6 bg-[#FCFAF4] rounded-2xl border border-[#DFE6C8]">
          <h2 className="font-serif text-xl font-bold text-[#163627]">
            1. Privacy &amp; Personal Data Handling
          </h2>
          <p>
            At <strong>Krithveda Naturals</strong>, we respect your privacy. Our website does not require user registration, passwords, credit card inputs, or tracking cookies.
          </p>
          <p>
            When you tap &ldquo;Order on WhatsApp&rdquo;, your chat opens directly on WhatsApp (<span className="font-mono">{WHATSAPP_DISPLAY}</span>). Any delivery address, name, or payment screenshot you provide is shared in an end-to-end encrypted conversation hosted on WhatsApp&apos;s infrastructure.
          </p>
          <p>
            We use your shipping information solely to generate the courier consignment note and dispatch your order. We never share, sell, or rent customer contact numbers or addresses to third-party telemarketers.
          </p>
        </section>

        {/* 2. Ordering & Payment Terms */}
        <section className="space-y-3 p-6 bg-[#FCFAF4] rounded-2xl border border-[#DFE6C8]">
          <h2 className="font-serif text-xl font-bold text-[#163627]">
            2. Ordering &amp; Payment Terms (No-COD Policy)
          </h2>
          <p>
            All products are prepared in small weekly batches on our family farm. Due to high courier return-to-origin (RTO) fraud rates in India, <strong>we do not offer Cash on Delivery (COD)</strong> under any circumstances.
          </p>
          <p>
            Orders are confirmed only after full payment is received via:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Unified Payments Interface (UPI) via Google Pay, PhonePe, Paytm, or BHIM.</li>
            <li>Direct Bank Transfer (NEFT / IMPS).</li>
          </ul>
          <p>
            Payment QR codes and account details are shared directly within your verified WhatsApp chat.
          </p>
        </section>

        {/* 3. Shipping & Delivery */}
        <section className="space-y-3 p-6 bg-[#FCFAF4] rounded-2xl border border-[#DFE6C8]">
          <h2 className="font-serif text-xl font-bold text-[#163627]">
            3. Shipping, Dispatch &amp; Delivery Norms
          </h2>
          <p>
            We charge a flat <strong>₹{FLAT_SHIPPING_CHARGE} shipping fee per order</strong> across all states and Union Territories in India, regardless of parcel weight.
          </p>
          <p>
            <strong>Dispatch Time:</strong> Orders are packed and dispatched within 24 to 48 hours of payment verification (excluding Sundays and national holidays).
          </p>
          <p>
            <strong>Delivery Timelines:</strong> Deliveries typically take 2–4 business days within southern India and 4–6 business days for the rest of India via India Post Speed Post, DTDC, or Blue Dart. A live tracking number is provided on your WhatsApp chat upon handover to the courier.
          </p>
        </section>

        {/* 4. Replacements & Transit Damage */}
        <section className="space-y-3 p-6 bg-[#FCFAF4] rounded-2xl border border-[#DFE6C8]">
          <h2 className="font-serif text-xl font-bold text-[#163627]">
            4. Replacements &amp; Transit Damage Policy
          </h2>
          <p>
            Due to the hygienic nature of personal herbal formulations and food staples, opened products cannot be returned for buyer remorse.
          </p>
          <p>
            However, we take 100% responsibility for our packaging in transit. If your parcel arrives cracked, broken, or leaking:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Take a quick 10-second unboxing video or clear photo showing the damaged parcel and shipping label.</li>
            <li>Send the video/photo to our WhatsApp (+91 76808 02942) within 24 hours of delivery.</li>
            <li>We will ship a fresh replacement package immediately at zero extra cost to you.</li>
          </ul>
        </section>

        {/* 5. Botanical & Wellness Disclaimer */}
        <section className="space-y-3 p-6 bg-gradient-to-br from-[#EFF6EB] to-[#FAF5DE] rounded-2xl border border-[#DCE5C5]">
          <h2 className="font-serif text-xl font-bold text-[#163627]">
            5. Botanical &amp; Dietary Disclaimer
          </h2>
          <p>
            Krithveda Naturals products are traditional herbal cosmetics, bath powders, and wholesome agricultural staples (moringa, amla, turmeric, ragi). They are grown without synthetic chemicals and crafted according to traditional home formulations.
          </p>
          <p className="text-[#526150]">
            These products are not intended to diagnose, treat, cure, or prevent any medical condition or disease. Individual skin and hair textures vary. We recommend performing a 24-hour patch test on the inner elbow before first full use.
          </p>
        </section>
      </div>
    </div>
  );
};
