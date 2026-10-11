import React from 'react';
import { ActivePage } from '../types';
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER, WHATSAPP_CATALOG_URL, FLAT_SHIPPING_CHARGE } from '../data/products';
import { MessageSquare, ExternalLink, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  onOpenChecklist?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenChecklist }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#122A1E] text-[#D0C7B8] pt-14 pb-20 md:pb-12 border-t border-[#1C3E2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Origin */}
          <div className="space-y-3">
            <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
              Krithveda Naturals
            </h3>
            <p className="text-xs text-[#B5A997] leading-relaxed">
              Grown on our farm. Made in our home. Two former software engineers crafting chemical-free herbal hair oils, powders, and pantry staples in Andhra Pradesh.
            </p>
            <div className="pt-2 text-xs text-[#8FA395]">
              <p>WhatsApp: <span className="text-white font-mono">{WHATSAPP_DISPLAY}</span></p>
              <p className="mt-0.5">Replies: 9:00 AM – 8:00 PM IST</p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors"
                >
                  All 12 Products
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('story')}
                  className="hover:text-white transition-colors"
                >
                  Our Story (Tech to Farm)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('farm')}
                  className="hover:text-white transition-colors"
                >
                  The Farm & Crops
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('process')}
                  className="hover:text-white transition-colors"
                >
                  How We Make It
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('how-to-order')}
                  className="hover:text-white transition-colors"
                >
                  How to Order on WhatsApp
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy &amp; Terms
                </button>
              </li>
              {onOpenChecklist && (
                <li className="pt-1 border-t border-[#1F4331]">
                  <button
                    type="button"
                    onClick={onOpenChecklist}
                    className="text-[#FEF08A] hover:underline transition-colors flex items-center gap-1"
                  >
                    <span>Client Project Checklist</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 3: Direct Ordering & Policies */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Ordering Policies
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B5A997]">
              <li className="flex items-start gap-2">
                <Truck className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                <span>Flat ₹{FLAT_SHIPPING_CHARGE} shipping anywhere in India</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                <span>No Cash on Delivery (Prepaid via UPI/Bank)</span>
              </li>
              <li className="flex items-start gap-2">
                <RefreshCw className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                <span>24–48 hr dispatch with live courier tracking</span>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-[#1F4331]">
              <a
                href={WHATSAPP_CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FEF08A] hover:underline"
              >
                <span>View WhatsApp Business Catalog</span>
                <ExternalLink className="w-3 h-3 text-[#E5A91A]" />
              </a>
            </div>
          </div>

          {/* Col 4: WhatsApp Direct Action */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2">
              Order Directly
            </h4>
            <p className="text-xs text-[#B5A997] leading-relaxed">
              Have a question or ready to place an order? Talk directly to the makers on WhatsApp.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Krithveda Naturals, I'd like to place an order.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#1C3E2D] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8FA395]">
          <p>© {currentYear} Krithveda Naturals (KritVeda). All rights reserved.</p>
          <p className="text-center sm:text-right">
            Handcrafted with farm botanicals · No artificial colorants or chemical fragrance
          </p>
        </div>
      </div>
    </footer>
  );
};
