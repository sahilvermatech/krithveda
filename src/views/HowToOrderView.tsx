import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, FLAT_SHIPPING_CHARGE, WHATSAPP_CATALOG_URL } from '../data/products';
import { MessageSquare, CheckCircle, ShieldAlert, Truck, CreditCard, RotateCcw, ExternalLink } from 'lucide-react';

export const HowToOrderView: React.FC = () => {
  const handleTestWhatsApp = () => {
    const text = encodeURIComponent("Hi Krithveda Naturals, I'm ready to place an order. Please guide me through the items available this week!");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-10 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* Page Title */}
      <div className="space-y-3">
        <div className="text-xs uppercase tracking-widest font-semibold text-[#CA8A04]">
          Transparent Buying Guide
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#163627] leading-tight">
          How to Order on WhatsApp
        </h1>
        <p className="text-base sm:text-lg text-[#4A5747] leading-relaxed">
          We don&apos;t run a complicated e-commerce store with user accounts and passwords. Every order is a personal conversation with our family on WhatsApp.
        </p>
      </div>

      {/* 3 Step Visual Card */}
      <div className="space-y-5">
        <div className="p-6 rounded-3xl bg-[#F2F8ED] border border-[#D3E3C6] shadow-xs flex flex-col sm:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-2xl bg-[#163627] text-[#FAF8EE] font-mono font-bold text-lg flex items-center justify-center shrink-0">
            1
          </div>
          <div className="flex-1 space-y-1">
            <h2 className="font-serif text-xl font-bold text-[#163627]">
              Select Your Products on the Site
            </h2>
            <p className="text-xs sm:text-sm text-[#3E4E3D] leading-relaxed">
              Browse our catalog of 12 hair, skin, and pantry items. You can tap &ldquo;Order on WhatsApp&rdquo; on any individual product, or add several items to your &ldquo;Order List&rdquo; to bundle them together. You can also view our WhatsApp Business catalog at{' '}
              <a
                href={WHATSAPP_CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#166534] font-medium underline inline-flex items-center gap-0.5"
              >
                wa.me/c/7680802942 <ExternalLink className="w-3 h-3 text-[#E5A91A]" />
              </a>.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#FEFBE8] border border-[#F5E7AE] shadow-xs flex flex-col sm:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-2xl bg-[#E5A91A] text-[#163627] font-mono font-bold text-lg flex items-center justify-center shrink-0">
            2
          </div>
          <div className="flex-1 space-y-1">
            <h2 className="font-serif text-xl font-bold text-[#163627]">
              Send the Auto-Generated WhatsApp Message
            </h2>
            <p className="text-xs sm:text-sm text-[#4E4322] leading-relaxed">
              A pre-formatted message will open in WhatsApp with your requested items, quantities, and the running total including the flat ₹{FLAT_SHIPPING_CHARGE} shipping fee. Simply press Send to start the chat with us at <strong className="font-mono">{WHATSAPP_DISPLAY}</strong>.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#EFF7EE] border border-[#CFE4CD] shadow-xs flex flex-col sm:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-2xl bg-[#1E5E3A] text-white font-mono font-bold text-lg flex items-center justify-center shrink-0">
            3
          </div>
          <div className="flex-1 space-y-1">
            <h2 className="font-serif text-xl font-bold text-[#163627]">
              UPI Payment Confirmation &amp; Tracked Dispatch
            </h2>
            <p className="text-xs sm:text-sm text-[#3E4E3D] leading-relaxed">
              We check the batch freshness, confirm your items, and send our official UPI QR code (Google Pay, PhonePe, Paytm) or bank transfer account. Once you send the screenshot and your delivery address, we pack and dispatch your parcel within 24 to 48 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Critical Policies Breakdown */}
      <div className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-[#163627]">
          Our Shipping, Payment &amp; Replacement Policies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* No COD Policy */}
          <div className="p-6 rounded-2xl bg-[#FEFBE8] border border-[#F5E7AE] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#92400E]">
              <ShieldAlert className="w-4 h-4 text-[#D97706]" />
              <span>Strict Policy: No Cash on Delivery (COD)</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#163627]">
              Why We Are 100% Pre-Paid
            </h3>
            <p className="text-xs text-[#78350F] leading-relaxed">
              We prepare small weekly batches without chemical preservatives. In India, e-commerce COD suffers from a 30% fake refusal rate where packages sit in hot courier godowns for weeks before coming back spoiled.
            </p>
            <p className="text-xs text-[#78350F] leading-relaxed">
              As a genuine small farm team, we cannot absorb those losses. Pre-payment protects our small-batch freshness and allows us to keep our prices fair for sincere customers.
            </p>
          </div>

          {/* Shipping Rates */}
          <div className="p-6 rounded-2xl bg-[#FCFAF4] border border-[#DFE6C8] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163627]">
              <Truck className="w-4 h-4 text-[#1E5E3A]" />
              <span>Flat Shipping: ₹{FLAT_SHIPPING_CHARGE} per Order</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#163627]">
              Anywhere Across India
            </h3>
            <p className="text-xs text-[#526150] leading-relaxed">
              Whether you order 1 bottle or 5 kilograms of pantry powder, shipping is a flat ₹{FLAT_SHIPPING_CHARGE} across India.
            </p>
            <p className="text-xs text-[#526150] leading-relaxed">
              We ship via India Post Speed Post, DTDC, and Blue Dart. Parcels typically reach southern states in 2–3 days and other regions in 4–5 days.
            </p>
          </div>

          {/* Payment Methods */}
          <div className="p-6 rounded-2xl bg-[#FCFAF4] border border-[#DFE6C8] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163627]">
              <CreditCard className="w-4 h-4 text-[#1E5E3A]" />
              <span>Accepted Payment Methods</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#163627]">
              Instant &amp; Zero-Surcharge
            </h3>
            <ul className="text-xs text-[#526150] space-y-1.5 leading-relaxed">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#166534]" />
                <span>UPI: Google Pay, PhonePe, Paytm, Amazon Pay, BHIM</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#166534]" />
                <span>Direct Bank Transfer (NEFT / IMPS)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#166534]" />
                <span>QR Code shared directly in your WhatsApp conversation</span>
              </li>
            </ul>
          </div>

          {/* Damage & Replacement */}
          <div className="p-6 rounded-2xl bg-[#FCFAF4] border border-[#DFE6C8] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163627]">
              <RotateCcw className="w-4 h-4 text-[#1E5E3A]" />
              <span>Transit Damage Replacement</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#163627]">
              100% Hassle-Free Replacement
            </h3>
            <p className="text-xs text-[#526150] leading-relaxed">
              We bubble-wrap and seal every bottle. If a bottle arrives cracked or damaged, just take a 10-second unboxing video or clear photo and send it to us on WhatsApp within 24 hours of delivery.
            </p>
            <p className="text-xs text-[#526150] leading-relaxed">
              We will immediately ship a fresh replacement at zero extra cost. No questions asked.
            </p>
          </div>
        </div>
      </div>

      {/* Direct Order Button */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#122E21] via-[#163627] to-[#18452B] text-white text-center space-y-4">
        <h3 className="font-serif text-2xl font-bold">
          Ready to place your order with us?
        </h3>
        <p className="text-xs sm:text-sm text-[#FEF08A] max-w-lg mx-auto leading-relaxed">
          Tap the button below to message us directly on WhatsApp. We typically reply within minutes during working hours (9 AM – 8 PM IST).
        </p>
        <button
          type="button"
          onClick={handleTestWhatsApp}
          className="inline-flex items-center gap-2 py-3 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition-transform active:scale-95"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Message Us on WhatsApp (+91 76808 02942)</span>
        </button>
      </div>
    </div>
  );
};
