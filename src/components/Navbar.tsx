import React, { useState } from 'react';
import { ActivePage, OrderItem } from '../types';
import { MessageSquare, Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  orderItems: OrderItem[];
  onOpenOrderDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  orderItems,
  onOpenOrderDrawer
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItemCount = orderItems.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks: { label: string; page: ActivePage }[] = [
    { label: 'Products', page: 'products' },
    { label: 'Our Story', page: 'story' },
    { label: 'The Farm', page: 'farm' },
    { label: 'Process', page: 'process' },
    { label: 'How to Order', page: 'how-to-order' },
  ];

  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F2F7ED]/95 backdrop-blur-md border-b border-[#D8E4C5] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16 sm:h-18">
          {/* Zone 1: Single text element wordmark */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#163627] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity text-left flex items-center gap-1.5"
          >
            <span>Krithveda Naturals</span>
            <span className="w-2 h-2 rounded-full bg-[#E5A91A] shadow-xs" title="Grown on our farm · Pure botanicals" />
          </button>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#3E4E3D]">
            {navLinks.map((link) => (
              <button
                key={link.page}
                type="button"
                onClick={() => handleNavClick(link.page)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                  activePage === link.page
                    ? 'text-[#163627] font-semibold'
                    : 'hover:text-[#163627]'
                }`}
              >
                {link.label}
                {activePage === link.page && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E5A91A] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onOpenOrderDrawer}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-[#163627] hover:bg-[#1E5E3A] border border-[#2B5A42] rounded-xl transition-all shadow-xs active:scale-[0.98] whitespace-nowrap shrink-0"
              aria-label="View WhatsApp order list"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#E5A91A]" />
              <span className="hidden sm:inline">Order List</span>
              {totalItemCount > 0 ? (
                <span className="bg-[#E5A91A] text-[#163627] text-[10px] font-bold px-1.5 py-0.2 rounded-full font-mono">
                  {totalItemCount}
                </span>
              ) : (
                <span className="sm:hidden">Order</span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#3E4E3D] hover:text-[#163627] rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#D8E4C5] bg-[#F2F7ED] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.page}
              type="button"
              onClick={() => handleNavClick(link.page)}
              className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-medium transition-colors ${
                activePage === link.page
                  ? 'bg-[#E4ECD5] text-[#163627] font-semibold border-l-4 border-[#E5A91A]'
                  : 'text-[#3E4E3D] hover:bg-[#EAF0DE] hover:text-[#163627]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#D8E4C5] flex flex-col gap-2">
            <button
              type="button"
              onClick={() => handleNavClick('faq')}
              className="text-left py-2 px-3 text-xs font-medium text-[#5B6D5A] hover:text-[#163627]"
            >
              Frequently Asked Questions
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 px-3 text-xs font-medium text-[#5B6D5A] hover:text-[#163627]"
            >
              Contact &amp; WhatsApp Support
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
