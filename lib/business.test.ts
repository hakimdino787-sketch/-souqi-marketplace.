import { describe, expect, it } from 'vitest';
import { calculateCartTotal, canReviewProduct, validateOrderPayload } from '@/lib/business';

describe('cart totals', () => {
  it('calculates totals correctly', () => {
    expect(calculateCartTotal([{ quantity: 2, price: 50 }, { quantity: 1, price: 120 }])).toBe(220);
  });
});

describe('order validation', () => {
  it('rejects mismatched totals', () => {
    expect(() => validateOrderPayload({ total: 100, items: [{ quantity: 2, price: 50 }] })).toThrow('Order total mismatch');
  });

  it('accepts matched totals', () => {
    expect(validateOrderPayload({ total: 100, items: [{ quantity: 2, price: 50 }] })).toBe(true);
  });
});

describe('review gating', () => {
  it('allows reviews only for verified purchases', () => {
    expect(canReviewProduct({ hasPurchased: true, isActive: true })).toBe(true);
    expect(canReviewProduct({ hasPurchased: false, isActive: true })).toBe(false);
  });
});
