import React from 'react';
import { Product, ProductVariant, ActivePage } from '../types';
import { PRODUCTS, WHATSAPP_NUMBER, WHATSAPP_CATALOG_URL, FLAT_SHIPPING_CHARGE } from '../data/products';
import { SayAndDoStrip } from '../components/SayAndDoStrip';
import { ProductCard } from '../components/ProductCard';
import { RealBatchGallery } from '../components/RealBatchGallery';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FOUNDER_STORY } from '../data/story';
import { MessageSquare, ArrowRight, Sparkles, ShieldCheck, Truck, ExternalLink, Leaf, HeartHandshake } from 'lucide-react';

interface HomeViewProps {
  onSelectProduct: (product: Product) => void;
  onAddToOrderList: (product: Product, variant: ProductVariant) => void;
  isInOrderList: (productId: string, variantSize: string) => boolean;
  onNavigate: (page: ActivePage) => void;
  onOpenOrderDrawer: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectProduct,
  onAddToOrderList,
  isInOrderList,
  onNavigate,
  onOpenOrderDrawer
}) => {
  const featuredProducts = PRODUCTS.slice(0, 6);

  const handleGeneralOrder = () => {
    const text = encodeURIComponent("Hi Krithveda Naturals, I'd like to place an order from your farm catalog.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 sm:pb-20 bg-gradient-to-br from-[#EFF7EB] via-[#FAF5DD] to-[#F1F8EC] border-b border-[#DCE5C5]">
        {/* Subtle decorative background texture */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5F3E1]/70 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FEF3C7]/60 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline and Call-to-Actions */}
            <div className="lg:col-span-7 space-y-6">
              {/* Unboxed natural kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#163627]">
                <Leaf className="w-3.5 h-3.5 text-[#2E7D32]" />
                <span>Agricultural Farm · Godavari Valley, Andhra Pradesh</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#163627] leading-[1.1] tracking-tight">
                Grown on our farm. <br />
                <span className="italic font-normal text-[#CA8A04]">Made in our home.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#4A5747] max-w-2xl leading-relaxed">
                We left software engineering to cultivate medicinal herbs and hand-craft genuine chemical-free hair oils, herbal shampoos, ubtans, and nutrient-dense pantry staples. No corporate middlemen. No hidden mineral oils.
              </p>

              {/* Direct WhatsApp Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={handleGeneralOrder}
                  className="flex items-center gap-2.5 py-3.5 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-sm font-bold transition-all shadow-md active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Order on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="flex items-center gap-2 py-3.5 px-5 bg-[#163627] hover:bg-[#1E5E3A] text-white rounded-xl text-sm font-semibold transition-all shadow-xs active:scale-[0.98] border border-[#2B5A42]"
                >
                  <span>View All 12 Products</span>
                  <ArrowRight className="w-4 h-4 text-[#E5A91A]" />
                </button>
              </div>

              {/* Trust Indicators Strip */}
              <div className="pt-6 border-t border-[#DCE5C5] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#4A5747]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1E5E3A] shrink-0" />
                  <span>No synthetic chemicals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#1E5E3A] shrink-0" />
                  <span>Flat ₹{FLAT_SHIPPING_CHARGE} shipping in India</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <Sparkles className="w-4 h-4 text-[#CA8A04] shrink-0" />
                  <span>Weekly small batches</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase & Reality Proof */}
            <div className="lg:col-span-5">
              <div className="relative bg-gradient-to-br from-[#FFFDF7] to-[#F6FAF1] rounded-3xl p-6 sm:p-7 border border-[#DFE7C8] shadow-xl">
                {/* Visual badge card */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E6EED4]">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#CA8A04]">
                      Small Batch Harvest
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#163627]">
                      This Week&apos;s Farm Batches
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-medium text-[#166534] bg-[#DCFCE7] border border-[#BBF7D0] px-2 py-0.5 rounded-md">
                    Fresh Grinding
                  </span>
                </div>

                <div className="py-4 space-y-3.5 text-xs text-[#3E4E3D]">
                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#F4F9EE] border border-[#DCE8D2]">
                    <div className="w-8 h-8 rounded-lg bg-[#E2F0D9] text-[#163627] font-bold flex items-center justify-center shrink-0">
                      01
                    </div>
                    <div>
                      <strong className="text-[#163627] block text-xs">Bhringraj Blue Hair Oil</strong>
                      <span className="text-[#647462]">21-day slow sun steep with 29 active botanicals. Natural deep blue hue.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#FEFBE8] border border-[#F6E9B2]">
                    <div className="w-8 h-8 rounded-lg bg-[#FEF3C7] text-[#B45309] font-bold flex items-center justify-center shrink-0">
                      02
                    </div>
                    <div>
                      <strong className="text-[#163627] block text-xs">Saffron Skin Oil</strong>
                      <span className="text-[#647462]">Kashmiri saffron + cold-pressed virgin almond & coconut oils.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#F3FAF0] border border-[#D8EAD0]">
                    <div className="w-8 h-8 rounded-lg bg-[#DCFCE7] text-[#166534] font-bold flex items-center justify-center shrink-0">
                      03
                    </div>
                    <div>
                      <strong className="text-[#163627] block text-xs">Organic Moringa & Turmeric</strong>
                      <span className="text-[#647462]">Shade-dried tender leaves & hand-milled golden curcumin rhizomes.</span>
                    </div>
                  </div>
                </div>

                {/* Direct link to catalog */}
                <div className="pt-4 border-t border-[#E6EED4] flex items-center justify-between">
                  <span className="text-xs text-[#647462]">
                    Order via WhatsApp catalog:
                  </span>
                  <a
                    href={WHATSAPP_CATALOG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#163627] hover:text-[#CA8A04] hover:underline"
                  >
                    <span>View Catalog</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#E5A91A]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Say and Do Strip: Showing proof next to claims */}
      <SayAndDoStrip />

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-[#CA8A04] mb-1">
              Hand-Harvested & Freshly Prepared
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#163627]">
              Featured Farm Formulations
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#163627] hover:text-[#1E5E3A] transition-colors"
          >
            <span>View All 12 Products</span>
            <ArrowRight className="w-4 h-4 text-[#E5A91A]" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onAddToOrderList={onAddToOrderList}
              isInOrderList={isInOrderList(product.id, product.primarySize)}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => onNavigate('products')}
            className="py-3 px-6 bg-gradient-to-r from-[#FAF6E2] to-[#EEF6E8] hover:from-[#F5EFCB] hover:to-[#E5EFE0] text-[#163627] border border-[#DCE4C4] rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-2xs"
          >
            Explore Complete Catalog (Hair, Skin & Pantry)
          </button>
        </div>
      </section>

      {/* Real Batch Packaging Photos */}
      <RealBatchGallery onSelectProduct={onSelectProduct} />

      {/* Founder Story Strip (Why software engineers chose the farm) */}
      <section className="bg-gradient-to-r from-[#F0F7EB] via-[#FAF5DC] to-[#EFF6EB] py-14 sm:py-20 border-y border-[#DDE5C5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#FFFDF8] to-[#F7FAF2] rounded-3xl p-6 sm:p-10 border border-[#DFE7C8] shadow-md">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#CA8A04] mb-2 uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4 text-[#CA8A04]" />
              <span>A Note From The Founders</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#163627] leading-snug">
              &ldquo;We debug small herbal batches the way we used to debug code: zero hidden shortcuts.&rdquo;
            </h2>

            <div className="mt-5 space-y-4 text-xs sm:text-sm text-[#3E4E3D] leading-relaxed">
              <p>
                We spent years in the software industry building code. But when we sought real herbal products for our own families, we found mostly chemical bases labeled as &quot;herbal.&quot; In 2021, we returned to our agricultural land in Andhra Pradesh to grow the plants ourselves.
              </p>
              <p>
                You&apos;ll see both <em>Krithveda</em> and <em>KritVeda</em> (and &quot;Wife of Vamsi&quot;) on our labels. That reflects our home roots—these recipes began right at our kitchen table. Today, every single package is weighed, packed, and verified by our own hands.
              </p>
            </div>

            <div className="mt-7 pt-6 border-t border-[#E6EED4] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#163627] text-[#FEF08A] flex items-center justify-center font-serif font-bold text-sm border border-[#E5A91A]/40">
                  KV
                </div>
                <div>
                  <span className="font-semibold text-xs text-[#163627] block">
                    Vamsi &amp; Family
                  </span>
                  <span className="text-[11px] text-[#647462]">
                    Founders, Krithveda Naturals
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('story')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#163627] hover:text-[#CA8A04] hover:underline"
              >
                <span>Read our full transition story</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E5A91A]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials & Reviews */}
      <TestimonialsSection />

      {/* How to Order in 3 Simple Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#CA8A04] mb-1">
            Zero Friction
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#163627]">
            How Ordering Works on WhatsApp
          </h2>
          <p className="text-xs sm:text-sm text-[#4A5747] mt-2">
            No complicated account registrations or buggy carts. You message us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#F2F8ED] rounded-2xl border border-[#D3E3C6] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#163627] text-[#FAF8EE] font-bold flex items-center justify-center font-mono mb-4 text-sm">
              01
            </div>
            <h3 className="font-serif text-lg font-bold text-[#163627] mb-2">
              Pick Your Products
            </h3>
            <p className="text-xs text-[#4A5747] leading-relaxed">
              Browse our catalog or use the &quot;Add to Order List&quot; button to select your desired sizes.
            </p>
          </div>

          <div className="p-6 bg-[#FEFBE8] rounded-2xl border border-[#F5E7AE] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#E5A91A] text-[#163627] font-bold flex items-center justify-center font-mono mb-4 text-sm">
              02
            </div>
            <h3 className="font-serif text-lg font-bold text-[#163627] mb-2">
              Tap &quot;Order on WhatsApp&quot;
            </h3>
            <p className="text-xs text-[#4A5747] leading-relaxed">
              A prefilled message opens with your selected items, pricing, and flat ₹70 shipping charge automatically calculated.
            </p>
          </div>

          <div className="p-6 bg-[#EFF7EE] rounded-2xl border border-[#CFE4CD] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#1E5E3A] text-white font-bold flex items-center justify-center font-mono mb-4 text-sm">
              03
            </div>
            <h3 className="font-serif text-lg font-bold text-[#163627] mb-2">
              Confirm &amp; Fast Dispatch
            </h3>
            <p className="text-xs text-[#4A5747] leading-relaxed">
              We confirm item availability and send UPI payment details. Your parcel dispatches within 24–48 hours with live tracking.
            </p>
          </div>
        </div>

        {/* Clear Policy Highlight Box */}
        <div className="mt-8 p-4 sm:p-5 bg-gradient-to-r from-[#F1F8EC] to-[#FEF9E4] rounded-2xl border border-[#DCE5C5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3E4E3D]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#163627] shrink-0" />
            <div>
              <strong>Transparent Policy:</strong> No Cash on Delivery (Prepaid via UPI/Bank) · Flat ₹70 Shipping Across India
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('how-to-order')}
            className="text-xs font-semibold text-[#163627] hover:text-[#CA8A04] hover:underline whitespace-nowrap shrink-0"
          >
            Read complete shipping &amp; refund terms →
          </button>
        </div>
      </section>

      {/* Bottom Direct CTA */}
      <section className="bg-gradient-to-r from-[#122E21] via-[#163627] to-[#18452B] text-white py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Ready to experience genuine farm herbal care?
          </h2>
          <p className="text-sm text-[#FEF08A] max-w-xl mx-auto leading-relaxed">
            Send us a message on WhatsApp. We answer questions about skin types, scalp routines, and customize combinations for you.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={handleGeneralOrder}
              className="inline-flex items-center gap-2.5 py-3.5 px-8 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-sm font-bold shadow-lg transition-transform active:scale-95"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Chat with Us on WhatsApp (+91 76808 02942)</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
