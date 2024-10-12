import { divide } from '@/divide';
import { describe, expect, it } from 'vitest';

import { expectFailureResult, expectSuccessResult } from './test-utils';

describe('divide function', () => {
  it('should correctly divide two numbers', () => {
    const result = divide({ dividend: 10, divisor: 2 });
    expectSuccessResult(result);
    if (result.success) {
      expect(result.data).toBe(5);
    }
  });

  it('should handle division by zero', () => {
    const result = divide({ dividend: 10, divisor: 0 });
    expectFailureResult(result);
    expect(result.error.code).toBe('DIVISION_BY_ZERO');
    expect(result.error.message).toBe('Cannot divide by zero');
    expect(result.error.details).toEqual({ dividend: 10, divisor: 0 });
  });

  it('should correctly divide negative numbers', () => {
    const result = divide({ dividend: -10, divisor: 2 });
    expectSuccessResult(result);
    if (result.success) {
      expect(result.data).toBe(-5);
    }
  });

  it('should handle fractional results', () => {
    const result = divide({ dividend: 10, divisor: 3 });
    expectSuccessResult(result);
    if (result.success) {
      expect(result.data).toBeCloseTo(3.3333, 4);
    }
  });
});
