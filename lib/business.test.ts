import { describe, expect, it } from 'vitest';
import { calculateCartTotal, canReviewProduct, validateOrderPayload } from '@/lib/business';

describe('cart totals', () => {
  it('calculates totals correctly', () => {
    expect(calculateCartTotal([{ quantity: 2, price: 50 }, { quantity: 1, price: 120 }])).toBe(220);
  });
});

describe('order input validation (client-side only)', () => {
  it('rejects mismatched totals', () => {
    expect(() => validateOrderPayload({ total: 101, items: [{ quantity: 2, price: 50 }] })).toThrow('Order total mismatch');
  });
  it('accepts matched totals', () => {
    expect(validateOrderPayload({ total: 100, items: [{ quantity: 2, price: 50 }] })).toBe(true);
  });
  it('rejects zero, negative, fractional, and non-finite quantities', () => {
    for (const quantity of [0, -1, 1.5, Number.NaN]) {
      expect(() => validateOrderPayload({ total: 100, items: [{ quantity, price: 100 }] })).toThrow('Invalid item quantity or price');
    }
  });
  it('rejects invalid prices', () => {
    for (const price of [0, -2, Number.NaN, Number.POSITIVE_INFINITY]) {
      expect(() => validateOrderPayload({ total: 100, items: [{ quantity: 1, price }] })).toThrow('Invalid item quantity or price');
    }
  });
  it('rejects an empty order', () => {
    expect(() => validateOrderPayload({ total: 0, items: [] })).toThrow('Invalid order payload');
  });
});

describe('review gating helper', () => {
  it('requires both purchase and active product flags', () => {
    expect(canReviewProduct({ hasPurchased: true, isActive: true })).toBe(true);
    expect(canReviewProduct({ hasPurchased: false, isActive: true })).toBe(false);
    expect(canReviewProduct({ hasPurchased: true, isActive: false })).toBe(false);
  });
});
