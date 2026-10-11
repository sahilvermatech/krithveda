import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data/products';
import { Camera, CheckCircle2, MessageSquare, ZoomIn, X, ExternalLink } from 'lucide-react';

interface RealBatchGalleryProps {
  onSelectProduct?: (product: Product) => void;
}

export const RealBatchGallery: React.FC<RealBatchGalleryProps> = ({ onSelectProduct }) => {
  const [activePhotoModal, setActivePhotoModal] = useState<Product | null>(null);

  // Products with actual uploaded photos
  const photoProducts = PRODUCTS.filter((p) => p.imageFile);

  const handleOrderPhotoProduct = (product: Product) => {
    const text = encodeURIComponent(
      `Hi Krithveda Naturals, I saw the real batch photo of ${product.name} (${product.primarySize}) and would like to order it!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#EFF6EB]/80 via-[#FAF6E2]/80 to-[#EEF6E8]/80 border-y border-[#DCE5C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#CA8A04] mb-1">
            <Camera className="w-4 h-4 text-[#CA8A04]" />
            <span>Farm Batch Photography</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#163627]">
            Real Packages. Real Labels. Zero Studio CGI.
          </h2>
          <p className="text-xs sm:text-sm text-[#4A5747] mt-2 leading-relaxed">
            These are genuine photos of our actual small batches taken right on our farm and home workspace—showing the real labels, the authentic &ldquo;The product by Wife of Vamsi&rdquo; marks, full ingredients, and batch dates.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {photoProducts.map((p) => (
            <div
              key={p.id}
              className="group bg-[#FCFAF3] rounded-2xl border border-[#DFE6C8] overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Photo Card Preview */}
              <div className="relative aspect-4/5 overflow-hidden bg-gradient-to-b from-[#FAF5DE] to-[#F0F7EB] flex items-center justify-center p-3">
                {/* Try rendering actual image file with fallback to authentic packaging */}
                <img
                  src={p.imageFile}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // If file path not resolved directly by server, hide img and show vector render
                    (e.target as HTMLElement).style.display = 'none';
                    const fallback = (e.target as HTMLElement).nextElementSibling;
                    if (fallback) (fallback as HTMLElement).classList.remove('hidden');
                  }}
                />

                {/* Styled CSS/SVG Fallback adhering strictly to Zero-Broken-Image Policy */}
                <div className="hidden absolute inset-0 p-4 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#FAF5DE] to-[#EFEAE1]">
                  <div
                    className="w-24 h-32 rounded-xl border border-black/15 shadow-sm flex flex-col items-center justify-center p-2 text-center"
                    style={{
                      backgroundColor: p.packagingType === 'Bottle' ? '#173859' : p.accentColor
                    }}
                  >
                    <div className="bg-white/95 w-full py-1.5 px-1 rounded-sm text-[8px] text-[#163627] font-serif font-bold shadow-xs">
                      <div className="text-[7px] text-[#CA8A04] uppercase font-bold">KritVeda</div>
                      <div className="truncate">{p.name}</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#6E7B6C] font-medium mt-2 font-mono">
                    {p.primarySize} · ₹{p.primaryPrice}
                  </span>
                </div>

                {/* Inspect button overlay */}
                <button
                  type="button"
                  onClick={() => setActivePhotoModal(p)}
                  className="absolute bottom-3 right-3 bg-[#FAF5DE]/90 backdrop-blur-xs text-[#163627] p-2 rounded-xl shadow-xs opacity-90 group-hover:opacity-100 hover:bg-[#FAF5DE] hover:text-[#1E5E3A] transition-opacity border border-[#DFD5A8]"
                  title="Enlarge batch photo"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                <div className="absolute top-3 left-3 bg-[#163627] text-[#FEF08A] text-[10px] font-semibold px-2 py-0.5 rounded-md border border-[#E5A91A]/30">
                  {p.labelCount || 'Real Batch'}
                </div>
              </div>

              {/* Photo Description & Details */}
              <div className="p-4 flex flex-col justify-between flex-1 gap-3 bg-[#FCFAF3] border-t border-[#E8EED9]">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#163627] leading-snug">
                    {p.name}
                  </h4>
                  <p className="text-[11px] text-[#546252] mt-1 line-clamp-2 leading-relaxed">
                    {p.realPhotoLabel}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E8EED9] flex items-center justify-between gap-2">
                  <div className="text-xs font-mono font-bold text-[#163627]">
                    ₹{p.primaryPrice} <span className="text-[10px] font-normal text-[#6E7B6C]">/ {p.primarySize}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {onSelectProduct && (
                      <button
                        type="button"
                        onClick={() => onSelectProduct(p)}
                        className="px-2 py-1 text-[11px] font-semibold text-[#163627] hover:bg-[#F2F7EC] rounded-md transition-colors border border-[#DCE4C5]"
                      >
                        Specs
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleOrderPhotoProduct(p)}
                      className="px-2.5 py-1 text-[11px] font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-lg transition-colors flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3 fill-current" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for viewing high-res photo details */}
      {activePhotoModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActivePhotoModal(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E5DFD5] overflow-hidden my-auto p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#F0EBE1]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#166534]">
                  Verified Batch Photo
                </span>
                <h3 className="font-serif text-xl font-bold text-[#163627]">
                  {activePhotoModal.name} ({activePhotoModal.primarySize})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActivePhotoModal(null)}
                className="p-1.5 text-[#786C5E] hover:text-[#163627] rounded-full hover:bg-black/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo preview container */}
            <div className="relative aspect-4/5 max-h-[55vh] bg-[#FAF8F5] rounded-2xl overflow-hidden flex items-center justify-center p-4 border border-[#EAE3D6]">
              <img
                src={activePhotoModal.imageFile}
                alt={activePhotoModal.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const fallback = (e.target as HTMLElement).nextElementSibling;
                  if (fallback) (fallback as HTMLElement).classList.remove('hidden');
                }}
              />
              <div className="hidden text-center space-y-2 p-6">
                <CheckCircle2 className="w-10 h-10 text-[#166534] mx-auto" />
                <h4 className="font-serif text-lg font-bold text-[#163627]">
                  {activePhotoModal.name}
                </h4>
                <p className="text-xs text-[#5B5349] max-w-sm">
                  {activePhotoModal.realPhotoLabel}
                </p>
                <div className="text-xs font-mono text-[#8C7A65]">
                  File: {activePhotoModal.imageFile}
                </div>
              </div>
            </div>

            {/* Verification details from client label */}
            <div className="p-3.5 bg-[#FAF8F5] rounded-xl text-xs text-[#4A4238] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#163627]">Label Verification:</span>
                <span className="text-[#166534] font-medium">KritVeda Naturals Home Made</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#786C5E]">
                <span>Contact printed on pouch:</span>
                <span className="font-mono text-[#163627]">+91-7680802942</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#786C5E]">
                <span>Shelf life / Expiry:</span>
                <span>2026 Batch · Valid till 2027</span>
              </div>
            </div>

            {/* Order CTA */}
            <div className="pt-2 flex items-center justify-between gap-3">
              <span className="text-xs text-[#786C5E]">
                ₹{activePhotoModal.primaryPrice} + ₹70 Flat India Shipping
              </span>
              <button
                type="button"
                onClick={() => {
                  handleOrderPhotoProduct(activePhotoModal);
                  setActivePhotoModal(null);
                }}
                className="py-2.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-transform active:scale-95 shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Order this item on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
