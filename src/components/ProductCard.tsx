import React from 'react';
import { Product, ProductVariant } from '../types';
import { ProductVisual } from './ProductVisual';
import { buildWhatsAppProductUrl } from '../data/products';
import { MessageSquare, Eye, Plus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToOrderList?: (product: Product, variant: ProductVariant) => void;
  isInOrderList?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToOrderList,
  isInOrderList = false
}) => {
  const primaryVariant = product.variants[0];

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = buildWhatsAppProductUrl(product, primaryVariant);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAddToList = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToOrderList) {
      onAddToOrderList(product, primaryVariant);
    }
  };

  return (
    <article
      onClick={() => onSelect(product)}
      className="group cursor-pointer flex flex-col justify-between bg-gradient-to-b from-[#FCFAF3] to-[#F7FAF1] rounded-2xl border border-[#DFE6C8] overflow-hidden hover:border-[#1E5E3A] hover:shadow-lg transition-all duration-200"
    >
      {/* Visual Product Box */}
      <div className="relative">
        <ProductVisual product={product} size="md" />

        {/* Bestseller or origin tag */}
        {product.isBestseller && (
          <div className="absolute top-3 left-3 bg-[#163627] text-[#FEF08A] text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-md shadow-xs border border-[#E5A91A]/30">
            Bestseller
          </div>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          className="absolute top-3 right-3 bg-[#FAF5DE]/90 backdrop-blur-xs text-[#163627] p-1.5 rounded-full shadow-xs hover:bg-[#FAF5DE] hover:text-[#1E5E3A] transition-colors border border-[#DFD5A8]"
          title="View full ingredients & usage"
          aria-label={`View details for ${product.name}`}
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Metadata unboxed row */}
          <div className="flex items-center gap-2 text-xs text-[#6E7B6C] mb-1">
            <span className="font-medium text-[#1E5E3A]">{product.category}</span>
            <span aria-hidden="true">·</span>
            <span>{product.primarySize}</span>
            {product.labelCount && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[#CA8A04] font-semibold">{product.labelCount}</span>
              </>
            )}
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#163627] leading-snug group-hover:text-[#1E5E3A] transition-colors">
            {product.name}
          </h3>

          {/* One-line Benefit */}
          <p className="text-xs sm:text-sm text-[#546052] mt-1.5 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-3 border-t border-[#E8EED9] flex flex-col gap-2.5">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-[#163627] font-mono tabular-nums">
                ₹{product.primaryPrice}
              </span>
              <span className="text-xs text-[#6E7B6C]">/ {product.primarySize}</span>
            </div>

            {product.variants.length > 1 && (
              <span className="text-[11px] text-[#7A8778] font-medium">
                +{product.variants.length - 1} sizes available
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="w-full flex items-center justify-center gap-1.5 py-2 px-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-lg transition-colors shadow-xs active:scale-[0.98] whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Order WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleAddToList}
              className={`w-full flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold rounded-lg border transition-colors active:scale-[0.98] whitespace-nowrap ${
                isInOrderList
                  ? 'bg-[#E2F0D9] text-[#163627] border-[#A8D3B3]'
                  : 'bg-[#FAF5DE] text-[#163627] border-[#DFD5A8] hover:bg-[#F3EBCC]'
              }`}
            >
              {isInOrderList ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#163627] stroke-[2.5]" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5 text-[#CA8A04] stroke-[2.5]" />
                  <span>Add to List</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
