import React from 'react';
import { OrderItem } from '../types';
import { WHATSAPP_NUMBER } from '../data/products';
import { MessageSquare, ShoppingBag } from 'lucide-react';

interface MobileStickyBarProps {
  orderItems: OrderItem[];
  onOpenOrderDrawer: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  orderItems,
  onOpenOrderDrawer
}) => {
  const totalItemCount = orderItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleGenericWhatsApp = () => {
    const text = encodeURIComponent("Hi Krithveda Naturals, I'd like to place an order from your farm catalog.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside
      aria-label="Mobile Quick Ordering Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FCFAF4]/95 backdrop-blur-md border-t border-[#DCE5C5] px-3.5 py-2 shadow-lg"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Primary WhatsApp Order Button */}
        <button
          type="button"
          onClick={handleGenericWhatsApp}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] active:bg-[#1EBE5D] text-white rounded-xl text-xs font-bold shadow-xs active:scale-[0.98] transition-transform"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Order on WhatsApp</span>
        </button>

        {/* Quick Order List trigger */}
        <button
          type="button"
          onClick={onOpenOrderDrawer}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#163627] active:bg-[#1E5E3A] border border-[#2B5A42] text-white rounded-xl text-xs font-semibold shadow-xs active:scale-[0.98] transition-transform whitespace-nowrap"
        >
          <ShoppingBag className="w-4 h-4 text-[#E5A91A]" />
          <span>List</span>
          {totalItemCount > 0 && (
            <span className="bg-[#E5A91A] text-[#163627] text-[10px] font-bold px-1.5 py-0.2 rounded-full font-mono">
              {totalItemCount}
            </span>
          )}
        </button>
      </div>
    </aside>
  );
};
