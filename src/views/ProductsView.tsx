import React, { useState, useMemo } from 'react';
import { Product, ProductVariant, ProductCategory } from '../types';
import { PRODUCTS, WHATSAPP_CATALOG_URL } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { RealBatchGallery } from '../components/RealBatchGallery';
import { Search, ExternalLink, SlidersHorizontal, Sparkles } from 'lucide-react';

interface ProductsViewProps {
  onSelectProduct: (product: Product) => void;
  onAddToOrderList: (product: Product, variant: ProductVariant) => void;
  isInOrderList: (productId: string, variantSize: string) => boolean;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  onSelectProduct,
  onAddToOrderList,
  isInOrderList
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  const categories: { label: string; value: ProductCategory }[] = [
    { label: 'All Products (12)', value: 'All' },
    { label: 'Hair Care', value: 'Hair' },
    { label: 'Skin Care', value: 'Skin' },
    { label: 'Pantry & Wellness', value: 'Pantry' },
  ];

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.ingredients.some((ing) => ing.toLowerCase().includes(q))
      );
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.primaryPrice - b.primaryPrice);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.primaryPrice - a.primaryPrice);
    }

    return list;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#DCE5C5]">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#CA8A04]">
            <Sparkles className="w-3.5 h-3.5 text-[#CA8A04]" />
            <span>Farm Catalog · Chemical Free</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#163627] mt-1">
            Our Farm Formulations
          </h1>
          <p className="text-xs sm:text-sm text-[#4A5747] mt-2 max-w-xl leading-relaxed">
            All 12 small-batch items grown and crafted with care. Tap &ldquo;Order on WhatsApp&rdquo; for instant direct checkout with the founders.
          </p>
        </div>

        {/* WhatsApp Business Catalog External Link */}
        <div className="shrink-0">
          <a
            href={WHATSAPP_CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-[#FAF5DE] hover:bg-[#F3EBC9] text-[#163627] border border-[#DFD5A8] text-xs font-semibold transition-colors shadow-2xs"
          >
            <span>Open WhatsApp Business Catalog</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#E5A91A]" />
          </a>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Category Filter Tabs (Interactive segmented buttons allowed by skill) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#EEF6EA] rounded-xl overflow-x-auto scrollbar-none border border-[#DCE5C5]">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                activeCategory === cat.value
                  ? 'bg-gradient-to-r from-[#FAF5DE] to-[#FFFDF7] text-[#163627] font-bold shadow-xs border border-[#E5A91A]/40'
                  : 'text-[#4A5747] hover:text-[#163627] hover:bg-[#FAF5DE]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Sort Container */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex-1 sm:w-60">
            <Search className="w-3.5 h-3.5 text-[#6E7B6C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search herbs, hair oil..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-[#FCFAF4] border border-[#DFE6C8] focus:outline-hidden focus:border-[#1E5E3A] text-[#163627] placeholder:text-[#8D9B8B]"
            />
          </div>

          <div className="relative shrink-0">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="py-1.5 pl-2.5 pr-7 text-xs rounded-xl bg-[#FCFAF4] border border-[#DFE6C8] text-[#163627] focus:outline-hidden focus:border-[#1E5E3A] cursor-pointer"
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <SlidersHorizontal className="w-3 h-3 text-[#6E7B6C] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-16 text-center bg-[#FCFAF4] rounded-3xl border border-[#DFE6C8] p-8">
          <p className="font-serif text-lg text-[#163627] font-semibold">
            No products found matching &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="text-xs text-[#6E7B6C] mt-1">
            Try searching for terms like &ldquo;oil&rdquo;, &ldquo;shampoo&rdquo;, &ldquo;turmeric&rdquo;, or &ldquo;bhringraj&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('All');
            }}
            className="mt-4 px-4 py-2 bg-[#163627] hover:bg-[#1E5E3A] text-white text-xs font-semibold rounded-xl border border-[#2B5A42]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onAddToOrderList={onAddToOrderList}
              isInOrderList={isInOrderList(product.id, product.primarySize)}
            />
          ))}
        </div>
      )}

      {/* Real Batch Packaging Photos */}
      <RealBatchGallery onSelectProduct={onSelectProduct} />

      {/* Ordering Helper Strip */}
      <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B5349]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#163627]">
            Want a customized bundle?
          </span>
          <span>We can pack personalized hair or skin care kits based on your needs.</span>
        </div>
        <a
          href={`https://wa.me/917680802942?text=${encodeURIComponent("Hi Krithveda Naturals, I'd like a recommendation for my hair/skin type.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-[#163627] hover:underline whitespace-nowrap"
        >
          Consult on WhatsApp →
        </a>
      </div>
    </div>
  );
};
