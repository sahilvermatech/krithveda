import React from 'react';
import { Product } from '../types';

interface ProductVisualProps {
  product: Product;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ProductVisual: React.FC<ProductVisualProps> = ({
  product,
  size = 'md',
  className = ''
}) => {
  const [imageError, setImageError] = React.useState(false);

  // Height classes based on size
  const heightClasses = {
    sm: 'h-48',
    md: 'h-64 sm:h-72',
    lg: 'h-80 sm:h-96'
  }[size];

  const isBottle = product.packagingType === 'Bottle';

  return (
    <div
      className={`relative w-full ${heightClasses} flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-[#FAF5DE] via-[#F3F8EC] to-[#EAF4E8] border border-[#E2EACF] p-3 select-none ${className}`}
    >
      {/* If product has real image file and hasn't errored, render it */}
      {product.imageFile && !imageError ? (
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={product.imageFile}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-contain drop-shadow-md rounded-lg transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
          <span className="absolute top-2 left-2 text-[9px] uppercase tracking-wider font-semibold text-[#FEF08A] bg-[#163627]/90 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-[#E5A91A]/40">
            Real Batch
          </span>
        </div>
      ) : (
        <>
          {/* Subtle organic background foliage motif */}
          <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full text-[#163627] fill-current">
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M100 20 Q120 70 170 80 Q120 110 100 180 Q80 110 30 80 Q80 70 100 20 Z" opacity="0.3" />
            </svg>
          </div>

          {isBottle ? (
            /* Bottle Rendering (Blue Hair Oil, Liquid Shampoo, Saffron Skin Oil) */
            <div className="relative flex flex-col items-center drop-shadow-xl transition-transform duration-300 group-hover:scale-105">
              {/* Bottle Cap */}
              <div className="w-9 h-7 bg-[#0B2519] rounded-t-sm shadow-inner border-b border-black/30 relative">
                <div className="absolute top-1 left-2 right-2 h-1 bg-white/20 rounded-full"></div>
                {/* Flip cap notch */}
                <div className="w-3 h-1.5 bg-[#143B2A] mx-auto -mt-1 rounded-t-sm"></div>
              </div>
              {/* Bottle Neck */}
              <div className="w-6 h-4 bg-gradient-to-r from-black/40 via-white/10 to-black/40"></div>
              {/* Bottle Body */}
              <div
                className={`w-28 sm:w-32 ${size === 'lg' ? 'h-56' : 'h-44 sm:h-48'} rounded-b-2xl relative overflow-hidden flex flex-col items-center justify-between border border-black/10`}
                style={{
                  background:
                    product.id === 'bhringraj-blue-hair-oil'
                      ? 'linear-gradient(135deg, #0A192F 0%, #173859 40%, #0F2537 100%)'
                      : product.id === 'saffron-skin-oil'
                      ? 'linear-gradient(135deg, #9A3412 0%, #EA580C 50%, #7C2D12 100%)'
                      : 'linear-gradient(135deg, #451A03 0%, #78350F 50%, #351403 100%)'
                }}
              >
                {/* Glass reflection highlight */}
                <div className="absolute top-0 bottom-0 left-2 w-2.5 bg-gradient-to-r from-white/35 to-transparent rounded-full pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-3 w-1.5 bg-gradient-to-l from-white/20 to-transparent pointer-events-none"></div>

                {/* Front Paper Label */}
                <div className="my-auto w-[84%] bg-[#FAF8F5] py-2 px-2 rounded-sm border border-[#D5CBBB] shadow-md flex flex-col items-center text-center">
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-[#163627]">KritVeda</span>
                  <span className="text-[7px] text-[#786C5E] uppercase tracking-widest -mt-0.5">Home Made</span>
                  <div className="w-8 h-px bg-[#C87D25] my-1"></div>
                  <h4 className="text-[11px] font-bold text-[#1F2937] leading-tight line-clamp-2 font-serif">
                    {product.name}
                  </h4>
                  {product.labelCount && (
                    <div className="mt-1 text-[8px] font-medium text-[#B45309] bg-[#FEF3C7] px-1.5 py-0.5 rounded-sm">
                      {product.labelCount}
                    </div>
                  )}
                  <span className="text-[8px] text-[#4B5563] mt-1 font-mono">
                    {product.primarySize} · ₹{product.primaryPrice}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* Pouch Rendering (Powders: Moringa, Hair Pack, Face Pack, Turmeric, Shampoo Powder, etc.) */
            <div className="relative flex flex-col items-center drop-shadow-xl transition-transform duration-300 group-hover:scale-105">
              {/* Pouch Top Seal & Zipper */}
              <div
                className="w-32 sm:w-36 h-4 rounded-t-md relative flex items-center justify-between px-2 border-b border-black/15 shadow-inner"
                style={{
                  backgroundColor:
                    product.id === 'turmeric-powder'
                      ? '#DC2626'
                      : product.id === 'organic-moringa-powder'
                      ? '#0284C7'
                      : product.id === 'hair-pack-powder'
                      ? '#D97706'
                      : product.id === 'shampoo-powder'
                      ? '#1E293B'
                      : '#15803D'
                }}
              >
                {/* Tear notch left/right */}
                <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                <div className="w-10 h-0.5 bg-black/30 rounded-full"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
              </div>

              {/* Pouch Main Foil Body */}
              <div
                className={`w-32 sm:w-36 ${size === 'lg' ? 'h-52' : 'h-40 sm:h-44'} rounded-b-xl relative overflow-hidden flex flex-col items-center justify-center p-2.5 shadow-md`}
                style={{
                  backgroundColor:
                    product.id === 'turmeric-powder'
                      ? '#EF4444'
                      : product.id === 'organic-moringa-powder'
                      ? '#0369A1'
                      : product.id === 'hair-pack-powder'
                      ? '#B45309'
                      : product.id === 'shampoo-powder'
                      ? '#0F172A'
                      : '#166534',
                  backgroundImage:
                    'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(0,0,0,0.15) 100%)'
                }}
              >
                {/* Pouch foil sheen highlights */}
                <div className="absolute top-0 bottom-0 left-2 w-3 bg-gradient-to-r from-white/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-1 left-2 right-2 h-2 bg-black/20 rounded-b-lg"></div>

                {/* Front Printed Label Box */}
                <div className="w-full bg-[#FAF8F5] py-2 px-1.5 rounded-sm border border-[#D5CBBB] shadow-sm flex flex-col items-center text-center">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-[#163627]">KritVeda</span>
                  <span className="text-[7px] text-[#786C5E] uppercase tracking-wider -mt-0.5">Naturals</span>
                  <div className="w-6 h-px bg-[#166534] my-1"></div>
                  <h4 className="text-[10px] font-bold text-[#1F2937] leading-tight font-serif px-1">
                    {product.name}
                  </h4>
                  {product.labelCount && (
                    <div className="mt-1 text-[7.5px] font-medium text-[#166534] bg-[#DCFCE7] px-1 py-0.5 rounded-xs">
                      {product.labelCount}
                    </div>
                  )}
                  <div className="mt-1 flex items-center justify-center gap-1 text-[8px] text-[#4B5563] font-mono">
                    <span>{product.primarySize}</span>
                    <span>·</span>
                    <span className="font-semibold text-[#163627]">₹{product.primaryPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Category indicator watermark */}
      <div className="absolute bottom-2 right-2.5 text-[9px] uppercase tracking-wider text-[#8C7A65] font-medium">
        {product.category}
      </div>
    </div>
  );
};
