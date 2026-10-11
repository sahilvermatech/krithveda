import React, { useState } from 'react';
import { Product, ProductVariant } from '../types';
import { ProductVisual } from './ProductVisual';
import { buildWhatsAppProductUrl, FLAT_SHIPPING_CHARGE } from '../data/products';
import { X, MessageSquare, Plus, Check, ShieldCheck, MapPin, Sparkles, Clock, AlertCircle, Camera } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToOrderList: (product: Product, variant: ProductVariant) => void;
  isInOrderList: (productId: string, variantSize: string) => boolean;
  onNavigateToFarm: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToOrderList,
  isInOrderList,
  onNavigateToFarm
}) => {
  if (!product) return null;

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0]
  );

  const isAdded = isInOrderList(product.id, selectedVariant.size);

  const handleWhatsAppOrder = () => {
    const url = buildWhatsAppProductUrl(product, selectedVariant);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FCFAF4] rounded-3xl shadow-2xl border border-[#DCE5C5] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#DCE5C5] bg-gradient-to-r from-[#EFF6EB] to-[#FAF5DE]">
          <div className="flex items-center gap-2 text-xs text-[#6E7B6C]">
            <span className="font-semibold text-[#163627]">{product.category}</span>
            <span>·</span>
            <span>Krithveda Farm-Grown Care</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#6E7B6C] hover:text-[#163627] hover:bg-black/5 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Visual Box */}
            <div className="md:col-span-5 flex flex-col items-center">
              <ProductVisual product={product} size="lg" className="w-full shadow-xs" />

              {/* Real Batch Photo Inspection Badge */}
              {product.imageFile && (
                <div className="mt-2.5 w-full p-2.5 bg-[#FAF5DE] rounded-xl border border-[#DFD5A8] text-xs text-[#4E4322] space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#163627]">
                    <span className="flex items-center gap-1">
                      <Camera className="w-3.5 h-3.5 text-[#CA8A04]" />
                      Real Farm Batch
                    </span>
                    <span className="text-[10px] text-[#166534] bg-[#DCFCE7] px-1.5 py-0.2 rounded-xs border border-[#BBF7D0]">
                      Verified
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6E7B6C] leading-snug">
                    {product.realPhotoLabel}
                  </p>
                </div>
              )}

              {/* Farm Origin Strip */}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigateToFarm();
                }}
                className="mt-2.5 w-full flex items-center justify-center gap-2 py-2 px-3 bg-[#EEF7EB] hover:bg-[#E2F0DA] text-[#163627] rounded-xl text-xs font-medium transition-colors border border-[#CFDFCB] text-left"
              >
                <MapPin className="w-3.5 h-3.5 text-[#1E5E3A] shrink-0" />
                <span className="truncate">{product.farmOrigin}</span>
              </button>
            </div>

            {/* Product Details & Purchase Module */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                {product.labelCount && (
                  <div className="inline-block text-xs font-semibold text-[#163627] bg-[#DCFCE7] border border-[#BBF7D0] px-2.5 py-0.5 rounded-md mb-2">
                    {product.labelCount}
                  </div>
                )}

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#163627] leading-tight">
                  {product.name}
                </h2>

                <p className="text-xs sm:text-sm text-[#CA8A04] mt-1 font-semibold">
                  {product.subtitle}
                </p>

                <p className="text-sm text-[#3E4E3D] mt-3 leading-relaxed">
                  {product.tagline}
                </p>

                {/* Size Selector */}
                <div className="mt-5">
                  <label className="text-xs font-semibold text-[#163627] uppercase tracking-wider block mb-2">
                    Select Pack Size & Price:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {product.variants.map((v) => {
                      const active = selectedVariant.size === v.size;
                      return (
                        <button
                          key={v.size}
                          type="button"
                          onClick={() => setSelectedVariant(v)}
                          className={`py-2 px-2.5 rounded-xl text-xs font-medium flex flex-col items-center border transition-all ${
                            active
                              ? 'bg-[#163627] text-white border-[#163627] shadow-xs'
                              : 'bg-[#FAF5DE] text-[#163627] border-[#DFD5A8] hover:border-[#163627]'
                          }`}
                        >
                          <span className="font-bold">{v.size}</span>
                          <span className={`text-[11px] font-mono ${active ? 'text-[#FEF08A]' : 'text-[#6E7B6C]'}`}>
                            ₹{v.price}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Pricing & WhatsApp Actions */}
                <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-[#EFF6EB] to-[#FAF5DE] border border-[#DCE5C5]">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="text-2xl font-bold font-mono text-[#163627]">
                        ₹{selectedVariant.price}
                      </span>
                      <span className="text-xs text-[#6E7B6C] ml-1.5">
                        ({selectedVariant.size})
                      </span>
                    </div>
                    <span className="text-xs text-[#6E7B6C]">
                      Flat shipping: ₹{FLAT_SHIPPING_CHARGE} across India
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={handleWhatsAppOrder}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors shadow-sm active:scale-[0.98] text-sm"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Order on WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onAddToOrderList(product, selectedVariant)}
                      className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold border transition-all active:scale-[0.98] text-sm ${
                        isAdded
                          ? 'bg-[#E2F0D9] text-[#163627] border-[#A8D3B3]'
                          : 'bg-[#FAF5DE] text-[#163627] border-[#DFD5A8] hover:bg-[#163627] hover:text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4 text-[#163627]" />
                          <span>In Your Order List</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to Order List</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Ordering Policy Reminders */}
                  <div className="mt-3 flex items-center justify-between text-[11px] text-[#6E7B6C] pt-2 border-t border-[#DCE5C5]">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#1E5E3A]" />
                      No COD · Prepaid via UPI
                    </span>
                    <span>Dispatches in 24-48 hrs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Specifications Tabs & Sections */}
          <div className="border-t border-[#DCE5C5] pt-6 space-y-6">
            {/* Ingredients */}
            <div>
              <h3 className="font-serif text-lg font-bold text-[#163627] flex items-center gap-2 mb-2.5">
                <Sparkles className="w-4 h-4 text-[#CA8A04]" />
                Complete Ingredients Transparency
              </h3>
              <p className="text-xs text-[#6E7B6C] mb-3">
                No hidden chemicals, no mineral oil fillers, no synthetic lathering agents. Every ingredient is listed on our package:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {product.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="inline-block bg-[#FAF5DE] text-[#163627] text-xs px-2.5 py-1 rounded-md border border-[#DFD5A8]"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits & How to Use */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-2xl bg-[#EFF7ED] border border-[#CFE4CD]">
                <h4 className="font-semibold text-sm text-[#163627] mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#166534]" />
                  Key Benefits
                </h4>
                <ul className="space-y-1.5 text-xs text-[#3E4E3D] leading-relaxed">
                  {product.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#166534] font-bold mt-0.5">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-[#FEFBE8] border border-[#F5E7AE]">
                <h4 className="font-semibold text-sm text-[#B45309] mb-2 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#CA8A04]" />
                  How to Use
                </h4>
                <div className="space-y-2 text-xs text-[#4E4322] leading-relaxed">
                  {product.howToUse.map((step, i) => (
                    <p key={i} className="flex items-start gap-1.5">
                      <span className="text-[#B45309] font-bold mt-0.5">{i + 1}.</span>
                      <span>{step}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Storage & Shelf Life Info */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-[#EFF6EB] to-[#FAF5DE] text-xs text-[#526150] border border-[#DCE5C5]">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#CA8A04] shrink-0" />
                <span>
                  <strong>Shelf Life:</strong> {product.shelfLife}
                </span>
              </div>
              <div>
                <strong>Storage:</strong> {product.storage}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
