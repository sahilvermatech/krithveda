import React, { useState } from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, WHATSAPP_CATALOG_URL } from '../data/products';
import { MessageSquare, ExternalLink, Clock, MapPin, Shield, Send } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [inquiryType, setInquiryType] = useState('Product Question');
  const [userName, setUserName] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hi Krithveda Naturals, `;
    if (userName.trim()) {
      text += `my name is ${userName.trim()}. `;
    }
    text += `I have an inquiry regarding [${inquiryType}]:\n${customMessage.trim() || 'Please share product details and recommendations.'}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-10 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Title */}
      <div className="space-y-3">
        <div className="text-xs uppercase tracking-widest font-semibold text-[#CA8A04]">
          Direct Connection
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#163627] leading-tight">
          Talk Directly with the Founders
        </h1>
        <p className="text-base sm:text-lg text-[#4A5747] leading-relaxed">
          No automated ticket queue, no call center script. When you message us, you reach the very people who grow and formulate your products.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl bg-[#FCFAF4] border border-[#DFE6C8] shadow-xs space-y-2">
          <div className="w-9 h-9 rounded-xl bg-[#DCFCE7] text-[#166534] flex items-center justify-center">
            <MessageSquare className="w-5 h-5 fill-current" />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#CA8A04] block">
            Direct WhatsApp
          </span>
          <h2 className="font-mono text-base font-bold text-[#163627]">
            {WHATSAPP_DISPLAY}
          </h2>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#166534] hover:underline inline-flex items-center gap-1 pt-1"
          >
            <span>Open WhatsApp Chat</span>
            <ExternalLink className="w-3 h-3 text-[#E5A91A]" />
          </a>
        </div>

        <div className="p-6 rounded-2xl bg-[#FCFAF4] border border-[#DFE6C8] shadow-xs space-y-2">
          <div className="w-9 h-9 rounded-xl bg-[#FEF3C7] text-[#B45309] flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#CA8A04] block">
            Reply Hours
          </span>
          <h2 className="font-serif text-base font-bold text-[#163627]">
            9:00 AM – 8:00 PM IST
          </h2>
          <p className="text-xs text-[#6E7B6C] pt-1">
            Monday through Saturday (Sunday replies may have slight delays as we tend to the farm).
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#FCFAF4] border border-[#DFE6C8] shadow-xs space-y-2">
          <div className="w-9 h-9 rounded-xl bg-[#E2F0D9] text-[#163627] flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#CA8A04] block">
            Farm Region
          </span>
          <h2 className="font-serif text-base font-bold text-[#163627]">
            Andhra Pradesh, India
          </h2>
          <p className="text-xs text-[#6E7B6C] pt-1">
            Grown in the fertile Godavari agricultural belt.
          </p>
        </div>
      </div>

      {/* WhatsApp Message Composer Helper */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-[#EFF6EB] to-[#FAF5DE] rounded-3xl border border-[#DCE5C5] space-y-6">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#163627]">
            Quick Message Composer
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#163627] mt-0.5">
            Draft Your Message to Open in WhatsApp
          </h3>
          <p className="text-xs sm:text-sm text-[#4A5747] mt-1">
            Fill in your question and tap &ldquo;Send to WhatsApp&rdquo; to launch your chat prefilled.
          </p>
        </div>

        <form onSubmit={handleSendDraft} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#163627] mb-1">
                Your Name (Optional):
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="e.g. Priya Sharma"
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-[#DFE6C8] focus:outline-hidden focus:border-[#1E5E3A] text-[#163627]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#163627] mb-1">
                Topic / Inquiry Type:
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-[#DFE6C8] focus:outline-hidden focus:border-[#1E5E3A] text-[#163627]"
              >
                <option value="Hair Routine Consultation">Hair Routine Consultation (Hair fall / Dandruff)</option>
                <option value="Skin Care Consultation">Skin Care Consultation (Glow / Pigmentation)</option>
                <option value="Pantry Staples & Moringa">Pantry Staples &amp; Moringa Nutrition</option>
                <option value="Placing a Bulk Order">Placing a Multi-Product Order</option>
                <option value="Existing Order Tracking">Existing Order Tracking</option>
                <option value="General Question">General Question</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#163627] mb-1">
              Your Message or Specific Question:
            </label>
            <textarea
              rows={3}
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder="e.g. I have severe dry scalp and hair fall. Which oil and pack combination do you recommend?"
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-[#DFE6C8] focus:outline-hidden focus:border-[#1E5E3A] text-[#163627]"
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-[11px] text-[#6E7B6C]">
              <Shield className="w-3.5 h-3.5 text-[#166534]" />
              <span>We do not store your information; this launches WhatsApp directly.</span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-bold transition-all shadow-xs active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Launch in WhatsApp Chat</span>
            </button>
          </div>
        </form>
      </div>

      {/* WhatsApp Business Catalog Link */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#EFF6EB] to-[#FAF5DE] border border-[#DCE5C5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3E4E3D]">
        <div>
          <strong>Prefer browsing on WhatsApp?</strong> You can view our verified WhatsApp Business Catalog with live product pricing and photos directly inside WhatsApp.
        </div>
        <a
          href={WHATSAPP_CATALOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 py-2 px-3.5 bg-[#FCFAF4] text-[#163627] border border-[#DFE6C8] hover:bg-[#FAF5DE] rounded-xl font-semibold transition-colors shrink-0"
        >
          <span>Open WhatsApp Catalog</span>
          <ExternalLink className="w-3 h-3 text-[#E5A91A]" />
        </a>
      </div>

      {/* Privacy note */}
      <div className="text-[11px] text-[#8C8275] text-center max-w-xl mx-auto leading-relaxed">
        <strong>Privacy &amp; Data Notice:</strong> The Krithveda Naturals website does not collect, sell, or track personal browsing information or require account logins. Conversations conducted on WhatsApp are subject to WhatsApp&apos;s end-to-end encryption and terms.
      </div>
    </div>
  );
};
