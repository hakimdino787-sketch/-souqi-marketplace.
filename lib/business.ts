export type CartItem = { quantity: number; price: number };

export function calculateCartTotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

/**
 * Client-side sanity checks only. This is NOT a trusted checkout boundary:
 * production order creation must re-read current prices and stock on a server.
 */
export function validateOrderPayload(payload: { total: number; items: CartItem[] }) {
  if (!Number.isFinite(payload.total) || payload.total < 0 || payload.items.length === 0) {
    throw new Error('Invalid order payload');
  }
  if (payload.items.some((item) =>
    !Number.isSafeInteger(item.quantity) || item.quantity <= 0 ||
    !Number.isFinite(item.price) || item.price <= 0
  )) {
    throw new Error('Invalid item quantity or price');
  }
  const expected = calculateCartTotal(payload.items);
  if (!Number.isFinite(expected) || Math.abs(payload.total - expected) > 0.001) {
    throw new Error('Order total mismatch');
  }
  return true;
}

export function canReviewProduct({ hasPurchased, isActive }: { hasPurchased: boolean; isActive: boolean }) {
  return hasPurchased && isActive;
}
