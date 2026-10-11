import React from 'react';
import { OrderItem } from '../types';
import { FLAT_SHIPPING_CHARGE, buildWhatsAppMultiOrderUrl } from '../data/products';
import { X, Plus, Minus, Trash2, MessageSquare, ShieldAlert } from 'lucide-react';

interface WhatsAppOrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: OrderItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onClearList: () => void;
  onBrowseProducts: () => void;
}

export const WhatsAppOrderDrawer: React.FC<WhatsAppOrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearList,
  onBrowseProducts
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.selectedVariant.price * item.quantity,
    0
  );
  const total = items.length > 0 ? subtotal + FLAT_SHIPPING_CHARGE : 0;

  const handleSendToWhatsApp = () => {
    const formattedItems = items.map((item) => ({
      name: item.product.name,
      size: item.selectedVariant.size,
      price: item.selectedVariant.price,
      quantity: item.quantity
    }));
    const url = buildWhatsAppMultiOrderUrl(formattedItems);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#FCFAF4] h-full shadow-2xl flex flex-col justify-between border-l border-[#DCE5C5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#DCE5C5] bg-gradient-to-r from-[#EFF6EB] to-[#FAF5DE] flex items-center justify-between">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#163627]">
              WhatsApp Order List
            </h3>
            <p className="text-xs text-[#6E7B6C] mt-0.5">
              {items.length === 0
                ? 'Your list is currently empty'
                : `${items.length} item${items.length > 1 ? 's' : ''} ready to message`}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                type="button"
                onClick={onClearList}
                className="text-xs text-[#991B1B] hover:underline px-2 py-1"
              >
                Clear all
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-[#6E7B6C] hover:text-[#163627] hover:bg-black/5 transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Body Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="py-12 flex flex-col items-center justify-center text-center px-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#EFF6EB] to-[#FAF5DE] text-[#CA8A04] flex items-center justify-center mb-4 border border-[#DCE5C5]">
                <MessageSquare className="w-8 h-8 opacity-80" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-[#163627]">
                No products added yet
              </h4>
              <p className="text-xs text-[#6E7B6C] max-w-xs mt-1.5 leading-relaxed">
                Add products from our catalog to build a customized WhatsApp message with total calculation.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBrowseProducts();
                }}
                className="mt-5 py-2.5 px-5 bg-[#163627] hover:bg-[#1E5E3A] text-white text-xs font-semibold rounded-xl transition-colors shadow-xs border border-[#2B5A42]"
              >
                Browse Farm Catalog
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => {
                const itemTotal = item.selectedVariant.price * item.quantity;
                return (
                  <div
                    key={`${item.product.id}-${item.selectedVariant.size}`}
                    className="p-3.5 rounded-xl border border-[#DFE6C8] bg-gradient-to-r from-[#FCFAF4] to-[#F7FAF1] flex items-center justify-between gap-3 shadow-2xs"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-[#163627] truncate">
                        {item.product.name}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-[#6E7B6C] mt-0.5 font-mono">
                        <span>{item.selectedVariant.size}</span>
                        <span>·</span>
                        <span>₹{item.selectedVariant.price} each</span>
                      </div>
                      <div className="text-xs font-bold text-[#163627] font-mono mt-1">
                        ₹{itemTotal}
                      </div>
                    </div>

                    {/* Stepper & Remove */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-[#DFD5A8] rounded-lg bg-[#FAF5DE] overflow-hidden shadow-2xs">
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.selectedVariant.size, -1)
                          }
                          className="p-1.5 text-[#163627] hover:bg-[#F3EBCC] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-semibold font-mono text-[#163627]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.selectedVariant.size, 1)
                          }
                          className="p-1.5 text-[#163627] hover:bg-[#F3EBCC] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          onRemoveItem(item.product.id, item.selectedVariant.size)
                        }
                        className="p-1.5 text-[#991B1B] hover:bg-red-50 rounded-lg transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Drawer Footer & Total Calculation */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#DCE5C5] bg-gradient-to-r from-[#EFF6EB] to-[#FAF5DE] space-y-4">
            <div className="space-y-1.5 text-xs text-[#4A5747]">
              <div className="flex justify-between">
                <span>Items Subtotal:</span>
                <span className="font-mono font-medium text-[#163627]">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Flat Shipping (All-India):</span>
                <span className="font-mono font-medium text-[#163627]">₹{FLAT_SHIPPING_CHARGE}</span>
              </div>
              <div className="pt-2 border-t border-[#DCE5C5] flex justify-between text-sm font-bold text-[#163627]">
                <span>Total Payable:</span>
                <span className="font-mono text-base text-[#163627]">₹{total}</span>
              </div>
            </div>

            {/* No-COD reminder */}
            <div className="flex items-start gap-2 p-2.5 bg-[#FEFBE8] rounded-xl text-[11px] text-[#92400E] border border-[#F5E7AE]">
              <ShieldAlert className="w-4 h-4 shrink-0 text-[#D97706] mt-0.5" />
              <span>
                <strong>No Cash on Delivery.</strong> Payment is verified via UPI or bank transfer on WhatsApp before dispatch.
              </span>
            </div>

            {/* WhatsApp Send Button */}
            <button
              type="button"
              onClick={handleSendToWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors shadow-sm active:scale-[0.98] text-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Send Order to WhatsApp (₹{total})</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
