/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActivePage, Product, ProductVariant, OrderItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { WhatsAppOrderDrawer } from './components/WhatsAppOrderDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { HomeView } from './views/HomeView';
import { StoryView } from './views/StoryView';
import { FarmView } from './views/FarmView';
import { ProcessView } from './views/ProcessView';
import { ProductsView } from './views/ProductsView';
import { HowToOrderView } from './views/HowToOrderView';
import { FAQView } from './views/FAQView';
import { ContactView } from './views/ContactView';
import { PrivacyPolicyView } from './views/PrivacyPolicyView';
import { ClientChecklistModal } from './components/ClientChecklistModal';
import { Check, Shield, X } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [cookieBannerDismissed, setCookieBannerDismissed] = useState(false);

  // Sync scroll to top on page switch
  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toast timer
  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 2800);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const handleAddToOrderList = (product: Product, variant: ProductVariant) => {
    setOrderItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedVariant.size === variant.size
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [...prev, { product, selectedVariant: variant, quantity: 1 }];
      }
    });

    setToastMessage(`Added ${product.name} (${variant.size}) to WhatsApp Order List`);
  };

  const handleUpdateQuantity = (productId: string, size: string, delta: number) => {
    setOrderItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.selectedVariant.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as OrderItem[];
    });
  };

  const handleRemoveItem = (productId: string, size: string) => {
    setOrderItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedVariant.size === size)
      )
    );
  };

  const handleClearList = () => {
    setOrderItems([]);
  };

  const isInOrderList = (productId: string, variantSize: string) => {
    return orderItems.some(
      (item) => item.product.id === productId && item.selectedVariant.size === variantSize
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#EEF6E8]/90 via-[#FAF5DD]/90 to-[#F0F7EA]/90 text-[#1F281E] selection:bg-[#FEF08A] selection:text-[#163627]">
      {/* Top Bar Contract Compliant Header */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        orderItems={orderItems}
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
      />

      {/* Main Content View Container */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomeView
            onSelectProduct={setSelectedProduct}
            onAddToOrderList={handleAddToOrderList}
            isInOrderList={isInOrderList}
            onNavigate={handleNavigate}
            onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
          />
        )}

        {activePage === 'products' && (
          <ProductsView
            onSelectProduct={setSelectedProduct}
            onAddToOrderList={handleAddToOrderList}
            isInOrderList={isInOrderList}
          />
        )}

        {activePage === 'story' && <StoryView />}

        {activePage === 'farm' && <FarmView />}

        {activePage === 'process' && <ProcessView />}

        {activePage === 'how-to-order' && <HowToOrderView />}

        {activePage === 'faq' && <FAQView />}

        {activePage === 'contact' && <ContactView />}

        {activePage === 'privacy' && <PrivacyPolicyView />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenChecklist={() => setIsChecklistOpen(true)}
      />

      {/* Mobile Sticky Bar (< 15% viewport cap) */}
      <MobileStickyBar
        orderItems={orderItems}
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
      />

      {/* WhatsApp Multi-Item Order Drawer */}
      <WhatsAppOrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        items={orderItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearList={handleClearList}
        onBrowseProducts={() => handleNavigate('products')}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToOrderList={handleAddToOrderList}
        isInOrderList={isInOrderList}
        onNavigateToFarm={() => handleNavigate('farm')}
      />

      {/* Client Handover & Deliverables Checklist Modal */}
      <ClientChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Subtle Privacy & Zero-Tracking Notice */}
      {!cookieBannerDismissed && (
        <aside
          aria-label="Privacy and Zero Tracking Notice"
          className="bg-[#122A1E] text-[#D1E0D7] text-[11px] py-1.5 px-4 flex items-center justify-between gap-2 border-b border-[#1C3E2D] relative z-50"
        >
          <div className="mx-auto flex items-center gap-1.5">
            <Shield className="w-3 h-3 text-[#25D366] shrink-0" />
            <span>
              Zero personal data tracking. All orders happen privately on WhatsApp.
            </span>
            <button
              type="button"
              onClick={() => handleNavigate('privacy')}
              className="underline text-[#FEF08A] font-semibold ml-1 hover:text-white"
            >
              Privacy Policy
            </button>
          </div>
          <button
            type="button"
            onClick={() => setCookieBannerDismissed(true)}
            className="p-1 text-[#8FA395] hover:text-[#FEF08A]"
            aria-label="Dismiss notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}

      {/* Toast Notification when adding items to list */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-18 sm:bottom-6 right-4 sm:right-6 z-50 bg-[#163627] text-white py-2.5 px-4 rounded-xl shadow-xl flex items-center gap-2 text-xs font-medium border border-[#2E6B47] animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <div className="w-4 h-4 rounded-full bg-[#E5A91A] text-[#163627] flex items-center justify-center shrink-0">
            <Check className="w-2.5 h-2.5 stroke-[3]" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
