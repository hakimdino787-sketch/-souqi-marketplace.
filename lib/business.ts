export function calculateCartTotal(items: Array<{ quantity: number; price: number }>) {
  return items.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

export function validateOrderPayload(payload: { total: number; items: Array<{ quantity: number; price: number }> }) {
  const expected = calculateCartTotal(payload.items);
  if (payload.total !== expected) {
    throw new Error('Order total mismatch');
  }
  if (payload.items.some((item) => item.quantity <= 0 || item.price <= 0)) {
    throw new Error('Invalid item quantity or price');
  }
  return true;
}

export function canReviewProduct({ hasPurchased, isActive }: { hasPurchased: boolean; isActive: boolean }) {
  return hasPurchased && isActive;
}
